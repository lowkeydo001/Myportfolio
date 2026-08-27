"use client";

import { motion } from "motion/react";
import { Code2, GraduationCap, Download } from "lucide-react";
import { useState } from "react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  const [animationKey, setAnimationKey] = useState(0);

  const aboutText = `
    I am a fresh Bachelor of Science in Information Technology graduate
    from Mindanao State University at Naawan. I am currently looking
    for an entry-level opportunity where I can apply my technical and
    organizational skills while continuing to learn and grow professionally.
    I am hardworking, reliable, willing to learn, and able to work well
    with a team. My experience includes software development, data encoding,
    file management, documentation, and assisting with organizational workflows.
  `
    .trim()
    .split(/\s+/);

  return (
    <section id="about" className="scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: false }}
          transition={{ duration: 0.7 }}
          onViewportEnter={() => {
            setAnimationKey((prev) => prev + 1);
          }}
        >
          {/* LABEL */}
          <p
            className={`${audiowide.className} text-sm uppercase tracking-[0.3em] text-cyan-400`}
          >
            01 — About Me
          </p>

          {/* TITLE */}
          <h2
            className={`${audiowide.className} mt-4 text-4xl leading-tight md:text-5xl`}
          >
            Hi, I'm{" "}
            <span className="text-cyan-400">Edsel M. Lorejo</span>
          </h2>

          {/* CONTENT */}
          <div className="mt-16 grid items-center gap-16 md:grid-cols-[0.8fr_1.2fr]">
            {/* ==============================
                PROFILE IMAGE
            =============================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                amount: 0.2,
                once: false,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative mx-auto w-full max-w-sm"
            >
              {/* GLOW */}
              <div className="absolute inset-0 -z-10 rounded-[40px] bg-cyan-400/10 blur-[70px]" />

              {/* ROTATING BORDER */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-5 rounded-[40px] border border-cyan-400/10"
              />

              {/* PHOTO */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 bg-[#0b111d] shadow-2xl shadow-cyan-500/10">
                <img
                  src="/profile-1.jpg"
                  alt="Edsel M. Lorejo"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b14]/50 via-transparent to-transparent" />
              </div>

              {/* FLOATING CODE ICON */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 top-12 hidden rounded-2xl border border-cyan-400/20 bg-[#0b111d]/90 p-4 text-cyan-400 shadow-xl backdrop-blur-xl sm:block"
              >
                <Code2 size={26} />
              </motion.div>

              {/* FLOATING GRADUATION ICON */}
              <motion.div
                animate={{
                  y: [8, -8, 8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-5 bottom-20 hidden rounded-2xl border border-violet-400/20 bg-[#0b111d]/90 p-4 text-violet-400 shadow-xl backdrop-blur-xl sm:block"
              >
                <GraduationCap size={26} />
              </motion.div>
            </motion.div>

            {/* ==============================
                TEXT CONTENT
            =============================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                amount: 0.2,
                once: false,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
            >
              {/* FALLING TEXT */}
              <motion.p
                key={animationKey}
                className="text-base leading-8 text-gray-200"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.025,
                    },
                  },
                }}
              >
                {aboutText.map((word, index) => (
                  <motion.span
                    key={`${animationKey}-${word}-${index}`}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: -45,
                        rotate: index % 2 === 0 ? -5 : 5,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                        transition: {
                          duration: 0.35,
                          ease: "easeOut",
                        },
                      },
                    }}
                    className="mr-[0.3em] inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>

              {/* DOWNLOAD RESUME */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  amount: 0.2,
                  once: false,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                }}
                className="mt-8"
              >
                <a
                  href="/resume.pdf"
                  download="Edsel-Lorejo-Resume.pdf"
                  className={`${audiowide.className} group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5`}
                >
                  <Download
                    size={18}
                    className="text-cyan-400 transition duration-300 group-hover:-translate-y-0.5"
                  />

                  Download Resume
                </a>
              </motion.div>

              {/* QUICK INFO */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {/* DEVELOPMENT */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    amount: 0.2,
                    once: false,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >
                  <Code2 size={22} className="text-cyan-400" />

                  <h3
                    className={`${audiowide.className} mt-3 text-sm text-white`}
                  >
                    Development
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Building modern and responsive web experiences.
                  </p>
                </motion.div>

                {/* CONTINUOUS LEARNING */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    amount: 0.2,
                    once: false,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-violet-400/20 hover:bg-white/[0.04]"
                >
                  <GraduationCap
                    size={22}
                    className="text-violet-400"
                  />

                  <h3
                    className={`${audiowide.className} mt-3 text-sm text-white`}
                  >
                    Continuous Learning
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Always improving my skills and exploring new technologies.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}