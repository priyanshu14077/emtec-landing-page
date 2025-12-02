"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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

  // Display first 12 sectors in 4x3 grid
  const displaySectors = sectors.slice(0, 12);

  return (
    <section
      id="sectors"
      className="relative overflow-hidden bg-white py-24 text-slate-900"
      aria-labelledby="sectors-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="font-poppins text-5xl font-bold text-black">
              Sectors We Serve
            </h1>
          </div>

          {/* Main Content: Grid + Detail Card */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Left: 4x3 Grid of Sector Icon Cards */}
            <div className="flex-1">
              <div className="grid grid-cols-4 gap-6">
                {displaySectors.map((sector) => {
                  const isActive = sector.id === activeSectorId;
                  return (
                    <button
                      key={sector.id}
                      type="button"
                      onClick={() => setActiveSectorId(sector.id)}
                      className={`group relative flex flex-col items-center justify-center rounded-xl border p-4 text-center transition-all duration-300 ${
                        isActive
                          ? "border-blue-600 bg-[#30405E] shadow-lg ring-2 ring-blue-500/50"
                          : "border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-slate-100"
                      }`}
                      style={{ height: "142px" }}
                    >
                      {/* Icon Circle */}
                      <div
                        className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${
                          isActive ? "bg-white/20" : "bg-slate-200"
                        }`}
                      >
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
                        className={`mb-1 text-xs font-semibold uppercase tracking-wide ${
                          isActive ? "text-white" : "text-slate-800"
                        }`}
                      >
                        {sector.title}
                      </h3>

                      {/* Project Count */}
                      <p
                        className={`text-[10px] ${
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

            {/* Right: Dynamic Project Detail Card */}
            <div className="flex-shrink-0 lg:w-[480px]">
              {activeSector && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSector.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 h-full"
                  >
                    <div className="relative h-full w-full min-h-[460px]">
                      <Image
                        src={activeSector.image_url}
                        alt={activeSector.title}
                        fill
                        priority={false}
                        className="object-contain"
                        sizes="480px"
                      />

                      {/* Navigation Buttons Overlay */}
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 z-10">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-black/60"
                        >
                          <span>←</span>
                          <span className="text-xs uppercase tracking-wide">
                            {prevSector?.title ?? "Prev"}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={handleNext}
                          className="flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-black/60"
                        >
                          <span className="text-xs uppercase tracking-wide">
                            {nextSector?.title ?? "Next"}
                          </span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
