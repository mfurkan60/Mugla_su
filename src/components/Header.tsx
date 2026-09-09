import React, { useState } from "react";
import { PageId } from "../types";
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  PHONE_TEL,
  createWhatsAppUrl,
  WORKING_HOURS,
} from "../data/content";
import { FaIcon } from "./common/FaIcon";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: "hizmetlerimiz", label: "Hizmetlerimiz" },
    { id: "evlere-servis", label: "Evlere Su Servisi" },
    { id: "iletisim", label: "İletişim" },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickWhatsAppUrl = createWhatsAppUrl(
    "Merhaba, Muğla Ortaköy için su siparişi vermek istiyorum.",
  );

  return (
    <header
      className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl shadow-xs border-b border-white/60"
      id="site-header"
    >
      {/* Top micro bar for quick trust & hours */}
      <div className="bg-blue-950/90 backdrop-blur-md text-white text-xs py-1.5 px-4 hidden sm:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <FaIcon
                name="fa-solid fa-location-dot"
                className="text-sky-300 text-xs"
              />
              <span>Muğla</span>
            </span>
            <span className="flex items-center gap-1.5">
              <FaIcon
                name="fa-solid fa-clock"
                className="text-sky-300 text-xs"
              />
              <span>{WORKING_HOURS}</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-bold hover:text-sky-300 transition-colors flex items-center gap-1.5 group"
              id="top-bar-phone-link"
            >
              <FaIcon
                name="fa-solid fa-phone-volume"
                className="text-sky-300 text-xs group-hover:scale-110 transition-transform"
              />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name */}
          <button
            onClick={() => handleNavClick("anasayfa")}
            className="flex flex-col text-left group cursor-pointer"
            id="brand-header-link"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:from-blue-700 group-hover:to-sky-600 transition-all">
                <FaIcon
                  name="fa-solid fa-droplet"
                  className="text-white text-lg"
                  animation="beat"
                />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                {COMPANY_NAME}
              </span>
            </div>
            <div className="flex items-center gap-2 pl-12 -mt-1 hidden sm:flex">
              <span className="text-[11px] text-blue-700 font-semibold tracking-wide uppercase">
                Muğla Ortaköy
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1 p-1 bg-white/50 backdrop-blur-md rounded-2xl border border-white/70 shadow-xs"
            aria-label="Ana Menü"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-white text-blue-700 font-bold shadow-xs border border-white/80"
                      : "text-slate-700 hover:text-blue-700 hover:bg-white/40"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs (Phone & WhatsApp) */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <a
              href={`tel:${PHONE_TEL}`}
              id="header-cta-phone"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-white/80 text-blue-950 bg-white/60 backdrop-blur-md hover:bg-white/80 font-bold text-sm shadow-xs transition-all group"
            >
              <FaIcon
                name="fa-solid fa-phone-volume"
                className="text-blue-600 text-sm group-hover:scale-110 transition-transform"
              />
              <span>{PHONE_NUMBER}</span>
            </a>
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-whatsapp"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all whitespace-nowrap group"
            >
              <FaIcon
                name="fa-brands fa-whatsapp"
                className="text-base group-hover:scale-110 transition-transform"
              />
              <span>WhatsApp Sipariş</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${PHONE_TEL}`}
              className="p-2.5 text-blue-700 bg-white/60 border border-white/80 backdrop-blur-md rounded-xl sm:hidden flex items-center justify-center"
              aria-label="Telefonla Ara"
              id="mobile-quick-call"
            >
              <FaIcon name="fa-solid fa-phone" className="text-sm" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-blue-700 bg-white/50 border border-white/70 backdrop-blur-md transition-colors flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {mobileMenuOpen ? (
                <FaIcon name="fa-solid fa-xmark" className="text-lg" />
              ) : (
                <FaIcon name="fa-solid fa-bars" className="text-lg" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/60 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4 shadow-xl animate-fadeIn">
          {/* Standard Navigation */}
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20"
                      : "text-slate-800 hover:bg-white/60 hover:text-blue-700"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile CTAs */}
          <div className="pt-3 border-t border-slate-200/80 space-y-2">
            <a
              href={`tel:${PHONE_TEL}`}
              id="mobile-drawer-phone"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 text-blue-900 font-bold bg-white"
            >
              <FaIcon
                name="fa-solid fa-phone-volume"
                className="text-blue-600 text-base"
              />
              <span>Telefonla Ara: {PHONE_NUMBER}</span>
            </a>
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-drawer-whatsapp"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/20"
            >
              <FaIcon name="fa-brands fa-whatsapp" className="text-lg" />
              <span>WhatsApp ile Hızlı Sipariş</span>
            </a>
            <div className="text-center text-xs text-slate-600 pt-1 flex items-center justify-center gap-1.5">
              <FaIcon
                name="fa-solid fa-clock"
                className="text-blue-500 text-xs"
              />
              <span>Çalışma Saatleri: {WORKING_HOURS}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
