"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        !event.target.closest(".navbar-menu") &&
        !event.target.closest(".navbar-burger")
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: any) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center">
        <a className="text-3xl font-bold leading-none" href="#">
          <Image
            src="/Vector.png"
            alt="Logo"
            width={140}
            height={140}
            priority
          />
        </a>
        <div className="flex items-center">
          <button
            className="navbar-burger flex items-center bg-white-600 p-3 h-10 w-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image
                src="/Vector.png"
                alt="Logo"
                width={110}
                height={130}
                priority
              />
            </a>
            <button
              className="navbar-burger flex items-center color-600 p-4 h-12 w-16"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="block h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                HOME
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                ABOUT US
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                CAREERS
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                BLOGS
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#181815] text-white">
        {/* Adjusted container to position image slightly upwards */}
        <div className="absolute inset-0 flex justify-center items-center -top-12">
          <Image
            src="/X.png"
            alt="Graphic Element"
            objectFit="cover"
            width={550}
            height={550}
            className="opacity-70"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-red-600 text-lg sm:text-xl font-semibold mb-4">
            Elevating your
          </h2>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
            Digital
          </h1>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light">
            Presence
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            At{" "}
            <span className="text-white font-semibold">360XpertSolution</span>,
            we craft innovative digital solutions that amplify your brand's
            visibility and impact. With our expertise, your online presence
            won't just stand out - it will excel.
          </p>

          <div className="mt-8">
            <div className="flex flex-col items-center">
              <div className="text-white text-xs mb-2"></div>
              <div className="border border-white rounded-full p-2">
                <svg
                  className="h-4 w-4 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l-7-7 7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
