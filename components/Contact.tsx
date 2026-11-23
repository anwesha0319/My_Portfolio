"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Heart, Send } from "lucide-react";
import { profile } from "@/data/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const socialLinks = [
    { 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/anwesha-chatterjee-567547251", 
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    },
    { 
      label: "GitHub", 
      href: "https://github.com/anwesha0319", 
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
    },
    { 
      label: "X (Twitter)", 
      href: "https://x.com/AnweshaCha42357", 
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    { 
      label: "Instagram", 
      href: "https://www.instagram.com/kya_yaar_anwesha", 
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xbgopzgo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">


        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl border border-white/[0.1] bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl p-8 md:p-12 shadow-2xl overflow-hidden"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--lavender)]/5 via-transparent to-purple-500/5 pointer-events-none" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--lavender)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Email and social */}
            <div>
              {/* "Let's talk" heading */}
              <h2 className="display text-[clamp(2.5rem,5vw,4rem)] font-medium text-white leading-[1.05] mb-6">
                Let's talk
              </h2>
              
              {/* Subheading */}
              <p className="text-lg text-[var(--text)]/80 max-w-[50ch] mb-10">
                Want to chat about a project, ask a question, or just say hi? Send me a message.
              </p>

              {/* Primary email - opens Gmail */}
              <div className="mb-10">
                <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-4 font-semibold" style={{ letterSpacing: '0.1em' }}>
                  Send me an email
                </p>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-[var(--text)] hover:text-white transition-colors break-all"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  <Mail className="w-7 h-7 text-white flex-shrink-0" />
                  <span className="break-all">{profile.email}</span>
                </a>
              </div>

              {/* Social links - icons only */}
              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/[0.08]">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="group w-12 h-12 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-[var(--lavender)]/20 hover:border-[var(--lavender)]/40 transition-all duration-300 text-[var(--lavender)]"
                  >
                    {link.svg}
                  </a>
                ))}
              </div>

              {/* Availability status */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75" />
                  </div>
                  <span className="text-sm text-[var(--text)]">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-6 font-semibold" style={{ letterSpacing: '0.1em' }}>
                Send a message
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--lavender)]/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--lavender)]/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--lavender)]/50 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--lavender)] text-[var(--ink)] font-medium hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
                    </>
                  )}
                </button>
                {submitStatus === "success" && (
                  <p className="text-sm text-green-500">Message sent successfully!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-500">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>

        {/* Footer tagline - removed */}
      </div>
    </section>
  );
}
