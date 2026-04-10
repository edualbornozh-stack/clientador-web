"use client";

import Marquee from "@/components/Marquee";
import DashboardMockup from "@/components/DashboardMockup";
import { useBookingModal } from "@/components/BookingModal";

interface RubroHeroProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function RubroHero({ badge, title, subtitle }: RubroHeroProps) {
  const { open } = useBookingModal();
  return (
    <section
      id="inicio"
      className="relative flex flex-col overflow-hidden"
      style={{ background: "transparent", fontFamily: "var(--font-inter, Inter, sans-serif)" }}
    >
      {/* Depth gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full" style={{
          width: "80%", height: "80%", top: "-20%", right: "-15%",
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(109,40,217,0.06) 50%, transparent 75%)",
          filter: "blur(80px)",
        }} />
        <div className="absolute rounded-full" style={{
          width: "60%", height: "60%", bottom: "-10%", left: "-10%",
          background: "radial-gradient(circle, rgba(20,184,166,0.09) 0%, rgba(6,182,212,0.05) 55%, transparent 75%)",
          filter: "blur(80px)",
        }} />
      </div>

      {/* Main content grid */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        {/* LEFT: Copy */}
        <div className="flex flex-col gap-7 items-center lg:items-start text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex w-fit mx-auto lg:mx-0 animate-gradient-flow rounded-full p-[1.5px]">
            <div className="flex items-center gap-2.5 rounded-full px-4 py-2 backdrop-blur-sm" style={{ background: "rgba(2,6,23,0.85)" }}>
              <span className="text-base leading-none">✨</span>
              <span className="text-xs font-medium tracking-wide" style={{ color: "#c4b5fd" }}>
                {badge}
              </span>
            </div>
          </div>

          {/* H1 */}
          <div className="w-full">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-center lg:text-left"
              style={{
                fontFamily: "var(--font-heading, 'Plus Jakarta Sans', Inter, sans-serif)",
                color: "#ffffff",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              <span className="inline-block text-gradient-animated">{title}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-md font-normal text-center lg:text-left"
            style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
          >
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <button
              onClick={open}
              className="btn-primary gap-2.5 px-5 py-2.5 text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              DEMO EN VIVO
            </button>
            <a
              href="https://wa.me/56996832736"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2 px-5 py-2.5 text-sm"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              PROBAR IA WHATSAPP
            </a>
          </div>

          {/* Trust micro-copy */}
          <div className="flex items-center justify-center lg:justify-start gap-5 flex-wrap">
            {["Sin costo de implementación", "IA ilimitada", "Configuración en 1 hora"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <svg viewBox="0 0 12 12" className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="1,6 4,9 11,2" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: Dashboard Mockup */}
        <div className="flex justify-center lg:justify-end w-full min-w-0 overflow-hidden">
          <div className="relative w-full" style={{ maxWidth: 520 }}>
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-35 scale-105"
              style={{ background: "linear-gradient(135deg, #7c3aed, #c026d3, #6366f1)" }}
            />
            <div className="relative">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10">
        <Marquee />
      </div>
    </section>
  );
}
