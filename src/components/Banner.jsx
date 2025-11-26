import { Link } from "react-router";
import BlurInText from "./BlurInText";
import banner from "../assets/banner.png";
//
export default function Banner() {
  //
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Animated background elements */}
      {/* Main content */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          {/* Main heading */}
          <BlurInText className="font-bold text-6xl max-w-[600px]">
            <span>We Build Creative Digital Solutions</span>
          </BlurInText>

          <BlurInText className="max-w-[600px] mt-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              ex eligendi molestiae ea, illo ducimus culpa obcaecati accusantium
              numquam labore consectetur officiis mollitia amet ipsum est illum
              tenetur explicabo non asperiores modi fugiat laboriosam animi.
              Fugit enim aliquid quas.
            </p>
          </BlurInText>
          <BlurInText className="mt-7">
            <Link to={"/about"}>
              About Us
              <span className="ml-2 text-xl font-bold">→</span>
            </Link>
          </BlurInText>
        </div>
        <BlurInText>
          <img
            className="inline-block h-full w-full object-cover"
            src={banner}
            alt="banner"
          />
        </BlurInText>
      </div>
    </section>
  );
}
