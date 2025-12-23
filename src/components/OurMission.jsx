import Paragraph from "./Paragraph";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
//
export default function OurMission() {
  //
  const ourMission = useRef(null);
  const frameRef = useRef(null);
  //
  useEffect(() => {
    const el = ourMission.current;
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
    //
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  //
  return (
    <section ref={ourMission} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start state (initial load)
        animate={{ opacity: 1, y: 0 }} // End state (after load)
        transition={{ duration: 0.5 }}
        ref={frameRef}
        className="max-w-6xl mx-auto relative z-10  transform-gpu"
        style={{ willChange: "transform" }}
      >
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-semibold text-[#082032]">
              Our Mission
            </h2>

            <Paragraph className="max-w-xl mt-5 font-medium text-[#082032]">
              We create smart, creative, and impactful digital solutions that
              help businesses grow with confidence. We deliver high-quality Web
              Development, Digital Marketing, UI/UX Design, SEO, and innovative
              software services. We empower clients, strengthen brands, and
              build meaningful digital experiences that drive real results.
            </Paragraph>
          </div>
          {/*  */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl mt-3">
            <p className="text-4xl font-bold mb-2">300+</p>
            <p className="font-medium">Happy Clients</p>
            <p className="mt-2">Trusted by businesses globally</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl mt-3">
            <p className="text-4xl font-bold mb-2">400+</p>
            <p className="font-medium">Projects Delivered</p>
            <p className="mt-2">From startups to enterprises</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl mt-3">
            <p className="text-4xl font-bold text-green-600 mb-2">5+</p>
            <p className="font-medium">Years of Excellence</p>
            <p className="mt-2">Continuous innovation</p>
          </div>
          {/*  */}
        </div>
      </motion.div>
    </section>
  );
}
