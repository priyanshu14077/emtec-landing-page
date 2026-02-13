"use client";

import { ProposalForm } from "@/src/components/organisms/ProposalForm";

export const RequestProposalSection = () => {
  return (
    <section
      id="contact"
      className="bg-white py-24 text-slate-900"
      aria-labelledby="proposal-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        <div className="flex-1 space-y-6">
          <h1 className="font-poppins text-4xl font-bold text-black">
            Let&apos;s talk
          </h1>
          <p className="text-slate-600">
            Tell us about your scope, timeline and constraints - we&apos;ll
            revert with a clear plan and commercial 48 hours.
          </p>

          <div className="space-y-4 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p className="text-slate-900">
                  +91 9098876741 / +91 70426 76296
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <a
                  href="mailto:Sales@emtecsolutions.in"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Sales@emtecsolutions.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p className="text-slate-900">
                  Corporate: Unit 503, D Wing, The Atrium, Janhangir Nagar, BG
                  Shitree Road, Pune - 411036
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <ProposalForm title="Request Proposal" />
        </div>
      </div>
    </section>
  );
};
