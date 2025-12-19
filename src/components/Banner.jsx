import agency from "../assets/video/agency.mp4";

export default function Banner() {
  return (
    <section className="relative py-35">
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

      <div className="max-w-6xl mx-auto overflow-hidden relative z-10 text-center">
        <h1 className="font-sens font-bold text-7xl mt-3 max-w-2xl mx-auto text-white bg-red-300 p-4">
          We Build Creative Digital Solutions
        </h1>
        <button
          type="button"
          className="animated-btn mt-10 block py-4 rounded-lg bg-black/90 w-100 mx-auto font-bold text-white"
        >
          Scroll Down
        </button>
      </div>
    </section>
  );
}
