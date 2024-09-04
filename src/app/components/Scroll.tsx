// import React from "react";

// const Scroll = () => {
//   return (
//     <div className="bg-[#181815] text-white py-20 px-4 md:px-8 lg:px-16 mt-16">
//       <div className="max-w-3xl mx-auto text-center">
//         <h1 className="text-center text-white text-4xl font-bold mb-2">
//           <span className="text-red-600">Become</span> Part <br /> of the Circle{" "}
//         </h1>
//         <a
//           href=""
//           className="mt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full inline-block"
//         >
//           Start the Conversation
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Scroll;

"use client";
import React, { useState, useEffect } from "react";

const Scroll = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => prevPosition + 1);
    }, 40); // Adjust the speed here

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full bg-[#181815] mt-16 mb-16">
      <div
        className="absolute whitespace-nowrap"
        style={{
          transform: `translateX(${position}px)`,
          transition: "transform 100ms linear",
        }}
      >
        <span className="text-lg font-bold">
          What's holding you back? What's holding you back? What's holding you
          back?
        </span>
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-center text-white text-4xl font-bold mb-2">
          <span className="text-red-600">Become</span> Part <br /> of the Circle{" "}
        </h1>
        <a
          href=""
          className="mt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full inline-block"
        >
          Start the Conversation
        </a>
      </div>
    </div>
  );
};

export default Scroll;
