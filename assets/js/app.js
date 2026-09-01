/**
 * Renders the homepage tools directory from data/tools.js, using the
 * card-building helpers in assets/js/render.js: a jump-to-category nav
 * plus one <section> per category, each holding a heading and a grid of
 * tool cards. Also wires up scroll-spy so the nav highlights whichever
 * category is currently in view.
 */
document.addEventListener("DOMContentLoaded", () => {
  const grouped = groupByCategory(tools);
  const activeCategories = categories.filter(
    (category) => (grouped.get(category.id) || []).length > 0
  );

  renderCategoryNav(activeCategories);
  renderCategorySections(activeCategories, grouped);
  observeCategorySections(activeCategories);
});

function renderCategoryNav(activeCategories) {
  const nav = document.getElementById("category-nav-list");
  if (!nav) return;

  activeCategories.forEach((category, index) => {
    const chip = document.createElement("a");
    chip.className = "category-chip" + (index === 0 ? " active" : "");
    chip.href = `#category-${category.id}`;
    chip.dataset.category = category.id;
    chip.innerHTML = `<i class="${category.icon}"></i> ${category.label}`;
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
    heading.innerHTML = `<i class="${category.icon}"></i> ${category.label}`;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "tool-grid";
    grouped.get(category.id).forEach((tool) => grid.appendChild(createCard(tool)));
    section.appendChild(grid);

    root.appendChild(section);
  });
}

/**
 * Highlights the nav chip for whichever category section is currently
 * crossing a thin band near the top of the viewport.
 */
function observeCategorySections(activeCategories) {
  if (typeof IntersectionObserver === "undefined") return;

  const sections = activeCategories
    .map((category) => document.getElementById(`category-${category.id}`))
    .filter(Boolean);
  if (!sections.length) return;

  const setActiveChip = (categoryId) => {
    document.querySelectorAll(".category-chip").forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.category === categoryId);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveChip(entry.target.dataset.category);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
