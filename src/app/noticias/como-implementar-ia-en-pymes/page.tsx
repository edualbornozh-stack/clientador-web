import type { Metadata } from "next";
import Link from "next/link";
import DepthBackground from "@/components/DepthBackground";

export const metadata: Metadata = {
  title: "Cómo implementar IA en Pymes – Clientador",
  description:
    "Guía práctica para automatizar ventas y atención al cliente en tu pyme usando inteligencia artificial.",
};

export default function ArticleComoImplementarIAPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#020617" }}>
      <DepthBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-3xl mx-auto px-4 py-16">
          {/* Back link */}
          <Link
            href="/noticias"
            className="text-sm font-medium hover:text-white transition-colors mb-10 block"
            style={{ color: "#a78bfa" }}
          >
            ← Volver a Noticias
          </Link>

          {/* Article header */}
          <div className="mb-12">
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

            <h1
              className="text-3xl md:text-4xl font-bold leading-snug mb-6"
              style={{ color: "#f1f5f9" }}
            >
              Cómo implementar IA en Pymes: Guía para automatizar ventas y atención
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm mb-8" style={{ color: "#475569" }}>
              <span>Abril 2025</span>
              <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
              <span>8 min lectura</span>
            </div>

            {/* Intro paragraph */}
            <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
              La inteligencia artificial dejó de ser exclusiva para grandes corporaciones. Hoy, una pyme en Chile, México o Colombia puede automatizar su atención al cliente, calificar leads y cerrar ventas mientras duerme, con herramientas accesibles y sin necesidad de un equipo de ingeniería. Esta guía te muestra cómo hacerlo, paso a paso.
            </p>
          </div>

          {/* Article body */}
          <div className="space-y-10" style={{ color: "#94a3b8" }}>

            {/* Section 1 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: "#f1f5f9" }}
              >
                ¿Por qué la IA es relevante para las pymes ahora?
              </h2>
              <p className="leading-relaxed mb-4">
                Durante años, implementar sistemas de inteligencia artificial requería inversiones millonarias, equipos de data scientists y meses de desarrollo. Eso ha cambiado radicalmente. El auge de modelos de lenguaje de gran escala (LLMs) y plataformas especializadas ha democratizado el acceso, permitiendo que cualquier negocio con acceso a internet pueda integrar IA en sus procesos de ventas y atención.
              </p>
              <p className="leading-relaxed">
                Para una pyme, esto representa una ventaja competitiva histórica: responder consultas en segundos a las 3 de la mañana, calificar automáticamente a los prospectos más interesados y mantener una conversación personalizada con cientos de clientes simultáneamente, sin contratar más personal.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: "#f1f5f9" }}
              >
                3 beneficios clave de la IA para tu negocio
              </h2>

              <div className="space-y-6">
                {/* Benefit 1 */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    className="text-xs font-mono uppercase tracking-widest mb-2"
                    style={{ color: "#a78bfa" }}
                  >
                    01 — Reducción de costos operativos
                  </p>
                  <p className="leading-relaxed">
                    Un agente de IA puede manejar el equivalente al trabajo de 3 a 5 agentes humanos en atención al cliente, sin días libres ni errores por fatiga. Los negocios que implementan automatización con IA reportan reducciones de hasta un 60% en el costo por conversación, liberando recursos para áreas estratégicas.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    className="text-xs font-mono uppercase tracking-widest mb-2"
                    style={{ color: "#a78bfa" }}
                  >
                    02 — Disponibilidad 24/7 sin costo adicional
                  </p>
                  <p className="leading-relaxed">
                    El 67% de los clientes prefiere autoservicio antes que hablar con un representante. Un chatbot inteligente disponible las 24 horas responde dudas, agenda citas y procesa solicitudes en cualquier momento, capturando oportunidades que de otro modo se perderían fuera del horario laboral.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    className="text-xs font-mono uppercase tracking-widest mb-2"
                    style={{ color: "#a78bfa" }}
                  >
                    03 — Calificación automática de leads
                  </p>
                  <p className="leading-relaxed">
                    No todos los prospectos tienen la misma intención de compra. La IA puede hacer preguntas de calificación, detectar señales de interés real y priorizar automáticamente a los leads más calientes, para que tu equipo de ventas solo dedique tiempo a los contactos con mayor probabilidad de conversión.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: "#f1f5f9" }}
              >
                Cómo implementarlo: 4 pasos prácticos
              </h2>
              <div className="space-y-5">
                <div>
                  <p
                    className="font-semibold mb-2"
                    style={{ color: "#f1f5f9" }}
                  >
                    Paso 1: Define el caso de uso prioritario
                  </p>
                  <p className="leading-relaxed">
                    No intentes automatizar todo a la vez. Identifica el área de mayor fricción: ¿dónde se pierden más leads? ¿Qué preguntas responde tu equipo una y otra vez? Empieza por ahí. La atención vía WhatsApp suele ser el punto de entrada más efectivo para pymes latinoamericanas.
                  </p>
                </div>
                <div>
                  <p
                    className="font-semibold mb-2"
                    style={{ color: "#f1f5f9" }}
                  >
                    Paso 2: Elige la plataforma correcta
                  </p>
                  <p className="leading-relaxed">
                    Busca una solución que se integre con los canales donde ya están tus clientes (WhatsApp, Instagram, web), que no requiera código para configurar, y que ofrezca soporte en español. Las plataformas especializadas para pymes suelen tener tiempos de implementación de días, no meses.
                  </p>
                </div>
                <div>
                  <p
                    className="font-semibold mb-2"
                    style={{ color: "#f1f5f9" }}
                  >
                    Paso 3: Entrena al agente con el conocimiento de tu negocio
                  </p>
                  <p className="leading-relaxed">
                    El agente de IA debe conocer tu catálogo, tus precios, tus políticas y el tono de tu marca. La mayoría de plataformas modernas permiten subir documentos, conectar bases de datos o simplemente escribir las respuestas esperadas. Cuanto mejor sea la base de conocimiento, más efectivo será el agente.
                  </p>
                </div>
                <div>
                  <p
                    className="font-semibold mb-2"
                    style={{ color: "#f1f5f9" }}
                  >
                    Paso 4: Mide y optimiza continuamente
                  </p>
                  <p className="leading-relaxed">
                    Monitorea métricas como tasa de resolución automática, satisfacción del cliente y leads calificados por semana. Con esos datos, ajusta el flujo de conversación, mejora respuestas y expande gradualmente la cobertura del agente a otros canales o departamentos.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: "#f1f5f9" }}
              >
                Errores comunes al implementar IA en una pyme
              </h2>
              <ul className="space-y-3 list-none pl-0">
                {[
                  "Querer automatizar todo desde el día uno sin validar el caso de uso principal.",
                  "No actualizar la base de conocimiento del agente cuando cambian precios o productos.",
                  "Olvidar definir cuándo y cómo el agente debe escalar a un humano.",
                  "Elegir plataformas demasiado complejas o pensadas para grandes empresas.",
                  "No comunicarle a los clientes que interactúan con un asistente de IA.",
                ].map((error, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: "2px" }}>✕</span>
                    <span className="leading-relaxed">{error}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Conclusion */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: "#f1f5f9" }}
              >
                Conclusión: el momento de actuar es ahora
              </h2>
              <p className="leading-relaxed mb-4">
                Las pymes que adopten IA en los próximos 12 a 18 meses tendrán una ventaja competitiva significativa sobre las que esperen. No se trata de reemplazar personas, sino de multiplicar la capacidad de tu equipo y ofrecer una experiencia de cliente que antes solo estaba al alcance de grandes empresas.
              </p>
              <p className="leading-relaxed">
                En Clientador hemos construido exactamente esa plataforma: diseñada para pymes latinoamericanas, fácil de implementar, con soporte en español y resultados desde la primera semana. Si quieres ver cómo funciona en la práctica para tu negocio, agenda una demo gratuita y te lo mostramos en vivo.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div
            className="mt-14 rounded-3xl p-8 md:p-10 text-center"
            style={{
              background: "rgba(167,139,250,0.06)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(167,139,250,0.2)",
              boxShadow: "0 0 40px rgba(167,139,250,0.06)",
            }}
          >
            <p
              className="text-xs font-mono uppercase tracking-widest mb-3"
              style={{ color: "#a78bfa" }}
            >
              Próximo paso
            </p>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#f1f5f9" }}
            >
              ¿Listo para automatizar tu negocio?
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: "#94a3b8" }}>
              Te mostramos en vivo cómo Clientador puede transformar la atención al cliente y las ventas de tu pyme en menos de una semana.
            </p>
            <a
              href="https://mi.clientador.com/widget/booking/9BIrfq1qKd6NoCAObqzO"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 inline-block"
            >
              Agenda una demo gratuita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
