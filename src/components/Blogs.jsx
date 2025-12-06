import BlogSlider from "./BlogSlider";
import { useState } from "react";
import Button from "./Button";
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
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-4xl">Stay Ahead with Our Insights</h2>
        <Paragraph className="max-w-xl">
          Discover the latest trends, tips, and strategies in digital innovation
          through our expert-written blogs. From Web Development and App Design
          to Social Media Marketing, SEO, and AI Integration, our blogs are
          designed to keep you informed, inspired, and empowered to grow your
          business in the digital world. Stay updated, explore new ideas, and
          unlock actionable insights with every read.
        </Paragraph>
        <BlogSlider blogs={blogs} />
        {/* Blog Grid */}
        <h2 className="font-bold text-4xl mt-10">Our Insights & Stories</h2>
        <Paragraph className="">
          Welcome to our blog—your destination for expert insights, practical
          strategies, and the latest trends in the digital world. Here, we share
          knowledge that empowers businesses, creators, and innovators to stay
          ahead in a fast-evolving digital landscape. Whether you’re exploring
          modern Web Development practices, UI/UX design principles, App
          Development insights, or the newest techniques in Digital Marketing
          and SEO, our articles are designed to guide you with clarity and
          actionable value. We also dive into topics like Social Media
          Marketing, Business Consultation, Custom Software Development, and
          Artificial Intelligence Integration to help you understand how these
          solutions can transform your brand. Our goal is simple: to educate,
          inspire, and elevate your digital journey. Dive into our blogs and
          discover fresh ideas, expert opinions, and strategies that help you
          make smarter decisions and build a stronger digital presence.
        </Paragraph>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {visibleBlogs.map((blog, i) => (
            <div
              key={i}
              className="group transition-all duration-300 group cursor-pointer"
            >
              <div className="overflow-hidden w-full h-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-[var(--primary-color)]  duration-300">
                <h2 className="text-[var(--black-color)]  font-semibold">
                  {blog.title}
                </h2>
                <Paragraph className="text-[var(--black-color)]">
                  {blog.date}
                </Paragraph>
                <Link
                  to={`/blogdetails/${blog.id}`}
                  className="text-[var(--secondary-color)] px-3 py-1 bg-[var(--white-color)] rounded-xl inline-block mt-3"
                >
                  click for view
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            onClick={handleLoadMoreBlogs}
            className="cursor-pointer px-4 py-2 bg-[var(--secondary-color)] text-[var(--white-color)] rounded-xl font-medium hover:bg-[var(--primary-color)] transition-colors duration-300 hover:text-[var(--secondary-color)] shadow-sm hover:shadow-md mt-5"
          >
            More Blogs
          </Button>
        </div>
      </div>
    </section>
  );
}
