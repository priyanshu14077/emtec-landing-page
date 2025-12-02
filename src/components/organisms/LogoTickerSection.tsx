import Image from "next/image";

export const LogoTickerSection = () => {
  return (
    <section
      className="bg-white py-10 text-slate-900"
      aria-label="Trusted by teams in India"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
          Trusted by teams in India
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div className="relative flex items-center gap-16 px-8 py-6">
            {/* Replace with your combined ticker strip at public/assets/logo-strip.png */}
            <div className="relative h-10 w-full">
              <Image
                src="/assets/logo-strip.png"
                alt="Partner logos"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
