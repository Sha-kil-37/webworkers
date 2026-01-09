import { motion } from "motion/react";
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
      id="portfolios"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="xl:py-15 lg:py-10 md:py-10 sm:py-10"
    >
      <div className="xl:w-6xl xl:mx-auto relative lg:w-5xl lg:mx-auto md:mx-auto md:px-6 sm:mx-auto sm:px-6">
        <h2 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-semibold font-primary text-center">
          Our <span className="text-[#0076DF]">Portfolios</span>
        </h2>
        <Paragraph className="font-primary tracking-wide text-center mx-auto 2xl:w-3xl xl:w-3xl lg:w-2xl md:w-xl sm:w-xl w-full">
          Every project we deliver is built for innovation and scalability. We
          provide web development, digital marketing, SEO, social media
          marketing, UI/UX design, and app development—backed by business
          consultation, custom software, and AI integration—to create
          user-centric, data-driven, future-ready digital solutions.
        </Paragraph>
        <div className="flex items-center mx-auto mt-5 flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <motion.button
              title={cat}
              key={cat}
              layoutId={`project-filter-${cat}`}
              onClick={() => setProjectActiveCategory(cat)}
              className={`px-3 border font-primary tracking-wide font-medium cursor-pointer ${
                projectActiveCategory === cat ? " text-[#0076DF]" : " "
              }`}
              aria-pressed={projectActiveCategory === cat}
            >
              {cat}
            </motion.button>
          ))}
        </div>
        <div className="xl:grid xl:grid-cols-3 xl:gap-6 xl:mt-10 lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-8 md:mt-6 md:grid md:grid-cols-3 md:gap-4 sm:mt-5 sm:grid sm:grid-cols-2 sm:gap-6">
          {filtered.map((project, i) => (
            <Link
              to={`/projectdetails/${i}`}
              key={i}
              className="cursor-pointer group overflow-hidden rounded-2xl shadow"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-full  object-cover group-hover:scale-105 transition-all duration-200"
                  alt={project.image}
                />
              </div>
              <div className="xl:p-4 lg:p-4 md:p-4 sm:p-4">
                <Paragraph className="font-primary">
                  {project.category}
                </Paragraph>
                <Paragraph className="font-medium tracking-wide font-primary">
                  {project.title}
                </Paragraph>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tech.map((tech, i) => {
                    return (
                      <Paragraph
                        title={tech}
                        key={i}
                        className="font-primary shadow px-2 rounded-full"
                      >
                        {tech}
                      </Paragraph>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
