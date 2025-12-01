import Marquee from "react-fast-marquee";
import BlurInText from "./BlurInText";
//
export default function Header() {
  //
  return (
    <section className="py-5 bg-[#64E2B7]">
      <Marquee className="text-white text-center font-bold">
        Special discount of up to
        <span className="text-[#FEEE91]">30%</span>
        for the end of the year &#127873;&#127880;&#127881; &#127882;
        {/* <img src={gift} alt={gift} /> */}
      </Marquee>
    </section>
  );
}
