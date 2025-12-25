import Paragraph from "./Paragraph";
import { IoIosTimer } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { RiEmotionHappyLine } from "react-icons/ri";

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
      title: "Deliver Modern, High-Quality Digital Solutions",
      desc: "From websites to mobile apps and software systems, our work is built with clean architecture, smooth performance, and exceptional user experience.",
      icon: FaMobileAlt,
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
    <section className="py-20 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto">
        <h2 className="tracking-wide text-6xl font-bold text-center max-w-3xl mx-auto">
          All The Benefits You Will Get From Us
        </h2>
        <div className="grid grid-cols-4 gap-6 mt-10">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white rounded-full p-10">
                <Icon className="h-15 w-15 mx-auto text-[#082032]" />
                <Paragraph className="mt-5 text-center text-[#082032] font-medium text-xl">
                  {item.title}
                </Paragraph>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
