import { Navbar } from "@/src/components/organisms/Navbar";
import { FooterSection } from "@/src/components/organisms/FooterSection";
import { ProposalForm } from "@/src/components/organisms/ProposalForm";
import Link from "next/link";

export default function ProposalPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <div className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-block">
                ← Back to Home
              </Link>
              <h1 className="font-poppins text-4xl font-bold text-black lg:text-5xl mb-4">
                Get A Proposal
              </h1>
              <p className="text-base text-slate-600 lg:text-lg max-w-2xl mx-auto">
                Ready to start your next project? Fill out the form below and our team will get back to you with a comprehensive proposal tailored to your needs.
              </p>
            </div>

            {/* Form */}
            <ProposalForm />
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
