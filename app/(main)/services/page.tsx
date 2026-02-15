"use client";

import React, { useState } from "react";
import { 
  Camera, 
  Video, 
  Image, 
  Film, 
  Users, 
  Calendar, 
  Award, 
  Heart,
  Sparkles,
  Check,
  ArrowRight,
  Play,
  Zap,
  Star,
  Gift
} from "lucide-react";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Wedding Videography",
      description: "Cinematic wedding films that capture every precious moment of your special day",
      features: [
        "Full day coverage (12+ hours)",
        "4K Ultra HD quality",
        "Professional drone shots",
        "Highlight reel (3-5 min)",
        "Full ceremony & reception",
        "Same-day edit preview"
      ],
      gradient: "from-purple-600 to-pink-600",
      price: "Starting at ₹45,000",
      popular: true
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Wedding Photography",
      description: "Stunning photographs that tell your love story frame by frame",
      features: [
        "Pre-wedding photoshoot",
        "Traditional & candid shots",
        "500+ edited photos",
        "Premium photo album",
        "Digital copies & prints",
        "Couple portrait session"
      ],
      gradient: "from-pink-600 to-purple-600",
      price: "Starting at ₹35,000",
      popular: true
    },
    {
      icon: <Film className="h-8 w-8" />,
      title: "Reception Coverage",
      description: "Complete coverage of your reception celebration with all the fun moments",
      features: [
        "6-8 hours coverage",
        "Multi-camera setup",
        "Guest interactions",
        "Dance & entertainment",
        "Speeches & toasts",
        "Edited highlight video"
      ],
      gradient: "from-purple-600 to-blue-600",
      price: "Starting at ₹25,000",
      popular: false
    },
    {
      // eslint-disable-next-line jsx-a11y/alt-text
      icon: <Image className="h-8 w-8" />,
      title: "Pre-Wedding Shoot",
      description: "Romantic pre-wedding photography sessions at stunning locations",
      features: [
        "Location scouting",
        "2-3 outfit changes",
        "100+ edited photos",
        "Concept development",
        "Props & styling assistance",
        "Premium photobook included"
      ],
      gradient: "from-pink-600 to-red-600",
      price: "Starting at ₹20,000",
      popular: false
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Engagement Ceremony",
      description: "Beautiful coverage of your engagement and ring ceremony moments",
      features: [
        "4-6 hours coverage",
        "Candid & traditional photos",
        "Family portraits",
        "Ring exchange moments",
        "200+ edited photos",
        "Highlight video (2-3 min)"
      ],
      gradient: "from-purple-600 to-indigo-600",
      price: "Starting at ₹18,000",
      popular: false
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Complete Package",
      description: "All-inclusive package covering every event from engagement to reception",
      features: [
        "All events covered",
        "Pre-wedding shoot",
        "Wedding day (full coverage)",
        "Reception coverage",
        "1000+ photos & videos",
        "Premium albums & frames",
        "Drone coverage",
        "Same-day edits"
      ],
      gradient: "from-yellow-500 to-pink-600",
      price: "Starting at ₹1,20,000",
      popular: true
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Award Winning",
      description: "Recognized for excellence in wedding photography & videography",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced Team",
      description: "Professional photographers with 10+ years experience",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Latest Equipment",
      description: "4K cameras, professional drones, and cinema-grade lenses",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer Satisfaction",
      description: "500+ happy couples with 5-star reviews",
      color: "from-pink-400 to-red-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your vision, preferences, and requirements"
    },
    {
      step: "02",
      title: "Planning",
      description: "Create a detailed timeline and shot list for your event"
    },
    {
      step: "03",
      title: "Capture",
      description: "Professional coverage of your special day"
    },
    {
      step: "04",
      title: "Editing",
      description: "Careful post-production to create stunning final products"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Receive your photos, videos, and albums"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 py-24  text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-purple-600 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-pink-600 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Our Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Capture Every
            </span>
            <br />
            <span className="text-white">Magical Moment</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed animate-slide-up delay-200">
            Professional photography and videography services to preserve your most cherished memories forever
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-10 animate-fade-in-up delay-300">
            <button className=" cursor-pointer group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                View Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className=" cursor-pointer group px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300">
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Showreel
              </span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-shimmer"></div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container mx-auto px-6 py-20 -mt-16 relative z-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className={`group rounded-2xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-lg transition-all duration-500 group-hover:scale-110`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
              <Star className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tailored packages to meet your unique needs and budget
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 ${
                  activeService === index ? 'border-purple-500' : 'border-transparent'
                } animate-fade-in-up cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 right-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold shadow-lg animate-bounce-slow">
                    ⭐ POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Package Price</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {service.price}
                  </p>
                </div>

                {/* CTA Button */}
                <button className={`cursor-pointer w-full py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group`}>
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
              <Calendar className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A seamless journey from consultation to delivery
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200"></div>

            <div className="grid gap-8 md:grid-cols-5">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="relative text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step Number */}
                  <div className="relative mb-6 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center text-xl font-bold shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  {/* CTA SECTION — MATCHES JOIN OUR TEAM EXACTLY */}
{/* CTA SECTION — MATCHES JOIN OUR TEAM EXACTLY */}
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
        <Heart className="h-4 w-4 text-pink-400" />
        <span className="text-sm text-pink-300 font-medium">
          Let&apos;s Create Magic Together
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
        Ready to Book Your{" "}
        <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Dream Photography?
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-lg mb-8 animate-slide-up delay-200">
        Contact us today for a free consultation and let&apos;s discuss how we can
        make your special day unforgettable.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
        <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          <span className="relative flex items-center gap-2">
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </span>
        </button>

        <button className="group px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 cursor-pointer">
          View Packages
        </button>
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

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
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

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
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
      `}</style>
    </>
  );
};

export default ServicesPage;