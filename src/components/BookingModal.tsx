"use client";

import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

/* ─── Context ─────────────────────────────────────────────── */
const BookingModalContext = createContext<{
  open: () => void;
  close: () => void;
}>({ open: () => {}, close: () => {} });

export function useBookingModal() {
  return useContext(BookingModalContext);
}

/* ─── Provider + Modal ────────────────────────────────────── */
export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen]     = useState(false);
  const [loaded, setLoaded]     = useState(false);
  const iframeRef               = useRef<HTMLIFrameElement>(null);

  const open  = useCallback(() => { setLoaded(false); setIsOpen(true); }, []);
  const close = useCallback(() => setIsOpen(false), []);

  /* Cargar script del widget solo la primera vez */
  useEffect(() => {
    if (!isOpen) return;
    const src = "https://mi.clientador.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src   = src;
      script.type  = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isOpen]);

  /* Cerrar con Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  /* Bloquear scroll cuando está abierto */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <BookingModalContext.Provider value={{ open, close }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="booking-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => { if (e.target === e.currentTarget) close(); }}
            className="fixed inset-0 flex items-end sm:items-center justify-center sm:p-8"
            style={{
              zIndex: 9999,
              background: "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, rgba(2,6,23,0.9) 70%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <motion.div
              key="booking-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{   opacity: 0, y: 40 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full sm:max-w-2xl rounded-t-3xl sm:rounded-3xl flex flex-col"
              style={{
                background: "#100b13",
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 100px rgba(124,58,237,0.2), 0 40px 80px rgba(0,0,0,0.7)",
                height: "calc(100dvh - 40px)",
                maxHeight: "900px",
                overflow: "hidden",
              }}
            >
              {/* ── Header flotante sobre el iframe ── */}
              <div className="flex-shrink-0 px-5 pt-4 pb-3 relative" style={{ background: "#100b13" }}>
                {/* X arriba a la derecha */}
                <button
                  onClick={close}
                  aria-label="Cerrar"
                  className="absolute top-4 right-5 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-150"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.3)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                  }}
                >
                  <X size={15} style={{ color: "#94a3b8" }} />
                </button>

                {/* Badge centrado */}
                <div className="flex justify-center mb-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
                    style={{
                      background: "linear-gradient(135deg, #818cf8, #a78bfa, #60a5fa)",
                      boxShadow: "0 2px 10px rgba(129,140,248,0.35)",
                    }}>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                      Demo en Vivo
                    </span>
                  </div>
                </div>

                {/* Título centrado */}
                <h2 className="text-xl font-bold text-center" style={{ color: "#f1f5f9" }}>
                  Agenda tu demo{" "}
                  <span className="text-gradient-animated">en vivo</span>
                  {" "}con un especialista
                </h2>
              </div>

              {/* ── Scroll container: scrollea aquí, no en el iframe ── */}
              <div style={{
                flex: 1,
                overflowY: "auto",
                background: "#100b13",
                position: "relative",
                /* Evita que el scroll se escape al body */
                overscrollBehavior: "contain",
              }}>
                {/* Máscara superior */}
                <div style={{
                  position: "sticky",
                  top: 0, left: 0, right: 0,
                  height: "24px",
                  background: "linear-gradient(to bottom, #100b13 50%, transparent 100%)",
                  zIndex: 5,
                  pointerEvents: "none",
                  marginBottom: "-24px",
                }} />

                <AnimatePresence>
                  {!loaded && (
                    <motion.div
                      key="preloader"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{
                        position: "absolute", inset: 0, background: "#100b13",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        gap: "24px", zIndex: 10,
                      }}
                    >
                      {/* Sparkles estático con respiro suave */}
                      <motion.div
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Sparkles size={32} style={{
                          background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }} />
                      </motion.div>

                      {/* Texto + 3 puntitos púrpura rebotando */}
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <p style={{ color: "#475569", fontSize: "13px", letterSpacing: "0.02em" }}>
                          Preparando tu demo con la IA
                        </p>
                        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                          {[0, 0.18, 0.36].map((delay, i) => (
                            <motion.span
                              key={i}
                              style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a78bfa", display: "block" }}
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.7, repeat: Infinity, delay, ease: "easeInOut" }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Iframe sin scroll propio — toda su altura visible */}
                <iframe
                  ref={iframeRef}
                  src="https://mi.clientador.com/widget/booking/9BIrfq1qKd6NoCAObqzO"
                  id="9BIrfq1qKd6NoCAObqzO_1775860296089"
                  onLoad={() => setLoaded(true)}
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "1000px",   /* suficientemente alto para mostrar todo el form */
                    border: "none",
                    display: "block",
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    background: "#100b13",
                    colorScheme: "dark",
                  }}
                  title="Agenda tu demo con Clientador"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingModalContext.Provider>
  );
}
