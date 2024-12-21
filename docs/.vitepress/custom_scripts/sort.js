export function tableSort(md) {
  // Store the original table renderer for "table_open"
  const originalTableOpen =
    md.renderer.rules.table_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  // Override "table_open" to add a sortable class and unique ID
  md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrSet("id", `sortable-table-${idx}`);
    tokens[idx].attrSet("class", "sortable-table");
    return originalTableOpen(tokens, idx, options, env, self);
  };
}

export function handleSort() {
  if (typeof window !== "undefined") {
    function sortTable(table, col, asc) {
      const direction = asc ? 1 : -1;
      const tbody = table.querySelector("tbody");
      const rows = Array.from(tbody.querySelectorAll("tr"));

      // Sort rows
      const sortedRows = rows.sort((a, b) => {
        const aCol = a
          .querySelector(`td:nth-child(${col + 1})`)
          .textContent.trim();
        const bCol = b
          .querySelector(`td:nth-child(${col + 1})`)
          .textContent.trim();

        // Try numeric sort first
        const aNum = parseFloat(aCol);
        const bNum = parseFloat(bCol);
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return direction * (aNum - bNum);
        }

        // Fall back to string sort
        return direction * aCol.localeCompare(bCol);
      });

      // Clear and append sorted rows
      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
      sortedRows.forEach((row) => tbody.appendChild(row));
    }

    // Attach click handlers to make any table with class "sortable-table" interactive
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document.querySelectorAll(".sortable-table").forEach((table) => {
          const headers = table.querySelectorAll("th");
          headers.forEach((header, index) => {
            header.addEventListener("click", () => {
              // Toggle sort direction on each click
              const asc = header.getAttribute("data-sort-asc") === "true";
              const newAsc = !asc;
              headers.forEach((h) => h.removeAttribute("data-sort-asc"));
              header.setAttribute("data-sort-asc", newAsc);
              sortTable(table, index, newAsc);
            });
          });
        });
      });
    });
  }
}
