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
              I&apos;like building things{" "}
              <span className="text-neutral-400">
                from scratch.
              </span>
            </p>

            <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-neutral-600">
              <p>
                I&apos;m an AI/ML engineer who enjoys taking an idea from a
                rough thought to something people can actually interact with.
              </p>

              <p>
                My background is in Artificial Intelligence and Machine Learning, but I&apos;m most interested 
                in turning technology into things people can actually use. I&apos;ve worked with Generative AI,
                RAG, conversational AI and web applications, and I enjoy taking an idea from a rough concept 
                to a working product.Right now, I&apos;m exploring new ideas across AI, software and product development,
                trying to understand which problems are worth solving and what I can build around them.
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
              EXPLORING AI × PRODUCT IDEAS
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}