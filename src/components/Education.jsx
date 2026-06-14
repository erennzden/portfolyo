"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/content";

export default function Education() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading id="education" title="Eğitim" subtitle="Akademik yolculuğum" />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              className="card-glow p-6 sm:p-8 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* Type Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full mb-4">
                {item.type === "lisans"
                  ? "Lisans"
                  : item.type === "onlisans"
                  ? "Ön Lisans"
                  : "Akademi"}
              </span>

              {/* School */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--color-accent-light)] transition-colors">
                {item.school}
              </h3>
              {item.subtitle && (
                <p className="text-xs text-[var(--color-muted)] mb-2">
                  {item.subtitle}
                </p>
              )}

              {/* Department */}
              <p className="text-[var(--color-muted)] text-sm mb-3">
                {item.department}
              </p>

              {/* GPA */}
              {item.gpa && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-[var(--color-muted)]">GANO:</span>
                  <span className="text-sm font-semibold text-[var(--color-accent-green)]">
                    {item.gpa}
                  </span>
                </div>
              )}

              {/* Date */}
              <p className="text-xs text-[var(--color-muted)]/70 mb-4">
                📅 {item.date}
              </p>

              {/* Tags */}
              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-[var(--color-accent-green)] bg-[var(--color-accent-green)]/10 rounded-md border border-[var(--color-accent-green)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
