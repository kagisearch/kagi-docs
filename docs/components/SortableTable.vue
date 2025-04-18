<script setup>
import { ref, computed } from 'vue'

// --- Props Definition ---
const props = defineProps({
  // Array of objects defining columns: { key: string, label: string, sortable?: boolean, type?: 'string' | 'number' | 'size' | 'duration' | 'weight' | 'yesno' }
  fields: {
    type: Array,
    required: true,
    validator: (value) => {
      return Array.isArray(value) && value.every(field =>
        field &&
        typeof field.key === 'string' &&
        typeof field.label === 'string' &&
        (typeof field.sortable === 'boolean' || typeof field.sortable === 'undefined') &&
        (typeof field.type === 'string' || typeof field.type === 'undefined')
      );
    }
  },
  items: {
    type: Array,
    required: true
  },
  filter: {
    type: Boolean,
    default: false
  }
})

// --- Reactive State ---
const search = ref('')
const sortKey = ref('')
const sortAsc = ref(true)

// --- Unit Parsing and Comparison Logic ---
const sizeMultipliers = { b: 1, kb: 1024, mb: 1024**2, gb: 1024**3, tb: 1024**4, pb: 1024**5 };
const durationMultipliers = { ns: 1e-9, us: 1e-6, ms: 1e-3, s: 1, min: 60, h: 3600, d: 3600 * 24 };
const weightMultipliers = { mg: 0.001, g: 1, kg: 1000, t: 1e6 }; // t = metric ton

/**
 * Parses a string value containing a number and a unit into a base numeric value.
 * Handles common units for size, duration, and weight. Also handles comma as decimal separator.
 */
function parseUnitValue(value, multipliers) {
  // Note: value here is already the extracted primitive value (if original was object)
  if (value === null || typeof value === 'undefined') return null;
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return null;

  const cleanedValue = value.trim().toLowerCase();
  const match = cleanedValue.match(/^(-?[\d.,]+)\s*([a-z]+)$/);

  if (!match) {
      const plainNumber = parseFloat(cleanedValue.replace(',', '.'));
      return !isNaN(plainNumber) ? plainNumber : null;
  }

  const numericPart = parseFloat(match[1].replace(',', '.'));
  const unitPart = match[2];

  if (isNaN(numericPart) || typeof multipliers[unitPart] === 'undefined') {
    return null;
  }
  return numericPart * multipliers[unitPart];
}

// --- Helper Functions ---
function getFieldDefinition(key) {
  return props.fields.find(field => field.key === key);
}

// --- Computed Property for Filtered and Sorted Data ---
const filteredData = computed(() => {
  let result = [...props.items]; // Create a shallow copy

  // Helper to get the actual value for sorting/filtering/display if it's an object
  const getActualValue = (v) => {
    if (typeof v === 'object' && v !== null && typeof v.value !== 'undefined') {
      return v.value; // Return the 'value' property
    }
    return v; // Return the primitive value
  };

  // 1. Filtering
  if (props.filter && search.value.trim()) {
    const q = search.value.toLowerCase();
    result = result.filter(row =>
      props.fields.some(field => {
        const actualValue = getActualValue(row[field.key]); // Use helper for filtering
        return String(actualValue ?? '').toLowerCase().includes(q);
      })
    );
  }

  // 2. Sorting
  if (sortKey.value) {
    const fieldDefinition = getFieldDefinition(sortKey.value);

    if (fieldDefinition && fieldDefinition.sortable !== false) { // Default sortable is true
      const fieldType = fieldDefinition.type || 'string';

      result.sort((a, b) => {
        const rawX = a[sortKey.value];
        const rawY = b[sortKey.value];

        // Extract the actual value for comparison, BEFORE type-specific logic
        let valA = getActualValue(rawX);
        let valB = getActualValue(rawY);
        // Note: The 'link' property is ignored for sorting/filtering

        let comparisonResult = 0;

        let multipliers = null;
        if (fieldType === 'size') multipliers = sizeMultipliers;
        else if (fieldType === 'duration') multipliers = durationMultipliers;
        else if (fieldType === 'weight') multipliers = weightMultipliers;

        // --- Type-Specific Value Processing and Comparison (using extracted valA/valB) ---
        if (multipliers) { // Unit-based types
          valA = parseUnitValue(valA, multipliers) ?? Number.NEGATIVE_INFINITY;
          valB = parseUnitValue(valB, multipliers) ?? Number.NEGATIVE_INFINITY;
          comparisonResult = valA - valB;
        } else if (fieldType === 'number') { // Plain numbers (including strings)
            const parseAsNumber = (v) => { // v is the extracted value
                if (typeof v === 'number') return v;
                if (typeof v === 'string') {
                    const num = parseFloat(String(v).trim().replace(',', '.'));
                    return !isNaN(num) ? num : Number.NEGATIVE_INFINITY;
                }
                return Number.NEGATIVE_INFINITY;
            };
            valA = parseAsNumber(valA);
            valB = parseAsNumber(valB);
            comparisonResult = valA - valB;
        } else if (fieldType === 'yesno') { // Yes/No/Truthy/Falsy type
            const mapValue = (v) => { // v is the extracted value
                const lowerV = String(v ?? '').trim().toLowerCase();
                // Explicit false values map to 0
                if (lowerV === 'no' || lowerV === 'nein' || lowerV === 'false' || lowerV === '0' || lowerV === 'n') return 0;
                // Explicit true values map to 1
                if (lowerV === 'yes' || lowerV === 'ja' || lowerV === 'true' || lowerV === '1' || lowerV === 'y') return 1;
                 // Handle boolean true explicitly
                if (typeof v === 'boolean' && v === true) return 1;
                // Null, undefined, or empty string map to -1 (lowest)
                if (v === null || typeof v === 'undefined' || String(v).trim() === '') return -1;
                // Treat other non-empty values as "truthy" -> 1 (e.g., non-empty strings not matching above)
                return 1;
            };
            comparisonResult = mapValue(valA) - mapValue(valB);
        } else { // Default string comparison
          valA = String(valA ?? ''); // valA/valB are already extracted
          valB = String(valB ?? '');
          comparisonResult = valA.localeCompare(valB);
        }

        // Apply sort direction
        return sortAsc.value ? comparisonResult : -comparisonResult;
      });
    }
  }
  return result;
});

