import React from "react";
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
// import Paragraph from "./Paragraph";
//
export default function TrustedBy() {
  //

  // trusted by organaigation
  const trustedBy = [one, two, three, four, five, six, seven, eight, nine, ten];

  //
  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto">
        <Marquee pauseOnHover={true} direction="left">
          <div className="flex justify-between gap-x-4 items-center">
            {trustedBy.map((Item, i) => {
              return (
                <div
                  key={i}
                  className="h-25 w-25 overflow-hidden px-2 py-2 rounded-full"
                >
                  <img
                    className="h-full w-full inline-block"
                    src={Item}
                    alt="Item"
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
