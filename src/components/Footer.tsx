import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ background: "#04010d" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-heading font-bold text-xl mb-3">
              <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center">
                <span className="text-white text-sm font-bold">C</span>
              </div>
              Clientador
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              IA para convertir clientes más rápido. Automatiza tu atención al cliente en todos los canales.
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="font-semibold mb-4 text-white text-sm uppercase tracking-wide">Producto</div>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                ["Funcionalidades", "#funcionalidades"],
                ["Precios", "#precios"],
                ["Calculadora IA", "/noticias/calculadora-costos-ia"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold mb-4 text-white text-sm uppercase tracking-wide">Empresa</div>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre nosotros</Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-white transition-colors">Noticias</Link>
              </li>
              <li>
                <a href="https://mi.clientador.com/widget/booking/9BIrfq1qKd6NoCAObqzO" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-semibold mb-4 text-white text-sm uppercase tracking-wide">Legal</div>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/terminos" className="hover:text-white transition-colors">Términos de servicio</Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors">Política de privacidad</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Clientador. Todos los derechos reservados.</span>
          <span>Hecho con ❤️ en Chile 🇨🇱</span>
        </div>
      </div>
    </footer>
  );
}
