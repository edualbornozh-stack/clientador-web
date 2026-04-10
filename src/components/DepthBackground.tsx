"use client";

/**
 * DepthBackground — fixed atmospheric layer.
 * Blobs sized in viewport units so they always reach the center,
 * visible in every section as content scrolls over the fixed layer.
 */
export default function DepthBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        background: "#020617",
      }}
    >
      {/* ── Top-left: teal/cyan, bleeds to center ── */}
      <div style={{
        position: "absolute",
        width: "110vw", height: "110vw",
        borderRadius: "50%",
        top: "-30vw", left: "-30vw",
        background: "radial-gradient(circle at center, rgba(20,184,166,0.18) 0%, rgba(6,182,212,0.09) 45%, transparent 70%)",
        filter: "blur(60px)",
        animation: "bd1 18s ease-in-out infinite",
      }} />

      {/* ── Top-right: indigo/purple, bleeds to center ── */}
      <div style={{
        position: "absolute",
        width: "110vw", height: "110vw",
        borderRadius: "50%",
        top: "-30vw", right: "-30vw",
        background: "radial-gradient(circle at center, rgba(99,102,241,0.18) 0%, rgba(109,40,217,0.10) 45%, transparent 70%)",
        filter: "blur(60px)",
        animation: "bd2 22s ease-in-out 4s infinite",
      }} />

      {/* ── Bottom-left: violet, bleeds to center ── */}
      <div style={{
        position: "absolute",
        width: "100vw", height: "100vw",
        borderRadius: "50%",
        bottom: "-30vw", left: "-25vw",
        background: "radial-gradient(circle at center, rgba(139,92,246,0.14) 0%, rgba(168,85,247,0.07) 50%, transparent 70%)",
        filter: "blur(70px)",
        animation: "bd1 26s ease-in-out 8s infinite reverse",
      }} />

      {/* ── Bottom-right: blue/indigo ── */}
      <div style={{
        position: "absolute",
        width: "90vw", height: "90vw",
        borderRadius: "50%",
        bottom: "-25vw", right: "-20vw",
        background: "radial-gradient(circle at center, rgba(56,189,248,0.12) 0%, rgba(99,102,241,0.07) 50%, transparent 70%)",
        filter: "blur(70px)",
        animation: "bd2 20s ease-in-out 12s infinite reverse",
      }} />

      {/* ── Noise grain ── */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.022,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px",
      }} />

      <style>{`
        @keyframes bd1 {
          0%,100% { transform: scale(1)    translate(0px,0px);    }
          40%      { transform: scale(1.07) translate(15px,-20px); }
          70%      { transform: scale(0.95) translate(-10px,15px); }
        }
        @keyframes bd2 {
          0%,100% { transform: scale(1)    translate(0px,0px);   }
          35%      { transform: scale(1.06) translate(-18px,12px); }
          70%      { transform: scale(0.97) translate(12px,-8px); }
        }
      `}</style>
    </div>
  );
}
