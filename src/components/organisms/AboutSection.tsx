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
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        <motion.div
          className="flex-1 space-y-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2
            id="about-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700"
          >
            About EMTEC
          </h2>
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

          <div className="relative rounded-2xl border border-slate-200 bg-white p-6">
            <div className="absolute left-6 top-6 h-40 w-px .bg-gradient-to-b from-blue-600 via-slate-300 to-transparent" />
            <ol className="relative space-y-6 pl-10 text-sm text-slate-700">
              <li>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  2016
                </p>
                <p className="mt-1">
                  Founded as a turnkey MEPF solutions partner.
                </p>
              </li>
              <li>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  2019
                </p>
                <p className="mt-1">
                  Scaled metro &amp; industrial delivery across West India.
                </p>
              </li>
              <li>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  2022
                </p>
                <p className="mt-1">
                  Achieved 1M+ safe man-hours; expanded OEM collaborations.
                </p>
              </li>
              <li>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  2025
                </p>
                <p className="mt-1">
                  Pan-India execution with digital QA and BIM coordination.
                </p>
              </li>
            </ol>
          </div>
        </motion.div>

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
      </div>
    </section>
  );
};
