import BlogSlider from "./BlogSlider";
import { useState } from "react";
import Paragraph from "./Paragraph";
import { Link } from "react-router";
import blogone from "../assets/blogone.jpg";
import blogtwo from "../assets/blogtwo.jpg";
import blogthree from "../assets/blogthree.jpg";
import blogfour from "../assets/blogfour.jpg";
import blogfive from "../assets/blogfive.jpg";
import blogsix from "../assets/blogsix.jpg";
import blogseven from "../assets/blogseven.jpg";
//
//
export default function Blogs() {
  // How many blogs to show at first
  const [visibleCount, setVisibleCount] = useState(3);
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt:
        "Explore the latest trends and technologies shaping the web development landscape.",
      category: "Technology",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      image: blogfour,
    },
    {
      id: 2,
      title: "UI/UX Design Principles That Work",
      excerpt:
        "Master the fundamentals of creating user-friendly and beautiful interfaces.",
      category: "Design",
      author: "Mike Chen",
      date: "Dec 10, 2024",
      image: blogone,
    },
    {
      id: 3,
      title: "Building Scalable Applications",
      excerpt:
        "Learn best practices for creating applications that grow with your business.",
      category: "Technology",
      author: "Alex Rivera",
      date: "Dec 8, 2024",
      image: blogtwo,
    },
    {
      id: 4,
      title: "Digital Marketing Trends 2024",
      excerpt:
        "Stay ahead of the competition with these emerging marketing strategies.",
      category: "Marketing",
      author: "Emily Watson",
      date: "Dec 5, 2024",
      image: blogthree,
    },
    {
      id: 5,
      title: "Cloud Computing Solutions",
      excerpt:
        "Discover how cloud technology can optimize your business operations.",
      category: "Technology",
      author: "James Park",
      date: "Dec 1, 2024",
      image: blogfive,
    },
    {
      id: 6,
      title: "Content Strategy for Growth",
      excerpt:
        "Create compelling content that drives engagement and conversions.",
      category: "Marketing",
      author: "Lisa Anderson",
      date: "Nov 28, 2024",
      image: blogsix,
    },
    {
      id: 7,
      title: "Pharmacy digital solution",
      excerpt:
        "Create compelling content that drives engagement and conversions.",
      category: "Marketing",
      author: "Lisa Anderson",
      date: "Nov 28, 2024",
      image: blogseven,
    },
  ];
  //
  // Slice array to show only visible items
  const visibleBlogs = blogs.slice(0, visibleCount);
  // handle load more blogs
  const handleLoadMoreBlogs = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more each click
  };
  //
  // Render component
  return (
    <section className="">
      <div className="max-w-6xl mx-auto">
        {/* <BlogSlider blogs={blogs} /> */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left sticky column */}
          <aside className="md:col-span-1 border-r border-gray-200">
            <div className="sticky top-20">
              <Paragraph className="mt-4 font-mono font-bold text-3xl">
                Welcome to our blog—your destination for expert insights,
                practical strategies, and the latest trends in the digital
                world. Here, we share knowledge that empowers businesses,
                creators, and innovators to stay ahead in a fast-evolving
                digital landscape. Dive into our blogs and discover fresh ideas,
                expert opinions, and strategies that help you make smarter
                decisions and build a stronger digital presence.
              </Paragraph>
            </div>
          </aside>

          {/* Right scrollable column */}
          <main className="md:col-span-1">
            {visibleBlogs.map((blog, i) => (
              <div
                key={i}
                className="group transition-all duration-300 cursor-pointer mb-10"
              >
                <div className="overflow-hidden w-full h-56">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="duration-300 py-2">
                  <h3 className="font-semibold">{blog.title}</h3>
                  <Paragraph className="">{blog.date}</Paragraph>
                  <Link
                    to={`/blogdetails/${blog.id}`}
                    className="px-3 py-1 rounded-xl inline-block mt-5 bg-blue-500 text-white font-mono"
                  >
                    click for view
                  </Link>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-6 mb-6">
              <button
                onClick={handleLoadMoreBlogs}
                className="cursor-pointer px-4 py-2 rounded-xl font-medium transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                More Blogs
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
