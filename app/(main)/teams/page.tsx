"use client";

import  { useState } from "react";
import {
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Award,
  Sparkles,
  Users,
  Heart,
  Camera,
 
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder & Lead Photographer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Award-winning photographer with 12+ years capturing love stories",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "rajesh@weddingfilms.com",
    },
    expertise: ["Wedding Photography", "Portrait", "Candid"],
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Senior Videographer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Cinematic storyteller creating emotional wedding films",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "priya@weddingfilms.com",
    },
    expertise: ["Cinematic Videos", "Drone Shots", "Editing"],
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Conceptualizing unique themes for pre-wedding shoots",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "amit@weddingfilms.com",
    },
    expertise: ["Creative Concepts", "Art Direction", "Styling"],
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Senior Photographer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Specialist in traditional ceremonies and family portraits",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "sneha@weddingfilms.com",
    },
    expertise: ["Traditional Photography", "Family Portraits", "Candid"],
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Drone Specialist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Capturing breathtaking aerial shots and cinematic angles",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "vikram@weddingfilms.com",
    },
    expertise: ["Drone Photography", "Aerial Videos", "4K Filming"],
  },
  {
    id: 6,
    name: "Meera Joshi",
    role: "Photo Editor & Retoucher",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Transforming raw captures into stunning visual masterpieces",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "meera@weddingfilms.com",
    },
    expertise: ["Photo Editing", "Color Grading", "Retouching"],
  },
];

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "15+",
    label: "Team Members",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "20+",
    label: "Awards Won",
    gradient: "from-pink-600 to-purple-600",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    value: "500+",
    label: "Happy Couples",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    icon: <Camera className="h-8 w-8" />,
    value: "5000+",
    label: "Events Captured",
    gradient: "from-blue-600 to-purple-600",
  },
];

const TeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24  text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-purple-600 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-pink-600 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6 animate-fade-in">
            <Camera className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Meet Our Creative Team</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Master Storytellers
            </span>
            <br />
            <span className="text-white">Behind Every Frame</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed animate-slide-up delay-200">
            We&apos;re a passionate team of photographers, videographers, and creative artists dedicated to capturing your most precious moments.
          </p>
        </div>

        {/* Animated gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-shimmer"></div>
      </section>

      {/* STATS SECTION */}
      <section className="container mx-auto px-6 py-20 -mt-16 relative z-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-center shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 border border-gray-700 hover:border-purple-500/50 animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${stat.gradient} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/50`}
              >
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {stat.value}
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM MEMBERS SECTION */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-purple-50/30"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 mb-4">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-purple-600 font-medium">
                Our Creative Artists
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dream Team
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Talented professionals working together to create magical wedding memories
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group relative animate-fade-in-up delay-${(index + 1) * 100}`}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-purple-500/50 hover:-translate-y-2">
                  {/* Card Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Social Links - Appear on Hover */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                      <a
                        href={member.social.linkedin}
                        className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.instagram}
                        className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full border border-purple-200 hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN TEAM CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-600 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-pink-600 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
              <Heart className="h-4 w-4 text-pink-400" />
              <span className="text-sm text-pink-300 font-medium">
                Join Our Creative Family
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Want to Join Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creative Team?
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 animate-slide-up delay-200">
              We&apos;re always looking for talented photographers and videographers who are passionate about capturing love stories. Join us and be part of creating unforgettable memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative">View Career Opportunities</span>
              </button>

              <button className="group px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 cursor-pointer">
                Our Work Culture
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

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
};

export default TeamPage;