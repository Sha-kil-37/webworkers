import { useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import { LuMonitorSmartphone } from "react-icons/lu";
import { LuSmartphone } from "react-icons/lu";
import { IoIosRocket } from "react-icons/io";
import { AiOutlineLineChart } from "react-icons/ai";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { IoIosApps } from "react-icons/io";
import { GiArtificialIntelligence } from "react-icons/gi";
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
//
function Services() {
  // services data array
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
  const sectionRef = useRef(null);
  const frameRef = useRef(null);

  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  //
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const section = sectionRef.current;
      const track = trackRef.current;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (
        scrollY >= sectionTop - windowHeight &&
        scrollY <= sectionTop + sectionHeight
      ) {
        const progress =
          (scrollY - sectionTop) / (sectionHeight - windowHeight);
        const maxTranslate = track.scrollWidth - window.innerWidth;
        setTranslateX(-maxTranslate * progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let rafId = null;
    //
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const windowH =
          window.innerHeight || document.documentElement.clientHeight;

        // progress grows as the user scrolls down and the banner moves up
        const progress = Math.min(Math.max(-rect.top / windowH, 0), 1);

        // scale between 1 and 1.15 (adjust factor to taste)
        const scale = 1 + progress * 0.15;

        if (frameRef.current) {
          frameRef.current.style.transform = `scale(${scale})`;
        }
      });
    };

    // initialize and bind
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  //
  return (
    <section ref={sectionRef} className="relative py-10">
      <motion.div ref={frameRef} className="max-w-6xl mx-auto overflow-hidden">
        <h2 className="text-center text-5xl font-semibold text-[#082032]">
          Our Services
        </h2>
        <Paragraph className="mx-auto max-w-4xl font-medium text-[#082032] text-center mt-5">
          At our Digital Web Agency, we deliver high-value, results-driven
          solutions designed to strengthen your digital presence, accelerate
          growth, and enhance your brand experience. Our team blends creativity,
          technology, and strategic thinking to build products and strategies
          that solve real business challenges. Explore our core services
        </Paragraph>
        <div
          ref={trackRef}
          className="flex transition-transform duration-75 ease-out mt-10"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[420px] h-[260px] border p-6 flex flex-col justify-between"
            >
              <h3 className="text-2xl">{item.title}</h3>
              <p className="">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
