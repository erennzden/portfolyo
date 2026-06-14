"use client";

import { personalInfo } from "@/data/content";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-card)]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold gradient-text mb-1">
              {personalInfo.name}
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              Yapay Zeka & Veri Mühendisi
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] hover:text-white hover:border-white/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-accent-green)] hover:border-[var(--color-accent-green)]/50 transition-all duration-300"
              aria-label="Email"
            >
              <HiMail size={16} />
            </a>
          </div>

          {/* Right: Copyright */}
          <p className="text-xs text-[var(--color-muted)]/60">
            © {currentYear} {personalInfo.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
