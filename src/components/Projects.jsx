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
    <section className="py-20 bg-[var(--white-color)]">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="font-bold text-4xl text-[var(--black-color)]">
          Our Projects
        </h2>
        <Paragraph className="text-[var(--black-color)]">
          Explore the work that defines who we are. Each project represents our
          commitment to quality, innovation, and digital excellence. From modern
          websites and intuitive user interfaces to custom software solutions
          and advanced AI integrations, we build digital products that solve
          real problems and create meaningful impact. Our portfolio showcases a
          diverse range of projects across Web Development, UI/UX Design, App
          Development, Digital Marketing, Social Media Marketing, SEO, Business
          Consultation, and Custom Software Development. Every solution is
          crafted with care, backed by research, powered by modern technologies,
          and aligned with our clients’ business goals. We believe great digital
          products are built through collaboration, creativity, and a deep
          understanding of user needs. That is why we approach every project
          with a strategic mindset—focusing on usability, performance,
          scalability, and long-term growth. Browse through our work and
          discover how we help brands elevate their digital presence, streamline
          operations, and unlock new opportunities through tailored digital
          solutions.
        </Paragraph>

        {/*  */}
        <div className="flex mt-30 items-center justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full  cursor-pointer transition-colors duration-300 font-medium border border-[var(--black-color)] ${
                active === cat
                  ? "bg-[var(--secondary-color)] text-[var(--white-color)] border-[var(--secondary-color)]"
                  : "bg-[var(--primary-color)]"
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
              className="cursor-pointer rounded-xl overflow-hidden"
            >
              <img src={project.image} alt={project.title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
