import AboutSection from "@/components/AboutSection";
import { Architecture, TechIntegration } from "@/components/Features";
import Footer from "@/components/Footer";
import { HeroSection, HeroSection_2 } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      {/* <HeroSection /> */}
      <HeroSection_2/>
      <AboutSection />
      <Architecture />
      <TechIntegration />
      <Footer />
    </main>
  );
}
