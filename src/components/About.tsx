"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Apps Shipped", value: "10+" },
  { label: "Users Impacted", value: "Millions" },
  { label: "Domains", value: "3+" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2 tracking-widest uppercase">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Crafting Delightful iOS Experiences
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 text-muted leading-relaxed"
          >
            <p>
              I work as SDE 3, with a passion for building high-performance,
              scalable iOS applications. Over the past 8+ years, I&apos;ve
              worked across E-commerce, Ed-Tech, and IoT domains, delivering
              products used by millions.
            </p>
            <p>
              My expertise spans UIKit, server-driven UI architectures, and
              modular SDK design. I thrive on solving complex architectural
              challenges, mentoring teams, and driving technical decisions that
              improve performance and developer velocity.
            </p>
            <p>
              Currently at Nykaa, I own the iOS Display Network SDK that powers
              homepage experiences across multiple apps, impacting core user
              discovery flows for one of India&apos;s largest beauty and fashion
              platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-card-bg border border-card-border rounded-2xl p-6 text-center hover:border-accent/40 transition-colors"
              >
                <div className="text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
