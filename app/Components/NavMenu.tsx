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
import { Menu, X, Home, Info, Users, Mail, Sparkles } from "lucide-react";

const navItemBase =
  "px-6 py-2 text-sm font-semibold uppercase transition-all duration-300 flex items-center gap-2 rounded-lg";

const navHover =
  "hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:shadow-lg focus:bg-gradient-to-r focus:from-purple-600/20 focus:to-pink-600/20";

const navActive =
  "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50";

const NavMenu: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const menuItems = [
    { name: "Home", href: "/app", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Team", href: "/teams", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail },
   
  ];

  return (
    <nav className="relative border-b border-gray-700/50 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
       
       

          {/* DESKTOP MENU */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={`${navItemBase} ${navHover} ${
                          isActive(item.href)
                            ? navActive
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}

              {/* CTA */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/services"
                    className="button-shimmer relative ml-4 flex items-center gap-2 overflow-hidden rounded-lg px-6 py-2 text-sm font-semibold uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <Sparkles className="h-4 w-4" />
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
                  <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blogs"
                    className="button-shimmer relative ml-4 flex items-center gap-2 overflow-hidden rounded-lg px-6 py-2 text-sm font-semibold uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <Sparkles className="h-4 w-4" />
                    Blogs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-gray-300 transition-all hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="border-t border-gray-700/50 pb-4 pt-2 md:hidden">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 font-semibold uppercase transition-all ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}

            
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .button-shimmer {
          background: linear-gradient(
            90deg,
            rgba(147, 51, 234, 1) 0%,
            rgba(236, 72, 153, 1) 50%,
            rgba(147, 51, 234, 1) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </nav>
  );
};

export default NavMenu;
