/**
 * Light/dark theme toggle.
 *
 * The actual "apply stored theme before paint" step lives in a tiny inline
 * script in index.htm's <head> (needs to run before CSS paints, so it can't
 * wait for this file to load). This file only handles the interactive
 * parts: syncing the toggle button's icon/label, and switching + persisting
 * the theme on click.
 */
(function () {
  var STORAGE_KEY = "hextools-theme";
  var root = document.documentElement;

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // theme just won't persist across visits — not fatal
    }
  }

  function effectiveTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function updateToggleUI(button) {
    var icon = button.querySelector("i");
    if (effectiveTheme() === "dark") {
      icon.className = "fa-solid fa-sun";
      button.setAttribute("aria-label", "Switch to light theme");
    } else {
      icon.className = "fa-solid fa-moon";
      button.setAttribute("aria-label", "Switch to dark theme");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) return;

    updateToggleUI(button);

    button.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      storeTheme(next);
      updateToggleUI(button);
    });
  });
})();
