import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import theme from "../lib/theme";
import { NavLink } from "react-router";
//
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = theme.readTheme();
    if (stored) return stored;
    return theme.getSystemPrefersDark() ? "dark" : "light";
  });
  const lastY = useRef(0);
  //

  //
  useEffect(() => {
    // ensure theme is applied on mount
    theme.applyTheme(theme.readTheme());

    // keep local state in sync when system changes
    if (window.matchMedia) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => {
        const stored = theme.readTheme();
        if (stored === null)
          setThemeMode(theme.getSystemPrefersDark() ? "dark" : "light");
      };
      mq.addEventListener && mq.addEventListener("change", handler);
      return () =>
        mq.removeEventListener && mq.removeEventListener("change", handler);
    }
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 8);

      // if mobile menu is open, keep navbar visible
      if (open) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      // scrolling down -> hide, scrolling up -> show
      if (y > lastY.current && y > 50) {
        setHidden(true);
      } else if (y < lastY.current) {
        setHidden(false);
      }

      lastY.current = y;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <nav
      className={`sticky top-0 z-50 transform transition-transform duration-300  ${
        scrolled ? "shadow-md" : ""
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "inactive-link font-bold"
              }
            >
              webworkers
            </NavLink>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((item, i) => {
              return (
                <NavLink
                  key={i}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "inactive-link font-semibold"
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          {/* Desktop action button */}
          <div className="hidden md:flex md:items-center md:ml-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const next = theme.toggleTheme();
                  setThemeMode(
                    next === null
                      ? theme.getSystemPrefersDark()
                        ? "dark"
                        : "light"
                      : next
                  );
                }}
                aria-label="Toggle theme"
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                title="Toggle theme"
              >
                {themeMode === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 5.22a1 1 0 011.42 0L6.64 6.22a1 1 0 11-1.42 1.42L4.22 6.64a1 1 0 010-1.42zM2 11a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zM4.22 16.78a1 1 0 010-1.42L5.64 14.36a1 1 0 011.42 1.42l-1.42 1.42a1 1 0 01-1.42 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM15.78 16.78a1 1 0 011.42 0l1.42-1.42a1 1 0 10-1.42-1.42l-1.42 1.42a1 1 0 010 1.42zM17 11a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM15.78 5.22a1 1 0 010 1.42L14.36 7.64a1 1 0 11-1.42-1.42l1.42-1.42a1 1 0 011.42 0z" />
                  </svg>
                )}
              </button>
              <Button onClick={() => alert("Clicked!")}>Get Start</Button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {open ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, shown when open */}
      <div className={`${open ? "block" : "hidden"} md:hidden`}>
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Projects", href: "/projects" },
          { name: "Services", href: "/services" },
          { name: "Contact", href: "/contact" },
        ].map((item, i) => {
          return (
            <NavLink
              key={i}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold block"
                  : "inactive-link font-semibold block"
              }
            >
              {item.name}
            </NavLink>
          );
        })}
        <Button onClick={() => alert("Clicked!")}>Get Start</Button>
      </div>
    </nav>
  );
}
