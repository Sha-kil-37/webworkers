import { FaArrowRight, FaClock } from "react-icons/fa";
import BlogSlider from "./BlogSlider";
import { useState } from "react";
import Button from "./Button";
import Paragraph from "./Paragraph";
//
export default function Blog() {
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
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
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
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      featured: false,
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
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
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
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
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
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
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
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
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
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    },
  ];
  //
  // Slice array to show only visible items
  const visibleBlogs = blogs.slice(0, visibleCount);
  //
  const handleLoadMoreBlogs = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more each click
  };
  //
  function handleReadBlog(id) {
    console.log(id);
    // navigate(`/blogDetails/${id}`);
  }
  //
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-4xl">New Blogs</h2>
        <Paragraph className="max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          consequatur amet. Quis fugiat accusamus, dolor esse odit expedita
          dolorem soluta fuga rem eius qui alias. Neque ipsum recusandae illo
          totam.
        </Paragraph>

        <BlogSlider blogs={blogs} />

        {/* Blog Grid */}
        <h2 className="font-bold text-4xl mt-10">All Blogs</h2>
        <Paragraph className="max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          consequatur amet. Quis fugiat accusamus, dolor esse odit expedita
          dolorem soluta fuga rem eius qui alias. Neque ipsum recusandae illo
          totam.
        </Paragraph>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBlogs.map((blog, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer p-6 hover:bg-[#F5F7F8]"
            >
              <h2 className="font-bold">{blog.title}</h2>
              <p className="mt-2">{blog.excerpt}</p>
              <p className="mt-2">
                Write by : <span className="text-[#FF6363]">{blog.author}</span>
              </p>
              <Button
                onClick={(i) => handleReadBlog(i)}
                className="cursor-pointer px-3 py-1 bg rounded font-medium transition-all duration-300 bg-[#F5F7F8] mt-5"
              >
                Read Blog
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            onClick={handleLoadMoreBlogs}
            className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded font-medium hover:bg-blue-400 transition-all duration-200 mt-5"
          >
            More Blogs
          </Button>
        </div>
      </div>
    </section>
  );
}
