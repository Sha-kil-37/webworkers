import { useState, useEffect } from "react";
import Paragraph from "./Paragraph";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useSearch } from "../context/SearchContext";
//
export default function Blogs() {
  // How many blogs to show at first
  const [visibleCount, setVisibleCount] = useState(3);
  // State for selected category (null means "All")
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { searchQuery, setSearchQuery } = useSearch();

  // Reset visibleCount when searchQuery changes
  useEffect(() => {
    setVisibleCount(3);
  }, [searchQuery]);

  // Sample blog data (unchanged)
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

  // Get unique categories and add "All" as the first option
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  // Filter blogs based on selected category and search query
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      !selectedCategory || blog.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Slice the filtered array to show only visible items
  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  // Handle category selection: set category and reset visible count
  const handleCategorySelect = (category) => {
    setSelectedCategory(category === "All" ? null : category);
    setVisibleCount(3); // Reset pagination when filtering
  };

  // Handle load more blogs
  const handleLoadMoreBlogs = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more each click
  };

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
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left sticky column */}
          <aside className="md:col-span-1 xl:border-r border-[#F5F5F7]">
            <div className="sticky xl:top-16">
              <h2 className="tracking-wide xl:text-3xl font-bold">
                Read Our <span className="text-[#0076DF]">Blogs</span>
              </h2>
              <Paragraph className="xl:w-lg mt-2 font-medium tracking-wide font-primary">
                Our blog is a knowledge hub where technology, creativity, and
                strategy come together. We share practical insights on web
                development, digital marketing, SEO, social media marketing,
                UI/UX design, app development, and custom software solutions.
                From business consultation to artificial intelligence
                integration, our articles are designed to help brands grow
                smarter, build faster, and stay ahead in the digital world.
              </Paragraph>
            </div>
          </aside>

          {/* Right scrollable column */}
          <main className="">
            <div className="">
              <motion.input
                title="Search Blogs"
                layoutId="blog-search"
                name="search"
                type="search"
                placeholder="Search blog ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full py-2 px-4 bg-[#F5F5F7] font-medium"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category, i) => (
                <button
                  title={category}
                  key={i}
                  onClick={() => handleCategorySelect(category)}
                  className={`px-3  inline-block rounded-xl font-medium cursor-pointer font-primary tracking-wide transition-all duration-200 ${
                    selectedCategory === category ||
                    (category === "All" && !selectedCategory)
                      ? "bg-[#0076DF]"
                      : "bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {visibleBlogs.map((blog, i) => (
              <Link
                to={`/blogdetails/${blog.id}`} // Use blog.id instead of index for better routing
                key={i}
                className="my-4 cursor-pointer block group rounded-xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={blog.image}
                    alt={blog.title} // Better alt text
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="bg-[#F5F5F7] p-6">
                  <Paragraph className="font-medium tracking-wide font-primary">{blog.category}</Paragraph>
                  <Paragraph className="tracking-wide font-primary font-medium text-2xl">
                    {blog.title}
                  </Paragraph>
                  <Paragraph className="font-medium font-primary tracking-wide text-[#0076DF]">
                    By {blog.author}
                  </Paragraph>
                </div>
              </Link>
            ))}

            {/* Only show "More Blogs" if there are more to load */}
            {visibleCount < filteredBlogs.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleLoadMoreBlogs}
                  className="cursor-pointer px-4 py-2 rounded-full bg-[#0076DF] font-medium font-primary tracking-wide"
                >
                  More blogs
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </motion.section>
  );
}
