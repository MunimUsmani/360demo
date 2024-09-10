import React from "react";

const Wording = () => {
  return (
    <div className="max-w-3xl mx-auto text-center p-5">
      <h1 className="text-center text-white sm:text-2xl md:text-6xl lg:text-7xl font-bold leading-tight">
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#D43833] to-[#650300]"
        >
          Become
        </span>{" "}
        Part <br />
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999]"
        >
          of the Circle
        </span>
      </h1>
      <a
        href=""
        className="mt-8 bg-gradient-to-r from-[#D43833] to-[#650300] hover:from-[#650300] hover:to-[#D43833] text-white font-bold py-2 px-8 rounded-full inline-block text-lg md:text-xl"
      >
        Start the Conversation
      </a>
    </div>
  );
};

export default Wording;
