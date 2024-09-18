"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techCategories = [
  {
    name: "Artificial Intelligence",
    tools: [
      { name: "Scikit-learn", logo: "/Scikit.png" },
      { name: "OpenAI", logo: "/gpt.png" },
      { name: "PyTorch", logo: "/pytorch.png" },
      { name: "Pandas", logo: "/pandas.png" },
      { name: "Tensor-Flow", logo: "/tensorflow.png" },
      { name: "SciPy", logo: "/scipy.png" },
      { name: "NumPy", logo: "/numpy.png" },
    ],
    video: "/Ai.mp4",
  },
  {
    name: "Web Development",
    tools: [
      { name: "React", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Next.js", logo: "/placeholder.svg?height=32&width=32" },
      { name: "TypeScript", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Node.js", logo: "/placeholder.svg?height=32&width=32" },
      { name: "GraphQL", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Tailwind CSS", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Vue.js", logo: "/placeholder.svg?height=32&width=32" },
    ],
    video: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "DevOps",
    tools: [
      { name: "Docker", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Kubernetes", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Jenkins", logo: "/placeholder.svg?height=32&width=32" },
      { name: "GitLab CI", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Ansible", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Terraform", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Prometheus", logo: "/placeholder.svg?height=32&width=32" },
    ],
    video: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Cloud Computing",
    tools: [
      { name: "AWS", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Azure", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Google Cloud", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Heroku", logo: "/placeholder.svg?height=32&width=32" },
      { name: "DigitalOcean", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Cloudflare", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Vercel", logo: "/placeholder.svg?height=32&width=32" },
    ],
    video: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Data Science",
    tools: [
      { name: "Jupyter", logo: "/placeholder.svg?height=32&width=32" },
      { name: "R", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Tableau", logo: "/placeholder.svg?height=32&width=32" },
      { name: "MATLAB", logo: "/placeholder.svg?height=32&width=32" },
      { name: "SAS", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Apache Spark", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Hadoop", logo: "/placeholder.svg?height=32&width=32" },
    ],
    video: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Cybersecurity",
    tools: [
      { name: "Wireshark", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Metasploit", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Nmap", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Burp Suite", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Kali Linux", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Splunk", logo: "/placeholder.svg?height=32&width=32" },
      { name: "Snort", logo: "/placeholder.svg?height=32&width=32" },
    ],
    video: "/placeholder.svg?height=400&width=600",
  },
];

export default function TechAndTools() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.01, // Trigger when 10% of the component is visible
    triggerOnce: true, // It will trigger every time on scroll
  });

  const resetActiveIndex = useCallback(() => {
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (inView) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % techCategories.length);
      }, 2000); // Switch cards every 5 seconds while in view
    } else {
      resetActiveIndex();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [inView, resetActiveIndex]);

  return (
    <div className="bg-[#181815] text-white p-4 md:p-8 mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-4 font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
            Tech and Tools <span className="text-red-600">We Use</span>
          </h1>
          <p className="text-gray-200 mx-auto max-w-xl md:max-w-2xl font-['Clash_Display'] leading-snug md:leading-normal">
            Our developers use the latest technologies and frameworks to build
            powerful solutions with sleek, user-friendly designs
          </p>
        </div>

        <div
          className="flex justify-center items-center font-['Clash_Display'] relative min-h-[600px] -mt-20"
          ref={ref}
        >
          <AnimatePresence mode="wait">
            {techCategories.map(
              (category, index) =>
                index === activeIndex && (
                  <motion.div
                    key={category.name}
                    className="absolute w-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.5,
                    }}
                  >
                    <div className="bg-gray-800 rounded-tr-[40px] sm:rounded-tr-[80px] md:rounded-tr-[150px] overflow-hidden shadow-2xl w-full max-w-[90%] mx-auto">
                      <div className="bg-[#181815] flex flex-col md:flex-row h-full border border-[#3C3C3C]">
                        <div className="p-4 md:p-8 md:w-1/2">
                          <h2
                            className={`text-2xl md:text-4xl mb-4 md:mb-8 mt-4 md:mt-6 ${
                              category.name === "Artificial Intelligence"
                                ? "font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999]"
                                : "font-bold"
                            }`}
                          >
                            {category.name}
                          </h2>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {category.tools.map((tool) => (
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
                                <span className="text-xs md:text-sm">
                                  {tool.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="md:w-1/2 relative flex items-center justify-center">
                          <div className="w-full h-[150px] sm:h-[200px] md:h-[400px] relative overflow-hidden">
                            {category.video.endsWith(".mp4") ? (
                              <video
                                className="object-cover w-full h-full"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source src={category.video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <Image
                                src={category.video}
                                alt={category.name}
                                layout="fill"
                                objectFit="cover"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
