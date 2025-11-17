import React from "react";
import Paragraph from "./Paragraph";

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <a href="/" className="text-2xl font-semibold text-white">
            WebWorkers
          </a>
         <Paragraph>Building modern web solutions for your business.</Paragraph>
          <p className="mt-4 text-xs text-slate-400">
            Made with ❤️ by WebWorkers
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <p className="text-sm text-slate-300">hello@webworkers.example</p>
          <p className="text-sm text-slate-300">+1 (555) 123-4567</p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="#"
              aria-label="GitHub"
              className="text-slate-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.287-.011-1.244-.017-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.494.997.108-.776.419-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.044.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.244 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.371.814 1.102.814 2.222 0 1.605-.015 2.899-.015 3.293 0 .322.216.698.825.579C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-slate-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5c0 1.381-1.116 2.5-2.49 2.5A2.49 2.49 0 0 1 0 3.5 2.49 2.49 0 0 1 2.49 1 2.49 2.49 0 0 1 4.98 3.5zM.5 8.98h4.99V24H.5V8.98zM8.98 8.98h4.783v2.038h.068c.666-1.262 2.292-2.593 4.72-2.593 5.042 0 5.97 3.32 5.97 7.637V24h-5V15.27c0-2.07-.038-4.73-2.88-4.73-2.88 0-3.32 2.249-3.32 4.57V24H8.98V8.98z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="text-slate-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.897 4.897 0 0 1-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.085c.627 1.956 2.445 3.379 4.6 3.419A9.867 9.867 0 0 1 .96 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.009-7.506 14.009-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <span>
            © {new Date().getFullYear()} WebWorkers. All rights reserved.
          </span>
          <span className="mt-2 md:mt-0">Designed & built with care.</span>
        </div>
      </div>
    </footer>
  );
}
