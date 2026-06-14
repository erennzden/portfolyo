"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="projects"
          title="Seçilmiş Projeler"
          subtitle="Tasarladığım ve geliştirdiğim öne çıkan projeler"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`card-glow group shimmer overflow-hidden ${
                project.featured ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className={`p-8 sm:p-10 ${project.featured ? "md:flex md:gap-10 md:items-center" : ""}`}>
                {/* Left: Content */}
                <div className={project.featured ? "md:flex-1" : ""}>
                  {/* Badge */}
                  {project.badge && (
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full mb-4 border border-[var(--color-accent)]/20">
                      {project.badge}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[var(--color-accent-light)] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[var(--color-accent-light)]/70 text-sm font-medium mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium text-[var(--color-foreground)] bg-white/5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Featured visual element */}
                {project.featured && (
                  <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:w-64 md:shrink-0">
                    <div className="relative w-48 h-48">
                      {/* Decorative rings */}
                      <div className="absolute inset-0 rounded-full border border-[var(--color-accent)]/20 animate-ping" style={{ animationDuration: "3s" }} />
                      <div className="absolute inset-4 rounded-full border border-[var(--color-accent-green)]/20 animate-ping" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
                      <div className="absolute inset-8 rounded-full border border-[var(--color-accent)]/30 animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl">🤖</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
