import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useSearch } from "../context/SearchContext";
import DarkModeToggle from "../lib/utils/DarkModeToggle";
import { IoSearchOutline } from "react-icons/io5";

//
export default function Navbar() {
  const currentPath = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showProjectFilters, setShowProjectFilters] = useState(false);
  const {
    searchQuery,
    setSearchQuery,
    projectActiveCategory,
    setProjectActiveCategory,
  } = useSearch();
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
        setShowSearch(rect.top < -100 && rect.bottom > 0);
      }
      if (projectsElement) {
        const rect = projectsElement.getBoundingClientRect();
        // Show project filters only when scrolled 100px into the projects section
        setShowProjectFilters(rect.top < -100 && rect.bottom > 0);
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
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-200 md:bg-amber-200  ${
        scrolled ? "bg-white dark:bg-[#232729] shadow" : "bg-transparent"
      }`}
    >
      <nav className="xl:w-6xl lg:w-5xl lg:mx-auto xl:mx-auto py-4 xl:flex xl:items-center xl:justify-between lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between px-6">
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
          <div className="relative group xl:w-96 lg:w-80">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 group-focus-within:text-[#0076DF] transition duration-200">
              <IoSearchOutline className="" size={18} />
            </span>
            <motion.input
              title="Search Blogs"
              layoutId="blog-search"
              name="search"
              type="search"
              placeholder="Search blog ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 focus:outline focus:outline-[#0076DF]
                    focus:border-[#0076DF]
                    transition-all duration-200 font-primary tracking-wide font-medium shadow rounded"
            />
          </div>
        )}

        {/* Project Filters */}
        {showProjectFilters && (
          <div className="flex gap-2 mx-2">
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
          <div className="xl:flex xl:items-center lg:flex lg:items-center hidden">
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
              onClick={() => handleNavigate("portfolios")}
              className={`tracking-wide font-primary font-medium cursor-pointer px-3 py-1 ${
                activeSection === "portfolios" ? "text-[#0076DF]" : ""
              }`}
              title="Portfolios"
            >
              Portfolios
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
        <DarkModeToggle className="text-2xl cursor-pointer" />
        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <button
          title="Home"
          onClick={() => handleNavigate("home")}
          className={`font-medium ${
            activeSection === "home"
              ? "bg-[#082032] text-white"
              : "text-[#082032]"
          }`}
        >
          Home
        </button>
        <button
          title="About"
          onClick={() => handleNavigate("about")}
          className={`font-medium ${
            activeSection === "about"
              ? "bg-[#082032] text-white"
              : "text-[#082032]"
          }`}
        >
          About
        </button>
        <button
          title="Services"
          onClick={() => handleNavigate("services")}
          className={`font-medium ${
            activeSection === "services"
              ? "bg-[#082032] text-white"
              : "text-[#082032]"
          }`}
        >
          Services
        </button>
        <button
          title="Blogs"
          onClick={() => handleNavigate("blogs")}
          className={`font-medium ${
            activeSection === "blogs"
              ? "bg-[#082032] text-white"
              : "text-[#082032]"
          }`}
        >
          Blogs
        </button>
        <button
          title="Contact"
          onClick={() => handleNavigate("contact")}
          className={`font-medium ${
            activeSection === "contact"
              ? "bg-[#082032] text-white"
              : "text-[#082032]"
          }`}
        >
          Contact
        </button>
      </div>
    </header>
  );
}
