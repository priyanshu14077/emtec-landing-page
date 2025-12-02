import Image from "next/image";

export const CertificatesSection = () => {
  return (
    <section
      id="certificates"
      className="bg-white py-24 text-slate-900"
      aria-labelledby="certificates-heading"
    >
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        <div className="space-y-3">
          <h1
            id="certificates-heading"
            className="font-poppins text-5xl font-bold text-black"
          >
            Certificate
          </h1>
        </div>

        {/* Full-width 3-column grid with taller images */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["ehs-image-1.png", "ehs-image-2.png", "ehs-image-3.png"].map(
            (file) => (
              <div
                key={file}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Taller certificate images covering more section height */}
                <div className="relative h-[500px] w-full">
                  <Image
                    src={`/assets/${file}`}
                    alt="Certification"
                    fill
                    className="object-contain p-4"
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
