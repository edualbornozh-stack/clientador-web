"use client";

import { useBookingModal } from "@/components/BookingModal";

const STEPS = [
  {
    num: "01",
    title: "Agenda tu demo",
    desc: "Reserva una sesión gratuita de 30 minutos con nuestro equipo. Te mostramos Clientador en vivo con casos reales de tu industria.",
    color: "#7c3aed",
  },
  {
    num: "02",
    title: "Configuramos todo",
    desc: "Nuestro equipo integra Clientador con tus canales, entrena la IA con información de tu negocio y configura tus flujos de automatización.",
    color: "#a78bfa",
  },
  {
    num: "03",
    title: "Activamos la IA",
    desc: "En menos de 24 horas tu agente de IA está activo, respondiendo clientes, agendando citas y calificando leads automáticamente.",
    color: "#60a5fa",
  },
  {
    num: "04",
    title: "Atiende más clientes",
    desc: "Tu negocio opera 24/7 sin aumentar el equipo. Más conversiones, menos tiempo perdido, clientes más satisfechos.",
    color: "#34d399",
  },
];

export default function Process() {
  const { open } = useBookingModal();
  return (
    <section className="py-20" style={{ background: "transparent" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-widest" style={{ color: "#a78bfa" }}>
            Cómo funciona
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#f1f5f9" }}>
            De cero a IA en 4 pasos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
            Sin complicaciones técnicas. Nuestro equipo hace todo el trabajo pesado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative">
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-0.5 z-0"
                  style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.3), transparent)", transform: "translateX(-50%)" }}
                />
              )}
              <div
                className="rounded-2xl p-6 relative z-10 h-full"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-lg text-white mb-4"
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold mb-2 text-lg" style={{ color: "#e2e8f0" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={open}
            className="btn-primary px-8 py-4 text-sm"
          >
            Comenzar ahora — es gratis
          </button>
        </div>
      </div>
    </section>
  );
}
