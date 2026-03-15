"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.45 }}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-[#0f1b2f]/85 px-4 py-2 text-sm font-semibold text-accent shadow-glow backdrop-blur md:bottom-7 md:right-7"
      aria-label="Jump to contact section"
    >
      <MessageCircle size={16} />
      Contact
    </motion.a>
  );
}
