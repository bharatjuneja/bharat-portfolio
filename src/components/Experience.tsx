"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Nykaa",
    role: "SDE 3",
    period: "Jan 2023 — Present",
    location: "India",
    highlights: [
      "Owned the iOS Display Network SDK powering homepage experiences across Nykaa Beauty, Fashion, and Man apps, impacting core user discovery flows.",
      "Designed and evolved a server-driven UI architecture enabling runtime ad rendering and faster campaign experimentation without app releases.",
      "Led technical decisions around modularization, performance optimization, and SDK boundaries, improving app launch time and reducing binary size.",
      "Mentored junior engineers and acted as iOS architecture reviewer for cross-team integrations.",
    ],
    tech: [
      "Swift",
      "UIKit",
      "AVKit",
      "CoreData",
      "Firebase",
      "Server-Driven UI",
      "MVVM",
    ],
  },
  {
    company: "Byju's",
    role: "SDE 2",
    period: "May 2021 — Jan 2023",
    location: "Bangalore",
    highlights: [
      "Designed and extended a shared DRM video playback framework used across multiple apps in the Byju's ecosystem.",
      "Improved playback reliability and interactive video experiences, contributing to higher session duration and engagement.",
      "Maintained test coverage and stability for a core platform component, ensuring safe releases at scale.",
    ],
    tech: [
      "Swift",
      "UIKit",
      "AVKit",
      "DRM Streaming",
      "XCTest",
      "Firebase",
      "POP",
    ],
  },
  {
    company: "VVDN Technologies",
    role: "Senior Software Engineer",
    period: "Apr 2016 — May 2021",
    location: "Gurgaon",
    highlights: [
      "Application Development and Architecture Design for IoT-based mobile applications.",
      "Code review, optimization, and third-party library integration across multiple projects.",
      "Client communication and requirement gathering while working with remote teams.",
    ],
    tech: [
      "Objective-C",
      "Swift",
      "REST API",
      "CoreData",
      "Google Maps",
      "GCD",
      "MVC",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2 tracking-widest uppercase">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-16">
            Where I&apos;ve Worked
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="relative pl-10 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background animate-pulse-glow" />

                <div className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8 hover:border-accent/30 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-accent transition-colors">
                        {exp.company}
                      </h4>
                      <p className="text-muted">{exp.role}</p>
                    </div>
                    <div className="text-sm text-muted mt-1 md:mt-0 font-mono">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted">
                        <span className="text-accent mt-1.5 shrink-0">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="currentColor"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
