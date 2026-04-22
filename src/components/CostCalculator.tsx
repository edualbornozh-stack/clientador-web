"use client";

import { useState, useMemo } from "react";
import { MessageSquare, Phone } from "lucide-react";
import { useBookingModal } from "@/components/BookingModal";

// ─── Llamadas IA ─────────────────────────────────────────────────────────────
const VOICE_ENGINE_COST = 0.045; // fijo siempre, por minuto
const TOKENS_PER_MINUTE = 500;   // estimado de tokens procesados por minuto de llamada

const VOICE_PROVIDERS = [
  { id: "openai-tts",     provider: "OpenAI",      name: "Standard TTS", costPerMin: 0.015, quality: "Económica / Alta" },
  { id: "cartesia-tts",   provider: "Cartesia",    name: "Standard TTS", costPerMin: 0.015, quality: "Ultra-Rápida", popular: true },
  { id: "elevenlabs-v25", provider: "ElevenLabs",  name: "V2.5",         costPerMin: 0.035, quality: "Premium Balanceada" },
  { id: "elevenlabs-v3",  provider: "ElevenLabs",  name: "V3",           costPerMin: 0.170, quality: "Ultra-Premium (Humana)" },
];

const CALL_MODELS = [
  { id: "gpt5-nano",      provider: "OpenAI",    name: "GPT-5 Nano",            pricePerM: 0.05,  desc: "Eficiencia extrema", popular: true },
  { id: "gemini-lite",    provider: "Google",    name: "Gemini 2.0 Flash Lite", pricePerM: 0.075, desc: "El más barato y rápido" },
  { id: "gemini-flash",   provider: "Google",    name: "Gemini 2.0 Flash",      pricePerM: 0.10,  desc: "Excelente balance" },
  { id: "gpt4o-mini",     provider: "OpenAI",    name: "GPT-4o Mini",           pricePerM: 0.15,  desc: "Estándar de la industria" },
  { id: "claude-sonnet",  provider: "Anthropic", name: "Claude 3.7 Sonnet",     pricePerM: 3.00,  desc: "Máxima inteligencia" },
];

// ─── Conversaciones IA ────────────────────────────────────────────────────────
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

type CalcMode = "conversations" | "calls";

