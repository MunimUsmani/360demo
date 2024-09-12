"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      loader: GLTFLoader;

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      canvasRef.current ? canvasRef.current.clientWidth : 0,
      canvasRef.current ? canvasRef.current.clientHeight : 0
    );
    canvasRef.current && canvasRef.current.appendChild(renderer.domElement);

    const handleResize = () => {
      const width = canvasRef.current ? canvasRef.current.clientWidth : 0;
      const height = canvasRef.current ? canvasRef.current.clientHeight : 0;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    loader = new GLTFLoader();
    loader.load("/X.gltf", (gltf) => {
      const model = gltf.scene;

      model.scale.set(0.5, 0.5, 0.5);
      model.position.set(-0.5, 0, 0);
      scene.add(model);
      modelRef.current = model;
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // GSAP ScrollTrigger animation
    const handleScroll = () => {
      if (modelRef.current) {
        gsap.to(modelRef.current.position, {
          x: 100,
          y: 300,
          ease: "none",
          scrollTrigger: {
            trigger: ".relative",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: true,
            onUpdate: (self) => {
              console.log("Scroll progress:", self.progress); // Debug scroll progress
            },
          },
        });
      }
    };

    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#181815] text-white overflow-hidden mx-0">
      <div ref={canvasRef} className="absolute inset-0 z-0 w-full h-full"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Clash_Display'] text-custom-size font-light leading-custom-line text-center mb-4">
          Elevating your
        </h2>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 font-['Clash_Display']">
          Digital
        </h1>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light font-['Clash_Display']">
          Presence
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 font-['Clash_Display']">
          At <span className="text-white font-semibold">360XpertSolutions</span>
          , we craft innovative digital solutions that amplify your brand&apos;s
          visibility and impact. With our expertise, your online presence
          won&apos;t just stand out - it will excel.
        </p>
      </div>
    </section>
  );
}
