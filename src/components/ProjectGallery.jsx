import { Link } from "react-router";
import ProjectCard from "./ProjectCard";
import CountUp from "./CountUp";
//
export default function ProjectGallery() {
  // Dummy image URLs
  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  //
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto flex justify-between flex-wrap">
        <ProjectCard
          className="custom-bounceCards"
          images={images}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={false}
        />
        <div>
          <h2 className="text-xl">
            Explore Our Work Across Different Industries!
          </h2>
          <p className="max-w-lg mx-auto mb-4 text-gray-600 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            dolorum tempore amet labore velit in asperiores ipsa repellendus
            fugiat porro. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Nisi dolorum . Lorem ipsum tempore amet labore velit in
            asperiores ipsa repellendus fugiat porro.
          </p>
          <Link
            className="px-4 py-2 bg-blue-500 text-white rounded-4xl  inline-block font-medium hover:bg-blue-600 transition text-center"
            to={"/projects"}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
