import React from "react";
import Image from "next/image";

const Highlight = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-[#181815] text-white px-6 py-12 md:px-12 lg:px-24 mb-8">
      <div className="max-w-lg md:max-w-xl gap-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight text-gray-400 font-['Clash_Display']">
          <span className="">
            <span className="text-red-600"> Crafting </span>
            the
          </span>{" "}
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight text-gray-300 font-['Clash_Display']">
          Future, One
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight text-gray-300 font-['Clash_Display']">
          Solution at a Time
        </h1>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-400 max-w-md font-['Clash_Display']">
          We’re tech enthusiasts solving real-world problems with cutting-edge
          innovation. Today, we build apps, websites, and IoT solutions.
          Tomorrow, who knows—robots or even intergalactic portals. At{" "}
          <span className="font-bold text-white">360XpertSolutions</span>, the
          future is limitless.
        </p>
      </div>

      {/* <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 transform scale-110 md:scale-100">
          <Image
            src="/X.png"  
            alt="Graphic Element"
            layout="fill"
            objectFit="contain"
            className="opacity-90"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Highlight;
