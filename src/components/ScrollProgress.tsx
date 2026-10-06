"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-60 h-0.5 origin-left bg-[#ff5c35]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}