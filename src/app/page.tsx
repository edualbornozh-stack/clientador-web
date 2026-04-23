import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import Channels from "@/components/Channels";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CostCalculator from "@/components/CostCalculator";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <FadeIn><Features /></FadeIn>
        <FadeIn delay={0.05}><FeatureDeepDive /></FadeIn>
        <FadeIn delay={0.05}><Channels /></FadeIn>
        <FadeIn delay={0.05}><Process /></FadeIn>
        <FadeIn delay={0.05}><Testimonials /></FadeIn>
        <FadeIn delay={0.05}><Pricing /></FadeIn>
        <FadeIn delay={0.05}><CostCalculator /></FadeIn>
        <FadeIn delay={0.05}><FAQ /></FadeIn>
        <FadeIn delay={0.05}><FooterCTA /></FadeIn>
      </main>
      <Footer />
    </>
  );
}
