import { useState, useEffect, useRef } from "react";
import BackgroundAnimation from "../lib/utils/BackgroundAnimation";
//

export default function Feature() {
  const titleRef = useRef(null);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    // When title becomes visible on screen → activate animation
    const observer = new IntersectionObserver(
      ([entry]) => setHighlight(entry.isIntersecting),
      { threshold: 0.6 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
  }, []);
  //
  return (
    <section className="py-20">
      <div className="relative max-w-7xl mx-auto">
        <BackgroundAnimation active={highlight} />
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <div>
            <h2
              ref={titleRef}
              className={`text-2xl font-bold transition-all duration-500 ${
                highlight ? "text-cyan-400 drop-shadow-[0_0_15px_#00eaff] " : ""
              }`}
            >
              Our Goal
            </h2>
            <p>
              Our mission is simple —
              <span className="text-cyan-400 font-bold">
                solve digital problems and help businesses grow confidently
              </span>
              . We deliver modern, scalable, and result-driven solutions
              tailored to each client’s goals. Every project is handled with
              strategy, creativity, and performance in mind
            </p>
          </div>
          <div>
            <h2
              ref={titleRef}
              className={`text-2xl font-bold transition-all duration-500 ${
                highlight ? "text-cyan-400 drop-shadow-[0_0_15px_#00eaff] " : ""
              }`}
            >
              What We Do
            </h2>
            <h3>We provide a wide range of services, including:</h3>
            <ul className="list-disc list-inside">
              <li>Custom Website Development</li>
              <li>User-Centered Design</li>
              <li>eCommerce Solutions</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Digital Marketing Strategies</li>
              <li>Branding and Identity</li>
            </ul>
          </div>
          <div>
            <h2
              ref={titleRef}
              className={`text-2xl font-bold transition-all duration-500 ${
                highlight ? "text-cyan-400 drop-shadow-[0_0_15px_#00eaff] " : ""
              }`}
            >
              Why Choose Us?
            </h2>
            <h3>
              We focus on real outcomes, not just services. Clients choose us
              because we offer:
            </h3>
            <ul className="list-disc list-inside">
              <li>Professional & modern designs built for conversions</li>
              <li>
                Data-driven marketing strategies that bring measurable growt
              </li>
              <li>ailored solutions based on business goals—not templates</li>
              <li>
                Fast communication, transparent work, and on-time delivery
              </li>
              <li>Affordable solutions without compromising quality</li>
            </ul>
          </div>
          <div>
            <h2
              ref={titleRef}
              className={`text-2xl font-bold transition-all duration-500 ${
                highlight ? "text-cyan-400 drop-shadow-[0_0_15px_#00eaff] " : ""
              }`}
            >
              Our Core Qualities
            </h2>

            <ul className="list-disc list-inside">
              <li>Expert & experienced team</li>
              <li>Scalable and future-ready digital solutions</li>
              <li>100% client satisfaction approach</li>
              <li>Long-term partnership mindset</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
