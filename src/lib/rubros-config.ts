import {
  Scissors,
  Building2,
  Car,
  GraduationCap,
  Dumbbell,
  PawPrint,
  Stethoscope,
  Hospital,
  UtensilsCrossed,
  Plane,
  ShoppingBag,
  KeySquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface RubroConfig {
  label: string;
  slug: string;
  icon: LucideIcon;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
}

export const RUBROS_CONFIG: Record<string, RubroConfig> = {
  "clinicas-esteticas": {
    label: "Clínicas Estéticas",
    slug: "clinicas-esteticas",
    icon: Scissors,
    badge: "IA para Estéticas",
    heroTitle: "La IA que agenda citas y atiende a tus pacientes 24/7",
    heroSubtitle:
      "Responde consultas, agenda citas y recuerda turnos automáticamente. Sin perder ningún paciente por falta de respuesta.",
    metaTitle: "IA para Clínicas Estéticas – Agenda Automática y Atención 24/7 | Clientador",
    metaDescription:
      "Automatiza la agenda, responde consultas y fideliza pacientes con IA para clínicas estéticas. Configura en 1 hora. Sin conocimientos técnicos.",
  },
  inmobiliarias: {
    label: "Inmobiliarias",
    slug: "inmobiliarias",
    icon: Building2,
    badge: "IA para Inmobiliarias",
    heroTitle: "La IA que vende propiedades y atiende clientes 24/7",
    heroSubtitle:
      "Califica leads, agenda visitas y hace seguimiento automático a cada prospecto por WhatsApp. Más cierres, menos gestión.",
    metaTitle: "IA para Inmobiliarias – Califica Leads y Vende Más | Clientador",
    metaDescription:
      "Plataforma de IA para inmobiliarias: califica prospectos, agenda visitas y hace seguimiento automático por WhatsApp. Activo en 24 horas.",
  },
  automotoras: {
    label: "Automotoras",
    slug: "automotoras",
    icon: Car,
    badge: "IA para Automotoras",
    heroTitle: "La IA que vende más autos y atiende a tus compradores",
    heroSubtitle:
      "Responde consultas de stock, agenda test drives y califica a cada comprador potencial automáticamente por WhatsApp.",
    metaTitle: "IA para Automotoras – Vende Más Autos con Automatización | Clientador",
    metaDescription:
      "IA para concesionarios y automotoras: responde consultas, agenda test drives y califica compradores 24/7 por WhatsApp.",
  },
  academias: {
    label: "Academias",
    slug: "academias",
    icon: GraduationCap,
    badge: "IA para Academias",
    heroTitle: "La IA que inscribe alumnos y responde consultas por ti",
    heroSubtitle:
      "Automatiza inscripciones, responde sobre cursos y horarios, y convierte más interesados en alumnos matriculados.",
    metaTitle: "IA para Academias – Automatiza Inscripciones y Atención | Clientador",
    metaDescription:
      "IA para academias y centros de capacitación: automatiza inscripciones, responde consultas 24/7 y convierte más interesados en alumnos.",
  },
  gimnasios: {
    label: "Gimnasios",
    slug: "gimnasios",
    icon: Dumbbell,
    badge: "IA para Gimnasios",
    heroTitle: "La IA que inscribe socios y responde consultas por ti",
    heroSubtitle:
      "Atiende consultas de membresías, inscribe nuevos socios y hace seguimiento automático por WhatsApp. Sin perder ningún lead.",
    metaTitle: "IA para Gimnasios – Inscribe Socios con Automatización IA | Clientador",
    metaDescription:
      "IA para gimnasios: responde consultas de membresías, inscribe socios automáticamente y fideliza clientes 24/7 por WhatsApp.",
  },
  veterinarias: {
    label: "Veterinarias",
    slug: "veterinarias",
    icon: PawPrint,
    badge: "IA para Veterinarias",
    heroTitle: "La IA que agenda consultas y cuida a tus clientes",
    heroSubtitle:
      "Responde consultas, agenda citas veterinarias y envía recordatorios automáticos. Tus pacientes siempre atendidos.",
    metaTitle: "IA para Veterinarias – Agenda Citas y Atiende Clientes 24/7 | Clientador",
    metaDescription:
      "IA para clínicas veterinarias: agenda consultas, responde dudas y envía recordatorios automáticos. Sin perder ningún paciente.",
  },
  "clinicas-dentales": {
    label: "Clínicas Dentales",
    slug: "clinicas-dentales",
    icon: Stethoscope,
    badge: "IA para Odontología",
    heroTitle: "La IA que agenda pacientes y llena tu consulta dental",
    heroSubtitle:
      "Responde consultas, agenda tratamientos y recuerda citas automáticamente. Más pacientes atendidos, menos gestión administrativa.",
    metaTitle: "IA para Clínicas Dentales – Agenda Pacientes Automáticamente | Clientador",
    metaDescription:
      "IA para dentistas y clínicas dentales: agenda citas, responde consultas y envía recordatorios 24/7. Configura en 1 hora.",
  },
  "centros-medicos": {
    label: "Centros Médicos",
    slug: "centros-medicos",
    icon: Hospital,
    badge: "IA para Salud",
    heroTitle: "La IA que gestiona citas y atiende a tus pacientes 24/7",
    heroSubtitle:
      "Automatiza el agendamiento, responde consultas frecuentes y reduce el ausentismo con recordatorios inteligentes.",
    metaTitle: "IA para Centros Médicos – Automatiza Citas y Atención | Clientador",
    metaDescription:
      "IA para clínicas y centros médicos: agenda citas, responde consultas frecuentes y reduce el ausentismo con recordatorios automáticos.",
  },
  restaurantes: {
    label: "Restaurantes",
    slug: "restaurantes",
    icon: UtensilsCrossed,
    badge: "IA para Restaurantes",
    heroTitle: "La IA que toma reservas y atiende a tus comensales",
    heroSubtitle:
      "Responde preguntas sobre el menú, gestiona reservas y confirma pedidos automáticamente por WhatsApp. Sin perder ninguna mesa.",
    metaTitle: "IA para Restaurantes – Reservas y Atención Automática | Clientador",
    metaDescription:
      "IA para restaurantes: gestiona reservas, responde consultas del menú y confirma pedidos 24/7 por WhatsApp. Sin contratos.",
  },
  "agencias-de-viaje": {
    label: "Agencias de Viaje",
    slug: "agencias-de-viaje",
    icon: Plane,
    badge: "IA para Turismo",
    heroTitle: "La IA que cotiza viajes y convierte más pasajeros",
    heroSubtitle:
      "Responde consultas de paquetes, cotiza automáticamente y hace seguimiento a cada interesado hasta el cierre.",
    metaTitle: "IA para Agencias de Viaje – Cotiza y Vende Más | Clientador",
    metaDescription:
      "IA para agencias de viaje: responde consultas, cotiza paquetes automáticamente y convierte más prospectos en pasajeros.",
  },
  tiendas: {
    label: "Tiendas",
    slug: "tiendas",
    icon: ShoppingBag,
    badge: "IA para Retail",
    heroTitle: "La IA que atiende tu tienda y vende más sin esfuerzo",
    heroSubtitle:
      "Responde consultas de productos, disponibilidad y precios. Convierte más visitas en ventas reales, las 24 horas.",
    metaTitle: "IA para Tiendas – Atención al Cliente y Ventas Automáticas | Clientador",
    metaDescription:
      "IA para retail y tiendas: responde consultas de productos, precios y disponibilidad 24/7. Más ventas, sin aumentar tu equipo.",
  },
  "corredora-de-propiedades": {
    label: "Corredora de Propiedades",
    slug: "corredora-de-propiedades",
    icon: KeySquare,
    badge: "IA para Propiedades",
    heroTitle: "La IA que califica prospectos y llena tu agenda de visitas",
    heroSubtitle:
      "Filtra interesados, agenda visitas a propiedades y hace seguimiento automático por WhatsApp. Más cierres garantizados.",
    metaTitle: "IA para Corredoras de Propiedades – Califica Prospectos | Clientador",
    metaDescription:
      "IA para corredoras de propiedades: califica leads, agenda visitas y hace seguimiento automático. Más cierres, menos gestión.",
  },
};

export const RUBROS_LIST = Object.values(RUBROS_CONFIG);
