
export default function Test() {
  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Build Better Digital Experiences
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We create modern, fast, and scalable web solutions using the
            latest technologies. Our focus is clean UI, smooth UX, and
            performance-driven development.
          </p>
          <button className="inline-block px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full h-64 md:h-80 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-semibold">
          Your Content / Image
        </div>

      </div>
    </section>
  );
}

