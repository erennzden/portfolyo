"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section className="w-full py-32 px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <SectionHeading
          id="projects"
          title="Seçilmiş Projeler"
          subtitle="Tasarladığım ve geliştirdiğim öne çıkan projeler"
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card-glow group shimmer overflow-hidden border border-slate-800 bg-slate-800/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="p-8 sm:p-10 flex flex-col items-center text-center">
                {/* Visual element for featured project */}
                {project.featured && (
                  <div className="relative w-32 h-32 mb-8 flex-shrink-0">
                    {/* Decorative rings */}
                    <div className="absolute inset-0 rounded-full border border-[var(--color-accent)]/20 animate-ping" style={{ animationDuration: "3s" }} />
                    <div className="absolute inset-2 rounded-full border border-[var(--color-accent-green)]/20 animate-ping" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
                    <div className="absolute inset-4 rounded-full border border-[var(--color-accent)]/30 animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl">🤖</div>
                    </div>
                  </div>
                )}

                {/* Badge */}
                {project.badge && (
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 rounded-full mb-4 border border-blue-400/20">
                    {project.badge}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-blue-400/70 text-base font-medium mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/40 rounded-lg border border-slate-700 hover:border-blue-400/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
