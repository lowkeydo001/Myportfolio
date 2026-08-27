"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Database,
  HeartPulse,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

const projects = [
  {
    number: "01",
    title: "Pupil Health Management Software",
    category: "BSIT Capstone Project",
    description:
      "A web-based health management system developed for Naawan Central School to organize pupil health records, update medical information, and generate health reports through a centralized digital platform.",
    icon: HeartPulse,
    year: "2025 — 2026",
    technologies: [
      "Laravel",
      "Vue.js",
      "Inertia.js",
      "PostgreSQL",
    ],
    views: Array.from(
      { length: 11 },
      (_, index) =>
        `/${String(index + 1).padStart(2, "0")}.png`
    ),
  },

  {
    number: "02",
    title: "MSS Patient Profiling Report System",
    category: "Internship Project",
    description:
      "A patient profiling and reporting system developed during my internship to organize patient information, manage survey responses, and generate reports through a centralized digital platform.",
    icon: Database,
    year: "OJT",
    technologies: [
      "Laravel",
      "Vue.js",
      "Inertia.js",
      "PostgreSQL",
    ],
    views: ["/mss.jfif"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<number | null>(null);

  const [currentView, setCurrentView] = useState(0);

  const activeProject =
    selectedProject !== null
      ? projects[selectedProject]
      : null;

  const openProject = (index: number) => {
    setSelectedProject(index);
    setCurrentView(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentView(0);
  };

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const nextView = () => {
    if (!activeProject) return;

    setCurrentView(
      (previous) =>
        (previous + 1) % activeProject.views.length
    );
  };

  const previousView = () => {
    if (!activeProject) return;

    setCurrentView(
      (previous) =>
        (previous - 1 + activeProject.views.length) %
        activeProject.views.length
    );
  };

  return (
    <>
      {/* ============================================================
          PROJECTS SECTION
      ============================================================ */}

      <section
        id="projects"
        className="scroll-mt-24 px-5 py-24 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* ========================================================
              SECTION HEADER
          ======================================================== */}

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
              duration: 0.6,
            }}
          >
            <p
              className={`${audiowide.className} text-sm uppercase tracking-[0.3em] text-cyan-400`}
            >
              03 — Projects
            </p>

            <h2
              className={`${audiowide.className} mt-4 text-4xl leading-tight md:text-5xl`}
            >
              Featured{" "}
              <span className="text-cyan-400">
                projects.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Selected systems and applications developed
              throughout my academic and internship experience.
            </p>
          </motion.div>

          {/* ========================================================
              TWO PROJECTS SIDE BY SIDE
          ======================================================== */}

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">

            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-2xl md:p-7"
                >

                  {/* ==================================================
                      BACKGROUND GLOW
                  =================================================== */}

                  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/5 blur-[90px] transition duration-700 group-hover:bg-cyan-400/10" />

                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/5 blur-[90px]" />

                  {/* ==================================================
                      PROJECT HEADER
                  =================================================== */}

                  <div className="relative">

                    {/* NUMBER + CATEGORY */}

                    <div className="flex items-center justify-between">

                      <span className="font-mono text-xs text-gray-600">
                        {project.number}
                      </span>

                      <div className="flex items-center gap-2">

                        <Icon
                          size={18}
                          className="text-cyan-400"
                        />

                        <span className="text-xs text-cyan-400">
                          {project.category}
                        </span>

                      </div>

                    </div>

                    {/* TITLE */}

                    <h3
                      className={`${audiowide.className} mt-6 text-xl leading-tight md:text-2xl xl:text-3xl`}
                    >
                      {project.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-4 min-h-[72px] text-sm leading-6 text-gray-400">
                      {project.description}
                    </p>

                    {/* TECHNOLOGIES */}

                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-2.5 py-1 font-mono text-[10px] text-cyan-300/80"
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                  {/* ==================================================
                      IMAGE PREVIEW
                  =================================================== */}

                  <div className="relative mt-7">

                    <button
                      type="button"
                      onClick={() => openProject(index)}
                      className="group/preview relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-[#02050a] transition duration-500 hover:border-cyan-400/40"
                    >

                      {/* IMAGE CONTAINER */}

                      <div className="relative flex h-[230px] w-full items-center justify-center overflow-hidden bg-[#02050a] md:h-[250px] xl:h-[270px]">

                        <Image
                          src={project.views[0]}
                          alt={`${project.title} preview`}
                          fill
                          className="object-contain p-2 transition duration-700 group-hover/preview:scale-[1.025]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* OVERLAY */}

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {/* CENTER PREVIEW ICON */}

                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-black/60 text-cyan-400 opacity-0 shadow-xl backdrop-blur-md transition duration-300 group-hover/preview:opacity-100">
                            <Maximize2 size={18} />
                          </div>

                        </div>

                        {/* BOTTOM INFO */}

                        <div className="absolute bottom-3 left-3">

                          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400">
                            View project
                          </p>

                        </div>

                        <div className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-[9px] text-gray-300 backdrop-blur-md">
                          {project.views.length === 1
                            ? "01 VIEW"
                            : `${String(
                                project.views.length
                              ).padStart(2, "0")} VIEWS`}
                        </div>

                      </div>

                    </button>

                  </div>

                  {/* ==================================================
                      FOOTER
                  =================================================== */}

                  <div className="relative mt-6 flex items-center justify-between">

                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
                      {project.year}
                    </p>

                    <button
                      type="button"
                      onClick={() => openProject(index)}
                      className={`${audiowide.className} inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-[10px] text-cyan-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10`}
                    >
                      VIEW

                      <ArrowUpRight size={14} />
                    </button>

                  </div>

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ============================================================
          FULLSCREEN IMAGE PREVIEW
      ============================================================ */}

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl md:p-8"
            onClick={closeProject}
          >

            {/* ======================================================
                MODAL
            ======================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative flex max-h-[94vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#080c15] shadow-2xl"
            >

              {/* ==================================================
                  HEADER
              =================================================== */}

              <div className="flex flex-shrink-0 items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">

                <div>

                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-cyan-400">
                    {activeProject.category}
                  </p>

                  <h3
                    className={`${audiowide.className} mt-1 text-sm md:text-lg`}
                  >
                    {activeProject.title}
                  </h3>

                </div>

                <button
                  type="button"
                  onClick={closeProject}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                  aria-label="Close preview"
                >
                  <X size={19} />
                </button>

              </div>

              {/* ==================================================
                  IMAGE
              =================================================== */}

              <div className="relative min-h-0 flex-1 bg-[#02050a]">

                <div className="relative h-[60vh] w-full md:h-[68vh]">

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={currentView}
                      initial={{
                        opacity: 0,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >

                      <Image
                        src={
                          activeProject.views[
                            currentView
                          ]
                        }
                        alt={`${activeProject.title} view ${
                          currentView + 1
                        }`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                      />

                    </motion.div>

                  </AnimatePresence>

                </div>

                {/* PREVIOUS */}

                {activeProject.views.length > 1 && (
                  <button
                    type="button"
                    onClick={previousView}
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition hover:border-cyan-400 hover:text-cyan-400"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                )}

                {/* NEXT */}

                {activeProject.views.length > 1 && (
                  <button
                    type="button"
                    onClick={nextView}
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition hover:border-cyan-400 hover:text-cyan-400"
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>
                )}

                {/* COUNTER */}

                {activeProject.views.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-4 py-2 font-mono text-xs text-white backdrop-blur-md">
                    {String(currentView + 1).padStart(
                      2,
                      "0"
                    )}{" "}
                    /{" "}
                    {String(
                      activeProject.views.length
                    ).padStart(2, "0")}
                  </div>
                )}

              </div>

              {/* ==================================================
                  THUMBNAILS - ONLY PUPIL PROJECT
              =================================================== */}

              {activeProject.views.length > 1 && (
                <div className="flex-shrink-0 border-t border-white/10 bg-[#070b13] px-4 py-3">

                  <div className="flex gap-2 overflow-x-auto pb-1">

                    {activeProject.views.map(
                      (image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() =>
                            setCurrentView(index)
                          }
                          className={`relative h-14 w-24 flex-shrink-0 overflow-hidden rounded-lg border bg-[#03060c] transition ${
                            currentView === index
                              ? "border-cyan-400"
                              : "border-white/10 opacity-50 hover:opacity-100"
                          }`}
                        >

                          <Image
                            src={image}
                            alt={`Project view ${
                              index + 1
                            }`}
                            fill
                            className="object-contain"
                            sizes="96px"
                          />

                        </button>
                      )
                    )}

                  </div>

                </div>
              )}

              {/* ==================================================
                  FOOTER
              =================================================== */}

              <div className="flex flex-shrink-0 flex-col gap-3 border-t border-white/10 bg-[#080c15] px-5 py-4 md:flex-row md:items-center md:justify-between md:px-7">

                {/* TECHNOLOGIES */}

                <div className="flex flex-wrap items-center gap-2">

                  {activeProject.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] text-gray-400"
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>

                {/* NAVIGATION */}

                {activeProject.views.length > 1 && (
                  <div className="flex items-center gap-2">

                    <button
                      type="button"
                      onClick={previousView}
                      className="flex h-9 items-center gap-2 rounded-full border border-white/10 px-4 text-[10px] text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      <ArrowLeft size={14} />
                      PREV
                    </button>

                    <button
                      type="button"
                      onClick={nextView}
                      className="flex h-9 items-center gap-2 rounded-full border border-white/10 px-4 text-[10px] text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      NEXT
                      <ArrowRight size={14} />
                    </button>

                  </div>
                )}

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}