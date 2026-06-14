"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/content";

export default function Education() {
  return (
    <section className="w-full py-32 px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <SectionHeading id="education" title="Eğitim" subtitle="Akademik yolculuğum" />

        <div className="flex flex-col gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              className="card-glow p-8 group border border-slate-800 bg-slate-800/40 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-5">{item.icon}</div>

              {/* Type Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-400/10 rounded-full mb-4 border border-blue-400/10">
                {item.type === "lisans"
                  ? "Lisans"
                  : item.type === "onlisans"
                  ? "Ön Lisans"
                  : "Akademi"}
              </span>

              {/* School */}
              <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-blue-300 transition-colors">
                {item.school}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-slate-400 mb-2">
                  {item.subtitle}
                </p>
              )}

              {/* Department */}
              <p className="text-slate-300 text-base mb-4">
                {item.department}
              </p>

              {/* GPA */}
              {item.gpa && (
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-sm text-slate-400">GANO:</span>
                  <span className="text-base font-semibold text-teal-400">
                    {item.gpa}
                  </span>
                </div>
              )}

              {/* Date */}
              <p className="text-sm text-slate-400/80 mb-5 flex items-center justify-center gap-1.5">
                <span>📅</span> {item.date}
              </p>

              {/* Tags */}
              {item.tags && (
                <div className="flex flex-wrap justify-center gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium text-teal-400 bg-teal-400/10 rounded-md border border-teal-400/20"
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
