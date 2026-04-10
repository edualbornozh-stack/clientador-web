import type { Metadata } from "next";
import Link from "next/link";
import DepthBackground from "@/components/DepthBackground";
import CostCalculator from "@/components/CostCalculator";

export const metadata: Metadata = {
  title: "Calculadora Costos IA: ¿Cuánto Cuesta un Agente Conversacional? – Clientador",
  description: "Calcula en tiempo real cuánto cuesta implementar un agente de IA conversacional para tu negocio. Compara modelos GPT-4.1 Mini, GPT-5 y más. Solo pagas por lo que usas.",
  alternates: { canonical: "https://clientador.com/noticias/calculadora-costos-ia" },
  openGraph: {
    title: "¿Cuánto Cuesta un Agente de IA Conversacional?",
    description: "Calculadora interactiva de costos de IA para pymes. Compara modelos y estima tu inversión mensual real.",
    url: "https://clientador.com/noticias/calculadora-costos-ia",
    type: "article",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function CalculadoraCostosPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#020617" }}>
      <DepthBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-3xl mx-auto px-4 py-16">

          {/* Back */}
          <Link
            href="/noticias"
            className="text-sm font-medium hover:text-white transition-colors mb-10 block"
            style={{ color: "#a78bfa" }}
          >
            ← Volver a Noticias
          </Link>

          {/* Category + meta */}
          <div className="flex items-center gap-3 mb-6">
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
            <span className="text-xs" style={{ color: "#475569" }}>Abril 2025 · 5 min lectura</span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl font-bold leading-tight mb-6"
            style={{ color: "#f1f5f9" }}
          >
            ¿Cuánto cuesta un agente de IA conversacional para tu negocio?
          </h1>

          {/* Intro */}
          <p className="text-lg leading-relaxed mb-10" style={{ color: "#94a3b8" }}>
            Una de las primeras preguntas que hacen los dueños de negocios al explorar la IA es: <em style={{ color: "#cbd5e1" }}>&quot;¿cuánto me va a costar?&quot;</em> La respuesta depende del modelo de lenguaje que uses, cuántas conversaciones maneja tu negocio y qué tan extensas son esas conversaciones. En este artículo te explicamos cómo funciona la estructura de costos y te damos una calculadora interactiva para que estimes tu inversión real.
          </p>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#f1f5f9" }}>¿Cómo se cobran los modelos de IA?</h2>
            <p className="leading-relaxed text-sm mb-4" style={{ color: "#94a3b8" }}>
              Los modelos de lenguaje como GPT-4.1 o GPT-5 no se cobran por &quot;pregunta&quot;, sino por <strong style={{ color: "#cbd5e1" }}>tokens</strong>: fragmentos de texto que el modelo procesa. Cada conversación genera tokens de entrada (lo que el usuario escribe + el contexto del sistema) y tokens de salida (la respuesta del agente).
            </p>
            <p className="leading-relaxed text-sm" style={{ color: "#94a3b8" }}>
              El precio varía según el modelo. Los modelos más económicos (como GPT-4.1 Mini) cuestan centavos por millón de tokens, mientras que los modelos más potentes (GPT-5) tienen un costo mayor pero entregan respuestas más complejas y precisas.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#f1f5f9" }}>Variables que afectan el costo</h2>
            <div className="space-y-3">
              {[
                ["📨 Volumen de conversaciones", "A más conversaciones por día, mayor costo mensual. Un negocio pequeño con 20 conversaciones diarias gasta muy diferente a uno con 300."],
                ["🧠 Modelo elegido", "GPT-4.1 Mini es ideal para consultas simples (precios, horarios, disponibilidad). GPT-4.1 o GPT-5 son mejores para ventas complejas o soporte técnico."],
                ["💬 Extensión de cada conversación", "Cada intercambio de mensajes consume tokens. Una conversación de 6 mensajes promedio es el estándar para atención al cliente."],
              ].map(([title, desc]) => (
                <div
                  key={String(title)}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p className="font-semibold text-sm mb-1" style={{ color: "#e2e8f0" }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Calculator */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-2" style={{ color: "#f1f5f9" }}>Calcula tu costo estimado</h2>
            <p className="text-sm leading-relaxed mb-0" style={{ color: "#94a3b8" }}>
              Ajusta el modelo de IA y el volumen de conversaciones para obtener una estimación de cuánto pagarás mensualmente por el uso de IA en tu negocio.
            </p>
          </section>
        </div>

        {/* Calculator — full width within 4xl container */}
        <div className="max-w-4xl mx-auto px-4">
          <CostCalculator />
        </div>

        {/* Closing content */}
        <div className="max-w-3xl mx-auto px-4 pb-16">
          {/* Section 4 */}
          <section className="mt-4 mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#f1f5f9" }}>¿Esto incluye todo lo que pago?</h2>
            <p className="leading-relaxed text-sm mb-4" style={{ color: "#94a3b8" }}>
              El costo estimado en la calculadora corresponde únicamente al uso de IA (tokens del modelo). En Clientador, este costo se suma al plan base que incluye CRM, agenda, automatizaciones y soporte. La IA se cobra según consumo real — sin sorpresas ni costos fijos elevados.
            </p>
            <p className="leading-relaxed text-sm" style={{ color: "#94a3b8" }}>
              Esto significa que un negocio pequeño con pocas conversaciones puede empezar con un costo de IA mínimo, mientras escala sus costos solo cuando crece su demanda.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#f1f5f9" }}>¿Vale la pena la inversión?</h2>
            <p className="leading-relaxed text-sm mb-4" style={{ color: "#94a3b8" }}>
              Si tu agente IA atiende 100 conversaciones al día con GPT-4.1 Mini, el costo mensual de IA ronda los <strong style={{ color: "#cbd5e1" }}>$10–$15 USD</strong>. Comparado con el costo de un ejecutivo de atención parcial, el retorno es inmediato. Además, el agente trabaja 24/7, no comete errores por fatiga y escala sin fricción.
            </p>
          </section>

          {/* CTA */}
          <div
            className="rounded-3xl p-8 text-center"
            style={{
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(167,139,250,0.2)",
            }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>
              ¿Quieres verlo en acción?
            </p>
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#f1f5f9" }}>
              Agenda una demo gratuita
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
              Te mostramos cómo funciona el agente IA de Clientador en tu negocio, con una estimación real de costos adaptada a tu volumen.
            </p>
            <a
              href="https://mi.clientador.com/widget/booking/9BIrfq1qKd6NoCAObqzO"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5 text-sm"
            >
              AGENDAR DEMO GRATUITA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
