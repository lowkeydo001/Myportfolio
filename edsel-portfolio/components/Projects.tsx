"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Database, HeartPulse } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Pupil Health Management Software",
    category: "BSIT Capstone Project",
    description:
      "A software system developed for Naawan Central School to manage pupil health records, record and update pupil health information, and create reports for organizing and checking pupil health data.",
    icon: HeartPulse,
    year: "2025 — 2026",
  },
  {
    number: "02",
    title: "MSS Patient Profiling Report System",
    category: "Internship Project",
    description:
      "A system developed for encoding and managing patient survey and profile responses during my OJT experience at Misamis Oriental Provincial Hospital.",
    icon: Database,
    year: "OJT",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
          03 — Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Featured <span className="text-cyan-400">project.</span>
        </h2>

        <div className="mt-14 space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.01 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-12"
              >
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

                <div className="relative grid gap-8 md:grid-cols-[100px_1fr_auto] md:items-start">
                  <span className="font-mono text-sm text-gray-600">
                    {project.number}
                  </span>

                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <Icon className="text-cyan-400" size={24} />

                      <span className="text-sm text-cyan-400">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-2xl leading-8 text-gray-400">
                      {project.description}
                    </p>

                    <p className="mt-6 font-mono text-xs uppercase tracking-widest text-gray-600">
                      {project.year}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition group-hover:border-cyan-400 group-hover:text-cyan-400">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}