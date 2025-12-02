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
              <div className="grid grid-cols-4 gap-4">
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
                    className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
                  >
                    {/* Header Image Section */}
                    <div className="relative h-[280px] w-full overflow-hidden">
                      <Image
                        src={activeSector.image_url}
                        alt={activeSector.title}
                        fill
                        priority={false}
                        className="object-cover"
                        sizes="480px"
                      />
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                      {/* Navigation Buttons */}
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
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

                      {/* Title at bottom of image */}
                      <div className="absolute inset-x-0 bottom-0 px-6 py-5">
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                          {activeSector.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/80">
                          {activeSector.projects_count} Projects Delivered
                        </p>
                      </div>
                    </div>

                    {/* Project List Section */}
                    <div className="max-h-[320px] space-y-4 overflow-y-auto bg-white px-6 py-5">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
                        Key Projects
                      </p>
                      {activeSector.project_list.length > 0 ? (
                        <ul className="space-y-3 text-sm text-slate-700">
                          {activeSector.project_list
                            .slice(0, 15)
                            .map((project, idx) => (
                              <li
                                key={`${activeSector.id}-${idx}`}
                                className="flex items-start gap-2"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                                <span>{project}</span>
                              </li>
                            ))}
                          {activeSector.project_list.length > 15 && (
                            <li className="text-xs font-medium text-blue-700">
                              +{activeSector.project_list.length - 15} more
                              projects
                            </li>
                          )}
                        </ul>
                      ) : (
                        <p className="text-sm italic text-slate-500">
                          Project details coming soon...
                        </p>
                      )}
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
