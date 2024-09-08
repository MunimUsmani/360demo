import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <section className="bg-[#181815] flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10 p-6 lg:p-12 text-white ml-8 mt-16">
      <div className="flex-1 max-w-lg lg:max-w-xs text-center lg:text-left">
        <h2 className="text-3xl lg:text-5xl font-light">
          Showcase <span className="text-red-600">of</span>
          <br className="text-red-600" />
          <span className="text-red-600">Our Expertise</span>
        </h2>
        <p className="mt-5 text-gray-400 font-light">
          Discover how 360XpertSolutions transforms businesses with innovative,
          AI-powered solutions. Explore our portfolio to see successful projects
          that enhance customer engagement and streamline operations across
          various industries. Let our expertise drive your business forward.
        </p>
      </div>

      <div className="flex-1 flex flex-wrap justify-center lg:justify-start gap-6 ml-12">
        {["Break Time", "Invent", "Green Tech"].map((title, index) => (
          <div
            key={index}
            className={`relative ${
              index === 0 ? "w-[300px]" : "w-[120px]"
            } h-[360px] rounded-lg overflow-hidden group transition-all duration-300 ease-in-out ${
              index === 0 ? "hover:w-[340px]" : "hover:w-[300px]"
            }`}
          >
            <Image
              src="/pic1.png"
              alt={title}
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-[#181815] to-transparent">
              <h3 className="text-xl text-center">{title}</h3>
              {title === "Break Time" && (
                <p className="text-sm text-gray-300 font-light">
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
