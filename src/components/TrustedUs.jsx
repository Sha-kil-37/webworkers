import british from "../assets/british.avif";
import delair from "../assets/delair.avif";
import healtcare from "../assets/healthcare.avif";
import mapesa from "../assets/mapesa.avif";
import narayana from "../assets/narayana.avif";
import nsic from "../assets/nsic.avif";
import sbg from "../assets/sbg.avif";
import sprint from "../assets/sprint.avif";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
//
export default function TrustedUs() {
  //

  //
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-semibold text-[#082032] tracking-wide">
          Trusted Us
        </h2>
        <div className="max-w-3xl mx-auto">
          <Marquee direction="right" className="mt-3">
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
                  className="h-30 w-50 inline-block grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 overflow-hidden"
                >
                  <source srcSet={item} type="image/avif" />
                  <img
                    src={item}
                    alt="Trusted by company logo"
                    loading="lazy"
                    className="w-full h-full object-center"
                  />
                </picture>
              );
            })}
          </Marquee>
        </div>
      </div>
    </motion.section>
  );
}
