"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    year: "2025 — 2026",
    title: "GenAI Intern",
    organization: "CoRover.ai",
    type: "INTERNSHIP",
    description:
      "Worked on Generative AI applications involving conversational AI, RAG pipelines, LLMs, memory, chat systems, and agentic workflows.",
    tags: ["GenAI", "RAG", "LLMs", "Agentic AI"],
  },
  {
    year: "2026",
    title: "B.Tech — Artificial Intelligence & Machine Learning",
    organization: "Symbiosis Institute of Technology, Pune",
    type: "EDUCATION",
    description:
      "Studied artificial intelligence and machine learning while building projects across AI, web development, and applied machine learning.",
    tags: ["AI/ML", "Python", "Software"],
  },
  {
    year: "2022 — Present",
    title: "Photography",
    organization: "shot.by.abhay",
    type: "CREATIVE",
    description:
      "A personal photography practice focused on nature, landscapes, macro photography, and documenting places through images.",
    tags: ["Photography", "Nature", "Macro"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-300 px-6 py-32 lg:px-10 lg:py-44"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-20">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
            02 / Experience
          </p>

          <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            A timeline of what I&apos;ve been doing.
          </h2>
        </div>

        {/* Timeline */}
        <div className="border-t border-neutral-300">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.organization}-${experience.year}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="grid gap-8 border-b border-neutral-300 py-10 md:grid-cols-[180px_1fr_auto] md:gap-12 md:py-14"
            >
              {/* Year */}
              <div>
                <span className="text-sm text-neutral-400">
                  {experience.year}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                    {experience.type}
                  </span>
                </div>

                <h3 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                  {experience.title}
                </h3>

                <p className="mt-2 text-lg text-neutral-500">
                  {experience.organization}
                </p>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                  {experience.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}