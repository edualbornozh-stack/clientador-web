import { PRICE_LABELS } from "@/lib/config";

export type CompetitorCategory = "ai-whatsapp" | "crm";

export interface Competitor {
  slug: string;
  name: string;
  category: CompetitorCategory;
  categoryLabel: string;
  headline: string;        // H1 de la página
  metaTitle: string;
  metaDesc: string;
  comparisonRows: {
    feature: string;
    clientador: string;
    competitor: string;
    clientadorWins: boolean;
  }[];
  faqItems: { q: string; a: string }[];
}

export const COMPETITORS: Record<string, Competitor> = {
  vambe: {
    slug: "vambe",
    name: "Vambe",
    category: "ai-whatsapp",
    categoryLabel: "Plataforma de IA para WhatsApp",
    headline: "La alternativa a Vambe con IA ilimitada y CRM incluido",
    metaTitle: "Alternativa a Vambe | Clientador vs Vambe – Más por menos",
    metaDesc: "¿Buscas una alternativa a Vambe? Clientador ofrece IA ilimitada, CRM incluido, soporte humano y sin costo de implementación. Compara y elige.",
    comparisonRows: [
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "Planes con límites de mensajes", clientadorWins: true },
      { feature: "CRM incluido en el plan", clientador: "✅ Incluido desde el plan base", competitor: "No incluido o con costo adicional", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Requiere onboarding pago", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte básico en planes bajos", clientadorWins: true },
      { feature: "Canales conectados", clientador: "WhatsApp, Instagram, Facebook, TikTok, Gmail, Chat Web", competitor: "Principalmente WhatsApp", clientadorWins: true },
      { feature: "Automatizaciones IA", clientador: "✅ Incluidas en plan Growth y Premium", competitor: "Limitadas o de pago adicional", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Precio más elevado por funciones equivalentes", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Por qué elegir Clientador sobre Vambe?", a: "Clientador incluye CRM, automatizaciones y soporte humano en el mismo plan, sin costo de implementación. La IA funciona de forma ilimitada y solo pagas por el uso real, lo que lo hace más económico para pymes en crecimiento." },
      { q: "¿Clientador es una buena alternativa a Vambe para pymes?", a: "Sí. Clientador está diseñado específicamente para pymes latinoamericanas: precio accesible desde USD 79/mes, configuración en menos de 24 horas y soporte humano desde el primer día." },
      { q: "¿Qué tiene Clientador que no tiene Vambe?", a: "CRM inteligente incluido, agenda automática con IA, multicanal completo (WhatsApp + Instagram + Facebook + TikTok + Gmail), campañas masivas y llamadas de voz IA, todo en una sola plataforma." },
    ],
  },
  clinera: {
    slug: "clinera",
    name: "Clinera",
    category: "ai-whatsapp",
    categoryLabel: "Plataforma de IA para WhatsApp",
    headline: "La alternativa a Clinera que incluye todo en un solo plan",
    metaTitle: "Alternativa a Clinera | Clientador vs Clinera – Todo en uno",
    metaDesc: "¿Evaluando alternativas a Clinera? Clientador ofrece IA ilimitada, CRM, automatizaciones y soporte humano sin costo de implementación. Compara ahora.",
    comparisonRows: [
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "Planes con cuotas fijas de mensajes", clientadorWins: true },
      { feature: "CRM incluido en el plan", clientador: "✅ Incluido desde el plan base", competitor: "No incluido o limitado", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Requiere setup inicial pago", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte automatizado en planes base", clientadorWins: true },
      { feature: "Canales conectados", clientador: "WhatsApp, Instagram, Facebook, TikTok, Gmail, Chat Web", competitor: "Canales limitados según plan", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Precio comparable o mayor con menos funciones", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Es Clientador mejor que Clinera?", a: "Clientador ofrece una plataforma más completa: CRM incluido, multicanal, automatizaciones IA y soporte humano, todo sin costo de implementación. Para pymes que buscan una solución integral, es una ventaja clara." },
      { q: "¿Cuánto cuesta Clientador comparado con Clinera?", a: "Clientador parte desde USD 79/mes con CRM incluido, IA ilimitada (pago por uso) y sin cargo de implementación, lo que representa un costo total menor frente a plataformas equivalentes." },
      { q: "¿Puedo migrar de Clinera a Clientador fácilmente?", a: "Sí. El equipo de Clientador realiza la migración y configuración completa en menos de 24 horas, sin que tengas que hacer nada técnico." },
    ],
  },
  comos: {
    slug: "comos",
    name: "Comos",
    category: "ai-whatsapp",
    categoryLabel: "Plataforma de IA para WhatsApp",
    headline: "La alternativa a Comos con más canales y CRM incluido",
    metaTitle: "Alternativa a Comos | Clientador vs Comos – CRM + IA ilimitada",
    metaDesc: "¿Buscas alternativa a Comos? Clientador incluye CRM, IA ilimitada, soporte humano y canales múltiples desde USD 79/mes. Sin costo de implementación.",
    comparisonRows: [
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "Planes con límites de uso", clientadorWins: true },
      { feature: "CRM incluido en el plan", clientador: "✅ Incluido desde el plan base", competitor: "No incluido", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Setup con costo adicional", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte limitado en planes base", clientadorWins: true },
      { feature: "Canales conectados", clientador: "WhatsApp, Instagram, Facebook, TikTok, Gmail, Chat Web", competitor: "Principalmente WhatsApp", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Similar o mayor con menos funciones incluidas", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Qué ventajas tiene Clientador sobre Comos?", a: "Clientador incluye CRM inteligente, agenda automática, multicanal completo y automatizaciones IA en un solo plan. Comos se enfoca principalmente en WhatsApp, mientras Clientador conecta todos tus canales." },
      { q: "¿Clientador tiene mejor precio que Comos?", a: "Clientador ofrece más funciones incluidas (CRM, automatizaciones, multicanal) a un precio competitivo desde USD 79/mes y sin costo de implementación." },
      { q: "¿Cómo funciona el soporte de Clientador?", a: "Desde el primer día tienes acceso a soporte humano directo. El equipo configura todo por ti y está disponible para resolver dudas durante el proceso." },
    ],
  },
  "versu-ai": {
    slug: "versu-ai",
    name: "Versu AI",
    category: "ai-whatsapp",
    categoryLabel: "Plataforma de IA conversacional",
    headline: "La alternativa a Versu AI con plataforma todo en uno",
    metaTitle: "Alternativa a Versu AI | Clientador vs Versu AI – Todo en uno",
    metaDesc: "¿Buscas alternativa a Versu AI? Clientador ofrece IA ilimitada, CRM, automatizaciones y soporte humano desde USD 79/mes. Sin costo de implementación.",
    comparisonRows: [
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "Consumo limitado por plan", clientadorWins: true },
      { feature: "CRM incluido en el plan", clientador: "✅ Incluido desde el plan base", competitor: "Requiere integración externa", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Implementación con costo", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte técnico estándar", clientadorWins: true },
      { feature: "Canales conectados", clientador: "WhatsApp, Instagram, Facebook, TikTok, Gmail, Chat Web", competitor: "Canales según integración", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Precio más elevado para funciones equivalentes", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Por qué Clientador es mejor alternativa a Versu AI?", a: "Clientador es una plataforma todo en uno: incluye CRM, automatizaciones, marketing masivo y IA conversacional sin necesidad de integrar herramientas externas ni pagar implementación." },
      { q: "¿Clientador funciona para el mismo tipo de negocios que Versu AI?", a: "Sí, y para más. Clientador está diseñado para pymes de cualquier industria en Latinoamérica, con configuración rápida y soporte humano desde el primer momento." },
      { q: "¿Qué canales cubre Clientador que Versu AI no cubre?", a: "Clientador conecta WhatsApp, Instagram, Facebook, TikTok, Gmail y Chat Web en una sola bandeja. Además incluye llamadas de voz con IA." },
    ],
  },
  zolutium: {
    slug: "zolutium",
    name: "Zolutium",
    category: "ai-whatsapp",
    categoryLabel: "Plataforma de automatización WhatsApp",
    headline: "La alternativa a Zolutium con IA nativa y CRM incluido",
    metaTitle: "Alternativa a Zolutium | Clientador vs Zolutium – IA + CRM",
    metaDesc: "¿Evaluando Zolutium? Clientador incluye IA conversacional nativa, CRM, multicanal y soporte humano desde USD 79/mes sin costo de implementación.",
    comparisonRows: [
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "Automatización limitada por reglas", clientadorWins: true },
      { feature: "CRM incluido en el plan", clientador: "✅ Incluido desde el plan base", competitor: "No incluido o básico", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Requiere configuración técnica", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte con tiempos de espera", clientadorWins: true },
      { feature: "IA conversacional nativa", clientador: "✅ IA que conversa en lenguaje natural", competitor: "Flujos basados en reglas y botones", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Costo comparable con menos IA incluida", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Qué diferencia a Clientador de Zolutium?", a: "Clientador usa IA conversacional real (no flujos por botones), incluye CRM propio y está configurado por el equipo sin costo adicional. Zolutium se basa principalmente en automatizaciones por reglas." },
      { q: "¿Es Clientador más fácil de usar que Zolutium?", a: "Sí. El equipo de Clientador configura todo por ti en menos de 24 horas. No necesitas conocimientos técnicos ni armar flujos complejos." },
      { q: "¿Clientador puede reemplazar a Zolutium completamente?", a: "Sí, y con más funciones: IA conversacional, CRM, agenda, campañas masivas, multicanal y llamadas de voz IA en una sola plataforma." },
    ],
  },
  atom: {
    slug: "atom",
    name: "Atom",
    category: "ai-whatsapp",
    categoryLabel: "Plataforma de automatización WhatsApp",
    headline: "La alternativa a Atom con IA real y plataforma todo en uno",
    metaTitle: "Alternativa a Atom | Clientador vs Atom – IA conversacional todo en uno",
    metaDesc: "¿Buscas alternativa a Atom? Clientador ofrece IA conversacional, CRM incluido, soporte humano y sin costo de implementación. ${PRICE_LABELS.baseFrom}.",
    comparisonRows: [
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "Planes con límites de conversaciones", clientadorWins: true },
      { feature: "CRM incluido en el plan", clientador: "✅ Incluido desde el plan base", competitor: "No incluido nativamente", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Setup con cargo inicial", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte por tickets en planes bajos", clientadorWins: true },
      { feature: "Canales conectados", clientador: "WhatsApp, Instagram, Facebook, TikTok, Gmail, Chat Web", competitor: "WhatsApp principalmente", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Precio más elevado o con menos funciones base", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Clientador es mejor que Atom para ventas?", a: "Clientador incluye CRM con calificación de leads, automatizaciones de seguimiento y campañas masivas por WhatsApp, funciones que en Atom requieren integraciones adicionales." },
      { q: "¿Puedo usar Clientador en lugar de Atom para mi negocio?", a: "Sí. Clientador cubre todo lo que Atom ofrece y añade CRM, agenda automática, llamadas IA y soporte multicanal, todo sin costo de implementación." },
      { q: "¿Cuál es el precio de Clientador vs Atom?", a: "Clientador parte desde USD 79/mes con CRM incluido y sin costo de implementación, lo que representa un mejor valor total considerando todas las funciones incluidas." },
    ],
  },
  eclectic: {
    slug: "eclectic",
    name: "Eclectic",
    category: "ai-whatsapp",
    categoryLabel: "Plataforma de IA para negocios",
    headline: "La alternativa a Eclectic con más funciones al mejor precio",
    metaTitle: "Alternativa a Eclectic | Clientador vs Eclectic – Más funciones, mejor precio",
    metaDesc: "¿Comparando Eclectic con otras opciones? Clientador ofrece IA ilimitada, CRM, soporte humano y sin implementación desde USD 79/mes. Conoce la diferencia.",
    comparisonRows: [
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "Uso limitado según plan", clientadorWins: true },
      { feature: "CRM incluido en el plan", clientador: "✅ Incluido desde el plan base", competitor: "Integración externa necesaria", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Implementación con cargo adicional", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte estándar según plan", clientadorWins: true },
      { feature: "Canales conectados", clientador: "WhatsApp, Instagram, Facebook, TikTok, Gmail, Chat Web", competitor: "Canales variables por plan", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Precio similar o mayor con menos incluido", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Por qué elegir Clientador sobre Eclectic?", a: "Clientador entrega una plataforma completa con CRM, IA, multicanal y automatizaciones en un solo lugar, sin necesidad de integrar otras herramientas ni pagar implementación." },
      { q: "¿Clientador es más económico que Eclectic?", a: "Sí, considerando el valor total: Clientador incluye CRM, automatizaciones y soporte humano en su plan base desde USD 79/mes sin cargo de implementación." },
      { q: "¿Cuánto tarda la configuración de Clientador?", a: "Menos de 24 horas. El equipo de Clientador realiza toda la configuración: integración de canales, entrenamiento de la IA y flujos de automatización." },
    ],
  },
  dapta: {
    slug: "dapta",
    name: "Dapta",
    category: "ai-whatsapp",
    categoryLabel: "Plataforma de IA para empresas",
    headline: "La alternativa a Dapta con soporte humano y sin costo de implementación",
    metaTitle: "Alternativa a Dapta | Clientador vs Dapta – Soporte humano + IA ilimitada",
    metaDesc: "¿Evaluando Dapta? Clientador ofrece IA ilimitada, CRM incluido, soporte humano desde el día 1 y sin costo de implementación. ${PRICE_LABELS.baseFrom}.",
    comparisonRows: [
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "Planes con límites de uso de IA", clientadorWins: true },
      { feature: "CRM incluido en el plan", clientador: "✅ Incluido desde el plan base", competitor: "No incluido en plan base", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Implementación con costo", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte técnico variable", clientadorWins: true },
      { feature: "Canales conectados", clientador: "WhatsApp, Instagram, Facebook, TikTok, Gmail, Chat Web", competitor: "Canales según integración contratada", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Precio más elevado para funciones equivalentes", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Clientador es una buena alternativa a Dapta?", a: "Sí. Clientador incluye CRM, automatizaciones, multicanal y soporte humano sin costo de implementación, todo en una plataforma pensada para pymes latinoamericanas." },
      { q: "¿Qué tiene Clientador que no tiene Dapta?", a: "CRM incluido en el plan base, agenda automática con IA, llamadas de voz IA, campañas masivas por WhatsApp y soporte humano desde el primer día." },
      { q: "¿Es difícil migrar de Dapta a Clientador?", a: "No. El equipo de Clientador realiza toda la migración y configuración en menos de 24 horas, sin que necesites conocimientos técnicos." },
    ],
  },
  hubspot: {
    slug: "hubspot",
    name: "HubSpot",
    category: "crm",
    categoryLabel: "CRM empresarial",
    headline: "La alternativa a HubSpot con IA nativa y WhatsApp incluido",
    metaTitle: "Alternativa a HubSpot | Clientador vs HubSpot – IA + WhatsApp desde USD 79",
    metaDesc: "¿HubSpot es demasiado caro o complejo para tu pyme? Clientador ofrece CRM con IA nativa, WhatsApp integrado y soporte humano desde USD 79/mes.",
    comparisonRows: [
      { feature: "IA conversacional nativa", clientador: "✅ IA que atiende y vende 24/7", competitor: "❌ Sin IA conversacional integrada", clientadorWins: true },
      { feature: "WhatsApp API Oficial integrado", clientador: "✅ Incluido en todos los planes", competitor: "❌ Requiere integración de terceros", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "❌ Onboarding de miles de dólares", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Desde USD 800/mes para funciones equivalentes", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Solo en planes Enterprise", clientadorWins: true },
      { feature: "Configuración en horas", clientador: "✅ Menos de 24 horas", competitor: "❌ Semanas de implementación", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Clientador es una buena alternativa a HubSpot para pymes?", a: "Sí. HubSpot está diseñado para grandes empresas con equipos técnicos y presupuestos altos. Clientador ofrece CRM con IA nativa, WhatsApp integrado y automatizaciones desde USD 79/mes, sin implementación ni contratos largos." },
      { q: "¿Por qué HubSpot es tan caro comparado con Clientador?", a: "HubSpot cobra por cantidad de contactos, funciones adicionales y onboarding. Clientador tiene un precio fijo mensual con CRM, IA, multicanal y automatizaciones incluidas desde el plan base." },
      { q: "¿Clientador tiene las mismas funciones de CRM que HubSpot?", a: "Clientador cubre las funciones de CRM que una pyme realmente necesita: gestión de contactos, embudo de ventas, seguimiento automático y reportes, con la ventaja de tener IA conversacional y WhatsApp integrado nativamente." },
    ],
  },
  kommo: {
    slug: "kommo",
    name: "Kommo",
    category: "crm",
    categoryLabel: "CRM para WhatsApp",
    headline: "La alternativa a Kommo con IA nativa y precio más accesible",
    metaTitle: "Alternativa a Kommo | Clientador vs Kommo – IA conversacional + CRM",
    metaDesc: "¿Buscas alternativa a Kommo? Clientador ofrece CRM con IA nativa, WhatsApp oficial, soporte humano y sin implementación desde USD 79/mes.",
    comparisonRows: [
      { feature: "IA conversacional nativa", clientador: "✅ IA que atiende clientes 24/7", competitor: "❌ Sin IA nativa, requiere integraciones", clientadorWins: true },
      { feature: "WhatsApp API Oficial integrado", clientador: "✅ Incluido en todos los planes", competitor: "✅ WhatsApp integrado", clientadorWins: false },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Requiere configuración técnica", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte estándar", clientadorWins: true },
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "❌ No incluye IA conversacional", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Precio similar pero sin IA incluida", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Qué ventaja tiene Clientador sobre Kommo?", a: "La principal diferencia es la IA conversacional nativa: Clientador atiende, califica y hace seguimiento a tus leads de forma automática sin que necesites estar conectado. Kommo es un CRM WhatsApp sin IA integrada." },
      { q: "¿Clientador y Kommo tienen el mismo precio?", a: "Precios similares, pero Clientador incluye IA conversacional, automatizaciones y llamadas IA que en Kommo requieren integraciones externas adicionales." },
      { q: "¿Puedo reemplazar Kommo con Clientador?", a: "Sí. Clientador tiene toda la funcionalidad de CRM con WhatsApp de Kommo, más IA conversacional, multicanal completo, agenda automática y campañas masivas." },
    ],
  },
  clientify: {
    slug: "clientify",
    name: "Clientify",
    category: "crm",
    categoryLabel: "CRM para ventas",
    headline: "La alternativa a Clientify con IA conversacional y WhatsApp nativo",
    metaTitle: "Alternativa a Clientify | Clientador vs Clientify – IA + WhatsApp integrado",
    metaDesc: "¿Evaluando Clientify? Clientador incluye IA conversacional, WhatsApp oficial, CRM y automatizaciones desde USD 79/mes sin costo de implementación.",
    comparisonRows: [
      { feature: "IA conversacional nativa", clientador: "✅ IA que atiende clientes 24/7", competitor: "❌ Sin IA conversacional nativa", clientadorWins: true },
      { feature: "WhatsApp API Oficial integrado", clientador: "✅ Incluido en todos los planes", competitor: "Integración adicional requerida", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Setup con costo", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte estándar por plan", clientadorWins: true },
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "❌ No incluye IA conversacional", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Precio comparable con menos funciones IA", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Por qué Clientador es mejor alternativa a Clientify?", a: "Clientador añade IA conversacional nativa sobre un CRM completo con WhatsApp integrado. Clientify es un CRM tradicional que no incluye automatización por IA ni atención automática de clientes." },
      { q: "¿Clientador sirve para los mismos negocios que Clientify?", a: "Sí. Clientador está diseñado para pymes latinoamericanas, igual que Clientify, pero añade IA que atiende, califica y hace seguimiento automático a tus clientes." },
      { q: "¿Cuánto vale Clientador frente a Clientify?", a: "Precios similares, pero Clientador incluye IA conversacional, WhatsApp API oficial y automatizaciones que en Clientify requieren integraciones externas adicionales." },
    ],
  },
  zoho: {
    slug: "zoho",
    name: "Zoho CRM",
    category: "crm",
    categoryLabel: "CRM empresarial",
    headline: "La alternativa a Zoho CRM más simple, con IA y WhatsApp incluido",
    metaTitle: "Alternativa a Zoho CRM | Clientador vs Zoho – Más simple, con IA",
    metaDesc: "¿Zoho CRM es demasiado complejo para tu equipo? Clientador ofrece CRM con IA, WhatsApp integrado, soporte humano y configuración en 24 horas desde USD 79/mes.",
    comparisonRows: [
      { feature: "IA conversacional nativa", clientador: "✅ IA que atiende clientes 24/7", competitor: "IA limitada a análisis de datos", clientadorWins: true },
      { feature: "WhatsApp API Oficial integrado", clientador: "✅ Incluido en todos los planes", competitor: "❌ Integración externa necesaria", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración en 24 horas sin cargo", competitor: "❌ Implementación compleja y costosa", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte técnico por tickets", clientadorWins: true },
      { feature: "Configuración sin conocimientos técnicos", clientador: "✅ El equipo configura todo", competitor: "❌ Curva de aprendizaje alta", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom} (todo incluido)", competitor: "Módulos adicionales con costo extra", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Clientador es más fácil de usar que Zoho CRM?", a: "Sí. Zoho CRM tiene una curva de aprendizaje alta y requiere configuración técnica. Clientador está operativo en menos de 24 horas, con el equipo haciendo todo el setup por ti." },
      { q: "¿Clientador tiene IA que Zoho no tiene?", a: "Sí. Clientador incluye IA conversacional que atiende a tus clientes por WhatsApp, Instagram y más canales de forma automática. Zoho ofrece IA analítica pero no conversacional integrada." },
      { q: "¿Es más barato Clientador que Zoho CRM?", a: "Para pymes que necesitan CRM + WhatsApp + IA, Clientador es significativamente más económico: USD 79/mes todo incluido, sin módulos adicionales ni implementación cara." },
    ],
  },
  pipedrive: {
    slug: "pipedrive",
    name: "Pipedrive",
    category: "crm",
    categoryLabel: "CRM de ventas",
    headline: "La alternativa a Pipedrive con IA conversacional y WhatsApp nativo",
    metaTitle: "Alternativa a Pipedrive | Clientador vs Pipedrive – IA + WhatsApp",
    metaDesc: "¿Buscas alternativa a Pipedrive con WhatsApp e IA? Clientador incluye CRM, IA conversacional, WhatsApp oficial y soporte humano desde USD 79/mes.",
    comparisonRows: [
      { feature: "IA conversacional nativa", clientador: "✅ IA que atiende clientes 24/7", competitor: "❌ Sin IA conversacional integrada", clientadorWins: true },
      { feature: "WhatsApp API Oficial integrado", clientador: "✅ Incluido en todos los planes", competitor: "❌ Integración externa necesaria", clientadorWins: true },
      { feature: "Sin costo de implementación", clientador: "✅ Configuración sin cargo", competitor: "Requiere configuración del equipo", clientadorWins: true },
      { feature: "Soporte humano desde el día 1", clientador: "✅ Soporte directo desde el inicio", competitor: "Soporte estándar", clientadorWins: true },
      { feature: "IA ilimitada (pago por uso real)", clientador: "✅ Solo pagas lo que usas", competitor: "❌ No incluye IA conversacional", clientadorWins: true },
      { feature: "Precio base mensual", clientador: "${PRICE_LABELS.baseFrom}", competitor: "Precio comparable pero sin IA ni WhatsApp nativo", clientadorWins: true },
    ],
    faqItems: [
      { q: "¿Clientador reemplaza a Pipedrive?", a: "Sí. Clientador tiene las funciones de CRM de Pipedrive (embudo de ventas, gestión de contactos, seguimiento) y añade IA conversacional, WhatsApp integrado y automatizaciones que Pipedrive no incluye nativamente." },
      { q: "¿Qué tiene Clientador que no tiene Pipedrive?", a: "IA conversacional que atiende clientes 24/7, WhatsApp API oficial integrado, agenda automática, campañas masivas y llamadas de voz con IA, todo sin integraciones externas." },
      { q: "¿Cuál es el precio de Clientador vs Pipedrive?", a: "Precios similares, pero Clientador incluye IA conversacional, WhatsApp y automatizaciones que en Pipedrive requieren integraciones externas pagadas adicionalmente." },
    ],
  },
};

export const ALL_COMPETITORS = Object.values(COMPETITORS);
export const AI_COMPETITORS = ALL_COMPETITORS.filter(c => c.category === "ai-whatsapp");
export const CRM_COMPETITORS = ALL_COMPETITORS.filter(c => c.category === "crm");
