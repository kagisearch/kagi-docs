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
import { ref, computed, PropType, h } from "vue";
import {
  FlexRender,
  useVueTable,
  getSortedRowModel,
  getCoreRowModel,
  SortingState,
} from "@tanstack/vue-table";

type FormatConfig =
  | {
      type: "highlight";
      tokens: string[];
    }
  | ({
      type: "numeric";
    } & Intl.NumberFormatOptions);
const props = defineProps({
  tableData: {
    type: Object as PropType<{
      fields: Array<{
        key: string;
        label: string;
        sortable?: boolean;
        format?: FormatConfig;
      }>;
      items: Array<Record<string, unknown>>;
    }>,
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
    cell: (c) => {
      const value = c.getValue();

      // Handle numeric formatting
      if (field.format?.type === "numeric" && !isNaN(value)) {
        return new Intl.NumberFormat("en-US", field.format).format(value);
      }

      // Handle highlight formatting
      if (field.format?.type === "highlight" && field.format.tokens) {
        // Split the text by tokens and create spans for highlighted parts
        const text = String(value);
        const tokens = field.format.tokens;

        // Create array of text parts and highlighted tokens
        const parts = text.split(new RegExp(`(${tokens.join("|")})\\s`));

        return h(
          "span",
          {},
          parts.map((part) => {
            if (tokens.includes(part)) {
              return h("span", { class: "highlight" }, `${part} `);
            }
            return part;
          }),
        );
      }

      return value;
    },
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
