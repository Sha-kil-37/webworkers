import Team from "./Team";
import Feature from "./Feature";
//
export default function About() {
  //

  //
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center">
          About Us
        </h2>
        <Feature />
        <h2 className="font-bold text-center text-4xl">Our Experts</h2>
        <Team />
      </div>
    </section>
  );
}
