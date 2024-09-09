"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Requirements",
    description:
      "Understanding your goals in detail, ensuring a solid foundation for successful software development.",
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
      "Rigorously test all aspects of the software to ensure quality, reliability, and performance.",
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "Seamlessly deploy the solution to production environments, ensuring smooth transitions.",
  },
  {
    id: 6,
    title: "Maintenance",
    description:
      "Provide ongoing support and maintenance to keep the software up-to-date and secure.",
  },
];

export default function CardStack() {
  const [activeCards, setActiveCards] = useState(cards);
  const [swiping, setSwiping] = useState<number | null>(null);

  useEffect(() => {
    if (activeCards.length === 0) {
      setActiveCards(cards);
    }
  }, [activeCards]);

  const handleSwipe = (id: number) => {
    setSwiping(id);
    setTimeout(() => {
      setActiveCards((prev) => {
        const newCards = prev.filter((card) => card.id !== id);
        return newCards.length === 0 ? cards : newCards;
      });
      setSwiping(null);
    }, 300);
  };

  return (
    <div className="flex items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white font-['Clash_Display']">
          Our Proven <span className="text-red-600">Process</span>
        </h2>
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px]">
          <AnimatePresence>
            {activeCards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`absolute inset-0 bg-[#181815] rounded-lg rounded-tr-[50px] sm:rounded-tr-[75px] md:rounded-tr-[100px] p-4 sm:p-6 md:p-8 shadow-lg border border-[#3C3C3C] ${
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
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <div className="flex flex-col items-start mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 -mt-4 relative">
                      <Image
                        src="/X.png"
                        alt="X icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999999]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80 pr-4 sm:pr-8 md:pr-12 leading-tight sm:leading-snug md:leading-normal font-['Clash_Display']">
                    {card.description}
                  </p>
                  {index === activeCards.length - 1 && (
                    <button
                      onClick={() => handleSwipe(card.id)}
                      className="absolute bottom-4 right-4 bg-[#3C3C3C] rounded-full p-2 shadow-lg hover:bg-[#4C4C4C] transition-colors"
                      aria-label="Next card"
                      disabled={swiping !== null}
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative">
                        <Image
                          src="/arrow.png"
                          alt="Arrow icon"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
