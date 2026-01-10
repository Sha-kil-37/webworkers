import { useState, useEffect } from "react";
import Paragraph from "./Paragraph";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useSearch } from "../context/SearchContext";
import { IoSearchOutline } from "react-icons/io5";
// Blogs Component
//
export default function Blogs() {
  const [showSearch, setShowSearch] = useState(false);

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
  //
  useEffect(() => {
    const onScroll = () => {
      const blogsElement = document.getElementById("blogs");
      //
      if (blogsElement) {
        const rect = blogsElement.getBoundingClientRect();
        // Show search only when scrolled 1px into the blog section
        setShowSearch(rect.top < -1 && rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
  console.log(showSearch);

  // Render component
  return (
    <motion.section
      id="blogs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="xl:py-10 relative lg:py-10 md:py-10 sm:py-10 py-5"
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:mx-auto md:px-8 sm:px-8 sm:mx-auto px-4">
        <div className="xl:grid xl:grid-cols-2 xl:gap-12 lg:grid lg:grid-cols-2 lg:gap-x-10 md:gap-10 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-x-6">
          {/* Left sticky column */}
          <aside className="md:col-span-1 xl:border-r 2xl:border-r lg:border-r  border-[#F5F5F7] md:border-r sm:border-r">
            <div className="2xl:sticky 2xl:top-18 xl:sticky xl:top-18 lg:sticky lg:top-18 md:top-18 md:sticky sm:top-18 sm:sticky">
              <h2 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl font-semibold font-primary 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left text-center tracking-wide">
                Read Our <span className="text-[#0076DF]">Blogs</span>
              </h2>
              <Paragraph className="font-primary w-full mt-2 2xl:text-left xl:text-left lg:left-left md:text-left sm:text-left text-center">
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
          <main className="mt-2">
            {showSearch ? null : (
              <div className="w-full mx-auto 2xl:flex xl:flex lg:flex md:flex sm:flex items-center rounded-full 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full justify-between 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-8 h-7 border overflow-hidden focus:outline focus:outline-[#0076DF] transition-all duration-200 hidden">
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
            )}

            <div className="2xl:flex 2xl:gap-2 2xl:flex-wrap xl:flex xl:flex-wrap xl:gap-2 lg:flex lg:flex-wrap lg:gap-2 md:flex md:flex-wrap md:gap-2 sm:flex sm:flex-wrap sm:gap-2 mt-3 flex flex-wrap justify-center gap-1">
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
              <div
                key={i}
                className="xl:my-4 2xl:my-4 lg:my-3 md:my-3 sm:my-2 cursor-pointer block group rounded-xl overflow-hidden shadow mt-3"
              >
                <Link to={`/blogdetails/${blog.id}`}>
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={blog.image}
                      alt={blog.title} // Better alt text
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-200"
                    />
                  </div>
                  <div className="p-4">
                    <Paragraph className="font-primary">
                      {blog.category}
                    </Paragraph>
                    <Paragraph className="tracking-wide font-primary font-medium">
                      {blog.title}
                    </Paragraph>
                    <Paragraph className="font-secondary text-[#0076DF]">
                      By {blog.author}
                    </Paragraph>
                  </div>
                </Link>
              </div>
            ))}

            {/* Only show "More Blogs" if there are more to load */}
            {visibleCount < filteredBlogs.length && (
              <div className="flex justify-center 2xl:mt-10 xl:mt-10 lg:mt-8 md:mt-8 sm:mt-6 mt-5">
                <button
                  onClick={handleLoadMoreBlogs}
                  className="cursor-pointer 2xl:px-4 xl:px-3 lg:px-3 md:px-3 sm:px-2 2xl:py-1 xl:py-1 lg:py-1 md:py-1 sm:py-1 text-white rounded-full bg-[#0076DF] font-primary px-2"
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
