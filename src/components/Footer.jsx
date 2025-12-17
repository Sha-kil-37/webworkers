import logo from "../assets/logo.png";
import CopyRight from "./CopyRight";
import Paragraph from "./Paragraph";
import SocialLink from "./SocialLink";
import { Link } from "react-router";
import visacard from "../assets/visacard.avif";
import nagad from "../assets/nagad.avif";
import mastercard from "../assets/mastercard.avif";
import biksh from "../assets/biksh.avif";

//
export default function Footer() {
  // navlinks data array

  //
  return (
    <footer className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        <div>
          <Link to="/" className="block h-10 w-10 overflow-hidden">
            <img className="h-full w-full inline-block" src={logo} alt={logo} />
          </Link>
          <Paragraph className="font-bold mt-2">Web Workers</Paragraph>
          <Paragraph className="mt-2 font-medium">
            Digital Web Service Agency
          </Paragraph>
        </div>
        <div>
          <h3 className="text-xl font-mono">Legal</h3>
          <Link className="block font-mono">Privacy & Policy</Link>
          <Link className="block font-mono">Terms & Conditions</Link>
        </div>

        <div>
          <h3 className="text-xl font-mono">Follow Us</h3>
          <SocialLink />
        </div>
        <div>
          <h3 className="text-xl font-mono">Payment By</h3>
          <div className="grid grid-cols-2 mt-3 gap-4">
            {[mastercard, nagad, biksh, visacard].map((item, index) => {
              return (
                <div className="h-15 w-40 overflow-hidden" key={index}>
                  <img className="h-full w-full" src={item} alt={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}
