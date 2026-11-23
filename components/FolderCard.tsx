"use client";

import { forwardRef } from "react";

interface FolderCardProps {
  slug: string;
  title: string;
  tagline: string;
  kind: "case-study" | "project";
  image?: string;
  highlight: string;
  stack: string[];
  isOpen: boolean;
  onClick: () => void;
}

const FolderCard = forwardRef<HTMLButtonElement, FolderCardProps>(
  function FolderCard(
    {
      slug,
      title,
      tagline,
      kind,
      image,
      highlight,
      stack,
      isOpen,
      onClick,
    },
    ref
  ) {
    const isCaseStudy = kind === "case-study";
    
    // Front panel path for clipping
    const frontPanelPath = "M 0 72 Q 0 60 12 60 L 118 60 Q 132 60 142 68 L 150 74 Q 158 80 170 80 L 308 80 Q 320 80 320 92 L 320 208 Q 320 220 308 220 L 12 220 Q 0 220 0 208 Z";

    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={isOpen}
        aria-controls="project-panel"
        aria-label={`${title}, ${tagline}`}
        onClick={onClick}
        className="folder-button"
        data-folder-state={isOpen ? "open" : "closed"}
        style={{
          background: "none",
          border: 0,
          padding: 0,
          margin: 0,
          borderRadius: 0,
          boxShadow: "none",
          appearance: "none",
          color: "inherit",
          font: "inherit",
          textAlign: "inherit",
          width: "100%",
          display: "block",
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <div className="folder-wrapper transition-all duration-380 ease-folder">
          <div
            className="folder"
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "280 / 190",
              isolation: "isolate",
              perspective: "900px",
            }}
          >
            {/* Layer 1: Back panel */}
            <svg
              viewBox="0 0 280 190"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                inset: 0,
                height: "100%",
                width: "100%",
              }}
              aria-hidden="true"
            >
              <path
                d="M 0 35 Q 0 24 10 24 L 130 24 Q 142 24 149 17 L 162 7 Q 169 0 179 0 L 268 0 Q 280 0 280 10 L 280 180 Q 280 190 268 190 L 10 190 Q 0 190 0 180 Z"
                fill="rgba(255,255,255,0.07)"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Layer 2: Papers */}
            <div style={{ position: "absolute", inset: 0, zIndex: 2 }} aria-hidden="true">
              {/* Paper 1 - Overview */}
              <div
                className="paper paper-1 transition-all duration-380 ease-folder"
                style={{
                  position: "absolute",
                  left: "7%",
                  width: "86%",
                  top: "14%",
                  height: "58%",
                  background: "#2a2540",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "14px",
                  padding: "10px 12px",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.4)",
                  transformOrigin: "bottom center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--text)"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.9, flexShrink: 0 }}
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text)" }}>
                    Overview
                  </span>
                </div>
              </div>

              {/* Paper 2 - Stack */}
              <div
                className="paper paper-2 transition-all duration-380 ease-folder"
                style={{
                  position: "absolute",
                  left: "7%",
                  width: "86%",
                  top: "14%",
                  height: "58%",
                  background: "#332d52",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "14px",
                  padding: "10px 12px",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.4)",
                  transformOrigin: "bottom center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--text)"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ opacity: 0.9, flexShrink: 0 }}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text)" }}>
                      Stack
                    </span>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                    {stack.length} tools
                  </span>
                </div>
              </div>

              {/* Paper 3 - Result */}
              <div
                className="paper paper-3 transition-all duration-380 ease-folder"
                style={{
                  position: "absolute",
                  left: "7%",
                  width: "86%",
                  top: "14%",
                  height: "58%",
                  background: "#3d3660",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "14px",
                  padding: "10px 12px",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.4)",
                  transformOrigin: "bottom center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--text)"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ opacity: 0.9, flexShrink: 0 }}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text)" }}>
                      Result
                    </span>
                  </div>
                  <span 
                    style={{ 
                      fontSize: "0.75rem", 
                      color: "var(--muted)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: "50%"
                    }}
                  >
                    {highlight}
                  </span>
                </div>
              </div>
            </div>

            {/* Layer 3: Glow */}
            <div
              style={{
                position: "absolute",
                left: "-5%",
                bottom: "-10%",
                width: "70%",
                height: "60%",
                pointerEvents: "none",
                zIndex: 3,
                background: "radial-gradient(closest-side, rgba(185,165,255,0.35), transparent)",
                filter: "blur(8px)",
                opacity: isCaseStudy ? 0.5 : 0.35,
                transition: "opacity 380ms cubic-bezier(0.2, 0.7, 0.2, 1)",
              }}
              aria-hidden="true"
            />

            {/* Layer 4: Front glass panel with clip-path */}
            <div
              className="front-panel transition-all duration-380 ease-folder"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 4,
                background: "linear-gradient(160deg, rgba(58,52,86,0.92), rgba(30,26,48,0.94) 70%)",
                backdropFilter: "blur(22px) saturate(1.3)",
                WebkitBackdropFilter: "blur(22px) saturate(1.3)",
                clipPath: `path('M 0 63 Q 0 53 10 53 L 103 53 Q 115 53 123 60 L 131 66 Q 138 70 148 70 L 268 70 Q 280 70 280 80 L 280 180 Q 280 190 268 190 L 10 190 Q 0 190 0 180 Z')`,
                transformOrigin: "bottom center",
              }}
            />

            {/* Front panel edges */}
            <svg
              viewBox="0 0 280 190"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                inset: 0,
                height: "100%",
                width: "100%",
                zIndex: 4,
                pointerEvents: "none",
              }}
              aria-hidden="true"
            >
              <path
                d="M 0 63 Q 0 53 10 53 L 103 53 Q 115 53 123 60 L 131 66 Q 138 70 148 70 L 268 70 Q 280 70 280 80 L 280 180 Q 280 190 268 190 L 10 190 Q 0 190 0 180 Z"
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 0 64 Q 0 54 10 54 L 103 54 Q 115 54 123 61 L 131 67 Q 138 71 148 71 L 268 71 Q 280 71 280 81 L 280 180 Q 280 190 268 190 L 10 190 Q 0 190 0 180 Z"
                fill="none"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Focus outline (only visible on :focus-visible) */}
            <svg
              viewBox="0 0 280 190"
              preserveAspectRatio="none"
              className="focus-outline"
              style={{
                position: "absolute",
                inset: 0,
                height: "100%",
                width: "100%",
                zIndex: 6,
                pointerEvents: "none",
                opacity: 0,
                transition: "opacity 200ms",
              }}
              aria-hidden="true"
            >
              <path
                d="M 0 63 Q 0 53 10 53 L 103 53 Q 115 53 123 60 L 131 66 Q 138 70 148 70 L 268 70 Q 280 70 280 80 L 280 180 Q 280 190 268 190 L 10 190 Q 0 190 0 180 Z"
                fill="none"
                stroke="var(--lavender)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Layer 5: Front content */}
            <div style={{ position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none" }}>
              {/* Title and tagline */}
              <div style={{ position: "absolute", left: "8%", bottom: "16%", maxWidth: "65%" }}>
                <h3 className="display" style={{ fontSize: "1.125rem", fontWeight: 500, color: "var(--text)", lineHeight: 1.2, marginBottom: "4px" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.3 }}>
                  {tagline}
                </p>
              </div>

              {/* Button */}
              <div
                style={{
                  position: "absolute",
                  right: "7%",
                  bottom: "12%",
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "var(--lavender)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 200ms",
                }}
                aria-hidden="true"
              >
                {isOpen ? (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ink)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ink)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
);

export default FolderCard;
