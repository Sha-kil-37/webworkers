import Paragraph from "./Paragraph";
//
export default function OurMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-[var(--black-color)]">
              Our Mission
            </h2>
            <Paragraph className="max-w-xl text-[var(--black-color)]">
              We create smart, creative, and impactful digital solutions that
              help businesses grow with confidence. We deliver high-quality Web
              Development, Digital Marketing, UI/UX Design, SEO, and innovative
              software services. We empower clients, strengthen brands, and
              build meaningful digital experiences that drive real results.
            </Paragraph>
          </div>
          {/*  */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
            <p className="text-4xl font-bold text-[var(--secondary-color)] mb-2">
              300+
            </p>
            <p className="text-[var(--black-color)] font-medium">
              Happy Clients
            </p>
            <p className="text-[var(--black-color)] mt-2">
              Trusted by businesses globally
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
            <p className="text-4xl font-bold text-[var(--red-color)] mb-2">
              400+
            </p>
            <p className="text-[var(--black-color)] font-medium">
              Projects Delivered
            </p>
            <p className="text-[var(--black-color)] mt-2">
              From startups to enterprises
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
            <p className="text-4xl font-bold text-green-600 mb-2">5+</p>
            <p className="text-[var(--black-color)] font-medium">Years of Excellence</p>
            <p className="text-[var(--black-color)] mt-2">
              Continuous innovation
            </p>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
}
