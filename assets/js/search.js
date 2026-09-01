/**
 * Live search + category filter chips for the tools directory. Runs after
 * assets/js/app.js has built the chips and category sections — it only
 * reads the DOM (each .tool-card carries a `data-search-index` string set
 * in assets/js/render.js; each chip/section carries `data-category`), so
 * it doesn't need the tools/categories data directly.
 *
 * Search text and the active category chip are independent filters that
 * combine: a card shows only if it matches both.
 */
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("tool-search");
  const emptyState = document.getElementById("search-empty-state");
  const nav = document.querySelector(".category-nav");
  const chips = Array.from(document.querySelectorAll(".category-chip"));
  const sections = Array.from(document.querySelectorAll(".category-section"));
  if (!input && !chips.length) return;

  const state = { category: "all", query: "" };

  function applyFilters() {
    let totalVisible = 0;

    sections.forEach((section) => {
      const inSelectedCategory =
        state.category === "all" || section.dataset.category === state.category;

      if (!inSelectedCategory) {
        section.hidden = true;
        return;
      }

      const cards = Array.from(section.querySelectorAll(".tool-card"));
      let visibleInSection = 0;
      cards.forEach((card) => {
        const matchesQuery =
          state.query === "" || card.dataset.searchIndex.includes(state.query);
        card.hidden = !matchesQuery;
        if (matchesQuery) visibleInSection++;
      });

      section.hidden = visibleInSection === 0;
      totalVisible += visibleInSection;
    });

    if (emptyState) emptyState.hidden = totalVisible !== 0;
  }

  if (input) {
    input.addEventListener("input", () => {
      state.query = input.value.trim().toLowerCase();
      applyFilters();
    });
  }

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      state.category = chip.dataset.category;
      chips.forEach((c) => c.classList.toggle("active", c === chip));
      applyFilters();
      if (nav) nav.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    });
  });
});
