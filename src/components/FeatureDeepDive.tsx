"use client";

import { Bot, PhoneCall, GitBranch, Send, Smile, MessageCircle } from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";
import { useBookingModal } from "@/components/BookingModal";

/* ─── Chat Demo Component ──────────────────────────────────────────── */
function ChatDemo() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [channel, setChannel] = useState("whatsapp");
  const [isLoading, setIsLoading] = useState(true);

  const channels = {
    whatsapp: { hdr: "bg-[#075e54]", btn: "#25D366", name: "WhatsApp" },
    instagram: { hdr: "bg-[#1f1f22]", btn: "#E1306C", name: "Instagram" },
    facebook: { hdr: "bg-[#1877F2]", btn: "#1877F2", name: "Facebook" },
    tiktok: { hdr: "bg-black", btn: "#000000", name: "TikTok" },
    chat: { hdr: "bg-[#4F46E5]", btn: "#818cf8", name: "Chat" },
  };

  const conversation = [
    { role: "user", text: "Hola, tengo una duda 👋 ¿qué es Clientador?" },
    { role: "ai", text: "Hola Matías! 👋\n\nClientador es una plataforma con IA que atiende a tus clientes, responde consultas, agenda reuniones y te ayuda a vender más, de forma automática." },
    { role: "user", text: "¿Y cómo funciona? ¿Es muy complejo?" },
    { role: "ai", text: "Para nada 😊\n\nLa IA se entrena con la información de tu negocio y empieza a responder como si fuera parte de tu equipo." },
    { role: "user", text: "¿Y si no sabe responder algo?" },
    { role: "ai", text: "Buena pregunta 👍\n\nCuando hace falta, deriva la conversación a una persona real, para que nada se pierda y el cliente quede bien atendido." },
    { role: "user", text: "¿Sirve también para agendar reuniones?" },
    { role: "ai", text: "Sí, totalmente ✅\n\nPuede agendar reuniones, guardar al cliente en el CRM y hacer seguimiento automático." },
  ];

  const getChannelIcon = (key: string) => {
    switch (key) {
      case "whatsapp":
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        );
      case "instagram":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        );
      case "facebook":
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case "tiktok":
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z" />
          </svg>
        );
      case "chat":
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2H8l-4 4V6a2 2 0 012-2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    setMessages([]);
    setIsLoading(true);
    let delay = 800;
    
    conversation.forEach((msg, idx) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, delay);
      delay += msg.text.length * 28 + 1000;
    });

    setTimeout(() => setIsLoading(false), delay);
  }, [channel]);

  const c = channels[channel as keyof typeof channels];

  const getHeaderColor = () => {
    switch(channel) {
      case "whatsapp": return "#075e54";
      case "instagram": return "#1f1f22";
      case "facebook": return "#0a66c2";
      case "tiktok": return "#000000";
      case "chat": return "#4F46E5";
      default: return "#0f172a";
    }
  };

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 mx-auto" style={{ maxWidth: "360px", height: "580px", display: "flex", flexDirection: "column", background: channel === "whatsapp" ? "#e5ddd5" : "linear-gradient(135deg, #0f172a 0%, #1a1f3a 100%)" }}>
      {/* Header */}
      <div className="px-4 py-5 flex items-center justify-between" style={{ background: getHeaderColor(), borderBottom: `1px solid ${c.btn}33` }}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=48&q=80"
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
            />
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0f172a]" />
          </div>
          <div>
            <div className="font-bold text-sm text-white" style={{ fontFamily: "var(--font-heading, 'Plus Jakarta Sans', sans-serif)" }}>Matías</div>
            <div className="text-xs text-emerald-400 font-semibold">● En línea</div>
          </div>
        </div>
        <div className="text-white/50 text-lg">⋮</div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" style={{ background: channel === "whatsapp" ? "#e5ddd5" : "linear-gradient(180deg, #0f172a 0%, #1a1f3a 100%)" }}>
        {isLoading && messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full mx-auto mb-3 animate-pulse" style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)" }} />
              <div className="text-xs text-gray-400">Iniciando demo...</div>
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "ai" ? "flex-row-reverse" : ""}`}>
                <img
                  src={
                    msg.role === "ai"
                      ? "/images/Logo.svg"
                      : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=48&q=80"
                  }
                  alt={msg.role}
                  className="w-6 h-6 rounded-full object-cover flex-shrink-0 border border-white/10"
                />
                <div className={`max-w-xs ${msg.role === "ai" ? "" : ""}`}>
                  <div
                    className={`px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line font-medium ${
                      msg.role === "ai"
                        ? "rounded-tr-sm text-white"
                        : channel === "whatsapp"
                        ? "rounded-bl-sm text-slate-950"
                        : "rounded-bl-sm text-gray-200"
                    }`}
                    style={{
                      background: msg.role === "ai"
                        ? "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)"
                        : channel === "whatsapp"
                        ? "#ffffff"
                        : "rgba(255,255,255,0.08)",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Input Bar */}
      <div className="border-t border-white/5 px-4 py-3" style={{ background: channel === "whatsapp" ? "#ece5dd" : "linear-gradient(180deg, #1a1f3a 0%, #0f172a 100%)" }}>
        <div className="flex items-center gap-2 rounded-full px-3 py-2 mb-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Smile size={16} className="text-gray-500 flex-shrink-0" />
          <div className="flex-1 text-xs text-gray-400">IA respondiendo...</div>
          <div className="rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ background: `linear-gradient(135deg, ${c.btn}, ${c.btn}dd)`, width: "28px", height: "28px" }}>
            <Send size={12} />
          </div>
        </div>

        {/* Channel Selector */}
        <div className="grid grid-cols-5 gap-1.5">
          {Object.entries(channels).map(([key, ch]) => (
            <button
              key={key}
              onClick={() => setChannel(key)}
              className={`flex flex-col items-center gap-1 p-1.5 rounded-xl transition-all duration-300 ${
                channel === key ? "bg-white/10 border border-white/20" : "hover:bg-white/5 border border-transparent"
              }`}
              title={ch.name}
            >
              <div className="w-9 h-9 rounded-2xl flex items-center justify-center text-white shadow-sm" style={{ background: ch.btn, color: "#ffffff" }}>
                {getChannelIcon(key)}
              </div>
              <span className="text-[8px] font-bold text-gray-400 text-center leading-tight">{ch.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const gradientTextStyle = {
  background: "linear-gradient(135deg, #818cf8 0%, #c084fc 40%, #38bdf8 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-gradient-animated">
      {children}
    </span>
  );
}

const SECTIONS = [
  {
    icon: MessageCircle,
    badge: "IA Conversacional",
    title: (
      <>Agentes <GradientText>IA</GradientText> que conversan con tus clientes 24/7</>
    ),
    desc: "Agentes que responden al instante en lenguaje natural y entrenados con tu información para tener conversaciones fluidas y mejorar la atención.",
    points: [
      "Entrenado con tu información.",
      "Agenda citas y reuniones",
      "Escucha audio y lee imágenes",
      "Seguimiento automatizado",
      "Opción de pausar IA",
      "Deriva a humano",
    ],
    color: "#a78bfa",
    side: "right",
    visual: <ChatDemo />,
  },
  {
    icon: PhoneCall,
    badge: "Llamadas de Voz IA",
    title: (
      <>La <GradientText>IA</GradientText> que llama y atiende llamadas por ti</>
    ),
    desc: "El agente de voz de Clientador hace seguimiento a leads, confirma citas y atiende consultas por teléfono. Habla en español natural, detecta emociones y transfiere al humano cuando es necesario.",
    points: [
      "Voz natural en español",
      "Confirmación automática de citas",
      "Seguimiento de leads por llamada",
      "Transcripción y análisis de llamadas",
    ],
    color: "#60a5fa",
    side: "left",
    visual: (
      <div className="w-full max-w-[360px] mx-auto rounded-[24px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">
        <div className="flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-[#4f35d2] to-[#7b5ef8]">
          <div className="flex-shrink-0 w-11 h-11 rounded-full overflow-hidden border-2 border-white/60">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=88&q=80"
              alt="Agente"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-sm font-semibold text-white">¡Háblanos!</h3>
          <span className="ml-auto text-2xl text-white/80">⋁</span>
        </div>

        <div className="px-5 py-8 flex flex-col items-center text-center">
          <div className="relative mb-6 w-[150px] h-[150px]">
            <span className="absolute inset-0 rounded-full border border-[#7b5ef8]/30 animate-pulse" />
            <span className="absolute inset-[12px] rounded-full border border-[#7b5ef8]/15 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#f3f0ff]">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
                alt="Agente IA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-lg font-semibold text-slate-950">Agente Soporte IA</p>
          <p className="text-xs text-slate-500 tracking-[0.15em] uppercase mt-1">00:00</p>

          <div className="mt-8 w-full flex flex-wrap justify-center gap-2">
            {[28,44,56,64,52,64,56,44,64,52,36,48,60,44,28].map((height, index) => (
              <span
                key={index}
                className="block w-1.5 rounded-full bg-gradient-to-b from-[#7b5ef8] to-[#a78bfa] animate-pulse"
                style={{ height }}
              />
            ))}
          </div>

          <p className="text-xs italic text-slate-400 mt-6">IA hablando...</p>

          <div className="mt-6 flex items-center gap-4">
            <button aria-label="Activar micrófono" className="rounded-full bg-slate-100 text-slate-700 w-12 h-12 flex items-center justify-center text-xl shadow-sm transition hover:bg-slate-200">
              🎤
            </button>
            <button aria-label="Colgar llamada" className="rounded-full bg-[#ef4444] text-white w-14 h-14 flex items-center justify-center text-2xl shadow-lg transition hover:bg-[#dc2626]">
              📵
            </button>
            <button aria-label="Activar altavoz" className="rounded-full bg-slate-100 text-slate-700 w-12 h-12 flex items-center justify-center text-xl shadow-sm transition hover:bg-slate-200">
              🔊
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: GitBranch,
    badge: "Automatizaciones IA",
    title: (
      <>Automatiza trabajo <GradientText>repetitivo</GradientText></>
    ),
    desc: "Dile a la IA que quieres automatizar forma más inteligente, rápida y sencilla.",
    points: [
      "Seguimiento automatizado",
      "Avance en proceso comercial",
      "Tareas repetitivas",
    ],
    color: "#34d399",
    side: "right",
    visual: (
      <div className="relative w-full max-w-[760px] rounded-[28px] bg-white overflow-hidden" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.14)" }}>
        <div className="absolute inset-x-0 bottom-0 h-52" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(180,160,255,0.18) 60%, rgba(160,140,255,0.28) 100%)" }} />

        <div className="relative px-6 pt-10 pb-4 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#d946ef] grid place-items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-extrabold leading-tight" style={{ color: "#0f172a" }}>¿Qué desea automatizar?</h3>
            </div>
          </div>
          <p className="text-sm text-slate-500 max-w-[520px] mx-auto">Cree flujos de trabajo gratis chateando con la IA</p>
        </div>

        <div className="mx-6 mb-6 rounded-[18px] border border-slate-200 bg-white px-5 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="min-h-[90px] text-sm leading-6 text-slate-900 whitespace-pre-wrap">
            <span className="inline-block">¿Automatizar seguimiento de leads, respuestas y tareas sin escribir reglas?</span>
            <span className="inline-block w-0.5 h-4 align-middle bg-[#7c3aed] ml-1 animate-pulse" />
          </div>
          <div className="mt-4 flex items-center justify-end gap-3">
            <button aria-label="Usar micrófono" className="inline-flex items-center justify-center rounded-full p-2 text-slate-400 hover:text-[#7c3aed] transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3M9 22h6"/></svg>
            </button>
            <button aria-label="Enviar mensaje" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-white transition hover:scale-[1.04]">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 px-6 pb-8 relative z-10">
          {[
            { label: "Nutrición de leads", icon: "👤" },
            { label: "Automatización de formularios", icon: "🔷" },
            { label: "Campañas de email", icon: "✉️" },
            { label: "más", icon: "+", secondary: true },
          ].map((chip) => (
            <div key={chip.label} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${chip.secondary ? "border-dashed border-slate-300 text-slate-500" : "border-slate-200 text-slate-900 hover:border-[#a78bfa] hover:shadow-[0_2px_10px_rgba(167,139,250,0.2)]"}`}>
              <span>{chip.icon}</span>
              <span>{chip.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function FeatureDeepDive() {
  const { open } = useBookingModal();
  return (
    <section className="py-20" style={{ background: "transparent" }}>
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        {SECTIONS.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.badge}
              className={`grid md:grid-cols-2 gap-12 items-center ${s.side === "left" ? "md:flex-row-reverse" : ""}`}
            >
              <div className={s.side === "left" ? "md:order-2" : ""}>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${s.color}20` }}
                  >
                    <Icon size={16} style={{ color: s.color }} />
                  </div>
                  <span
                    className="text-xs font-mono font-semibold uppercase tracking-widest"
                    style={{ color: s.color }}
                  >
                    {s.badge}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 leading-tight" style={{ color: "#f1f5f9" }}>
                  {s.title}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#64748b" }}>{s.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm" style={{ color: "#94a3b8" }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${s.color}20`, color: s.color }}>
                        ✓
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={open}
                  className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03]"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}22, ${s.color}11)`,
                    border: `1px solid ${s.color}44`,
                    color: s.color,
                  }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: s.color }} />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: s.color }} />
                  </span>
                  Ver en mi negocio →
                </button>
              </div>

              {/* Widget clickeable → abre modal */}
              <div
                className={`relative group cursor-pointer ${s.side === "left" ? "md:order-1" : ""}`}
                onClick={open}
                role="button"
                tabIndex={0}
                aria-label={`Ver demo de ${s.badge}`}
                onKeyDown={(e) => e.key === "Enter" && open()}
              >
                {s.visual}
                {/* Overlay hover */}
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none"
                  style={{ background: "rgba(2,6,23,0.55)", backdropFilter: "blur(2px)" }}>
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white"
                    style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}bb)`, boxShadow: `0 4px 20px ${s.color}55` }}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                    Agenda tu demo
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
