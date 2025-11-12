import { Link } from "react-router";
import BlurInText from "./BlurInText";

export default function Banner() {
  //
  return (
    <section className="py-40 bg-[#f0f4f8] relative">
      <div className="max-w-7xl mx-auto">
        <BlurInText>We Build Creative Digital Solutions</BlurInText>
        <p className="max-w-[700px] mx-auto font-semibold text-3xl text-center mt-10">
          We're building the future of human connection through innovative
          technology and design.
        </p>
        <div className="flex gap-x-5 justify-center mt-10">
          <Link
          className="px-4 py-2 bg-blue-500 text-white rounded-4xl  inline-block font-medium hover:bg-blue-600 transition text-center"
          to={"/about"}
        >
          ABOUT US
        </Link>
        <Link
          className="px-4 py-2 bg-blue-500 text-white rounded-4xl  inline-block font-medium hover:bg-blue-600 transition text-center"
          to={"/contact"}
        >
          Contact Us
        </Link>
        </div>
        
      </div>
    </section>
  );
}
