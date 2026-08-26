"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-[#0b111d] p-8 md:p-12"
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            05 — Education
          </p>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10">
              <GraduationCap className="text-cyan-400" size={32} />
            </div>

            <div>
              <p className="text-sm text-cyan-400">2026 Graduate</p>

              <h2 className="mt-1 text-2xl font-bold md:text-3xl">
                Bachelor of Science in Information Technology
              </h2>

              <p className="mt-2 text-gray-400">
                Mindanao State University at Naawan
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}