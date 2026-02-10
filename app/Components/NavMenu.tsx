"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X, Home, Info, Users, Mail, Sparkles, FileText, Briefcase } from "lucide-react";

const navItemBase =
  "flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold uppercase transition-all duration-300";

const navHover =
  "hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:text-white";

const navActive =
  "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40 ";

export default function NavMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const menuItems = [
    { name: "Home", href: "/app", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Blogs", href: "/blogs", icon: FileText },
    { name: "Team", href: "/teams", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-700/50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* DESKTOP MENU */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={`${navItemBase} ${navHover} ${
                          isActive(item.href) ? navActive : "text-gray-300"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-700/50 bg-gray-900/95 px-4 py-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold uppercase transition-all ${
                    isActive(item.href)
                      ? navActive
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* SHIMMER */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .button-shimmer {
          background: linear-gradient(
            90deg,
            rgba(147, 51, 234, 1),
            rgba(236, 72, 153, 1),
            rgba(147, 51, 234, 1)
          );
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </nav>
  );
}
