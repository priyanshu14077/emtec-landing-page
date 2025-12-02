import { Button } from "@/src/components/atoms/Button";

export const CareerSection = () => {
  return (
    <section
      id="careers"
      className="bg-white py-24"
      aria-labelledby="career-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-[#1e293b] px-12 py-16 shadow-2xl">
          <div className="max-w-2xl space-y-6">
            <h1 className="font-poppins text-4xl font-bold text-white lg:text-5xl">
              Build your career with us
            </h1>

            <p className="text-base text-slate-300 lg:text-lg">
              Join multidisciplinary teams delivering technically challenging
              MEPF and infrastructure projects across India.
            </p>

            {/* Three Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="primary">View Open Roles</Button>
              <Button variant="secondary">Graduate Programs</Button>
              <Button variant="ghost">Life at Emtec</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
