"use client";
import React, { useState } from "react";
import Image from "next/image";

const Grid = () => {
  // Object to track hover states for each icon
  const [hoverStates, setHoverStates] = useState({
    dms: false,
    eagle: false,
    ctc: false,
    wisayah: false,
    hassana: false,
    stc: false,
    bussma: false,
    bykea: false,
  });

  // Function to handle mouse enter
  const handleMouseEnter = (icon: any) => {
    setHoverStates((prevState) => ({ ...prevState, [icon]: true }));
  };

  // Function to handle mouse leave
  const handleMouseLeave = (icon: any) => {
    setHoverStates((prevState) => ({ ...prevState, [icon]: false }));
  };

  return (
    <div className="container relative z-40 mx-auto">
      <h1 className="text-center text-white text-4xl font-bold mb-2">
        Mastering Advanced <span className="text-red-600">Expertise</span>
      </h1>
      <p className="text-xl mb-16 text-center text-white">
        Becoming an Expert Through Advanced Skills and Knowledge
      </p>
      <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
        <a
          href="#"
          className="block w-1/2 py-10 text-center border-r border-b lg:w-1/4"
          onMouseEnter={() => handleMouseEnter("dms")}
          onMouseLeave={() => handleMouseLeave("dms")}
        >
          <div>
            <Image
              src={hoverStates.dms ? "/active-dms.png" : "/inactive-dms.png"}
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href="#"
          className="block w-1/2 py-10 text-center border-l border-r border-b lg:w-1/4"
          onMouseEnter={() => handleMouseEnter("eagle")}
          onMouseLeave={() => handleMouseLeave("eagle")}
        >
          <div>
            <Image
              src={
                hoverStates.eagle ? "/active-eagle.png" : "/inactive-eagle.png"
              }
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href="#"
          className="block w-1/2 py-10 text-center border-l border-r border-b lg:w-1/4"
          onMouseEnter={() => handleMouseEnter("ctc")}
          onMouseLeave={() => handleMouseLeave("ctc")}
        >
          <div>
            <Image
              src={hoverStates.ctc ? "/active-ctc.png" : "/inactive-ctc.png"}
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href="#"
          className="block w-1/2 py-10 text-center border-l border-b lg:w-1/4"
          onMouseEnter={() => handleMouseEnter("wisayah")}
          onMouseLeave={() => handleMouseLeave("wisayah")}
        >
          <div>
            <Image
              src={
                hoverStates.wisayah
                  ? "/active-wisayah.png"
                  : "/inactive-wisayah.png"
              }
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href="#"
          className="block w-1/2 py-10 text-center border-r border-t lg:w-1/4"
          onMouseEnter={() => handleMouseEnter("hassana")}
          onMouseLeave={() => handleMouseLeave("hassana")}
        >
          <div>
            <Image
              src={
                hoverStates.hassana
                  ? "/active-hassana.png"
                  : "/inactive-hassana.png"
              }
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href="#"
          className="block w-1/2 py-10 text-center border-l border-r border-t lg:w-1/4"
          onMouseEnter={() => handleMouseEnter("stc")}
          onMouseLeave={() => handleMouseLeave("stc")}
        >
          <div>
            <Image
              src={hoverStates.stc ? "/active-stc.png" : "/inactive-stc.png"}
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href="#"
          className="block w-1/2 py-10 text-center border-l border-r border-t lg:w-1/4"
          onMouseEnter={() => handleMouseEnter("bussma")}
          onMouseLeave={() => handleMouseLeave("bussma")}
        >
          <div>
            <Image
              src={
                hoverStates.bussma
                  ? "/active-bussma.png"
                  : "/inactive-bussma.png"
              }
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href="#"
          className="block w-1/2 py-10 text-center border-l border-t lg:w-1/4"
          onMouseEnter={() => handleMouseEnter("bykea")}
          onMouseLeave={() => handleMouseLeave("bykea")}
        >
          <div>
            <Image
              src={
                hoverStates.bykea ? "/active-bykea.png" : "/inactive-bykea.png"
              }
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Grid;
