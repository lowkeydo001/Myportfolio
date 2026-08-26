"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
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
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-500/5 p-8 md:p-16"
        >
          {/* =====================================================
              BACKGROUND GLOW
          ====================================================== */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/5 blur-[100px]" />

          <div className="relative">
            {/* =================================================
                SECTION LABEL
            ================================================== */}

            <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
              06 — Contact
            </p>

            {/* =================================================
                HEADING
            ================================================== */}

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Let's build something
              <span className="text-cyan-400">
                {" "}
                useful.
              </span>
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p className="mt-6 max-w-xl leading-8 text-gray-400">
              I am open to entry-level opportunities where I can
              apply my skills, learn from experienced professionals,
              and contribute to a team.
            </p>

            {/* =================================================
                CONTACT CARDS
            ================================================== */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* =================================================
                  EMAIL
              ================================================== */}

              <a
                href="mailto:lorejoedsel@gmail.com"
                className="group rounded-2xl border border-white/10 bg-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <Mail
                  className="text-cyan-400 transition duration-300 group-hover:scale-110"
                  size={22}
                />

                <p className="mt-4 text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 break-all text-sm">
                  lorejoedsel@gmail.com
                </p>
              </a>

              {/* =================================================
                  PHONE
              ================================================== */}

              <a
                href="tel:+639633735479"
                className="group rounded-2xl border border-white/10 bg-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <Phone
                  className="text-cyan-400 transition duration-300 group-hover:scale-110"
                  size={22}
                />

                <p className="mt-4 text-sm text-gray-500">
                  Phone
                </p>

                <p className="mt-1 text-sm">
                  +63 963 337 5479
                </p>
              </a>

              {/* =================================================
                  LINKEDIN
              ================================================== */}

              <a
                href="https://www.linkedin.com/in/edsel-lorejo-2a14a3431"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <FaLinkedinIn
                  className="text-cyan-400 transition duration-300 group-hover:scale-110"
                  size={22}
                />

                <p className="mt-4 text-sm text-gray-500">
                  LinkedIn
                </p>

                <p className="mt-1 text-sm">
                  Connect with me
                </p>
              </a>

              {/* =================================================
                  LOCATION — GOOGLE MAPS
              ================================================== */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Iligan+City+Philippines"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <MapPin
                  className="text-cyan-400 transition duration-300 group-hover:scale-110"
                  size={22}
                />

                <p className="mt-4 text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-sm">
                  Iligan City, Philippines
                </p>
              </a>

            </div>

            {/* =================================================
                CONTACT BUTTON
            ================================================== */}

            <a
              href="mailto:lorejoedsel@gmail.com"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Contact Me

              <ArrowUpRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}