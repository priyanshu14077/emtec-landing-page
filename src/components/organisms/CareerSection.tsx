import { Button } from "@/src/components/atoms/Button";

export const CareerSection = () => {
  return (
    <section
      id="careers"
      className=".bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-24 text-slate-50"
      aria-labelledby="career-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl .bg-[radial-gradient(circle_at_top,_#283754,_#192233)] px-8 py-14 shadow-2xl ring-1 ring-slate-800">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl space-y-4">
              <h2
                id="career-heading"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300"
              >
                Build your career with us
              </h2>
              <p className="text-3xl font-semibold">
                Join the teams building India&apos;s next-generation
                infrastructure.
              </p>
              <p className="text-sm text-slate-200">
                Work alongside experienced engineering leaders on metro, solar,
                industrial, and data centre projects across the country.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* three buttons with different accents, not clickable functionality-wise */}
              <Button variant="primary">View open roles</Button>
              <Button variant="secondary">Graduate programs</Button>
              <Button variant="ghost">Life at Emtec</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
