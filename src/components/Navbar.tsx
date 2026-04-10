"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Precios", href: "/#precios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(2,6,23,0.92)" : "rgba(2,6,23,0.0)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/Logo.svg"
            alt="Clientador"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav — pill container */}
        <nav
          className="hidden md:flex items-center rounded-full px-1.5 py-1.5 gap-0.5"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            const className = "relative px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200";
            const style = {
              color: isActive ? "#ffffff" : "rgba(148,163,184,0.7)",
              background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
              border: isActive ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
              letterSpacing: "0.08em",
            };
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={className}
                style={style}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.clientador.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors px-3 py-1.5"
            style={{ color: "rgba(148,163,184,0.8)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(148,163,184,0.8)"; }}
          >
            Iniciar sesión
          </a>
          <a
            href="https://mi.clientador.com/widget/booking/9BIrfq1qKd6NoCAObqzO"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2 text-sm"
          >
            Demo en Vivo
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          style={{ color: "rgba(148,163,184,0.8)" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden px-4 py-4 flex flex-col gap-3"
          style={{ background: "#020617", borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => { setOpen(false); setActive(link.href); }}
                className="text-sm font-medium uppercase tracking-widest px-4 py-2.5 rounded-full transition-all"
                style={{
                  color: isActive ? "#ffffff" : "rgba(148,163,184,0.7)",
                  background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <hr style={{ borderColor: "rgba(255,255,255,0.07)" }} />
          <a
            href="https://app.clientador.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-center py-2.5"
            style={{ color: "rgba(148,163,184,0.7)" }}
          >
            Iniciar sesión
          </a>
          <a
            href="https://mi.clientador.com/widget/booking/9BIrfq1qKd6NoCAObqzO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold py-3 rounded-full text-center"
            style={{ background: "#ffffff", color: "#0f0a1e" }}
          >
            Demo en Vivo
          </a>
        </div>
      )}
    </header>
  );
}
