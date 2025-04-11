// Script to apply Light / Dark Mode (Theme) v2.0
// by S2 Framework

(function () {
    try {
      const THEME_KEY = "theme";
      const SYSTEM_THEME = "system";
      const LIGHT_CLASS = "u-light-mode";
      const DARK_CLASS = "u-dark-mode";
      const THEME_CHANGE_ALLOWED_ATTR = "theme-change";
      // get system's preferred color scheme
      function getSystemTheme() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      // check if theme changes are allowed
      const themeChangeAllowed =
        document.body.getAttribute(THEME_CHANGE_ALLOWED_ATTR) !== "false";
      if (themeChangeAllowed) {
        let themeToApply = null;
        let fromDefaultAttribute = false;
        // (1) check for a valid theme-default attribute on <body>
        const defaultTheme = document.body.getAttribute("theme-default");
        if (defaultTheme !== null) {
          // if theme-default exists, see if it's a supported value
          if (defaultTheme === "light" || defaultTheme === "dark") {
            themeToApply = defaultTheme;
            fromDefaultAttribute = true;
          } else if (defaultTheme === "system" || defaultTheme === "") {
            themeToApply = SYSTEM_THEME;
            fromDefaultAttribute = true;
          }
          // unknown values are ignored, falling back to localStorage
        }
        // (2) if themeToApply is not set by theme-default, check localStorage
        if (!themeToApply) {
          const storedTheme = localStorage.getItem(THEME_KEY);
          themeToApply = storedTheme || SYSTEM_THEME;
        }
        // (3) resolve the actual theme based on whether we follow system or user preference
        const actualTheme =
          themeToApply === SYSTEM_THEME ? getSystemTheme() : themeToApply;
        // (4) apply the corresponding class
        if (actualTheme === "dark") {
          document.body.classList.add(DARK_CLASS);
        } else {
          document.body.classList.add(LIGHT_CLASS);
        }
        // only update localStorage if this wasn't from theme-default attribute
        if (!fromDefaultAttribute) {
          localStorage.setItem(THEME_KEY, themeToApply);
        }
      }
    } catch (e) {
      console.warn("Theme initialization error:", e);
    }
  })();
  