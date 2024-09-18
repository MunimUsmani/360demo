import React from "react";

export default function VisionSection() {
  return (
    <section className="bg-[#181815] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Our <span className="text-red-500">Vision</span> & <br />
            Core Values
          </h2>
          <p className="font-['Clash_Display'] text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl w-[80%]">
            Our guiding principles—commitment to innovation, respect for
            integrity, and dedication to excellence—shape our decisions and fuel
            our creativity. By staying true to these values, we deliver
            outstanding results and contribute to a better future for our
            clients, partners, and communities.
          </p>
        </div>

        {/* Right Side Box */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm p-8 bg-gradient-to-t from-[#333] to-[#222] rounded-xl border border-gray-600">
            <h3 className="font-['Clash_Display'] text-xl font-normal text-white mb-4">
              Our Vision
            </h3>
            <p className="font-['Clash_Display'] text-sm text-gray-400">
              Making advanced IT solutions accessible to firms at the
              avant-garde and in performance-rich businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
