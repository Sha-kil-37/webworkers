import audit from "../assets/audit.png";
import uiuxdesign from "../assets/uiuxdesign.png";
import marketing from "../assets/marketing.png";
import dashbord from "../assets/dashbord.png";
import ecommers from "../assets/ecommers.png";
import webdevelopment from "../assets/webdevelopment.png";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import Paragraph from "./Paragraph";
import { Link } from "react-router";
import { useState } from "react";

//
export default function Projects() {
  //
  // How many projects to show at first
  const [visibleCount, setVisibleCount] = useState(4);

  // all project data array bellow
  const projects = [
    {
      id: 1,
      title: "Marketing Site Redesign",
      category: "Web Development",
      summary:
        "A fast, accessible marketing site built with a focus on performance and conversions.",
      tech: ["React", "Tailwind", "Vite"],
      image: webdevelopment,
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
      image: uiuxdesign,
    },
    {
      id: 4,
      title: "Landing Page A/B Tests",
      category: "Marketing",
      summary:
        "A/B testing framework to validate messaging and increase signups.",
      tech: ["Optimizely", "Analytics"],
      image: marketing,
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web Development",
      summary: "Responsive admin dashboard with charts and real-time updates.",
      tech: ["React", "Firebase", "WebSocket"],
      image: dashbord,
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
  // Slice array to show only visible items
  const visibleProjects = projects.slice(0, visibleCount);
  // handle load more blogs
  const handleLoadMoreProjects = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more each click
  };
  //
  return (
    <motion.section className="py-20 bg-fixed bg-center bg-cover">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="tracking-wide text-6xl text-center font-bold text-[#082032]">
          Let's Meet Our Some Beautiful Projects.
        </h2>

        <div className="grid xl:grid-cols-3 gap-6 mt-20">
          {visibleProjects.map((project, i) => (
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
                {/* Hover Overlay */}
                <div className="absolute top-0 left-0 h-full w-full inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-black/30 flex justify-center items-center">
                  <FaArrowUpLong className="transform-rotate-3" />
                </div>
              </div>
              <Paragraph className="font-medium text-[#082032] mt-3">
                {project.category}
              </Paragraph>
              <Paragraph className="font-medium text-xl text-[#082032] ">
                {project.title}
              </Paragraph>
              <div className="flex gap-x-2 mt-3">
                {project.tech.map((tech, i) => {
                  return (
                    <span
                      key={i}
                      className="px-2 rounded-full border text-[#082032] font-medium"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <button
            onClick={handleLoadMoreProjects}
            className="cursor-pointer px-4 py-2 rounded-full bg-amber-200 text-[#082032] font-medium"
          >
            More Projects
          </button>
        </div>
      </div>
    </motion.section>
  );
}
