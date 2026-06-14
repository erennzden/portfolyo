"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, id }) {
  return (
    <motion.div
      id={id}
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-green)]" />
    </motion.div>
  );
}
