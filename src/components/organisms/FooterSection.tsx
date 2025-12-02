import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="bg-[#1e293b] py-12 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
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
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="mailto:sales@emtecsolutions.in"
                  className="hover:text-white transition-colors"
                >
                  sales@emtecsolutions.in
                </a>
              </li>
              <li>+91 9098876741 / +91 70426 76296</li>
              <li className="pt-2">
                Corporate: Unit 503, D Wing, The Atrium, Janhangir Nagar, BG
                Shitree Road, Pune - 411036
              </li>
            </ul>
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
