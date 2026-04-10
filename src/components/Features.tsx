"use client";

import {
  MessageSquare,
  Users,
  Calendar,
  Zap,
  BarChart3,
  Mail,
} from "lucide-react";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Chat IA Multicanal",
    desc: "Atiende automáticamente por WhatsApp, Instagram, Facebook, TikTok, Web y Gmail con un solo agente de IA.",
    color: "#a78bfa",
    bg: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    icon: Users,
    title: "CRM Inteligente",
    desc: "Registra automáticamente cada contacto, conversación y etapa del embudo. Tu equipo siempre al día.",
    color: "#60a5fa",
    bg: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.25)",
  },
  {
    icon: Calendar,
    title: "Agenda Automatizada",
    desc: "La IA agenda, reagenda y cancela citas directamente en la conversación, sin intervención humana.",
    color: "#34d399",
    bg: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.25)",
  },
  {
    icon: Zap,
    title: "Automatizaciones IA",
    desc: "Crea flujos de trabajo inteligentes: seguimientos automáticos, recordatorios, cotizaciones y más.",
    color: "#fbbf24",
    bg: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    icon: Mail,
    title: "Marketing y Campañas",
    desc: "Envía campañas masivas por WhatsApp y email con segmentación inteligente y personalización por IA.",
    color: "#f472b6",
    bg: "rgba(236,72,153,0.12)",
    border: "rgba(236,72,153,0.25)",
  },
  {
    icon: BarChart3,
    title: "Analítica y Reportes",
    desc: "Dashboards en tiempo real con métricas de conversión, satisfacción y rendimiento del equipo.",
    color: "#c084fc",
    bg: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.25)",
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-24" style={{ background: "transparent" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#a78bfa" }}>
            Funcionalidades
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold" style={{ color: "#f1f5f9" }}>
            Todo lo que necesitas para convertir más
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
            Desde el primer contacto hasta el cliente fidelizado, Clientador te acompaña en cada paso del proceso de ventas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid rgba(255,255,255,0.08)`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = f.border;
                  (e.currentTarget as HTMLElement).style.background = f.bg;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: f.bg, border: `1px solid ${f.border}` }}
                >
                  <Icon size={20} style={{ color: f.color }} />
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "#e2e8f0" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
