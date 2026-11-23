"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronDown, ExternalLink, GitBranch } from "lucide-react";
import SkillChip from "./SkillChip";

interface Project {
  slug: string;
  title: string;
  tagline: string;
  kind: "case-study" | "project";
  label?: string;
  org?: string;
  image?: string;
  highlight: string;
  stack: string[];
  href: string;
  lead?: string;
  sections?: Array<{ heading: string; body: string }>;
  note?: string;
  description?: string;
  longDescription?: string;
}

interface ProjectPanelProps {
  project: Project | null;
  onClose: () => void;
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
}

export default function ProjectPanel({ project, onClose, returnFocusRef }: ProjectPanelProps) {
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [accordionOpen, setAccordionOpen] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (project && panelRef.current && titleRef.current) {
      // Scroll panel into view
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      // Focus title
      titleRef.current.focus();
    }
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && project) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [project, onClose]);

  useEffect(() => {
    if (!project && returnFocusRef.current) {
      returnFocusRef.current.focus();
    }
  }, [project, returnFocusRef]);

  useEffect(() => {
    if (project) {
      setImageError(false);
    }
  }, [project]);

  if (!project) return null;

  const isCaseStudy = project.kind === "case-study";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.slug}
        ref={panelRef}
        id="project-panel"
        role="region"
        aria-labelledby="project-panel-title"
        className="mt-12 border-t border-[var(--ink-2)] pt-10"
        style={{ scrollMarginTop: "6rem" }}
        initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.1 : project ? 0.35 : 0.25,
          ease: "easeOut",
        }}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-[var(--muted)]">
            {isCaseStudy && project.label ? project.label : "Project details"}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="w-11 h-11 rounded-lg border border-[var(--ink-2)] flex items-center justify-center hover:border-[var(--lavender)] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Case study layout */}
        {isCaseStudy && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            {/* Left column */}
            <div className="md:col-span-5">
              <h3
                ref={titleRef}
                id="project-panel-title"
                tabIndex={-1}
                className="display text-[clamp(2rem,4vw,3rem)] font-medium leading-tight mb-3 outline-none"
              >
                {project.title}
              </h3>
              {project.org && <p className="text-[var(--muted)] mb-8">{project.org}</p>}

              {project.lead && (
                <p className="display text-[clamp(1.375rem,2.4vw,1.75rem)] leading-[1.35] text-[var(--text)] mb-8">
                  {project.lead}
                </p>
              )}

              {/* Stack chips */}
              <ul className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tool) => (
                  <SkillChip key={tool} name={tool} />
                ))}
              </ul>

              {/* Screenshot frame (if image exists) */}
              {project.image && !imageError && (
                <div className="rounded-3xl bg-[var(--ink-2)] border border-[var(--lavender)]/40 p-8 aspect-[16/10] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="rounded-xl max-w-full shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    onError={() => setImageError(true)}
                  />
                </div>
              )}
            </div>

            {/* Right column */}
            <div className="md:col-span-7 space-y-10">
              {project.sections?.map((section, i) => (
                <div key={i}>
                  <h4 className="display text-[1.75rem] font-medium mb-3">{section.heading}</h4>
                  <p className="text-[1.0625rem] text-[var(--text)]/80 leading-[1.7] max-w-[60ch]">
                    {section.body}
                  </p>
                </div>
              ))}

              {project.note && (
                <p className="text-sm text-[var(--muted)] mt-6">{project.note}</p>
              )}
            </div>
          </div>
        )}

        {/* Project layout */}
        {!isCaseStudy && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Screenshot */}
            <div className="order-2 md:order-1">
              <div className="rounded-3xl bg-[var(--ink-2)] border border-[var(--lavender)]/40 p-8 aspect-[16/10] flex items-center justify-center">
                {project.image && !imageError ? (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="rounded-xl max-w-full shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="rounded-xl bg-[var(--ink)] w-full h-full flex items-center justify-center">
                    <p className="display text-2xl text-[var(--muted)]">{project.title}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="order-1 md:order-2">
              <h3
                ref={titleRef}
                id="project-panel-title"
                tabIndex={-1}
                className="display text-[clamp(2rem,4vw,3rem)] font-medium leading-tight mb-2 outline-none"
              >
                {project.title}
              </h3>
              <p className="text-[var(--muted)] mb-6">{project.tagline}</p>

              <div className="border-t border-[var(--ink-2)] pt-6">
                {/* Accordion */}
                <button
                  type="button"
                  onClick={() => setAccordionOpen(!accordionOpen)}
                  aria-expanded={accordionOpen}
                  aria-controls="project-accordion-content"
                  className="w-full flex justify-between items-center text-left mb-4 hover:text-[var(--lavender)] transition-colors"
                >
                  <span className="font-medium">Project details</span>
                  <ChevronDown
                    size={20}
                    className="transition-transform duration-250"
                    style={{ transform: accordionOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {accordionOpen && (
                    <motion.div
                      id="project-accordion-content"
                      initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                      className="space-y-6 overflow-hidden"
                    >
                      {project.description && (
                        <p className="text-lg text-[var(--text)]">{project.description}</p>
                      )}

                      {/* Stack chips */}
                      <ul className="flex flex-wrap gap-2">
                        {project.stack.map((tool) => (
                          <SkillChip key={tool} name={tool} />
                        ))}
                      </ul>

                      {project.highlight && (
                        <p className="text-lg text-[var(--text)] font-medium">{project.highlight}</p>
                      )}

                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--ink-2)] hover:border-[var(--lavender)] transition-colors"
                        >
                          <GitBranch size={16} />
                          <span>Source</span>
                          <div className="w-6 h-6 rounded bg-[var(--lavender)]/10 flex items-center justify-center">
                            <ExternalLink size={14} />
                          </div>
                        </a>
                      )}

                      {project.longDescription && (
                        <p className="text-[var(--text)]/80 leading-[1.7] max-w-[60ch]">
                          {project.longDescription}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
