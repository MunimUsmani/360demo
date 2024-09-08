"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, RotateCcw } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Requirements",
    description:
      "At 360XpertSolutions, we begin by understanding your goals in detail, ensuring a solid foundation for successful software development through close collaboration and clear communication.",
  },
  {
    id: 2,
    title: "Design",
    description:
      "Create intuitive and visually appealing designs that align with project goals and user needs.",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Build robust and scalable solutions using cutting-edge technologies and best practices.",
  },
  {
    id: 4,
    title: "Testing",
    description:
      "Rigorously test all aspects of the software to ensure quality, reliability, and performance meet the highest standards.",
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "Seamlessly deploy the solution to production environments, ensuring smooth transitions and minimal downtime.",
  },
  {
    id: 6,
    title: "Management",
    description:
      "Provide ongoing support and maintenance to keep the software up-to-date, secure, and optimized for peak performance.",
  },
];

export default function Component() {
  const [activeCards, setActiveCards] = useState(cards);
  const [swipedCards, setSwipedCards] = useState<typeof cards>([]);
  const [swiping, setSwiping] = useState<number | null>(null);

  const handleSwipe = (id: number) => {
    setSwiping(id);
    setTimeout(() => {
      setActiveCards((prev) => prev.filter((card) => card.id !== id));
      setSwipedCards((prev) => [
        ...prev,
        cards.find((card) => card.id === id)!,
      ]);
      setSwiping(null);
    }, 300);
  };

  const handleReset = () => {
    setActiveCards(cards);
    setSwipedCards([]);
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
              {activeCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className={`absolute inset-0 bg-[#181815] rounded-lg rounded-tr-[150px] p-6 md:p-8 shadow-lg border border-[#3C3C3C] ${
                    index === activeCards.length - 1 ? "z-20" : "z-10"
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: swiping === card.id ? 0 : 1,
                    x: swiping === card.id ? "120%" : `${index * 3}%`,
                    scale: index === activeCards.length - 1 ? 1 : 0.95,
                  }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="relative w-12 h-12 mb-6">
                      <ChevronRight className="w-12 h-12 text-red-600" />
                    </div>
                    <h3 className="text-3xl font-semibold mb-4">
                      {card.title}
                    </h3>
                    <p className="text-lg opacity-80 pr-12 leading-7 mb-12">
                      {card.description}
                    </p>
                    {index === activeCards.length - 1 && (
                      <button
                        onClick={() => handleSwipe(card.id)}
                        className="absolute bottom-8 right-8 bg-[#3C3C3C] rounded-full p-2 shadow-lg hover:bg-[#4C4C4C] transition-colors"
                        aria-label="Next card"
                        disabled={swiping !== null}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {activeCards.length === 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleReset}
              className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Reset Cards
              <RotateCcw className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
