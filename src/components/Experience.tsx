"use client";

import { motion } from "framer-motion";

const experience = [
  {
    period: "JAN 2026 — JUN 2026",
    title: "Generative AI Intern",
    organization: "CoRover.ai",
    description:
      "Worked on LLM-powered conversational AI systems involving multi-turn dialogue, tool use, memory, and agentic workflows. Designed RAG pipelines for document-grounded question answering and explored multi-step task decomposition.",
    tags: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Agentic AI",
      "Conversational AI",
    ],
  },
  {
    period: "2022 — 2026",
    title: "B.Tech — AI & Machine Learning",
    organization: "Symbiosis Institute of Technology, Pune",
    description:
      "Studied Artificial Intelligence and Machine Learning with a focus on building practical systems across machine learning, software development, and Generative AI.",
    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software",
      "GenAI",
    ],
  },
  {
    period: "AUG 2024 — DEC 2025",
    title: "Photography Head",
    organization: "IEEE SIT Student Branch",
    description:
      "Led end-to-end event photography and collaborated with industry professionals while working with the IEEE SIT Student Branch.",
    tags: [
      "Photography",
      "Event Photography",
      "Visual Storytelling",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-300 px-6 py-32 lg:px-10 lg:py-44"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              02 / Experience
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] md:text-6xl">
              A timeline of what I&apos;ve been doing.
            </h2>
          </div>
        </div>

        <div className="border-t border-neutral-300">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.organization}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="grid gap-8 border-b border-neutral-300 py-10 md:grid-cols-[180px_1fr] md:py-14"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                  {item.period}
                </p>
              </div>

              <div>
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-neutral-500">
                      {item.organization}
                    </p>
                  </div>

                  <span className="text-sm text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}