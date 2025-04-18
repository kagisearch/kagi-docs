<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  onMounted,
  nextTick,
  type PropType,
} from 'vue'
import { watchDebounced, useEventListener } from '@vueuse/core' // VueUse helpers

// Type definitions

// Field definition for each column
interface FieldDefinition {
  key: string
  label: string
  sortable?: boolean
  type?:
    | 'string'
    | 'number'
    | 'size'
    | 'duration'
    | 'weight'
    | 'yesno'
    | 'natural'
    | 'date'
    | 'semver'
    | 'string_ci'
    | 'abbrev'
    | 'currency'
  locale?: string
  // Custom compare can return null/undefined → treated as equal
  compare?: (
    a: any,
    b: any,
    ctx: { rowA: Item; rowB: Item },
  ) => number | null | undefined
}

// Sort descriptor
interface SortState {
  key: string
  asc: boolean
}

// Generic row item
type Item = Record<string, unknown> & { id?: string | number }

// Optional custom filter fn
type FilterFunction = (
  row: Item,
  query: string,
  fields: FieldDefinition[],
) => boolean

// Props

const props = defineProps({
  fields: {
    type: Array as PropType<FieldDefinition[]>,
    required: true,
    validator: (v: FieldDefinition[]) =>
      Array.isArray(v) &&
      v.every(
        (f) =>
          f &&
          typeof f.key === 'string' &&
          typeof f.label === 'string' &&
          (typeof f.sortable === 'boolean' || typeof f.sortable === 'undefined') &&
          (typeof f.type === 'string' || typeof f.type === 'undefined') &&
          (typeof f.locale === 'string' || typeof f.locale === 'undefined') &&
          (typeof f.compare === 'function' || typeof f.compare === 'undefined'),
      ),
  },
  items: { type: Array as PropType<Item[]>, required: true },
  filter: { type: Boolean, default: false },
  filterFn: { type: Function as PropType<FilterFunction>, default: null },
  persistState: { type: Boolean, default: false },
  persistenceId: { type: String, default: 'table' },
  // NEW: choose click‑cycle behaviour → 'binary' = asc⇆desc, 'tri' = asc ⇆ desc ⇆ off
  sortMode: {
    type: String as PropType<'binary' | 'tri'>,
    default: 'binary',
    validator: (v: string) => ['binary', 'tri'].includes(v),
  },
})

// Emits

const emit = defineEmits<{
  (e: 'update:filter', v: string): void
  (e: 'update:sort', v: SortState[]): void
}>()

// Reactive state

const searchInput = ref('')
const debouncedSearch = ref('')
const normalizedQuery = computed(() =>
  debouncedSearch.value.trim().toLowerCase(),
)

const sortStack = ref<SortState[]>([])
const isFiltering = ref(false) // Loading indicator

// Debounce Search

watchDebounced(
  searchInput,
  (val) => {
    isFiltering.value = true
    debouncedSearch.value = val
  },
  { debounce: 300, maxWait: 1000 },
)

// Turn off loading flag once computed finished
watch(
  () => debouncedSearch.value,
  async () => {
    await nextTick()
    isFiltering.value = false
  },
)

// Strip html (cached)

const stripCache: Map<string, string> = new Map()
// Strip all tags; cache & O(1) eviction
function stripHtml(raw: unknown): string {
  const s = String(raw ?? '')
  if (!s) return ''
  const c = stripCache.get(s)
  if (c !== undefined) return c
  const plain = s.includes('<') || s.includes('>') ? s.replace(/<[^>]*>/g, '') : s
  stripCache.set(s, plain)
  if (stripCache.size > 5000) stripCache.clear()
  return plain
}

// Helpers & caches

const fieldDefCache = new Map<string, FieldDefinition | undefined>()
function getFieldDefinition(key: string) {
  if (fieldDefCache.has(key)) return fieldDefCache.get(key)
  const def = props.fields.find((f) => f.key === key)
  fieldDefCache.set(key, def)
  return def
}
watch(() => props.fields, () => fieldDefCache.clear(), { deep: true })

const toPrimitive = (c: unknown) =>
  typeof c === 'object' && c !== null && 'value' in c ? (c as any).value : c

