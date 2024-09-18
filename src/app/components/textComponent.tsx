"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TextComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-[#181815] h-screen flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center"></div>
        <div className=""></div>
        <h1 className="text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] font-['Clash_Display'] -mt-32">
          Smart
        </h1>
      </div>
      <div className="relative z-10 space-y-4">
        <h1 className="text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#D43833] to-[#650300] font-['Clash_Display'] -ml-16">
          Seamless
        </h1>
      </div>
      <div>
        <h1 className="text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] font-['Clash_Display'] mt-48 -ml-16">
          Scalable
        </h1>
      </div>
    </div>
  );
}
