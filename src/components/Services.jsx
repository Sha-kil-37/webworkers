import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Default services data (will be used if no `services` prop passed)
const defaultServices = [
  {
    title: "UI/UX Design",
    description:
      "Complete product design including user research, wireframes, prototypes, and interactions.",
    tags: ["UI Design", "UX Research", "Prototyping"],
  },
  {
    title: "Mobile App Development",
    description:
      "Creative mobile UI layouts and development for Android and iOS apps with clean and modern design principles.",
    tags: ["Mobile App", "IOS App", "Prototyping"],
  },
  {
    title: "Website Design",
    description:
      "Responsive website UI design with modern layouts, typography, and smooth user flows.",
    tags: ["Web UI", "Responsive", "Landing Page"],
  },
  {
    title: "SaaS Dashboard Design",
    description:
      "Professional SaaS dashboard and admin panel UI with beautiful data visualization.",
    tags: ["Dashboard", "SaaS", "UI/UX"],
  },
  {
    title: "Digital Marketing",
    description:
      "End-to-end digital marketing: strategy, ads, SEO, social growth and analytics.",
    tags: ["Marketing", "SEO", "Ads"],
  },
  {
    title: "Website Development",
    description:
      "Responsive website development with modern tech, performance-first and SEO friendly.",
    tags: ["Web Development", "Web Application", "Landing Page"],
  },
];

export default function Services({ services = defaultServices }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [selected, setSelected] = useState(null);

  // Collect unique tags
  const allTags = useMemo(() => {
    const set = new Set();
    services.forEach((s) => s.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, [services]);

  // Filtered services
  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesQuery =
        query.trim() === "" ||
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.description.toLowerCase().includes(query.toLowerCase());
      const matchesTag =
        activeTag === "" || activeTag === "All" || s.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [services, query, activeTag]);
  //
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Design & development services for modern digital products.
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <input
              aria-label="Search services"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-3 py-2 rounded-md border bg-transparent placeholder:text-sm w-56 md:w-72"
              placeholder="Search services..."
            />

            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag === "All" ? "" : tag)}
                  className={`text-sm px-3 py-1 rounded-full border transition-all text-[0.85rem] ${
                    activeTag === tag || (tag === "All" && activeTag === "")
                      ? "bg-white/10 border-white/30"
                      : "hover:bg-white/5"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </header>
        <motion.ul
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filtered.map((service) => (
              <motion.li
                key={service.title}
                layout
                initial={{ opacity: 0, y: 8, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
              >
                <article
                  tabIndex={0}
                  onClick={() => setSelected(service)}
                  className="group cursor-pointer p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white/3 to-white/2"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((t) => (
                      <span
                        key={t}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTag(t);
                        }}
                        className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border hover:scale-105 transition-transform cursor-pointer"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(service);
                      }}
                      className="text-sm px-4 py-2 rounded-lg border hover:shadow-sm"
                    >
                      Learn more
                    </button>

                    <span className="text-xs opacity-70">View →</span>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {/* Modal / Detail panel */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
            >
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setSelected(null)}
              />

              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.99 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 12, opacity: 0, scale: 0.995 }}
                className="relative z-10 w-full max-w-2xl rounded-2xl bg-white/6 p-6 border shadow-2xl"
              >
                <header className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">{selected.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {selected.tags.join(" • ")}
                    </p>
                  </div>
                  <button
                    aria-label="Close"
                    onClick={() => setSelected(null)}
                    className="px-3 py-2 rounded-md border"
                  >
                    Close
                  </button>
                </header>

                <div className="mt-4 text-sm leading-relaxed">
                  {selected.description}
                </div>

                {/* Example extras: bullets or what you deliver */}
                <ul className="mt-4 ml-4 list-disc text-sm">
                  <li>Initial research & scope</li>
                  <li>Interactive prototypes (Figma / XD)</li>
                  <li>Design handoff & developer support</li>
                  <li>Optional analytics & conversion review</li>
                </ul>

                <div className="mt-6 flex gap-3 justify-end">
                  <a
                    href="#contact"
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 rounded-md border font-medium"
                  >
                    Start Project
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/*
  Usage:
  1. Make sure TailwindCSS is set up in your project.
  2. Install framer-motion (optional but recommended for the entrance/exit animations):
     npm i framer-motion
  3. Import and use in your page/component:
     import ServicesGrid from './ServicesComponent';
     <ServicesGrid services={services} />

  Notes:
  - The component is responsive and keyboard accessible.
  - It supports searching and tag filtering, plus a modal detail panel.
  - Tailwind's "line-clamp" utility is used for truncation; enable the plugin if you're using it.
*/
