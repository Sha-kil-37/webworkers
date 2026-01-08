import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Paragraph from "../components/Paragraph";
import { Link } from "react-router";
import { FaDiscord } from "react-icons/fa6";
//
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
    <footer className="xl:py-10 lg:py-10 md:py-10 sm:pt-10 sm:pb-20">
      <div className="xl:w-6xl mx-auto lg:w-5xl md:px-6 md:mx-auto sm:px-6 sm:mx-auto">
        {/* Grid */}
        <div className="xl:grid xl:gap-12 xl:grid-cols-4 lg:grid lg:gap-10 lg:grid-cols-4 md:grid md:gap-8 md:grid-cols-2 sm:grid sm:gap-8 sm:grid-cols-2">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide font-primary">
              Web Workers<span className="text-[#0076DF]"> . </span>
            </h2>
            <Paragraph className="mt-2 font-medium tracking-wide  font-primary">
              We build modern, scalable digital experiences for brands that want
              to stand out.
            </Paragraph>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-2 font-semibold font-primary tracking-wide">
              Company
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => scrollTo("about")}
                className="hover:text-[#0076DF] duration-200 transition-all font-primary tracking-wide cursor-pointer block"
                title="About"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="hover:text-[#0076DF] duration-200 transition-all font-primary tracking-wide cursor-pointer block"
                title="Projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollTo("blogs")}
                className="hover:text-[#0076DF] duration-200 transition-all font-primary tracking-wide cursor-pointer block"
                title="Blogs"
              >
                Blogs
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-200 transition-all font-primary tracking-wide cursor-pointer block"
                title="Services"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="hover:text-[#0076DF] duration-200 transition-all font-primary tracking-wide cursor-pointer block"
                title="Contact"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-2 font-semibold font-primary tracking-wide">
              Services
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-200 transition-all cursor-pointer block font-primary tracking-wide"
                title="Services"
              >
                Web & App Development
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-200 transition-all cursor-pointer block font-primary tracking-wide"
                title="Services"
              >
                Digital Marketing & SEO
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-200 transition-all cursor-pointer block font-primary tracking-wide"
                title="Services"
              >
                Social Media Marketing
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-200 transition-all cursor-pointer block font-primary tracking-wide"
                title="Services"
              >
                UI/UX Design
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-200 transition-all cursor-pointer block font-primary tracking-wide"
                title="Services"
              >
                Business Consultation
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-200 transition-all cursor-pointer block font-primary tracking-wide"
                title="Services"
              >
                Software Development
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-[#0076DF] duration-200 transition-all cursor-pointer block font-primary tracking-wide"
                title="Services"
              >
                Artificial Intelligence
              </button>
            </div>
          </div>
          {/* Contact */}
          <div>
            <h3 className="mb-2 font-semibold font-primary tracking-wide">
              Say Hello
            </h3>
            <Link
              title="Mail"
              to="mailto:sakildevmern@gmail.com"
              target="_blank"
              className="hover:text-[#0076DF] duration-200 transition-all block font-primary tracking-wide"
            >
              sakildevmern@gmail.com
            </Link>
            <Link
              title="Call"
              to="tel:+8801581049601"
              target="_blank"
              className="hover:text-[#0076DF] duration-200 transition-all block font-primary tracking-wide"
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
        <div className="border-t border-white flex items-center justify-between mt-3">
          <Paragraph className="mt-3 font-medium  font-primary tracking-wide">
            &copy;{new Date().getFullYear()} Web Workers Agency. All rights
            reserved.
          </Paragraph>
          <div className="xl:flex xl:gap-x-4 xl:mt-2 lg:flex lg:gap-x-4 lg:mt-2">
            <Link
              to={"/terms&privacy"}
              className="font-medium  font-primary tracking-wide block"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/terms&privacy"}
              className="font-medium  font-primary tracking-wide block"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
