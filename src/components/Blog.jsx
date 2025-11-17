import React, { useState } from "react";
import { FaArrowRight, FaClock, FaUser, FaTag } from "react-icons/fa";
import Paragraph from "./Paragraph";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt:
        "Explore the latest trends and technologies shaping the web development landscape.",
      category: "Technology",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "UI/UX Design Principles That Work",
      excerpt:
        "Master the fundamentals of creating user-friendly and beautiful interfaces.",
      category: "Design",
      author: "Mike Chen",
      date: "Dec 10, 2024",
      readTime: "7 min read",
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
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1516534775068-bb57ad1a928f?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Digital Marketing Trends 2024",
      excerpt:
        "Stay ahead of the competition with these emerging marketing strategies.",
      category: "Marketing",
      author: "Emily Watson",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab6c3c537?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "Cloud Computing Solutions",
      excerpt:
        "Discover how cloud technology can optimize your business operations.",
      category: "Technology",
      author: "James Park",
      date: "Dec 1, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Content Strategy for Growth",
      excerpt:
        "Create compelling content that drives engagement and conversions.",
      category: "Marketing",
      author: "Lisa Anderson",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      featured: false,
    },
  ];

  const categories = ["All", "Technology", "Design", "Marketing"];

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Insights &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <Paragraph>
            Discover the latest insights, tips, and industry trends to help you
            stay ahead in the digital world.
          </Paragraph>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16 group cursor-pointer">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Featured Image */}
              <div className="relative h-96 md:h-full overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Featured Content */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 md:gap-6 mb-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-blue-500" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTag className="text-blue-500" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Read More
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              className="group h-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-transparent mb-4 group-hover:from-blue-500 transition-colors duration-300"></div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-blue-500" />
                    <span>{post.readTime}</span>
                  </div>
                  <span>{post.date}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-semibold">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    {post.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {regularPosts.length === 0 && !featuredPost && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts found in this category.
            </p>
          </div>
        )}

        {/* Load More Button */}
        <div className="mt-16 flex justify-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2">
            Load More Articles
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
