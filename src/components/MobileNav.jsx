import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useSearch } from "../context/SearchContext";
import { IoSearchOutline } from "react-icons/io5";

//
export default function MobileNav() {
  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showProjectFilters, setShowProjectFilters] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  //
  const { projectActiveCategory, setProjectActiveCategory, setSearchQuery } =
    useSearch();
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
      const blogsElement = document.getElementById("blogs");
      const projectsElement = document.getElementById("portfolios");
      if (blogsElement) {
        const rect = blogsElement.getBoundingClientRect();
        // Show search only when scrolled 100px into the blog section
        setShowSearch(rect.top < -100 && rect.bottom > 0);
      }
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
  console.log(showSearch);
  //
  return (
    <aside className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex sm:bottom-0 sm:left-0 sm:py-2 sm:fixed w-full z-20  dark:bg-black shadow sm:justify-center flex justify-center fixed bottom-0 left-0 bg-white py-2 px-6">
      {showProjectFilters ? (
        <div className="flex flex-wrap gap-x-2 justify-center">
          {categories.map((cat) => (
            <motion.button
              title={cat}
              key={cat}
              layoutId={`project-filter-${cat}`}
              onClick={() => setProjectActiveCategory(cat)}
              className={`whitespace-nowrap  rounded-full cursor-pointer transition-colors duration-200 font-medium font-primary tracking-wide ${
                projectActiveCategory === cat ? "text-[#0076DF]" : ""
              }`}
              aria-pressed={projectActiveCategory === cat}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      ) : showSearch ? (
        <div className="flex w-full border overflow-hidden focus:outline focus:outline-[#0076DF] transition-all duration-200 h-8 rounded-full">
          <motion.input
            title="Search Blogs"
            layoutId="blog-search"
            name="search"
            type="search"
            placeholder="Search blog ..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="font-primary tracking-wide w-full h-full px-4 rounded-[0,0,100%,100%] outline-none focus:outline-none border-none focus:placeholder:text-[#0076DF] transition-all duration-200"
          />
          <button
            type="button"
            onClick={() => setSearchQuery(inputValue)}
            className="inline-block w-15 cursor-pointer h-full bg-[#EEEEEE] border-none outline-none rounded-[0,100%,100%,0] hover:bg-[#eeeeeeb2]"
            aria-label="Search Blogs"
          >
            <IoSearchOutline className="text-2xl mx-auto" />
          </button>
        </div>
      ) : (
        <nav className="w-full sm:px-10 flex justify-between px-2">
          <button
            onClick={() => scrollTo("services")}
            className={`text-base font-normal font-primary cursor-pointer ${
              activeSection === "services" ? "text-[#0076DF]" : ""
            }`}
            title="Services"
          >
            <span className="block">&#128295;</span>
            Services
          </button>
          <button
            onClick={() => scrollTo("about")}
            className={`text-base font-normal font-primary cursor-pointer sm:block hidden ${
              activeSection === "about" ? "text-[#0076DF]" : ""
            }`}
            title="About"
          >
            <span className="block">&#128522;</span>
            About
          </button>
          <button
            onClick={() => scrollTo("portfolios")}
            className={`text-base font-normal font-primary cursor-pointer ${
              activeSection === "portfolios" ? "text-[#0076DF]" : ""
            }`}
            title="Portfolios"
          >
            <span className="mx-auto block">&#127912;</span>
            Portfolios
          </button>
          <button
            onClick={() => scrollTo("blogs")}
            className={`text-base font-normal font-primary cursor-pointer ${
              activeSection === "blogs" ? "text-[#0076DF]" : ""
            }`}
            title="Blogs"
          >
            <span className="mx-auto block">&#128240;</span>
            Blogs
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={`text-base font-normal font-primary cursor-pointer sm:block hidden ${
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
