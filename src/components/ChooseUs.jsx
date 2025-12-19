import { FaMobileAlt, FaHeadset } from "react-icons/fa";
import { RiEmotionHappyLine } from "react-icons/ri";
import Paragraph from "./Paragraph";
import { PiStrategy } from "react-icons/pi";
import { IoIosTimer } from "react-icons/io";
import agency from "../assets/video/agency.mp4";
import ScrollFloat from "./ScrollFloat";
//
export default function ChooseUs() {
  //

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
        <div className="sm:grid sm:grid-cols-2 gap-12">
          <div>
            <ScrollFloat
              animationDuration={2}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Why people love us
            </ScrollFloat>
            <Paragraph className="max-w-xl mt-3">
              People love us because we deliver high-quality work with honesty,
              creativity, and care. We listen to our clients, understand their
              goals, and provide smart digital solutions that truly make a
              difference. Our team works with passion, delivers fast support,
              and is committed to excellence—making every project smooth,
              successful, and results-driven.
            </Paragraph>
          </div>
          <video className="mt-10" controls src={agency}>
            my video
          </video>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              //
              <div key={i} className="p-4 rounded-xl">
                <div>
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-mono mt-3 text-xl font-semibold">
                    {f.title}
                  </h3>
                  <p className="text-sm mt-2 font-mono">{f.desc}</p>
                </div>
              </div>
              //
            );
          })}
        </div>
        {/*  */}
      </div>
    </section>
  );
}
