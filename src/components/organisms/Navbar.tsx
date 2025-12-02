"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/src/components/atoms/Button";

const navItems = [
  { label: "Sectors", href: "#sectors" },
  { label: "Projects", href: "#about" },
  { label: "About", href: "#brands" },
  { label: "EHS & Quality", href: "#certificates" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#hero" className="flex items-center gap-2">
          {/* Drop company logotype at public/assets/logo-strip.png */}
          <div className="relative h-8 w-32 overflow-hidden rounded">
            <Image
              src="/assets/logo-strip.png"
              alt="Emtech Solutions"
              fill
              sizes="128px"
              className="object-contain"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Button size: w:168 h:41 per Figma specs */}
          <Button variant="primary" className="w-[168px] h-[41px]">
            Get a proposal
          </Button>
        </motion.div>
      </nav>
    </header>
  );
};
