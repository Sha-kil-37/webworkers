import { Link } from "react-router";
import BlurInText from "./BlurInText";
import Paragraph from "./Paragraph";
import banner from "../assets/banner.png";
//
export default function Banner() {
  return (
    <section className="relative py-10 bg-gradient-to-br overflow-hidden">
      {/* Animated background elements */}

      {/* Main content */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          {/* Main heading */}
          <BlurInText>
            <span className="text-6xl">
              We Build Creative Digital Solutions
            </span>
          </BlurInText>

          {/* Subtitle */}
          {/* <Paragraph>
          We're building the future of human connection through innovative
          technology and design. Lorem ips
          ipsam nobis vitae, soluta nam dolorum, obcaecati quis provident.
        </Paragraph> */}
          <p className="max-w-[600px] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            delectus maiores recusandae animi rerum labore, nihil magnam illum
            omnis, quisquam beatae veritatis expedita eveniet iusto nostrum id
            quis! Beatae voluptas eos non delectus quod repellendus maxime ab
            ratione amet suscipit.
          </p>

          <Link
            to={"/about"}
            className="group px-4 mt-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full inline-flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            About Us
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
        <div>
          <img
            className="inline-block h-full w-full object-cover"
            src={banner}
            alt="banner"
          />
        </div>
      </div>
    </section>
  );
}
