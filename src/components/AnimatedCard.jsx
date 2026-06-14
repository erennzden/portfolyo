"use client";

import { motion } from "framer-motion";

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}) {
  return (
    <motion.div
      className={`card-glow p-6 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  );
}
