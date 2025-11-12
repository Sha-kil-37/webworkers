//
import leader from "../assets/shakil.png";
export default function LeaderShip() {
  //
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <h3>Meet Our Leadership</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
            nostrum.
          </p>
          <button className="px-2 py-2 bg-blue-500 text-white text-semibold rounded inline-block mt-5">
            Get to know our leadership
          </button>
        </div>
        <div className="bg-amber-400 rounded-lg overflow-hidden">
          <img className="w-full h-full" src={leader} alt="leader" />
        </div>
      </div>
    </section>
  );
}
