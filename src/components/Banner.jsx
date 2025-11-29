import BlurInText from "./BlurInText";
import banner from "../assets/banner.png";
import Paragraph from "../components/Paragraph";
import Button from "./Button";
import { useNavigate } from "react-router";
//
export default function Banner() {
  const navigate = useNavigate();
  //
  function handleClick() {
    navigate("/about");
  }
  //
  return (
    <section className="relative py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          {/* Main heading */}
          <BlurInText className="font-bold text-7xl max-w-2xl">
            <span>We Build Creative Digital Solutions</span>
          </BlurInText>
          <BlurInText className="max-w-[600px] mt-7">
            <Paragraph style={"font-medium capitalize"}>
              In today’s fast-moving digital world, Every business needs a
              strong online presence to thrive in the digital world. With
              <bold className="font-bold capitalize">
                “We Build Creative Digital Solutions,”
              </bold>
              we deliver innovative, user-friendly Web Development, Digital
              Marketing, and UI/UX Design that help businesses attract
              customers, strengthen their brand, and grow online.
            </Paragraph>
          </BlurInText>
          <BlurInText className="mt-7">
            <Button
              onClick={handleClick}
              className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded font-medium hover:bg-blue-400 transition-all duration-200"
            >
              About Me
            </Button>
          </BlurInText>
        </div>
        <BlurInText>
          <img
            className="inline-block h-full w-full object-cover"
            src={banner}
            alt={banner}
          />
        </BlurInText>
      </div>
    </section>
  );
}
