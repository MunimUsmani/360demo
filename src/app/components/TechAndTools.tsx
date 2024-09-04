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
    <div className="bg-[#181815] text-white min-h-screen p-8 mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light mb-4">
            Tech and Tool <span className="text-red-500">We Use</span>
          </h1>
          <p className="text-gray-400 mx-auto max-w-2xl">
            Our developers use the latest technologies and frameworks to build{" "}
            <br />
            powerful solutions with sleek, user-friendly designs
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <div
            className="bg-gray-800 rounded-tr-[150px] overflow-hidden shadow-2xl w-[90%] mx-auto"
            style={{ height: "400px" }}
          >
            <div className="bg-[#181815] flex flex-col md:flex-row h-full border border-[#3C3C3C]">
              <div className="p-8 md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-6">
                  Artificial Intelligence
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-[#181815]">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-lg p-4 flex items-center space-x-3 border border-[#3C3C3C]"
                    >
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                      <span className="text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative flex items-center justify-center">
                <div className="w-full h-4/5 relative overflow-hidden">
                  <video
                    className="object-cover rounded-tr-[150px] ml-16 t-4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ height: 300, width: 400 }}
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
