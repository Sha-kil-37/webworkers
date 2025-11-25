import React from "react";
import Paragraph from "./Paragraph";
import CopyRight from "./CopyRight";
import SocialLink from "./SocialLink";
import { NavLink, Link } from "react-router";
//
export default function Footer() {
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
    <footer className="bg-[#F5F7F8] py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        <div>
          <Link to={"/"} className="text-2xl font-semibold ">
            WebWorkers
          </Link>
          <Paragraph>
            Building modern web solutions for your business.
          </Paragraph>
          <p className="mt-4 text-xs text-slate-400">
            Made with ❤️ by WebWorkers
          </p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
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
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <SocialLink />
        </div>
        <div>
          <h3 className="font-bold">Legal Resources</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Term of Service</li>
            <li>cookie Policy</li>
          </ul>
        </div>
      </div>

      <CopyRight />
    </footer>
  );
}
