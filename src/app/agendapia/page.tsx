"use client";

import { Check } from "lucide-react";
import Marquee from "@/components/Marquee";
import DashboardMockup from "@/components/DashboardMockup";
import Features from "@/components/Features";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import Channels from "@/components/Channels";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CostCalculator from "@/components/CostCalculator";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { useBookingModal } from "@/components/BookingModal";

// ─── Precios exclusivos Agendapia ────────────────────────────────────────────
// Base: 1 USD = $1.000 CLP · Descuento 50% exclusivo
// No toca ni referencia el archivo global de precios
const PLANS_AGENDAPIA = [
  {
    name: "Básico",
    originalCLP: 79_000,
    discountCLP: 39_500,
    desc: "Para negocios que están comenzando con IA",
    users: "3 usuarios",
    highlight: false,
    features: [
      "Conexión con Whatsapp, Instagram, Facebook, Tik Tok, Gmail",
      "IA Conversacional",
      "~~Llamadas IA~~",
      "CRM Incluido",
      "Agenda IA: Reuniones",
      "~~Automatizaciones IA~~",
      "Whatsapp Masivo",
      "~~Marketing y Contenido IA~~",
      "~~Email Marketing~~",
      "Reportes y analítica",
      "Capacitación Inicial",
      "Soporte",
    ],
  },
  {
    name: "Growth",
    originalCLP: 129_000,
    discountCLP: 64_500,
    desc: "Para equipos de ventas en crecimiento",
    users: "7 usuarios",
    highlight: true,
    badge: "Más popular",
    features: [
      "Conexión con Whatsapp, Instagram, Facebook, Tik Tok, Gmail y Chat Web",
      "IA Conversacional",
      "~~Llamadas IA~~",
      "CRM Incluido",
      "Agenda IA: Reuniones y Servicios",
      "Automatizaciones IA",
      "Whatsapp Masivo",
      "~~Marketing y contenido IA~~",
      "~~Email Marketing~~",
      "Reportes y analítica",
      "Capacitación Inicial",
      "Soporte",
    ],
  },
  {
    name: "Premium",
    originalCLP: 249_000,
    discountCLP: 124_500,
    desc: "Para empresas que escalan sin límites",
    users: "Usuarios ilimitados",
    highlight: false,
    features: [
      "Conexión con Whatsapp, Instagram, Facebook, Tik Tok, Gmail y Chat Web",
      "IA Conversacional",
      "Llamadas IA",
      "CRM Incluido",
      "Agenda IA: Reuniones, Servicios y Arriendos",
      "Automatizaciones IA",
      "Whatsapp Masivo",
      "Email Marketing",
      "Marketing y contenido IA",
      "Reportes y Analítica",
      "Capacitación Inicial",
      "Soporte",
    ],
  },
];

function formatCLP(n: number) {
  return `$${n.toLocaleString("es-CL")}`;
}

