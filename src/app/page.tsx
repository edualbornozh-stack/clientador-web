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
import { PRICE_LABELS } from "@/lib/config";

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda la implementación de Clientador?",
      acceptedAnswer: { "@type": "Answer", text: "La mayoría de los negocios están operativos en menos de 24 horas. El equipo de Clientador realiza la configuración completa: integración de canales, entrenamiento de la IA con información del negocio y configuración de flujos." },
    },
    {
      "@type": "Question",
      name: "¿Necesito conocimientos técnicos para usar Clientador?",
      acceptedAnswer: { "@type": "Answer", text: "No. Clientador está diseñado para que cualquier persona pueda usarlo sin conocimientos técnicos. El equipo hace todo el trabajo inicial y el panel de control es completamente visual e intuitivo." },
    },
    {
      "@type": "Question",
      name: "¿Clientador usa la API oficial de WhatsApp Business?",
      acceptedAnswer: { "@type": "Answer", text: "Sí, Clientador usa la API oficial de WhatsApp Business, lo que garantiza estabilidad, cumplimiento de términos y la posibilidad de enviar campañas masivas sin riesgo de bloqueo." },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta Clientador?",
      acceptedAnswer: { "@type": "Answer", text: `Clientador tiene tres planes: Plan Básico desde ${PRICE_LABELS.basic} (3 usuarios), Plan Growth desde ${PRICE_LABELS.growth} (7 usuarios) y Plan Premium desde ${PRICE_LABELS.premium} (usuarios ilimitados). El uso de IA se cobra por consumo real.` },
    },
    {
      "@type": "Question",
      name: "¿Puedo cancelar Clientador en cualquier momento?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. No hay contratos de permanencia mínima. Puedes cancelar tu plan en cualquier momento desde el panel de control sin multas ni cargos adicionales." },
    },
    {
      "@type": "Question",
      name: "¿Cómo protege Clientador los datos de mis clientes?",
      acceptedAnswer: { "@type": "Answer", text: "Los datos se almacenan con encriptación AES-256 en servidores con certificación SOC2. Clientador cumple con GDPR y la Ley 19.628 de Protección de Datos de Chile. Nunca se comparten ni venden datos de terceros." },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
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
