import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Paragraph from "../components/Paragraph";
import { Link } from "react-router";
import { FaDiscord } from "react-icons/fa6";

//
export default function Footer() {
  //
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  //
  return (
    <footer className="py-15 bg-[#F5F5F7] dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              Web Workers<span className="text-[#0076DF]"> . </span>
            </h2>
            <Paragraph className="mt-3 font-medium leading-relaxed text-[#0076DF]">
              We build modern, scalable digital experiences for brands that want
              to stand out.
            </Paragraph>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Services"
              >
                Web & App Development
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Services"
              >
                Digital Marketing & SEO
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Services"
              >
                Social Media Marketing
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Services"
              >
                UI/UX Design
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Services"
              >
                Business Consultation
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Services"
              >
                Custom Software Development
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Services"
              >
                Artificial Intelligence Integration
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollTo("about")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="About"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollTo("blogs")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Blogs"
              >
                Blogs
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Services"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="hover:text-[#0076DF] duration-300 transition-all font-medium cursor-pointer block"
                title="Contact"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Say Hello</h3>
            <Link
              title="Mail"
              to="mailto:sakildevmern@gmail.com"
              target="_blank"
              className="hover:text-[#0076DF] duration-300 transition-all font-medium block"
            >
              sakildevmern@gmail.com
            </Link>
            <Link
              title="Call"
              to="tel:+8801581049601"
              target="_blank"
              className="hover:text-[#0076DF] duration-300 transition-all font-medium block"
            >
              +880 1581049601
            </Link>

            {/* Social */}
            <div className="flex gap-4 mt-5">
              <Link
              className="p-2 shadow bg-white"
                title="Linkedin"
                to="https://www.linkedin.com/in/shakil-ahmed-aba241317/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-[#0072B1]" />
              </Link>
              <Link
                title="Facebook"
                to="https://www.facebook.com/shak.sakil.96"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 shadow bg-white"
              >
                <FaFacebookF className="text-[#1877F2]" />
              </Link>
              <Link
                title="Discord"
                to="https://discord.com/users/1420788964641603706"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 shadow bg-white"
              >
                <FaDiscord className="text-[#7289da]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 flex items-center justify-between mt-5">
          <Paragraph className="font-medium mt-2">
            &copy;{new Date().getFullYear()} Web Workers Agency. All rights
            reserved.
          </Paragraph>
          <div className="flex gap-x-4 mt-2">
            <Link
              to={"/terms&privacy"}
              className="font-medium block"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/terms&privacy"}
              className="font-medium block"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
