"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  ChevronDown,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const skillCategories = [
  {
    id: "frontend",
    number: "01",
    name: "Front End",
    icon: Code2,
    color: "cyan",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Vue.js",
      "Inertia.js",
    ],
  },
  {
    id: "backend",
    number: "02",
    name: "Back End",
    icon: Server,
    color: "violet",
    description: "Developing server-side logic, APIs, and application systems.",
    skills: [
      "Laravel",
      "Django",
      "PHP",
      "Python",
    ],
  },
  {
    id: "database",
    number: "03",
    name: "Databases",
    icon: Database,
    color: "emerald",
    description: "Managing and working with structured application data.",
    skills: [
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    id: "tools",
    number: "04",
    name: "Tools & Workflow",
    icon: Wrench,
    color: "amber",
    description: "Tools I use for development, collaboration, and design.",
    skills: [
      "GitHub",
      "Git",
      "VS Code",
      "Vite",
      "Figma",
    ],
  },
];

export default function Skills() {
  const [open, setOpen] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            02 — Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What I can{" "}
            <span className="text-cyan-400">
              <TypeAnimation
                sequence={[
                  "build.",
                  2000,
                  "develop.",
                  2000,
                  "create.",
                  2000,
                  "code.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-500">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        {/* =====================================================
            SKILL CATEGORIES
        ====================================================== */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isOpen = open === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <motion.button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className={`group relative w-full overflow-hidden rounded-3xl border bg-[#0b111d] p-7 text-left transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-400/30 shadow-2xl shadow-cyan-500/10"
                      : "border-white/10 hover:border-cyan-400/20"
                  }`}
                >
                  {/* =================================================
                      BACKGROUND GLOW
                  ================================================== */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

                  {/* =================================================
                      HEADER
                  ================================================== */}

                  <div className="relative flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      {/* ICON */}

                      <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/30">
                        <Icon size={27} strokeWidth={1.7} />
                      </div>

                      {/* TITLE */}

                      <div>
                        <p className="font-mono text-xs tracking-[0.25em] text-cyan-400/50">
                          {category.number}
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-white">
                          {category.name}
                        </h3>
                      </div>

                    </div>

                    {/* ARROW */}

                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="text-gray-500 transition group-hover:text-cyan-400"
                    >
                      <ChevronDown size={22} />
                    </motion.div>

                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p className="relative mt-5 text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>

                  {/* =================================================
                      EXPANDABLE SKILLS
                  ================================================== */}

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeOut",
                        }}
                        className="relative overflow-hidden"
                      >
                        <div className="mt-6 border-t border-white/10 pt-6">

                          <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skill}
                                initial={{
                                  opacity: 0,
                                  y: 15,
                                  scale: 0.9,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                  scale: 1,
                                }}
                                transition={{
                                  delay: skillIndex * 0.07,
                                  duration: 0.25,
                                }}
                                whileHover={{
                                  y: -5,
                                  scale: 1.05,
                                }}
                                className="cursor-default rounded-xl border border-cyan-400/15 bg-cyan-400/5 px-4 py-2 font-mono text-sm text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}