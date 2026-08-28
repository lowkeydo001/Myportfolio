"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { Audiowide } from "next/font/google";
import { FormEvent, useState } from "react";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Portfolio Contact from ${name}`;

    const body = `
Hello Edsel,

My name is ${name}.

Email: ${email}

Message:
${message}

Best regards,
${name}
`;

    const mailtoUrl = `mailto:lorejoedsel@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            MAIN CONTACT CARD
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#0b111d] to-violet-500/10 p-8 md:p-12 lg:p-16"
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
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]"
          />

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative">

            {/* =================================================
                SECTION LABEL
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className={`${audiowide.className} text-sm uppercase tracking-[0.3em] text-cyan-400`}
            >
              06 — Contact
            </motion.p>

            {/* =================================================
                HEADING
            ================================================== */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
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
                delay: 0.1,
              }}
              className={`${audiowide.className} mt-5 max-w-4xl text-4xl leading-tight text-white md:text-6xl`}
            >
              Let's build something{" "}
              <span className="text-cyan-400">
                useful.
              </span>
            </motion.h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
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
                delay: 0.2,
              }}
              className="mt-6 max-w-2xl leading-8 text-gray-400"
            >
              Have a project, opportunity, or simply want to
              connect? Send me a message and I'll get back to you
              as soon as possible.
            </motion.p>

            {/* =====================================================
                MESSAGE AREA
            ====================================================== */}

            <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              {/* =================================================
                  LEFT SIDE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="flex flex-col justify-center"
              >

                <p
                  className={`${audiowide.className} text-sm uppercase tracking-[0.25em] text-cyan-400`}
                >
                  Get in touch
                </p>

                <h3
                  className={`${audiowide.className} mt-4 text-3xl leading-tight text-white md:text-4xl`}
                >
                  Have an idea?
                  <span className="block text-cyan-400">
                    Let's talk.
                  </span>
                </h3>

                <p className="mt-5 max-w-md leading-7 text-gray-500">
                  Whether it's a job opportunity, freelance
                  project, collaboration, or just a simple hello,
                  feel free to send me a message.
                </p>

                {/* STATUS */}

                <div className="mt-8 flex items-center gap-3">

                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
                  </span>

                  <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                    Available for opportunities
                  </span>

                </div>

              </motion.div>

              {/* =================================================
                  MESSAGE FORM
              ================================================== */}

              <motion.form
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                onSubmit={handleSubmit}
                className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl md:p-8"
              >

                {/* FORM TITLE */}

                <div className="mb-7">

                  <p
                    className={`${audiowide.className} text-sm uppercase tracking-widest text-white`}
                  >
                    Send me a message
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Fill out the form below to contact me.
                  </p>

                </div>

                {/* NAME */}

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Your Name
                  </label>

                  <div className="relative">

                    <User
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-[#070b14]/70 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02]"
                    />

                  </div>

                </div>

                {/* EMAIL */}

                <div className="mt-5">

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Your Email
                  </label>

                  <div className="relative">

                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-[#070b14]/70 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02]"
                    />

                  </div>

                </div>

                {/* MESSAGE */}

                <div className="mt-5">

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#070b14]/70 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02]"
                  />

                </div>

                {/* SEND BUTTON */}

                <button
                  type="submit"
                  className={`${audiowide.className} group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 text-sm uppercase tracking-wider text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20`}
                >
                  Send Message

                  <Send
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="mt-4 text-center text-xs text-gray-600">
                  Clicking send will open your email application.
                </p>

              </motion.form>

            </div>

            {/* =====================================================
                CONTACT ICONS
            ====================================================== */}

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
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mt-14 flex items-center justify-center"
            >

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-xl">

                {/* GMAIL */}

                <a
                  href="mailto:lorejoedsel@gmail.com"
                  aria-label="Email Edsel"
                  title="Email"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  <Mail
                    size={21}
                    className="transition duration-300 group-hover:scale-110"
                  />
                </a>

                {/* PHONE */}

                <a
                  href="tel:+639633735479"
                  aria-label="Call Edsel"
                  title="Phone"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  <Phone
                    size={21}
                    className="transition duration-300 group-hover:scale-110"
                  />
                </a>

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/edsel-lorejo-2a14a3431"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Edsel's LinkedIn"
                  title="LinkedIn"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  <FaLinkedinIn
                    size={20}
                    className="transition duration-300 group-hover:scale-110"
                  />
                </a>

                {/* LOCATION */}

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Iligan+City+Philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Edsel's location"
                  title="Location"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  <MapPin
                    size={21}
                    className="transition duration-300 group-hover:scale-110"
                  />
                </a>

              </div>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}