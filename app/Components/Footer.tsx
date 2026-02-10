// import Image from "next/image";
"use client"
import { Instagram, Linkedin, MapPin, Mail, Phone, Sparkles, Camera } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-purple-600 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-pink-600 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 mb-12">
          {/* LOGO & DESCRIPTION */}
          <div className="flex flex-col gap-4 group">
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              {/* Replace with your actual logo */}
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                  <Camera className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-pink-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  MemoryLens
                </h1>
                <p className="text-xs text-gray-500">
                  Photography & Videography
                </p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Creating stunning visual stories that captivate and inspire. Your vision, our expertise.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <Link 
                href="mailto:contact@yourcompany.com"
                className="group/social relative"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 border border-gray-700 transition-all duration-300 hover:border-purple-500 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 hover:scale-110">
                  <Mail className="h-5 w-5 text-gray-400 transition-colors group-hover/social:text-purple-400" />
                </div>
              </Link>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/social relative"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 border border-gray-700 transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-br hover:from-pink-600/20 hover:to-purple-600/20 hover:scale-110">
                  <Instagram className="h-5 w-5 text-gray-400 transition-colors group-hover/social:text-pink-400" />
                </div>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/social relative"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-purple-600/20 hover:scale-110">
                  <Linkedin className="h-5 w-5 text-gray-400 transition-colors group-hover/social:text-blue-400" />
                </div>
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-5">
            <h2 className="relative inline-block text-sm font-bold uppercase text-white group">
              Quick Links
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </h2>
            <ul className="space-y-3 text-sm font-medium mt-5">
              {[
                { name: "Home", href: "/app" },
                { name: "About", href: "/about" },
                { name: "Team", href: "/teams" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href} className="group/link">
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:translate-x-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-600 transition-all duration-300 group-hover/link:bg-gradient-to-r group-hover/link:from-purple-500 group-hover/link:to-pink-500 group-hover/link:w-6" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* POLICIES */}
          <div className="space-y-5">
            <h2 className="relative inline-block text-sm font-bold uppercase text-white group">
              Policies
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </h2>
            <ul className="space-y-3 text-sm font-medium mt-5">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-conditions" },
                { name: "Refund Policy", href: "/refund-policy" },
              ].map((link) => (
                <li key={link.href} className="group/link">
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:translate-x-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-600 transition-all duration-300 group-hover/link:bg-gradient-to-r group-hover/link:from-purple-500 group-hover/link:to-pink-500 group-hover/link:w-6" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-5">
            <h2 className="relative inline-block text-sm font-bold uppercase text-white group">
              Get In Touch
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </h2>
            <ul className="space-y-4 text-sm mt-4">
              <li className="group/contact flex gap-3 transition-all duration-300 hover:translate-x-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 transition-all duration-300 group-hover/contact:border-purple-500 group-hover/contact:shadow-lg group-hover/contact:shadow-purple-500/30">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <span className="leading-relaxed text-gray-400 group-hover/contact:text-gray-300">
                  123 Creative Street, Studio City, CA 90210
                </span>
              </li>
              <li className="group/contact flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 transition-all duration-300 group-hover/contact:border-purple-500 group-hover/contact:shadow-lg group-hover/contact:shadow-purple-500/30">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <a 
                  href="mailto:contact@videostudio.com" 
                  className="text-gray-400 transition-colors group-hover/contact:text-purple-400"
                >
                  contact@videostudio.com
                </a>
              </li>
              <li className="group/contact flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 transition-all duration-300 group-hover/contact:border-purple-500 group-hover/contact:shadow-lg group-hover/contact:shadow-purple-500/30">
                  <Phone className="h-5 w-5 text-purple-400" />
                </div>
                <a 
                  href="tel:+919000000000" 
                  className="text-gray-400 transition-colors group-hover/contact:text-purple-400"
                >
                  +91 90000 00000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"></div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()}{" "}
              <Link 
                href="/" 
                className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 hover:from-purple-300 hover:to-pink-300"
              >
                MemoryLens
              </Link>
              . All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Crafted with <span className="text-pink-500 animate-pulse">♥</span> for creators
            </p>
          </div>

          {/* Newsletter Signup (Optional) */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-gray-800/50 border border-gray-700 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-xs text-gray-400">Stay Creative</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-shimmer"></div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;