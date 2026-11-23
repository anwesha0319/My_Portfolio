"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/src/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  // Define peeking files based on project
  const getPeekingFiles = () => {
    switch (project.id) {
      case "medvault":
        return ["Spring Boot", "React UI", "MySQL"];
      case "safety-assessment":
        return ["RAG Pipeline", "5s vs 30m", "Risk UI"];
      case "fitwell":
        return ["React Native", "Django REST", "AI Paper"];
      case "campus-mart":
        return ["Blur Model", "Price ML", "Figma"];
      case "rice-weed":
        return ["YOLOX-tiny", "PyTorch", "0.980 mAP"];
      case "club-management":
        return ["Club Pages", "Events", "Gallery"];
      case "diabetes-prediction":
        return ["Keras Model", "Web UI", "Best Team"];
      default:
        return ["Feature 1", "Feature 2", "Feature 3"];
    }
  };

  const peekingFiles = getPeekingFiles();

  return (
    <motion.button
      onClick={onClick}
      className="group relative w-full text-left"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {/* Main folder container */}
      <div className="relative">
        {/* Back folder layer - enhanced glassmorphism */}
        <div
          className="absolute inset-0 top-6 rounded-2xl border border-white/[0.15] bg-gradient-to-br from-white/[0.08] to-white/[0.04] backdrop-blur-xl transform translate-x-3 translate-y-3 shadow-xl"
          aria-hidden="true"
        />

        {/* Peeking files - visible on hover */}
        <div className="absolute -top-2 left-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {peekingFiles.map((file, index) => (
            <motion.div
              key={file}
              initial={{ y: 0, rotate: 0 }}
              whileHover={{ y: -8 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              className="absolute w-full h-16 bg-white/[0.12] backdrop-blur-xl border border-white/[0.2] rounded-lg shadow-lg"
              style={{
                top: `${index * -12}px`,
                transform: `rotate(${(index - 1) * 2}deg)`,
                zIndex: peekingFiles.length - index,
              }}
            >
              <div className="flex items-center gap-2 px-3 py-2">
                <FileText className="w-3 h-3 text-[var(--lavender)]" />
                <span className="text-[10px] text-[var(--text)] font-medium truncate">
                  {file}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Front folder - main card with strong glass effect */}
        <div className="relative top-6 rounded-2xl border border-white/[0.2] bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02] backdrop-blur-3xl overflow-hidden transition-all duration-300 group-hover:border-[var(--lavender)]/50 group-hover:bg-white/[0.12] shadow-2xl group-hover:shadow-[0_20px_60px_-15px_rgba(185,165,255,0.3)]">
          {/* Glossy overlay for extra depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-transparent to-transparent opacity-50 pointer-events-none" />
          
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </div>
          
          {/* Visual preview area with colorful gradient */}
          <div className="relative h-32 bg-gradient-to-br from-[var(--lavender)]/25 via-purple-500/15 to-pink-500/15 border-b border-white/[0.15] overflow-hidden">
            {/* Abstract background pattern */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--lavender)]/50 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/50 to-transparent rounded-full blur-2xl" />
            </div>
            
            {/* Project number badge */}
            <div className="absolute bottom-4 left-4">
              <div className="px-3 py-1 rounded-full bg-white/[0.15] backdrop-blur-xl border border-white/[0.25] shadow-lg">
                <span className="text-sm font-mono text-white/95 font-medium">
                  {project.number}
                </span>
              </div>
            </div>
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider">
                {project.category.split('/')[0].trim()}
              </span>
            </div>
          </div>

          {/* Content area */}
          <div className="relative p-6 bg-gradient-to-b from-transparent to-white/[0.02]">
            {/* Title with icon */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-xl font-medium text-[var(--text)] leading-tight flex-1">
                {project.title}
              </h3>
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] flex items-center justify-center group-hover:bg-[var(--lavender)]/25 group-hover:border-[var(--lavender)]/50 transition-all duration-300 shadow-lg">
                <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--lavender)] transition-colors" />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
              <span className="text-xs text-[var(--muted)] font-medium">
                {project.technologies.length} technologies
              </span>
              <div className="flex items-center gap-1 text-xs text-[var(--muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--lavender)]/60 shadow-[0_0_8px_rgba(185,165,255,0.6)]" />
                <span>{project.features.length} features</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
