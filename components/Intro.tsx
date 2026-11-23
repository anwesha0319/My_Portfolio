"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/content";
import Portrait from "./Portrait";

export default function Intro() {
  const shouldReduceMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const showImmediately = shouldReduceMotion || !hasAnimated;

  return (
    <section
      id="top"
      className="min-h-screen max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-16 flex items-center justify-center"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Large role title */}
        <motion.div
          className="order-2 md:order-1"
          initial={showImmediately ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: showImmediately ? 0 : 0.8,
            delay: showImmediately ? 0 : 0.3,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          <div className="space-y-6">
            <div>
              <span className="text-[var(--muted)] text-base mb-2 block">
                &lt; {profile.role.split(' ')[0]} {/* AI */}
              </span>
              <h1 className="display text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.03em] text-[var(--text)]">
                {profile.role.split(' ').slice(1, 3).join(' ')} {/* engineer and */}
              </h1>
              <h1 className="display text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.03em] text-[var(--text)]">
                {profile.role.split(' ').slice(3).join(' ')} {/* full-stack developer */}
              </h1>
              <span className="text-[var(--muted)] text-base mt-2 block">
                /&gt;
              </span>
            </div>

            <div className="text-sm text-[var(--muted)] space-y-1">
              <p>@{new Date().getFullYear()}</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div
          className="order-1 md:order-2 flex justify-center md:justify-end"
          initial={showImmediately ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: showImmediately ? 0 : 0.8,
            delay: showImmediately ? 0 : 0.5,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          <div className="w-full max-w-sm">
            <Portrait />
            <motion.p
              className="text-xs text-[var(--muted)] mt-4 text-center"
              initial={showImmediately ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: showImmediately ? 0 : 0.5,
                delay: showImmediately ? 0 : 1.2,
              }}
            >
              [{profile.role.toUpperCase()}]
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Bottom caption */}
      <motion.div
        className="absolute bottom-8 left-6 right-6 md:left-10 md:right-10"
        initial={showImmediately ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: showImmediately ? 0 : 0.5,
          delay: showImmediately ? 0 : 1.4,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="h-px bg-[var(--ink-2)] w-full mb-3" />
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-[var(--muted)]">
            <span>{profile.location}</span>
            <span>{profile.availability}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
