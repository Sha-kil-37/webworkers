import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useSearch } from "../context/SearchContext";
import DarkModeToggle from "../lib/utils/DarkModeToggle";
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
      const projectsElement = document.getElementById("projects");
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
      const sections = ["home", "about", "services", "blogs", "contact"];
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
  // console.log(location);
  // handle navigate function for page navigate
  function handleNavigate(path) {
    if (currentPath.pathname === "/") {
      scrollTo(path);
    } else {
      navigate("/");
    }
  }
  //
  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur dark:bg-black/80" : "bg-transparent"
      }`}
    >
      <nav className="xl:w-6xl mx-auto py-4 xl:flex xl:items-center xl:justify-between">
        {/* Logo */}
        <motion.h3
          onClick={() => navigate("/")}
          layoutId="site-logo"
          className="text-xl font-bold cursor-pointer"
        >
          AGENCY <span className="text-[#0076DF]">.</span>
        </motion.h3>

        {/* Search Input */}
        {showSearch && (
          <motion.input
            layoutId="blog-search"
            type="search"
            placeholder="Search blog ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block py-1 bg-[#F5F5F7] text-[#082032] px-2 rounded mx-4"
          />
        )}

        {/* Project Filters */}
        {showProjectFilters && (
          <div className="flex gap-2 mx-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                layoutId={`project-filter-${cat}`}
                onClick={() => setProjectActiveCategory(cat)}
                className={`whitespace-nowrap px-3 py-1 rounded-full cursor-pointer transition-colors duration-300 font-medium border ${
                  projectActiveCategory === cat
                    ? "text-white bg-[#082032]"
                    : "text-[#082032] bg-[#F5F5F7]"
                }`}
                aria-pressed={projectActiveCategory === cat}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        )}

        {/* Desktop Menu */}
        <div className="xl:flex items-center hidden">
          <button
            onClick={() => handleNavigate("home")}
            className={`font-medium cursor-pointer px-3 py-1 ${
              activeSection === "home"
                ? "bg-[#082032] text-white"
                : "text-[#082032] bg-[#F5F5F7]"
            }`}
            title="Home"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate("services")}
            className={`font-medium cursor-pointer px-3 py-1 ${
              activeSection === "services"
                ? "bg-[#082032] text-white"
                : "text-[#082032] bg-[#F5F5F7]"
            }`}
            title="Services"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigate("about")}
            className={`font-medium cursor-pointer px-3 py-1 ${
              activeSection === "about"
                ? "bg-[#082032] text-white"
                : "text-[#082032] bg-[#F5F5F7]"
            }`}
            title="About"
          >
            About
          </button>

          <button
            onClick={() => handleNavigate("blogs")}
            className={`font-medium cursor-pointer px-3 py-1 ${
              activeSection === "blogs"
                ? "bg-[#082032] text-white"
                : "text-[#082032] bg-[#F5F5F7]"
            }`}
            title="Blogs"
          >
            Blogs
          </button>
          <button
            onClick={() => handleNavigate("contact")}
            className={`font-medium cursor-pointer px-3 py-1 ${
              activeSection === "contact"
                ? "bg-[#082032] text-white"
                : "text-[#082032] bg-[#F5F5F7]"
            }`}
            title="Contact"
          >
            Contact
          </button>
        </div>
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
