import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DepthBackground from "@/components/DepthBackground";
import { BLOG_POSTS } from "@/lib/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado – Clientador" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://clientador.com/noticias/${slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://clientador.com/noticias/${slug}`,
      type: "article",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: ["/images/og-image.png"],
    },
  };
}

const cardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.07)",
};

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#020617" }}>
      <DepthBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-3xl mx-auto px-4 py-16">

          <Link
            href="/noticias"
            className="text-sm font-medium hover:text-white transition-colors mb-10 block"
            style={{ color: "#a78bfa" }}
          >
            ← Volver a Noticias
          </Link>

          {/* Header */}
          <div className="mb-12">
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
            <h1
              className="text-3xl md:text-4xl font-bold leading-snug mb-6"
              style={{ color: "#f1f5f9" }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm mb-8" style={{ color: "#475569" }}>
              <span>{post.date}</span>
              <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
              {post.intro}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10" style={{ color: "#94a3b8" }}>
            {post.sections.map((section, i) => (
              <section key={i}>
                <h2
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: "#f1f5f9" }}
                >
                  {section.title}
                </h2>

                {/* Text section */}
                {section.type === "text" && section.content && (
                  <div className="space-y-4">
                    {section.content.split("\n\n").map((para, j) => (
                      <p key={j} className="leading-relaxed">{para}</p>
                    ))}
                  </div>
                )}

                {/* Cards (benefits) */}
                {section.type === "cards" && section.items && (
                  <div className="space-y-6">
                    {section.items.map((item, j) => (
                      <div key={j} className="rounded-2xl p-6" style={cardStyle}>
                        <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#a78bfa" }}>
                          {item.label}
                        </p>
                        <p className="leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Steps */}
                {section.type === "steps" && section.items && (
                  <div className="space-y-5">
                    {section.items.map((item, j) => (
                      <div key={j}>
                        <p className="font-semibold mb-2" style={{ color: "#f1f5f9" }}>
                          {item.label}
                        </p>
                        <p className="leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                {section.type === "bullets" && section.bullets && (
                  <ul className="space-y-3 list-none pl-0">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span style={{ color: b.negative ? "#a78bfa" : "#10b981", flexShrink: 0, marginTop: "2px" }}>
                          {b.negative ? "✕" : "✓"}
                        </span>
                        <span className="leading-relaxed">{b.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-14 rounded-3xl p-8 md:p-10 text-center"
            style={{
              background: "rgba(167,139,250,0.06)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(167,139,250,0.2)",
              boxShadow: "0 0 40px rgba(167,139,250,0.06)",
            }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>
              Próximo paso
            </p>
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#f1f5f9" }}>
              {post.ctaTitle}
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: "#94a3b8" }}>
              {post.ctaDescription}
            </p>
            <a
              href="https://mi.clientador.com/widget/booking/9BIrfq1qKd6NoCAObqzO"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 inline-block"
            >
              Agenda una demo gratuita
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