export default function CostCalculator() {
  const { open } = useBookingModal();

  // ── Modo toggle ──────────────────────────────────────────────────────────
  const [mode, setMode] = useState<CalcMode>("conversations");

  // ── Conversaciones ───────────────────────────────────────────────────────
  const [selectedModel, setSelectedModel] = useState(MODELS[0].id);
  const [conversationsPerDay, setConversationsPerDay] = useState(50);
  const MESSAGES_PER_CONV = 6;
  const model = MODELS.find((m) => m.id === selectedModel)!;

  const convMonthlyCost = useMemo(() => {
    const totalConvPerMonth = conversationsPerDay * 30;
    const totalMessages = totalConvPerMonth * MESSAGES_PER_CONV;
    const totalTokensIn = totalMessages * model.avgTokensIn;
    const totalTokensOut = totalMessages * model.avgTokensOut;
    const costIn = (totalTokensIn / 1_000_000) * model.inputCost;
    const costOut = (totalTokensOut / 1_000_000) * model.outputCost;
    return costIn + costOut;
  }, [selectedModel, conversationsPerDay, model]);

  // ── Llamadas ─────────────────────────────────────────────────────────────
  const [selectedVoice, setSelectedVoice] = useState(VOICE_PROVIDERS[0].id);
  const [selectedCallModel, setSelectedCallModel] = useState(CALL_MODELS[0].id);
  const [minutesPerMonth, setMinutesPerMonth] = useState(200);

  const voice = VOICE_PROVIDERS.find((v) => v.id === selectedVoice)!;
  const callModel = CALL_MODELS.find((m) => m.id === selectedCallModel)!;

  const { costPerMin, callMonthlyCost } = useMemo(() => {
    const llmCostPerMin = (TOKENS_PER_MINUTE / 1_000_000) * callModel.pricePerM;
    const cpm = VOICE_ENGINE_COST + voice.costPerMin + llmCostPerMin;
    return { costPerMin: cpm, callMonthlyCost: cpm * minutesPerMonth };
  }, [selectedVoice, selectedCallModel, minutesPerMonth, voice, callModel]);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <section id="calculadora" className="py-20" style={{ background: "transparent" }}>
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

          {/* Toggle */}
          <div
            className="inline-flex mt-8 rounded-full p-1 gap-1"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {([
              { key: "conversations", icon: <MessageSquare size={14} />, label: "Conversaciones IA" },
              { key: "calls",         icon: <Phone size={14} />,      label: "Llamadas IA" },
            ] as { key: CalcMode; icon: React.ReactNode; label: string }[]).map(({ key, icon, label }) => (
              <button
                key={key}
                onClick={() => setMode(key)}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  mode === key
                    ? { background: "rgba(124,58,237,0.25)", color: "#f1f5f9", border: "1px solid rgba(124,58,237,0.5)" }
                    : { background: "transparent", color: "rgba(148,163,184,0.7)", border: "1px solid transparent" }
                }
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Bajada explicativa */}
          <p className="mt-4 text-xs leading-relaxed" style={{ color: "#475569" }}>
            {mode === "conversations"
              ? "Estimado en base al modelo elegido, conversaciones diarias y tokens promedio por mensaje (entrada + salida)."
              : "Costo por minuto = Voice Engine (base fija $0.045) + proveedor de voz TTS + modelo de IA."}
          </p>
        </div>

        <div
          className="rounded-3xl p-6 md:p-10"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >

          {/* ── CONVERSACIONES ─────────────────────────────────────────── */}
          {mode === "conversations" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
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
                          <span className="absolute -top-2 -right-2 text-white text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#7c3aed" }}>
                            Popular
                          </span>
                        )}
                        <div className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>{m.name}</div>
                        <div className="text-[11px] mt-0.5" style={{ color: "#475569" }}>{m.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex justify-between text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>
                    <span>Conversaciones por día</span>
                    <span className="font-mono" style={{ color: "#a78bfa" }}>{conversationsPerDay}</span>
                  </label>
                  <input
                    id="conversations-slider"
                    type="range" min={5} max={500} step={5}
                    value={conversationsPerDay}
                    onChange={(e) => setConversationsPerDay(Number(e.target.value))}
                    className="w-full accent-[#7c3aed]"
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "#475569" }}>
                    <span>5</span><span>500</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-2xl p-6 flex-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare size={18} style={{ color: "#a78bfa" }} />
                    <span className="font-semibold" style={{ color: "#e2e8f0" }}>Costo estimado mensual</span>
                  </div>
                  <div className="text-5xl font-bold mb-2" style={{ color: "#f1f5f9" }}>
                    ${convMonthlyCost.toFixed(2)}
                    <span className="text-base font-normal ml-1" style={{ color: "#64748b" }}>USD/mes</span>
                  </div>
                  <div className="text-sm" style={{ color: "#475569" }}>
                    {conversationsPerDay * 30} conversaciones/mes · {model.name}
                  </div>
                </div>

                <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>Desglose de costos</div>
                  <div className="space-y-2 text-xs">
                    {[
                      ["Tokens de entrada", `$${((conversationsPerDay * 30 * MESSAGES_PER_CONV * model.avgTokensIn / 1_000_000) * model.inputCost).toFixed(3)}`],
                      ["Tokens de salida",  `$${((conversationsPerDay * 30 * MESSAGES_PER_CONV * model.avgTokensOut / 1_000_000) * model.outputCost).toFixed(3)}`],
                      ["Costo por conversación", `$${(convMonthlyCost / (conversationsPerDay * 30)).toFixed(4)}`],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between" style={{ color: "#64748b" }}>
                        <span>{label}</span>
                        <span className="font-mono font-medium" style={{ color: "#94a3b8" }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button onClick={open} className="btn-primary py-3.5 text-sm w-full">
                  Activar mi agente IA →
                </button>
              </div>
            </div>
          )}

          {/* ── LLAMADAS ───────────────────────────────────────────────── */}
          {mode === "calls" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">

                {/* Proveedor de Voz */}
                <div>
                  <label className="block text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>
                    Proveedor de Voz (TTS)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {VOICE_PROVIDERS.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVoice(v.id)}
                        className="relative p-3 rounded-xl text-left transition-all"
                        style={{
                          background: selectedVoice === v.id ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.04)",
                          border: selectedVoice === v.id ? "1px solid rgba(124,58,237,0.5)" : "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {v.popular && (
                          <span className="absolute -top-2 -right-2 text-white text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#7c3aed" }}>
                            Popular
                          </span>
                        )}
                        <div className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>{v.provider}</div>
                        <div className="text-[11px] mt-0.5" style={{ color: "#475569" }}>{v.name} · ${v.costPerMin}/min</div>
                        <div className="text-[10px] mt-0.5" style={{ color: "#334155" }}>{v.quality}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Modelo LLM */}
                <div>
                  <label className="block text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>
                    Modelo de IA
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {CALL_MODELS.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedCallModel(m.id)}
                        className="relative p-3 rounded-xl text-left transition-all"
                        style={{
                          background: selectedCallModel === m.id ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.04)",
                          border: selectedCallModel === m.id ? "1px solid rgba(124,58,237,0.5)" : "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {m.popular && (
                          <span className="absolute -top-2 -right-2 text-white text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#7c3aed" }}>
                            Popular
                          </span>
                        )}
                        <div className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>{m.name}</div>
                        <div className="text-[11px] mt-0.5" style={{ color: "#475569" }}>{m.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider minutos */}
                <div>
                  <label className="flex justify-between text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>
                    <span>Minutos al mes</span>
                    <span className="font-mono" style={{ color: "#a78bfa" }}>{minutesPerMonth.toLocaleString()}</span>
                  </label>
                  <input
                    id="minutes-slider"
                    type="range" min={10} max={5000} step={10}
                    value={minutesPerMonth}
                    onChange={(e) => setMinutesPerMonth(Number(e.target.value))}
                    className="w-full accent-[#7c3aed]"
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "#475569" }}>
                    <span>10</span><span>5.000</span>
                  </div>
                </div>
              </div>

              {/* Resultados llamadas */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl p-6 flex-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Phone size={18} style={{ color: "#a78bfa" }} />
                    <span className="font-semibold" style={{ color: "#e2e8f0" }}>Costo estimado mensual</span>
                  </div>
                  <div className="text-5xl font-bold mb-1" style={{ color: "#f1f5f9" }}>
                    ${callMonthlyCost.toFixed(2)}
                    <span className="text-base font-normal ml-1" style={{ color: "#64748b" }}>USD/mes</span>
                  </div>
                  <div className="text-sm mb-4" style={{ color: "#475569" }}>
                    {minutesPerMonth.toLocaleString()} min/mes · {voice.provider} + {callModel.name}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}>
                    <span className="text-xs font-mono font-bold" style={{ color: "#a78bfa" }}>${costPerMin.toFixed(4)}</span>
                    <span className="text-xs" style={{ color: "#64748b" }}>costo por minuto</span>
                  </div>
                </div>

                <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>Desglose por minuto</div>
                  <div className="space-y-2 text-xs">
                    {[
                      ["Voice Engine (base)", `$${VOICE_ENGINE_COST.toFixed(4)}`],
                      [`TTS · ${voice.provider} ${voice.name}`, `$${voice.costPerMin.toFixed(4)}`],
                      [`LLM · ${callModel.name}`, `$${((TOKENS_PER_MINUTE / 1_000_000) * callModel.pricePerM).toFixed(5)}`],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between" style={{ color: "#64748b" }}>
                        <span>{label}</span>
                        <span className="font-mono font-medium" style={{ color: "#94a3b8" }}>{value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 mt-1" style={{ color: "#94a3b8", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="font-semibold">Total por minuto</span>
                      <span className="font-mono font-bold" style={{ color: "#a78bfa" }}>${costPerMin.toFixed(4)}</span>
                    </div>
                  </div>
                </div>

                <button onClick={open} className="btn-primary py-3.5 text-sm w-full">
                  Activar Llamadas IA →
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
