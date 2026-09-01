/**
 * Card rendering engine.
 *
 * Turns entries from data/tools.js into DOM nodes. Depends on the
 * `categories` and `tools` globals defined there — load that script first.
 * Framework-free: plain DOM API, no build step.
 */

function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId) || null;
}

function resolveIcon(tool) {
  if (tool.icon) return tool.icon;
  const category = getCategory(tool.category);
  return category ? category.icon : "fa-solid fa-link";
}

/**
 * Build a single <a class="tool-card"> element for one tool entry.
 */
function createCard(tool) {
  const card = document.createElement("a");
  card.className = "tool-card";
  card.href = tool.url;
  card.target = "_blank";
  card.rel = "noopener";
  card.dataset.searchIndex = [tool.title, tool.description, ...(tool.tags || [])]
    .join(" ")
    .toLowerCase();

  const icon = document.createElement("i");
  icon.className = resolveIcon(tool);
  icon.setAttribute("aria-hidden", "true");
  card.appendChild(icon);

  if (tool.tags && tool.tags.length) {
    const tagRow = document.createElement("div");
    tagRow.className = "tool-card-tags";
    tool.tags.forEach((tagText) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = tagText;
      tagRow.appendChild(tag);
    });
    card.appendChild(tagRow);
  }

  const title = document.createElement("h3");
  title.textContent = tool.title;
  card.appendChild(title);

  const description = document.createElement("p");
  description.textContent = tool.description;
  card.appendChild(description);

  const newTabNote = document.createElement("span");
  newTabNote.className = "visually-hidden";
  newTabNote.textContent = " (opens in a new tab)";
  card.appendChild(newTabNote);

  return card;
}

/**
 * Group a list of tools by category id, in the order categories are
 * declared in data/tools.js. Categories with no tools still get an
 * empty array, so a caller can render a "coming soon" state for them.
 */
function groupByCategory(toolList) {
  const grouped = new Map();
  categories.forEach((category) => grouped.set(category.id, []));

  toolList.forEach((tool) => {
    if (!grouped.has(tool.category)) grouped.set(tool.category, []);
    grouped.get(tool.category).push(tool);
  });

  return grouped;
}
