import Link from "next/link";
import { Button } from "@/src/components/atoms/Button";

export default function RolesPage() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/careers" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-block">
            ← Back to Careers
          </Link>
          <h1 className="font-poppins text-4xl font-bold text-black lg:text-5xl mb-4">
            Open Roles
          </h1>
          <p className="text-base text-slate-600 lg:text-lg max-w-2xl">
            Current job opportunities at EMTEC Solutions
          </p>
        </div>

        {/* No Active Listings */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-12 text-center">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">No Active Listings</h2>
            <p className="text-slate-600 max-w-md mx-auto">
              We currently don't have any open positions. Please check back later or send us your resume for future opportunities.
            </p>
            <div className="pt-4">
              <Button variant="primary">
                Send Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Stay Connected</h3>
          <p className="text-slate-600 mb-4">
            Even without current openings, we're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <p className="text-slate-600">
            <strong>Email:</strong> careers@emtecsolutions.in
          </p>
        </div>
      </div>
    </div>
  );
}
