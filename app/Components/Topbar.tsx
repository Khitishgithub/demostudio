"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { MapPin, Phone, Clock, Camera } from "lucide-react";

const TopBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main TopBar */}
      <div
        className={`bg-white border-b border-gray-200 transition-all duration-300 sticky top-0 z-50 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              {/* Replace with your actual logo */}
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                  <Camera className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-pink-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="">
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  MemoryLens
                </h1>
                <p className="text-xs text-gray-500">
                  Photography & Videography
                </p>
              </div>
            </Link>

            {/* Center - Info Cards (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Working Hours */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Working Hours</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Mon - Sat: 9AM - 7PM
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-50 to-pink-50 border border-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Our Location</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Patia, Bhubaneswar
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 group hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Call Us Now</div>
                  <div className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    +91 98765 43210
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Mobile Info Bar */}
          <div className="lg:hidden border-t border-gray-100 py-3 flex items-center justify-around text-xs">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>9AM - 7PM</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Patia, Bhubaneswar</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
