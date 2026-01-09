import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useSearch } from "../context/SearchContext";
//
export default function MobileNav() {
  const [showProjectFilters, setShowProjectFilters] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  //
  const { projectActiveCategory, setProjectActiveCategory } = useSearch();
  //
  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "E-commerce",
    "Marketing",
  ];
  //
  useEffect(() => {
    const onScroll = () => {
      const sections = [
        "home",
        "about",
        "portfolios",
        "services",
        "blogs",
        "contact",
      ];
      const projectsElement = document.getElementById("portfolios");
      if (projectsElement) {
        const rect = projectsElement.getBoundingClientRect();
        // Show project filters only when scrolled 100px into the projects section
        setShowProjectFilters(rect.top < -100 && rect.bottom > 0);
      }
      let current = "";
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // 
    const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  //
  return (
    <aside className="hidden 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex sm:bottom-0 sm:left-0 sm:py-2 sm:fixed w-full z-20  bg-white dark:bg-black shadow  sm:justify-center">
      {showProjectFilters ? (
        <div className="">
          {categories.map((cat) => (
            <motion.button
              title={cat}
              key={cat}
              layoutId={`project-filter-${cat}`}
              onClick={() => setProjectActiveCategory(cat)}
              className={`whitespace-nowrap px-3 py-1 rounded-full cursor-pointer transition-colors duration-200 font-medium font-primary tracking-wide ${
                projectActiveCategory === cat ? "text-[#0076DF]" : ""
              }`}
              aria-pressed={projectActiveCategory === cat}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      ) : (
        <nav className="w-full px-4 flex justify-between">
          <button
            onClick={() => scrollTo("home")}
            className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
              activeSection === "home" ? "text-[#0076DF]" : ""
            }`}
            title="Home"
          >
            <span className="block">&#127968;</span>
            Home
          </button>
          <button
            onClick={() => scrollTo("services")}
            className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
              activeSection === "services" ? "text-[#0076DF]" : ""
            }`}
            title="Services"
          >
            <span className="block">&#128295;</span>
            Services
          </button>
          <button
            onClick={() => scrollTo("about")}
            className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
              activeSection === "about" ? "text-[#0076DF]" : ""
            }`}
            title="About"
          >
            <span className="block">&#128522;</span>
            About
          </button>
          <button
            onClick={() => scrollTo("portfolios")}
            className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
              activeSection === "portfolios" ? "text-[#0076DF]" : ""
            }`}
            title="Portfolios"
          >
            <span className="mx-auto block">&#127912;</span>
            Portfolios
          </button>
          
          <button
            onClick={() => scrollTo("blogs")}
            className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
              activeSection === "blogs" ? "text-[#0076DF]" : ""
            }`}
            title="Blogs"
          >
            <span className="mx-auto block">&#128240;</span>
            Blogs
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
              activeSection === "contact" ? "text-[#0076DF]" : ""
            }`}
            title="Contact"
          >
            <span className="block mx-auto">&#128222;</span>
            Contact
          </button>
        </nav>
      )}

    </aside>
  );
}
