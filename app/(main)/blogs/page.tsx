"use client";

import React, { useState } from "react";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Heart,
  Camera,
  Image,
  BookOpen,
  TrendingUp,
  Tag,
  User,
  Eye,
  Share2,
} from "lucide-react";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Wedding Tips",
    "Photography",
    "Videography",
    "Real Weddings",
    "Inspiration",
    "Behind the Scenes",
  ];

  const featuredPost = {
    id: 1,
    title: "10 Essential Tips for Planning Your Dream Wedding Photography",
    excerpt:
      "From choosing the perfect time for your shoot to coordinating with your photographer, discover the secrets to getting stunning wedding photos that you'll cherish forever.",
    image: "featured",
    category: "Wedding Tips",
    author: "Priya Sharma",
    date: "Feb 5, 2026",
    readTime: "8 min read",
    views: "2.3k",
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: "The Magic of Golden Hour: Why Timing Matters in Wedding Photography",
      excerpt:
        "Discover how the golden hour can transform your wedding photos into breathtaking masterpieces with warm, romantic lighting.",
      image: "golden-hour",
      category: "Photography",
      author: "Rahul Mehta",
      date: "Feb 3, 2026",
      readTime: "5 min read",
      views: "1.8k",
    },
    {
      id: 3,
      title: "Real Wedding: Ananya & Rohan's Enchanting Beach Ceremony",
      excerpt:
        "Step into the magical world of this couple's stunning beach wedding, complete with sunset vows and ocean breezes.",
      image: "beach-wedding",
      category: "Real Weddings",
      author: "Sneha Kapoor",
      date: "Feb 1, 2026",
      readTime: "6 min read",
      views: "3.1k",
    },
    {
      id: 4,
      title: "Behind the Lens: Our Favorite Pre-Wedding Shoot Locations in India",
      excerpt:
        "Explore the most picturesque locations across India that serve as perfect backdrops for romantic pre-wedding photography.",
      image: "locations",
      category: "Inspiration",
      author: "Vikram Singh",
      date: "Jan 28, 2026",
      readTime: "7 min read",
      views: "2.7k",
    },
    {
      id: 5,
      title: "Drone Wedding Photography: Elevate Your Big Day",
      excerpt:
        "Learn how aerial drone footage can add a cinematic dimension to your wedding memories with stunning bird's-eye perspectives.",
      image: "drone",
      category: "Videography",
      author: "Arjun Patel",
      date: "Jan 25, 2026",
      readTime: "6 min read",
      views: "1.5k",
    },
    {
      id: 6,
      title: "How to Look Natural and Confident in Your Wedding Photos",
      excerpt:
        "Professional tips and tricks to help you feel comfortable in front of the camera and capture authentic, joyful moments.",
      image: "posing-tips",
      category: "Wedding Tips",
      author: "Priya Sharma",
      date: "Jan 22, 2026",
      readTime: "5 min read",
      views: "2.9k",
    },
    {
      id: 7,
      title: "The Art of Candid Wedding Photography: Capturing Raw Emotions",
      excerpt:
        "Understand the beauty of candid photography and how it preserves the genuine emotions and spontaneous moments of your special day.",
      image: "candid",
      category: "Photography",
      author: "Rahul Mehta",
      date: "Jan 20, 2026",
      readTime: "6 min read",
      views: "2.2k",
    },
    {
      id: 8,
      title: "Wedding Album Design Trends for 2026",
      excerpt:
        "Explore the latest trends in wedding album designs, from minimalist layouts to luxurious coffee table books.",
      image: "album-trends",
      category: "Inspiration",
      author: "Sneha Kapoor",
      date: "Jan 18, 2026",
      readTime: "4 min read",
      views: "1.9k",
    },
    {
      id: 9,
      title: "Behind the Scenes: A Day in the Life of a Wedding Photographer",
      excerpt:
        "Get an insider's look at what it takes to capture every magical moment on a wedding day, from dawn to dusk.",
      image: "bts",
      category: "Behind the Scenes",
      author: "Vikram Singh",
      date: "Jan 15, 2026",
      readTime: "7 min read",
      views: "3.5k",
    },
  ];

  const trendingTopics = [
    { name: "Pre-Wedding Shoots", count: 24 },
    { name: "Destination Weddings", count: 18 },
    { name: "Traditional Ceremonies", count: 16 },
    { name: "Photography Tips", count: 32 },
    { name: "Video Editing", count: 12 },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24  text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-purple-600 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-pink-600 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6 animate-fade-in">
              <BookOpen className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300">Our Blog</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              <span className="text-white">Stories, Tips &</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Wedding Inspiration
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 animate-slide-up delay-200">
              Explore expert insights, real wedding stories, and creative ideas
              to make your special day unforgettable
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto animate-fade-in-up delay-300">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, tips, inspiration..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-shimmer"></div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-purple-50/30">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-8">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-medium">
              Featured Article
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-fade-in-up">
            {/* Image */}
            <div className="relative h-[400px] md:h-full overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-purple-600 via-pink-500 to-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <Camera className="w-24 h-24 text-white/30" />
              </div>
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white text-sm font-bold shadow-lg">
                ⭐ FEATURED
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
                  {featuredPost.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {featuredPost.title}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {featuredPost.author}
                    </p>
                    <p className="text-xs text-gray-500">Wedding Photographer</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">{featuredPost.views}</span>
                </div>
              </div>

              <button className="cursor-pointer group/btn px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  Read Full Article
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Latest{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Articles
                  </span>
                </h2>
                <p className="text-gray-500">
                  {filteredPosts.length} articles found
                </p>
              </div>

              <div className="grid gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="grid md:grid-cols-5 gap-6">
                      {/* Image */}
                      <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                          <Image className="w-16 h-16 text-white/30" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-3 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs">
                              {post.author.charAt(0)}
                            </div>
                            <span className="text-sm text-gray-700 font-medium">
                              {post.author}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {post.views}
                            </span>
                          </div>
                        </div>

                        <button className="cursor-pointer mt-4 text-purple-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="cursor-pointer px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Trending Topics */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Trending Topics
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <button
                        key={index}
                        className="cursor-pointer w-full flex items-center justify-between p-3 rounded-xl bg-white hover:bg-purple-100 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-2">
                          <Tag className="h-4 w-4 text-purple-600" />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600">
                            {topic.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {topic.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-pink-500/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <Heart className="h-8 w-8 text-pink-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">
                      Subscribe to Our Newsletter
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Get the latest wedding tips and inspiration delivered to
                      your inbox
                    </p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300 mb-3"
                    />
                    <button className="cursor-pointer w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      Subscribe Now
                    </button>
                  </div>
                </div>

                {/* Social Share */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {["Instagram", "Facebook", "Pinterest"].map(
                      (platform, index) => (
                        <button
                          key={index}
                          className="cursor-pointer flex-1 px-4 py-3 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-600 hover:to-pink-600 text-purple-700 hover:text-white font-medium text-sm transition-all duration-300 hover:scale-105"
                        >
                          <Share2 className="h-4 w-4 mx-auto" />
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
          animation-fill-mode: both;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default BlogPage;