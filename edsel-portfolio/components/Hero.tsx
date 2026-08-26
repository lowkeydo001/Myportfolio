"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  Download,
  Mail,
  Code2,
  Braces,
  Terminal,
  Database,
  GitBranch,
  Server,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useState } from "react";

const floatingItems = [
  // LEFT SIDE
  { icon: Code2, x: "3%", y: "18%", delay: 0 },
  { icon: Braces, x: "48%", y: "18%", delay: 1.5 },
  { icon: Terminal, x: "5%", y: "76%", delay: 2.5 },

  // RIGHT SIDE
  { icon: Database, x: "94%", y: "17%", delay: 1 },
  { icon: GitBranch, x: "95%", y: "44%", delay: 2 },
  { icon: Server, x: "91%", y: "75%", delay: 0.5 },
];

export default function Hero() {
  const [photo, setPhoto] = useState(1);

  const currentPhoto =
    photo === 1 ? "/profile-1.jfif" : "/profile-2.jfif";

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-500/5 blur-[120px]" />

      {/* =====================================================
          FLOATING PROGRAMMER ICONS
          These stay on the OUTER SIDES
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
            LEFT SIDE — INTRODUCTION
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Small greeting */}

          <p className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            Hello, I'm
          </p>

          {/* NAME */}

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Edsel M.
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Lorejo
            </span>
          </h1>

          {/* =================================================
              TYPING ANIMATION
          ================================================== */}

          <div className="mt-6 flex min-h-[40px] items-center text-xl font-medium text-gray-300 md:text-2xl">
            <span className="mr-2 font-mono text-cyan-400">
              &gt;
            </span>

            <TypeAnimation
              sequence={[
                "BSIT Graduate",
                2000,
                "IT Professional",
                2000,
                "Aspiring Web Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

            <span className="ml-1 animate-pulse text-cyan-400">
              |
            </span>
          </div>

          {/* DESCRIPTION */}

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Fresh Bachelor of Science in Information Technology
            graduate looking for opportunities to apply my skills,
            gain experience, and contribute to a team.
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div className="mt-10 flex flex-wrap gap-4">
            {/* View Projects */}

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              View My Work

              <ArrowDown
                size={18}
                className="transition duration-300 group-hover:translate-y-1"
              />
            </a>

            {/* Download Resume */}

            <a
              href="/resume.pdf"
              download="Edsel-Lorejo-Resume.pdf"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold transition duration-300 hover:border-cyan-400/50 hover:bg-white/5"
            >
              <Download size={18} />

              Download Resume
            </a>
          </div>

          {/* =================================================
              EMAIL
          ================================================== */}

          <a
            href="mailto:lorejoedsel@gmail.com"
            className="mt-8 inline-flex items-center gap-3 text-sm text-gray-500 transition hover:text-cyan-400"
          >
            <Mail size={18} />

            lorejoedsel@gmail.com
          </a>
        </motion.div>

        {/* ===================================================
            RIGHT SIDE — PROFILE PHOTO
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: 3,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* =================================================
              OUTER ROTATING RING
          ================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -inset-6 rounded-[40px] border border-cyan-400/10"
          />

          {/* =================================================
              SECOND ROTATING RING
          ================================================== */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -inset-12 rounded-[50px] border border-violet-400/5"
          />

          {/* =================================================
              PHOTO CARD
          ================================================== */}

          <motion.button
            onClick={() => setPhoto(photo === 1 ? 2 : 1)}
            whileHover={{
              scale: 1.03,
              rotate: -1,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0b111d] shadow-2xl shadow-cyan-500/10"
          >
            {/* PHOTO */}

            <Image
              src={currentPhoto}
              alt="Edsel M. Lorejo"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            {/* DARK GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* =================================================
                CLICK INDICATOR
            ================================================== */}
          </motion.button>

          {/* =================================================
              FLOATING LABEL — LEFT OF PHOTO
          ================================================== */}

          <motion.div
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-8 top-16 hidden rounded-2xl border border-white/10 bg-[#0b111d]/90 px-4 py-3 font-mono text-xs text-cyan-400 shadow-xl backdrop-blur-xl sm:block"
          >
            {"<developer />"}
          </motion.div>

          {/* =================================================
              FLOATING LABEL — RIGHT OF PHOTO
          ================================================== */}

          <motion.div
            animate={{
              y: [8, -8, 8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-8 bottom-20 hidden rounded-2xl border border-white/10 bg-[#0b111d]/90 px-4 py-3 font-mono text-xs text-violet-400 shadow-xl backdrop-blur-xl sm:block"
          >
            {"{ IT Graduate }"}
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070b14] to-transparent" />
    </section>
  );
}