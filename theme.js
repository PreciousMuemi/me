// Shared theme persistence and color handling
(function() {
  const THEME_KEY = 'portfolio-theme'; // 'dark' or 'light'

  function applySavedTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const checkbox = document.getElementById('mode-checkbox');
    if (!checkbox) return;

    if (saved === 'light') {
      checkbox.checked = true;
    } else if (saved === 'dark') {
      checkbox.checked = false;
    }
    // If nothing saved, leave default HTML state as-is
  }

  function setupThemeListener() {
    const checkbox = document.getElementById('mode-checkbox');
    if (!checkbox) return;

    checkbox.addEventListener('change', function() {
      const mode = checkbox.checked ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_KEY, mode);
      } catch (e) {
        // Ignore storage errors (private mode, etc.)
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    applySavedTheme();
    setupThemeListener();
  });
})();
