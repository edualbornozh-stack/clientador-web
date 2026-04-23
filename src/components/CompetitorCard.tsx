"use client";

import Link from "next/link";

interface CompetitorCardProps {
  slug: string;
  name: string;
}

export default function CompetitorCard({ slug, name }: CompetitorCardProps) {
  return (
    <Link
      href={`/alternativa/${slug}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "1.25rem",
        padding: "1.25rem 1.5rem",
        textDecoration: "none",
        display: "block",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.3rem" }}>
        Alternativa a {name}
      </div>
      <div style={{ fontSize: "0.8rem", color: "#475569" }}>
        Clientador vs {name} →
      </div>
    </Link>
  );
}
