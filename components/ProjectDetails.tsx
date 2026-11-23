"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/src/data/projects";
import Button from "./Button";

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function ProjectDetails({
  project,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: ProjectDetailsProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Handle Escape key
  useEffect(() => {
    if (!project) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[var(--ink)]/95 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto"
          >
            <div className="min-h-full flex items-start justify-center py-8">
              <div className="w-full max-w-5xl bg-[var(--ink-2)] rounded-2xl border border-[var(--lavender)]/20 shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-[var(--ink-2)]/95 backdrop-blur-md border-b border-[var(--ink)] px-6 md:px-10 py-6 rounded-t-2xl">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[var(--lavender)] text-sm font-medium font-mono">
                          PROJECT {project.number}
                        </span>
                        <span className="text-[var(--muted)] text-xs">
                          {project.category}
                        </span>
                      </div>
                      <h2 className="display text-3xl md:text-4xl font-medium text-[var(--text)] leading-tight">
                        {project.title}
                      </h2>
                    </div>
                    <button
                      onClick={onClose}
                      className="ml-4 p-2 rounded-lg hover:bg-[var(--ink)] transition-colors"
                      aria-label="Close project details"
                    >
                      <X className="w-6 h-6 text-[var(--text)]" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 md:px-10 py-8 space-y-10">
                  {/* Project image placeholder */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="w-full aspect-video rounded-xl bg-gradient-to-br from-[var(--ink)] to-[var(--ink-2)] border border-[var(--lavender)]/10 flex items-center justify-center"
                  >
                    <div className="text-center space-y-2">
                      <div className="text-6xl font-mono text-[var(--lavender)]/20">
                        {project.number}
                      </div>
                      <p className="text-[var(--muted)] text-sm">Project preview</p>
                    </div>
                  </motion.div>

                  {/* Overview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <h3 className="text-xl font-medium text-[var(--text)] mb-3">
                      Overview
                    </h3>
                    <p className="text-[var(--text)] leading-relaxed opacity-85">
                      {project.fullDescription}
                    </p>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-medium text-[var(--text)] mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 rounded-lg bg-[var(--ink)] text-[var(--text)] text-sm border border-[var(--lavender)]/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Problem (if exists) */}
                  {project.problem && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <h3 className="text-xl font-medium text-[var(--text)] mb-3">
                        Problem
                      </h3>
                      <p className="text-[var(--text)] leading-relaxed opacity-85">
                        {project.problem}
                      </p>
                    </motion.div>
                  )}

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-xl font-medium text-[var(--text)] mb-4">
                      Key features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[var(--text)] opacity-85"
                        >
                          <span className="text-[var(--lavender)] mt-1.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Contributions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <h3 className="text-xl font-medium text-[var(--text)] mb-4">
                      My contribution
                    </h3>
                    <ul className="space-y-2">
                      {project.contributions.map((contribution, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[var(--text)] opacity-85"
                        >
                          <span className="text-[var(--lavender)] mt-1.5">•</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Results (if exists) */}
                  {project.results && project.results.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-[var(--ink)]/50 border border-[var(--lavender)]/20 rounded-xl p-6"
                    >
                      <h3 className="text-xl font-medium text-[var(--text)] mb-4">
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {project.results.map((result, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-[var(--text)] opacity-85"
                          >
                            <span className="text-[var(--lavender)] mt-1.5">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="flex flex-wrap gap-4 pt-4"
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          View on GitHub
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live demo
                        </Button>
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* Footer navigation */}
                <div className="border-t border-[var(--ink)] px-6 md:px-10 py-6 flex items-center justify-between rounded-b-2xl">
                  <button
                    onClick={onPrevious}
                    disabled={!hasPrevious}
                    className="flex items-center gap-2 text-sm text-[var(--text)] hover:text-[var(--lavender)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous project
                  </button>
                  <button
                    onClick={onNext}
                    disabled={!hasNext}
                    className="flex items-center gap-2 text-sm text-[var(--text)] hover:text-[var(--lavender)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Next project
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
