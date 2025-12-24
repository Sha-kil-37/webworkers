import { useEffect, useRef } from "react";
import CounterItem from "./CounterItem";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";
import AnimatedSection from "../lib/utils/AnimatedSection";

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

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  //
  return (
    <AnimatedSection>
      <section ref={ourMission} className="py-10 relative">
        <div ref={frameRef} className="max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-semibold text-[#082032]">
            Our <span className="text-amber-200">Mission</span>
          </h2>
          <Paragraph className="max-w-4xl mx-auto font-medium text-[#082032] text-center mt-5">
            We create smart, creative, and impactful digital solutions that help
            businesses grow with confidence. We deliver high-quality Web
            Development, Digital Marketing, UI/UX Design, SEO, and innovative
            software services. We empower clients, strengthen brands, and build
            meaningful digital experiences that drive real results.
          </Paragraph>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <CounterItem end={120} label="Projects Completed" />
            <CounterItem end={80} label="Happy Clients" />
            <CounterItem end={5} label="Years Experience" />
            <CounterItem end={12} label="Awards Won" />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
