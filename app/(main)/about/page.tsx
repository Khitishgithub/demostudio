"use client";

import {
  Camera,
  Heart,
  Sparkles,
  ArrowRight,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Star,
  Trophy,
} from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description:
        "We pour our hearts into every frame, treating each wedding as if it were our own. Your joy becomes our inspiration.",
      gradient: "from-pink-600 to-red-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust",
      description:
        "Building lasting relationships through reliability, transparency, and delivering on our promises every single time.",
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Creativity",
      description:
        "Pushing boundaries with innovative techniques and unique perspectives to create timeless, artistic masterpieces.",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excellence",
      description:
        "Uncompromising quality in every aspect - from equipment to editing, we strive for perfection in all we do.",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  const milestones = [
    {
      year: "2014",
      title: "The Beginning",
      description:
        "Started our journey with a passion for capturing love stories",
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Grew our team and expanded services to include videography",
    },
    {
      year: "2018",
      title: "Recognition",
      description: "Won our first national award for wedding photography",
    },
    {
      year: "2020",
      title: "Innovation",
      description: "Introduced drone photography and 4K cinematic films",
    },
    {
      year: "2022",
      title: "Milestone",
      description: "Celebrated capturing our 500th wedding celebration",
    },
    {
      year: "2024",
      title: "Excellence",
      description:
        "Became one of India's top-rated wedding photography studios",
    },
  ];

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
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300">About Us</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              <span className="text-white">Crafting Timeless</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Memories Since 2014
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed animate-slide-up delay-200">
              We are a team of passionate storytellers dedicated to capturing
              the essence of your special moments through the art of photography
              and videography. Every frame we create is a testament to our
              commitment to excellence and creativity.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-shimmer"></div>
      </section>

  

      {/* OUR STORY SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
                <Heart className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-purple-700 font-medium">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Where{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Passion
                </span>{" "}
                Meets Purpose
              </h2>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our journey began in 2014 with a simple camera and an
                  extraordinary dream – to freeze the most beautiful moments of
                  people&apos;s lives in frames that would last forever. What
                  started as a one-person venture has blossomed into a team of
                  dedicated artists.
                </p>
                <p>
                  Over the years, we&apos;ve had the privilege of being part of
                  over 500 love stories, each unique and special in its own way.
                  From intimate ceremonies to grand celebrations, we&apos;ve
                  captured emotions that words often fail to express.
                </p>
                <p>
                  Today, we stand proud as one of India&apos;s most trusted
                  names in wedding photography and videography, not just because
                  of our technical expertise, but because we genuinely care
                  about preserving your precious memories with the artistry they
                  deserve.
                </p>
              </div>

              <div className="mt-8">
                <button className="cursor-pointer group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center gap-2">
                    View Our Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Placeholder for image - replace with actual image */}
                <div className="aspect-[4/5] bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 flex items-center justify-center">
                  <Camera className="w-24 h-24 text-white/30" />
                </div>

                {/* Floating card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Award Winning</p>
                      <p className="font-bold text-gray-900">
                        Photography Studio
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-pink-400/20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-400/20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
              <Target className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">
                Our Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Drives
              </span>{" "}
              Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that guide every decision we make and every frame
              we capture
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-purple-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY/TIMELINE SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
              <Zap className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">
                Our Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A Decade of{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Milestones that shaped our journey to becoming industry leaders
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line for mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-purple-200 md:hidden"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex gap-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Year badge */}
                  <div className="flex-shrink-0 relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg z-10 relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                      <span className="relative text-sm">{milestone.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
      `}</style>
    </>
  );
};

export default AboutPage;
