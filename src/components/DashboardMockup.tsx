"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─── Channel Icons ─────────────────────────────────────────── */
function IconWhatsApp({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconTikTok({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z" />
    </svg>
  );
}

function IconFacebook({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconGmail({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="52 42 88 66" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
    </svg>
  );
}

/* ─── Typing Dots ───────────────────────────────────────────── */
function TypingDots() {
  return (
    <span className="inline-flex items-center gap-[3px] ml-1">
      {[0, 0.18, 0.36].map((delay, i) => (
        <span
          key={i}
          className="block w-[3px] h-[3px] rounded-full"
          style={{ background: "#7c3aed", animation: `dotBounce 1.1s ease-in-out ${delay}s infinite` }}
        />
      ))}
    </span>
  );
}

/* ─── Data ──────────────────────────────────────────────────── */
const SIDEBAR_CHANNELS = [
  { Icon: IconWhatsApp,  bg: "#22c55e",                                 badge: 1, active: true },
  { Icon: IconInstagram, bg: "linear-gradient(135deg,#f43f5e,#a855f7)", badge: 3 },
  { Icon: IconTikTok,    bg: "#18181b",                                 badge: 1 },
  { Icon: IconFacebook,  bg: "#3b82f6",                                 badge: 1 },
  { Icon: IconGmail,     bg: "#ffffff",                                 badge: 2 },
];

type Conv = {
  avatar: string;
  name: string;
  time: string;
  preview?: string;
  typing?: boolean;
  unread: number;
  channel: "wa" | "ig" | "fb" | "gmail" | "tt";
};

// Latin-looking real photo avatars via i.pravatar.cc
const CONVERSATIONS: Conv[] = [
  { avatar: "https://i.pravatar.cc/44?img=12", name: "Matías",    time: "5:36 PM", typing: true,  unread: 2, channel: "wa"    },
  { avatar: "https://i.pravatar.cc/44?img=47", name: "Clara",     time: "3:28 PM", typing: true,  unread: 3, channel: "ig"    },
  { avatar: "https://i.pravatar.cc/44?img=25", name: "Sofía",     time: "3:08 PM", preview: "¿Tienen disponibilidad para mañana?",  unread: 3, channel: "fb"    },
  { avatar: "https://i.pravatar.cc/44?img=52", name: "Camilo",    time: "2:53 PM", preview: "¡Perfecto! Gracias por tu tiempo...",  unread: 3, channel: "wa"    },
  { avatar: "https://i.pravatar.cc/44?img=14", name: "Andrés",    time: "2:37 PM", preview: "¿Hay opción de compra por volumen?",   unread: 1, channel: "gmail" },
  { avatar: "https://i.pravatar.cc/44?img=35", name: "Valentina", time: "9:21 AM", typing: true,  unread: 1, channel: "wa"    },
];

const CHANNEL_NET: Record<string, React.ReactNode> = {
  wa:    <IconWhatsApp  size={10} />,
  ig:    <IconInstagram size={10} />,
  fb:    <IconFacebook  size={10} />,
  gmail: <IconGmail     size={10} />,
  tt:    <IconTikTok    size={10} />,
};
const CHANNEL_NET_BG: Record<string, string> = {
  wa:    "#22c55e",
  ig:    "linear-gradient(135deg,#f43f5e,#a855f7)",
  fb:    "#3b82f6",
  gmail: "#ffffff",
  tt:    "#18181b",
};

const FUNNEL_WIDTHS = [100, 78, 58, 38, 22];
const BAR_INIT      = [30, 48, 40, 65, 55, 80, 100];

/* ─── Component ─────────────────────────────────────────────── */
export default function DashboardMockup() {
  const [yesterday, setYesterday] = useState(0);
  const [today,     setToday]     = useState(0);
  const [convs, setConvs]         = useState(CONVERSATIONS);
  const [barH,  setBarH]          = useState(BAR_INIT);
  const [funnelVisible, setFunnelVisible] = useState(false);

  const stackRef  = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const ROW_H     = 68;

  /* Counters */
  useEffect(() => {
    let c1 = 0, c2 = 0;
    const s1 = Math.ceil(150 / 56), s2 = Math.ceil(200 / 56);
    const id = setTimeout(() => {
      const iv = setInterval(() => {
        c1 = Math.min(c1 + s1, 150);
        c2 = Math.min(c2 + s2, 200);
        setYesterday(c1); setToday(c2);
        if (c1 >= 150 && c2 >= 200) clearInterval(iv);
      }, 16);
    }, 400);
    return () => clearTimeout(id);
  }, []);

  /* Carousel */
  useEffect(() => {
    const id = setTimeout(() => {
      const iv = setInterval(() => {
        offsetRef.current += ROW_H + 1;
        if (stackRef.current) {
          stackRef.current.style.transition = "transform 0.7s cubic-bezier(0.22,1,0.36,1)";
          stackRef.current.style.transform  = `translateY(-${offsetRef.current}px)`;
        }
        setTimeout(() => {
          setConvs(prev => { const [first, ...rest] = prev; return [...rest, first]; });
          offsetRef.current -= ROW_H + 1;
          if (stackRef.current) {
            stackRef.current.style.transition = "none";
            stackRef.current.style.transform  = `translateY(-${offsetRef.current}px)`;
            requestAnimationFrame(() =>
              requestAnimationFrame(() => {
                if (stackRef.current)
                  stackRef.current.style.transition = "transform 0.7s cubic-bezier(0.22,1,0.36,1)";
              })
            );
          }
        }, 750);
      }, 2800);
      return () => clearInterval(iv);
    }, 2400);
    return () => clearTimeout(id);
  }, []);

  /* Funnel entrance */
  useEffect(() => {
    const id = setTimeout(() => setFunnelVisible(true), 800);
    return () => clearTimeout(id);
  }, []);

  /* Bars random update */
  useEffect(() => {
    function rnd(a: number, b: number) { return Math.floor(Math.random() * (b - a + 1) + a); }
    function update() {
      const v = [rnd(20,45), rnd(30,55), rnd(25,50), rnd(45,70), rnd(38,65), rnd(55,82), rnd(65,100)];
      v.sort((a, b) => a - b);
      setBarH(v);
    }
    const id = setTimeout(() => { update(); const iv = setInterval(update, 3000); return () => clearInterval(iv); }, 3200);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <style>{`
        @keyframes dotBounce {
          0%,60%,100%{ transform:translateY(0); opacity:.35; }
          30%        { transform:translateY(-3px); opacity:1; }
        }
        @keyframes badgePulse {
          0%,100%{ box-shadow:0 0 0 0 rgba(124,58,237,.45); }
          50%    { box-shadow:0 0 0 5px rgba(124,58,237,0); }
        }
        @keyframes miniDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes miniFade {
          to { opacity: 1; }
        }
        .mini-line {
          stroke-dasharray: 160; stroke-dashoffset: 160;
          animation: miniDraw 1.2s ease forwards 0.7s;
        }
        .mini-fill {
          opacity: 0;
          animation: miniFade 0.5s ease forwards 1.4s;
        }
        .mini-dot {
          opacity: 0;
          animation: miniFade 0.3s ease forwards 1.9s;
        }
      `}</style>

      <div
        className="relative flex rounded-2xl overflow-hidden"
        style={{
          width: "100%",
          minHeight: 500,
          background: "#f3eeff",
          boxShadow: "0 32px 80px rgba(109,40,217,0.18), 0 0 0 1px rgba(124,58,237,0.10)",
        }}
      >
        {/* ── Sidebar ── */}
        <div
          className="flex flex-col items-center py-4 px-2 gap-2.5 flex-shrink-0"
          style={{
            width: 64,
            background: "#ede8ff",
            borderRight: "1px solid rgba(124,58,237,0.12)",
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden mb-1"
            style={{ background: "linear-gradient(135deg,#7c3aed,#5b0fdf)", boxShadow: "0 4px 12px rgba(124,58,237,0.35)" }}
          >
            <img src="/images/Logo.svg" alt="logo" width={22} height={22} style={{ objectFit: "contain" }} />
          </motion.div>

          {SIDEBAR_CHANNELS.map(({ Icon, bg, badge, active }, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.18 + i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
              className="relative w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: active ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.7)",
                border: active ? "1.5px solid rgba(124,58,237,0.35)" : "1.5px solid rgba(255,255,255,0.9)",
                boxShadow: active ? "0 0 16px rgba(124,58,237,0.18)" : "0 2px 6px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="w-7 h-7 rounded-xl flex items-center justify-center"
                style={{ background: bg }}
              >
                <Icon size={15} />
              </div>
              {badge > 0 && (
                <div
                  className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full flex items-center justify-center text-white font-bold border-2"
                  style={{
                    fontSize: 8,
                    background: "#7c3aed",
                    borderColor: "#ede8ff",
                    animation: "badgePulse 2s ease-in-out infinite",
                  }}
                >
                  {badge}
                </div>
              )}
            </motion.div>
          ))}

          <div className="w-8 h-px my-1" style={{ background: "rgba(124,58,237,0.15)" }} />
        </div>

        {/* ── Main Panel ── */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ minWidth: 0, background: "#ffffff" }}>
          <div className="flex flex-col gap-2 p-4 h-full">

            {/* Top bar */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center justify-between"
            >
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#7c3aed" }}>
                  Conversaciones
                </div>
                <div className="text-[9px] mt-0.5" style={{ color: "#a78bfa" }}>Bandeja de entrada</div>
              </div>
              <div className="flex items-center gap-3">
                {/* Yesterday */}
                <div className="text-right">
                  <div className="text-2xl font-black leading-none" style={{ color: "#1e1b4b" }}>{yesterday}</div>
                  <div className="text-[9px] mt-0.5 font-medium" style={{ color: "#94a3b8" }}>Ayer</div>
                </div>
                {/* Mini chart */}
                <svg width="48" height="28" viewBox="0 0 52 30" overflow="visible">
                  <defs>
                    <linearGradient id="mgA2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity=".25" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="mini-fill" d="M0,28 L0,22 C8,19 14,16 20,12 C28,8 36,6 44,3 L52,0 L52,28 Z" fill="url(#mgA2)" />
                  <path className="mini-line" d="M0,22 C8,19 14,16 20,12 C28,8 36,6 44,3 L52,0" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
                  <circle className="mini-dot" cx="52" cy="0" r="3.5" fill="#7c3aed" />
                </svg>
                {/* Today */}
                <div className="text-right">
                  <div className="text-2xl font-black leading-none" style={{ color: "#1e1b4b" }}>{today}</div>
                  <div className="text-[9px] mt-0.5 font-medium" style={{ color: "#94a3b8" }}>Hoy</div>
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex gap-0 flex-shrink-0"
              style={{ borderBottom: "1px solid #ede9fe" }}
            >
              {[
                { label: "No leído", active: true, count: 9 },
                { label: "Todo" },
                { label: "Recientes" },
              ].map((tab) => (
                <div
                  key={tab.label}
                  className="flex items-center gap-1 pb-2 px-3 text-[11px] font-semibold relative"
                  style={{
                    color: tab.active ? "#7c3aed" : "#94a3b8",
                    borderBottom: tab.active ? "2px solid #7c3aed" : "2px solid transparent",
                    marginBottom: -1,
                    cursor: "default",
                  }}
                >
                  {tab.label}
                  {tab.count && (
                    <span className="w-[16px] h-[16px] rounded-full flex items-center justify-center text-white font-bold" style={{ fontSize: 8, background: "#7c3aed" }}>
                      {tab.count}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Conversation List */}
            <div className="flex-1 relative overflow-hidden" style={{ minHeight: 0 }}>
              {/* Fade bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
                style={{ height: 52, background: "linear-gradient(transparent, rgba(255,255,255,0.98))" }}
              />

              <div ref={stackRef} className="absolute w-full top-0">
                {convs.map((c, i) => (
                  <motion.div
                    key={c.name + i}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 px-1 py-2 cursor-pointer flex-shrink-0"
                    style={{
                      height: ROW_H,
                      borderBottom: "1px solid #f5f0ff",
                    }}
                  >
                    {/* Avatar with real photo */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={c.avatar}
                        alt={c.name}
                        className="w-10 h-10 rounded-full object-cover"
                        style={{ border: "2px solid #ede9fe" }}
                        onError={(e) => {
                          const el = e.currentTarget;
                          el.style.display = "none";
                          (el.nextSibling as HTMLElement).style.display = "flex";
                        }}
                      />
                      <div
                        className="w-10 h-10 rounded-full items-center justify-center text-white font-bold text-xs hidden"
                        style={{ background: "#7c3aed" }}
                      >
                        {c.name.slice(0, 2).toUpperCase()}
                      </div>
                      {/* Channel badge */}
                      <div
                        className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center border-2"
                        style={{
                          background: CHANNEL_NET_BG[c.channel],
                          borderColor: "#ffffff",
                        }}
                      >
                        {CHANNEL_NET[c.channel]}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[13px] font-semibold truncate" style={{ color: "#1e1b4b" }}>{c.name}</span>
                        <span className="text-[10px] ml-2 flex-shrink-0 font-medium" style={{ color: "#94a3b8" }}>{c.time}</span>
                      </div>
                      {c.typing ? (
                        <div className="flex items-center gap-1 text-[11px] font-semibold" style={{ color: "#7c3aed" }}>
                          <span className="w-[14px] h-[14px] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ fontSize: 7, background: "#7c3aed" }}>IA</span>
                          respondiendo
                          <TypingDots />
                        </div>
                      ) : (
                        <p className="text-[11px] truncate font-normal" style={{ color: "#94a3b8" }}>{c.preview}</p>
                      )}
                    </div>

                    {/* Unread badge */}
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ fontSize: 9, background: "#7c3aed" }}
                    >
                      {c.unread}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer: Funnel + Bars */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex gap-3 items-end pt-2 flex-shrink-0"
              style={{ borderTop: "1px solid #ede9fe" }}
            >
              {/* Funnel */}
              <div className="flex-1 flex flex-col gap-1.5">
                {FUNNEL_WIDTHS.map((w, i) => (
                  <motion.div
                    key={i}
                    className="h-[9px] rounded-full overflow-hidden"
                    style={{ width: `${w}%`, background: "rgba(124,58,237,0.1)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={funnelVisible ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ delay: i * 0.12, duration: 0.5, type: "spring", stiffness: 120, damping: 14 }}
                      style={{
                        transformOrigin: "left",
                        background: `linear-gradient(90deg, #7c3aed, #a78bfa)`,
                        opacity: 1 - i * 0.12,
                      }}
                    />
                  </motion.div>
                ))}
                <div className="text-[8px] font-bold uppercase tracking-wider mt-0.5" style={{ color: "#7c3aed" }}>
                  Clientes en el proceso comercial
                </div>
              </div>

              {/* Divider */}
              <div className="flex-shrink-0 self-center" style={{ width: 1, height: 60, background: "linear-gradient(180deg,transparent,rgba(124,58,237,0.15),transparent)" }} />

              {/* Bar chart */}
              <div className="flex-1 flex flex-col gap-1">
                <div className="flex items-end gap-[3px]" style={{ height: 52 }}>
                  {barH.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 12, delay: i * 0.04 }}
                      style={{
                        background: i >= barH.length - 3
                          ? "linear-gradient(180deg,#7c3aed,#a78bfa)"
                          : "rgba(167,139,250,0.25)",
                        alignSelf: "flex-end",
                      }}
                    />
                  ))}
                </div>
                <div className="text-[8px] font-bold uppercase tracking-wider text-center" style={{ color: "#7c3aed" }}>
                  Ventas por día
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
