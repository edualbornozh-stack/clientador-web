import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import { BookingModalProvider } from "@/components/BookingModal";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const GTM_ID = "GTM-W37VLX7P";

export const metadata: Metadata = {
  title: "La mejor IA para atender a clientes | Clientador",
  description:
    "Clientador: plataforma de IA que atiende, califica y convierte clientes 24/7 por WhatsApp, Instagram, Facebook y más. CRM inteligente, agenda automática y campañas masivas. Desde USD 79/mes.",
  keywords:
    "IA para pymes, chatbot WhatsApp Chile, CRM inteligente Latinoamérica, automatización de ventas IA, atención al cliente inteligencia artificial, agente IA WhatsApp, chatbot para negocios, automatizar ventas Chile Colombia México Argentina, plataforma IA pymes, WhatsApp Business API, agenda automática IA, marketing conversacional IA",
  authors: [{ name: "Clientador" }, { name: "MercadoProveedor SpA" }],
  creator: "Clientador",
  publisher: "Clientador",
  metadataBase: new URL("https://clientador.com"),
  alternates: { canonical: "https://clientador.com" },
  icons: {
    icon: '/images/Logo.svg',
    apple: '/images/og-image.png',
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://clientador.com",
    siteName: "Clientador",
    title: "Clientador – IA que atiende y vende por ti | WhatsApp + CRM",
    description:
      "Automatiza tu atención al cliente con IA en WhatsApp, Instagram, Facebook y TikTok. CRM, agenda y campañas en un solo lugar. Sin conocimientos técnicos. Configura en 1 hora.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Clientador – Plataforma IA para pymes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clientador – IA que atiende y vende por ti",
    description:
      "Automatiza ventas y atención al cliente con IA en WhatsApp, Instagram y más. CRM inteligente para pymes.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clientador",
  legalName: "MercadoProveedor SpA",
  url: "https://clientador.com",
  logo: "https://clientador.com/images/Logo.svg",
  foundingDate: "2024",
  foundingLocation: "Santiago, Chile",
  areaServed: ["CL", "MX", "CO", "AR", "PE"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hola@clientador.com",
    contactType: "customer support",
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://www.instagram.com/clientador",
    "https://www.facebook.com/clientador",
    "https://www.tiktok.com/@clientador",
    "https://www.youtube.com/@clientador",
    "https://www.linkedin.com/company/clientador",
  ],
};

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Clientador",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Plataforma de IA para automatizar la atención al cliente, CRM, agenda y marketing conversacional en WhatsApp, Instagram, Facebook y más canales. Diseñada para pymes en Latinoamérica.",
  url: "https://clientador.com",
  offers: [
    {
      "@type": "Offer",
      name: "Plan Básico",
      price: "79",
      priceCurrency: "USD",
      billingIncrement: "month",
      description: "3 usuarios, IA Conversacional, CRM, WhatsApp Masivo",
    },
    {
      "@type": "Offer",
      name: "Plan Growth",
      price: "129",
      priceCurrency: "USD",
      billingIncrement: "month",
      description: "7 usuarios, Automatizaciones IA, Chat Web, CRM avanzado",
    },
    {
      "@type": "Offer",
      name: "Plan Premium",
      price: "249",
      priceCurrency: "USD",
      billingIncrement: "month",
      description: "Usuarios ilimitados, Llamadas IA, Email Marketing, todo incluido",
    },
  ],
  featureList: [
    "Agente de IA conversacional 24/7",
    "CRM Inteligente con calificación de leads",
    "Agenda automatizada con IA",
    "Automatizaciones de ventas IA",
    "Marketing y campañas masivas WhatsApp",
    "Analítica y reportes en tiempo real",
    "Llamadas de voz con IA",
    "Email marketing integrado",
    "Integración WhatsApp Business API oficial",
    "Multicanal: Instagram, Facebook, TikTok, Gmail",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda la implementación de Clientador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de los negocios están operativos en menos de 24 horas. El equipo de Clientador realiza la configuración completa: integración de canales, entrenamiento de la IA con información del negocio y configuración de flujos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito conocimientos técnicos para usar Clientador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Clientador está diseñado para que cualquier persona pueda usarlo sin conocimientos técnicos. El equipo hace todo el trabajo inicial y el panel de control es completamente visual e intuitivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Clientador usa la API oficial de WhatsApp Business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, Clientador usa la API oficial de WhatsApp Business, lo que garantiza estabilidad, cumplimiento de términos y la posibilidad de enviar campañas masivas sin riesgo de bloqueo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta Clientador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clientador tiene tres planes: Plan Básico desde USD 79/mes (3 usuarios), Plan Growth desde USD 129/mes (7 usuarios) y Plan Premium desde USD 249/mes (usuarios ilimitados). El uso de IA se cobra por consumo real.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cancelar Clientador en cualquier momento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. No hay contratos de permanencia mínima. Puedes cancelar tu plan en cualquier momento desde el panel de control sin multas ni cargos adicionales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo protege Clientador los datos de mis clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los datos se almacenan con encriptación AES-256 en servidores con certificación SOC2. Clientador cumple con GDPR y la Ley 19.628 de Protección de Datos de Chile. Nunca se comparten ni venden datos de terceros.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId={GTM_ID} />
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="CL" />
        <meta name="geo.placename" content="Santiago, Chile" />
        <link rel="canonical" href="https://clientador.com" />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} min-h-screen flex flex-col antialiased font-sans`}
        style={{ backgroundColor: "#020617", margin: 0, padding: 0 }}
      >
        <BookingModalProvider>
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
        </BookingModalProvider>
      </body>
    </html>
  );
}
