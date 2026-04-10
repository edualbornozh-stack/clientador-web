"use client";

import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";

const MODELS = [
  {
    id: "gpt41-mini",
    name: "GPT-4.1 Mini",
    desc: "Ideal para consultas simples",
    inputCost: 0.40,
    outputCost: 1.60,
    avgTokensIn: 800,
    avgTokensOut: 300,
    popular: true,
  },
  {
    id: "gpt5-mini",
    name: "GPT-5 Mini",
    desc: "Balance ideal costo/calidad",
    inputCost: 1.10,
    outputCost: 4.40,
    avgTokensIn: 900,
    avgTokensOut: 350,
  },
  {
    id: "gpt41",
    name: "GPT-4.1",
    desc: "Alta calidad, casos complejos",
    inputCost: 2.00,
    outputCost: 8.00,
    avgTokensIn: 1200,
    avgTokensOut: 500,
  },
  {
    id: "gpt5",
    name: "GPT-5",
    desc: "Máxima inteligencia",
    inputCost: 8.00,
    outputCost: 24.00,
    avgTokensIn: 1500,
    avgTokensOut: 600,
  },
];

export default function CostCalculator() {
  const [selectedModel, setSelectedModel] = useState(MODELS[0].id);
  const [conversationsPerDay, setConversationsPerDay] = useState(50);
  const MESSAGES_PER_CONV = 6;

  const model = MODELS.find((m) => m.id === selectedModel)!;

  const monthlyCost = useMemo(() => {
    const totalConvPerMonth = conversationsPerDay * 30;
    const totalMessages = totalConvPerMonth * MESSAGES_PER_CONV;
    const totalTokensIn = totalMessages * model.avgTokensIn;
    const totalTokensOut = totalMessages * model.avgTokensOut;
    const costIn = (totalTokensIn / 1_000_000) * model.inputCost;
    const costOut = (totalTokensOut / 1_000_000) * model.outputCost;
    return costIn + costOut;
  }, [selectedModel, conversationsPerDay, model]);

  return (
    <section className="py-20" style={{ background: "transparent" }}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-medium uppercase tracking-widest" style={{ color: "#a78bfa" }}>
            Calculadora de costos IA
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#f1f5f9" }}>
            Calcula cuánto pagarás por usar la IA al mes.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
            Solo pagas por lo que usas.
          </p>
        </div>

        <div
          className="rounded-3xl p-6 md:p-10"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Controls */}
            <div className="space-y-6">
              {/* Model selector */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>
                  Modelo de IA
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {MODELS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModel(m.id)}
                      className="relative p-3 rounded-xl text-left transition-all"
                      style={{
                        background: selectedModel === m.id ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.04)",
                        border: selectedModel === m.id ? "1px solid rgba(124,58,237,0.5)" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {m.popular && (
                        <span
                          className="absolute -top-2 -right-2 text-white text-[9px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: "#7c3aed" }}
                        >
                          Popular
                        </span>
                      )}
                      <div className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>{m.name}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: "#475569" }}>{m.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Conversations slider */}
              <div>
                <label className="flex justify-between text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>
                  <span>Conversaciones por día</span>
                  <span className="font-mono" style={{ color: "#a78bfa" }}>{conversationsPerDay}</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={500}
                  step={5}
                  value={conversationsPerDay}
                  onChange={(e) => setConversationsPerDay(Number(e.target.value))}
                  className="w-full accent-[#7c3aed]"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: "#475569" }}>
                  <span>5</span>
                  <span>500</span>
                </div>
              </div>

            </div>

            {/* Right: Results */}
            <div className="flex flex-col gap-4">
              <div
                className="rounded-2xl p-6 flex-1"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calculator size={18} style={{ color: "#a78bfa" }} />
                  <span className="font-semibold" style={{ color: "#e2e8f0" }}>Costo estimado mensual</span>
                </div>
                <div className="text-5xl font-bold mb-2" style={{ color: "#f1f5f9" }}>
                  ${monthlyCost.toFixed(2)}
                  <span className="text-base font-normal ml-1" style={{ color: "#64748b" }}>USD/mes</span>
                </div>
                <div className="text-sm" style={{ color: "#475569" }}>
                  {conversationsPerDay * 30} conversaciones/mes · {model.name}
                </div>

              </div>

              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>Desglose de costos</div>
                <div className="space-y-2 text-xs">
                  {[
                    ["Tokens de entrada", `$${((conversationsPerDay * 30 * MESSAGES_PER_CONV * model.avgTokensIn / 1_000_000) * model.inputCost).toFixed(3)}`],
                    ["Tokens de salida", `$${((conversationsPerDay * 30 * MESSAGES_PER_CONV * model.avgTokensOut / 1_000_000) * model.outputCost).toFixed(3)}`],
                    ["Costo por conversación", `$${(monthlyCost / (conversationsPerDay * 30)).toFixed(4)}`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between" style={{ color: "#64748b" }}>
                      <span>{label}</span>
                      <span className="font-mono font-medium" style={{ color: "#94a3b8" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://mi.clientador.com/widget/booking/9BIrfq1qKd6NoCAObqzO"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3.5 text-sm w-full"
              >
                Activar mi agente IA →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
