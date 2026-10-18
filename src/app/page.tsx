import Hero from "@/components/home/Hero";
import KeycapVisualizerDemo from "@/components/home/KeycapVisualizerDemo";
import HowItWorks from "@/components/home/HowItWorks";
import Surfaces from "@/components/home/Surfaces";
import Features from "@/components/home/Features";
import Hotkeys from "@/components/home/Hotkeys";
import Pricing from "@/components/home/Pricing";
import Faq from "@/components/home/Faq";
import DownloadSection from "@/components/home/Download";

export default function HomePage() {
  return (
    <>
      <Hero />
      <KeycapVisualizerDemo />
      <HowItWorks />
      <Surfaces />
      <Features />
      <Hotkeys />
      <Pricing />
      <Faq />
      <DownloadSection />
    </>
  );
}
