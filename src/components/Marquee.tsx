import Link from "next/link";
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

interface Industry {
  label: string;
  slug: string;
  icon: LucideIcon;
}

const INDUSTRIES: Industry[] = [
  { label: "Clínicas Estéticas", slug: "clinicas-esteticas", icon: Scissors },
  { label: "Inmobiliarias", slug: "inmobiliarias", icon: Building2 },
  { label: "Automotoras", slug: "automotoras", icon: Car },
  { label: "Academias", slug: "academias", icon: GraduationCap },
  { label: "Gimnasios", slug: "gimnasios", icon: Dumbbell },
  { label: "Veterinarias", slug: "veterinarias", icon: PawPrint },
  { label: "Clínicas Dentales", slug: "clinicas-dentales", icon: Stethoscope },
  { label: "Centros Médicos", slug: "centros-medicos", icon: Hospital },
  { label: "Restaurantes", slug: "restaurantes", icon: UtensilsCrossed },
  { label: "Agencias de Viaje", slug: "agencias-de-viaje", icon: Plane },
  { label: "Tiendas", slug: "tiendas", icon: ShoppingBag },
  { label: "Corredora de Propiedades", slug: "corredora-de-propiedades", icon: KeySquare },
];

export default function Marquee() {
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <div className="pt-2 pb-6 overflow-hidden">
      <div className="mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(148,163,184,0.4)" }}>
          Usado por negocios de todo rubro
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(90deg, #020617, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(270deg, #020617, transparent)" }} />

        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {items.map((item, i) => {
            const Icon = item.icon;
            // Only link for the first set (avoid duplicate hrefs in the clone)
            const slug = item.slug;
            return (
              <Link
                key={i}
                href={`/rubros/${slug}`}
                className="flex-shrink-0 flex items-center gap-2 px-2 group transition-opacity hover:opacity-80"
                tabIndex={i >= INDUSTRIES.length ? -1 : 0}
                aria-hidden={i >= INDUSTRIES.length}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #818cf8, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <Icon size={18} style={{ color: "#a78bfa", WebkitTextFillColor: "initial" }} />
                </span>
                <span
                  className="text-lg font-semibold underline-offset-2 group-hover:underline"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #818cf8, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textDecorationColor: "#a78bfa",
                  }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
