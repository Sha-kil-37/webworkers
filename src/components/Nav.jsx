import React, { useState } from "react";
import { Link } from "react-router";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            WebWorkers
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
            Get Started
          </button>

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
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium mt-2 w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
