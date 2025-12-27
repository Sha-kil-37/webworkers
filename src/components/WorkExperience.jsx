import british from "../assets/british.avif";
import delair from "../assets/delair.avif";
import healtcare from "../assets/healthcare.avif";
import mapesa from "../assets/mapesa.avif";
import narayana from "../assets/narayana.avif";
import nsic from "../assets/nsic.avif";
import sbg from "../assets/sbg.avif";
import sprint from "../assets/sprint.avif";
import { motion } from "framer-motion";
//
export default function WorkExperience() {
  //

  //
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative py-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="tracking-wide text-6xl font-bold text-[#082032] text-center w-5xl mx-auto">
          With whom we have work experience
        </h2>
        <div className="grid xl:grid-cols-2 mt-10">
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              doloribus ad sapiente, aperiam ex a dolores impedit saepe eaque?
              Omnis aspernatur sunt ex error, suscipit mollitia provident ut
              voluptate necessitatibus.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              laudantium alias praesentium molestias laborum! Voluptatum quidem
              autem quos laboriosam totam doloribus, facilis dolorum quo impedit
              velit officiis asperiores nobis nihil!
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
