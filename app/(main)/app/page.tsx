"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Camera,
  Video,
  Heart,
  ArrowRight,
  Star,
  Award,
  Users,
  Sparkles,
  Check,
  Quote,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Image as ImageIcon,
  Film,
} from "lucide-react";
import HeroCarousel from "@/app/Components/Herocarousel";

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const testimonials = [
    {
      name: "Priya & Rahul",
      event: "Wedding - December 2023",
      text: "Absolutely magical! They captured every emotion, every tear of joy, every smile. Our wedding film feels like a fairy tale.",
      rating: 5,
      image: "👰🏻‍♀️",
    },
    {
      name: "Anjali & Rohan",
      event: "Pre-Wedding - Mumbai",
      text: "The creativity and passion they brought to our pre-wedding shoot was beyond our expectations. Every frame is a masterpiece!",
      rating: 5,
      image: "💑",
    },
    {
      name: "Neha & Arjun",
      event: "Wedding - March 2024",
      text: "Professional, friendly, and incredibly talented. They made us feel comfortable and the results are stunning!",
      rating: 5,
      image: "👫",
    },
  ];

  const portfolioItems = [
    {
      title: "Elegant Ceremonies",
      count: "150+",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Pre-Wedding Stories",
      count: "200+",
      gradient: "from-pink-600 to-red-600",
    },
    {
      title: "Reception Moments",
      count: "180+",
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      title: "Candid Captures",
      count: "500+",
      gradient: "from-yellow-500 to-pink-600",
    },
  ];

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "4K Cinematic Films",
      description: "Ultra HD quality that brings your memories to life",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Professional Photography",
      description: "Artistic shots with premium equipment",
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Drone Coverage",
      description: "Stunning aerial perspectives of your venue",
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Same-Day Edits",
      description: "Watch your highlights at the reception",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <>
      <HeroCarousel />
      <div className="overflow-hidden bg-white">
        {/* Custom Cursor Effect */}
        <div
          className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.06), transparent 40%)`,
          }}
        />

        {/* FEATURES SECTION */}
        <section className="py-32 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700 font-semibold">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Excellence in Every{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Frame
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                State-of-the-art technology meets artistic vision to create
                unforgettable memories
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl bg-white border border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-purple-600/5 to-pink-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">
                      {feature.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
                <Heart className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700 font-semibold">
                  Testimonials
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Love Stories from{" "}
                <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Couples
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl p-12 shadow-2xl">
                <Quote className="absolute top-8 left-8 w-12 h-12 text-purple-300" />

                <div className="text-center mb-8">
                  <div className="text-6xl mb-6">
                    {testimonials[currentTestimonial].image}
                  </div>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-yellow-400 text-yellow-400"
                        />
                      ),
                    )}
                  </div>
                </div>

                <p className="text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </p>

                <div className="text-center">
                  <div className="font-bold text-lg text-slate-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].event}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-purple-100 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 text-purple-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-purple-100 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 text-purple-600" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTestimonial
                          ? "w-8 bg-purple-600"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative py-24 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-600 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-pink-600 blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
                <Calendar className="h-4 w-4 text-pink-400" />
                <span className="text-sm text-pink-300 font-medium">
                  Limited Slots Available
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
                Let&apos;s Create{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Magic Together
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-8 animate-slide-up delay-200">
                Your wedding day deserves to be remembered in the most beautiful
                way possible. Book your date today and let&apos;s start crafting
                your timeless story.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center gap-2">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="group px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  View Pricing
                </Link>
              </div>

              {/* Trust badges — adapted to same visual language */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
                {[
                  {
                    icon: <Check className="w-6 h-6" />,
                    text: "100% Satisfaction",
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    text: "Award Winning",
                  },
                  { icon: <Users className="w-6 h-6" />, text: "Expert Team" },
                  {
                    icon: <Heart className="w-6 h-6" />,
                    text: "500+ Happy Clients",
                  },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-center mb-3 text-pink-400">
                      {badge.icon}
                    </div>
                    <div className="text-sm text-gray-300 font-medium text-center">
                      {badge.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STYLES */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(30px, -30px);
            }
          }

          @keyframes float-delayed {
            0%,
            100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(-30px, 30px);
            }
          }

          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.2;
            }
          }

          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
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

          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes scroll {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(10px);
            }
          }

          .animate-float {
            animation: float 8s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }

          .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
          }

          .animate-gradient-shift {
            background-size: 200% 200%;
            animation: gradient-shift 3s ease infinite;
          }

          .animate-scroll {
            animation: scroll 1.5s ease-in-out infinite;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
          }

          .animation-delay-600 {
            animation-delay: 0.6s;
          }

          .bg-noise {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E");
          }
        `}</style>
      </div>
    </>
  );
}
