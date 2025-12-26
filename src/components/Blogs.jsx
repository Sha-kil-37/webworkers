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
            <div className="sticky top-0">
              <h2 className="tracking-wide text-6xl font-bold w-xl text-[#082032]">
                Let's Meet Our Some Blogs.
              </h2>
            </div>
          </aside>
          
          {/* Right scrollable column */}
          <main className="md:col-span-1">
            {visibleBlogs.map((blog, i) => (
              <Link to={`/blogdetails/${i}`}  key={i} className="mb-10 cursor-pointer block group">
                {/* Image */}
                <div className="relative overflow-hidden h-80 rounded-lg">
                  <img
                    src={blog.image}
                    alt={blog.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <Paragraph className="mt-3 font-medium text-[#082032]">{blog.category}</Paragraph>
                <Paragraph className="font-medium text-[#082032] text-2xl mt-2">{blog.title}</Paragraph>
                <Paragraph className="font-medium text-[#082032]  mt-2">By {blog.author}</Paragraph>
              </Link>
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
