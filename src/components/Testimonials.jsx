import { motion } from "framer-motion";
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
  let offset = 0;
  //
  useEffect(() => {
    let rafId;
    //
    const animate = () => {
      offset -= 1.5; // speed control
      if (Math.abs(offset) >= trackRef.current.scrollWidth / 2) {
        offset = 0;
      }
      trackRef.current.style.transform = `translateX(${offset}px)`;
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
      className="relative py-10"
    >
      <div className="xl:w-6xl mx-auto overflow-hidden">
        <h2 className="tracking-wide text-center text-6xl font-bold text-[#082032]">
          What does our client say?
        </h2>
        <div ref={trackRef} className="flex w-max py-10 mt-10">
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="mx-2 w-[300px] rounded-xl p-4 shadow-sm bg-[#F5F5F7]"
            >
              <TruncateText
                className="font-medium text-[#082032]"
                text={item.review}
                limit={15}
              />
              <div className="flex justify-between items-center mt-3">
                <div>
                  <Paragraph className="font-semibold text-[#082032]">
                    {item.name}
                  </Paragraph>
                  <Paragraph className="text-[#082032]">{item.role}</Paragraph>
                </div>
                <div>
                  <Paragraph className="text-[#082032] font-medium text-center">
                    {item.rating}
                  </Paragraph>
                  <CiStar className="text-amber-300 inline-block" />
                  <CiStar className="text-amber-300 inline-block" />
                  <CiStar className="text-amber-300 inline-block" />
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
