// Theme utility: read, apply, and toggle theme with localStorage + prefers-color-scheme
const STORAGE_KEY = "theme-preference"; // 'light' | 'dark' | null

export function getSystemPrefersDark() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function readTheme() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "light" || v === "dark") return v;
  } catch {
    // ignore
  }
  return null;
}

export function writeTheme(value) {
  try {
    if (value === null) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore
  }
}

export function applyTheme(theme) {
  // theme: 'light' | 'dark' | null (follow system)
  const root = document.documentElement;
  if (!root) return;
  const dark = theme === "dark" || (theme === null && getSystemPrefersDark());
  if (dark) root.classList.add("dark");
  else root.classList.remove("dark");
}

export function toggleTheme() {
  const current = readTheme();
  let next;
  if (current === "dark") next = "light";
  else if (current === "light") next = null; // go to system
  else next = "dark"; // null -> dark
  writeTheme(next);
  applyTheme(next);
  return next;
}

// initialize on load
if (typeof window !== "undefined") {
  const stored = readTheme();
  applyTheme(stored);
  // listen to system changes
  if (window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener &&
      mq.addEventListener("change", () => {
        const storedNow = readTheme();
        if (storedNow === null) applyTheme(null);
      });
  }
}

export default {
  readTheme,
  writeTheme,
  applyTheme,
  toggleTheme,
  getSystemPrefersDark,
};
