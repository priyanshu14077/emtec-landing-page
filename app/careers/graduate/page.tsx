import Link from "next/link";
import { Button } from "@/src/components/atoms/Button";

export default function GraduatePage() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/careers" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-block">
            ← Back to Careers
          </Link>
          <h1 className="font-poppins text-4xl font-bold text-black lg:text-5xl mb-4">
            Graduate Programs
          </h1>
          <p className="text-base text-slate-600 lg:text-lg max-w-2xl">
            Start your engineering career with our comprehensive graduate development programs
          </p>
        </div>

        {/* No Active Programs */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-12 text-center">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">No Active Programs</h2>
            <p className="text-slate-600 max-w-md mx-auto">
              We currently don't have any active graduate programs. Please check back later for internship and graduate trainee opportunities.
            </p>
            <div className="pt-4">
              <Button variant="primary">
                Apply for Internship
              </Button>
            </div>
          </div>
        </div>

        {/* Program Overview */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Graduate Engineering Program</h3>
            <p className="text-slate-600 mb-4">
              Comprehensive 12-month program for recent engineering graduates, 
              providing hands-on experience in MEPF, C&I, and Power T&D projects.
            </p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Rotational assignments across different sectors</li>
              <li>• Mentorship from senior engineers</li>
              <li>• Technical and professional development training</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Internship Program</h3>
            <p className="text-slate-600 mb-4">
              Summer and year-round internship opportunities for engineering students 
              to gain practical experience in real infrastructure projects.
            </p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Real project exposure</li>
              <li>• Learning from industry experts</li>
              <li>• Potential for full-time employment</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Get in Touch</h3>
          <p className="text-slate-600 mb-4">
            For inquiries about graduate programs and internships, please contact our HR team.
          </p>
          <p className="text-slate-600">
            <strong>Email:</strong> graduate@emtecsolutions.in
          </p>
        </div>
      </div>
    </div>
  );
}
