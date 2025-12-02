import Image from "next/image";

export const CertificatesSection = () => {
  return (
    <section
      id="certificates"
      className="bg-white py-24 text-slate-900"
      aria-labelledby="certificates-heading"
    >
      <div className="mx-auto max-w-6xl px-6 space-y-8">
        <div className="space-y-3">
          <h2
            id="certificates-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700"
          >
            Certificate
          </h2>
          <p className="max-w-xl text-3xl font-semibold">
            Certified for safety, quality, and sustainability.
          </p>
        </div>

        {/* Full-width 3-column grid capturing whole width */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["ehs-image-1.png", "ehs-image-2.png", "ehs-image-3.png"].map(
            (file) => (
              <div
                key={file}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {/* Drop certification scans inside public/assets/${file} */}
                <div className="relative h-64 w-full">
                  <Image
                    src={`/assets/${file}`}
                    alt="Certification"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
