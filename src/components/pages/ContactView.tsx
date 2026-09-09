import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, LANDLINE_NUMBER, ADDRESS_TEXT, createWhatsAppUrl } from '../../data/content';
import { FaIcon } from '../common/FaIcon';

export const ContactView: React.FC = () => {
  const quickWhatsAppUrl = createWhatsAppUrl('Merhaba, Muğla Su siparişi ve bilgi almak istiyorum.');

  return (
    <div className="space-y-12 py-8 sm:py-12" id="contact-page-container">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs inline-block">
          İletişim & Harita
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Bize Ulaşın
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          Muğla Ortaköy su siparişleriniz için telefon veya WhatsApp üzerinden haftanın 7 günü bize hızla ulaşabilirsiniz.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Telefon İletişimi */}
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/70 p-6 sm:p-8 shadow-lg shadow-sky-950/5 flex flex-col justify-between hover:bg-white/70 hover:border-white/90 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-blue-700 flex items-center justify-center mb-5 shadow-xs">
                <FaIcon name="fa-solid fa-phone" className="text-xl text-blue-600" />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Hızlı Arama</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1 mb-2">Telefon Numarası</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Siparişinizi doğrudan sesli aramayla vermek için servis hattımızı arayabilirsiniz.
              </p>

              <div className="space-y-1.5 py-3 border-y border-white/60">
                <div className="text-xs text-slate-500">Mobil / Sipariş Hattı:</div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-lg sm:text-xl font-extrabold text-blue-700 hover:text-blue-900 transition-colors block"
                  id="contact-phone-link"
                >
                  {PHONE_NUMBER}
                </a>
                <div className="text-xs text-slate-500 pt-1">Sabit Hat: <strong>{LANDLINE_NUMBER}</strong></div>
              </div>
            </div>

            <div className="pt-5">
              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/25 border border-white/20 transition-all group"
                id="contact-call-action"
              >
                <FaIcon name="fa-solid fa-phone-volume" className="text-sm group-hover:scale-110 transition-transform" />
                <span>Hemen Telefonla Ara</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp İletişimi */}
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/70 p-6 sm:p-8 shadow-lg shadow-sky-950/5 flex flex-col justify-between hover:bg-white/70 hover:border-white/90 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-emerald-700 flex items-center justify-center mb-5 shadow-xs">
                <FaIcon name="fa-brands fa-whatsapp" className="text-2xl text-emerald-600" />
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Anlık Mesaj</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1 mb-2">WhatsApp İletişim</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Adresinizi, site adınızı ve sipariş etmek istediğiniz damacana adedini WhatsApp’tan yazın.
              </p>

              <div className="space-y-1.5 py-3 border-y border-white/60">
                <div className="text-xs text-slate-500">WhatsApp Numarası:</div>
                <div className="text-lg sm:text-xl font-extrabold text-emerald-700">
                  {PHONE_NUMBER}
                </div>
                <div className="text-xs text-slate-500 pt-1">Konum atarak kolayca sipariş verebilirsiniz.</div>
              </div>
            </div>

            <div className="pt-5">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 border border-white/20 transition-all group"
                id="contact-whatsapp-action"
              >
                <FaIcon name="fa-brands fa-whatsapp" className="text-base group-hover:scale-110 transition-transform" />
                <span>WhatsApp'tan Mesaj Gönder</span>
              </a>
            </div>
          </div>

          {/* Card 3: Çalışma Saatleri ve Adres */}
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/70 p-6 sm:p-8 shadow-lg shadow-sky-950/5 flex flex-col justify-between hover:bg-white/70 hover:border-white/90 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-sky-700 flex items-center justify-center mb-5 shadow-xs">
                <FaIcon name="fa-regular fa-clock" className="text-xl text-sky-600" />
              </div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Saatler & Konum</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1 mb-2">Çalışma Saatlerimiz</h2>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 py-3 border-y border-white/60">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Pazartesi - Pazar:</span>
                  <span className="font-bold text-blue-700">08:30 - 20:00</span>
                </div>
                <div className="text-slate-500 text-xs">
                  * Hafta sonları (Cumartesi ve Pazar) servisimiz tam gün aktiftir.
                </div>
                <div className="pt-2">
                  <span className="font-semibold text-slate-900 block mb-0.5">Adres:</span>
                  <span className="text-slate-600">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="text-xs text-slate-600 bg-white/70 backdrop-blur-md p-3 rounded-2xl border border-white/80 text-center shadow-xs">
                E-posta kullanılmamaktadır. Hızlı işlem için Telefon veya WhatsApp tercih ediniz.
              </div>
            </div>
          </div>
        </div>

        {/* Map Section with embedded iframe provided by user */}
        <div className="bg-white/50 backdrop-blur-2xl rounded-[36px] border border-white/70 p-6 sm:p-8 shadow-xl shadow-sky-950/5 space-y-4" id="map-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/60 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 inline-flex items-center gap-1.5">
                <FaIcon name="fa-solid fa-location-dot" className="text-blue-600 text-xs" />
                Muğla Ortaköy Konumu
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                Haritada Biz
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Ortaköy Mahallesi, Menteşe / Muğla
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600">
            Aşağıdaki harita üzerinden firmamızın Muğla Ortaköy merkezindeki konumunu inceleyebilir, yol tarifi alabilirsiniz:
          </p>

          {/* The Exact Google Maps Iframe Requested by the User */}
          <div className="overflow-hidden rounded-3xl border border-white/80 w-full shadow-lg bg-white/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.611571650642!2d28.4259207!3d37.181119499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf71029054d661%3A0x4e76985f5986c047!2zTXXEn2xhIEjEsXJkYXZhdA!5e1!3m2!1str!2str!4v1788422851143!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Muğla Su Harita Konumu"
              className="w-full h-[380px] sm:h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

