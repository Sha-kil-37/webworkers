import Paragraph from "./Paragraph";

//
export default function OurMission() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2> Our Mission</h2>

            <Paragraph className="max-w-xl mt-5">
              We create smart, creative, and impactful digital solutions that
              help businesses grow with confidence. We deliver high-quality Web
              Development, Digital Marketing, UI/UX Design, SEO, and innovative
              software services. We empower clients, strengthen brands, and
              build meaningful digital experiences that drive real results.
            </Paragraph>
          </div>
          {/*  */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl mt-3">
            <p className="text-4xl font-bold mb-2">300+</p>
            <p className="font-medium">Happy Clients</p>
            <p className="mt-2">Trusted by businesses globally</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl mt-3">
            <p className="text-4xl font-bold mb-2">400+</p>
            <p className="font-medium">Projects Delivered</p>
            <p className="mt-2">From startups to enterprises</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl mt-3">
            <p className="text-4xl font-bold text-green-600 mb-2">5+</p>
            <p className="font-medium">Years of Excellence</p>
            <p className="mt-2">Continuous innovation</p>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
}
