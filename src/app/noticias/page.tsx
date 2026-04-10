import type { Metadata } from "next";
import Link from "next/link";
import DepthBackground from "@/components/DepthBackground";

export const metadata: Metadata = {
  title: "Noticias IA para Negocios – Clientador | Guías y Tendencias",
  description: "Guías prácticas, tendencias y estrategias sobre inteligencia artificial para pymes. Aprende cómo automatizar ventas y atención al cliente con IA.",
  alternates: { canonical: "https://clientador.com/noticias" },
  openGraph: {
    title: "Noticias IA para Negocios – Clientador",
    description: "Guías y tendencias sobre IA para automatizar tu pyme en Latinoamérica.",
    url: "https://clientador.com/noticias",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function NoticiasPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#020617" }}>
      <DepthBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Back link */}
          <Link
            href="/"
            className="text-sm font-medium hover:text-white transition-colors mb-10 block"
            style={{ color: "#a78bfa" }}
          >
            ← Volver al inicio
          </Link>

          {/* Header */}
          <div className="mb-14">
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: "#a78bfa" }}
            >
              Noticias
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#f1f5f9" }}
            >
              Tendencias e insights sobre IA para negocios
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
              Exploramos cómo la inteligencia artificial está transformando las pymes latinoamericanas. Guías prácticas, casos de uso y estrategias para automatizar tu negocio.
            </p>
          </div>

          {/* Article cards grid */}
          <div className="grid md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(167,139,250,0.2)",
              boxShadow: "0 0 40px rgba(167,139,250,0.06)",
            }}
          >
            {/* Category tag */}
            <div className="mb-5">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(167,139,250,0.12)",
                  color: "#a78bfa",
                  border: "1px solid rgba(167,139,250,0.25)",
                }}
              >
                IA para PYMES
              </span>
            </div>

            {/* Article title */}
            <h2
              className="text-2xl md:text-3xl font-bold leading-snug mb-4"
              style={{ color: "#f1f5f9" }}
            >
              Cómo implementar IA en Pymes: Guía para automatizar ventas y atención
            </h2>

            {/* Excerpt */}
            <p className="text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
              Las pequeñas y medianas empresas ya no necesitan grandes presupuestos para acceder a inteligencia artificial. Descubre cómo implementar IA de forma práctica en tu negocio: desde la atención al cliente automatizada hasta la calificación de leads, paso a paso.
            </p>

            {/* Footer meta + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4 text-sm" style={{ color: "#475569" }}>
                <span>Abril 2025</span>
                <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                <span>8 min lectura</span>
              </div>
              <Link
                href="/noticias/como-implementar-ia-en-pymes"
                className="btn-secondary text-sm px-5 py-2 inline-block text-center"
              >
                Leer artículo →
              </Link>
            </div>
          </div>

          {/* Card 2 — Calculadora */}
          <div
            className="rounded-3xl p-8 md:p-10 flex flex-col"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(167,139,250,0.2)",
              boxShadow: "0 0 40px rgba(167,139,250,0.06)",
            }}
          >
            <div className="mb-5">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(167,139,250,0.12)",
                  color: "#a78bfa",
                  border: "1px solid rgba(167,139,250,0.25)",
                }}
              >
                Costos IA
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold leading-snug mb-4"
              style={{ color: "#f1f5f9" }}
            >
              ¿Cuánto cuesta un agente de IA conversacional para tu negocio?
            </h2>
            <p className="text-base leading-relaxed mb-8 flex-1" style={{ color: "#94a3b8" }}>
              Calcula en tiempo real cuánto pagarás mensualmente por usar IA en tu atención al cliente. Comparativa de modelos GPT-4.1, GPT-5 y más — con desglose de tokens y costo por conversación.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4 text-sm" style={{ color: "#475569" }}>
                <span>Abril 2025</span>
                <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                <span>5 min lectura</span>
              </div>
              <Link
                href="/noticias/calculadora-costos-ia"
                className="btn-secondary text-sm px-5 py-2 inline-block text-center"
              >
                Leer artículo →
              </Link>
            </div>
          </div>

          </div>{/* end grid */}
        </div>
      </div>
    </div>
  );
}
