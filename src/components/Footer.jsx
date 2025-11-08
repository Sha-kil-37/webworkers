import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#002f4993] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
     

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((item, i) => {
              return (
                <NavLink
                  key={i}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold block"
                      : "inactive-link font-semibold block"
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          <div>
            <h4 className="font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <div className="text-sm text-slate-200 space-y-2">
              <div>
                address: Dhaka , <mark> Bangladesh</mark>
              </div>
              <div>Phone: +880-1581049601</div>
              <div>
                Email: {""}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  href="mailto:sakildevmern@gmail.com"
                >
                  sakildevmern@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/shak.sakil.96"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.06 5.66 21.13 10.44 21.9v-6.35H8.08v-2.5h2.36V9.41c0-2.33 1.39-3.61 3.52-3.61 1.02 0 2.09.18 2.09.18v2.3h-1.17c-1.15 0-1.51.72-1.51 1.45v1.75h2.57l-.41 2.5h-2.16V21.9C18.34 21.13 22 17.06 22 12.07z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/shakil-ahmed-aba241317/"
                aria-label="linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M21.6 0H2.4A2.4 2.4 0 000 2.4v19.2A2.4 2.4 0 002.4 24h19.2a2.4 2.4 0 002.4-2.4V2.4A2.4 2.4 0 0021.6 0zM7.2 20.4H3.6V9h3.6v11.4zM5.4 7.8a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm15 12.6h-3.6v-5.4c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v5.1H9V9h3.6v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 2.5 0 4.4 1.6 4.4 5v6.6z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@shakil-o4y"
                aria-label="youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M23.5 6.2a2.8 2.8 0 00-2-2C19.7 3.8 12 3.8 12 3.8s-7.7 0-9.5.4a2.8 2.8 0 00-2 2A29.9 29.9 0 000 12a29.9 29.9 0 00.5 5.8 2.8 2.8 0 002 2c1.8.4 9.5.4 9.5.4s7.7 0 9.5-.4a2.8 2.8 0 002-2 29.9 29.9 0 00.5-5.8 29.9 29.9 0 00-.5-5.8zM9.5 15.6V8.4l6.4 3.6-6.4 3.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <p className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-200">
          © 2025 webworkers digital agency. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
