import React from "react";
import Image from "next/image";

export default function TechAndTools() {
  const tools = [
    { name: "Scikit-learn", logo: "/Scikit.png" },
    { name: "OpenAI", logo: "/gpt.png" },
    { name: "PyTorch", logo: "/pytorch.png" },
    { name: "Pandas", logo: "/pandas.png" },
    { name: "TensorFlow", logo: "/tensorflow.png" },
    { name: "SciPy", logo: "/scipy.png" },
    { name: "NumPy", logo: "/numpy.png" },
  ];

  return (
    <div className="bg-[#181815] text-white p-8 mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light mb-4 ">
            Tech and Tool <span className="text-red-500">We Use</span>
          </h1>
          <p className="text-gray-400 mx-auto max-w-2xl">
            Our developers use the latest technologies and frameworks to build{" "}
            <br />
            powerful solutions with sleek, user-friendly designs
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-gray-800 rounded-tr-[50px] md:rounded-tr-[150px] overflow-hidden shadow-2xl w-[90%] mx-auto">
            <div className="bg-[#181815] flex flex-col md:flex-row h-full border border-[#3C3C3C]">
              <div className="p-4 md:p-8 md:w-1/2">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 mt-4 md:mt-6">
                  Artificial Intelligence
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-[#181815]">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-lg p-2 md:p-4 flex items-center space-x-3 border border-[#3C3C3C]"
                    >
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-8 md:h-8"
                      />
                      <span className="text-xs md:text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative flex items-center justify-center">
                <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] relative overflow-hidden">
                  <video
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/Ai.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
