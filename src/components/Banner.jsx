import Marquee from "react-fast-marquee";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";

// Banner component with scroll-driven zoom effect
export default function Banner() {
  //
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
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
  //
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      ref={bannerRef}
      className="relative py-30 bg-gradient-to-b from-[#FFFBDE] to-white overflow-hidden"
    >
      <div ref={frameRef} className="max-w-6xl mx-auto">
        <SplitText
          text="We Build Creative Digital Solutions"
          className="text-center text-[#082032] font-bold text-7xl max-w-3xl tracking-wide mx-auto"
          delay={50}
          duration={0.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <SplitText
          text="In today’s fast-moving digital world, Every business needs a strong
          online presence to thrive in the digital world. With “We Build Creative Digital Solutions,” we deliver innovative, user-friendly Web Development, Digital
          Marketing, and UI/UX Design that help businesses attract customers,
          strengthen their brand, and grow online"
          className="text-[#082032] mt-10 w-4xl mx-auto font-medium"
          delay={10}
          duration={0.2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <motion.button
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          className="py-2 rounded-2xl block mt-10 bg-[#082032] mx-auto w-sm text-white font-medium "
        >
          <Marquee speed={25}>Scroll Down For See More About Me</Marquee>
        </motion.button>
      </div>
    </motion.section>
  );
}
