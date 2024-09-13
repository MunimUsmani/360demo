import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <section className="bg-[#181815] flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 md:gap-10 p-4 md:p-6 lg:p-12 text-white ml-0 md:ml-4 lg:ml-8 mt-10 md:mt-16 mx-0">
      <div className="flex-1 max-w-lg lg:max-w-xs text-center lg:text-left font-['Clash_Display']">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999]">
          Showcase{" "}
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#D43833] to-[#650300]">
            of
          </span>
          <br />
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#D43833] to-[#650300]">
            Our Expertise
          </span>
        </h2>
        <p className="mt-4 md:mt-5 text-gray-400 font-light text-sm md:text-base leading-6 md:leading-7 lg:leading-9 font-['Clash_Display']">
          Discover how 360XpertSolutions transforms businesses with innovative,
          AI-powered solutions. Explore our portfolio to see successful projects
          that enhance customer engagement and streamline operations across
          various industries. Let our expertise drive your business forward.
        </p>
      </div>
      <div className="flex-1 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 ml-0 md:ml-6 lg:ml-12">
        {["Break Time", "Invent", "Green Tech"].map((title, index) => (
          <div
            key={index}
            className={`relative ${
              index === 0 ? "w-[240px] sm:w-[300px]" : "w-[100px] sm:w-[120px]"
            } h-[280px] sm:h-[360px] rounded-lg overflow-hidden group transition-all duration-300 ease-in-out ${
              index === 0
                ? "hover:w-[260px] sm:hover:w-[340px]"
                : "hover:w-[180px] sm:hover:w-[220px]"
            }`}
          >
            <Image
              src={`/pic1.png`}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
            <div className="absolute bottom-0 p-2 sm:p-4 bg-gradient-to-t from-[#181815] to-transparent">
              <h3 className="text-lg sm:text-xl text-center">{title}</h3>
              {title === "Break Time" && (
                <p className="text-xs sm:text-sm text-gray-300 font-light font-['Clash_Display']">
                  We equip healthcare providers with AI features that improve
                  patient engagement, streamline administrative tasks, and
                  enable personalized care.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
