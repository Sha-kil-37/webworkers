import logo from "../assets/logo.png";
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const THRESHOLD = 150; // pixels scrolled before hiding the nav

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setHidden(window.scrollY > THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    }

    // init state and add listener
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`bg-amber-50 py-5 sticky top-0 left-0 z-10 w-full transform transition-transform transition-opacity duration-300 ease-in-out ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="overflow-hidden block font-bold text-xl bg-red-300 px-2 text-white"
        >
          Web Workers
        </Link>

        <button>Dark mode</button>
      </div>
    </nav>
  );
}
