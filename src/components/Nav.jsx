import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
//
export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  //

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
          AGENCY
        </motion.h3>

        {/* Desktop Menu */}
        <div className="xl:flex gap-x-6 items-center hidden">
          <button
            onClick={() => scrollTo("home")}
            className="font-medium text-[#082032] cursor-pointer"
            title="Home"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="font-medium text-[#082032] cursor-pointer"
            title="About"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="font-medium text-[#082032] cursor-pointer"
            title="Services"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo("blogs")}
            className="font-medium text-[#082032] cursor-pointer"
            title="b"
          >
            Blogs
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="font-medium text-[#082032] cursor-pointer"
            title=""
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
        <button onClick={() => scrollTo("home")} className="font-medium">
          Home
        </button>
        <button onClick={() => scrollTo("about")} className="font-medium">
          About
        </button>
        <button onClick={() => scrollTo("services")} className="font-medium">
          Services
        </button>
        <button onClick={() => scrollTo("blogs")} className="font-medium">
          Blogs
        </button>
        <button onClick={() => scrollTo("contact")} className="font-medium">
          Contact
        </button>
      </div>
    </header>
  );
}
