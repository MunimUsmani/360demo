"use client";
import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
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
      canvasRef.current?.clientWidth || 0,
      canvasRef.current?.clientHeight || 0
    );
    canvasRef.current?.appendChild(renderer.domElement);

    const handleResize = () => {
      const width = canvasRef.current?.clientWidth || 0;
      const height = canvasRef.current?.clientHeight || 0;
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
            trigger: ".relative", // Update this to match your section or model container
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
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center">
        <a className="text-3xl font-bold leading-none" href="#">
          <img src="/Vector.png" alt="Logo" width={140} height={140} />
        </a>
        <div className="flex items-center">
          <button
            className="navbar-burger flex items-center bg-white-600 p-3 h-10 w-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>

      <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#181815] text-white overflow-hidden">
        <div
          ref={canvasRef}
          className="absolute inset-0 z-0 w-full h-full"
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-red-600 text-lg sm:text-xl font-semibold mb-4">
            Elevating your
          </h2>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
            Digital
          </h1>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light">
            Presence
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            At{" "}
            <span className="text-white font-semibold">360XpertSolution</span>,
            we craft innovative digital solutions that amplify your brand's
            visibility and impact. With our expertise, your online presence
            won't just stand out - it will excel.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
