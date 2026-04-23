import type { Metadata } from "next";
import { AI_COMPETITORS, CRM_COMPETITORS } from "@/lib/competitors";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import CompetitorCard from "@/components/CompetitorCard";

export const metadata: Metadata = {
  title: "Alternativas a CRM y plataformas de IA para WhatsApp | Clientador",
  description: "Compara Clientador con las principales plataformas de IA para WhatsApp y CRM del mercado. Descubre por qué somos la alternativa más completa y económica.",
  alternates: { canonical: "https://clientador.com/alternativa" },
};

export default function AlternativaIndexPage() {
  return (
    <>
      <main style={{ background: "#020617", minHeight: "100vh", color: "#f1f5f9" }}>

        {/* ── HERO ── */}
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "8rem 1.5rem 4rem", textAlign: "center" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "monospace" }}>
            Alternativas
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.15, marginTop: "1rem", marginBottom: "1.25rem", color: "#ffffff" }}>
            La alternativa a tu CRM o plataforma de IA actual
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Compara Clientador con las principales herramientas del mercado y descubre por qué cientos de pymes en Latinoamérica eligieron cambiarse.
          </p>
        </section>

        {/* ── IA / WhatsApp ── */}
        <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>
          <h2 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a78bfa", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "monospace" }}>
            Plataformas de IA para WhatsApp
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
            {AI_COMPETITORS.map((c) => (
              <CompetitorCard key={c.slug} slug={c.slug} name={c.name} />
            ))}
          </div>
        </section>

        {/* ── CRM ── */}
        <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <h2 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a78bfa", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "monospace" }}>
            CRM
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
            {CRM_COMPETITORS.map((c) => (
              <CompetitorCard key={c.slug} slug={c.slug} name={c.name} />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ textAlign: "center", padding: "0 1.5rem 6rem" }}>
          <BookingButton
            label="Agendar demo gratuita →"
            className="btn-primary"
            style={{ padding: "0.85rem 2rem", fontSize: "0.95rem" }}
          />
        </section>

      </main>
      <Footer />
    </>
  );
}
