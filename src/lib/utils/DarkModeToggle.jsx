import { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";

//
export default function DarkModeToggle({ className }) {
  //
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch (e) {
      // console.log(e)
      return "light";
    }
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === "dark") root.classList.add("dark");
      else root.classList.remove("dark");
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  function toggle() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
      className={`${className}`}
    >
      {theme === "dark" ? <IoMdSunny /> : <GoMoon />}
    </button>
  );
}
