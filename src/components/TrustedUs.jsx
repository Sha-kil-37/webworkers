import british from "../assets/british.avif";
import delair from "../assets/delair.avif";
import healtcare from "../assets/healthcare.avif";
import mapesa from "../assets/mapesa.avif";
import narayana from "../assets/narayana.avif";
import nsic from "../assets/nsic.avif";
import sbg from "../assets/sbg.avif";
import sprint from "../assets/sprint.avif";
//
export default function TrustedUs() {
  //
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-semibold text-[#082032]">Trusted US</h2>
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
      </div>
    </section>
  );
}
