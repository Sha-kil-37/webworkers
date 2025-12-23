import Marquee from "react-fast-marquee";
import { useEffect, useRef } from "react";
import Paragraph from "./Paragraph";
//
// Banner component with scroll-driven zoom effect
export default function Banner() {
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
      className="relative py-25 bg-amber-200 overflow-hidden"
    >
      <div
        ref={frameRef}
        className="max-w-6xl mx-auto relative z-10 text-center transform-gpu"
        style={{ willChange: "transform" }}
      >
        <h1 className="transition-colors duration-300 font-sens font-bold text-7xl mt-3 max-w-2xl mx-auto">
          We Build Creative Digital Solutions
        </h1>
        <Paragraph className="mt-10 max-w-4xl mx-auto">
          In today’s fast-moving digital world, Every business needs a strong
          online presence to thrive in the digital world. With{" "}
          <em className="font-bold text-red-300">
            “We Build Creative Digital Solutions,”
          </em>{" "}
          we deliver innovative, user-friendly Web Development, Digital
          Marketing, and UI/UX Design that help businesses attract customers,
          strengthen their brand, and grow online
        </Paragraph>
        <button
          type="button"
          className="mt-10 block py-2 rounded-full dark:bg-white dark:text-black bg-black w-80 mx-auto font-bold text-white cursor-pointer"
        >
          <Marquee speed={50} delay={0} pauseOnHover={true} direction="left">
            Scroll Down
          </Marquee>
        </button>
      </div>
    </section>
  );
}
