import Carousel from "./Carousel";

//
export default function Testimonial() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center">
          What Our Clients Say
        </h2>
        <p className="mt-5 max-w-[700px] mx-auto text-center text-lg font-normal">
          We’re proud to have built long-term relationships with our clients.
          Here’s what they have to say about working with WebWorkers Digital
          Agency.
        </p>
        <Carousel />
      </div>
    </section>
  );
}
