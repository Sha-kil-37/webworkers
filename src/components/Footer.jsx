import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#003049] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="text-2xl md:text-3xl font-semibold">logo</div>
          <p className="mt-2 text-sm text-slate-200">
            Creative Digital Solutions for Your Growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>
                <a className="hover:underline" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
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
              <div>Address: Dhaka, Bangladesh</div>
              <div>Phone: +880-1234-567890</div>
              <div>
                Email:{" "}
                <a className="underline" href="mailto:info@duwagency.com">
                  info@duwagency.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
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
                href="#"
                aria-label="instagram"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="behance"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M5 8h4a3 3 0 010 6H5V8zm0-2v2H2V6h3zM13 8h4v1h-4V8zm6 0h3v1h-3V8zM13 11h4a3 3 0 010 6h-4v-6zM2 20h7v-2H2v2zM13 16h4a3 3 0 100-6h-4v6z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="linkedin"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17V10.5H6v6.5h2.34zM7.17 9.4a1.34 1.34 0 110-2.68 1.34 1.34 0 010 2.68zM18 17v-3.5c0-2.08-1.12-3-2.6-3-1.2 0-1.74.66-2.04 1.13V10.5h-2.34V17H11v-5.5c0-1.07.2-2.13 1.46-2.13 1.22 0 1.4 1.08 1.4 2.06V17H18z" />
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
