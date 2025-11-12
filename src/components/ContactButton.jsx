import { Link } from "react-router";
//
export default function ContactButton() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto rounded-2xl bg-gray-600 text-center shadow-lg py-10">
        <Link
          className="px-4 py-2 bg-blue-500 text-white rounded-4xl inline-block font-medium hover:bg-blue-600 transition text-center mx-auto"
          to={"/contact"}
        >
          Lets talk with us
        </Link>
      </div>
    </section>
  );
}