const saferCompare = (a: number, b: number) => (a < b ? -1 : a > b ? 1 : 0)

// Collators
const defaultCollator = new Intl.Collator()
const naturalCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })
const collatorCache = new Map<string, Intl.Collator>()
function getCaseInsensitiveCollator(locale?: string) {
  const k = locale ?? 'default'
  if (!collatorCache.has(k))
    collatorCache.set(k, new Intl.Collator(locale, { sensitivity: 'accent' }))
  return collatorCache.get(k)!
}

// Parsers

const sizeMul   = { b: 1, kb: 1024, mb: 1024 ** 2, gb: 1024 ** 3, tb: 1024 ** 4, pb: 1024 ** 5 }
const durMul    = { ns: 1e-9, us: 1e-6, ms: 1e-3,  s: 1, min: 60, h: 3600, d: 86400 }
const weightMul = { mg: 0.001, g: 1, kg: 1000, t: 1e6 }

// Parse a number with unit suffix (kb, ms, kg …)
function parseUnitVal(v: unknown, mul: Record<string, number>): number | null {
  if (v == null) return null
  if (typeof v === 'number') return v
  if (typeof v !== 'string') return null
  const m = v.trim().toLowerCase().match(/(-?[\d.,]+)\s*([a-z]+)\b/)
  if (!m) {
    const n = parseFloat(v.replace(/,/g, '.'))
    return isNaN(n) ? null : n
  }
  const num = parseFloat(m[1].replace(/,/g, '.'))
  const unit = m[2]
  if (isNaN(num) || !(unit in mul)) return null
  return num * mul[unit]
}

// Parse 12k / 3.4M style abbreviations
function parseAbbrev(v: unknown): number | null {
  if (v == null) return null
  if (typeof v === 'number') return v
  if (typeof v !== 'string') return null
  const m = v.trim().toLowerCase().match(/^(-?[\d.,]+)\s*([kmb])?$/)
  if (!m) return null
  const n = parseFloat(m[1].replace(/,/g, '.'))
  if (isNaN(n)) return null
  const mul = { k: 1e3, m: 1e6, b: 1e9 }[m[2] as string] || 1
  return n * mul
}

// Parse currencies with thousands/decimal separators
function parseCurrency(v: unknown): number | null {
  if (v == null) return null
  if (typeof v === 'number') return v
  if (typeof v !== 'string') return null
  let s = v.trim().replace(/[^\d.,\-]/g, '')
  if (!s) return null
  const lastDot = s.lastIndexOf('.')
  const lastComma = s.lastIndexOf(',')
  if (lastComma > lastDot) s = s.replace(/\./g, '').replace(',', '.')
  else if (lastDot > lastComma) s = s.replace(/,/g, '')
  else if (lastComma !== -1) {
    if (s.length - lastComma - 1 <= 2) s = s.replace(',', '.')
    else s = s.replace(/,/g, '')
  } else if (lastDot !== -1) s = s.replace(/\./g, '')
  const n = parseFloat(s)
  return isNaN(n) ? null : n
}

// Comparison Strategies

type CompareStrategy = (a: any, b: any, asc: boolean, def?: FieldDefinition) => number

