"use client";
import React, { useState, useEffect } from "react";

const Scroll = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 3) % window.innerWidth);
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[40px] bg-[#181815] mt-20 mb-20">
      <div
        className="absolute top-0 left-0 whitespace-nowrap"
        style={{
          transform: `translateX(${position}px)`,
          transition: "transform 20ms linear",
        }}
      >
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] ">
          What's holding you back? &nbsp; &nbsp; What's holding you back? &nbsp;
          &nbsp; What's holding you back?
        </span>
      </div>
    </div>
  );
};

export default Scroll;
