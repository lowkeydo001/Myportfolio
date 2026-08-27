"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export default function Intro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showIntro && (
        <motion.div
          initial={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#070b14]"
        >
          {/* =================================================
              BACKGROUND GLOW
          ================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]"
          />

          {/* =================================================
              FLOATING DOT — LEFT
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[20%] top-[25%] h-2 w-2 rounded-full bg-cyan-400"
          />

          {/* =================================================
              FLOATING DOT — RIGHT
          ================================================== */}

          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[20%] top-[35%] h-2 w-2 rounded-full bg-violet-400"
          />

          {/* =================================================
              MAIN INTRO
          ================================================== */}

          <div className="relative z-10 px-6 text-center">

            {/* HELLO */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mb-3 text-lg font-medium tracking-wide text-gray-400 sm:text-xl"
            >
              Hello, I'm
            </motion.p>

            {/* NAME */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: "easeOut",
              }}
              className={`${audiowide.className} bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-4xl uppercase tracking-wide text-transparent sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              EDSEL M. LOREJO
            </motion.h1>

            {/* WELCOME */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: "easeOut",
              }}
              className={`${audiowide.className} mt-6 text-base uppercase tracking-wider text-white/80 sm:text-lg md:text-xl`}
            >
              Welcome to my Portfolio Website
            </motion.p>

            {/* LOADING LINE */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "120px",
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1.1,
                ease: "easeOut",
              }}
              className="mx-auto mt-8 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-400"
            />
          </div>

          {/* =================================================
              CORNER GLOW
          ================================================== */}

          <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-[100px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}