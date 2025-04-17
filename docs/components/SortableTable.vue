<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  fields: Array,
  items: Array,
  filter: Boolean
})

const search = ref('')
const sortKey = ref('')
const sortAsc = ref(true)

const filteredData = computed(() => {
  let result = props.items

  if (search.value.trim() && props.filter) {
    const q = search.value.toLowerCase()
    result = result.filter(row =>
      props.fields.some(field =>
        String(row[field.key]).toLowerCase().includes(q)
      )
    )
  }

  if (sortKey.value) {
    result = [...result].sort((a, b) => {
      const x = a[sortKey.value]
      const y = b[sortKey.value]
      return sortAsc.value
        ? String(x).localeCompare(String(y))
        : String(y).localeCompare(String(x))
    })
  }

  return result
})
</script>

<template>
  <div class="mb-4 overflow-x-auto">
    <!-- Mobile Filter Dropdown -->
    <details class="block sm:hidden mb-2">
      <summary class="font-semibold cursor-pointer select-none">
        🔽 Filters
      </summary>
      <div class="mt-2">
        <input
          v-if="filter"
          v-model="search"
          type="text"
          placeholder="Search..."
          class="w-full p-2 mt-1 border rounded text-sm"
        />
      </div>
    </details>

    <!-- Desktop Filter Input -->
    <input
      v-if="filter"
      v-model="search"
      type="text"
      placeholder="Search..."
      class="hidden sm:block w-full p-2 mb-2 border rounded text-sm"
    />

    <!-- Table -->
    <table class="min-w-full border-collapse border text-sm">
      <thead>
        <tr>
          <th
            v-for="field in fields"
            :key="field.key"
            @click="() => {
              if (sortKey === field.key) sortAsc = !sortAsc
              else {
                sortKey = field.key
                sortAsc = true
              }
            }"
            class="cursor-pointer select-none border px-2 py-1 bg-gray-100"
          >
            {{ field.label }}
            <span v-if="sortKey === field.key">{{ sortAsc ? '↑' : '↓' }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in filteredData" :key="i">
          <td
            v-for="field in fields"
            :key="field.key"
            class="border px-2 py-1 whitespace-nowrap"
          >
            {{ row[field.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  font-family: sans-serif;
  border-collapse: collapse;
}
th {
  user-select: none;
}
</style>
