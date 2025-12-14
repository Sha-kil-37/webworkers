import logo from "../assets/logo.png";
import CopyRight from "./CopyRight";
import Paragraph from "./Paragraph";
import SocialLink from "./SocialLink";
import { NavLink, Link } from "react-router";
//
export default function Footer() {
  // navlinks data array

  //
  return (
    <footer className="py-10">
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
          <ul>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}
