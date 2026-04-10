import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Básico",
    price: 79,
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
    cta: "AGENDAR DEMO",
  },
  {
    name: "Growth",
    price: 129,
    desc: "Para equipos de ventas en crecimiento",
    users: "7 usuarios",
    highlight: true,
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
    cta: "AGENDAR DEMO",
  },
  {
    name: "Premium",
    price: 249,
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
    cta: "AGENDAR DEMO",
    badge: "Uso IA sin costo",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-20" style={{ background: "transparent" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-widest" style={{ color: "#a78bfa" }}>
            Precios
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#f1f5f9" }}>
            Nuestros planes con <span className="inline-block text-gradient-animated">IA ilimitada</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
            Elige el plan que se adapta a tu negocio y usa la IA sin límite, solo paga por uso real.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-3xl p-8 transition-all duration-300 group overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "none"
              }}
            >
              {/* Borde degradado animado */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl z-0 border-2 border-transparent group-hover:scale-[1.03] transition-transform duration-300"
                style={{
                  background: "linear-gradient(120deg, #818cf8, #c084fc, #38bdf8, #a78bfa, #34d399)",
                  backgroundOrigin: 'border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: 0.7,
                  filter: 'blur(2px)'
                }}
              />
              {plan.badge && (
                <div className="absolute top-[22px] -right-[32px] w-[130px] py-1.5 text-center text-[9px] font-bold tracking-widest uppercase bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#38bdf8] text-white shadow-[0_2px_16px_rgba(167,139,250,0.6)] rotate-45 z-20 pointer-events-none">
                  {plan.badge}
                </div>
              )}
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex flex-col items-center text-center">
                  <h3 className="font-bold text-xl mb-1" style={{ color: "#f1f5f9" }}>
                    {plan.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#64748b" }}>
                    {plan.desc}
                  </p>
                  <div className="flex items-end gap-1 justify-center mb-2">
                    <span className="text-sm" style={{ color: "#64748b" }}>USD</span>
                    <span className="text-5xl font-bold" style={{ color: "#f1f5f9" }}>
                      ${plan.price}
                    </span>
                    <span className="text-sm mb-1" style={{ color: "#64748b" }}>/mes</span>
                  </div>
                  {/* Usuarios */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a78bfa]/40 bg-white/5 text-xs font-semibold text-white shadow-sm mb-2">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4Z"/></svg>
                    <span>{plan.users}</span>
                  </div>
                  {/* Clientes Ilimitados */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a78bfa]/40 bg-white/5 text-xs font-semibold text-white shadow-sm mb-1">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                    <span>Clientes Ilimitados</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => {
                    const strikeMatch = f.match(/^~~(.+?)~~$/);
                    return (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "#a78bfa" }}
                        />
                        {strikeMatch ? (
                          <span style={{ color: "#94a3b8", textDecoration: 'line-through' }}>{strikeMatch[1]}</span>
                        ) : (
                          <span style={{ color: "#94a3b8" }}>{f}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="https://mi.clientador.com/widget/booking/9BIrfq1qKd6NoCAObqzO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 text-sm w-full btn-primary mt-auto"
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "#475569" }}>
          Todos los planes incluyen IA ilimitada basado en costo por uso · Sin costo de implementación · Puede agregar usuarios adicionales por U$7
        </p>
      </div>
    </section>
  );
}
