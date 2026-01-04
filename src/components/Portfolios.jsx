import { motion } from "motion/react";
import { FaArrowUpLong } from "react-icons/fa6";
import Paragraph from "./Paragraph";
import { Link } from "react-router";
import { useSearch } from "../context/SearchContext";
//
//
export default function Projects() {
  //
  // How many projects to show at first
  const { projectActiveCategory, setProjectActiveCategory } = useSearch();
  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "E-commerce",
    "Marketing",
  ];
  // all project data array bellow
  const projects = [
    {
      id: 1,
      title: "Marketing Site Redesign",
      category: "Web Development",
      summary:
        "A fast, accessible marketing site built with a focus on performance and conversions.",
      tech: ["React", "Tailwind", "Vite"],
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767117859/agency/projects/webdevelopment_gtjbav.png",
    },
    {
      id: 2,
      title: "E‑commerce Checkout Flow",
      category: "E-commerce",
      summary:
        "Streamlined checkout with improved UX and fewer abandoned carts.",
      tech: ["React", "Stripe", "Node"],
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767117859/agency/projects/ecommers_rlkv1p.jpg",
    },
    {
      id: 3,
      title: "Branding & UI Kit",
      category: "UI/UX Design",
      summary: "Design system and UI kit for consistent product experiences.",
      tech: ["Figma", "Design Tokens"],
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767117860/agency/projects/uiuxdesign_valtgm.jpg",
    },
    {
      id: 4,
      title: "Landing Page A/B Tests",
      category: "Marketing",
      summary:
        "A/B testing framework to validate messaging and increase signups.",
      tech: ["Optimizely", "Analytics"],
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767117858/agency/projects/marketing_ayxmmc.png",
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web Development",
      summary: "Responsive admin dashboard with charts and real-time updates.",
      tech: ["React", "Firebase", "WebSocket"],
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767117859/agency/projects/dashbord_ekt2r7.png",
    },
    {
      id: 6,
      title: "Conversion Rate Audit",
      category: "Marketing",
      summary: "Research-led recommendations for improving conversion funnels.",
      tech: ["Research", "Recommendations"],
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767117857/agency/projects/audit_jdedz4.jpg",
    },
  ];
  const filtered =
    projectActiveCategory === "All"
      ? projects
      : projects.filter((p) => p.category === projectActiveCategory);
  //
  // Slice array to show only visible items

  //
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-10"
    >
      <div className="xl:w-6xl mx-auto relative">
        <h2 className="tracking-wide text-3xl text-center font-bold font-primary">
          Our <span className="text-[#0076DF]">Portfolios</span>
        </h2>
        <Paragraph className="xl:w-4xl xl:mx-auto font-medium text-center mt-5 tracking-wide font-primary">
          Every project we deliver is designed with innovation and scalability
          in mind. We work across web development, digital marketing, SEO,
          social media marketing, UI/UX design, and app development—supported by
          expert business consultation, custom software solutions, and AI
          integration. Our focus is on creating digital products that are
          user-centric, data-driven, and future-ready.
        </Paragraph>
        <div className="flex mt-10 items-center justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              title={cat}
              key={cat}
              layoutId={`project-filter-${cat}`}
              onClick={() => setProjectActiveCategory(cat)}
              className={`whitespace-nowrap xl:px-4 xl:py-2 rounded-full cursor-pointer transition-colors duration-200 font-medium shadow font-primary tracking-wide ${
                projectActiveCategory === cat
                  ? " bg-[#0076DF]"
                  : " bg-[#F5F5F7]"
              }`}
              aria-pressed={projectActiveCategory === cat}
            >
              {cat}
            </motion.button>
          ))}
        </div>
        <div className="xl:grid xl:grid-cols-3 gap-6 xl:mt-10">
          {filtered.map((project, i) => (
            <Link
              to={`/projectdetails/${i}`}
              key={i}
              className="cursor-pointer group overflow-hidden rounded-lg"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-full  object-cover group-hover:scale-105 transition-all duration-500"
                  alt={project.image}
                />
              </div>
              <Paragraph className="mt-3 font-primary tracking-wide">
                {project.category}
              </Paragraph>
              <Paragraph className="font-medium text-xl font-primary tracking-wider">
                {project.title}
              </Paragraph>
              <div className="flex gap-x-2 mt-3">
                {project.tech.map((tech, i) => {
                  return (
                    <Paragraph
                      title={tech}
                      key={i}
                      className="px-2 rounded-full bg-[#F5F5F7] font-medium font-primary tracking-wide"
                    >
                      {tech}
                    </Paragraph>
                  );
                })}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
