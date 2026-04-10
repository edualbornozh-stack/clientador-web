import type { Metadata } from "next";
import Link from "next/link";
import DepthBackground from "@/components/DepthBackground";

export const metadata: Metadata = {
  title: "Política de Privacidad – Clientador",
  description: "Política de privacidad y tratamiento de datos personales de Clientador.",
};

export default function PrivacidadPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#020617" }}>
      <DepthBackground />
      <div className="max-w-3xl mx-auto px-4 py-16" style={{ position: "relative", zIndex: 1 }}>
        <Link href="/" className="text-sm font-medium hover:text-white transition-colors mb-8 block" style={{ color: "#a78bfa" }}>
          ← Volver al inicio
        </Link>
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#f1f5f9" }}>Política de Privacidad</h1>
        <p className="text-sm mb-10" style={{ color: "#475569" }}>Última actualización: abril de 2025</p>

        <div className="space-y-8" style={{ color: "#94a3b8" }}>
          {[
            {
              title: "Identificación del responsable",
              content:
                "Clientador es un producto desarrollado y comercializado por MercadoProveedor SpA, RUT 77.998.346-3, con domicilio en La Capitanía 80, Oficina 108, Las Condes, Chile. El correo de contacto oficial es hola@clientador.com. Esta Política es aplicable a todos los países donde Clientador ofrece servicios, incluyendo Chile, México, Colombia y Argentina.",
            },
            {
              title: "Base legal y principios para el tratamiento de datos",
              content:
                "Clientador trata los datos personales conforme a las siguientes bases legales, según corresponda: consentimiento del Usuario, ejecución de un contrato para la prestación del Servicio, cumplimiento de obligaciones legales y el interés legítimo de Clientador para operar, mejorar y proteger la plataforma. El tratamiento de datos se rige por los principios de legalidad, finalidad, proporcionalidad, transparencia, calidad de los datos, seguridad y responsabilidad.",
            },
            {
              title: "Datos personales que recopilamos",
              content:
                "Recopilamos datos que el Usuario proporciona directamente, tales como nombre completo, correo electrónico, número de teléfono, información de perfil, comunicaciones con soporte y datos de facturación. El suministro de nombre, correo y teléfono es obligatorio para la correcta prestación del Servicio. Asimismo, recopilamos información de forma automática, incluyendo datos técnicos del dispositivo, registros de acceso, direcciones IP, comportamiento de uso dentro de la plataforma y ubicación geográfica aproximada derivada de la IP. Clientador puede utilizar cookies y tecnologías similares para mejorar la experiencia del Usuario y analizar el uso del Servicio.",
            },
            {
              title: "Finalidades del tratamiento de datos",
              content:
                "Los datos personales se utilizan para prestar y operar la plataforma Clientador, administrar cuentas de Usuario, brindar soporte, enviar comunicaciones relacionadas con el Servicio, mejorar funcionalidades, analizar métricas de uso, cumplir obligaciones legales y proteger la seguridad del sistema. Clientador no garantiza resultados comerciales específicos derivados del uso de tecnologías de inteligencia artificial.",
            },
            {
              title: "Integraciones con terceros y compartición de datos",
              content:
                "Clientador puede integrarse con plataformas de terceros como servicios de mensajería, redes sociales, autenticación, almacenamiento y procesamiento de pagos. Los datos personales pueden ser compartidos con proveedores tecnológicos y subprocesadores únicamente cuando sea necesario para la prestación del Servicio y bajo acuerdos contractuales adecuados.",
            },
            {
              title: "Seguridad de la información",
              content:
                "Clientador implementa medidas razonables de seguridad técnicas, administrativas y organizacionales para proteger los datos personales, incluyendo cifrado, controles de acceso, capacitación interna y procedimientos de respuesta ante incidentes. Sin perjuicio de ello, el Usuario reconoce que ningún sistema es completamente infalible.",
            },
            {
              title: "Conservación y eliminación de datos",
              content:
                "Los datos personales se conservan únicamente durante el tiempo necesario para prestar el Servicio, cumplir obligaciones legales y resolver disputas. A solicitud del Usuario, los datos podrán ser eliminados dentro de un plazo razonable. Los respaldos técnicos pueden conservarse temporalmente antes de su eliminación definitiva.",
            },
            {
              title: "Derechos de los Usuarios",
              content:
                "Los Usuarios pueden ejercer sus derechos de acceso, rectificación, cancelación o eliminación y oposición al tratamiento de sus datos personales, de acuerdo con la legislación aplicable en su país. Para ejercer estos derechos, el Usuario debe enviar una solicitud a hola@clientador.com, indicando en el asunto \"Solicitud de Privacidad – [País]\".",
            },
            {
              title: "Transferencias internacionales de datos",
              content:
                "Los datos personales pueden ser almacenados o procesados en servidores ubicados fuera del país del Usuario. Clientador adopta medidas razonables para asegurar un nivel adecuado de protección conforme a la normativa aplicable.",
            },
            {
              title: "Cumplimiento normativo regional",
              content:
                "Clientador cumple con las leyes de protección de datos vigentes en Chile, México, Colombia y Argentina. Las normativas europeas de protección de datos (GDPR) no resultan aplicables, salvo que una ley local disponga lo contrario.",
            },
            {
              title: "Notificación de incidentes de seguridad",
              content:
                "En caso de un incidente de seguridad que comprometa datos personales, Clientador evaluará su alcance, adoptará medidas correctivas y notificará a los Usuarios y autoridades cuando así lo exija la ley.",
            },
            {
              title: "Privacidad de menores",
              content:
                "El Servicio no está dirigido a menores de 13 años. En los países donde la normativa lo exija, se requerirá autorización de padres o representantes legales para el tratamiento de datos de menores de edad.",
            },
            {
              title: "Legislación aplicable",
              content:
                "Esta Política de Privacidad se rige por las leyes de la República de Chile, sin perjuicio del cumplimiento de normas locales obligatorias en otros países donde Clientador opere.",
            },
            {
              title: "Contacto",
              content:
                "Para consultas relacionadas con esta Política de Privacidad, puede escribirnos a hola@clientador.com.",
            },
          ].map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold mb-2" style={{ color: "#f1f5f9" }}>{section.title}</h2>
              <p className="leading-relaxed text-sm">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-sm" style={{ color: "#475569" }}>
            ¿Tienes preguntas sobre privacidad?{" "}
            <a href="mailto:hola@clientador.com" className="hover:text-white transition-colors" style={{ color: "#a78bfa" }}>
              hola@clientador.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
