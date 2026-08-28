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
    }, 5800);

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
            scale: 1.04,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#070b14]"
        >
          {/* =================================================
              BACKGROUND GLOW
          ================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.12, 0.28, 0.12],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.2, 0.08],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]"
          />

          {/* =================================================
              LEFT FLOATING DOT
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-cyan-400"
          />

          {/* =================================================
              RIGHT FLOATING DOT
          ================================================== */}

          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[12%] top-[35%] h-2 w-2 rounded-full bg-blue-400"
          />

          {/* =================================================
              MAIN INTRO
          ================================================== */}

          <div className="relative z-10 w-full px-5 text-center sm:px-8">
            
            {/* =================================================
                MAIN TITLE - PURE WHITE
            ================================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.88,
              }}
              animate={{
                opacity: 1,
                y: [45, 0, -3, 0],
                scale: [0.88, 1, 1.015, 1],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  ease: "easeOut",
                },
                y: {
                  duration: 1.4,
                  times: [0, 0.65, 0.82, 1],
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: 1.4,
                  times: [0, 0.65, 0.82, 1],
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className={
                audiowide.className +
                " mx-auto max-w-[95vw] text-white text-[clamp(2.2rem,9vw,7rem)] leading-[1.15] font-normal uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              }
            >
              Hi, I'm Edsel M. Lorejo
            </motion.h1>

            {/* =================================================
                WELCOME - BLUE / CYAN
            ================================================== */}

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
                duration: 0.9,
                delay: 1.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                audiowide.className +
                " mt-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 bg-clip-text text-transparent text-[clamp(0.9rem,3vw,1.35rem)] uppercase tracking-[0.15em]"
              }
            >
              Welcome to my digital space.
            </motion.p>

            {/* =================================================
                DECORATIVE LINE
            ================================================== */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "140px",
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-8 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            />
          </div>

          {/* =================================================
              CORNER GLOWS
          ================================================== */}

          <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[100px]" />

          {/* =================================================
              VIGNETTE
          ================================================== */}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(7,11,20,0.45)_100%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

