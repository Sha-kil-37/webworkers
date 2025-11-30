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
        <BlurInText className="text-6xl font-bold">
          WebWorkers Projects
        </BlurInText>
        <Paragraph className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga
          eaque ducimus debitis nam reiciendis, quia minus commodi velit,
          suscipit error eius a eveniet modi placeat cupiditate tempora. Vel
          incidunt facere suscipit nemo? Repudiandae possimus labore tenetur
          numquam eligendi aspernatur, placeat, tempore, illo autem sequi
          excepturi minima eveniet atque molestiae corporis dolor. Aperiam odio
          eius itaque corrupti eos quibusdam quas vero hic labore esse minima
          nam amet earum molestiae veniam, doloremque corporis, voluptate
          aliquid inventore porro nostrum! Fugit corrupti iure veniam ut
          dignissimos, provident nulla alias illum minus hic recusandae id eos
          maiores, possimus soluta deleniti? Deleniti, hic. Iste error totam
          ipsum quo impedit reprehenderit? Aspernatur nisi sit, consequuntur
          veniam itaque illo fugiat vero? Mollitia aspernatur maiores, quaerat
          accusantium possimus id iusto, accusamus ea, quod itaque sapiente?
          Pariatur eligendi, aspernatur magnam, laborum, nulla unde provident
          ullam eius laboriosam dignissimos ea ipsum delectus debitis rem
          laudantium minima expedita facilis! Commodi consequuntur, quia
          excepturi facere aperiam quidem optio minima fugiat esse. Quisquam
          asperiores quibusdam illo laborum, facere error atque laudantium sunt
          possimus dolore obcaecati expedita eaque sit culpa doloribus
          consectetur ratione, ipsam, velit odio blanditiis impedit modi
          provident vero doloremque? Minima ipsam cum est eum hic earum libero
          animi quidem at numquam, corrupti nemo dolores! Ad quidem voluptatum
          dolorum doloribus, voluptates ex molestias vero mollitia quibusdam
          aspernatur, beatae, neque modi obcaecati quasi dolorem labore placeat!
          Soluta hic, quae nam dolor eaque autem culpa aut eveniet aperiam
          itaque qui officiis doloribus perferendis exercitationem nemo porro
          ratione perspiciatis ipsa aspernatur molestias! Porro nihil corrupti,
          suscipit eaque quaerat sunt. In quisquam ut adipisci quas minima
          dignissimos officia harum ipsum quaerat modi necessitatibus laborum ad
          voluptatum nam fuga magni, nisi nostrum, saepe ducimus temporibus
          soluta possimus! Repellat eos, praesentium maiores ad officia
          distinctio quaerat qui suscipit, sint quis similique inventore
          perspiciatis dignissimos, aut harum nemo illum.
        </Paragraph>
        <div className="rounded-3xl overflow-hidden min-h-40 flex justify-center items-center">
          <h2 className="max-w-100 font-bold text-center text-4xl">
            Meet Our Projects
          </h2>
        </div>
        {/*  */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
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
