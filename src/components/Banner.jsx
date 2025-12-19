import agency from "../assets/video/agency.mp4";
import Marquee from "react-fast-marquee";

// Banner component with video background and overlay content
export default function Banner() {
  //

  return (
    <section className="relative py-35">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={agency} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="max-w-6xl mx-auto overflow-hidden relative z-10 text-center">
        <h1 className="transition-colors duration-300 font-sens font-bold text-7xl mt-3 max-w-2xl mx-auto text-white bg-red-300 p-4 dark:bg-black/70">
          We Build Creative Digital Solutions
        </h1>
        <button
          type="button"
          className="mt-10 block py-2 rounded-full dark:bg-white dark:text-black bg-black w-80 mx-auto font-bold text-white cursor-pointer"
        >
          <Marquee speed={50} delay={0} pauseOnHover={true} direction="left">
            Scroll Down
          </Marquee>
        </button>
      </div>
      {/*  */}
    </section>
  );
}
