import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl } from '../data/content';
import { FaIcon } from './common/FaIcon';

export const FloatingActions: React.FC = () => {
  const quickWhatsAppUrl = createWhatsAppUrl('Merhaba, Muğla Ortaköy için su siparişi vermek istiyorum.');

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col gap-3 items-end p-2 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl shadow-sky-950/10" id="floating-action-buttons">
      {/* Phone Quick Call */}
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600/95 hover:bg-blue-600 backdrop-blur-md text-white border border-white/40 shadow-lg shadow-blue-600/25 transition-all transform hover:scale-105 group"
        id="floating-call-btn"
        aria-label="Telefonla Ara"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <FaIcon name="fa-solid fa-phone-volume" className="text-white text-sm" animation="shake" />
        </div>
        <span className="text-xs font-bold">
          <span className="sm:hidden">Telefon Sipariş</span>
          <span className="hidden sm:inline">{PHONE_NUMBER}</span>
        </span>
      </a>

      {/* WhatsApp Quick Chat */}
      <a
        href={quickWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600/95 hover:bg-emerald-600 backdrop-blur-md text-white border border-white/40 shadow-xl shadow-emerald-600/30 transition-all transform hover:scale-105 group"
        id="floating-whatsapp-btn"
        aria-label="WhatsApp ile Sipariş Ver"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <FaIcon name="fa-brands fa-whatsapp" className="text-white text-lg group-hover:scale-115 transition-transform" />
        </div>
        <span className="text-sm font-bold tracking-wide">WhatsApp Sipariş</span>
      </a>
    </div>
  );
};
