"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="border-t border-neutral-300 px-6 py-32 lg:px-10 lg:py-44">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
            05 / Let&apos;s talk
          </p>

          <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-8xl">
            Have an idea?
            <br />
            Let&apos;s build it.
            <span className="text-[#ff5c35]">.</span>
          </h2>

          <a
            href="mailto:your-email@example.com"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:scale-105"
          >
            GET IN TOUCH
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}