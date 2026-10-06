"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen items-end px-6 pb-16 pt-32 lg:px-10 lg:pb-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm uppercase tracking-[0.2em] text-neutral-500"
        >
          AI/ML Engineer · GenAI Builder · Photographer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl text-[clamp(4rem,11vw,10rem)] font-medium leading-[0.82] tracking-[-0.07em]"
        >
          ABHAY
          <br />
          MAHAJAN<span className="text-[#ff5c35]">.</span>
        </motion.h1>

        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-neutral-300 pt-6 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl text-xl leading-relaxed text-neutral-700 md:text-2xl"
          >
            I build AI products, experiment with ideas, and turn them into
            things people can actually use.
          </motion.p>

          <motion.a
            href="#work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex w-fit items-center gap-3 text-sm font-medium"
          >
            EXPLORE MY WORK
            <ArrowDownRight size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}