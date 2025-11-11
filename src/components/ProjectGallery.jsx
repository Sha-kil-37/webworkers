import { Link } from "react-router";
import { ThreeDMarquee } from "./ThreeDMarquee";
// A gallery component that uses the ThreeDMarquee component

export function ProjectGallery() {
  // Array of image URLs for the 3D marquee
  const images = [
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752229203/portfolio-blog/3491172.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/Screenshot%202024-12-04%20104347.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/Screenshot%202024-12-04%20202209.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363693/portfolio-projects/apples-7465439_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/animal-9156395_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363693/portfolio-projects/trees-7733878_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752227477/portfolio-projects/pexels-guruh-budi-430167744-30219924.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752227477/portfolio-projects/pexels-jj-carter-402482802-30229262.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752229203/portfolio-blog/3491172.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/Screenshot%202024-12-04%20104347.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/Screenshot%202024-12-04%20202209.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363693/portfolio-projects/apples-7465439_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/animal-9156395_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363693/portfolio-projects/trees-7733878_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752227477/portfolio-projects/pexels-guruh-budi-430167744-30219924.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752227477/portfolio-projects/pexels-jj-carter-402482802-30229262.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752229203/portfolio-blog/3491172.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/Screenshot%202024-12-04%20104347.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/Screenshot%202024-12-04%20202209.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363693/portfolio-projects/apples-7465439_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/animal-9156395_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363693/portfolio-projects/trees-7733878_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752227477/portfolio-projects/pexels-guruh-budi-430167744-30219924.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752227477/portfolio-projects/pexels-jj-carter-402482802-30229262.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752229203/portfolio-blog/3491172.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/Screenshot%202024-12-04%20104347.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/Screenshot%202024-12-04%20202209.png.png",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363693/portfolio-projects/apples-7465439_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363694/portfolio-projects/animal-9156395_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1755363693/portfolio-projects/trees-7733878_1280.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752227477/portfolio-projects/pexels-guruh-budi-430167744-30219924.jpg.jpg",
    "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1752227477/portfolio-projects/pexels-jj-carter-402482802-30229262.jpg.jpg",
  ];
  return (
    <section className="relative z-0">
      <div className="absolute top-[50%] left-[50%] z-2 transform -translate-x-[50%] -translate-y-[50%] text-center">
        <Link to={"/projects"} className="px-4 py-2 bg-blue-500 text-white rounded-4xl  inline-block font-medium hover:bg-blue-600 transition text-center">Our Project</Link>
      </div>
      <ThreeDMarquee images={images} />
    </section>
  );
}
