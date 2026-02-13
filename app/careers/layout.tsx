import { Navbar } from "@/src/components/organisms/Navbar";
import { FooterSection } from "@/src/components/organisms/FooterSection";

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        {children}
      </main>
      <FooterSection />
    </>
  );
}
