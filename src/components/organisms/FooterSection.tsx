export const FooterSection = () => {
  return (
    <footer className="border-t border-slate-800 bg-[radial-gradient(circle_at_top,_#283754,_#192233)] py-10 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 space-y-8 text-sm">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              EMTEC Solutions
            </p>
            <p className="text-xs text-slate-300">
              2025 EMTEC Solutions, All rights reserved.
            </p>
          </div>
          {/* link columns to be filled from footer component set */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Company
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Solutions
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Resources
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-4 text-xs text-slate-500">
          {/* legal links to be attached */}
          <span>Privacy Policy · Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};
