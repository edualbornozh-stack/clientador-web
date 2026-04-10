export default function FooterCTA() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest" style={{ color: "#a78bfa" }}>
          Empieza hoy
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#f1f5f9" }}>
          Aumenta tus clientes con la IA
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#64748b" }}>
          Únete a cientos de negocios que ya automatizan su atención al cliente con Clientador. Comienza hoy, sin tarjeta de crédito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://mi.clientador.com/widget/booking/9BIrfq1qKd6NoCAObqzO"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm font-bold"
          >
            Comenzar ahora
          </a>
        </div>
        <p className="text-sm mt-6" style={{ color: "#475569" }}>
          Sin contratos · Soporte en español · Activo en 24h
        </p>
      </div>
    </section>
  );
}
