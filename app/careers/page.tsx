import Link from "next/link";
import { Button } from "@/src/components/atoms/Button";

export default function CareersPage() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-poppins text-4xl font-bold text-black lg:text-5xl mb-4">
            Career Opportunities
          </h1>
          <p className="text-base text-slate-600 lg:text-lg max-w-2xl">
            Join our team and contribute to delivering innovative engineering solutions across India.
          </p>
        </div>

        {/* Career Options */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* View Open Roles Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-lg">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Open Roles</h2>
              <p className="text-slate-600">
                Explore current job openings and find the perfect role for your skills and experience.
              </p>
              <Link href="/careers/roles">
                <Button variant="primary" className="w-full">
                  View Open Roles
                </Button>
              </Link>
            </div>
          </div>

          {/* Graduate Programs Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-lg">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Graduate Programs</h2>
              <p className="text-slate-600">
                Start your career with us through our graduate development programs and internships.
              </p>
              <Link href="/careers/graduate">
                <Button variant="secondary" className="w-full">
                  Graduate Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
