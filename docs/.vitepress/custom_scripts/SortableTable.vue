<script setup>
import { ref, computed } from 'vue'

// --- Props Definition ---
const props = defineProps({
  // Array of objects defining columns:
  // { key, label, sortable?, type:
  //   'string' | 'number' | 'size' | 'duration' | 'weight' | 'yesno'
  // | 'natural' | 'date' | 'semver' | 'string_ci' | 'abbrev' | 'currency' }
  fields: {
    type: Array,
    required: true,
    validator: (value) =>
      Array.isArray(value) &&
      value.every(
        (field) =>
          field &&
          typeof field.key === 'string' &&
          typeof field.label === 'string' &&
          (typeof field.sortable === 'boolean' ||
            typeof field.sortable === 'undefined') &&
          (typeof field.type === 'string' ||
            typeof field.type === 'undefined')
      ),
  },
  items: {
    type: Array,
    required: true,
  },
  filter: {
    type: Boolean,
    default: false,
  },
})

// --- Reactive State ---
const search = ref('')

// multi‑column sort (Shift‑click) -----------------------------
const sortStack = ref([]) // [{ key, asc }]
const sortKey = computed(() => sortStack.value[0]?.key ?? '')
const sortAsc = computed(() => sortStack.value[0]?.asc ?? true)

// helper to know the column's index inside sortStack ---------
function getSortLevel(field) {
  return sortStack.value.findIndex((s) => s.key === field.key)
}

// --- Unit Parsing and Comparison Logic ---
const sizeMultipliers = {
  b: 1,
  kb: 1024,
  mb: 1024 ** 2,
  gb: 1024 ** 3,
  tb: 1024 ** 4,
  pb: 1024 ** 5,
}
const durationMultipliers = {
  ns: 1e-9,
  us: 1e-6,
  ms: 1e-3,
  s: 1,
  min: 60,
  h: 3600,
  d: 3600 * 24,
}
const weightMultipliers = { mg: 0.001, g: 1, kg: 1000, t: 1e6 } // t = metric ton

/**
 * Parses a string value containing a number and a unit into a base numeric value.
 * Handles common units for size, duration, and weight. Also handles comma as decimal separator.
 */
function parseUnitValue(value, multipliers) {
  // Note: value here is already the extracted primitive value (if original was object)
  if (value === null || typeof value === 'undefined') return null
  if (typeof value === 'number') return value
  if (typeof value !== 'string') return null

  const cleanedValue = value.trim().toLowerCase()
  const match = cleanedValue.match(/^(-?[\d.,]+)\s*([a-z]+)$/)

  if (!match) {
    const plainNumber = parseFloat(cleanedValue.replace(',', '.'))
    return !isNaN(plainNumber) ? plainNumber : null
  }

  const numericPart = parseFloat(match[1].replace(',', '.'))
  const unitPart = match[2]

  if (isNaN(numericPart) || typeof multipliers[unitPart] === 'undefined') {
    return null
  }
  return numericPart * multipliers[unitPart]
}

// Helper for abbreviated numbers: 1K / 1.2M / 3B ------------------------
function parseAbbrevNumber(value) {
  if (value == null) return null
  if (typeof value === 'number') return value
  const m = String(value)
    .trim()
    .toLowerCase()
    .match(/^(-?[\d.,]+)\s*([kmb])?$/)
  if (!m) return null
  const n = parseFloat(m[1].replace(',', '.'))
  if (isNaN(n)) return null
  const mul = { k: 1e3, m: 1e6, b: 1e9 }[m[2]] || 1
  return n * mul
}

