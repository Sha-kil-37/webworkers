import logo from "../assets/logo.png";
import CopyRight from "./CopyRight";
import Paragraph from "./Paragraph";
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
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        <div>
          <Link to="/" className="block h-10 w-10 overflow-hidden">
            <img className="h-full w-full inline-block" src={logo} alt={logo} />
          </Link>
          <Paragraph className="font-bold mt-2">Web Workers</Paragraph>
        </div>
        <div className="">
          <h3 className="font-bold">Quick Links</h3>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 block"
                  : "text-gray-700 hover:text-blue-600 transition-colors duration-300 block"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div>
          <h3 className="font-bold">Legal Resources</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Term of Service</li>
            <li>cookie Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <SocialLink />
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}
