import React, { useState } from "react";
import { Link } from "react-router";
import Paragraph from "../components/Paragraph";

// Components
export default function Projects() {
  //
  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "E-commerce",
    "Marketing",
  ];

  const sampleProjects = [
    {
      id: 1,
      title: "Marketing Site Redesign",
      category: "Web Development",
      summary:
        "A fast, accessible marketing site built with a focus on performance and conversions.",
      tech: ["React", "Tailwind", "Vite"],
    },
    {
      id: 2,
      title: "E‑commerce Checkout Flow",
      category: "E-commerce",
      summary:
        "Streamlined checkout with improved UX and fewer abandoned carts.",
      tech: ["React", "Stripe", "Node"],
    },
    {
      id: 3,
      title: "Branding & UI Kit",
      category: "UI/UX Design",
      summary: "Design system and UI kit for consistent product experiences.",
      tech: ["Figma", "Design Tokens"],
    },
    {
      id: 4,
      title: "Landing Page A/B Tests",
      category: "Marketing",
      summary:
        "A/B testing framework to validate messaging and increase signups.",
      tech: ["Optimizely", "Analytics"],
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web Development",
      summary: "Responsive admin dashboard with charts and real-time updates.",
      tech: ["React", "Chart.js", "WebSocket"],
    },
    {
      id: 6,
      title: "Conversion Rate Audit",
      category: "Marketing",
      summary: "Research-led recommendations for improving conversion funnels.",
      tech: ["Research", "Recommendations"],
    },
  ];

  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? sampleProjects
      : sampleProjects.filter((p) => p.category === active);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <h2
          id="projects-heading"
          className="text-3xl lg:text-4xl font-extrabold text-center text-slate-900"
        >
          Meet Our Projects
        </h2>

        <Paragraph>
          A curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more.
          A curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more.
          A curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more.
          A curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more.
          A curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more.
          A curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more.
          A curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more. A
          curated selection of recent work — product design, marketing
          experiments, and full-stack builds. Click a project to learn more.
        </Paragraph>

        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                active === cat
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group bg-white overflow-hidden  hover:shadow-md transition-shadow"
            >
              <div className="bg-[#F9F8F6] aspect-video flex items-center justify-center">
                <span className="text-sm text-slate-400">Preview</span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>

                <Paragraph>{p.summary}</Paragraph>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{p.category}</span>
                  <Link
                    to={`/projects/${p.id}`}
                    className="text-sm text-slate-900 font-medium hover:underline"
                  >
                    View project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
