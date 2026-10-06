"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      className="px-6 py-32 lg:px-10 lg:py-44"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 flex items-end justify-between border-b border-neutral-300 pb-6">

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
              01 / Selected Work
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <span className="hidden text-sm text-neutral-500 md:block">
            {projects.length.toString().padStart(2, "0")} selected projects
          </span>

        </div>

        <div>
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group border-b border-neutral-300 first:border-t"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block py-10 md:py-14"
              >
                <div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-start">

                  <span className="text-sm text-neutral-400">
                    {project.number}
                  </span>

                  <div>

                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                        {project.category}
                      </span>

                      <span className="text-xs text-neutral-400">
                        / {project.year}
                      </span>
                    </div>

                    <h3 className="mb-4 text-4xl font-medium tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 md:text-6xl">
                      {project.title}
                    </h3>

                    <p className="max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
                      {project.shortDescription}
                    </p>

                  </div>

                  <div className="flex items-center justify-between gap-8 md:flex-col md:items-end">

                    <span className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                      {project.status}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </div>

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}