// Helper for currency strings: $3.10  3,1  € 1 100  1.100 --------------
function parseCurrency(value) {
  if (value == null) return null
  if (typeof value === 'number') return value

  // Strip everything that is not digit, comma, dot, minus, NBSP/thin‑space or apostrophe
  let s = String(value)
    .replace(/[^\d.,\-\u202F'\s]/g, '')
    .replace(/[\u202F'\s]/g, '') // remove spaces / thin spaces / apostrophes

  if (!s) return null

  const lastDot = s.lastIndexOf('.')
  const lastComma = s.lastIndexOf(',')

  const swapComma = () => {
    s = s.replace(',', '.')
  }

  if (lastDot !== -1 && lastComma !== -1) {
    // both separators present -> last one is decimal
    if (lastDot > lastComma) s = s.replace(/,/g, '')
    else {
      s = s.replace(/\./g, '')
      swapComma()
    }
  } else if (lastDot !== -1) {
    const dec = s.length - lastDot - 1
    if (dec !== 1 && dec !== 2) s = s.replace(/\./g, '')
  } else if (lastComma !== -1) {
    const dec = s.length - lastComma - 1
    if (dec === 1 || dec === 2) swapComma()
    else s = s.replace(/,/g, '')
  }

  const n = parseFloat(s)
  return isNaN(n) ? null : n
}

// --- Helper Functions ---
function getFieldDefinition(key) {
  return props.fields.find((field) => field.key === key)
}

// Helper: stable compare that never overflows with Infinity
const saferCompare = (a, b) => (a < b ? -1 : a > b ? 1 : 0)

// Collators for string sorting ---------------------------------
const naturalCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
})

// --- Computed Property for Filtered and Sorted Data ---
const filteredData = computed(() => {
  let result = [...props.items] // Create a shallow copy

  // Helper to get the actual value for sorting/filtering/display if it's an object
  const getActualValue = (v) => {
    if (typeof v === 'object' && v !== null && typeof v.value !== 'undefined')
      return v.value // Return the 'value' property
    return v // Return the primitive value
  }

  // 1. Filtering
  if (props.filter && search.value.trim()) {
    const q = search.value.toLowerCase()
    result = result.filter((row) =>
      props.fields.some((field) => {
        const actualValue = getActualValue(row[field.key]) // Use helper for filtering
        return String(actualValue ?? '').toLowerCase().includes(q)
      })
    )
  }

  // 2. Sorting
  if (sortStack.value.length) {
    result.sort((a, b) => {
      for (const { key, asc } of sortStack.value) {
        const fieldDefinition = getFieldDefinition(key)
        if (!fieldDefinition || fieldDefinition.sortable === false) continue

        const fieldType = fieldDefinition.type || 'string'
        const rawA = a[key]
        const rawB = b[key]
        let valA = getActualValue(rawA)
        let valB = getActualValue(rawB)

        let comparisonResult = 0

        // custom per‑field compare hook
        if (typeof fieldDefinition.compare === 'function') {
          comparisonResult = fieldDefinition.compare(valA, valB, {
            rowA: a,
            rowB: b,
          })
        } else {
          // built‑in compare logic
          let multipliers = null
          if (fieldType === 'size') multipliers = sizeMultipliers
          else if (fieldType === 'duration') multipliers = durationMultipliers
          else if (fieldType === 'weight') multipliers = weightMultipliers

          if (multipliers) {
            const bad = asc ? Infinity : -Infinity
            valA = parseUnitValue(valA, multipliers) ?? bad
            valB = parseUnitValue(valB, multipliers) ?? bad
            comparisonResult = saferCompare(valA, valB)
          } else if (fieldType === 'number') {
            const toNum = (v) => {
              if (typeof v === 'number') return v
              const n = parseFloat(String(v).trim().replace(',', '.'))
              return isNaN(n) ? (asc ? Infinity : -Infinity) : n
            }
            comparisonResult = saferCompare(toNum(valA), toNum(valB))
          } else if (fieldType === 'abbrev') {
            // new abbreviated number type
            const bad = asc ? Infinity : -Infinity
            valA = parseAbbrevNumber(valA) ?? bad
            valB = parseAbbrevNumber(valB) ?? bad
            comparisonResult = saferCompare(valA, valB)
          } else if (fieldType === 'currency') {
            // new currency type
            const bad = asc ? Infinity : -Infinity
            valA = parseCurrency(valA) ?? bad
            valB = parseCurrency(valB) ?? bad
            comparisonResult = saferCompare(valA, valB)
          } else if (fieldType === 'yesno') {
            const mapValue = (v) => {
              const lowerV = String(v ?? '').trim().toLowerCase()
              if (
                lowerV === 'no' ||
                lowerV === 'false' ||
                lowerV === '0' ||
                lowerV === 'n'
              )
                return 0
              if (
                lowerV === 'yes' ||
                lowerV === 'true' ||
                lowerV === '1' ||
                lowerV === 'y'
              )
                return 1
              if (typeof v === 'boolean') return v ? 1 : 0
              if (v === null || typeof v === 'undefined' || lowerV === '')
                return -1
              return 1
            }
            comparisonResult = mapValue(valA) - mapValue(valB)
          } else if (fieldType === 'natural') {
            comparisonResult = naturalCollator.compare(
              String(valA ?? ''),
              String(valB ?? '')
            )
          } else if (fieldType === 'date') {
            const toTime = (v) => {
              if (typeof v === 'number') return v
              const t = Date.parse(v)
              return isNaN(t) ? (asc ? Infinity : -Infinity) : t
            }
            comparisonResult = saferCompare(toTime(valA), toTime(valB))
          } else if (fieldType === 'semver') {
            const parts = (v) => String(v ?? '').split('.').map(Number)
            const [a1, a2, a3] = parts(valA)
            const [b1, b2, b3] = parts(valB)
            comparisonResult = a1 - b1 || a2 - b2 || a3 - b3
          } else if (fieldType === 'string_ci') {
            const coll = new Intl.Collator(
              fieldDefinition.locale || undefined,
              { sensitivity: 'accent' }
            )
            comparisonResult = coll.compare(
              String(valA ?? ''),
              String(valB ?? '')
            )
          } else {
            comparisonResult = String(valA ?? '').localeCompare(
              String(valB ?? '')
            )
          }
        }

        if (comparisonResult !== 0)
          return asc ? comparisonResult : -comparisonResult
        // tie → continue to next level
      }
      return 0
    })
  }

  return result
})

// --- Template Helper Functions ---
function getAriaSort(field) {
  if (field.sortable === false) return 'none'
  if (sortKey.value !== field.key) return 'none'
  return sortAsc.value ? 'ascending' : 'descending'
}

// Shift‑click enabled header handler ---------------------------
function handleHeaderClick(field, shift) {
  if (field.sortable === false) return

  if (!shift) {
    // normal click  -> reset stack
    if (sortKey.value === field.key) {
      sortStack.value = [{ key: field.key, asc: !sortAsc.value }]
    } else {
      sortStack.value = [{ key: field.key, asc: true }]
    }
  } else {
    // shift‑click   -> add / toggle level
    const idx = sortStack.value.findIndex((s) => s.key === field.key)
    if (idx !== -1) {
      sortStack.value[idx].asc = !sortStack.value[idx].asc
    } else {
      sortStack.value.push({ key: field.key, asc: true })
    }
  }
}
</script>

<template>
  <div class="vp-json-table mb-4">
    <!-- Filter Input -->
    <input
      v-if="filter"
      v-model="search"
      type="text"
      placeholder="Search across all columns..."
      class="vp-json-table-filter w-full p-2 mb-4 border rounded text-sm"
      aria-label="Search table data"
    />

    <!-- Table Wrapper for Horizontal Scrolling -->
    <div class="overflow-x-auto">
      <table
        class="vp-json-table-element min-w-full border-collapse border text-sm"
      >
        <!-- Table Header -->
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
              :aria-sort="getAriaSort(field)"
              scope="col"
            >
              {{ field.label }}
              <!-- Sort Indicator -->
              <span
                class="vp-json-table-sort-icon"
                v-if="field.sortable !== false"
              >
                <span v-if="sortKey === field.key" aria-hidden="true">
                  {{ sortAsc ? ' ↑' : ' ↓' }}
                </span>
                <span v-else class="opacity-50" aria-hidden="true"> ↕</span>
              </span>
              <!-- level badge for secondary/tertiary keys -->
              <sup
                v-if="getSortLevel(field) > 0"
                class="vp-json-table-sort-lvl"
                aria-hidden="true"
              >
                {{ getSortLevel(field) + 1 }}
              </sup>
            </th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody class="vp-json-table-body">
          <!-- Message for no matching data -->
          <tr
            v-if="filteredData.length === 0"
            class="vp-json-table-empty-row"
          >
            <td
              :colspan="fields.length"
              class="border px-2 py-1 text-center text-gray-500"
            >
              No matching records found.
            </td>
          </tr>

          <!-- Data Rows -->
          <tr
            v-for="(row, i) in filteredData"
            :key="row.id ?? i"
            v-else
            class="vp-json-table-data-row"
          >
            <td
              v-for="field in fields"
              :key="field.key"
              class="vp-json-table-td border px-2 py-1 whitespace-nowrap"
            >
              <!-- Slot for custom cell rendering -->
              <!-- The 'value' passed to the slot is the raw value (object or primitive) -->
              <slot
                :name="`cell(${field.key})`"
                :value="row[field.key]"
                :item="row"
                :field="field"
              >
                <!-- Default rendering: display the value or value.value if it's an object -->
                {{
                  typeof row[field.key] === 'object' &&
                  row[field.key] !== null &&
                  typeof row[field.key].value !== 'undefined'
                    ? row[field.key].value ?? ''
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
/* Scoped styles using VitePress CSS Variables for Dark Mode compatibility */
.vp-json-table {
  margin-top: 1em;
  margin-bottom: 1em;
}

.vp-json-table-filter {
  border-color: var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border-radius: 4px; /* Consistent rounding */
}
.vp-json-table-filter:focus {
  border-color: var(--vp-c-brand-1);
  outline: none;
  box-shadow: 0 0 0 1px var(--vp-c-brand-1); /* Focus ring */
}

.vp-json-table-element {
  border-color: var(--vp-c-divider);
  width: 100%; /* Ensure table tries to fill container */
  border-radius: 4px; /* Optional: Round corners for the table */
  overflow: hidden; /* Needed if using rounded corners on table */
  border-spacing: 0; /* Remove default spacing */
  border-collapse: separate; /* Needed for rounded corners + borders */
  border: 1px solid var(--vp-c-divider); /* Outer border */
}

.vp-json-table-th {
  border-bottom: 2px solid var(--vp-c-divider); /* Thicker bottom border for header */
  background-color: var(--vp-c-bg-soft); /* Slightly different background for header */
  color: var(--vp-c-text-1);
  font-weight: 600;
  position: relative; /* Needed for potential absolute positioning inside */
  padding-top: 0.6rem; /* Adjusted padding */
  padding-bottom: 0.6rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  text-align: left; /* Ensure left alignment */
  border-top: none; /* Remove top border */
  border-left: none; /* Remove inner vertical borders */
  border-right: none;
}
.vp-json-table-th:not(:last-child) {
  border-right: 1px solid var(--vp-c-divider); /* Vertical lines between header cells */
}

.vp-json-table-td {
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg); /* Base background for cells */
  padding: 0.6rem 0.8rem; /* Match header padding */
  border-top: 1px solid var(--vp-c-divider); /* Horizontal lines between rows */
  border-left: none; /* Remove inner vertical borders */
  border-right: none;
  vertical-align: top; /* Align content top if it wraps */
}
.vp-json-table-td:not(:last-child) {
  border-right: 1px solid var(--vp-c-divider); /* Vertical lines between data cells */
}

.vp-json-table-data-row:nth-child(even) .vp-json-table-td {
  /* Optional: Zebra striping */
  /* background-color: var(--vp-c-bg-soft); */
}

.vp-json-table-data-row:hover .vp-json-table-td {
  background-color: var(--vp-c-bg-mute); /* Hover effect */
  color: var(--vp-c-text-1); /* Ensure text color remains readable on hover */
}

.vp-json-table-empty-row td {
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-2); /* Dimmer text for empty message */
  background-color: var(--vp-c-bg);
  padding: 0.75rem; /* Add some padding to the empty message */
  text-align: center;
  border-top: 1px solid var(--vp-c-divider); /* Ensure top border */
}

.vp-json-table-sort-icon {
  display: inline-block;
  width: 1em;
  text-align: center;
  margin-left: 4px;
  color: var(--vp-c-text-2); /* Dimmer color for sort icon */
  vertical-align: middle;
  opacity: 0.6; /* Slightly dimmer by default */
}
.vp-json-table-th[aria-sort]:not([aria-sort='none'])
  .vp-json-table-sort-icon {
  color: var(--vp-c-text-1); /* Make active sort icon more prominent */
  opacity: 1;
}
.vp-json-table-th.select-none .vp-json-table-sort-icon {
  opacity: 0.2; /* Further dim icon if column is not sortable */
}

/* Style for links rendered via slot */
.vp-json-table-td a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}
.vp-json-table-td a:hover {
  text-decoration: underline;
  color: var(--vp-c-brand-2);
}

/* Ensure wrapper div doesn't get prose styling if nested */
/* This class is added by the plugin */
:global(.vp-json-table-wrapper.not-prose) {
  margin-left: 0;
  margin-right: 0;
  max-width: none;
}
:global(.vp-json-table-wrapper.not-prose table) {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.875rem; /* Adjust base font size for table */
}

/* badge for secondary / tertiary sort levels */
.vp-json-table-sort-lvl {
  font-size: 0.6em;
  margin-left: 2px;
  color: var(--vp-c-text-2);
}
</style>