// --- Template Helper Functions ---
function getAriaSort(field) {
    if (field.sortable === false) return 'none';
    if (sortKey.value !== field.key) return 'none';
    return sortAsc.value ? 'ascending' : 'descending';
}

function handleHeaderClick(field) {
    if (field.sortable === false) return;
    if (sortKey.value === field.key) {
        sortAsc.value = !sortAsc.value;
    } else {
        sortKey.value = field.key;
        sortAsc.value = true;
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
      <table class="vp-json-table-element min-w-full border-collapse border text-sm">
        <!-- Table Header -->
        <thead>
          <tr class="vp-json-table-header-row">
            <th
              v-for="field in fields"
              :key="field.key"
              @click="handleHeaderClick(field)"
              :class="[
                'vp-json-table-th border px-2 py-1 bg-gray-100 text-left',
                field.sortable !== false ? 'cursor-pointer select-none' : 'select-none'
              ]"
              :aria-sort="getAriaSort(field)"
              scope="col"
            >
              {{ field.label }}
              <!-- Sort Indicator -->
              <span class="vp-json-table-sort-icon" v-if="field.sortable !== false">
                <span v-if="sortKey.value === field.key" aria-hidden="true">
                  {{ sortAsc ? ' ↑' : ' ↓' }}
                </span>
                <span v-else class="opacity-50" aria-hidden="true"> ↕
                </span>
              </span>
            </th>
          </tr>
        </thead>
        <!-- Table Body -->
        <tbody class="vp-json-table-body">
          <!-- Message for no matching data -->
          <tr v-if="filteredData.length === 0" class="vp-json-table-empty-row">
             <td :colspan="fields.length" class="border px-2 py-1 text-center text-gray-500">
               No matching records found.
             </td>
           </tr>
           <!-- Data Rows -->
           <tr v-for="(row, i) in filteredData" :key="row.id ?? i" v-else class="vp-json-table-data-row">
            <td
              v-for="field in fields"
              :key="field.key"
              class="vp-json-table-td border px-2 py-1 whitespace-nowrap"
            >
              <!-- Slot for custom cell rendering -->
              <!-- The 'value' passed to the slot is the raw value (object or primitive) -->
              <slot :name="`cell(${field.key})`" :value="row[field.key]" :item="row" :field="field">
                <!-- Default rendering: display the value or value.value if it's an object -->
                {{ (typeof row[field.key] === 'object' && row[field.key] !== null && typeof row[field.key].value !== 'undefined') ? (row[field.key].value ?? '') : (row[field.key] ?? '') }}
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
.vp-json-table-th[aria-sort]:not([aria-sort='none']) .vp-json-table-sort-icon {
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

</style>