// import Paragraph from "./Paragraph";
import Marquee from "react-fast-marquee";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import six from "../assets/six.svg";
import five from "../assets/five.svg";
import seven from "../assets/seven.svg";
import eight from "../assets/eight.svg";
import nine from "../assets/nine.svg";
import ten from "../assets/ten.svg";
//
export default function TrustedBy() {
  //  // trusted by organaigation
  const trustedBy = [one, two, three, four, five, six, seven, eight, nine, ten];
 
  //
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-5">Trusted By</h2>
        <Marquee pauseOnHover={true} direction="left">
          <div className="flex justify-between items-center gap-x-4">
            {trustedBy.map((item, i) => {
              return (
                <div key={i} className="h-20 w-20 overflow-hidden">
                  <img
                    className="h-full w-full inline-block object-center"
                    src={item}
                    alt={item.image}
                  />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
