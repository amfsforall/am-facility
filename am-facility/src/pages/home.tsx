import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Services } from "@/components/services";
import { Impact } from "@/components/impact";
import { WhyUs } from "@/components/why-us";
import { Industries } from "@/components/industries";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Services />
        <Impact />
        <WhyUs />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
