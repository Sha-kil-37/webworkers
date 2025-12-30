import { useState } from "react";
import Paragraph from "./Paragraph";
import { Link } from "react-router";
import { motion } from "framer-motion";
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
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767116433/agency/blogs/webdevelopment_lnvy2w.png",
    },
    {
      id: 2,
      title: "UI/UX Design Principles That Work",
      excerpt:
        "Master the fundamentals of creating user-friendly and beautiful interfaces.",
      category: "Design",
      author: "Mike Chen",
      date: "Dec 10, 2024",
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767116171/agency/blogs/uiux_tchiqd.png",
    },
    {
      id: 3,
      title: "Building Scalable Applications",
      excerpt:
        "Learn best practices for creating applications that grow with your business.",
      category: "Technology",
      author: "Alex Rivera",
      date: "Dec 8, 2024",
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767116549/agency/blogs/application_br45vw.jpg",
    },
    {
      id: 4,
      title: "Digital Marketing Trends 2024",
      excerpt:
        "Stay ahead of the competition with these emerging marketing strategies.",
      category: "Marketing",
      author: "Emily Watson",
      date: "Dec 5, 2024",
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767116713/agency/blogs/digitalmarketing_zptb4k.png",
    },
    {
      id: 5,
      title: "Cloud Computing Solutions",
      excerpt:
        "Discover how cloud technology can optimize your business operations.",
      category: "Technology",
      author: "James Park",
      date: "Dec 1, 2024",
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767116899/agency/blogs/cloudcomputing_ad5zzc.png",
    },
    {
      id: 6,
      title: "Content Strategy for Growth",
      excerpt:
        "Create compelling content that drives engagement and conversions.",
      category: "Marketing",
      author: "Lisa Anderson",
      date: "Nov 28, 2024",
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767117346/agency/blogs/contentstrategy_iyb6ps.png",
    },
    {
      id: 7,
      title: "Pharmacy digital solution",
      excerpt:
        "Create compelling content that drives engagement and conversions.",
      category: "Marketing",
      author: "Lisa Anderson",
      date: "Nov 28, 2024",
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767117657/agency/blogs/pharmacy_kvi2pz.jpg",
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
    <motion.section
      id="blogs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-10 relative"
    >
      <div className="xl:w-6xl mx-auto">
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
            <div className="">
              <input
                name="search"
                type="search"
                placeholder="Search your blog ..."
                className="block w-full py-2 bg-gray-50 px-2"
              />
            </div>
            {visibleBlogs.map((blog, i) => (
              <Link
                to={`/blogdetails/${i}`}
                key={i}
                className="my-5 cursor-pointer block group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-80 rounded-lg">
                  <img
                    src={blog.image}
                    alt={blog.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <Paragraph className="mt-3 font-medium text-[#082032]">
                  {blog.category}
                </Paragraph>
                <Paragraph className="font-medium text-[#082032] text-2xl mt-2">
                  {blog.title}
                </Paragraph>
                <Paragraph className="font-medium text-[#082032]  mt-2">
                  By {blog.author}
                </Paragraph>
              </Link>
            ))}

            <div className="flex justify-center mt-20">
              <button
                onClick={handleLoadMoreBlogs}
                className="cursor-pointer px-4 py-2 rounded-full bg-blue-400 text-white font-medium shadow-md"
              >
                More Blogs
              </button>
            </div>
          </main>
        </div>
      </div>
    </motion.section>
  );
}
