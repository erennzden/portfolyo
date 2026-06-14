"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/content";
import { HiSparkles, HiCode, HiGlobe } from "react-icons/hi";

const categoryIcons = {
  "Yapay Zeka & Veri": <HiSparkles className="text-blue-400" size={22} />,
  "Yazılım & Çatılar": <HiCode className="text-teal-400" size={22} />,
  "CBS (GeoAI)": <HiGlobe className="text-purple-400" size={22} />,
};

const categoryColors = {
  "Yapay Zeka & Veri": {
    text: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    hoverBorder: "hover:border-blue-400/50",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(96,165,250,0.25)]",
  },
  "Yazılım & Çatılar": {
    text: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
    hoverBorder: "hover:border-teal-400/50",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(45,212,191,0.25)]",
  },
  "CBS (GeoAI)": {
    text: "text-purple-300",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/50",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(168,85,247,0.25)]",
  },
};

export default function Skills() {
  return (
    <section className="w-full py-32 px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <SectionHeading
          id="skills"
          title="Yetkinlikler"
          subtitle="Teknik beceri ve uzmanlık alanlarım"
        />

        <div className="flex flex-col gap-8">
          {Object.entries(skills).map(([category, items], catIndex) => {
            const colors = categoryColors[category];
            return (
              <motion.div
                key={category}
                className="card-glow p-8 border border-slate-800 bg-slate-800/40 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  {categoryIcons[category]}
                  <h3 className="text-xl font-bold text-slate-100">{category}</h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                  {items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 cursor-default ${colors.text} ${colors.bg} ${colors.border} ${colors.hoverBorder} ${colors.hoverShadow}`}
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
