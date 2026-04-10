import type { Metadata } from "next";
import Link from "next/link";
import DepthBackground from "@/components/DepthBackground";

export const metadata: Metadata = {
  title: "Términos de Servicio – Clientador",
  description: "Términos y condiciones de uso de la plataforma Clientador.",
};

export default function TerminosPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#020617" }}>
      <DepthBackground />
      <div className="max-w-3xl mx-auto px-4 py-16" style={{ position: "relative", zIndex: 1 }}>
        <Link href="/" className="text-sm font-medium hover:text-white transition-colors mb-8 block" style={{ color: "#a78bfa" }}>
          ← Volver al inicio
        </Link>
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#f1f5f9" }}>Términos de Servicio</h1>
        <p className="text-sm mb-10" style={{ color: "#475569" }}>Última actualización: abril de 2025</p>

        <div className="space-y-8 text-sm" style={{ color: "#94a3b8" }}>
          <p className="leading-relaxed">
            Estos Términos y Condiciones del Servicio (los &quot;Términos&quot;) constituyen un acuerdo legal entre Clientador y usted, o la persona jurídica que representa (el &quot;Cliente&quot;). Al acceder, registrarse o utilizar los servicios de Clientador (el &quot;Servicio&quot;), usted acepta expresamente estos Términos. Si no está de acuerdo con ellos, no debe utilizar el Servicio.
          </p>
          <p className="leading-relaxed">
            <strong style={{ color: "#cbd5e1" }}>Razón Social:</strong> MercadoProveedor SpA · <strong style={{ color: "#cbd5e1" }}>RUT:</strong> 77.998.346-3 · <strong style={{ color: "#cbd5e1" }}>Dirección:</strong> La Capitanía 80, Oficina 108, Las Condes, Chile · <strong style={{ color: "#cbd5e1" }}>Correo:</strong> hola@clientador.com
          </p>
          {[
            {
              title: "1. Aceptación y modificaciones de los Términos",
              content:
                "El acceso y uso del Servicio implica la aceptación plena y sin reservas de estos Términos. Clientador se reserva el derecho de modificar, actualizar o reemplazar estos Términos en cualquier momento. Las modificaciones entrarán en vigencia desde su publicación en el sitio web o plataforma. El uso continuo del Servicio después de dichos cambios constituirá aceptación de los nuevos Términos.",
            },
            {
              title: "2. Cuentas de usuario y privacidad",
              content:
                "Para utilizar el Servicio, el Cliente debe crear una cuenta proporcionando información veraz, completa y actualizada. El Cliente es responsable de mantener la confidencialidad de sus credenciales y de todas las actividades realizadas desde su cuenta. Clientador no será responsable por accesos no autorizados derivados de negligencia del Cliente. El tratamiento de datos personales se rige por la Política de Privacidad vigente.",
            },
            {
              title: "3. Propiedad intelectual y contenido del Cliente",
              content:
                "El Servicio, incluyendo su software, funcionalidades, diseño, textos, marcas y tecnología, es propiedad exclusiva de MercadoProveedor SpA o de sus licenciantes. El Cliente conserva la titularidad del contenido que cargue o genere en la plataforma. Sin embargo, al utilizar el Servicio, otorga a Clientador una licencia no exclusiva, mundial y libre de regalías para usar dicho contenido únicamente con el fin de prestar el Servicio, mejorar la plataforma y operar los sistemas de IA asociados.",
            },
            {
              title: "4. Usos prohibidos",
              content:
                "Queda expresamente prohibido utilizar el Servicio para actividades ilegales, fraudulentas o engañosas; enviar spam o mensajes masivos no autorizados; suplantar la identidad de Clientador o terceros; infringir derechos de propiedad intelectual o privacidad; actividades de odio, terrorismo o delitos; y usos con fines políticos sin dejar explícito que Clientador no tiene relación ni responsabilidad alguna. Clientador se reserva el derecho de suspender o cancelar cuentas que infrinjan estas disposiciones.",
            },
            {
              title: "5. Servicios de terceros y tecnologías de IA",
              content:
                "Clientador puede integrarse con servicios de terceros como WhatsApp, Instagram, Facebook, TikTok u otros, los cuales están sujetos a sus propios términos y políticas. El Cliente es responsable de cumplir con dichas condiciones externas. Clientador utiliza tecnologías de IA de distintos proveedores (incluyendo, pero no limitándose a, OpenAI, Anthropic, Google u otros) y se reserva el derecho de modificar o sustituir proveedores o modelos de IA cuando sea necesario. Clientador no garantiza resultados comerciales específicos, exactitud absoluta de respuestas ni ausencia total de errores propios de sistemas de IA.",
            },
            {
              title: "6. Protección de datos y confidencialidad",
              content:
                "Clientador trata la información del Cliente como confidencial y adopta medidas razonables para protegerla. El Cliente reconoce que ningún sistema es completamente infalible y que Clientador no puede garantizar seguridad absoluta, especialmente respecto de servicios de terceros. El Cliente autoriza expresamente el uso de subprocesadores externos cuando sea necesario para la prestación del Servicio.",
            },
            {
              title: "7. Precios y pagos",
              content:
                "Clientador se reserva el derecho de modificar precios, planes o condiciones comerciales. Cualquier cambio será informado con antelación razonable a través de los canales oficiales. Los programas de afiliados o referidos podrán ser suspendidos o cancelados en caso de uso fraudulento o abusivo.",
            },
            {
              title: "8. Condiciones de garantía",
              content:
                "Clientador puede ofrecer garantías limitadas sujetas al cumplimiento de condiciones específicas, tales como: completar correctamente la información solicitada para la implementación, participar en procesos de onboarding y capacitación, y entregar información mínima necesaria para la puesta en marcha. El incumplimiento de estas condiciones podrá dejar sin efecto la garantía. La garantía no cubre costos por uso adicional fuera del plan contratado ni resultados comerciales.",
            },
            {
              title: "9. Terminación y cambios en el Servicio",
              content:
                "Clientador podrá suspender o cancelar el acceso al Servicio, con o sin previo aviso, en caso de incumplimiento de estos Términos o por razones operativas, técnicas o legales. Clientador se reserva el derecho de modificar, interrumpir o discontinuar total o parcialmente el Servicio sin responsabilidad por eventuales perjuicios derivados.",
            },
            {
              title: "10. Limitación de responsabilidad y exención de garantías",
              content:
                "El Servicio se proporciona \"tal cual\" y \"según disponibilidad\". Clientador no garantiza que el Servicio sea ininterrumpido, libre de errores o adecuado para un propósito específico. En ningún caso MercadoProveedor SpA, Clientador ni sus colaboradores serán responsables por daños indirectos, incidentales, consecuenciales, pérdida de datos, lucro cesante o pérdida de oportunidades comerciales. El uso del Servicio es bajo exclusiva responsabilidad del Cliente.",
            },
            {
              title: "11. Ley aplicable y resolución de controversias",
              content:
                "Estos Términos se rigen por las leyes de la República de Chile. Cualquier controversia será sometida a arbitraje de derecho ante el Centro de Arbitraje y Mediación (CAM) de la Cámara de Comercio de Santiago, con sede en Santiago de Chile.",
            },
            {
              title: "12. Indemnización y divisibilidad",
              content:
                "El Cliente se obliga a indemnizar y mantener indemne a Clientador y MercadoProveedor SpA frente a cualquier reclamo derivado del uso indebido del Servicio o del incumplimiento de estos Términos. Si alguna cláusula fuese declarada inválida, ello no afectará la validez del resto del documento.",
            },
            {
              title: "13. Acuerdo completo",
              content:
                "Estos Términos constituyen el acuerdo completo entre el Cliente y Clientador, reemplazando cualquier acuerdo previo, verbal o escrito.",
            },
            {
              title: "14. Contacto",
              content:
                "Para consultas relacionadas con estos Términos, puede escribirnos a hola@clientador.com.",
            },
          ].map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold mb-2" style={{ color: "#f1f5f9" }}>{section.title}</h2>
              <p className="leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-sm" style={{ color: "#475569" }}>
            ¿Tienes preguntas sobre estos términos?{" "}
            <a href="mailto:hola@clientador.com" className="hover:text-white transition-colors" style={{ color: "#a78bfa" }}>
              hola@clientador.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