// ─── Hero Agendapia ──────────────────────────────────────────────────────────
function AgendapiaHero() {
  const { open } = useBookingModal();
  return (
    <section id="inicio" className="relative flex flex-col overflow-hidden" style={{ background: "transparent" }}>
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full" style={{ width: "80%", height: "80%", top: "-20%", right: "-15%", background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(109,40,217,0.06) 50%, transparent 75%)", filter: "blur(80px)" }} />
        <div className="absolute rounded-full" style={{ width: "60%", height: "60%", bottom: "-10%", left: "-10%", background: "radial-gradient(circle, rgba(20,184,166,0.09) 0%, rgba(6,182,212,0.05) 55%, transparent 75%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" style={{ minHeight: "calc(100vh - 120px)" }}>

        {/* LEFT */}
        <div className="flex flex-col gap-7 items-center lg:items-start text-center lg:text-left">

          {/* Badge alianza */}
          <div className="inline-flex w-fit mx-auto lg:mx-0 animate-gradient-flow rounded-full p-[1.5px]">
            <div className="flex items-center gap-2.5 rounded-full px-4 py-2 backdrop-blur-sm" style={{ background: "rgba(2,6,23,0.85)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" />
              </span>
              <span className="text-xs font-medium tracking-wide" style={{ color: "#c4b5fd" }}>
                Alianza: Clientador + Agendapia
              </span>
            </div>
          </div>

          {/* H1 */}
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-center lg:text-left"
              style={{ fontFamily: "var(--font-heading, 'Plus Jakarta Sans', Inter, sans-serif)", color: "#ffffff" }}>
              La{" "}
              <span className="inline-block text-gradient-animated">IA</span>
              {" "}que atiende y{" "}
              <span className="inline-block text-gradient-animated">agenda por ti</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-md font-normal text-center lg:text-left">
            Responde consultas, agenda citas y hace seguimiento a tus clientes, sin aumentar tus costos.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <button onClick={open} className="btn-primary gap-2.5 px-5 py-2.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              DEMO EN VIVO
            </button>
            <a href="https://wa.me/56996832736" target="_blank" rel="noopener noreferrer"
              className="btn-secondary gap-2 px-5 py-2.5 text-sm">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              PROBAR IA WHATSAPP
            </a>
          </div>

          {/* Trust */}
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

        {/* RIGHT: Dashboard */}
        <div className="flex justify-center lg:justify-end w-full min-w-0 overflow-hidden">
          <div className="relative w-full" style={{ maxWidth: 520 }}>
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-35 scale-105"
              style={{ background: "linear-gradient(135deg, #7c3aed, #c026d3, #6366f1)" }} />
            <div className="relative"><DashboardMockup /></div>
          </div>
        </div>
      </div>

      <div className="relative z-10"><Marquee /></div>
    </section>
  );
}

// ─── Pricing Agendapia ───────────────────────────────────────────────────────
function AgendapiaPricing() {
  const { open } = useBookingModal();
  return (
    <section id="precios" className="py-20" style={{ background: "transparent" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-widest" style={{ color: "#a78bfa" }}>
            Precio especial
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#f1f5f9" }}>
            Precio especial a clientes{" "}
            <span className="inline-block text-gradient-animated">Agendapia</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
            50% de descuento exclusivo por ser usuario de Agendapia. Usa la IA sin límite.
          </p>
          <div className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full text-sm font-bold"
            style={{ background: "linear-gradient(135deg, rgba(129,140,248,0.15), rgba(192,132,252,0.15))", border: "1px solid rgba(167,139,250,0.4)", color: "#c084fc" }}>
            🎁 50% OFF — Exclusivo clientes Agendapia
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PLANS_AGENDAPIA.map((plan) => (
            <div key={plan.name}
              className="relative flex flex-col rounded-3xl p-8 transition-all duration-300 group overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              {/* Borde degradado */}
              <span aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl z-0 border-2 border-transparent group-hover:scale-[1.03] transition-transform duration-300"
                style={{
                  background: "linear-gradient(120deg, #818cf8, #c084fc, #38bdf8, #a78bfa, #34d399)",
                  backgroundOrigin: "border-box",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  opacity: plan.highlight ? 1 : 0.7,
                  filter: "blur(2px)",
                }}
              />
              {plan.badge && (
                <div className="absolute top-[22px] -right-[32px] w-[130px] py-1.5 text-center text-[9px] font-bold tracking-widest uppercase bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#38bdf8] text-white shadow-[0_2px_16px_rgba(167,139,250,0.6)] rotate-45 z-20 pointer-events-none">
                  {plan.badge}
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex flex-col items-center text-center">
                  <h3 className="font-bold text-xl mb-1" style={{ color: "#f1f5f9" }}>{plan.name}</h3>
                  <p className="text-sm mb-5" style={{ color: "#64748b" }}>{plan.desc}</p>

                  {/* Precio original tachado */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm line-through" style={{ color: "#475569" }}>
                      {formatCLP(plan.originalCLP)} CLP/mes
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa" }}>-50%</span>
                  </div>

                  {/* Precio con descuento */}
                  <div className="flex items-end gap-1 justify-center">
                    <span className="text-5xl font-bold" style={{ color: "#f1f5f9" }}>
                      {formatCLP(plan.discountCLP)}
                    </span>
                  </div>
                  <span className="text-sm mt-1 mb-4" style={{ color: "#64748b" }}>CLP / mes</span>

                  {/* Usuarios */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a78bfa]/40 bg-white/5 text-xs font-semibold text-white shadow-sm mb-2">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4Z" /></svg>
                    <span>{plan.users}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a78bfa]/40 bg-white/5 text-xs font-semibold text-white shadow-sm">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                    <span>Clientes Ilimitados</span>
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => {
                    const strikeMatch = f.match(/^~~(.+?)~~$/);
                    return (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#a78bfa" }} />
                        {strikeMatch
                          ? <span style={{ color: "#94a3b8", textDecoration: "line-through" }}>{strikeMatch[1]}</span>
                          : <span style={{ color: "#94a3b8" }}>{f}</span>
                        }
                      </li>
                    );
                  })}
                </ul>

                <button onClick={open} className="py-3.5 text-sm w-full btn-primary mt-auto">
                  OBTENER PRECIO ESPECIAL
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "#475569" }}>
          Oferta exclusiva para clientes Agendapia · Precios en CLP · Sin costo de implementación · Puede agregar usuarios adicionales por $7.000 CLP
        </p>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function AgendapiaPage() {
  return (
    <>
      <main>
        <AgendapiaHero />
        <FadeIn><Features /></FadeIn>
        <FadeIn delay={0.05}><FeatureDeepDive /></FadeIn>
        <FadeIn delay={0.05}><Channels /></FadeIn>
        <FadeIn delay={0.05}><Process /></FadeIn>
        <FadeIn delay={0.05}><Testimonials /></FadeIn>
        <FadeIn delay={0.05}><AgendapiaPricing /></FadeIn>
        <FadeIn delay={0.05}><CostCalculator /></FadeIn>
        <FadeIn delay={0.05}><FAQ /></FadeIn>
        <FadeIn delay={0.05}><FooterCTA /></FadeIn>
      </main>
      <Footer />
    </>
  );
}
