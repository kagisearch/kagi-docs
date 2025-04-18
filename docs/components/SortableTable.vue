<script setup>
import { ref, computed } from 'vue'

// Define props with more specific types and defaults
const props = defineProps({
  // Array of objects defining columns: { key: string, label: string, type?: 'string' | 'number' }
  fields: {
    type: Array,
    required: true,
    validator: (value) => {
      // Basic validation: Ensure it's an array of objects with key and label
      return Array.isArray(value) && value.every(field => field && typeof field.key === 'string' && typeof field.label === 'string');
    }
  },
  // Array of data objects
  items: {
    type: Array,
    required: true
  },
  // Optional: Enable/disable the filter input
  filter: {
    type: Boolean,
    default: false
  }
})

const search = ref('')
const sortKey = ref('')
const sortAsc = ref(true)

// Get field definition based on key - useful for sorting type
function getFieldDefinition(key) {
  return props.fields.find(field => field.key === key);
}

const filteredData = computed(() => {
  let result = props.items

  // Filter the rows based on the search text across all columns
  if (search.value.trim() && props.filter) {
    const q = search.value.toLowerCase()
    result = result.filter(row =>
      props.fields.some(field =>
        String(row[field.key] ?? '').toLowerCase().includes(q) // Use nullish coalescing for safety
      )
    )
  }

  // Sorting logic
  if (sortKey.value) {
    const fieldDefinition = getFieldDefinition(sortKey.value);
    // Check if the field type is explicitly number or if data looks like a number
    const isNumericSort = fieldDefinition?.type === 'number';

    result = [...result].sort((a, b) => {
      const x = a[sortKey.value];
      const y = b[sortKey.value];

      // Handle numeric sorting if applicable
      if (isNumericSort || (typeof x === 'number' && typeof y === 'number')) {
         // Handle null/undefined in numeric sort - treat them as lowest value
         const valA = x ?? Number.NEGATIVE_INFINITY;
         const valB = y ?? Number.NEGATIVE_INFINITY;
         return sortAsc.value ? valA - valB : valB - valA;
      }

      // Default to locale-aware string comparison
      // Use nullish coalescing to handle potential null/undefined values gracefully
      const strX = String(x ?? '');
      const strY = String(y ?? '');

      return sortAsc.value
        ? strX.localeCompare(strY)
        : strY.localeCompare(strX);
    })
  }

  return result
})

// Function to determine aria-sort value for accessibility
function getAriaSort(fieldKey) {
    if (sortKey.value !== fieldKey) {
        return 'none';
    }
    return sortAsc.value ? 'ascending' : 'descending';
}

</script>

<template>
  <div class="mb-4">
    <input
      v-if="filter"
      v-model="search"
      type="text"
      placeholder="Search across all columns..."
      class="w-full p-2 mb-4 border rounded text-sm"
      aria-label="Search table data"
    />

    <div class="overflow-x-auto">
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
              class="cursor-pointer select-none border px-2 py-1 bg-gray-100 text-left"
              :aria-sort="getAriaSort(field.key)"
              scope="col"
            >
              {{ field.label }}
              <span v-if="sortKey.value === field.key" aria-hidden="true">
                {{ sortAsc.value ? ' ↑' : ' ↓' }}
              </span>
              <span v-else class="opacity-50" aria-hidden="true"> ↕
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredData.length === 0">
             <td :colspan="fields.length" class="border px-2 py-1 text-center text-gray-500">
               No matching records found.
             </td>
           </tr>
           <tr v-for="(row, i) in filteredData" :key="row.id ?? i" v-else>
            <td
              v-for="field in fields"
              :key="field.key"
              class="border px-2 py-1 whitespace-nowrap"
            >
              {{ row[field.key] ?? '' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table {
  font-family: sans-serif;
  border-collapse: collapse;
}
th {
  user-select: none; /* Keep text selectable for accessibility, but visually prevent selection */
  position: relative; /* For potential absolute positioning of sort icons if needed */
}
th span {
    /* Adjust spacing/styling of sort icons as needed */
    display: inline-block;
    width: 1em; /* Ensure consistent space */
    text-align: center;
}
</style>