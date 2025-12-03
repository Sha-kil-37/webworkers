import Marquee from "react-fast-marquee";
//
export default function Header() {
  //
  return (
    <section className="py-5 bg-[var(--primary-color)]">
      <Marquee className="font-medium text-[var(--black-color)] text-center">
        Special discount of up to 
        <strong className="text-[var(--red-color)]"> 30% </strong>
        for the end of the year &#127873;&#127880;&#127881; &#127882;
      </Marquee>
    </section>
  );
}
