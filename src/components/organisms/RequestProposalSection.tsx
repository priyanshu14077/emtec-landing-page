"use client";

import { useState } from "react";
import { Button } from "@/src/components/atoms/Button";

interface IFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
}

export const RequestProposalSection = () => {
  const [formState, setFormState] = useState<IFormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    sector: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // server-side validation and submission to be added via server actions / API - to be attached
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-white py-24 text-slate-900"
      aria-labelledby="proposal-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        <div className="flex-1 space-y-5">
          <h2
            id="proposal-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400"
          >
            Let&apos;s talk
          </h2>
          <p className="text-3xl font-semibold">
            Tell us about your next project.
          </p>
          <p className="max-w-md text-sm text-slate-600">
            Share a few details about your requirement and our team will reach
            out with a tailored proposal covering scope, timelines, and
            implementation approach.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {/* to be attached */}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {/* to be attached */}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {/* to be attached */}
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Request proposal
            </h3>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="company"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    required
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="sector"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                >
                  Sector
                </label>
                <input
                  id="sector"
                  name="sector"
                  value={formState.sector}
                  onChange={handleChange}
                  placeholder="Metro, solar, industrial, data centre..."
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Button type="submit" variant="primary">
                  Submit request
                </Button>
                {submitted && (
                  <p className="text-xs text-slate-600">
                    Thank you for reaching out. Our team will connect with you
                    shortly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
