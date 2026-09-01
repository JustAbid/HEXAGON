/**
 * Live search across the rendered tools directory. Runs after
 * assets/js/app.js has built the category sections and cards — it only
 * reads the DOM (each .tool-card carries a `data-search-index` string,
 * set in assets/js/render.js), so it doesn't need the tools/categories
 * data directly.
 */
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("tool-search");
  const emptyState = document.getElementById("search-empty-state");
  if (!input) return;

  const sections = Array.from(document.querySelectorAll(".category-section"));

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    let totalVisible = 0;

    sections.forEach((section) => {
      const cards = Array.from(section.querySelectorAll(".tool-card"));
      let visibleInSection = 0;

      cards.forEach((card) => {
        const matches = query === "" || card.dataset.searchIndex.includes(query);
        card.hidden = !matches;
        if (matches) visibleInSection++;
      });

      section.hidden = visibleInSection === 0;
      totalVisible += visibleInSection;
    });

    if (emptyState) emptyState.hidden = totalVisible !== 0;
  });
});
