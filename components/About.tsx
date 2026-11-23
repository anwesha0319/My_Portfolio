"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { about, profile } from "@/data/content";
import Button from "./Button";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  const finalContentOpacity = shouldReduceMotion ? 1 : contentOpacity;
  const finalContentY = shouldReduceMotion ? 0 : contentY;

  return (
    <section
      ref={containerRef}
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen max-w-7xl mx-auto px-6 md:px-10 py-24 flex items-center"
    >
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
        style={{
          opacity: finalContentOpacity,
          y: finalContentY,
        }}
      >
        {/* Left column: Greeting & name */}
        <div className="space-y-8">
          <div>
            <p className="text-2xl md:text-3xl text-[var(--text)] mb-2">
              Hi, I'm
            </p>
            <h2 className="display text-[clamp(3rem,8vw,5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-[var(--text)]">
              {profile.firstName}.
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-[var(--text)] font-medium">
              {profile.shortRole}
            </p>
            <p className="text-base text-[var(--text)] opacity-85 leading-relaxed">
              {profile.pitch}
            </p>
          </div>

          {/* Facts in vertical list */}
          <dl className="space-y-4 pt-4 border-t border-[var(--ink-2)]">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs text-[var(--muted)] mb-1">
                  {fact.label}
                </dt>
                <dd className="text-sm text-[var(--text)]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column: Content */}
        <div className="space-y-8">
          <h3
            id="about-heading"
            className="display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] max-w-[20ch]"
          >
            {about.heading}
          </h3>

          <div className="space-y-5 max-w-[62ch]">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[1.0625rem] leading-[1.7] text-[var(--text)] opacity-85"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" href="#projects">
              See projects
            </Button>
            <Button variant="secondary" href="#contact">
              Get in touch
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
