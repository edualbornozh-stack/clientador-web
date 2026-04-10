import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RUBROS_CONFIG, RUBROS_LIST } from "@/lib/rubros-config";
import RubroHero from "@/components/RubroHero";
import Features from "@/components/Features";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import Channels from "@/components/Channels";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FadeIn from "@/components/FadeIn";
import DepthBackground from "@/components/DepthBackground";

/* ─── Static params ──────────────────────────────────────── */
export function generateStaticParams() {
  return RUBROS_LIST.map((r) => ({ slug: r.slug }));
}

/* ─── Dynamic metadata ───────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const rubro = RUBROS_CONFIG[slug];

  if (!rubro) {
    return {
      title: "Rubro no encontrado – Clientador",
    };
  }

  return {
    title: `La mejor IA para ${rubro.label} – Atiende y Vende Automáticamente | Clientador`,
    description: rubro.metaDescription,
    alternates: {
      canonical: `https://clientador.com/rubros/${slug}`,
    },
    openGraph: {
      title: rubro.heroTitle,
      description: rubro.metaDescription,
      url: `https://clientador.com/rubros/${slug}`,
      type: "website",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: rubro.heroTitle,
      description: rubro.metaDescription,
      images: ["/images/og-image.png"],
    },
  };
}

/* ─── Page ───────────────────────────────────────────────── */
export default async function RubroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rubro = RUBROS_CONFIG[slug];

  if (!rubro) notFound();

  return (
    <div style={{ position: "relative", background: "#020617" }}>
      <DepthBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <main>
          <RubroHero
            badge={rubro.badge}
            title={rubro.heroTitle}
            subtitle={rubro.heroSubtitle}
          />
          <FadeIn><Features /></FadeIn>
          <FadeIn delay={0.05}><FeatureDeepDive /></FadeIn>
          <FadeIn delay={0.05}><Channels /></FadeIn>
          <FadeIn delay={0.05}><Process /></FadeIn>
          <FadeIn delay={0.05}><Testimonials /></FadeIn>
          <FadeIn delay={0.05}><Pricing /></FadeIn>
          <FadeIn delay={0.05}><FAQ /></FadeIn>
          <FadeIn delay={0.05}><FooterCTA /></FadeIn>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </div>
  );
}
