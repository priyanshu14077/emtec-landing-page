"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/src/components/atoms/Button";

import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pb-24 pt-20 text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0">
        {/* Hero background overlay image - Place image at: public/assets/images/hero-overlay.png */}
        <Image
          src="/assets/images/hero-overlay.png"
          alt=""
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 .bg-gradient-to-b from-white/70 via-white/80 to-white" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <motion.div
          className="flex-1 space-y-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <p className="font-poppins text-4xl font-bold uppercase tracking-[0.3em] text-black-700 lg:text-5xl">
            Integrated Solutions
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Infinite Possibilities
          </h1>
          <p className="max-w-xl text-base text-slate-700 sm:text-lg">
            Next-generation engineering powerhouse delivering smart,
            sustainable, and fully integrated MEPF, C&amp;I, and Power T&amp;D
            solutions that power India&apos;s modern infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Your Work</Button>
            <Button variant="secondary">Get a Proposal</Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
            {/* Hero card image - Place image at: public/assets/images/hero-card.jpg */}
            <div className="relative h-64 w-full sm:h-80 lg:h-96">
              <Image
                src="/assets/images/hero-card.jpg"
                alt="Hero card"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards Section - Positioned over background */}
      <div className="relative mx-auto mt-16 max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white/95 p-8 text-center shadow-lg backdrop-blur-sm ring-1 ring-slate-200/50">
            <p className="font-poppins text-4xl font-bold text-slate-900">
              72+
            </p>
            <p className="mt-2 text-sm font-bold text-slate-900">
              Projects Delivered
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white/95 p-8 text-center shadow-lg backdrop-blur-sm ring-1 ring-slate-200/50">
            <p className="font-poppins text-4xl font-bold text-slate-900">
              2,000,000
            </p>
            <p className="mt-2 text-sm font-bold text-slate-900">
              Safe Man - hours
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white/95 p-8 text-center shadow-lg backdrop-blur-sm ring-1 ring-slate-200/50">
            <p className="font-poppins text-4xl font-bold text-slate-900">
              18+
            </p>
            <p className="mt-2 text-sm font-bold text-slate-900">
              Cities Covered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
