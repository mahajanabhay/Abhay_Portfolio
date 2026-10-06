"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Photography", href: "#photography" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#top"
          className="text-sm font-semibold tracking-[-0.02em]"
        >
          ABHAY MAHAJAN
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/ABHAY_MAHAJAN_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-900 px-5 py-2 text-sm transition-all hover:bg-black hover:text-white"
          >
            Resume
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-[#f5f5f2] px-6 py-8 md:hidden">
            <div className="flex flex-col">

            {links.map((link, index) => (
                <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-neutral-200 py-5 text-xl"
                >
                <span>{link.label}</span>

                <span className="text-xs text-neutral-400">
                    0{index + 1}
                </span>
                </a>
            ))}

            <a
                href="/ABHAY_MAHAJAN_RESUME.pdf"
                className="flex items-center justify-between py-5 text-xl"
            >
                <span>Resume</span>
                <span>↗</span>
            </a>

            </div>
        </div>
      )}
    </header>
  );
}