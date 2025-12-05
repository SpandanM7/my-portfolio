"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [randomMessage, setRandomMessage] = useState("");

  const messages = [
    "Oops! You've wandered into the void!",
    "This page is playing hide and seek... and winning!",
    "404: Page went out for coffee",
    "Looks like you took a wrong turn",
    "This page is on vacation",
  ];

  useEffect(() => {
    setMounted(true);
    setRandomMessage(messages[Math.floor(Math.random() * messages.length)]);
  }, []);

  const handleHomeClick = () => {
    
    window.location.href = "/";
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isRunning || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const button = document.getElementById("runaway-btn");
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - buttonCenterX, 2) +
          Math.pow(e.clientY - buttonCenterY, 2)
      );

      if (distance < 150) {
        const angle = Math.atan2(
          buttonCenterY - e.clientY,
          buttonCenterX - e.clientX
        );
        const moveDistance = 150;
        const newX = Math.cos(angle) * moveDistance;
        const newY = Math.sin(angle) * moveDistance;

        setPosition({ x: newX, y: newY });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isRunning, isMobile]);

  const handleTapGame = () => {
    if (!gameStarted) {
      setGameStarted(true);
      setScore(0);
    }

    setScore((prev) => prev + 1);

    if (score + 1 >= 5) {
      handleHomeClick();
    }
  };

  const handleDesktopGame = () => {
    setIsRunning(!isRunning);
  };

  
  if (!mounted) {
    return (
      <main className="flex flex-col h-screen items-center justify-center bg-black text-white px-4 overflow-hidden relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-center z-10"
        >
          <motion.div
            animate={{
              textShadow: [
                "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #818cf8, 0 0 40px #818cf8",
                "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #c084fc, 0 0 20px #c084fc",
                "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #818cf8, 0 0 40px #818cf8",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-9xl sm:text-[12rem] font-bold mb-6 text-white"
          >
            404
          </motion.div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="flex flex-col h-screen items-center justify-center bg-black text-white px-4 overflow-hidden relative">
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              y: [0, -1000],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: "100%",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-center z-10"
      >
        {/* Glitchy 404*/}
        <motion.div
          animate={{
            textShadow: [
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #818cf8, 0 0 40px #818cf8",
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #c084fc, 0 0 20px #c084fc",
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #818cf8, 0 0 40px #818cf8",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-9xl sm:text-[12rem] font-bold mb-6 text-white"
        >
          404
        </motion.div>

        {/* message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl font-light mb-4 px-4 text-gray-200"
        >
          {randomMessage}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mb-12 text-base font-light"
        >
          Don't worry, wrong turns may lead to righ paths sometimes.
        </motion.p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleHomeClick}
            className="px-8 py-3 bg-white text-black rounded-md font-medium text-base hover:bg-gray-100 transition-colors border border-gray-200"
          >
            Take Me Home
          </motion.button>

          {!isMobile ? (
            <motion.button
              id="runaway-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDesktopGame}
              animate={{
                x: position.x,
                y: position.y,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-8 py-3 bg-transparent text-white rounded-md font-medium text-base border border-gray-600 hover:border-gray-400 transition-colors"
            >
              {isRunning ? "Catch Me!" : "Play Game"}
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTapGame}
              className="px-8 py-3 bg-transparent text-white rounded-md font-medium text-base border border-gray-600 hover:border-gray-400 transition-colors"
            >
              {gameStarted ? `Tap ${5 - score} more times` : "Play Tap Game"}
            </motion.button>
          )}
        </div>

        {isRunning && !isMobile && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-gray-400 text-sm font-light"
          >
            Try to catch the button!
          </motion.p>
        )}

        {gameStarted && isMobile && score < 5 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-gray-400 text-sm font-light"
          >
            Keep tapping! {score}/5
          </motion.p>
        )}
      </motion.div>
    </main>
  );
}