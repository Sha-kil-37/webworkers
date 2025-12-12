import { FaCode } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { LuMonitorSmartphone } from "react-icons/lu";
import { LuSmartphone } from "react-icons/lu";
import { IoIosRocket } from "react-icons/io";
import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineSound } from "react-icons/ai";
import { IoIosApps } from "react-icons/io";
import Paragraph from "./Paragraph";
import { GiArtificialIntelligence } from "react-icons/gi";
//
//
export default function Services() {
  //
  const services = [
    {
      title: "Web Development",
      desc: "We create websites that are visually appealing, highly functional, and fully optimized, ensuring your digital presence effectively represents your brand and engages visitors for maximum impact.",
      icon: <FaCode className="w-10 h-10" />,
    },
    {
      title: "Social Media Marketing",
      desc: "We use social platforms to strengthen your brand awareness, increase audience engagement, and drive measurable sales, ensuring your business connects effectively with the right customers across all channels.",
      icon: <AiOutlineSound className="w-10 h-10" />,
    },
    {
      title: "UI/UX Design",
      desc: "We design intuitive, visually appealing interfaces that enhance usability, improve user satisfaction, and create smooth, enjoyable experiences that keep users engaged and encourage them to return often to your website.",
      icon: <LuMonitorSmartphone className="w-10 h-10" />,
    },
    {
      title: "App Development",
      desc: "We develop high-performance mobile apps that deliver smooth functionality, intuitive interfaces, and strong user engagement, ensuring your business reaches customers effectively across Android, iOS, and cross-platform environments",
      icon: <LuSmartphone className="w-10 h-10" />,
    },
    {
      title: "Digital Marketing",
      desc: "Our digital marketing services help your brand reach the right audience, increase traffic, and boost engagement. We ensure your stunning website gets seen and delivers real results.",
      icon: <IoIosRocket className="w-10 h-10" />,
    },
    {
      title: "Search Engine Optimization (SEO)",
      desc: "We optimize your website to rank higher on Google, boost visibility, and attract consistent organic traffic, helping your business grow through targeted, effective SEO strategies.",
      icon: <AiOutlineLineChart className="w-10 h-10" />,
    },
    {
      title: "Business Consultation",
      desc: "We provide strategic business consultation to identify opportunities, solve challenges, and improve operations, helping your company grow, streamline processes, and make informed decisions that drive long-term success.",
      icon: <LuBriefcaseBusiness className="w-10 h-10" />,
    },
    {
      title: "Custom Software Development",
      desc: "We build custom software tailored to your business needs, streamline operations, improve efficiency, and deliver scalable, high-performance solutions that support growth and enhance overall productivity",
      icon: <IoIosApps className="w-10 h-10" />,
    },
    {
      title: "Artificial Intelligence Integration",
      desc: "We help businesses harness the power of AI through intelligent automation, predictive analytics, recommendation systems, chatbots, and workflow optimization. Our AI integrations enhance efficiency, improve decision-making, and create next-level digital experiences",
      icon: <GiArtificialIntelligence className="w-10 h-10" />,
    },
  ];
  //
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        <Paragraph className="font-mono mx-auto text-3xl font-bold">
          At our Digital Web Agency, we deliver high-value, results-driven
          solutions designed to strengthen your digital presence, accelerate
          growth, and enhance your brand experience. Our team blends creativity,
          technology, and strategic thinking to build products and strategies
          that solve real business challenges. Explore our core services
        </Paragraph>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="py-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 font-mono">{service.title}</h3>
              <p className="font-mono">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
