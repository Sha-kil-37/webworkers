import { Link } from "react-router";
import Button from "./Button";
import BlurInText from "./BlurInText";

//
export default function Banner() {
  //
  return (
    <section>
      <div className="relative max-w-7xl mx-auto px-6 py-26">
        <BlurInText className="text-6xl font-bold mb-6 max-w-[570px] mx-auto text-center">
          We Build Creative Digital Solutions
        </BlurInText>
        <p className="max-w-[700px] mt-5 mx-auto text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi
          voluptate eaque aperiam accusantium minus consequuntur praesentium
          odit unde distinctio?
        </p>
        <Link to="/projects" className="mt-10 block">
          <Button className="mt-10">View Projects</Button>
        </Link>
      </div>
    </section>
  );
}
