"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/photography";

export default function Photography() {
  const featured = photos[0];
  const remaining = photos.slice(1);

  return (
    <section
      id="photography"
      className="border-t border-neutral-300 px-6 py-32 lg:px-10 lg:py-44"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_2fr]">

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
              04 / Beyond Code
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Photography.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <p className="max-w-xl text-xl leading-relaxed text-neutral-600">
              When I&apos;m not building things, I&apos;m usually looking for
              something worth photographing.
            </p>

            <Link
              href="https://instagram.com/shot.by.abhay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 text-sm font-medium"
            >
              VIEW ALL
              <ArrowUpRight size={16} />
            </Link>

          </div>
        </div>

        {/* Featured image */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-200">
              <Image
                src={featured.src}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white md:p-10 md:pt-32">

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] opacity-70">
                    {featured.location} · {featured.year}
                  </p>

                  <h3 className="mt-2 text-2xl font-medium md:text-4xl">
                    {featured.title}
                  </h3>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/50 md:flex">
                  <ArrowUpRight size={18} />
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* Gallery */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">

          {remaining.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group"
            >
              <div
                className={`relative overflow-hidden bg-neutral-200 ${
                  photo.orientation === "portrait"
                    ? "aspect-[4/5]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex justify-between gap-4 py-4">

                <div>
                  <h3 className="text-base font-medium">
                    {photo.title}
                  </h3>

                  <p className="mt-1 text-sm text-neutral-500">
                    {photo.location}
                  </p>
                </div>

                <span className="text-sm text-neutral-400">
                  {photo.year}
                </span>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}