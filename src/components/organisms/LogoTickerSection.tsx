"use client";

import Image from "next/image";

const logos = [
  "/assets/logos/22.png",
  "/assets/logos/23.png",
  "/assets/logos/24.png",
  "/assets/logos/25.png",
  "/assets/logos/26.png",
  "/assets/logos/27.png",
  "/assets/logos/28.png",
  "/assets/logos/29.png",
  "/assets/logos/30.png",
];

export const LogoTickerSection = () => {
  return (
    <section
      className="bg-gradient-to-b from-slate-50 to-white py-16 text-slate-900"
      aria-label="Trusted by teams in India"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase mb-12">
          Trusted by Leading Organizations
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex gap-12 items-center animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="relative h-16 w-32 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="relative h-16 w-32 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
