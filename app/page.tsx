import { Navbar } from "@/src/components/organisms/Navbar";
import { HeroSection } from "@/src/components/organisms/HeroSection";
import { AboutSection } from "@/src/components/organisms/AboutSection";
import { LogoTickerSection } from "@/src/components/organisms/LogoTickerSection";
import { SectorsWeServeSection } from "@/src/components/organisms/SectorsWeServeSection";

import { CertificatesSection } from "@/src/components/organisms/CertificatesSection";
import { CareerSection } from "@/src/components/organisms/CareerSection";
import { RequestProposalSection } from "@/src/components/organisms/RequestProposalSection";
import { FooterSection } from "@/src/components/organisms/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <HeroSection />
        <SectorsWeServeSection />
        <AboutSection />
        <CertificatesSection />
        <LogoTickerSection />
        <CareerSection />
        <RequestProposalSection />
      </main>
      <FooterSection />
    </>
  );
}
