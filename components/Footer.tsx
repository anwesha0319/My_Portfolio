"use client";

import { profile, nav } from "@/data/content";
import FuzzyCritterFooter, { type Critter, type FooterColumn } from "@/components/ui/fuzzy-critter-footer";

export default function Footer() {
  // Map nav items to footer columns
  const exploreLinks = nav.map(item => ({
    label: item.label,
    href: item.href,
  }));

  const columns: FooterColumn[] = [
    {
      title: "Explore",
      links: exploreLinks,
    },
    {
      title: "Connect",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/anwesha-chatterjee-567547251" },
        { label: "GitHub", href: "https://github.com/anwesha0319" },
        { label: "X", href: "https://x.com/AnweshaCha42357" },
        { label: "Instagram", href: "https://www.instagram.com/kya_yaar_anwesha" },
      ],
    },
    {
      title: "Say hello",
      links: [
        { label: profile.email, href: `mailto:${profile.email}` },
        { label: profile.location, href: "#contact" },
      ],
    },
  ];

  const critters: Critter[] = [
    { shape: "cloud", colors: ["#f1eef8", "#ffffff"], eyes: "dashes", eyeColor: "#14121c", size: 1.08 },
    { shape: "flower", colors: ["#9b7fd9", "#b9a5ff"], eyes: "short", eyeColor: "#14121c", size: 0.86 },
    { shape: "cube", colors: ["#14121c", "#2a2540"], eyes: "pills", eyeColor: "#b9a5ff", size: 1.22 },
    { shape: "triangle", colors: ["#6b5a8e", "#b9a5ff"], eyes: "short", eyeColor: "#14121c", size: 1.05 },
    { shape: "bean", colors: ["#f1eef8", "#ffffff"], eyes: "big", eyeColor: "#14121c", size: 0.96 },
    { shape: "puff", colors: ["#14121c", "#2a2540"], eyes: "pills", eyeColor: "#b9a5ff", size: 0.95 },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Big sign-off row before footer */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          {/* Big static sign-off */}
          <div 
            className="flex-1"
            style={{ 
              minHeight: "1.3em",
            }}
          >
            <p 
              className="display text-[clamp(2.0rem,8vw,7rem)] font-medium text-[var(--text)]"
              style={{
                lineHeight: "0.8",
                letterSpacing: "-0.03em",
                paddingBottom: "0.1em",
              }}
            >
              See you around.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="text-sm text-[var(--muted)] hover:text-[var(--lavender)] transition-colors duration-200 self-start lg:self-end"
            aria-label="Back to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>

      <FuzzyCritterFooter
        wordmark={profile.name}
        name={profile.name}
        tagline={profile.shortRole}
        columns={columns}
        legal={[]}
        copyright={`© ${new Date().getFullYear()} ${profile.name}`}
        critters={critters}
        gravity={2600}
        bounce={0.32}
        wind={1}
        density={0.8}
        sound={true}
        volume={0.4}
        curve={false}
        idleHops={true}
        dropLabel=""
        className="site-footer [--color-border:var(--ink-2)] [--color-background:var(--ink)] [--color-foreground:var(--text)] [--color-muted-foreground:var(--muted)] [--color-primary:var(--lavender)]"
      />
    </>
  );
}
