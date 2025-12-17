import logo from "../assets/logo.png";
import { Link } from "react-router";
//
export default function Header() {
  //
  return (
    <section className="py-5 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="overflow-hidden h-10 w-10 block">
          <img src={logo} alt={logo} />
        </Link>
      </div>
    </section>
  );
}
