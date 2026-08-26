"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            01 — About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Turning ideas into
            <span className="text-cyan-400"> useful solutions.</span>
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="leading-8 text-gray-400">
              I am a fresh Bachelor of Science in Information Technology
              graduate from Mindanao State University at Naawan. I am
              currently looking for an entry-level opportunity where I can
              apply my technical and organizational skills while continuing
              to learn and grow professionally.
            </p>

            <p className="leading-8 text-gray-400">
              I am hardworking, reliable, willing to learn, and able to work
              well with a team. My experience includes software development,
              data encoding, file management, documentation, and assisting
              with organizational workflows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}