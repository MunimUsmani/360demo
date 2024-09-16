import React from "react";

const Carousel = () => {
  return (
    <section className="bg-[#181815] text-white py-12">
      <div className="max-w-7xl mx-auto px-2 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/3 mb-12 lg:mb-0 lg:mr-0 lg:pl-0 lg:pr-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Clash_Display'] break-words">
            Showcase{" "}
            <span className="text-red-500">
              of <br />
            </span>{" "}
            <span className="text-red-500"> Our Expertise</span>
          </h1>
          <p className="mt-4 md:mt-5 text-gray-400 font-light text-sm md:text-base leading-6 md:leading-7 lg:leading-9 font-['Clash_Display']">
            Discover how 360XpertSolutions transforms businesses with
            innovative, AI-powered solutions. Explore our portfolio to see
            successful projects that enhance customer engagement and streamline
            operations across various industries. Let our expertise drive your
            business forward.
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start lg:w-2/3 space-x-6 space-y-6 lg:space-y-0">
          <div className="relative w-full sm:w-72 md:w-80 lg:w-96 h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group hover:w-[37%] lg:group-hover:w-[37%] flex-shrink-0">
            <img
              src="/pic3.png"
              alt="Project 1"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-6">
              <h2 className="text-lg md:text-xl font-['Clash_Display']">
                Break Time
              </h2>
              <p className="text-xs md:text-sm mt-2 font-['Clash_Display']">
                We equip healthcare providers with AI chatbots that improve
                patient engagement and streamline administrative tasks.
              </p>
            </div>
          </div>

          {/* Card 2 - Remains the same */}
          <div className="relative w-full sm:w-72 md:w-80 lg:w-48 h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group hover:w-[25%] lg:group-hover:w-[25%] flex-shrink-0">
            <img
              src="/pic3.png"
              alt="Project 2"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-6">
              <h2 className="text-lg md:text-xl font-['Clash_Display']">
                Invenr
              </h2>
            </div>
          </div>

          {/* Card 3 - Remains the same */}
          <div className="relative w-full sm:w-72 md:w-80 lg:w-48 h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group hover:w-[25%] lg:group-hover:w-[25%] flex-shrink-0">
            <img
              src="/pic3.png"
              alt="Project 3"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-6">
              <h2 className="text-lg md:text-xl font-['Clash_Display']">
                Green Tech
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
