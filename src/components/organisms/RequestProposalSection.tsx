"use client";

import { useState } from "react";
import { Button } from "@/src/components/atoms/Button";

interface IFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export const RequestProposalSection = () => {
  const [formState, setFormState] = useState<IFormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // server-side validation and submission to be added via server actions / API
    setSubmitted(true);
  };

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
          <div className="rounded-2xl bg-slate-50 p-8 shadow-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <input
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    id="company"
                    name="company"
                    required
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <select
                  id="projectType"
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Project Type</option>
                  <option value="metro">Metro</option>
                  <option value="solar">Solar</option>
                  <option value="data-centre">Data Centre</option>
                  <option value="industrial">Industrial</option>
                  <option value="airport">Airport</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="hospital">Hospital</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Describe your scope (site, drawings, timelines)"
                  className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Request Proposal
                </Button>
              </div>

              {submitted && (
                <p className="text-center text-sm text-green-600">
                  Thank you for reaching out. Our team will connect with you
                  shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
