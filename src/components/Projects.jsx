import { Fragment, useState } from "react";
import { Link } from "react-router";
import Paragraph from "../components/Paragraph";
import ProjectSlider from "./ProjectSlider";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
//
export default function Projects() {
  //
  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "E-commerce",
    "Marketing",
  ];
  // all project data array bellow
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
  // slider project data array bellow
  const sliderProjects = [
    {
      title: "E-Commerce Website",
      description: "A modern eCommerce web app built with MERN stack.",
      img: one,
    },
    {
      title: "Digital Agency Website",
      description: "A stylish website designed for creative agencies.",
      img: two,
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio with animations and modern UI.",
      img: three,
    },
  ];
  //
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? sampleProjects
      : sampleProjects.filter((p) => p.category === active);
  //
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto relative">
        <div className="rounded-3xl overflow-hidden min-h-80 flex justify-center items-center">
          <div>
            <p className="font-semibold text-2xl  text-center">Hello</p>
            <h2 className="max-w-100 font-bold text-center text-4xl mt-5">
              Meet Our Project
            </h2>
          </div>
        </div>
        <ProjectSlider projects={sliderProjects} />
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors duration-150 ${
                active === cat ? "bg-black text-white" : "bg-[#F5F7F8]"
              }`}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>
        {/*  */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group h-full rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className=" aspect-video flex items-center justify-center">
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
