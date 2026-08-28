"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  Code2,
  Braces,
  Terminal,
  Database,
  GitBranch,
  Server,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

const floatingItems = [
  // LEFT
  { icon: Code2, x: "3%", y: "18%", delay: 0 },
  { icon: Braces, x: "8%", y: "52%", delay: 1.5 },
  { icon: Terminal, x: "5%", y: "76%", delay: 2.5 },

  // RIGHT
  { icon: Database, x: "94%", y: "17%", delay: 1 },
  { icon: GitBranch, x: "95%", y: "44%", delay: 2 },
  { icon: Server, x: "91%", y: "75%", delay: 0.5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#070b14] px-6 pt-24"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]"
      />

      {/* =====================================================
          FLOATING PROGRAMMING ICONS
      ====================================================== */}

      {floatingItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            className="pointer-events-none absolute hidden rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-4 text-cyan-400/30 shadow-lg backdrop-blur-sm md:block"
            style={{
              left: item.x,
              top: item.y,
            }}
            animate={{
              y: [0, -18, 0, 12, 0],
              x: [0, 8, -5, 5, 0],
              rotate: [0, 3, -3, 2, 0],
            }}
            transition={{
              duration: 7,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={28} strokeWidth={1.5} />
          </motion.div>
        );
      })}

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">

        {/* ===================================================
            LEFT SIDE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          {/* SMALL LABEL */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className={`${audiowide.className} mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400`}
          >
            Ready to Innovate
          </motion.p>

          {/* TITLE */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
              rotateX: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: "easeOut",
            }}
            className={`${audiowide.className} text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl`}
          >
            Front End

            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          {/* TYPING */}

          <motion.div
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
              delay: 0.8,
            }}
            className="mt-6 flex min-h-[40px] items-center text-xl font-medium text-gray-300 md:text-2xl"
          >
            <span className="mr-2 font-mono text-cyan-400">
              &gt;
            </span>

            <TypeAnimation
              sequence={[
                "I craft clean interfaces.",
                2000,
                "I turn ideas into websites.",
                2000,
                "I create interactive experiences.",
                2000,
                "I bring designs to life.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

            <span className="ml-1 animate-pulse text-cyan-400">
              |
            </span>
          </motion.div>

          {/* BUTTON */}

          <motion.div
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
              delay: 1.1,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault();

                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className={`${audiowide.className} group flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm text-black transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20`}
            >
              View My Work

              <ArrowDown
                size={18}
                className="transition duration-300 group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* ===================================================
            RIGHT SIDE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            rotateY: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="relative mx-auto flex h-[430px] w-full max-w-lg items-center justify-center"
        >
          {/* MAIN GLOW */}

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px]"
          />

          {/* OUTER ORBIT */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[330px] w-[330px] rounded-full border border-cyan-400/20"
          >
            <div className="absolute -right-2 top-1/2 h-4 w-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />
          </motion.div>

          {/* SECOND ORBIT */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[270px] w-[400px] rotate-[25deg] rounded-full border border-violet-400/15"
          >
            <div className="absolute -left-2 top-1/2 h-3 w-3 rounded-full bg-violet-400 shadow-lg shadow-violet-400/60" />
          </motion.div>

          {/* THIRD ORBIT */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[390px] w-[190px] rounded-full border border-blue-400/10"
          />

          {/* =================================================
              CENTER SPHERE
          ================================================== */}

          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-52 w-52 items-center justify-center rounded-full border border-cyan-300/30 bg-[#07111f]/80 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl"
          >
            {/* INNER GLOW */}

            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/20 blur-xl" />

            {/* INNER CIRCLE */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-8 rounded-full border border-dashed border-cyan-400/20"
            />

            {/* CODE */}

            <div className="relative text-center">
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`${audiowide.className} text-6xl text-cyan-300`}
              >
                {"< />"}
              </motion.div>

              <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
                Create · Build · Innovate
              </p>
            </div>
          </motion.div>

          {/* =================================================
              PARTICLES
          ================================================== */}

          <motion.span
            animate={{
              y: [-15, 15, -15],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute left-1/4 top-5 h-2 w-2 rounded-full bg-cyan-400"
          />

          <motion.span
            animate={{
              y: [15, -15, 15],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-5 right-1/4 h-2 w-2 rounded-full bg-violet-400"
          />

          <motion.span
            animate={{
              x: [-10, 10, -10],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
            className="absolute right-16 top-1/2 h-1.5 w-1.5 rounded-full bg-blue-400"
          />
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070b14] to-transparent" />
    </section>
  );
}