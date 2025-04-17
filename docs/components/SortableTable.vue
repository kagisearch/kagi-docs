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

  // Filter the rows based on the search text across all columns
  if (search.value.trim() && props.filter) {
    const q = search.value.toLowerCase()
    result = result.filter(row =>
      props.fields.some(field =>
        String(row[field.key]).toLowerCase().includes(q)
      )
    )
  }

  // Sorting logic
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
    <!-- Global Search Field -->
    <input
      v-if="filter"
      v-model="search"
      type="text"
      placeholder="Search across all columns..."
      class="w-full p-2 mb-4 border rounded text-sm"
    />

    <!-- Table -->
    <table class="min-w-full border-collapse border text-sm">
      <thead>
        <tr>
          <th
            v-for="field in fields"
            :key="field.key"
            @click="() => {
              if (sortKey.value === field.key) sortAsc.value = !sortAsc.value
              else {
                sortKey.value = field.key
                sortAsc.value = true
              }
            }"
            class="cursor-pointer select-none border px-2 py-1 bg-gray-100"
          >
            {{ field.label }}
            <span v-if="sortKey.value === field.key">{{ sortAsc.value ? '↑' : '↓' }}</span>
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
