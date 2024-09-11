"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/Careers", label: "CAREERS" },
    { href: "/Blogs", label: "BLOGS" },
    { href: "/About us", label: "ABOUT US" },
    { href: "/Home", label: "HOME" },
  ];

  return (
    <nav className="bg-[#181815] shadow-md font-['Clash_Display']">
      <div className="max-w-7xl mx-0 px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="">
              <Image
                src="/Vector.png"
                alt="Logo"
                width={180}
                height={180}
                className="w-auto h-8"
              />
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden sm:flex items-center">
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded={isHovered}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
              <div
                className={`absolute top-0 right-full h-full flex items-center transition-all duration-300 ease-in-out overflow-hidden ${
                  isHovered ? "w-auto opacity-100" : "w-0 opacity-0"
                }`}
              >
                <div className="flex flex-row-reverse space-x-4 space-x-reverse">
                  {links.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-xs sm:text-sm text-gray-100 hover:text-gray-300 whitespace-nowrap transition-all duration-300 ease-in-out ${
                        isHovered
                          ? "translate-x-0 opacity-100"
                          : "translate-x-full opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden mt-2">
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-100 hover:text-gray-300 text-base"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
