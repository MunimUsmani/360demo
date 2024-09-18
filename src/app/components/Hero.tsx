"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface Message {
  text: string;
  isUser: boolean;
}

export default function Hero() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const [isToggled, setIsToggled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Welcome! If you need help, simply reply to this message.",
      isUser: false,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      loader: GLTFLoader;

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

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    gsap.to("#toggleButton", {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    const cardComponent = document.getElementById("card-component");
    if (cardComponent) {
      cardComponent.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleChatSupport = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, isUser: true }]);
      setInputMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#181815] text-white overflow-hidden">
        <div
          ref={canvasRef}
          className="absolute inset-0 z-0 w-full h-full"
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Clash_Display'] font-light leading-custom-line text-center mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-clip-text text-[#FFFFFF]">
            Elevating your
          </h2>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium mb-4 font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
            Digital
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
            Presence
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-300 font-['Clash_Display']">
            At{" "}
            <span className="text-white font-semibold">360XpertSolutions</span>,
            we craft innovative digital solutions that amplify your brand&apos;s
            visibility and impact. With our expertise, your online presence
            won&apos;t just stand out - it will excel.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 -mb-8">
          <Image
            id="toggleButton"
            src="/toggle.png"
            alt="Toggle"
            width={20}
            height={30}
            className="cursor-pointer"
            onClick={handleToggle}
          />
        </div>

        <div className="absolute bottom-4 right-2 z-25">
          <div
            className="rounded-full p-2 shadow-lg cursor-pointer"
            onClick={toggleChatSupport}
          >
            <Image
              src="/chatsupport.png"
              alt="Chat Support"
              width={80}
              height={80}
            />
          </div>
        </div>
        {isChatOpen && (
          <div className="fixed bottom-20 right-10 z-50 bg-[#222] text-white p-4 shadow-lg rounded-lg w-[320px] h-[450px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <h3 className="text-xl font-semibold">Lytica AI Agent</h3>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400"
              >
                <Image src="/close.png" alt="Close" width={24} height={24} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-2 bg-[#333] rounded-md mb-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    message.isUser ? "text-red-400 text-right" : "text-gray-200"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="flex items-center">
              <input
                type="text"
                className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white"
                placeholder="Write Message"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="ml-2 p-2 bg-red-500 text-white rounded-full"
                onClick={handleSendMessage}
              >
                <Image src="/send.png" alt="Send" width={20} height={20} />
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
