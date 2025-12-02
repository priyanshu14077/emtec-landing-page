"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const container: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-white py-24 text-slate-900"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse gap-12 px-6 lg:flex-row">
        {/* Left: Logo Strip */}
        <motion.div
          className="flex flex-1 items-center justify-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Emtec logo: w:456 h:169 per Figma specs */}
          <div className="relative h-[169px] w-full max-w-[456px]">
            <Image
              src="/assets/logo-strip.png"
              alt="Emtec Solutions"
              fill
              className="object-contain"
              sizes="456px"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="flex-1 space-y-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="font-poppins text-5xl font-bold text-black">
            About EMTEC
          </h1>
          <p className="text-3xl font-semibold leading-snug">
            Engineering partner for smart, sustainable, future-ready
            infrastructure.
          </p>
          <p className="max-w-xl text-slate-600">
            Emtec Global Solutions delivers integrated MEPF, C&amp;I, and Power
            T&amp;D engineering across India, providing end-to-end smart,
            sustainable, future-ready infrastructure solutions trusted by major
            developers, industries, institutions, and Fortune 500 clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
