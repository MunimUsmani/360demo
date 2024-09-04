import React from "react";
import Image from "next/image";

const Highlight = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-[#181815] text-white min-h-screen px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-lg md:max-w-xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-300">
          <span className="text-red-600">Crafting</span> the
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-300">
          Future, One
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-300">
          Solution at a Time
        </h1>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-400 max-w-md">
          We’re tech enthusiasts solving real-world problems with cutting-edge
          innovation. Today, we build apps, websites, and IoT solutions.
          Tomorrow, who knows—robots or even intergalactic portals. At{" "}
          <span className="font-bold text-white">360XpertSolutions</span>, the
          future is limitless.
        </p>
      </div>

      <div className="right-0 bottom-0 md:static md:w-1/2 transform md:transform-none md:-rotate-12 scale-125 mb-12 ml-55">
        <Image
          src="/X.png"
          alt="Graphic Element"
          width={300}
          height={300}
          className="opacity-90 md:rotate-[-20deg]"
        />
      </div>
    </section>
  );
};

export default Highlight;
