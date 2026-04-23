import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COMPETITORS, ALL_COMPETITORS } from "@/lib/competitors";
import BookingButton from "@/components/BookingButton";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ competitor: string }> };

export async function generateStaticParams() {
  return ALL_COMPETITORS.map((c) => ({ competitor: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor: slug } = await params;
  const comp = COMPETITORS[slug];
  if (!comp) return {};
  return {
    title: comp.metaTitle,
    description: comp.metaDesc,
    alternates: { canonical: `https://clientador.com/alternativa/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: comp.metaTitle,
      description: comp.metaDesc,
      url: `https://clientador.com/alternativa/${slug}`,
      siteName: "Clientador",
      locale: "es_CL",
      type: "website",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
  };
}

const DIFFERENTIATORS = [
  { emoji: "♾️", title: "IA ilimitada", desc: "Solo pagas por el uso real de IA, sin cuotas fijas ni sorpresas." },
  { emoji: "💰", title: "El precio más accesible", desc: "Planes desde USD 79/mes con todo incluido. Sin contratos anuales." },
  { emoji: "🚀", title: "Sin costo de implementación", desc: "Nuestro equipo configura todo en menos de 24 horas, sin cargo." },
  { emoji: "🧑‍💼", title: "Soporte humano desde el día 1", desc: "Hablas con personas reales desde el primer momento, no con bots." },
  { emoji: "🔧", title: "Plataforma todo en uno", desc: "CRM, IA conversacional, automatizaciones, marketing y agenda en un solo lugar." },
];

export default async function AlternativaPage({ params }: Props) {
  const { competitor: slug } = await params;
  const comp = COMPETITORS[slug];
  if (!comp) notFound();

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comp.faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <main style={{ background: "#020617", minHeight: "100vh", color: "#f1f5f9" }}>

        {/* ── HERO ── */}
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "8rem 1.5rem 5rem", textAlign: "center" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "monospace" }}>
            {comp.categoryLabel} · Alternativa a {comp.name}
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginTop: "1rem", marginBottom: "1.25rem", color: "#ffffff" }}>
            {comp.headline}
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#64748b", maxWidth: "600px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            {comp.metaDesc}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <BookingButton
              label="Ver demo en vivo →"
              className="btn-primary"
              style={{ padding: "0.75rem 1.75rem", fontSize: "0.9rem" }}
            />
            <a
              href="https://wa.me/56996832736"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: "0.75rem 1.75rem", fontSize: "0.9rem" }}
            >
              Probar IA por WhatsApp
            </a>
          </div>
        </section>

        {/* ── DIFERENCIADORES ── */}
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "3rem", color: "#f1f5f9" }}>
            Por qué las pymes prefieren Clientador
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1.25rem", padding: "1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{d.emoji}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.4rem" }}>{d.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TABLA COMPARATIVA ── */}
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#f1f5f9" }}>
            Clientador vs {comp.name}
          </h2>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1.5rem", overflow: "hidden" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "rgba(124,58,237,0.15)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>Función</div>
              <div style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: 700, color: "#a78bfa", textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center" }}>Clientador</div>
              <div style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center" }}>{comp.name}</div>
            </div>
            {/* Rows */}
            {comp.comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  borderBottom: i < comp.comparisonRows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                }}
              >
                <div style={{ padding: "0.9rem 1.25rem", fontSize: "0.85rem", color: "#94a3b8" }}>{row.feature}</div>
                <div style={{ padding: "0.9rem 1.25rem", fontSize: "0.85rem", color: row.clientadorWins ? "#34d399" : "#94a3b8", textAlign: "center" }}>{row.clientador}</div>
                <div style={{ padding: "0.9rem 1.25rem", fontSize: "0.85rem", color: "#475569", textAlign: "center" }}>{row.competitor}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#f1f5f9" }}>
            Preguntas frecuentes sobre Clientador vs {comp.name}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {comp.faqItems.map((item) => (
              <div key={item.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.25rem 1.5rem" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.6rem" }}>{item.q}</h3>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section style={{ textAlign: "center", padding: "0 1.5rem 6rem" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", borderRadius: "2rem", padding: "3rem 2rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
              ¿Listo para probar la alternativa?
            </h2>
            <p style={{ color: "#64748b", marginBottom: "2rem", fontSize: "1rem", lineHeight: 1.7 }}>
              Agenda una demo en vivo y ve cómo Clientador puede reemplazar a {comp.name} con más funciones, mejor precio y soporte humano desde el día 1.
            </p>
            <BookingButton
              label="Agendar demo gratuita →"
              className="btn-primary"
              style={{ padding: "0.85rem 2rem", fontSize: "0.95rem" }}
            />
            <p style={{ marginTop: "1rem", fontSize: "0.78rem", color: "#334155" }}>
              Sin contratos · Sin costo de implementación · Configuración en 24 horas
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
