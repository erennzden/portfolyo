"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/content";
import { HiSparkles, HiCode, HiGlobe } from "react-icons/hi";

const categoryIcons = {
  "Yapay Zeka & Veri": <HiSparkles className="text-[var(--color-accent)]" size={22} />,
  "Yazılım & Çatılar": <HiCode className="text-[var(--color-accent-green)]" size={22} />,
  "CBS (GeoAI)": <HiGlobe className="text-purple-400" size={22} />,
};

const categoryColors = {
  "Yapay Zeka & Veri": {
    text: "text-[var(--color-accent-light)]",
    bg: "bg-[var(--color-accent)]/10",
    border: "border-[var(--color-accent)]/20",
    hoverBorder: "hover:border-[var(--color-accent)]/50",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]",
  },
  "Yazılım & Çatılar": {
    text: "text-[var(--color-accent-green)]",
    bg: "bg-[var(--color-accent-green)]/10",
    border: "border-[var(--color-accent-green)]/20",
    hoverBorder: "hover:border-[var(--color-accent-green)]/50",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(16,185,129,0.3)]",
  },
  "CBS (GeoAI)": {
    text: "text-purple-300",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/50",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]",
  },
};

export default function Skills() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="skills"
          title="Yetkinlikler"
          subtitle="Teknik beceri ve uzmanlık alanlarım"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items], catIndex) => {
            const colors = categoryColors[category];
            return (
              <motion.div
                key={category}
                className="card-glow p-6 sm:p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  {categoryIcons[category]}
                  <h3 className="text-lg font-bold text-white">{category}</h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className={`px-3.5 py-1.5 text-sm font-medium rounded-lg border transition-all duration-300 cursor-default ${colors.text} ${colors.bg} ${colors.border} ${colors.hoverBorder} ${colors.hoverShadow}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
