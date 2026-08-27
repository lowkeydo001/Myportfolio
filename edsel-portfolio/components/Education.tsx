"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            EDUCATION CARD
        ====================================================== */}

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
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="rounded-3xl border border-white/10 bg-[#0b111d] p-8 md:p-12"
        >

          {/* SECTION LABEL */}

          <p
            className={`${audiowide.className} text-sm uppercase tracking-[0.3em] text-cyan-400`}
          >
            05 — Education
          </p>

          {/* =================================================
              EDUCATION CONTENT
          ================================================== */}

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-start">

            {/* ICON */}

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10">
              <GraduationCap
                className="text-cyan-400"
                size={32}
              />
            </div>

            {/* DETAILS */}

            <div className="flex-1">

              {/* GRADUATION YEAR */}

              <p
                className={`${audiowide.className} text-sm text-cyan-400`}
              >
                2026 Graduate
              </p>

              {/* DEGREE */}

              <h2
                className={`${audiowide.className} mt-2 text-2xl leading-tight md:text-3xl`}
              >
                Bachelor of Science in Information Technology
              </h2>

              {/* MAJOR */}

              <p
                className={`${audiowide.className} mt-3 text-lg text-white`}
              >
                Major in Database Systems
              </p>

              {/* SCHOOL */}

              <p className="mt-2 text-gray-400">
                Mindanao State University at Naawan
              </p>

              {/* DESCRIPTION */}

              <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">
                Specialized in database design, management, web development,
                and software development, with a strong foundation in
                building practical and scalable digital solutions.
              </p>

              {/* FOCUS TAGS */}

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Database Systems",
                  "Web Development",
                  "Software Development",
                  "UI/UX",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}