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
    <section className="relative py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-x-5">
        <div className="max-w-2xl">
          {/* Main heading */}
          <BlurInText className="font-bold text-6xl">
            <h1 className="">
              We Build Creative Digital
              Solutions
            </h1>
          </BlurInText>
          <BlurInText className="mt-7">
            <Paragraph className="max-w-xl">
              In today’s fast-moving digital world, Every business needs a
              strong online presence to thrive in the digital world. With
              <strong className="">
                “We Build Creative Digital Solutions,”
              </strong>
              we deliver innovative, user-friendly Web Development, Digital
              Marketing, and UI/UX Design that help businesses attract
              customers, strengthen their brand, and grow online.
            </Paragraph>
          </BlurInText>
          <BlurInText className="mt-10">
            <Button
              onClick={handleClick}
              className="cursor-pointer px-4 py-2 rounded-xl font-medium transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              About Me
            </Button>
          </BlurInText>
        </div>
        <BlurInText className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
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
