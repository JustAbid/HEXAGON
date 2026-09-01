/**
 * Renders the homepage tools directory from data/tools.js, using the
 * card-building helpers in assets/js/render.js: a category filter/nav row
 * plus one <section> per category, each holding a heading and a grid of
 * tool cards. Filter-chip click handling and combining filters with search
 * live in assets/js/search.js, which runs after this and reads the chips
 * and sections rendered here.
 */
document.addEventListener("DOMContentLoaded", () => {
  const grouped = groupByCategory(tools);
  const activeCategories = categories.filter(
    (category) => (grouped.get(category.id) || []).length > 0
  );

  renderCategoryNav(activeCategories);
  renderCategorySections(activeCategories, grouped);
});

function renderCategoryNav(activeCategories) {
  const nav = document.getElementById("category-nav-list");
  if (!nav) return;

  const allChip = document.createElement("button");
  allChip.type = "button";
  allChip.className = "category-chip active";
  allChip.dataset.category = "all";
  allChip.innerHTML = `<i class="fa-solid fa-border-all" aria-hidden="true"></i> All`;
  nav.appendChild(allChip);

  activeCategories.forEach((category) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "category-chip";
    chip.dataset.category = category.id;
    chip.innerHTML = `<i class="${category.icon}" aria-hidden="true"></i> ${category.label}`;
    nav.appendChild(chip);
  });
}

function renderCategorySections(activeCategories, grouped) {
  const root = document.getElementById("tool-categories");
  if (!root) return;

  activeCategories.forEach((category) => {
    const section = document.createElement("div");
    section.className = "category-section";
    section.id = `category-${category.id}`;
    section.dataset.category = category.id;

    const heading = document.createElement("h3");
    heading.className = "category-title";
    heading.innerHTML = `<i class="${category.icon}" aria-hidden="true"></i> ${category.label}`;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "tool-grid";
    grouped.get(category.id).forEach((tool) => grid.appendChild(createCard(tool)));
    section.appendChild(grid);

    root.appendChild(section);
  });
}
