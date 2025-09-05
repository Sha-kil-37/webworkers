import React, { useState } from "react";
// 
export default function Portfolio() {
  const categories = [
    "All",
    "UI/UX Design",
    "Web Development",
    "Digital Marketing",
  ];
  const sampleProjects = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: `Project ${i + 1}`,
    category: categories[(i % (categories.length - 1)) + 1],
  }));

  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? sampleProjects
      : sampleProjects.filter((p) => p.category === active);

  return (
    <section id="projects" aria-labelledby="portfolio-heading" >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2
         
          className="text-3xl lg:text-4xl font-extrabold text-center"
        >
          Our Portfolio
        </h2>
        <p className="mt-5 max-w-[700px] mx-auto text-center text-lg font-normal">
          From startups to established brands, we’ve helped businesses grow with our creative digital solutions. Explore some of our recent work.
        </p>

        {/* layout: left column for categories on md+, mobile shows pill row above grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          {/* Left column (desktop) */}
          <aside className="hidden md:block">
            <nav aria-label="Portfolio categories" className="space-y-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`w-full text-left px-4 py-2 rounded-full transition-colors duration-150 text-sm font-medium flex items-center justify-between ${
                    active === cat
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <span>{cat}</span>
                  {cat === "UI/UX Design" && (
                    <span className="ml-3 text-gray-400">↗</span>
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right column: spans 3 on md+ */}
          <div className="md:col-span-3">
            {/* Mobile category pills */}
            <div className="md:hidden flex gap-3 overflow-x-auto pb-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium flex-shrink-0 transition-colors duration-150 ${
                    active === cat
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  aria-pressed={active === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Responsive grid: 1 / 2 / 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filtered.map((p) => (
                <article
                  key={p.id}
                  className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* image / visual placeholder */}
                  <div className="bg-gray-200 aspect-square flex items-center justify-center">
                    <span className="text-sm text-gray-500">Preview</span>
                  </div>

                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {p.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{p.category}</p>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      View Project
                      <span className="ml-2" aria-hidden>
                        →
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
