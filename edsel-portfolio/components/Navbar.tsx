"use client";

import { useEffect, useState } from "react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (section) {
          const element = section as HTMLElement;

          if (scrollPosition >= element.offsetTop) {
            currentSection = item.href.replace("#", "");
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#070b14]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* =====================================================
            LOGO
        ====================================================== */}

        <div
          className={`${audiowide.className} select-none text-xl tracking-wide text-white`}
        >
          myportfolio
          <span className="text-cyan-400">.</span>
        </div>

        {/* =====================================================
            DESKTOP NAV
        ====================================================== */}

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const sectionName = item.href.replace("#", "");
            const isActive = activeSection === sectionName;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(sectionName);
                }}
                className={`${audiowide.className} relative py-2 text-xs uppercase tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {item.name}

                {/* WHITE UNDERLINE */}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-white transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          className={`${audiowide.className} rounded-lg border border-white/10 px-3 py-2 text-xs uppercase tracking-wider text-gray-400 transition hover:border-white/20 hover:text-white md:hidden`}
          onClick={() => {
            const menu = document.getElementById("mobile-menu");

            if (menu) {
              menu.classList.toggle("hidden");
            }
          }}
        >
          Menu
        </button>
      </div>

      {/* =====================================================
          MOBILE NAV
      ====================================================== */}

      <div
        id="mobile-menu"
        className="hidden border-t border-white/5 bg-[#070b14]/95 px-6 py-4 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => {
            const sectionName = item.href.replace("#", "");
            const isActive = activeSection === sectionName;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();

                  handleNavClick(sectionName);

                  document
                    .getElementById("mobile-menu")
                    ?.classList.add("hidden");
                }}
                className={`${audiowide.className} rounded-lg px-4 py-3 text-xs uppercase tracking-wider transition ${
                  isActive
                    ? "bg-white/5 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}