import BlurInText from "./BlurInText";

// Fixed background video with overlay; content scrolls above it.
export default function Banner() {
  return (
    <section className="py-34 relative bg-slate-900 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <BlurInText>We Build Creative Digital Solutions</BlurInText>
        <p className="max-w-[700px] mx-auto font-semibold text-3xl text-center">
          Empowering Your Online Presence with Innovative Web Development and
          Digital Solutions.
        </p>
        <button className="px-3 py-1 bg-blue-300 rounded-md mt-6 font-semibold hover:bg-blue-400 mx-auto block">
          learn more
        </button>
      </div>
    </section>
  );
}
