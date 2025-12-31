import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
//
export default function Navbar() {
  const currentPath = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
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
      if (blogsElement) {
        const rect = blogsElement.getBoundingClientRect();
        setShowSearch(rect.top < window.innerHeight && rect.bottom > 0);
      }
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
        scrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="w-6xl mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h3
          onClick={() => navigate("/")}
          layoutId="site-logo"
          className="text-xl font-bold cursor-pointer"
        >
          AGENCY <span className="text-[#082032]">.</span>
        </motion.h3>

        {/* Search Input */}
        {showSearch && (
          <motion.input
            layoutId="blog-search"
            type="search"
            placeholder="Search blog ..."
            className="block py-2 bg-gray-50 px-2 rounded mx-4"
          />
        )}

        {/* Desktop Menu */}
        <div className="xl:flex gap-x-6 items-center hidden">
          <button
            onClick={() => handleNavigate("home")}
            className="font-medium text-[#082032] cursor-pointer"
            title="Home"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate("about")}
            className="font-medium text-[#082032] cursor-pointer"
            title="About"
          >
            About
          </button>
          <button
            onClick={() => handleNavigate("services")}
            className="font-medium text-[#082032] cursor-pointer"
            title="Services"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigate("blogs")}
            className="font-medium text-[#082032] cursor-pointer"
            title="Blogs"
          >
            Blogs
          </button>
          <button
            onClick={() => handleNavigate("contact")}
            className="font-medium text-[#082032] cursor-pointer"
            title="Contact"
          >
            Contact
          </button>
        </div>

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
          className="font-medium"
        >
          Home
        </button>
        <button
          title="About"
          onClick={() => handleNavigate("about")}
          className="font-medium"
        >
          About
        </button>
        <button
          title="Services"
          onClick={() => handleNavigate("services")}
          className="font-medium"
        >
          Services
        </button>
        <button
          title="Blogs"
          onClick={() => handleNavigate("blogs")}
          className="font-medium"
        >
          Blogs
        </button>
        <button
          title="Contact"
          onClick={() => handleNavigate("contact")}
          className="font-medium"
        >
          Contact
        </button>
      </div>
    </header>
  );
}
