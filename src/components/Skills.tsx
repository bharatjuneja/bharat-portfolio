"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Swift", level: 95 },
      { name: "Objective-C", level: 85 },
    ],
  },
  {
    title: "Frameworks & UI",
    skills: [
      { name: "UIKit", level: 95 },
      { name: "AVKit", level: 85 },
      { name: "Combine", level: 75 },
      { name: "Server-Driven UI", level: 90 },
    ],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      { name: "MVVM", level: 90 },
      { name: "MVC", level: 90 },
      { name: "Protocol-Oriented Programming", level: 85 },
      { name: "Modular Architecture", level: 90 },
    ],
  },
  {
    title: "Tools & Platform",
    skills: [
      { name: "CoreData", level: 85 },
      { name: "GCD / NSOperationQueue", level: 80 },
      { name: "DRM Video Streaming", level: 80 },
      { name: "Firebase", level: 80 },
      { name: "Git", level: 90 },
      { name: "XCTest", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Push Notifications", level: 85 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2 tracking-widest uppercase">
            Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-16">
            Technical Expertise
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + ci * 0.15 }}
              className="bg-card-bg border border-card-border rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold mb-5 text-accent">
                {category.title}
              </h4>
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: 0.5 + ci * 0.15 + si * 0.08,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
