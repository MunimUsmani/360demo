"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Scroll() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => prevPosition - 1);
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[60px] sm:h-[45px] md:h-[50px] lg:h-[60px] bg-[#181815] mt-20 mb-20">
      <div
        className="absolute whitespace-nowrap flex"
        style={{
          transform: `translateX(${position}px)`,
          transition: "transform 0.02s linear",
        }}
      >
        {Array(1000)
          .fill("")
          .map((_, index) => (
            <div key={index} className="flex items-center h-[30%]">
              <div className="flex items-center  text-[4vw] text-white sm:text-2xl md:text-3xl lg:text-4xl font-light bg-[#5C1616] font-['Clash_Display'] px-4 leading-[40px] sm:leading-[45px] md:leading-[50px] lg:leading-[60px]">
                <span className="gap-16">Connect And Chat</span>
                <div className="w-[52] h-[30] gap-2">
                  <Image
                    src="/chatsymbol.png"
                    alt="Chat Symbol"
                    width={52}
                    height={70}
                    className="ml-4 h-[22px]"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
