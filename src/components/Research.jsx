"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { research, certifications } from "@/data/content";
import { HiAcademicCap, HiShieldCheck } from "react-icons/hi";

export default function Research() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="research"
          title="Araştırma & Sertifikalar"
          subtitle="Akademik çalışmalar ve profesyonel yetkinlikler"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Research */}
          <motion.div
            className="card-glow p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                <HiAcademicCap size={24} className="text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-white">Araştırma</h3>
            </div>

            <div className="space-y-4">
              {research.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-[var(--color-border)]/50 hover:border-[var(--color-accent)]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-[var(--color-muted)] text-xs">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="card-glow p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-[var(--color-accent-green)]/10 border border-[var(--color-accent-green)]/20">
                <HiShieldCheck size={24} className="text-[var(--color-accent-green)]" />
              </div>
              <h3 className="text-xl font-bold text-white">Sertifikalar</h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-[var(--color-border)]/50 hover:border-[var(--color-accent-green)]/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)] shrink-0 group-hover:scale-150 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">
                      {cert.title}
                    </p>
                    {(cert.issuer || cert.year) && (
                      <p className="text-[var(--color-muted)] text-xs">
                        {[cert.issuer, cert.year].filter(Boolean).join(" • ")}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
