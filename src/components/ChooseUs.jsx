import Button from "./Button";
import { FaMobileAlt, FaHeadset } from "react-icons/fa";
import { RiEmotionHappyLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import Paragraph from "./Paragraph";
import { PiStrategy } from "react-icons/pi";
import { IoIosTimer } from "react-icons/io";
import agency from "../assets/agency.mp4";
//
export default function ChooseUs() {
  //
  const navigate = useNavigate();
  //
  function handleClick() {
    navigate("/projects");
  }
  const features = [
    {
      title: "On-Time Delivery, Every Time",
      desc: "We value deadlines. Our team consistently delivers high-quality work within agreed timelines, without compromising standards",
      icon: IoIosTimer,
    },
    {
      title: "We Deliver Modern, High-Quality Digital Solutions",
      desc: "From websites to mobile apps and software systems, our work is built with clean architecture, smooth performance, and exceptional user experience.",
      icon: FaMobileAlt,
    },
    {
      title: "Strategy-Driven, Not Just Service-Driven",
      desc: "Every project begins with understanding your goals. We design digital solutions that support growth, conversions, and long-term brand success.",
      icon: PiStrategy,
    },
    {
      title: "Transparent Communication & Seamless Collaboration",
      desc: "We keep our clients informed at every step. No confusing jargon, no hidden steps—just clear updates and smooth teamwork.",
      icon: FaHeadset,
    },
    {
      title: "Results That Speak for Themselves",
      desc: "From improved conversions to increased traffic and enhanced user engagement, our projects create measurable impact that clients love.",
      icon: RiEmotionHappyLine,
    },
  ];
  //
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-[var(--black-color)]">
              Why people love us
            </h2>
            <Paragraph className="max-w-xl text-[var(--black-color)]">
              People love us because we deliver high-quality work with honesty,
              creativity, and care. We listen to our clients, understand their
              goals, and provide smart digital solutions that truly make a
              difference. Our team works with passion, delivers fast support,
              and is committed to excellence—making every project smooth,
              successful, and results-driven.
            </Paragraph>
            <video className="mt-10" controls src={agency}>
              my video
            </video>
            <Button
              onClick={handleClick}
              className="cursor-pointer px-4 py-2 bg-[var(--secondary-color)] text-[var(--white-color)] rounded-xl font-medium hover:bg-[var(--primary-color)] transition-colors duration-300 hover:text-[var(--secondary-color)] shadow-sm hover:shadow-md mt-10"
            >
              Our Works
            </Button>
          </div>
          {/*  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                //
                <div key={i} className="p-4 rounded-xl">
                  <div>
                    <Icon className="w-10 h-10 text-[var(--black-color)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--black-color)]">
                      {f.title}
                    </h3>
                    <p className="text-sm text-[var(--black-color)] mt-1">{f.desc}</p>
                  </div>
                </div>
                //
              );
            })}
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
}
