# Hextools

A single-page directory of free developer and design tools and resources, organized by category, with live search, category filtering, and a light/dark theme.

## What this is

Hextools started as a hackathon project in 2023; small collection of design-tool links and is being rebuilt, incrementally, into a proper resource directory: one long, data-driven page instead of a separate HTML file per category, with everything a directory like this needs — search, filtering, a real theme system, and a predictable way to add new tools without touching any markup.

There's no build step, no framework, and no package manager. It's plain HTML, CSS, and vanilla JavaScript on purpose — the project is meant to stay simple enough that adding a tool or a feature never requires more than editing a couple of files.

## Features

- **80+ curated tools across 11 categories** — colors, fonts, logos, gradients, templates, emojis, style guides, background removers, code snippets, AI tools, and animation libraries.
- **Live search** across every tool's title, description, and tags.
- **Category filter chips** (combinable with search) to narrow the directory to one category at a time.
- **Light/dark theme** — respects the visitor's OS preference on first visit, remembers an explicit choice via `localStorage`, and switches instantly with no flash of the wrong theme on reload.
- **Keyboard accessible** — every interactive element has a visible focus state, decorative icons are hidden from screen readers, and all text/background pairings are checked against WCAG AA contrast in both themes.
- **Responsive** — the tools grid, forms, and navigation all adapt down to phone-width screens.
- **Submit a Resource** page for visitors to suggest a new tool, and a **Contact** form — both backed by [Formspree](https://formspree.io/), no backend required.

## Tech stack

- **HTML / CSS / vanilla JavaScript** — no framework, no bundler, no `npm install`.
- **CSS custom properties** for the entire theme system (see `assets/css/style.css`) — one set of tokens (background/text/accent/border/shadow) redefined for dark mode, rather than colors hardcoded per element.
- **[Font Awesome](https://fontawesome.com/)** (icons) and **[Inter](https://fonts.google.com/specimen/Inter)** (typeface), both loaded from a CDN.
- **[Formspree](https://formspree.io/)** for the two forms (contact + resource submission) — no server code in this repo.

## Project structure

```
HEXAGON/
├── index.htm              # Homepage — hero, search, category nav, tools directory, contact form
├── submit.htm             # "Submit a Resource" page (shares the site's nav/theme/CSS)
├── data/
│   └── tools.js           # Every category and tool — the single source of truth for directory content
├── assets/
│   ├── css/
│   │   └── style.css      # Design tokens (light/dark) + all site styling
│   └── js/
│       ├── render.js      # Builds a <a class="tool-card"> element from one tools.js entry
│       ├── app.js         # Renders the category nav + all category sections on page load
│       ├── search.js      # Live search + category-filter logic (combines both into one state)
│       ├── theme.js       # Light/dark toggle: reads/writes localStorage, syncs the toggle button
│       └── main.js        # Hero typing animation
└── .vscode/
    └── settings.json      # Live Server port (5501)
```

## Running it locally

There's nothing to install. Either:

- Open `index.htm` directly in a browser, or
- Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension (already configured to use port `5501` — see `.vscode/settings.json`) for auto-reload while editing.

## Adding a new tool

This is the one thing the project is specifically designed to make easy. Open `data/tools.js` and add one object to the `tools` array:

```js
{
  id: "some-unique-id",       // kebab-case, must be unique
  title: "Tool Name",
  description: "One sentence: what it does and why it's useful.",
  url: "https://example.com/",
  category: "colors",         // must match an id in the categories[] array above it
  icon: null,                 // a Font Awesome class ("fa-solid fa-x"), or null to inherit the category's icon
  tags: []                    // short labels shown on the card, e.g. ["Free"], or [] for none
}
```

That's the entire process — no HTML to edit, no other file to touch. The homepage picks it up automatically and it becomes searchable and filterable immediately.

To add a whole new **category** instead, add an entry to the `categories` array at the top of the same file (`{ id, label, icon }`), then add tools with a matching `category`.

## Categories

Colors · Fonts & Typography · Logos & Branding · Gradients · Templates · Emojis · Style Guides · Background Remover · Code Snippets · Artificial Intelligence · Animations

More categories (Web Development, APIs, Databases, Cloud & DevOps, Cybersecurity, Testing, Documentation, Productivity, Learning Resources) are planned, added one at a time as their own commits rather than all at once.

## Development workflow

This project is built incrementally, one small, testable change per session, each ending in a single meaningful commit — deliberately not in one large pass. Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/)-style prefixes:

| Prefix | Used for |
|---|---|
| `feat:` | a new capability |
| `fix:` | a bug fix |
| `refactor:` | restructuring code with no behavior change |
| `style:` | visual/formatting changes only |
| `docs:` | documentation |
| `chore:` | housekeeping (deps, config, file moves) |

## Roadmap

The rebuild followed a day-by-day plan, from an initial audit of the original (mostly single-page, duplicated-per-category) codebase through to a unified, data-driven, themed, accessible directory:

1. Workspace audit & cleanup
2. Project folder structure
3. Data model for tools
4. Card rendering engine
5. Unified directory page
6. Retire the old per-category pages
7. Design tokens + light/dark theme
8. Category navigation
9. Live search
10. Combinable category filter chips
11. Responsive pass
12. Accessibility pass (contrast, keyboard, ARIA)
13. Contact & footer cleanup, resource-submission form
14. Visual polish
15. **This README**
16. v1.0 release

What's next, roughly in priority order: more categories and tools (added one at a time), tag-based filtering, favorites/bookmarks, per-tool icons, sorting, and a moderated public "suggest a tool" flow.

## Credits
Mohammed Abid Ali Sameer
Habib Ayan Aziz Khan
Shaikh Shoaib Sheriff
Syed Faizan Ahmed

Built by [HEXAGON](https://github.com/JustAbid/HEXAGON).


