// ─── Fuente única de verdad para precios ─────────────────────────────────────
// Cambia aquí y se actualiza en: Pricing, JSON-LD, páginas /alternativa y textos SEO.
// NO toca /agendapia (tiene precios especiales en CLP).

export const PRICING = {
  basic:     { usd: 79,  users: "3 usuarios" },
  growth:    { usd: 129, users: "7 usuarios" },
  premium:   { usd: 249, users: "Usuarios ilimitados" },
  extraUser: { usd: 7 },
} as const;

// Labels listos para usar en textos
export const PRICE_LABELS = {
  basic:     `USD ${PRICING.basic.usd}/mes`,
  growth:    `USD ${PRICING.growth.usd}/mes`,
  premium:   `USD ${PRICING.premium.usd}/mes`,
  extraUserUsd: `U$${PRICING.extraUser.usd}`,
  extraUserClp: `$${(PRICING.extraUser.usd * 1000).toLocaleString("es-CL")} CLP`,
  baseFrom:  `Desde USD ${PRICING.basic.usd}/mes`,
} as const;
