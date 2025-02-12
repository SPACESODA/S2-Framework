// Mode Switching Function v2.0
// by S2 Framework

(function () {
  const THEME_KEY = "theme";
  const SYSTEM_THEME = "system";
  const LIGHT_CLASS = "u-light-mode";
  const DARK_CLASS = "u-dark-mode";
  const THEME_CHANGE_ALLOWED_ATTR = "theme-change";
  // check if changing of Light / Dark Mode (Theme) is allowed
  function isThemeChangeAllowed() {
    return document.body.getAttribute(THEME_CHANGE_ALLOWED_ATTR) !== "false";
  }
  // get the system's preferred color scheme
  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  // apply the specified theme
  function applyTheme(theme, savePreference = true) {
    if (!isThemeChangeAllowed()) return;
    const actualTheme = theme === SYSTEM_THEME ? getSystemTheme() : theme;
    document.body.classList.remove(LIGHT_CLASS, DARK_CLASS);
    if (actualTheme === "light") {
      document.body.classList.add(LIGHT_CLASS);
    } else {
      document.body.classList.add(DARK_CLASS);
    }
    if (savePreference) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (error) {
        console.warn("Unable to save theme preference:", error);
      }
    }
  }
  // get the user's theme preference
  function getThemePreference() {
    return localStorage.getItem(THEME_KEY) || SYSTEM_THEME;
  }
  // initialize the theme on page load
  function initializeTheme() {
    if (isThemeChangeAllowed()) {
      const themePreference = getThemePreference();
      applyTheme(themePreference, false);
    }
  }
  // set up event listeners for buttons and toggles
  function setupEventListeners() {
    const buttonSelectors = {
      "color-mode-system": SYSTEM_THEME,
      "color-mode-light": "light",
      "color-mode-dark": "dark"
    };
    Object.entries(buttonSelectors).forEach(([selector, theme]) => {
      document
        .querySelectorAll(`[data-button="${selector}"]`)
        .forEach((button) => {
          button.addEventListener("click", () => applyTheme(theme));
        });
    });
    document
      .querySelectorAll('[data-toggle="light-dark"]')
      .forEach((toggleSwitch) => {
        toggleSwitch.addEventListener("click", () => {
          const currentTheme = getThemePreference();
          const newTheme = currentTheme === "dark" ? "light" : "dark";
          applyTheme(newTheme);
        });
      });
  }
  // run initialization when DOM is ready
  function onDOMReady() {
    initializeTheme();
    setupEventListeners();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onDOMReady);
  } else {
    onDOMReady();
  }
  // update theme when system preference changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (getThemePreference() === SYSTEM_THEME) {
        applyTheme(SYSTEM_THEME, false);
      }
    });
})();
