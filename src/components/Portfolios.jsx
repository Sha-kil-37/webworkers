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
        <h2 className="tracking-wide text-3xl text-center font-bold font-primary lg:text-3xl lg:tracking-wide md:text-2xl sm:text-2xl sm:tracking-wide ">
          Our <span className="text-[#0076DF]">Portfolios</span>
        </h2>
        <Paragraph className="xl:w-4xl xl:mx-auto font-medium text-center mt-2 tracking-wide font-primary lg:mt-2 lg:tracking-wide lg:w-3xl lg:mx-auto md:mt-2 md:mx-auto md:w-2xl sm:mt-2 sm:mx-auto sm:w-xl">
          Every project we deliver is built for innovation and scalability. We
          provide web development, digital marketing, SEO, social media
          marketing, UI/UX design, and app development—backed by business
          consultation, custom software, and AI integration—to create
          user-centric, data-driven, future-ready digital solutions.
        </Paragraph>
        <div className="xl:flex xl:mt-5 xl:items-center xl:justify-center xl:gap-3 xl:flex-wrap lg:mt-4 lg:flex lg:items-center lg:justify-center lg:gap-3 lg:flex-wrap md:mt-5 md:flex md:items-center md:justify-center md:gap-3 md:flex-wrap sm:flex sm:items-center sm:justify-center sm:gap-3 sm:flex-wrap sm:mt-4">
          {categories.map((cat) => (
            <motion.button
              title={cat}
              key={cat}
              layoutId={`project-filter-${cat}`}
              onClick={() => setProjectActiveCategory(cat)}
              className={`whitespace-nowrap xl:px-4 py-1 rounded-full cursor-pointer transition-colors duration-200 font-medium shadow font-primary tracking-wide 
                lg:px-4 md:px-4 sm:px-4${
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
                <Paragraph className="font-primary tracking-wide">
                  {project.category}
                </Paragraph>
                <Paragraph className="font-medium text-xl md:text-lg font-primary tracking-wide sm:text-lg">
                  {project.title}
                </Paragraph>
                <div className="xl:flex xl:gap-x-2 xl:mt-3 lg:flex  lg:flex-wrap xl:flex-wrap lg:gap-x-2 lg:mt-2 md:mt-2 md:flex md:gap-2 md:flex-wrap sm:mt-2 sm:flex sm:gap-2 sm:flex-wrap">
                  {project.tech.map((tech, i) => {
                    return (
                      <Paragraph
                        title={tech}
                        key={i}
                        className="xl:px-2 rounded-full shadow font-medium font-primary tracking-wide lg:px-2 md:px-2 sm:px-2"
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
