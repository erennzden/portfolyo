"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section className="w-full py-32 px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <SectionHeading
          id="experience"
          title="İş Deneyimi"
          subtitle="Profesyonel kariyer yolculuğum"
        />

        <div className="flex flex-col gap-10">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon / Timeline Dot */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-800 border-2 border-blue-400 z-10 text-2xl shadow-lg shadow-blue-500/10 mb-[-1rem] relative">
                {item.icon}
              </div>

              {/* Content Card */}
              <div className="w-full card-glow p-8 pt-10 group hover:-translate-y-1.5 transition-all duration-300 border border-slate-800 bg-slate-800/40 flex flex-col items-center text-center">
                {/* Current badge */}
                {item.current && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-teal-400 bg-teal-400/10 rounded-full mb-4 border border-teal-400/20 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                    Aktif
                  </span>
                )}

                {/* Company */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors mb-1">
                  {item.company}
                </h3>

                {/* Position */}
                <p className="text-blue-400 text-sm font-medium mb-3">
                  {item.position}
                </p>

                {/* Date */}
                <p className="text-sm text-slate-400 mb-4 flex items-center justify-center gap-1.5">
                  <span>📅</span> {item.date}
                </p>

                {/* Detail */}
                {item.detail && (
                  <p className="text-base text-slate-400 leading-relaxed font-light">
                    {item.detail}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
