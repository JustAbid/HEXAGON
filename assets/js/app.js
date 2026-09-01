/**
 * Renders the homepage tools directory from data/tools.js, using the
 * card-building helpers in assets/js/render.js. One <section> per
 * category, each holding a heading and a grid of tool cards.
 */
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("tool-categories");
  if (!root) return;

  const grouped = groupByCategory(tools);

  categories.forEach((category) => {
    const categoryTools = grouped.get(category.id) || [];
    if (categoryTools.length === 0) return;

    const section = document.createElement("div");
    section.className = "category-section";
    section.id = `category-${category.id}`;

    const heading = document.createElement("h3");
    heading.className = "category-title";
    heading.innerHTML = `<i class="${category.icon}"></i> ${category.label}`;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "tool-grid";
    categoryTools.forEach((tool) => grid.appendChild(createCard(tool)));
    section.appendChild(grid);

    root.appendChild(section);
  });
});
