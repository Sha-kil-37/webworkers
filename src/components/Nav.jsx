import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
      className="bg-slate-900 text-white sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
        <a href="/" className="text-lg font-semibold">
          WebWorkers
        </a>

        {/* mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        <ul
          className={`${
            open ? "block" : "hidden"
          } absolute left-0 right-0 top-full bg-slate-900 shadow-md md:shadow-none md:bg-transparent md:static md:flex md:items-center md:gap-4`}
          onClick={() => setOpen(false)}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="block px-4 py-2 md:px-0 md:py-0 rounded hover:bg-white/5"
                href={l.href}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
