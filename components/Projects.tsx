"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects, projectsSection } from "@/data/content";
import FolderCard from "./FolderCard";
import ProjectPanel from "./ProjectPanel";

export default function Projects() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const folderRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const selectedProject = projects.find((p) => p.slug === selectedSlug) || null;

  const handleFolderClick = (slug: string) => {
    if (selectedSlug === slug) {
      setSelectedSlug(null);
    } else {
      setSelectedSlug(slug);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 scroll-mt-24"
    >
      {/* Header */}
      <h2
        id="projects-heading"
        className="display text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] mb-4"
      >
        {projectsSection.heading}
      </h2>
      <p className="text-[var(--muted)] max-w-[48ch] mb-8">{projectsSection.intro}</p>

      {/* Scroll controls */}
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="w-10 h-10 rounded-lg border border-[var(--ink-2)] flex items-center justify-center hover:border-[var(--lavender)] transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="w-10 h-10 rounded-lg border border-[var(--ink-2)] flex items-center justify-center hover:border-[var(--lavender)] transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Horizontal scrollable folder container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto pb-6 pt-16 -mx-6 px-6 md:-mx-10 md:px-10"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "var(--ink-2) transparent",
        }}
      >
        <div className="flex gap-5 min-w-max">
          {projects.map((project) => {
            const buttonRef = (el: HTMLButtonElement | null) => {
              folderRefs.current[project.slug] = el;
            };

            return (
              <div key={project.slug} className="w-[17rem] flex-shrink-0">
                <FolderCard
                  ref={buttonRef}
                  slug={project.slug}
                  title={project.title}
                  tagline={project.tagline}
                  kind={project.kind}
                  image={project.image}
                  highlight={project.highlight}
                  stack={project.stack}
                  isOpen={selectedSlug === project.slug}
                  onClick={() => handleFolderClick(project.slug)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      {selectedProject && (
        <ProjectPanel
          project={selectedProject}
          onClose={() => setSelectedSlug(null)}
          returnFocusRef={{
            current: folderRefs.current[selectedProject.slug] ?? null,
          }}
        />
      )}
    </section>
  );
}
