"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-neutral-300 px-6 py-32 lg:px-10 lg:py-44"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">

          {/* Label */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              03 / About
            </p>
          </div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-3xl font-medium leading-[1.2] tracking-[-0.03em] md:text-5xl">
              I&apos;m interested in the space between{" "}
              <span className="text-neutral-400">
                technology, people, and ideas.
              </span>
            </p>

            <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-neutral-600">
              <p>
                I&apos;m an AI/ML engineer who enjoys taking an idea from a
                rough thought to something people can actually interact with.
              </p>

              <p>
                My work has taken me through Generative AI, RAG systems,
                conversational AI, web applications, and machine learning.
                Along the way, I&apos;ve become increasingly interested in
                building products rather than simply building features.
              </p>

              <p>
                Outside of code, I photograph nature, landscapes, and the
                places around me. Photography gives me a different way to
                observe the same world I spend so much time trying to build
                technology for.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Small facts */}
        <div className="mt-24 grid border-t border-neutral-300 md:grid-cols-3">

          <div className="border-b border-neutral-300 py-8 md:border-b-0 md:border-r md:pr-8">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
              Based in
            </p>
            <p className="mt-2 text-lg">
              Himachal Pradesh, India
            </p>
          </div>

          <div className="border-b border-neutral-300 py-8 md:border-b-0 md:border-r md:px-8">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
              Focus
            </p>
            <p className="mt-2 text-lg">
              AI · GenAI · Product
            </p>
          </div>

          <div className="py-8 md:pl-8">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
              Currently
            </p>
            <p className="mt-2 text-lg">
              Building Gradly
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}