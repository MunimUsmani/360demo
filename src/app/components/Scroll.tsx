"use client";
import React, { useState, useEffect } from "react";

const Scroll = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => prevPosition - 1);
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[30px] sm:h-[35px] md:h-[40px] bg-[#181815] mt-20 mb-20 mx-0">
      <div
        className="absolute whitespace-nowrap flex"
        style={{
          transform: `translateX(${position}px)`,
          transition: "transform 0.02s linear",
        }}
      >
        {/* Duplicate the text twice for continuous scrolling */}
        <span className="text-[4vw] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] font-['Clash_Display'] px-4 py-2 rounded-md">
          What&apos;s holding you back? &nbsp; &nbsp; What&apos;s holding you
          back? &nbsp; &nbsp; What&apos;s holding you back?
        </span>
        <span className="text-[4vw] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] font-['Clash_Display'] px-4 py-2 rounded-md">
          What&apos;s holding you back? &nbsp; &nbsp; What&apos;s holding you
          back? &nbsp; &nbsp; What&apos;s holding you back?
        </span>
      </div>
    </div>
  );
};

export default Scroll;
