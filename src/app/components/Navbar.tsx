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
    <nav className="bg-[#181815] shadow-md top-0 left-0 right-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 ml-0 sm:ml-[20px]">
            <Link href="/">
              <Image
                src="/Vector.png"
                alt="Logo"
                width={180}
                height={180}
                className="w-auto h-8"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden mr-0 sm:mr-[20px]">
            <button
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center justify-end flex-grow mr-0 sm:mr-[20px]">
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-2 pb-4">
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
