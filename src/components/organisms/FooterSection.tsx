import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="bg-[#1e293b] py-12 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Logo Column */}
          <div className="space-y-4">
            <div className="relative h-10 w-32">
              <Image
                src="/assets/logo-strip.png"
                alt="Emtech"
                fill
                className="object-contain object-left brightness-0 invert"
                sizes="128px"
              />
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#ehs"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  EHS & Quality
                </Link>
              </li>
            </ul>
          </div>

          {/* Work Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Work</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#sectors"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Sectors
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#case-studies"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="mailto:sales@emtecsolutions.in"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  sales@emtecsolutions.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                +91 9098876741 / +91 70426 76296
              </li>
              <li className="pt-2">
                Corporate: Unit 503, D Wing, The Atrium, Janhangir Nagar, BG
                Shitree Road, Pune - 411036
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="mailto:sales@emtecsolutions.in"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center">
          <p className="text-sm text-slate-400">
            2025 EMTEC Solutions. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
