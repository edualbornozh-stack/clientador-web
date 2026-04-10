"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";

const WA_NUMBER = "56996832736";
const HEIDY_AVATAR = "/images/Heidy-Sosa.png";

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type Message = { text: string; isUser: boolean; type?: "continue" };

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Desbloquea el AudioContext en el primer gesto del usuario
  useEffect(() => {
    function unlock() {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
    }
    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });
    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  function playNotificationSound() {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;
      const now = ctx.currentTime;
      [523.25, 659.25].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.18);
        gain.gain.linearRampToValueAtTime(0.35, now + i * 0.18 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.18 + 0.5);
        osc.start(now + i * 0.18);
        osc.stop(now + i * 0.18 + 0.55);
      });
    } catch {
      // Audio not supported, skip silently
    }
  }

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    const t2 = setTimeout(() => {
      setOpen(true);
      playNotificationSound();
    }, 30_000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (open && !initialized) {
      setInitialized(true);
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages([
          { text: "👋 ¡Hola! ¿Te gustaría probar la IA de Clientador en WhatsApp?", isUser: false },
          { text: "Puedo mostrarte cómo automatizamos tu atención al cliente en minutos 🚀", isUser: false },
        ]);
      }, 1500);
    }
  }, [open, initialized]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing]);

  function sendMessage() {
    const msg = input.trim();
    if (!msg) return;
    setMessages((m) => [...m, { text: msg, isUser: true }]);
    setInput("");
    const fullMsg = `${msg}\n\n\nEnviado desde: ${window.location.href}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(fullMsg)}`, "_blank");
    setMessages((m) => [...m, { text: "↗ Continuemos en WhatsApp", isUser: false, type: "continue" }]);
    setTyping(true);
    setTimeout(() => setTyping(false), 2000 + Math.random() * 2000);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">

      {/* Chat box */}
      {open && (
        <div
          className="animate-fade-in-up flex flex-col overflow-hidden"
          style={{
            width: 340,
            height: 420,
            borderRadius: 20,
            background: "rgba(236,229,221,0.88)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.25), 0 0 0 0.5px rgba(0,0,0,0.08)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              background: "rgba(7,94,84,0.94)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex items-center gap-3">
              <img
                src={HEIDY_AVATAR}
                alt="Heidy"
                className="w-9 h-9 rounded-full object-cover"
                style={{ border: "2px solid rgba(255,255,255,0.4)" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  (e.currentTarget.nextSibling as HTMLElement).style.display = "flex";
                }}
              />
              <div
                className="w-9 h-9 rounded-full items-center justify-center text-white font-bold text-sm"
                style={{ display: "none", background: "#25D366" }}
              >H</div>
              <div>
                <div className="text-white font-semibold text-sm">Heidy de Clientador</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#a8ff78" }} />
                  <span className="text-xs font-medium" style={{ color: "#a8ff78" }}>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
              style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.22)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
            >
              <X size={14} />
            </button>
          </div>

          {/* Body */}
          <div
            ref={bodyRef}
            className="flex-1 flex flex-col gap-1.5 p-3 overflow-y-auto"
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(0,0,0,0.12) transparent" }}
          >
            {typing && messages.length === 0 && (
              <div className="flex items-center gap-1 px-3 py-2.5 rounded-md self-start" style={{ background: "rgba(255,255,255,0.75)", boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
                {[0, 0.3, 0.6].map((d, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "#9E9E9E", display: "inline-block", animation: `typing 1.5s ${d}s infinite` }} />
                ))}
              </div>
            )}
            {messages.map((m, i) =>
              m.type === "continue" ? (
                <div key={i} className="self-start text-xs px-3 py-1.5 rounded-full" style={{ background: "transparent", border: "1px solid rgba(37,211,102,0.5)", color: "#075E54" }}>
                  {m.text}
                </div>
              ) : (
                <div
                  key={i}
                  className="max-w-[82%] px-3 py-2 text-sm leading-relaxed"
                  style={{
                    background: m.isUser ? "rgba(220,248,198,0.85)" : "rgba(255,255,255,0.75)",
                    borderRadius: m.isUser ? "14px 4px 14px 14px" : "4px 14px 14px 14px",
                    alignSelf: m.isUser ? "flex-end" : "flex-start",
                    color: "#111",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                    wordBreak: "break-word",
                  }}
                >
                  {m.text}
                </div>
              )
            )}
            {typing && messages.length > 0 && (
              <div className="flex items-center gap-1 px-3 py-2.5 rounded-md self-start" style={{ background: "rgba(255,255,255,0.75)", boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
                {[0, 0.3, 0.6].map((d, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "#9E9E9E", display: "inline-block", animation: `typing 1.5s ${d}s infinite` }} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 px-3 py-2" style={{ background: "rgba(255,255,255,0.5)", borderTop: "1px solid rgba(0,0,0,0.06)", height: 54 }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Escribe tu mensaje..."
              className="flex-1 text-sm outline-none rounded-full px-4 py-2"
              style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,0,0,0.12)", color: "#111" }}
            />
            <button
              onClick={sendMessage}
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-105"
              style={{ background: "#25D366" }}
            >
              <Send size={14} color="white" />
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => { if (!open) playNotificationSound(); setOpen(!open); }}
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ background: "#25D366", boxShadow: "0 4px 16px rgba(37,211,102,0.45)" }}
        aria-label="Abrir WhatsApp"
      >
        {open ? <X size={22} color="white" /> : <IconWhatsApp />}
        {!open && (
          <div className="absolute w-5 h-5 rounded-full flex items-center justify-center text-white font-bold" style={{ top: -2, right: -2, background: "#ff3b30", fontSize: 11, zIndex: 1 }}>
            1
          </div>
        )}
      </button>

      <style>{`
        @keyframes typing {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
