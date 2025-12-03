import { useState } from "react";
import { Link } from "react-router";
import BlurInText from "./BlurInText";
import Paragraph from "./Paragraph";
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
        <h2 className="font-bold text-4xl">Our Projects</h2>
        <Paragraph className="">
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
          {filtered.map((project, i) => (
            <Link
              to={`/projectdetails/${i}`}
              key={i}
              className="p-6 bg-[#F5F7F8] cursor-pointer"
            >
              <p>{project.summary}</p>
              <div className="mt-5 flex gap-x-2 flex-wrap">
                {project.tech.map((item, i) => {
                  return (
                    <span key={i} className="block bg-blue-400">
                      {item}
                    </span>
                  );
                })}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
