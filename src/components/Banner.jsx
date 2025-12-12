import { useNavigate } from "react-router";
import Paragraph from "./Paragraph";
import royal from "../assets/royal.avif";
import { IconBase } from "react-icons/lib";
import { FaArrowDownLong } from "react-icons/fa6";

//
export default function Banner() {
  // const navigate = useNavigate();
  //
  // function handleClick() {
  //   navigate("/about");
  // }
  //
  return (
    <section className="bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(61_76%_90%)_20%,hsl(141_54%_93%)_40%,hsl(193_100%_95%)_60%,hsl(0_0%_100%)_80%,hsl(0_0%_100%)_100%)]">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <picture className="overflow-hidden h-20 w-50 mx-auto flex justify-center">
          <source srcSet={royal} type="image/avif" />
          <img className="object-cover h-full w-full" src={royal} alt="Royal" />
        </picture>
        <h1 className="font-sens text-3xl font-bold text-center font-mono mt-3">
          WEB WORKERS
        </h1>
        <Paragraph className="font-sens text-8xl font-bold text-center font-mono mt-3 max-w-4xl mx-auto">
          We Build Creative Digital Solutions
        </Paragraph>
        <div className="flex justify-center mt-10 animate-bounce">
          <FaArrowDownLong className="text-2xl" />
        </div>
        <Paragraph className="max-w-4xl mx-auto text-center mt-5 font-mono">
          In today’s fast-moving digital world, Every business needs a strong
          online presence to thrive in the digital world. With “We Build
          Creative Digital Solutions,” we deliver innovative, user-friendly Web
          Development, Digital Marketing, and UI/UX Design that help businesses
          attract customers, strengthen their brand, and grow online.
        </Paragraph>
      </div>
    </section>
  );
}
