import React from "react";
import Marquee from "react-fast-marquee";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import Paragraph from "./Paragraph";
//
export default function TrustedBy() {
  //

  // trusted by organaigation
  const trustedBy = [
    {
      organaization: one,
      url: "https://example.com/acme",
    },
    {
      organaization: two,
      url: "https://example.com/acme",
    },
    {
      organaization: three,
      url: "https://example.com/acme",
    },
    {
      organaization: four,
      url: "https://example.com/acme",
    },
    {
      organaization: five,
      url: "https://example.com/acme",
    },
    {
      organaization: six,
      url: "https://example.com/acme",
    },
  ];

  //
  return (
    <section className="mt-16">
      <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
        Trusted by industry leaders
      </h3>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in
        amet, cumque alias debitis vel qui dolor quidem cum ratione doloremque
        impedit asperiores dignissimos excepturi! Non dolorum iusto eum laborum.
      </Paragraph>

      <Marquee pauseOnHover={true} direction="left">
        <div className="flex justify-between gap-x-4 items-center">
          {trustedBy.map((Item, i) => {
            return (
              <div key={i}>
                <div className="max-w-[200px] overflow-hidden max-h-[200px] object-center">
                  <img
                    className="h-full w-full inline-block"
                    src={Item.organaization}
                    alt={Item.url}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between gap-x-4 items-center">
          {trustedBy.map((Item, i) => {
            return (
              <div key={i}>
                <div className="max-w-[200px] overflow-hidden max-h-[200px]">
                  <img
                    className="h-full w-full inline-block  object-center"
                    src={Item.organaization}
                    alt={Item.url}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Marquee>
      <Marquee pauseOnHover={true} direction="right">
        <div className="flex justify-between gap-x-4 items-center">
          {trustedBy.map((Item, i) => {
            return (
              <div key={i}>
                <div className="max-w-[200px] overflow-hidden max-h-[200px] ">
                  <img
                    className="h-full w-full inline-block object-center"
                    src={Item.organaization}
                    alt={Item.url}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between gap-x-4 items-center">
          {trustedBy.map((Item, i) => {
            return (
              <div key={i}>
                <div className="max-w-[200px] overflow-hidden max-h-[200px] object-center">
                  <img
                    className="h-full w-full inline-block"
                    src={Item.organaization}
                    alt={Item.url}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
}
