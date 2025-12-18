import { useState } from "react";
import { Link } from "react-router";
import Paragraph from "./Paragraph";
import audit from "../assets/audit.png";
import branding from "../assets/branding.png";
import landing from "../assets/landing.png";
import chatting from "../assets/chatting.png";
import ecommers from "../assets/ecommers.png";
import redesign from "../assets/redesign.png";
//
//
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
      image: redesign,
    },
    {
      id: 2,
      title: "E‑commerce Checkout Flow",
      category: "E-commerce",
      summary:
        "Streamlined checkout with improved UX and fewer abandoned carts.",
      tech: ["React", "Stripe", "Node"],
      image: ecommers,
    },
    {
      id: 3,
      title: "Branding & UI Kit",
      category: "UI/UX Design",
      summary: "Design system and UI kit for consistent product experiences.",
      tech: ["Figma", "Design Tokens"],
      image: branding,
    },
    {
      id: 4,
      title: "Landing Page A/B Tests",
      category: "Marketing",
      summary:
        "A/B testing framework to validate messaging and increase signups.",
      tech: ["Optimizely", "Analytics"],
      image: landing,
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web Development",
      summary: "Responsive admin dashboard with charts and real-time updates.",
      tech: ["React", "Firebase", "WebSocket"],
      image: chatting,
    },
    {
      id: 6,
      title: "Conversion Rate Audit",
      category: "Marketing",
      summary: "Research-led recommendations for improving conversion funnels.",
      tech: ["Research", "Recommendations"],
      image: audit,
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
    <section className="py-20">
      <div className="max-w-6xl mx-auto relative">
        <Paragraph className="text-3xl font-bold font-mono text-center">
          Explore the work that defines us. Each project reflects our commitment to quality, innovation, and digital excellence—from modern websites and intuitive UI/UX to custom software and AI-driven solutions. Our portfolio spans web and app development, digital and social media marketing, SEO, business consultation, and custom software. Every solution is research-driven, built with modern technology, and aligned with our clients’ goals. Through collaboration and a strategic focus on usability, performance, and scalability, we help brands elevate their digital presence and achieve sustainable growth.
        </Paragraph>

        {/*  */}
        <div className="flex mt-5 items-center justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`${
                active === cat
                  ? "px-4 py-1 bg-orange-300 text-white rounded-full font-medium font-mono cursor-pointer"
                  : "px-4 py-1 bg-gray-800 text-white rounded-full font-medium font-mono cursor-pointer"
              }`}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>
        {/*  */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 mt-10">
          {filtered.map((project, i) => (
            <Link
              to={`/projectdetails/${i}`}
              key={i}
              className="cursor-pointer overflow-hidden group"
            >
              <img
                className="group-hover:scale-105 transition-transform duration-300"
                src={project.image}
                alt={project.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