const cmp: Record<string, CompareStrategy> = {
  _unit(a, b, asc, mul) {
    const bad = asc ? Infinity : -Infinity
    return saferCompare(parseUnitVal(a, mul) ?? bad, parseUnitVal(b, mul) ?? bad)
  },
  size:     (a, b, asc) => cmp._unit(a, b, asc, sizeMul),
  duration: (a, b, asc) => cmp._unit(a, b, asc, durMul),
  weight:   (a, b, asc) => cmp._unit(a, b, asc, weightMul),
  number(a, b, asc) {
    const bad = asc ? Infinity : -Infinity
    const num = (v: unknown) =>
      typeof v === 'number'
        ? v
        : ((n) => (isNaN(n) ? bad : n))(parseFloat(String(stripHtml(v ?? '')).replace(/,/g, '.')))
    return saferCompare(num(a), num(b))
  },
  abbrev(a, b, asc)   { const bad = asc ? Infinity : -Infinity; return saferCompare(parseAbbrev(a) ?? bad, parseAbbrev(b) ?? bad) },
  currency(a, b, asc) { const bad = asc ? Infinity : -Infinity; return saferCompare(parseCurrency(a) ?? bad, parseCurrency(b) ?? bad) },
  yesno(a, b) {
    const map = (v: unknown) => {
      const l = String(v ?? '').trim().toLowerCase()
      if (['no', 'false', '0', 'n'].includes(l)) return 0
      if (['yes', 'true', '1', 'y'].includes(l)) return 1
      if (typeof v === 'boolean') return v ? 1 : 0
      if (v == null || l === '') return -1
      return 1
    }
    return map(a) - map(b)
  },
  natural:   (a, b) => naturalCollator.compare(stripHtml(a ?? ''), stripHtml(b ?? '')),
  date(a, b, asc) {
    const bad = asc ? Infinity : -Infinity
    const ts = (v: unknown) => (typeof v === 'number' ? v : Date.parse(String(v ?? '')) || bad)
    return saferCompare(ts(a), ts(b))
  },
  semver(a, b) {
    const parts = (v: unknown) => String(stripHtml(v ?? '')).split('.').map(Number)
    const [a1 = 0, a2 = 0, a3 = 0] = parts(a)
    const [b1 = 0, b2 = 0, b3 = 0] = parts(b)
    return a1 - b1 || a2 - b2 || a3 - b3
  },
  string_ci(a, b, _asc, def) {
    return getCaseInsensitiveCollator(def?.locale).compare(stripHtml(a ?? ''), stripHtml(b ?? ''))
  },
  string(a, b) {
    return defaultCollator.compare(stripHtml(a ?? ''), stripHtml(b ?? ''))
  },
}

// Wrap to ensure dir toggle AFTER special‑case handling
function compareCells(a: unknown, b: unknown, def: FieldDefinition | undefined, asc: boolean) {
  const type = def?.type ?? 'string'
  const fn = cmp[type] ?? cmp.string
  const res = fn(toPrimitive(a), toPrimitive(b), asc, def)
  return asc ? res : -res
}

// URL persistence

const qSortKey   = `${props.persistenceId}-sort`
const qSearchKey = `${props.persistenceId}-q`

