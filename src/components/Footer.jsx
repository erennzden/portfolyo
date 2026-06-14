"use client";

import { personalInfo } from "@/data/content";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-900/50 flex justify-center">
      <div className="w-full max-w-3xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold gradient-text mb-1">
              {personalInfo.name}
            </p>
            <p className="text-sm text-slate-400">
              Yapay Zeka & Veri Mühendisi
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-slate-700 text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg border border-slate-700 text-slate-400 hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300"
              aria-label="Email"
            >
              <HiMail size={16} />
            </a>
          </div>

          {/* Right: Copyright */}
          <p className="text-xs text-slate-500">
            © {currentYear} {personalInfo.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
