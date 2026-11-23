"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile, about } from "@/data/content";
import Portrait from "./Portrait";
import Button from "./Button";

export default function HeroAboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const showImmediately = shouldReduceMotion || !hasAnimated;

  // Scroll animations for About content
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const aboutOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);

  const finalAboutOpacity = shouldReduceMotion ? 1 : aboutOpacity;
  const finalAboutY = shouldReduceMotion ? 0 : aboutY;

  return (
    <div ref={containerRef} className="relative">
      {/* About Section - Now the first section */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="min-h-screen max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 pt-40 flex items-center scroll-mt-24"
      >
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-8 lg:gap-12 items-center"
          style={{
            opacity: finalAboutOpacity,
            y: finalAboutY,
          }}
        >
          {/* Left column: Hi I'm + Role + Currently at */}
          <div className="space-y-8">
            <div>
              <h2 className="display text-[clamp(3rem,7vw,5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-[var(--text)]">
                Hi, I'm<br />{profile.firstName}.
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-lg md:text-xl text-[var(--text)] font-medium leading-tight">
                Computer Science Engineer<br />Full-stack Developer <br />&amp; Data Science Enthusiast.
              </p>
            </div>
          </div>

          {/* Center: Portrait (visible on mobile and desktop) */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[280px] lg:w-[320px]">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[var(--ink-2)]" 
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  transform: "rotate(-5deg)",
                }}
              >
                <img
                  src={profile.portrait}
                  alt={profile.portraitAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_20%] grayscale"
                  style={{
                    transform: "rotate(5deg) scale(1.1)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right column: Pitch + CTA */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed max-w-[30ch]">
              {profile.pitch}
            </p>

            <Button variant="primary" href="#projects">
              Explore projects →
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
