import british from "../assets/british.avif";
import delair from "../assets/delair.avif";
import healtcare from "../assets/healthcare.avif";
import mapesa from "../assets/mapesa.avif";
import narayana from "../assets/narayana.avif";
import nsic from "../assets/nsic.avif";
import sbg from "../assets/sbg.avif";
import sprint from "../assets/sprint.avif";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../lib/utils/AnimatedSection";
//
export default function TrustedUs() {
  //

  const trustedUS = useRef(null);
  const frameRef = useRef(null);
  //
  useEffect(() => {
    const el = trustedUS.current;
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
      <section ref={trustedUS} className="relative">
        <motion.div
          ref={frameRef}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-center text-5xl font-semibold text-[#082032]">
            Trusted US
          </h2>
          <div className="grid grid-cols-4">
            {[
              british,
              delair,
              healtcare,
              mapesa,
              narayana,
              nsic,
              sbg,
              sprint,
            ].map((item, i) => {
              return (
                <picture
                  key={i}
                  className="inline-block w-full max-h-30 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <source srcSet={item} type="image/avif" />

                  <img
                    src={item}
                    alt="Trusted by company logo"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </picture>
              );
            })}
          </div>
        </motion.div>
      </section>
    </AnimatedSection>
  );
}
