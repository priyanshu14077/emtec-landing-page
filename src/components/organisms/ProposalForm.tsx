"use client";

import { useState } from "react";
import { Button } from "@/src/components/atoms/Button";

interface ProposalFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
}

export const ProposalForm = ({ title = "Request a Proposal" }: { title?: string }) => {
  const [formData, setFormData] = useState<ProposalFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailContent = `
New Proposal Request from EMTEC Website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Project Type: ${formData.projectType}

Message:
${formData.message}
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:sales@emtecsolutions.in?subject=New Proposal Request from ${formData.name}&body=${encodeURIComponent(emailContent)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-green-900">Thank You!</h3>
          <p className="text-green-700">
            Your proposal request has been received. We'll open your email client with the details pre-filled. 
            Please send the email to complete your request.
          </p>
          <Button 
            variant="primary" 
            onClick={() => setIsSubmitted(false)}
            className="mt-4"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">{title}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Acme Corporation"
            />
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          >
            <option value="">Select a project type</option>
            <option value="MEPF Projects">MEPF Projects</option>
            <option value="C&I Projects">C&I Projects</option>
            <option value="Power T&D Projects">Power T&D Projects</option>
            <option value="Integrated Solutions">Integrated Solutions</option>
            <option value="Consulting Services">Consulting Services</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
            placeholder="Please describe your project requirements, timeline, and any specific details..."
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8"
        >
          {isSubmitting ? "Processing..." : "Send Proposal Request"}
        </Button>
      </form>
    </div>
  );
};
