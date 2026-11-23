"use client";

import { useState } from "react";
import { profile } from "@/data/content";

export default function Portrait() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Decorative outline behind */}
      <div
        aria-hidden="true"
        className="absolute top-3 right-3 w-full h-full border border-[var(--lavender)] rounded-[999px_999px_1.5rem_1.5rem] pointer-events-none"
      />

      {/* Portrait container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[999px_999px_1.5rem_1.5rem] bg-[var(--ink-2)]">
        {!imageError ? (
          <img
            src={profile.portrait}
            alt={profile.portraitAlt}
            onError={() => setImageError(true)}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-[center_top]"
          />
        ) : (
          // Placeholder with initials
          <div className="w-full h-full flex items-center justify-center">
            <span className="display text-[5rem] text-[var(--muted)]">AC</span>
          </div>
        )}
      </div>
    </div>
  );
}
