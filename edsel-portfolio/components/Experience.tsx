"use client";

import { motion } from "motion/react";

const experience = [
  {
    role: "Mechanical Worker",
    company: "FDR Contractor – Republic Cement & Holcim Shutdown Projects",
    description: [
      "Assisted mechanical maintenance during plant shutdown activities.",
      "Followed safety procedures and completed assigned tasks.",
    ],
  },
  {
    role: "OJT Intern",
    company: "Misamis Oriental Provincial Hospital",
    description: [
      "Developed an MSS Patient Profiling Report System for encoding and managing patient survey/profile responses.",
      "Assisted with patient registration for the YAKAP program under PhilHealth.",
      "Assisted the Medical Records Section with preparing and processing documents.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
          04 — Experience
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Where I've <span className="text-cyan-400">worked.</span>
        </h2>

        <div className="relative mt-16">
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-14">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative md:pl-14"
              >
                <div className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-4 border-[#070b14] bg-cyan-400 md:block" />

                <p className="text-sm font-medium text-cyan-400">
                  {item.role}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.company}
                </h3>

                <ul className="mt-5 space-y-3 text-gray-400">
                  {item.description.map((desc) => (
                    <li key={desc} className="flex gap-3 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}