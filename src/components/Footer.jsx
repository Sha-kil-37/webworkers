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
    <footer className="bg-neutral-950 py-15">
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">
              Web Workers<span className="text-indigo-500"> . </span>
            </h2>
            <Paragraph className="mt-3 font-medium leading-relaxed text-white">
              We build modern, scalable digital experiences for brands that want
              to stand out.
            </Paragraph>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Services</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollTo("services")}
                className="font-medium text-white cursor-pointer block"
                title="Services"
              >
                Web & App Development
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="font-medium text-white cursor-pointer block"
                title="Services"
              >
                Digital Marketing & SEO
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="font-medium text-white cursor-pointer block"
                title="Services"
              >
                Social Media Marketing
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="font-medium text-white cursor-pointer block"
                title="Services"
              >
                UI/UX Design
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="font-medium text-white cursor-pointer block"
                title="Services"
              >
                Business Consultation
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="font-medium text-white cursor-pointer block"
                title="Services"
              >
                Custom Software Development
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="font-medium text-white cursor-pointer block"
                title="Services"
              >
                Artificial Intelligence Integration
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Company</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollTo("about")}
                className="font-medium text-white cursor-pointer block"
                title="About"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="font-medium text-white cursor-pointer block"
                title="Projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollTo("blogs")}
                className="font-medium text-white cursor-pointer block"
                title="Blogs"
              >
                Blogs
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="font-medium text-white cursor-pointer block"
                title="Services"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="font-medium text-white cursor-pointer block"
                title="Contact"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact</h3>
            <Paragraph className="font-medium text-white">
              sakildevmern@gmail.com
            </Paragraph>
            <Paragraph className="font-medium text-white mt-1">
              +880 1581049601
            </Paragraph>

            {/* Social */}
            <div className="flex gap-4 mt-5">
              <Link
                title="Linkedin"
                to="https://www.linkedin.com/in/shakil-ahmed-aba241317/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-white" />
              </Link>
              <Link
                title="Facebook"
                to="https://www.facebook.com/shak.sakil.96"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white" />
              </Link>
              <Link
                title="Discord"
                to="https://discord.com/users/1420788964641603706"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 flex items-center justify-between mt-5">
          <Paragraph className="font-medium text-white">
            &copy;{new Date().getFullYear()} Web Workers Agency. All rights
            reserved.
          </Paragraph>
          <div className="flex gap-x-4">
            <Link className="font-medium text-white block">
              Privacy Policy
            </Link>
            <Link className="font-medium text-white block">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
