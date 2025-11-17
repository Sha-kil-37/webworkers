import { Link } from "react-router";
import BlurInText from "./BlurInText";
import Paragraph from "./Paragraph";

export default function Banner() {
  return (
    <section className="relative py-10 flex items-center justify-center bg-gradient-to-br overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Main heading */}
        <BlurInText>
          <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
            We Build Creative Digital Solutions
          </span>
        </BlurInText>

        {/* Subtitle */}
        <Paragraph>
          We're building the future of human connection through innovative
          technology and design.
        </Paragraph>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12 sm:mt-14">
          <Link
            to={"/about"}
            className="group px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full inline-flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            About Us
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
          <Link
            to={"/contact"}
            className="group px-8 py-3 sm:py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-full inline-flex items-center justify-center border border-slate-600 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Contact Us
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
