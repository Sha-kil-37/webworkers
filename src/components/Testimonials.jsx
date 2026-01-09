import { motion } from "motion/react";
import TruncateText from "../lib/utils/TruncateText";
import { useRef, useEffect } from "react";
import Paragraph from "./Paragraph";
import { CiStar } from "react-icons/ci";
//
const reviews = [
  {
    name: "John Carter",
    role: "CEO, NovaTech Solutions",
    review:
      "Working with this agency completely transformed our online presence. The website they delivered is fast, modern, and highly engaging. Their attention to detail and commitment to quality truly set them apart.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Founder, Craftsy Studio",
    review:
      "The UI/UX design exceeded our expectations. Every interaction feels smooth and user-friendly. Our customers are already noticing the improvement, and our conversion rate has increased significantly.",

    rating: 4.5,
  },
  {
    name: "Michael Smith",
    role: "Marketing Manager",
    review:
      "The team handled our digital marketing campaigns with absolute professionalism. Within weeks, we saw a measurable boost in traffic, leads, and brand visibility. Their strategy was well-planned and results-driven.",

    rating: 5,
  },
  {
    name: "Sophia Martinez",
    role: "Owner, Bloom Boutique",
    review:
      "Our mobile app was built exactly how we envisioned it—clean design, strong performance, and seamless functionality. The development process was transparent and efficient from start to finish.",

    rating: 4.8,
  },
  {
    name: "Daniel Green",
    role: "Product Lead, PixelDrive",
    review:
      "They helped us implement AI features into our platform, and the results were extraordinary. Automation and intelligent recommendations improved our efficiency and customer engagement drastically.",

    rating: 5,
  },
];
//
const Testimonials = () => {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  //
  useEffect(() => {
    let rafId;
    //
    const animate = () => {
      offsetRef.current -= 1.5; // speed control
      if (Math.abs(offsetRef.current) >= trackRef.current.scrollWidth / 2) {
        offsetRef.current = 0;
      }
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);
  //
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative py-8"
    >
      <div className="xl:w-6xl xl:mx-auto overflow-hidden lg:w-5xl lg:mx-auto lg:overflow-hidden md:px-6 md:mx-auto md:overflow-hidden sm:px-6 sm:mx-auto">
        <h2 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-semibold font-primary text-center">
          What does our <span className="text-[#0076DF]">client</span> say ?
        </h2>
        <Paragraph className="font-primary tracking-wide text-center mx-auto 2xl:w-3xl xl:w-3xl lg:w-2xl md:w-xl sm:w-xl w-full">
          Our clients trust us because we deliver results, not just services.
          From web development and UI/UX design to digital marketing, SEO, and
          social media, we build strong digital identities through smart,
          growth-driven solutions.
        </Paragraph>
        <div
          ref={trackRef}
          className="flex mt-5 w-max py-3"
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="w-[250px] shadow mx-2 p-4 rounded-2xl"
            >
              <TruncateText
                className="sm:font-normal font-medium font-secondary tracking-wide"
                text={item.review}
                limit={15}
              />
              <div className="xl:flex xl:justify-between xl:items-center xl:mt-3 lg:flex lg:justify-between lg:items-center lg:mt-2 md:flex md:mt-2 md:justify-between md:items-center sm:flex sm:justify-between sm:items-center sm:mt-2">
                <div>
                  <Paragraph className="font-secondary tracking-wide ">
                    {item.name}
                  </Paragraph>
                  <Paragraph className="font-secondary tracking-wide lg:tracking-wide">
                    {item.role}
                  </Paragraph>
                </div>
                <div>
                  <Paragraph className="text-center font-secondary">
                    {item.rating}
                  </Paragraph>
                  <div className="md:flex sm:flex">
                    <CiStar className="text-[#0076DF] inline-block" />
                    <CiStar className="text-[#0076DF] inline-block" />
                    <CiStar className="text-[#0076DF] inline-block" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
