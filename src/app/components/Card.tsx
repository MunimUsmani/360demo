"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Requirements",
    description:
      `At 360XpertSolutions, we begin by understanding your \n` +
      `goals in detail, ensuring a solid foundation for successful \n` +
      `software development through close collaboration and \n` +
      `clear communication.`,
  },
  {
    title: "Design",
    description:
      "Create intuitive and visually appealing designs that align with project goals and user needs.",
  },
  {
    title: "Development",
    description:
      "Build robust and scalable solutions using cutting-edge technologies and best practices.",
  },
];

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#181815] text-white p-2 mt-16">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
          Our Proven <span className="text-red-600">Process</span>
        </h2>
        <div className="m-4 p-6">
          <div className="relative h-[400px] md:h-[500px]">
            <AnimatePresence>
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className={`absolute inset-0 bg-[#1E1E1B] rounded-lg rounded-tr-[150px] p-6 md:p-8 shadow-lg ${
                    index === currentIndex ? "z-20" : "z-10"
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0.5,
                    x: 20 * (index - currentIndex),
                    scale: index === currentIndex ? 1 : 0.95,
                  }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-12 h-12 mb-6">
                    <Image
                      src="/X.png"
                      alt={`Icon for ${card.title}`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-3xl font-semibold mb-4">{card.title}</h3>
                  <p className="text-lg opacity-80 pr-12 leading-7 mb-12">
                    {card.description}
                  </p>
                  {index === currentIndex && (
                    <button
                      onClick={nextCard}
                      className="absolute bottom-8 right-8 bg-red-600 rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors"
                      aria-label="Next card"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
