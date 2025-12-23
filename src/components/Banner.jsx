import Marquee from "react-fast-marquee";
import { useEffect, useRef } from "react";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";

//
// Banner component with scroll-driven zoom effect
export default function Banner() {
  //

  //
  const bannerRef = useRef(null);
  const frameRef = useRef(null);
  //
  useEffect(() => {
    const el = bannerRef.current;
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

  return (
    <section
      ref={bannerRef}
      className="relative py-30 bg-gradient-to-b from-[#FFFBDE] to-white  overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start state (initial load)
        animate={{ opacity: 1, y: 0 }} // End state (after load)
        transition={{ duration: 0.5 }}
        ref={frameRef}
        className="max-w-6xl mx-auto relative z-10 text-center transform-gpu"
        style={{ willChange: "transform" }}
      >
        <h1 className="transition-colors duration-300 font-sens font-bold text-7xl mt-3 max-w-2xl mx-auto text-[#082032]">
          We Build Creative Digital Solutions
        </h1>
        <Paragraph className="mt-10 max-w-4xl mx-auto font-medium text-[#082032]">
          In today’s fast-moving digital world, Every business needs a strong
          online presence to thrive in the digital world. With{" "}
          <em className="font-bold text-[#082032]">
            “We Build Creative Digital Solutions,”
          </em>{" "}
          we deliver innovative, user-friendly Web Development, Digital
          Marketing, and UI/UX Design that help businesses attract customers,
          strengthen their brand, and grow online
        </Paragraph>

        <motion.button
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.9,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          className="py-2 rounded-2xl block mt-10 bg-[#082032] mx-auto w-sm text-white font-medium "
        >
          <Marquee>Scroll Down For See More About Me</Marquee>
        </motion.button>
      </motion.div>
    </section>
  );
}
