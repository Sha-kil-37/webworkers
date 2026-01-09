import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useSearch } from "../context/SearchContext";
import DarkModeToggle from "../lib/utils/DarkModeToggle";
import { IoSearchOutline } from "react-icons/io5";

//
export default function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const currentPath = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showProjectFilters, setShowProjectFilters] = useState(false);
  const { setSearchQuery, projectActiveCategory, setProjectActiveCategory } =
    useSearch();
  const [activeSection, setActiveSection] = useState("");
  //
  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "E-commerce",
    "Marketing",
  ];
  //
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  //
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const blogsElement = document.getElementById("blogs");
      const projectsElement = document.getElementById("portfolios");
      if (blogsElement) {
        const rect = blogsElement.getBoundingClientRect();
        // Show search only when scrolled 100px into the blog section
        setShowSearch(rect.top < -50 && rect.bottom > 0);
      }
      if (projectsElement) {
        const rect = projectsElement.getBoundingClientRect();
        // Show project filters only when scrolled 100px into the projects section
        setShowProjectFilters(rect.top < -30 && rect.bottom > 0);
      }
      const sections = [
        "home",
        "about",
        "portfolios",
        "services",
        "blogs",
        "contact",
      ];
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
  // handle navigate function for page navigate
  function handleNavigate(path) {
    if (currentPath.pathname === "/") {
      scrollTo(path);
    } else {
      navigate("/");
    }
  }
  //
  // console.log(currentPath.pathname)
  //
  return (
    <header
      className={`fixed 2xl:top-0 2xl:left-0 w-full z-20 transition-all duration-200 xl:top-0 xl:left-0 lg:top-0 lg:left-0 md:top-0 md:left-0 sm:top-0 sm:left-0  ${
        scrolled ? "bg-white dark:bg-black shadow" : "bg-transparent"
      }`}
    >
      <nav className="xl:w-6xl lg:w-5xl lg:mx-auto xl:mx-auto py-4 xl:flex xl:items-center xl:justify-between lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between px-6 sm:flex sm:items-center sm:justify-between">
        {/* Logo */}
        <motion.h3
          onClick={() => handleNavigate("home")}
          layoutId="site-logo"
          title="Home"
          className="text-xl font-bold cursor-pointer font-primary tracking-wide"
        >
          AGENCY
        </motion.h3>

        {/* Search Input */}
        {showSearch && (
          <div className="flex items-center rounded-full 2xl:w-xl xl:w-lg lg:w-lg md:w-md justify-between h-9 border overflow-hidden focus:outline focus:outline-[#0076DF] transition-all duration-200">
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
        )}

        {/* Project Filters */}
        {showProjectFilters && (
          <div className="flex 2xl:flex xl:flex lg:flex md:flex  gap-2 mx-2 sm:hidden">
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
        )}
        {/*  */}
        {/* Desktop Menu */}
        {showProjectFilters ? null : showSearch ? null : (
          <div className="2xl:flex xl:flex xl:items-center lg:flex lg:items-center md:flex sm:hidden">
            <button
              onClick={() => handleNavigate("home")}
              className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
                activeSection === "home" ? "text-[#0076DF]" : ""
              }`}
              title="Home"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate("services")}
              className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
                activeSection === "services" ? "text-[#0076DF]" : ""
              }`}
              title="Services"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigate("about")}
              className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
                activeSection === "about" ? "text-[#0076DF]" : ""
              }`}
              title="About"
            >
              About
            </button>
            <button
              onClick={() => handleNavigate("portfolios")}
              className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
                activeSection === "portfolios" ? "text-[#0076DF]" : ""
              }`}
              title="Portfolios"
            >
              Portfolios
            </button>
            
            <button
              onClick={() => handleNavigate("blogs")}
              className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
                activeSection === "blogs" ? "text-[#0076DF]" : ""
              }`}
              title="Blogs"
            >
              Blogs
            </button>
            <button
              onClick={() => handleNavigate("contact")}
              className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
                activeSection === "contact" ? "text-[#0076DF]" : ""
              }`}
              title="Contact"
            >
              Contact
            </button>
          </div>
        )}
        {/*  */}
        <DarkModeToggle className="2xl:block xl:block lg:block md:block  text-2xl cursor-pointer" />
      </nav>
    </header>
  );
}
