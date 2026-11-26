import type { Metadata, Viewport } from "next";
import { display, body, deva, beng } from "./fonts";
import Nav from "@/components/Nav";
import CodeBackground from "@/components/CodeBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anwesha Chatterjee | Computer Science Engineer & Full-stack Developer",
  description: "Portfolio of Anwesha Chatterjee. Computer Science Engineer and Full-stack Developer building RAG systems, machine learning projects, and thoughtful interfaces.",
  openGraph: {
    title: "Anwesha Chatterjee | Computer Science Engineer & Full-stack Developer",
    description: "Portfolio of Anwesha Chatterjee. Computer Science Engineer and Full-stack Developer building RAG systems, machine learning projects, and thoughtful interfaces.",
  },
};

export const viewport: Viewport = {
  themeColor: "#14121c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${display.variable} ${body.variable} ${deva.variable} ${beng.variable}`}
    >
      <body>
        <CodeBackground />
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--lavender)] focus:text-[var(--ink)] focus:px-4 focus:py-2 focus:rounded focus:font-medium"
        >
          Skip to content
        </a>
        <Nav />
        {children}
      </body>
    </html>
  );
}
