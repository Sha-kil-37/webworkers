// import Paragraph from "./Paragraph";
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
import eleven from "../assets/eleven.svg";
import twilve from "../assets/twilve.svg";
import thirteen from "../assets/thirteen.svg";
import fourteen from "../assets/fourteen.svg";
import fifteen from "../assets/fifteen.svg";

//
export default function TrustedBy() {
  //  // trusted by organaigation
  const trustedBy = [one, two, three, four, five, six, seven, eight, nine, ten];

  //
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center font-bold">Trusted By</h2>
        <div className="max-w-5xl mx-auto flex justify-between flex-wrap mt-5">
          {[one, two, three, four, five].map((item, i) => {
            return (
              <div key={i} className="overflow-hidden w-25 h-25 ">
                <img className="h-full w-full object-center" src={item} alt={item} />
              </div>
            );
          })}
        </div>
        <div className="max-w-6xl mx-auto flex justify-between flex-wrap mt-5">
          {[six, seven, eight, nine, ten].map((item, i) => {
            return (
              <div key={i} className="overflow-hidden w-25 h-25 ">
                <img className="h-full w-full object-center" src={item} alt={item} />
              </div>
            );
          })}
        </div>
         <div className="max-w-5xl mx-auto flex justify-between flex-wrap mt-5">
          {[eleven, twilve, thirteen, fourteen, fifteen].map((item, i) => {
            return (
              <div key={i} className="overflow-hidden w-25 h-25">
                <img className="h-full w-full object-center" src={item} alt={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
