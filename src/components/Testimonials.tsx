"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Valentina Morales",
    role: "Dueña de estética",
    location: "Santiago, Chile",
    text: "Antes perdíamos el 40% de los leads por no responder rápido. Con Clientador la IA responde al instante y ya tenemos la agenda llena para el mes.",
    rating: 5,
    avatar: "VM",
    color: "#a78bfa",
  },
  {
    name: "Rodrigo Fernández",
    role: "Corredor de propiedades",
    location: "Viña del Mar, Chile",
    text: "La IA agenda las visitas sola, califica a los interesados y me avisa solo cuando hay alguien serio. Tripliqué las visitas sin contratar más personal.",
    rating: 5,
    avatar: "RF",
    color: "#60a5fa",
  },
  {
    name: "Camila Soto",
    role: "Directora de academia",
    location: "Concepción, Chile",
    text: "Ahora el bot inscribe alumnos, cobra la mensualidad y envía recordatorios de clases automáticamente. Es increíble la cantidad de tiempo que ahorramos.",
    rating: 5,
    avatar: "CS",
    color: "#34d399",
  },
  {
    name: "Andrés Quiroga",
    role: "Gerente de concesionario",
    location: "Antofagasta, Chile",
    text: "Los clientes preguntan por autos a las 2am y reciben respuesta inmediata con fichas técnicas, precios y disponibilidad. Las ventas aumentaron un 35%.",
    rating: 5,
    avatar: "AQ",
    color: "#f472b6",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section className="py-20" style={{ background: "transparent" }}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-widest" style={{ color: "#a78bfa" }}>
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#f1f5f9" }}>
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div
          className="rounded-3xl p-8 md:p-12 relative"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="text-5xl font-serif mb-6" style={{ color: "rgba(167,139,250,0.3)" }}>"</div>
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8" style={{ color: "#e2e8f0" }}>
            {t.text}
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
              style={{ backgroundColor: t.color }}
            >
              {t.avatar}
            </div>
            <div>
              <div className="font-bold" style={{ color: "#e2e8f0" }}>{t.name}</div>
              <div className="text-sm" style={{ color: "#64748b" }}>
                {t.role} · {t.location}
              </div>
            </div>
            <div className="ml-auto flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#a78bfa" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === idx ? "24px" : "8px",
                  background: i === idx ? "#7c3aed" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#a78bfa" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
