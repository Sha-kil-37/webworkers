import React from "react";
import { NavLink } from "react-router";

export default function NotFound() {
  //
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
    <section className="py-30 bg-green-200">
      <h1 className="font-bold text-5xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        quasi culpa itaque. Quaerat sint, voluptas optio sit aperiam adipisci
        nobis.
      </h1>
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-medium block"
              : "text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium block"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </section>
  );
}
