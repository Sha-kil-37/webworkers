import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import TruncateText from "../lib/utils/TruncateText";
//
export default function Testimonials() {
  //
  const testimonialsData = [
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
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="tracking-wide text-6xl font-bold text-center max-w-3xl mx-auto text-[#082032]">
          Appreciations from our service recipients
        </h2>
        <Marquee speed={25} delay={0} pauseOnHover={true} direction="left">
          <div className="flex justify-between items-center gap-x-6 mt-5">
            {testimonialsData.map((item, i) => {
              return (
                <div key={i} className="max-w-100 bg-gray-500 rounded-2xl p-4">
                  <TruncateText text={item.review} />
                  <div className="flex justify-between mt-3">
                    <span className="">⭐⭐⭐⭐⭐</span>
                    <span className="">{item.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </motion.section>
  );
}
