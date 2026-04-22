"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { RUBROS_LIST } from "@/lib/rubros-config";
import { useBookingModal } from "@/components/BookingModal";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Funcionalidades", href: "/#funcionalidades" },
];

export default function Navbar() {
  const { open: openBooking } = useBookingModal();
  const pathname = usePathname();
  const preciosLinks = pathname === "/agendapia"
    ? [{ label: "Planes", href: "/agendapia#precios" }, { label: "Costos IA", href: "/agendapia#calculadora" }]
    : [{ label: "Planes", href: "/#precios" }, { label: "Costos IA", href: "/#calculadora" }];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);
  const [rubrosOpen, setRubrosOpen] = useState(false);
  const [mobileRubrosOpen, setMobileRubrosOpen] = useState(false);
  const [preciosOpen, setPreciosOpen] = useState(false);
  const [mobilePreciosOpen, setMobilePreciosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const preciosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setRubrosOpen(false);
      }
      if (preciosRef.current && !preciosRef.current.contains(e.target as Node)) {
        setPreciosOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pillStyle = (isActive: boolean) => ({
    color: isActive ? "#ffffff" : "rgba(148,163,184,0.7)",
    background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
    border: isActive ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
    letterSpacing: "0.08em",
  });

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
          <img src="/images/Logo.svg" alt="Clientador" width={140} height={32} className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav — pill container */}
        <nav
          className="hidden md:flex items-center rounded-full px-1.5 py-1.5 gap-0.5"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className="relative px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200"
              style={pillStyle(active === link.href)}
            >
              {link.label}
            </Link>
          ))}

          {/* Precios dropdown */}
          <div className="relative" ref={preciosRef}>
            <button
              onClick={() => setPreciosOpen((v) => !v)}
              className="relative flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 cursor-pointer"
              style={pillStyle(preciosOpen)}
            >
              Precios
              <ChevronDown size={12} className="transition-transform duration-200" style={{ transform: preciosOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {preciosOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 rounded-2xl py-2 overflow-hidden"
                style={{ background: "rgba(8,12,30,0.97)", border: "1px solid rgba(167,139,250,0.2)", boxShadow: "0 20px 60px rgba(0,0,0,0.6)", backdropFilter: "blur(20px)" }}>
                {preciosLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setPreciosOpen(false)}
                    className="flex items-center px-4 py-2.5 text-xs font-medium transition-all duration-150"
                    style={{ color: "rgba(148,163,184,0.85)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; (e.currentTarget as HTMLElement).style.background = "rgba(167,139,250,0.1)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(148,163,184,0.85)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Rubros dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setRubrosOpen((v) => !v)}
              className="relative flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 cursor-pointer"
              style={pillStyle(rubrosOpen)}
            >
              Rubros
              <ChevronDown
                size={12}
                className="transition-transform duration-200"
                style={{ transform: rubrosOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {/* Dropdown panel */}
            {rubrosOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl py-2 overflow-hidden"
                style={{
                  background: "rgba(8,12,30,0.97)",
                  border: "1px solid rgba(167,139,250,0.2)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(124,58,237,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="grid grid-cols-2 gap-0.5 px-2">
                  {RUBROS_LIST.map((rubro) => {
                    const Icon = rubro.icon;
                    return (
                      <Link
                        key={rubro.slug}
                        href={`/rubros/${rubro.slug}`}
                        onClick={() => setRubrosOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 group"
                        style={{ color: "rgba(148,163,184,0.85)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#ffffff";
                          (e.currentTarget as HTMLElement).style.background = "rgba(167,139,250,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "rgba(148,163,184,0.85)";
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                        }}
                      >
                        <Icon size={13} style={{ color: "#a78bfa", flexShrink: 0 }} />
                        <span>{rubro.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
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
          <button
            onClick={openBooking}
            className="btn-primary px-5 py-2 text-sm"
          >
            Demo en Vivo
          </button>
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
          className="md:hidden px-4 py-4 flex flex-col gap-1"
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

          {/* Mobile Precios accordion */}
          <button onClick={() => setMobilePreciosOpen((v) => !v)}
            className="flex items-center justify-between px-4 py-2.5 rounded-full text-sm font-medium uppercase tracking-widest transition-all"
            style={{ color: "rgba(148,163,184,0.7)" }}>
            Precios
            <ChevronDown size={14} className="transition-transform duration-200" style={{ transform: mobilePreciosOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
          </button>
          {mobilePreciosOpen && (
            <div className="flex flex-col gap-1 px-2 pb-2">
              {preciosLinks.map((item) => (
                <Link key={item.href} href={item.href}
                  onClick={() => { setOpen(false); setMobilePreciosOpen(false); }}
                  className="flex items-center px-3 py-2 rounded-xl text-xs font-medium"
                  style={{ color: "rgba(148,163,184,0.85)", background: "rgba(255,255,255,0.04)" }}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Rubros accordion */}
          <button
            onClick={() => setMobileRubrosOpen((v) => !v)}
            className="flex items-center justify-between px-4 py-2.5 rounded-full text-sm font-medium uppercase tracking-widest transition-all"
            style={{ color: "rgba(148,163,184,0.7)" }}
          >
            Rubros
            <ChevronDown
              size={14}
              className="transition-transform duration-200"
              style={{ transform: mobileRubrosOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
          {mobileRubrosOpen && (
            <div className="grid grid-cols-2 gap-1 px-2 pb-2">
              {RUBROS_LIST.map((rubro) => {
                const Icon = rubro.icon;
                return (
                  <Link
                    key={rubro.slug}
                    href={`/rubros/${rubro.slug}`}
                    onClick={() => { setOpen(false); setMobileRubrosOpen(false); }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
                    style={{
                      color: "rgba(148,163,184,0.85)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <Icon size={12} style={{ color: "#a78bfa", flexShrink: 0 }} />
                    <span>{rubro.label}</span>
                  </Link>
                );
              })}
            </div>
          )}

          <hr className="my-2" style={{ borderColor: "rgba(255,255,255,0.07)" }} />
          <a
            href="https://app.clientador.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-center py-2.5"
            style={{ color: "rgba(148,163,184,0.7)" }}
          >
            Iniciar sesión
          </a>
          <button
            onClick={openBooking}
            className="text-sm font-semibold py-3 rounded-full text-center"
            style={{ background: "#ffffff", color: "#0f0a1e" }}
          >
            Demo en Vivo
          </button>
        </div>
      )}
    </header>
  );
}
