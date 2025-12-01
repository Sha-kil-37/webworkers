import  { useState } from "react";
import { Link, NavLink } from "react-router";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../assets/logo.png";
import BlurInText from "./BlurInText";
//
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  // navlinks data array
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
  ];
  //
  return (
    
      <nav className="sticky top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="block h-10 w-10 overflow-hidden">
              <img className="h-full w-full" src={logo} alt={logo} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-medium"
                        : "text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
   
  );
}
