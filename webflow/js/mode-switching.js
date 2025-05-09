// Mode Switching Function v2.2
// by S2 Framework

(function () {
  const THEME_KEY = "theme";
  const SYSTEM_THEME = "system";
  const LIGHT_CLASS = "u-light-mode";
  const DARK_CLASS = "u-dark-mode";
  const SYSTEM_MODE_CLASS = "u-system-mode";
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
    const isSystemMode = theme === SYSTEM_THEME;
    // remove theme classes efficiently to minimize flashing
    document.body.classList.remove(LIGHT_CLASS, DARK_CLASS);
    // apply the appropriate theme class
    if (actualTheme === "light") {
      document.body.classList.add(LIGHT_CLASS);
    } else {
      document.body.classList.add(DARK_CLASS);
    }
    // handle system mode class
    if (isSystemMode) {
      document.body.classList.add(SYSTEM_MODE_CLASS);
    } else {
      document.body.classList.remove(SYSTEM_MODE_CLASS);
    }
    if (savePreference) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (error) {
        console.warn("Unable to save theme preference:", error);
      }
    }
  }
  // determine the current active theme regardless of source
  function getCurrentActiveTheme() {
    if (document.body.classList.contains(DARK_CLASS)) {
      return "dark";
    } else {
      return "light";
    }
  }
  // check if currently in system mode
  function isInSystemMode() {
    return getThemePreference() === SYSTEM_THEME;
  }
  // get the user's theme preference from localStorage
  function getThemePreference() {
    return localStorage.getItem(THEME_KEY) || SYSTEM_THEME;
  }
  // initialize the theme on page load
  function initializeTheme() {
    if (isThemeChangeAllowed()) {
      const currentPreference = getThemePreference();
      // apply system mode class if needed
      if (currentPreference === SYSTEM_THEME) {
        document.body.classList.add(SYSTEM_MODE_CLASS);
      } else {
        document.body.classList.remove(SYSTEM_MODE_CLASS);
      }
      // update toggle states to match the currently applied theme
      updateToggleStates();
    }
  }
  // update toggle button states to match current theme
  function updateToggleStates() {
    const currentTheme = getCurrentActiveTheme();
    const toggles = document.querySelectorAll('[data-toggle="light-dark"]');
    toggles.forEach((toggle) => {
      // add any class or state updates needed for your toggle UI
      // this depends on your specific toggle implementation
      if (currentTheme === "dark") {
        toggle.setAttribute("aria-checked", "true");
        // add any other visual updates needed
      } else {
        toggle.setAttribute("aria-checked", "false");
        // add any other visual updates needed
      }
    });
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
          // get current visible theme rather than stored preference
          const currentTheme = getCurrentActiveTheme();
          const newTheme = currentTheme === "dark" ? "light" : "dark";
          // when toggling, always move to explicit mode, not system mode
          applyTheme(newTheme);
          updateToggleStates();
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
      if (isInSystemMode()) {
        applyTheme(SYSTEM_THEME, false);
        updateToggleStates();
      }
    });
})();
