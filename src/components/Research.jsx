"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { research, certifications } from "@/data/content";
import { HiAcademicCap, HiShieldCheck } from "react-icons/hi";

export default function Research() {
  return (
    <section className="w-full py-32 px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <SectionHeading
          id="research"
          title="Araştırma & Sertifikalar"
          subtitle="Akademik çalışmalar ve profesyonel yetkinlikler"
        />

        <div className="flex flex-col gap-8">
          {/* Research */}
          <motion.div
            className="card-glow p-8 border border-slate-800 bg-slate-800/40 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-400/10 border border-blue-400/20">
                <HiAcademicCap size={24} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Araştırma</h3>
            </div>

            <div className="space-y-4 w-full">
              {research.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-blue-400/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <p className="text-slate-100 font-semibold text-lg mb-2">
                      {item.title}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="card-glow p-8 border border-slate-800 bg-slate-800/40 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-teal-400/10 border border-teal-400/20">
                <HiShieldCheck size={24} className="text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Sertifikalar</h3>
            </div>

            <div className="space-y-3 w-full">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-teal-400/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="w-2 h-2 rounded-full bg-teal-400 group-hover:scale-150 transition-transform mb-1" />
                  <div>
                    <p className="text-slate-100 font-semibold text-base mb-1">
                      {cert.title}
                    </p>
                    {(cert.issuer || cert.year) && (
                      <p className="text-slate-400 text-sm">
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
