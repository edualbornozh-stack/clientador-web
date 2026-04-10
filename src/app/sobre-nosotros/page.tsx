import type { Metadata } from "next";
import Link from "next/link";
import DepthBackground from "@/components/DepthBackground";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Sobre Nosotros – Clientador | IA para Pymes en Latinoamérica",
  description: "Somos un equipo de Santiago, Chile, con la misión de democratizar el acceso a la IA para las pymes de Latinoamérica. Conoce nuestra historia, misión y visión.",
  alternates: { canonical: "https://clientador.com/sobre-nosotros" },
  openGraph: {
    title: "Sobre Nosotros – Clientador",
    description: "Democratizando el acceso a la IA para pymes en Chile, México, Colombia y Argentina.",
    url: "https://clientador.com/sobre-nosotros",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function SobreNosotrosPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#020617" }}>
      <DepthBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Back link */}
          <Link
            href="/"
            className="text-sm font-medium hover:text-white transition-colors mb-10 block"
            style={{ color: "#a78bfa" }}
          >
            ← Inicio
          </Link>

          {/* Hero */}
          <div className="mb-16">
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: "#a78bfa" }}
            >
              Sobre nosotros
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: "#f1f5f9" }}
            >
              Democratizando el acceso a la IA para las Pymes
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#94a3b8" }}>
              Creemos que la inteligencia artificial no debería ser exclusiva de las grandes empresas. Clientador nació para que cualquier pyme latinoamericana pueda competir con las mejores herramientas del mundo, sin necesidad de un equipo de ingeniería ni grandes presupuestos.
            </p>
          </div>

          {/* Mission & Vision cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {/* Mission */}
            <div
              className="rounded-3xl p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(167,139,250,0.2)",
                boxShadow: "0 0 40px rgba(167,139,250,0.05)",
              }}
            >
              <div className="text-2xl mb-4" style={{ color: "#a78bfa" }}>✦</div>
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "#f1f5f9" }}
              >
                Nuestra Misión
              </h2>
              <p className="leading-relaxed" style={{ color: "#94a3b8" }}>
                Democratizar el acceso a la inteligencia artificial para las pequeñas y medianas empresas de Latinoamérica, dotándolas de herramientas de automatización que antes solo estaban al alcance de corporaciones con millones en tecnología. Queremos que una ferretería, una clínica dental o una agencia inmobiliaria puedan competir de igual a igual con las grandes empresas de su sector.
              </p>
            </div>

            {/* Vision */}
            <div
              className="rounded-3xl p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(167,139,250,0.2)",
                boxShadow: "0 0 40px rgba(167,139,250,0.05)",
              }}
            >
              <div className="text-2xl mb-4" style={{ color: "#a78bfa" }}>◈</div>
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "#f1f5f9" }}
              >
                Nuestra Visión
              </h2>
              <p className="leading-relaxed" style={{ color: "#94a3b8" }}>
                Ser la plataforma de IA de referencia para pymes en Latinoamérica antes de 2027. Una plataforma donde automatizar la atención al cliente, calificar leads y gestionar ventas sea tan fácil como enviar un mensaje de WhatsApp, y donde miles de negocios hayan multiplicado su capacidad sin multiplicar su equipo.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-14">
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: "#f1f5f9" }}
            >
              Nuestros valores
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Innovación", desc: "Empujamos los límites de lo posible con IA" },
                { label: "Simplicidad", desc: "La tecnología más poderosa debe ser fácil de usar" },
                { label: "Impacto", desc: "Medimos el éxito por el crecimiento de nuestros clientes" },
              ].map((value) => (
                <div
                  key={value.label}
                  className="rounded-2xl px-6 py-4"
                  style={{
                    background: "rgba(167,139,250,0.08)",
                    border: "1px solid rgba(167,139,250,0.2)",
                  }}
                >
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#a78bfa" }}
                  >
                    {value.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team note */}
          <div
            className="mb-14 rounded-2xl p-7"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p className="leading-relaxed" style={{ color: "#94a3b8" }}>
              Somos un equipo de Santiago, Chile, apasionados por la tecnología y convencidos de que Latinoamérica tiene el talento y el potencial para liderar la adopción de IA en negocios. Venimos de experiencias en startups, consultoría tecnológica y desarrollo de software, y pusimos todo ese conocimiento al servicio de un objetivo: que las pymes de la región tengan acceso a las mismas herramientas que usan las empresas más innovadoras del mundo.
            </p>
          </div>

          {/* CTA block */}
          <div
            className="rounded-3xl p-10 md:p-12 text-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(167,139,250,0.2)",
              boxShadow: "0 0 60px rgba(167,139,250,0.07)",
            }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #f1f5f9 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: "#94a3b8" }}>
              Agenda una demo gratuita y te mostramos en vivo cómo Clientador puede automatizar tu atención al cliente y multiplicar tus ventas desde esta semana.
            </p>
            <BookingButton className="btn-primary px-10 py-4 inline-block text-sm">
              AGENDAR DEMO GRATUITA
            </BookingButton>
          </div>
        </div>
      </div>
    </div>
  );
}
