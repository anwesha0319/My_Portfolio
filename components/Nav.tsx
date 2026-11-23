"use client";

import { useState, useEffect } from "react";
import { nav } from "@/data/content";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll-spy
  useEffect(() => {
    const sections = nav.map((item) => {
      const id = item.href.replace("#", "");
      return document.getElementById(id);
    }).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[var(--ink)]/95 backdrop-blur-md border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ul className="flex items-center justify-center gap-8 py-6">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={activeSection === item.href ? "location" : undefined}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href
                    ? "text-[var(--lavender)]"
                    : "text-[var(--text)] hover:text-[var(--lavender)]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
