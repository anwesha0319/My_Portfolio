"use client";

import { useRef, useState, useEffect } from "react";
import { journey } from "@/data/content";

// Generate smooth cubic bezier path
function generateSmoothPath(points: { x: number; y: number }[], isVertical: boolean = false): string {
  if (points.length < 2) return "";
  
  let path = `M ${points[0].x} ${points[0].y}`;
  
  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i];
    const next = points[i + 1];
    
    if (isVertical) {
      const dy = (next.y - current.y) * 0.5;
      path += ` C ${current.x} ${current.y + dy}, ${next.x} ${current.y + dy}, ${next.x} ${next.y}`;
    } else {
      const dx = (next.x - current.x) * 0.5;
      path += ` C ${current.x + dx} ${current.y}, ${current.x + dx} ${next.y}, ${next.x} ${next.y}`;
    }
  }
  
  return path;
}

// Find distance along path to target point
function findPointDistance(path: SVGPathElement, targetX: number, targetY: number): number {
  const totalLength = path.getTotalLength();
  let closestDistance = Infinity;
  let closestLength = 0;
  
  for (let i = 0; i <= 100; i++) {
    const length = (i / 100) * totalLength;
    const point = path.getPointAtLength(length);
    const distance = Math.hypot(point.x - targetX, point.y - targetY);
    
    if (distance < closestDistance) {
      closestDistance = distance;
      closestLength = length;
    }
  }
  
  return closestLength;
}

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const mobileListRef = useRef<HTMLOListElement>(null);
  const mobileLineRef = useRef<SVGPathElement>(null);
  const desktopDotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileDotRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [desktopPath, setDesktopPath] = useState("");
  const [desktopViewBox, setDesktopViewBox] = useState({ width: 0, height: 0 });
  const [mobilePath, setMobilePath] = useState("");
  const [desktopDotDistances, setDesktopDotDistances] = useState<number[]>([]);
  const [mobileDotDistances, setMobileDotDistances] = useState<number[]>([]);
  const [desktopRevealed, setDesktopRevealed] = useState(0);
  const [mobileRevealed, setMobileRevealed] = useState(0);

  // Measure desktop layout and build path
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const measure = () => {
      if (!wrapperRef.current) return;
      
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const points: { x: number; y: number }[] = [];
      
      desktopDotRefs.current.forEach((dotEl) => {
        if (!dotEl) return;
        const dotRect = dotEl.getBoundingClientRect();
        points.push({
          x: dotRect.left + dotRect.width / 2 - wrapperRect.left,
          y: dotRect.top + dotRect.height / 2 - wrapperRect.top,
        });
      });
      
      if (points.length === journey.length) {
        setDesktopPath(generateSmoothPath(points));
        setDesktopViewBox({ width: wrapperRect.width, height: wrapperRect.height });
      }
    };
    
    measure();
    const resizeObserver = new ResizeObserver(measure);
    if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);
    
    document.fonts?.ready.then(() => setTimeout(measure, 100)).catch(() => {});
    
    return () => resizeObserver.disconnect();
  }, []);

  // Measure mobile layout and build path
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const measure = () => {
      if (!mobileListRef.current) return;
      
      const parentRect = mobileListRef.current.getBoundingClientRect();
      const points: { x: number; y: number }[] = [];
      
      mobileDotRefs.current.forEach((dotEl) => {
        if (!dotEl) return;
        const dotRect = dotEl.getBoundingClientRect();
        points.push({
          x: dotRect.left + dotRect.width / 2 - parentRect.left,
          y: dotRect.top + dotRect.height / 2 - parentRect.top,
        });
      });
      
      if (points.length === journey.length) {
        setMobilePath(generateSmoothPath(points, true));
      }
    };
    
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(() => setTimeout(measure, 100)).catch(() => {});
    
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Calculate desktop dot distances
  useEffect(() => {
    if (!lineRef.current || !desktopPath || !wrapperRef.current) return;
    
    const path = lineRef.current;
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const distances: number[] = [];
    
    desktopDotRefs.current.forEach((dotEl) => {
      if (!dotEl) {
        distances.push(0);
        return;
      }
      const dotRect = dotEl.getBoundingClientRect();
      const targetX = dotRect.left + dotRect.width / 2 - wrapperRect.left;
      const targetY = dotRect.top + dotRect.height / 2 - wrapperRect.top;
      distances.push(findPointDistance(path, targetX, targetY));
    });
    
    setDesktopDotDistances(distances);
  }, [desktopPath]);

  // Calculate mobile dot distances
  useEffect(() => {
    if (!mobileLineRef.current || !mobilePath || !mobileListRef.current) return;
    
    const path = mobileLineRef.current;
    const parentRect = mobileListRef.current.getBoundingClientRect();
    const distances: number[] = [];
    
    mobileDotRefs.current.forEach((dotEl) => {
      if (!dotEl) {
        distances.push(0);
        return;
      }
      const dotRect = dotEl.getBoundingClientRect();
      const targetX = dotRect.left + dotRect.width / 2 - parentRect.left;
      const targetY = dotRect.top + dotRect.height / 2 - parentRect.top;
      distances.push(findPointDistance(path, targetX, targetY));
    });
    
    setMobileDotDistances(distances);
  }, [mobilePath]);

  // Desktop animation with IntersectionObserver
  useEffect(() => {
    if (!lineRef.current || !desktopPath) return;
    
    const line = lineRef.current;
    const totalLength = line.getTotalLength();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Set up dash properties
    line.style.strokeDasharray = `${totalLength}`;
    line.style.strokeDashoffset = `${totalLength}`;
    
    if (prefersReducedMotion) {
      line.style.strokeDashoffset = "0";
      setDesktopRevealed(totalLength);
      return;
    }
    
    let hasTriggered = false;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true;
          
          const animation = line.animate(
            [{ strokeDashoffset: `${totalLength}` }, { strokeDashoffset: "0" }],
            { duration: 2600, delay: 100, easing: "cubic-bezier(0.45, 0, 0.25, 1)", fill: "forwards" }
          );
          
          let rafId: number;
          const update = () => {
            if (animation.currentTime !== null && typeof animation.currentTime === "number") {
              const progress = Math.min(animation.currentTime / 2600, 1);
              setDesktopRevealed(totalLength * progress);
            }
            if (animation.playState === "running") {
              rafId = requestAnimationFrame(update);
            } else {
              setDesktopRevealed(totalLength);
            }
          };
          
          rafId = requestAnimationFrame(update);
          animation.onfinish = () => {
            setDesktopRevealed(totalLength);
            if (rafId) cancelAnimationFrame(rafId);
          };
        }
      },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, [desktopPath]);

  // Mobile animation with IntersectionObserver
  useEffect(() => {
    if (!mobileLineRef.current || !mobilePath) return;
    
    const line = mobileLineRef.current;
    const totalLength = line.getTotalLength();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Set up dash properties
    line.style.strokeDasharray = `${totalLength}`;
    line.style.strokeDashoffset = `${totalLength}`;
    
    if (prefersReducedMotion) {
      line.style.strokeDashoffset = "0";
      setMobileRevealed(totalLength);
      return;
    }
    
    let hasTriggered = false;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true;
          
          const animation = line.animate(
            [{ strokeDashoffset: `${totalLength}` }, { strokeDashoffset: "0" }],
            { duration: 2600, delay: 100, easing: "cubic-bezier(0.45, 0, 0.25, 1)", fill: "forwards" }
          );
          
          let rafId: number;
          const update = () => {
            if (animation.currentTime !== null && typeof animation.currentTime === "number") {
              const progress = Math.min(animation.currentTime / 2600, 1);
              setMobileRevealed(totalLength * progress);
            }
            if (animation.playState === "running") {
              rafId = requestAnimationFrame(update);
            } else {
              setMobileRevealed(totalLength);
            }
          };
          
          rafId = requestAnimationFrame(update);
          animation.onfinish = () => {
            setMobileRevealed(totalLength);
            if (rafId) cancelAnimationFrame(rafId);
          };
        }
      },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, [mobilePath]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      aria-labelledby="journey-heading"
      className="w-full py-16 md:py-20"
      style={{ scrollMarginTop: "6rem" }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
        <h2 id="journey-heading" className="display text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] text-center">
          Experience.
        </h2>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block w-full max-w-[2000px] mx-auto" style={{ paddingInline: "clamp(1.5rem, 4vw, 5rem)", paddingBottom: "4rem" }}>
        <div ref={wrapperRef} className="relative">
          {desktopPath && desktopViewBox.width > 0 && (
            <svg
              className="absolute inset-0 pointer-events-none"
              width="100%"
              height="100%"
              viewBox={`0 0 ${desktopViewBox.width} ${desktopViewBox.height}`}
              preserveAspectRatio="none"
              style={{ overflow: "visible", zIndex: 0 }}
              aria-hidden="true"
            >
              <path
                d={desktopPath}
                stroke="var(--journey-line)"
                strokeWidth="2"
                fill="none"
                opacity="0.22"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                ref={lineRef}
                d={desktopPath}
                stroke="var(--journey-line)"
                strokeWidth={typeof window !== "undefined" && window.innerWidth >= 1920 ? "2.5" : "2"}
                fill="none"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{ filter: "drop-shadow(0 0 8px rgba(241, 238, 248, 0.4))" }}
              />
            </svg>
          )}

          <ol
            className="grid gap-4 relative"
            style={{
              gridTemplateColumns: `repeat(${journey.length}, 1fr)`,
              alignItems: "start",
              zIndex: 1,
            }}
          >
            {journey.map((item, index) => {
              const isCurrent = index === 0;
              const isHigh = index % 2 === 0;
              const wrapperWidth = desktopViewBox.width || 1200;
              const columnWidth = wrapperWidth / journey.length;
              const amplitude = Math.max(22, Math.min(columnWidth * 0.12, 36));
              const marginTop = isHigh ? 0 : 2 * amplitude;
              const isLit = desktopRevealed >= desktopDotDistances[index];
              
              return (
                <li key={index} className="relative flex flex-col items-center text-center px-2" style={{ marginTop: `${marginTop}px` }}>
                  <div ref={(el) => { desktopDotRefs.current[index] = el; }}>
                    <Dot isCurrent={isCurrent} isLit={isLit} />
                  </div>

                  <div style={{ marginTop: isCurrent ? "12px" : "14px" }} className="max-w-[200px]">
                    {isCurrent && (
                      <div className="mb-3">
                        <span className="sr-only">Current role: </span>
                        <span className="inline-block px-3 py-1 rounded-full bg-[var(--lavender)]/10 border border-[var(--lavender)]/30 text-xs text-[var(--lavender)] font-medium">
                          Current role
                        </span>
                      </div>
                    )}
                    
                    <time className="block text-sm text-[var(--muted)] mb-3 font-semibold">
                      {item.period}
                    </time>
                    <h3 className="display text-lg font-semibold text-[var(--text)] mb-2 leading-tight tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                      {item.title}
                    </h3>
                    <p className={`text-sm font-semibold mb-4 ${isCurrent ? "text-[var(--lavender)]" : "text-[var(--muted)]"}`}>
                      {item.org}
                    </p>
                    <p className="text-sm text-[var(--text)]/85 leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative max-w-6xl mx-auto px-6 md:px-10">
        {mobilePath && (
          <svg className="absolute left-6 top-0 pointer-events-none" width="48" height="100%" style={{ overflow: "visible" }} aria-hidden="true">
            <path
              d={mobilePath}
              stroke="var(--journey-line)"
              strokeWidth="2"
              fill="none"
              opacity="0.22"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              ref={mobileLineRef}
              d={mobilePath}
              stroke="var(--journey-line)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ filter: "drop-shadow(0 0 8px rgba(241, 238, 248, 0.4))" }}
            />
          </svg>
        )}

        <ol ref={mobileListRef} className="space-y-12">
          {journey.map((item, index) => {
            const isCurrent = index === 0;
            const isLit = mobileRevealed >= mobileDotDistances[index];

            return (
              <li key={index} className="flex gap-4 relative">
                <div ref={(el) => { mobileDotRefs.current[index] = el; }}>
                  <Dot isCurrent={isCurrent} isLit={isLit} isMobile />
                </div>

                <div className="flex-1 pb-4">
                  {isCurrent && (
                    <>
                      <span className="sr-only">Current role: </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-[var(--lavender)]/10 border border-[var(--lavender)]/30 text-xs text-[var(--lavender)] font-medium mb-3">
                        Current role
                      </span>
                    </>
                  )}
                  <time className="block text-sm text-[var(--muted)] mb-2 font-medium">
                    {item.period}
                  </time>
                  <h3 className="display text-lg font-medium text-[var(--text)] mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className={`text-base mb-3 font-medium ${isCurrent ? "text-[var(--lavender)]" : "text-[var(--muted)]"}`}>
                    {item.org}
                  </p>
                  <p className="text-sm text-[var(--text)]/75 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Dot({ isCurrent, isLit, isMobile = false }: { isCurrent: boolean; isLit: boolean; isMobile?: boolean }) {
  if (isCurrent) {
    return (
      <div
        className={`${isMobile ? "w-14 h-14" : "w-14 h-14 max-[640px]:w-12 max-[640px]:h-12"} rounded-full flex items-center justify-center flex-shrink-0`}
        style={{ background: "var(--lavender)", boxShadow: "0 0 24px rgba(185, 165, 255, 0.35)", zIndex: 10 }}
      >
        <div className={`${isMobile ? "w-2.5 h-2.5" : "w-2.5 h-2.5 max-[640px]:w-2 max-[640px]:h-2"} rounded-full bg-[var(--ink)]`} />
      </div>
    );
  }

  return (
    <div
      className={`${isMobile ? "w-12 h-12" : "w-12 h-12 max-[640px]:w-10 max-[640px]:h-10"} rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300`}
      style={{
        background: "var(--ink)",
        borderWidth: "1.5px",
        borderStyle: "solid",
        borderColor: isLit ? "var(--journey-line)" : "rgba(241, 238, 248, 0.45)",
        zIndex: 10,
        transform: isLit ? "scale(1.1)" : "scale(1)",
      }}
    >
      <div
        className={`${isMobile ? "w-2 h-2" : "w-2 h-2 max-[640px]:w-1.5 max-[640px]:h-1.5"} rounded-full transition-colors duration-250`}
        style={{ backgroundColor: isLit ? "var(--journey-line)" : "rgba(241, 238, 248, 0.45)" }}
      />
    </div>
  );
}
