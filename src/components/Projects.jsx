import { useState } from "react";
import { Link } from "react-router";
import audit from "../assets/audit.png";
import branding from "../assets/branding.png";
import landing from "../assets/landing.png";
import chatting from "../assets/chatting.png";
import ecommers from "../assets/ecommers.png";
import redesign from "../assets/redesign.png";
import { motion } from "framer-motion";
import background from "../assets/background.avif"

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
    <motion.section
      
      className="py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${background})` }}
      // style={{ backgroundColor: "red" }}
    >
      <div className="max-w-6xl mx-auto relative">
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10">
          {filtered.map((project, i) => (
            <Link
              to={`/projectdetails/${i}`}
              key={i}
              className="cursor-pointer group overflow-hidden rounded-xl"
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
    </motion.section>
  );
}
