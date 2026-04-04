"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Nykaa Display Network",
    description:
      "Server-driven UI Ad-Tech platform enabling runtime rendering of ad widgets based on marketing templates. Scaled widget architecture across Nykaa Beauty, Fashion, and Man apps.",
    tags: [
      "Swift",
      "Server-Driven UI",
      "Ad-Tech",
      "UIKit",
      "Modular SDK",
    ],
    link: "https://apps.apple.com/in/app/nykaa-makeup-beauty-shopping/id1022363908",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Byju's Video Player Framework",
    description:
      "DRM Video Playback platform used by all apps in Byju's ecosystem. Developed interactive video features and optimized playback reliability, improving user engagement and session time.",
    tags: [
      "Swift",
      "AVKit",
      "DRM Streaming",
      "XCTest",
      "MVVM",
    ],
    link: "https://apps.apple.com/in/app/byjus-the-learning-app/id1015059076",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Netgear Insight",
    description:
      "IoT-based application to manage Netgear devices including Access Points, Switches, and NAS. Features dynamic UI with real-time charts and device management.",
    tags: [
      "Objective-C",
      "Swift",
      "IoT",
      "REST API",
      "Charts",
      "Google Maps",
    ],
    link: "https://apps.apple.com/us/app/netgear-insight/id1186392308",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2 tracking-widest uppercase">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-16">
            Featured Work
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card-bg border border-card-border rounded-2xl p-6 flex flex-col hover:border-accent/40 transition-all cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}
              >
                {project.icon}
              </div>

              <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h4>

              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-accent/10 text-accent/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                View on App Store
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
