<template>
  <div>
    <table>
      <thead>
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colSpan="header.colSpan"
            :class="
              header.column.getCanSort() ? 'cursor-pointer select-none' : ''
            "
            @click="header.column.getToggleSortingHandler()?.($event)"
          >
            <template v-if="!header.isPlaceholder">
              <FlexRender
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
              {{
                { asc: " ↑", desc: " ↓" }[header.column.getIsSorted() as string]
              }}
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id">
          <td v-for="cell in row.getVisibleCells()" :key="cell.id">
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import {
  FlexRender,
  createTable,
  useVueTable,
  getSortedRowModel,
  getCoreRowModel,
  SortingState,
} from "@tanstack/vue-table";

/**
 * Props:
 * - tableData: {
 *   "fields": [
 *     { "key": "a", "label": "AA", "sortable": true },
 *     { "key": "b", "label": "BB" },
 *     { "key": "c", "label": "CC" }
 *   ],
 *   "items": [
 *     { "a": "11", "b": "22", "c": "33" },
 *     { "a": "211", "b": "222", "c": "233" }
 *   ]
 * }
 **/
const props = defineProps({
  tableData: {
    type: Object,
    required: true,
  },
});

// Extract columns from the 'fields' array
const columns = computed(() => {
  return props.tableData.fields.map((field) => ({
    accessorKey: field.key,
    header: field.label,
    // Enable sorting only if the field has 'sortable: true'
    enableSorting: field.sortable === true,
  }));
});

const data = ref(props.tableData.items || []);
const sorting = ref<SortingState>([]);

// Create and configure the table
const table = useVueTable({
  columns: columns.value,
  get data() {
    return data.value;
  },
  state: {
    get sorting() {
      return sorting.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
});
</script>
