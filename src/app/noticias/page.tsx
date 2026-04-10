import type { Metadata } from "next";
import Link from "next/link";
import DepthBackground from "@/components/DepthBackground";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Noticias IA para Negocios – Clientador | Guías y Tendencias",
  description:
    "Guías prácticas, tendencias y estrategias sobre inteligencia artificial para pymes. Aprende cómo automatizar ventas y atención al cliente con IA.",
  alternates: { canonical: "https://clientador.com/noticias" },
  openGraph: {
    title: "Noticias IA para Negocios – Clientador",
    description: "Guías y tendencias sobre IA para automatizar tu pyme en Latinoamérica.",
    url: "https://clientador.com/noticias",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function NoticiasPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#020617" }}>
      <DepthBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-4xl mx-auto px-4 py-16">

          <Link
            href="/"
            className="text-sm font-medium hover:text-white transition-colors mb-10 block"
            style={{ color: "#a78bfa" }}
          >
            ← Volver al inicio
          </Link>

          <div className="mb-14">
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "#a78bfa" }}>
              Noticias
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#f1f5f9" }}>
              Tendencias e insights sobre IA para negocios
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
              Exploramos cómo la inteligencia artificial está transformando las pymes latinoamericanas. Guías prácticas, casos de uso y estrategias para automatizar tu negocio.
            </p>
          </div>

          {/* Article cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.slug}
                className="rounded-3xl p-8 md:p-10 flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(167,139,250,0.2)",
                  boxShadow: "0 0 40px rgba(167,139,250,0.06)",
                }}
              >
                <div className="mb-5">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(167,139,250,0.12)",
                      color: "#a78bfa",
                      border: "1px solid rgba(167,139,250,0.25)",
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4 flex-1" style={{ color: "#f1f5f9" }}>
                  {post.title}
                </h2>

                <p className="text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
                  {post.intro.slice(0, 180)}…
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4 text-sm" style={{ color: "#475569" }}>
                    <span>{post.date}</span>
                    <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/noticias/${post.slug}`}
                    className="btn-secondary text-sm px-5 py-2 inline-block text-center"
                  >
                    Leer artículo →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
