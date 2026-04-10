"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Cuánto tiempo tarda la implementación?",
    a: "La mayoría de los negocios están operativos en menos de 24 horas. Nuestro equipo hace la configuración completa: integración de canales, entrenamiento de la IA con información de tu negocio y configuración de flujos.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Clientador está diseñado para que cualquier persona pueda usarlo. Nuestro equipo hace todo el trabajo técnico inicial y el panel de control es completamente visual e intuitivo.",
  },
  {
    q: "¿La IA puede manejar conversaciones complejas?",
    a: "Sí. Los agentes de Clientador están entrenados con información específica de tu negocio y pueden manejar objeciones, preguntas técnicas, cotizaciones y más. Cuando detecta una situación que requiere intervención humana, escala automáticamente.",
  },
  {
    q: "¿Funciona con WhatsApp Business API oficial?",
    a: "Sí, Clientador usa la API oficial de WhatsApp Business. Esto garantiza estabilidad, cumplimiento de términos y la posibilidad de enviar campañas masivas sin riesgo de bloqueo.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. No hay contratos de permanencia mínima. Puedes cancelar tu plan en cualquier momento desde el panel de control. No cobramos multas ni cargos por cancelación.",
  },
  {
    q: "¿Cómo se protegen los datos de mis clientes?",
    a: "Los datos se almacenan con encriptación AES-256, en servidores con certificación SOC2. Cumplimos con GDPR y la Ley 19.628 de Protección de Datos de Chile. Nunca compartimos ni vendemos datos de terceros.",
  },
  {
    q: "¿Cuántos números de WhatsApp puedo integrar?",
    a: "Puedes comenzar integrando un número de forma híbrida (co-existencia), lo que te permite seguir usando tu App de WhatsApp Business en el celular mientras Clientador automatiza las ventas en paralelo. ¡No pierdes el acceso a tus chats! Si tu negocio necesita varios números de WhatsApp, puedes hacerlo mediante API Oficial, permitiéndote centralizar tantos números como tu negocio requiera.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20" style={{ background: "transparent" }}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-widest" style={{ color: "#a78bfa" }}>
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#f1f5f9" }}>
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: open === i ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.03)",
                border: open === i ? "1px solid rgba(124,58,237,0.25)" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="font-semibold text-base pr-4 m-0" style={{ color: "#e2e8f0" }}>{faq.q}</h3>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.2)" }}
                >
                  {open === i ? (
                    <Minus size={14} style={{ color: "#a78bfa" }} />
                  ) : (
                    <Plus size={14} style={{ color: "#a78bfa" }} />
                  )}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
