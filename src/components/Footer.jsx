import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">
              Web Workers<span className="text-indigo-500"> . </span>
            </h2>
            <p className="mt-3 font-medium leading-relaxed">
              We build modern, scalable digital experiences for brands that want
              to stand out.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Web Development</li>
              <li className="hover:text-white transition">UI/UX Design</li>
              <li className="hover:text-white transition">Brand Identity</li>
              <li className="hover:text-white transition">SEO Optimization</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Projects</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">hello@pixfer.com</p>
            <p className="text-sm mt-1">+880 1234-567890</p>

            {/* Social */}
            <div className="flex gap-4 mt-5">
              <a className="p-2 rounded-full bg-neutral-800 hover:bg-indigo-600 transition">
                <FaFacebookF />
              </a>
              <a className="p-2 rounded-full bg-neutral-800 hover:bg-indigo-600 transition">
                <FaTwitter />
              </a>
              <a className="p-2 rounded-full bg-neutral-800 hover:bg-indigo-600 transition">
                <FaLinkedinIn />
              </a>
              <a className="p-2 rounded-full bg-neutral-800 hover:bg-indigo-600 transition">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
           &copy;{new Date().getFullYear()} Web Workers Agency. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
