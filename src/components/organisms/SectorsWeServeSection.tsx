"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { sectors } from "@/src/data/sectors";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const SectorsWeServeSection = () => {
  const [activeSectorId, setActiveSectorId] = useState<string>(
    sectors[0]?.id ?? ""
  );

  const activeSectorIndex = useMemo(
    () => sectors.findIndex((sector) => sector.id === activeSectorId),
    [activeSectorId]
  );

  const activeSector = sectors[activeSectorIndex] ?? sectors[0] ?? undefined;

  const prevSector = useMemo(() => {
    if (!sectors.length) return null;
    const prevIndex = (activeSectorIndex - 1 + sectors.length) % sectors.length;
    return sectors[prevIndex];
  }, [activeSectorIndex]);

  const nextSector = useMemo(() => {
    if (!sectors.length) return null;
    const nextIndex = (activeSectorIndex + 1) % sectors.length;
    return sectors[nextIndex];
  }, [activeSectorIndex]);

  const handlePrev = () => {
    if (!sectors.length || !prevSector) return;
    setActiveSectorId(prevSector.id);
  };

  const handleNext = () => {
    if (!sectors.length || !nextSector) return;
    setActiveSectorId(nextSector.id);
  };

  // Ensure we only show 12 sectors
  const displaySectors = sectors.slice(0, 12);

  return (
    <section
      id="sectors"
      className="relative overflow-hidden bg-white py-24 text-slate-900"
      aria-labelledby="sectors-heading"
    >
      <div className="relative mx-auto max-w-[1330px] px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {/* Header with CTA */}
          <div className="flex items-start justify-between">
            <div>
              <p
                id="sectors-heading"
                className="font-poppins text-sm font-extrabold uppercase tracking-[0.2em] text-blue-700"
              >
                Sectors we serve
              </p>
              <p className="mt-4 max-w-md text-3xl font-semibold text-slate-900">
                Integrated engineering across India&apos;s critical
                infrastructure.
              </p>
            </div>
            <Link
              href="#contact"
              className="hidden text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 md:flex md:items-center md:gap-2"
            >
              Need a similar project? Talk to us{" "}
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Side-by-side layout: Grid (3x4) and Card */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* Left: 3x4 Grid of Sector Cards - Each 142x142px */}
            <div className="shrink-0">
              <div
                className="grid grid-cols-3 gap-4"
                style={{ width: "426px" }}
              >
                {displaySectors.map((sector) => {
                  const isActive = sector.id === activeSectorId;
                  return (
                    <button
                      key={sector.id}
                      type="button"
                      onClick={() => setActiveSectorId(sector.id)}
                      className={`group relative flex flex-col items-center justify-center rounded-xl border text-center transition-all ${
                        isActive
                          ? "border-blue-600 bg-[#30405E] shadow-lg ring-2 ring-blue-500/50"
                          : "border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-slate-100"
                      }`}
                      style={{ width: "142px", height: "142px" }}
                    >
                      {/* Icon Circle */}
                      <div
                        className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${
                          isActive ? "bg-white/20" : "bg-slate-200"
                        }`}
                      >
                        {/* Icon placeholder - Place icons at: public/assets/icons/${sector.icon_path}.svg */}
                        <div className="relative h-6 w-6">
                          <Image
                            src={`/assets/icons/${sector.icon_path}.svg`}
                            alt={sector.title}
                            width={24}
                            height={24}
                            className={`h-6 w-6 object-contain ${
                              isActive ? "brightness-0 invert" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`mb-1 text-[10px] font-semibold uppercase tracking-wide ${
                          isActive ? "text-white" : "text-slate-800"
                        }`}
                      >
                        {sector.title}
                      </h3>

                      {/* Project Count */}
                      <p
                        className={`text-[9px] ${
                          isActive ? "text-white/90" : "text-slate-600"
                        }`}
                      >
                        {sector.projects_count} Projects
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Dynamic Project Card - 685x486px */}
            <div className="flex-1">
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
                style={{ width: "685px", height: "486px" }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {activeSector && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSector.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="relative flex h-full flex-col"
                    >
                      {/* Background Image */}
                      <div className="relative h-[320px] w-full overflow-hidden">
                        {/* Dynamic sector image - Place images at: public/assets/images/sectors/{sector-id}.jpg */}
                        <Image
                          src={activeSector.image_url}
                          alt={activeSector.title}
                          fill
                          priority={false}
                          className="object-cover"
                          sizes="685px"
                        />
                        {/* Dark gradient overlay for text readability */}
                        <div className="absolute inset-0 .bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

                        {/* Navigation and Title Overlay */}
                        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-5">
                          <button
                            type="button"
                            onClick={handlePrev}
                            className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                          >
                            <span className="text-lg">←</span>
                            <span className="text-[11px] uppercase tracking-wide">
                              {prevSector?.title ?? "Previous"}
                            </span>
                          </button>

                          <span className="text-lg font-bold uppercase tracking-wider text-white">
                            {activeSector.title}
                          </span>

                          <button
                            type="button"
                            onClick={handleNext}
                            className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                          >
                            <span className="text-[11px] uppercase tracking-wide">
                              {nextSector?.title ?? "Next"}
                            </span>
                            <span className="text-lg">→</span>
                          </button>
                        </div>
                      </div>

                      {/* Project List */}
                      <div className="flex-1 space-y-3 overflow-y-auto bg-white px-6 pb-6 pt-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                          Key Projects
                        </p>
                        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                          {activeSector.project_list
                            .slice(0, 12)
                            .map((project, idx) => (
                              <li
                                key={`${activeSector.id}-${idx}`}
                                className="flex items-start gap-2 text-slate-700"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                                <span>{project}</span>
                              </li>
                            ))}
                          {activeSector.project_list.length > 12 && (
                            <li className="col-span-2 text-xs font-medium text-blue-700">
                              +{activeSector.project_list.length - 12} more
                            </li>
                          )}
                        </ul>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
