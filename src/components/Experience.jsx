"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="experience"
          title="İş Deneyimi"
          subtitle="Profesyonel kariyer yolculuğum"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="card-glow p-6 group hover:-translate-y-1 transition-transform duration-300">
                      {/* Current badge */}
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[var(--color-accent-green)] bg-[var(--color-accent-green)]/10 rounded-full mb-3 border border-[var(--color-accent-green)]/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-green)] animate-pulse" />
                          Aktif
                        </span>
                      )}

                      {/* Company */}
                      <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-accent-light)] transition-colors mb-1">
                        {item.company}
                      </h3>

                      {/* Position */}
                      <p className="text-[var(--color-accent-light)] text-sm font-medium mb-2">
                        {item.position}
                      </p>

                      {/* Date */}
                      <p className="text-xs text-[var(--color-muted)]/70 mb-3">
                        📅 {item.date}
                      </p>

                      {/* Detail */}
                      {item.detail && (
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-card)] border-2 border-[var(--color-accent)] z-10 text-lg shadow-lg shadow-[var(--color-accent)]/20">
                    {item.icon}
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
