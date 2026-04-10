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

const INDUSTRIES = [
  { label: "Clínicas Estéticas", icon: Scissors },
  { label: "Inmobiliarias", icon: Building2 },
  { label: "Automotoras", icon: Car },
  { label: "Academias", icon: GraduationCap },
  { label: "Gimnasios", icon: Dumbbell },
  { label: "Veterinarias", icon: PawPrint },
  { label: "Clínicas Dentales", icon: Stethoscope },
  { label: "Centros Médicos", icon: Hospital },
  { label: "Restaurantes", icon: UtensilsCrossed },
  { label: "Agencias de Viaje", icon: Plane },
  { label: "Tiendas", icon: ShoppingBag },
  { label: "Corredora de Propiedades", icon: KeySquare },
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
            return (
              <span
                key={i}
                className="flex-shrink-0 flex items-center gap-2 px-2"
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
                  className="text-lg font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #818cf8, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.label}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
