import { useState, useEffect } from "react";
import Paragraph from "./Paragraph";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useSearch } from "../context/SearchContext";
import { IoSearchOutline } from "react-icons/io5";
// Blogs Component
//
export default function Blogs() {
  // How many blogs to show at first
  const [visibleCount, setVisibleCount] = useState(3);
  // State for selected category (null means "All")
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Local state for input value
  const [inputValue, setInputValue] = useState("");
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
      className="xl:py-10 relative lg:py-10 md:py-10 sm:py-10"
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:mx-auto md:px-8 sm:px-8 sm:mx-auto">
        <div className="xl:grid xl:grid-cols-2 xl:gap-12 lg:grid lg:grid-cols-2 lg:gap-x-10 md:gap-10 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
          {/* Left sticky column */}
          <aside className="md:col-span-1 xl:border-r 2xl:border-r lg:border-r  border-[#F5F5F7] md:border-r sm:border-r">
            <div className="xl:sticky xl:top-16 lg:sticky lg:top-16 md:top-16 md:sticky sm:top-16 sm:sticky">
              <h2 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-semibold font-primary">
                Read Our <span className="text-[#0076DF]">Blogs</span>
              </h2>
              <Paragraph className="font-primary tracking-wide w-full">
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
            <div className="w-full flex items-center rounded-full 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full justify-between h-9 border overflow-hidden focus:outline focus:outline-[#0076DF] transition-all duration-200">
              <motion.input
                title="Search Blogs"
                layoutId="blog-search"
                name="search"
                type="search"
                placeholder="Search blog ..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="font-primary tracking-wide w-full h-full px-4 rounded-[0,0,100%,100%] outline-none focus:outline-none border-none focus:placeholder:text-[#0076DF] transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setSearchQuery(inputValue)}
                className="inline-block w-15 cursor-pointer h-full bg-[#EEEEEE] border-none outline-none rounded-[0,100%,100%,0] hover:bg-[#eeeeeeb2]"
                aria-label="Search Blogs"
              >
                <IoSearchOutline className="text-2xl mx-auto" />
              </button>
            </div>

            <div className="xl:mt-3 xl:flex xl:flex-wrap xl:gap-2 lg:mt-3 lg:flex lg:flex-wrap lg:gap-2 md:mt-3 md:flex md:flex-wrap md:gap-2 sm:mt-3 sm:flex sm:flex-wrap sm:gap-2">
              {categories.map((category, i) => (
                <button
                  title={category}
                  key={i}
                  onClick={() => handleCategorySelect(category)}
                  className={`px-3 inline-block rounded-xl font-medium cursor-pointer font-primary tracking-wide transition-all duration-200 ${
                    selectedCategory === category ||
                    (category === "All" && !selectedCategory)
                      ? "text-[#0076DF] shadow"
                      : "shadow"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {visibleBlogs.map((blog, i) => (
              <Link
                to={`/blogdetails/${blog.id}`} 
                key={i}
                className="xl:my-4 cursor-pointer block group rounded-xl overflow-hidden shadow my-2"
              >
              
                <div className="relative overflow-hidden h-80">
                  <img
                    src={blog.image}
                    alt={blog.title} // Better alt text
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <Paragraph className="tracking-wide font-primary">
                    {blog.category}
                  </Paragraph>
                  <Paragraph className="tracking-wide font-primary font-medium">
                    {blog.title}
                  </Paragraph>
                  <Paragraph className="font-secondary tracking-wide text-[#0076DF]">
                    By {blog.author}
                  </Paragraph>
                </div>
              </Link>
            ))}

            {/* Only show "More Blogs" if there are more to load */}
            {visibleCount < filteredBlogs.length && (
              <div className="flex justify-center xl:mt-10 lg:mt-8">
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
