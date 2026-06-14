"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/content";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiArrowDown, HiDownload, HiMail } from "react-icons/hi";

function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        return typingSpeed;
      } else {
        return pauseTime;
      }
    } else {
      if (charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        return deletingSpeed;
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return typingSpeed;
      }
    }
  }, [texts, textIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextDelay = tick();
      if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [tick, charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

export default function Hero() {
  const displayText = useTypingEffect(personalInfo.titles);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 hero-grid radial-overlay"
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--color-accent)]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--color-accent-green)]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--color-accent-light)] text-lg sm:text-xl font-medium mb-4 tracking-wide"
        >
          Merhaba, Ben
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          variants={itemVariants}
          className="h-10 sm:h-12 flex items-center justify-center mb-8"
        >
          <span className="text-lg sm:text-2xl text-[var(--color-muted)] font-light">
            {displayText}
            <span className="typing-cursor" />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--color-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[var(--color-accent)]/25 hover:shadow-[var(--color-accent)]/40"
          >
            <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
            Projelerimi İncele
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 text-[var(--color-foreground)] font-semibold rounded-xl transition-all duration-300 hover:bg-white/5"
          >
            <HiDownload />
            Özgeçmişi İndir
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-7 py-3.5 border border-[var(--color-border)] hover:border-[var(--color-accent-green)]/50 text-[var(--color-foreground)] font-semibold rounded-xl transition-all duration-300 hover:bg-white/5"
          >
            <HiMail />
            İletişime Geç
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-[var(--color-border)] text-[var(--color-muted)] hover:text-white hover:border-white/30 transition-all duration-300 hover:bg-white/5"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--color-muted)]/30 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
