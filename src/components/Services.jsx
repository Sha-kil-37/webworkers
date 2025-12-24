import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "We create websites that are visually appealing, highly functional, and fully optimized, ensuring your digital presence effectively represents your brand and engages visitors for maximum impact.",
  },
  {
    title: "Digital Marketing",
    desc: "Our digital marketing services help your brand reach the right audience, increase traffic, and boost engagement. We ensure your stunning website gets seen and delivers real results.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "We optimize your website to rank higher on Google, boost visibility, and attract consistent organic traffic, helping your business grow through targeted, effective SEO strategies.",
  },
  {
    title: "Social Media Marketing",
    desc: "We use social platforms to strengthen your brand awareness, increase audience engagement, and drive measurable sales, ensuring your business connects effectively with the right customers across all channels.",
  },
  {
    title: "UI/UX Design",
    desc: "We design intuitive, visually appealing interfaces that enhance usability, improve user satisfaction, and create smooth, enjoyable experiences that keep users engaged and encourage them to return often to your website.",
  },
  {
    title: "App Development",
    desc: "We develop high-performance mobile apps that deliver smooth functionality, intuitive interfaces, and strong user engagement, ensuring your business reaches customers effectively across Android, iOS, and cross-platform environments.",
  },
  {
    title: "Business Consultation",
    desc: "We provide strategic business consultation to identify opportunities, solve challenges, and improve operations, helping your company grow, streamline processes, and make informed decisions that drive long-term success.",
  },
  {
    title: "Custom Software Development",
    desc: "We build custom software tailored to your business needs, streamline operations, improve efficiency, and deliver scalable, high-performance solutions that support growth and enhance overall productivity",
  },
  {
    title: "Artificial Intelligence Integration",
    desc: "We seamlessly integrate AI into your digital products to automate processes, enhance user experiences, and unlock smarter decision-making. From chatbots and recommendations to predictive analytics, our AI solutions are secure, scalable, and tailored to your business goals—helping you work faster, smarter, and more efficiently",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  //
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-indigo-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scroll down to see staggered animation in action.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
