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

  //
  return (
    <aside className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex sm:bottom-0 sm:left-0 sm:py-2 sm:fixed w-full z-20  dark:bg-black shadow sm:justify-center flex justify-center fixed bottom-0 left-0 bg-white py-3 px-4">
      {showProjectFilters ? (
        <div className="flex flex-wrap gap-x-3 justify-center w-full">
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
        <div className="w-full">
          <div className="flex border overflow-hidden focus:outline focus:outline-[#0076DF] transition-all duration-200 h-8 rounded-full sm:w-xl sm:mx-auto w-full">
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
        </div>
      ) : (
        <nav className="w-full flex justify-center items-center gap-x-15 flex-wrap">
          <button
            onClick={() => scrollTo("services")}
            className={`text-base font-normal font-primary cursor-pointer block ${
              activeSection === "services" ? "text-[#0076DF]" : ""
            }`}
            title="Services"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-toolbox-icon lucide-toolbox"><path d="M16 12v4"/><path d="M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 14h20"/><path d="M8 12v4"/></svg>
           
          </button>
          <button
            onClick={() => scrollTo("about")}
            className={`text-base font-normal font-primary cursor-pointer sm:block hidden ${
              activeSection === "about" ? "text-[#0076DF]" : ""
            }`}
            title="About"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-pen-icon lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg>
          </button>
          <button
            onClick={() => scrollTo("portfolios")}
            className={`text-base font-normal font-primary cursor-pointer block ${
              activeSection === "portfolios" ? "text-[#0076DF]" : ""
            }`}
            title="Portfolios"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gallery-vertical-icon lucide-gallery-vertical"><path d="M3 2h18"/><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M3 22h18"/></svg>
           
          </button>
          <button
            onClick={() => scrollTo("blogs")}
            className={`text-base font-normal font-primary cursor-pointer block ${
              activeSection === "blogs" ? "text-[#0076DF]" : ""
            }`}
            title="Blogs"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-logs-icon lucide-logs"><path d="M3 5h1"/><path d="M3 12h1"/><path d="M3 19h1"/><path d="M8 5h1"/><path d="M8 12h1"/><path d="M8 19h1"/><path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/></svg>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={`text-base font-normal font-primary cursor-pointer sm:block hidden ${
              activeSection === "contact" ? "text-[#0076DF]" : ""
            }`}
            title="Contact"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-user-round-icon lucide-square-user-round"><path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
          </button>
        </nav>
      )}
    </aside>
  );
}
