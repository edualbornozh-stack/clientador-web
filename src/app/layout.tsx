import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
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

const GTM_ID = process.env.GTM_ID ?? "";

export const metadata: Metadata = {
  title: "Clientador – IA para convertir clientes más rápido",
  description:
    "Clientador es la plataforma de IA que automatiza la atención al cliente por WhatsApp, Instagram, Facebook, TikTok y más. CRM, agenda y campañas en un solo lugar.",
  keywords:
    "IA para negocios, chatbot WhatsApp, CRM inteligente, automatización de ventas, atención al cliente IA, agenda automática, marketing conversacional",
  authors: [{ name: "Clientador" }],
  creator: "Clientador",
  publisher: "Clientador",
  metadataBase: new URL("https://clientador.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: '/Favicon.ico',
    apple: '/images/og-image.png',
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://clientador.com",
    siteName: "Clientador",
    title: "Clientador – IA para convertir clientes más rápido",
    description:
      "Automatiza la atención al cliente con IA. WhatsApp, Instagram, Facebook, TikTok y más canales. CRM, agenda y campañas todo en uno.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clientador – IA para convertir clientes más rápido",
    description:
      "Automatiza la atención al cliente con IA. WhatsApp, Instagram, Facebook y más.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Clientador",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Plataforma de IA para automatizar la atención al cliente, CRM, agenda y marketing conversacional en WhatsApp, Instagram, Facebook y más canales.",
  url: "https://clientador.com",
  offers: [
    {
      "@type": "Offer",
      name: "Plan Básico",
      price: "79",
      priceCurrency: "USD",
      billingIncrement: "month",
    },
    {
      "@type": "Offer",
      name: "Plan Growth",
      price: "129",
      priceCurrency: "USD",
      billingIncrement: "month",
    },
    {
      "@type": "Offer",
      name: "Plan Premium",
      price: "249",
      priceCurrency: "USD",
      billingIncrement: "month",
    },
  ],
  featureList: [
    "Chat IA multicanal",
    "CRM Inteligente",
    "Agenda automatizada",
    "Automatizaciones IA",
    "Marketing y campañas",
    "Analítica y reportes",
    "Llamadas de voz IA",
    "Email marketing",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "200",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} min-h-screen flex flex-col antialiased font-sans`}
        style={{ backgroundColor: "#020617", margin: 0, padding: 0 }}
      >
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
