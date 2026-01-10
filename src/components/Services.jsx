import { motion } from "motion/react";
import Paragraph from "./Paragraph";
// import background from "../assets/background/background.avif";
//
const services = [
  {
    title: "Web Development",
    desc: "We create websites that are visually appealing, highly functional, and fully optimized, ensuring your digital presence effectively represents your brand and engages visitors for maximum impact.",
    className: "xl:col-span-2 lg:col-span-2 ",
  },
  {
    title: "Digital Marketing",
    desc: "Our digital marketing services help your brand reach the right audience, increase traffic, and boost engagement. We ensure your stunning website gets seen and delivers real results.",
    className: "lg:col-span-1 ",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "We optimize your website to rank higher on Google, boost visibility, and attract consistent organic traffic, helping your business grow through targeted, effective SEO strategies.",
    className: "lg:col-span-1",
  },
  // first row
  {
    title: "Social Media Marketing",
    desc: "We use social platforms to strengthen your brand awareness, increase audience engagement, and drive measurable sales, ensuring your business connects effectively with the right customers across all channels.",
    className: "lg:col-span-1",
  },
  {
    title: "UI/UX Design",
    desc: "We design intuitive, visually appealing interfaces that enhance usability, improve user satisfaction, and create smooth, enjoyable experiences that keep users engaged and encourage them to return often to your website.",
    className: "xl:col-span-2 lg:col-span-1",
  },
  {
    title: "App Development",
    desc: "We develop high-performance mobile apps that deliver smooth functionality, intuitive interfaces, and strong user engagement, ensuring your business reaches customers effectively across Android, iOS, and cross-platform environments.",
    className: "lg:col-span-1",
  },
  // second row
  {
    title: "Business Consultation",
    desc: "We provide strategic business consultation to identify opportunities, solve challenges, and improve operations, helping your company grow, streamline processes, and make informed decisions that drive long-term success.",
    className: "xl:col-span-1 lg:col-span-2",
  },
  {
    title: "Custom Software Development",
    desc: "We build custom software tailored to your business needs, streamline operations, improve efficiency, and deliver scalable, high-performance solutions that support growth and enhance overall productivity",
    className: "xl:col-span-1 lg:col-span-2",
  },
  {
    title: "Artificial Intelligence Integration",
    desc: "We seamlessly integrate AI into your digital products to automate processes, enhance user experiences, and unlock smarter decision-making. From chatbots and recommendations to predictive analytics, our AI solutions are secure, scalable, and tailored to your business goals—helping you work faster, smarter, and more efficiently",
    className: "xl:col-span-2 lg:col-span-1",
  },
];
//
export default function Services() {

  //
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="services"
      className="2xl:py-15 xl:py-15 lg:py-15 md:py-15 sm:py-15 py-7"
    >
      <div className="2xl:w-6xl xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:mx-auto md:px-8 sm:px-8 sm:mx-auto px-4 mx-auto w-full">
        <h2 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl font-semibold font-primary text-center text-xl tracking-wide">
          Meet Our <span className="text-[#0076DF]">Services</span>
        </h2>
        <Paragraph className="font-primary text-center mx-auto 2xl:w-3xl xl:w-3xl lg:w-2xl md:w-xl sm:w-xl w-full mt-2">
          Our services are built to drive measurable growth. From high-quality
          web and app development to intuitive UI/UX design, SEO, digital
          marketing, and social media strategy, we cover every stage of your
          digital journey. With custom software solutions, AI-powered
          integrations, and strategic business consultation, we help brands
          innovate, automate, and scale faster.
        </Paragraph>

        {/* Bento Grid */}
        <div className="xl:grid xl:grid-cols-4 xl:gap-6 xl:mt-10 lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-8 md:mt-8 md:grid md:grid-cols-2 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-6 mt-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative 2xl:rounded-2xl xl:rounded-2xl lg:rounded-2xl md:rounded-2xl sm:rounded-2xl overflow-hidden shadow ${service.className} xl:p-6 lg:p-5 md:p-4 sm:p-4 p-4 rounded-2xl mb-2`}
            >
              <h3 className="tracking-wide font-semibold font-primary">
                {service.title}
              </h3>
              <Paragraph className="font-primary">
                {service.desc}
              </Paragraph>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