function updateUrlQuery() {
  if (!props.persistState || typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  debouncedSearch.value ? params.set(qSearchKey, debouncedSearch.value) : params.delete(qSearchKey)
  sortStack.value.length ? params.set(qSortKey, JSON.stringify(sortStack.value)) : params.delete(qSortKey)
  const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}${window.location.hash}`
  window.history.replaceState(window.history.state, '', newUrl)
}

watch(debouncedSearch, (v) => { emit('update:filter', v); updateUrlQuery() })
watch(sortStack, (v) => { emit('update:sort', [...v]); updateUrlQuery() }, { deep: true })

onMounted(() => {
  if (!props.persistState || typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const q = params.get(qSearchKey)
  if (q) { searchInput.value = q; debouncedSearch.value = q }
  const sortStr = params.get(qSortKey)
  if (sortStr) {
    try {
      const parsed = JSON.parse(sortStr)
      if (Array.isArray(parsed) && parsed.every((s) => 'key' in s && 'asc' in s)) sortStack.value = parsed
    } catch { /* ignore */ }
  }
})

// Computed data

const filteredData = computed<Item[]>(() => {
  // 1. Filtering
  let rows = normalizedQuery.value
    ? props.items.filter((r) => {
        if (props.filterFn) return props.filterFn(r, normalizedQuery.value, props.fields)
        return props.fields.some((f) =>
          String(toPrimitive(r[f.key]) ?? '').toLowerCase().includes(normalizedQuery.value),
        )
      })
    : props.items

  // 2. Sorting (stable for legacy browsers)
  if (!sortStack.value.length) return rows
  return [...rows]
    .map((row, i) => ({ row, i }))
    .sort((A, B) => {
      const a = A.row
      const b = B.row
      for (const { key, asc } of sortStack.value) {
        const def = getFieldDefinition(key)
        if (def?.sortable === false) continue
        let res: number | null | undefined = 0
        if (def?.compare) {
          try { res = def.compare(a[key], b[key], { rowA: a, rowB: b }) ?? 0 }
          catch (err) { console.error(`custom compare error for "${key}"`, err) }
          if (res !== 0) return asc ? res : -res
        } else {
          res = compareCells(a[key], b[key], def, asc)
          if (res !== 0) return res
        }
      }
      // Stable tie‑break
      return A.i - B.i
    })
    .map((p) => p.row)
})

// Interaction helpers

// Esc key clears search input
useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape' && searchInput.value) searchInput.value = ''
})

// ARIA sort attribute helper
function getAriaSort(f: FieldDefinition): 'ascending' | 'descending' | 'none' {
  if (f.sortable === false) return 'none'
  const s = sortStack.value.find((v) => v.key === f.key)
  if (!s) return 'none'
  return s.asc ? 'ascending' : 'descending'
}

// Header click / key handling
function handleHeaderClick(f: FieldDefinition, shift: boolean) {
  if (f.sortable === false) return
  const idx = sortStack.value.findIndex((s) => s.key === f.key)

  // Click without shift
  if (!shift) {
    if (props.sortMode === 'binary') {
      // Binary: asc⇆desc
      if (idx === 0) sortStack.value = [{ key: f.key, asc: !sortStack.value[0].asc }]
      else sortStack.value = [{ key: f.key, asc: true }]
    } else {
      // Tri‑state: asc ⇆ desc ⇆ off
      if (idx === 0) {
        if (sortStack.value[0].asc) sortStack.value = [{ key: f.key, asc: false }]
        else sortStack.value = []
      } else sortStack.value = [{ key: f.key, asc: true }]
    }
    return
  }

  // Shift‑click (multi‑column)
  if (idx !== -1) {
    if (props.sortMode === 'binary') {
      sortStack.value[idx].asc = !sortStack.value[idx].asc
      sortStack.value = [...sortStack.value]
    } else {
      // tri‑state inside stack
      if (sortStack.value[idx].asc) sortStack.value[idx].asc = false
      else sortStack.value.splice(idx, 1)
    }
  } else {
    sortStack.value.push({ key: f.key, asc: true })
  }
}
</script>

<template>
  <div class="vp-json-table mb-4">
    <!-- Filter box -->
    <input
      v-if="filter"
      v-model="searchInput"
      type="search"
      class="vp-json-table-filter w-full p-2 mb-4 border rounded text-sm"
      placeholder="Search table…"
      aria-label="Search table data"
    />

    <!-- Loading indicator -->
    <div v-if="isFiltering" class="text-xs text-gray-500 mb-2">
      Filtering…
    </div>

    <!-- SR live region -->
    <p class="sr-only" aria-live="polite" aria-atomic="true">
      {{ filteredData.length }} rows displayed.
      <span v-if="sortStack.length">
        Sorted by
        {{ sortStack
          .map(
            (s) =>
              `${getFieldDefinition(s.key)?.label ?? s.key} ${
                s.asc ? 'ascending' : 'descending'
              }`,
          )
          .join(', then by ') }}.
      </span>
    </p>

    <!-- Scroll wrapper -->
    <div class="overflow-x-auto">
      <table
        class="vp-json-table-element min-w-full border-collapse border text-sm"
        aria-live="polite"
      >
        <caption class="vp-json-table-caption sr-only">
          <slot name="caption">Sortable and filterable data table.</slot>
        </caption>

        <!-- Header -->
        <thead>
          <tr class="vp-json-table-header-row">
            <th
              v-for="field in fields"
              :key="field.key"
              @click="handleHeaderClick(field, $event.shiftKey)"
              :class="[
                'vp-json-table-th border px-2 py-1 bg-gray-100 text-left',
                field.sortable !== false ? 'cursor-pointer select-none' : '',
              ]"
              scope="col"
              :aria-sort="getAriaSort(field)"
              :aria-label="`Sort by ${field.label}${field.sortable === false ? ' (not sortable)' : ''}`"
              :tabindex="field.sortable !== false ? 0 : undefined"
              @keydown.enter.prevent="handleHeaderClick(field, false)"
              @keydown.space.prevent="handleHeaderClick(field, false)"
            >
              {{ field.label }}
              <!-- sort icons -->
              <span v-if="field.sortable !== false" class="vp-json-table-sort-icon" aria-hidden="true">
                <template v-if="sortStack.some((s) => s.key === field.key)">
                  {{ sortStack.find((s) => s.key === field.key)?.asc ? ' ↑' : ' ↓' }}
                </template>
                <template v-else>
                  <span class="opacity-50"> ↕</span>
                </template>
              </span>
              <!-- level badge -->
              <sup v-if="sortStack.findIndex((s) => s.key === field.key) > 0" class="vp-json-table-sort-lvl" aria-hidden="true">
                {{ sortStack.findIndex((s) => s.key === field.key) + 1 }}
              </sup>
            </th>
          </tr>
        </thead>

        <!-- Body -->
        <tbody class="vp-json-table-body">
          <tr v-if="items.length === 0" class="vp-json-table-empty-row">
            <td :colspan="fields.length">
              <slot name="empty-data">No data available.</slot>
            </td>
          </tr>
          <tr v-else-if="filteredData.length === 0" class="vp-json-table-empty-row">
            <td :colspan="fields.length">
              <slot name="empty-filtered">No matching records found.</slot>
            </td>
          </tr>

          <tr v-for="(row, i) in filteredData" :key="row.id ?? i" class="vp-json-table-data-row">
            <td
              v-for="field in fields"
              :key="field.key"
              role="gridcell"
              class="vp-json-table-td border px-2 py-1 whitespace-nowrap"
            >
              <slot
                :name="`cell(${field.key})`"
                :value="row[field.key]"
                :item="row"
                :field="field"
                :index="i"
              >
                {{
                  typeof row[field.key] === 'object' &&
                  row[field.key] !== null &&
                  'value' in row[field.key]
                    ? (row[field.key] as any).value ?? ''
                    : row[field.key] ?? ''
                }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.vp-json-table { margin: 1em 0; }
.vp-json-table-filter { border-color: var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); border-radius: 4px; min-width: 200px; }
.vp-json-table-filter:focus { border-color: var(--vp-c-brand-1); outline: none; box-shadow: 0 0 0 1px var(--vp-c-brand-1); }

.vp-json-table-element { width: 100%; border-radius: 4px; overflow: hidden; border-spacing: 0; border-collapse: separate; border: 1px solid var(--vp-c-divider); }
.vp-json-table-th { border-bottom: 2px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); font-weight: 600; padding: 0.6rem 0.8rem; white-space: nowrap; text-align: left; }
.vp-json-table-th:not(:last-child) { border-right: 1px solid var(--vp-c-divider); }
.vp-json-table-th:last-child, .vp-json-table-td:last-child { border-right: none; }

.vp-json-table-th[tabindex='0']:focus { outline: 2px solid var(--vp-c-brand-1); outline-offset: -2px; }

.vp-json-table-td { color: var(--vp-c-text-1); background: var(--vp-c-bg); padding: 0.6rem 0.8rem; border-top: 1px solid var(--vp-c-divider); vertical-align: top; }
.vp-json-table-td:not(:last-child) { border-right: 1px solid var(--vp-c-divider); }
.vp-json-table-data-row:hover .vp-json-table-td { background: var(--vp-c-bg-mute); }

.vp-json-table-empty-row td { color: var(--vp-c-text-2); background: var(--vp-c-bg); padding: 1rem; font-style: italic; text-align: center; }

.vp-json-table-td a { color: var(--vp-c-brand-1); text-decoration: none; font-weight: 500; }
.vp-json-table-td a:hover { text-decoration: underline; color: var(--vp-c-brand-2); }

.vp-json-table-sort-icon { display: inline-block; width: 1em; text-align: center; margin-left: 4px; color: var(--vp-c-text-2); opacity: 0.6; vertical-align: middle; }
.vp-json-table-th[aria-sort]:not([aria-sort='none']) .vp-json-table-sort-icon { color: var(--vp-c-text-1); opacity: 1; }
.vp-json-table-sort-lvl { font-size: 0.6em; margin-left: 2px; color: var(--vp-c-text-2); vertical-align: super; }

/* Screen-reader only text */
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }
</style>