import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
import background from "../assets/background/background.avif";
//
const services = [
  {
    title: "Web Development",
    desc: "We create websites that are visually appealing, highly functional, and fully optimized, ensuring your digital presence effectively represents your brand and engages visitors for maximum impact.",
    className: "lg:col-span-2",
    bg: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  {
    title: "Digital Marketing",
    desc: "Our digital marketing services help your brand reach the right audience, increase traffic, and boost engagement. We ensure your stunning website gets seen and delivers real results.",
    className: "",
    bg: "bg-gradient-to-r from-pink-400 to-fuchsia-700",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "We optimize your website to rank higher on Google, boost visibility, and attract consistent organic traffic, helping your business grow through targeted, effective SEO strategies.",
    className: "",
    bg: "bg-gradient-to-r from-yellow-300 to-yellow-500",
  },
  // first row
  {
    title: "Social Media Marketing",
    desc: "We use social platforms to strengthen your brand awareness, increase audience engagement, and drive measurable sales, ensuring your business connects effectively with the right customers across all channels.",
    className: "",
    bg: "bg-gradient-to-r from-[#6AECE1] to-[#001F3D]",
  },
  {
    title: "UI/UX Design",
    desc: "We design intuitive, visually appealing interfaces that enhance usability, improve user satisfaction, and create smooth, enjoyable experiences that keep users engaged and encourage them to return often to your website.",
    className: "lg:col-span-2",
    bg: "bg-gradient-to-r from-cyan-500 to-[#F7F6D3]",
  },
  {
    title: "App Development",
    desc: "We develop high-performance mobile apps that deliver smooth functionality, intuitive interfaces, and strong user engagement, ensuring your business reaches customers effectively across Android, iOS, and cross-platform environments.",
    className: "",
    bg: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  // second row
  {
    title: "Business Consultation",
    desc: "We provide strategic business consultation to identify opportunities, solve challenges, and improve operations, helping your company grow, streamline processes, and make informed decisions that drive long-term success.",
    className: "lg:col-span-1",
    bg: "bg-gradient-to-r from-cyan-500 to-[#FFF57E]",
  },
  {
    title: "Custom Software Development",
    desc: "We build custom software tailored to your business needs, streamline operations, improve efficiency, and deliver scalable, high-performance solutions that support growth and enhance overall productivity",
    className: "lg:col-span-1",
    bg: "bg-gradient-to-r from-[#002455] to-[#C47BE4]",
  },
  {
    title: "Artificial Intelligence Integration",
    desc: "We seamlessly integrate AI into your digital products to automate processes, enhance user experiences, and unlock smarter decision-making. From chatbots and recommendations to predictive analytics, our AI solutions are secure, scalable, and tailored to your business goals—helping you work faster, smarter, and more efficiently",
    className: "lg:col-span-2",
    bg: "bg-gradient-to-r from-cyan-200 to-blue-200",
  },
];
//
export default function Services() {
  //

  //
  return (
    <section
      className="py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="tracking-wide text-6xl font-bold text-center max-w-3xl mx-auto text-white">
            Meet Our Services
          </h2>
          <Paragraph className="max-w-4xl mx-auto font-medium text-white text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            accusantium dolores rem, quidem similique, obcaecati error officiis
            sapiente consequatur molestiae fugit pariatur exercitationem atque
            veritatis eligendi distinctio praesentium eaque amet!
          </Paragraph>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-4  gap-6 mt-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl overflow-hidden ${service.className} ${service.bg} p-6`}
            >
              <h3 className="text-white font-medium text-2xl">
                {service.title}
              </h3>
              <Paragraph className="text-white mt-3">{service.desc}</Paragraph>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
