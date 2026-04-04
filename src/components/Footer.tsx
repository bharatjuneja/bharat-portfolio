"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-card-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} Bharat Juneja. All rights reserved.
        </p>
        <p>
          Built with{" "}
          <span className="text-accent">Next.js</span> &{" "}
          <span className="text-accent">Framer Motion</span>
        </p>
      </div>
    </motion.footer>
  );
}
