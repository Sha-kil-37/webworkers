import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { NavLink } from "react-router";
//
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  //

  //
  useEffect(() => {
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
            <Button onClick={() => alert("Clicked!")}>Get Start</Button>
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
