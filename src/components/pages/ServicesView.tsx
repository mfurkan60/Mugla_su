import React from 'react';
import { SERVICES, PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl } from '../../data/content';
import { PageId } from '../../types';
import { FaIcon } from '../common/FaIcon';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <FaIcon name="fa-solid fa-house" className="text-xl text-blue-600" />;
      case 'Building':
        return <FaIcon name="fa-solid fa-city" className="text-xl text-blue-600" />;
      case 'Briefcase':
        return <FaIcon name="fa-solid fa-briefcase" className="text-xl text-blue-600" />;
      case 'ShieldCheck':
        return <FaIcon name="fa-solid fa-shield-halved" className="text-xl text-emerald-600" />;
      default:
        return <FaIcon name="fa-solid fa-truck-fast" className="text-xl text-blue-600" />;
    }
  };

  return (
    <div className="space-y-16 py-8 sm:py-12" id="services-page">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs inline-block">
          Yetkili Akdoruk & Topçam Su Bayisi Hizmetleri
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Muğla Ortaköy Su Dağıtım Hizmetleri
        </h1>
        <p className="max-w-2xl mx-auto text-slate-600 text-base leading-relaxed">
          Akdoruk ve Topçam Doğal Kaynak Suyu güvencesiyle evlerden sitelere, ofislerden şantiyelere kadar Ortaköy’ün tüm su ihtiyacını hızlı servis filomuz ve hijyenik koşullarda karşılıyoruz.
        </p>
      </div>

      {/* Services Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const serviceWhatsApp = createWhatsAppUrl(
              `Merhaba, Muğla Ortaköy'de "${service.title}" hizmetiniz hakkında bilgi almak ve sipariş vermek istiyorum.`
            );

            return (
              <div
                key={service.id}
                className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/70 p-6 sm:p-8 shadow-lg shadow-sky-950/5 hover:bg-white/70 hover:border-white/90 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                id={`service-card-${service.id}`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-blue-700 flex items-center justify-center shrink-0 shadow-xs">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        Hizmet #{index + 1}
                      </span>
                      <h2 className="text-xl font-bold text-slate-900">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Hizmet Avantajları:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <FaIcon name="fa-solid fa-circle-check" className="text-blue-600 text-xs shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/60 flex flex-wrap items-center gap-3">
                  <a
                    href={serviceWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 border border-white/20 transition-all group"
                  >
                    <FaIcon name="fa-brands fa-whatsapp" className="text-base group-hover:scale-110 transition-transform" />
                    <span>WhatsApp ile Talep Et</span>
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border border-white/80 bg-white/70 text-blue-900 font-bold text-xs sm:text-sm hover:bg-white transition-colors shadow-xs group"
                  >
                    <FaIcon name="fa-solid fa-phone" className="text-blue-600 text-xs group-hover:scale-110 transition-transform" />
                    <span>Ara</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* How it Works 4-Steps Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/40 backdrop-blur-2xl rounded-[36px] border border-white/65 p-8 sm:p-12 shadow-xl shadow-sky-950/5">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80">
              Süreç
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Siparişiniz Nasıl Ulaşır?
            </h2>
            <p className="text-slate-600 text-sm">
              Muğla Ortaköy’de su siparişinizi 4 kolay adımda kapınıza teslim ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/80 shadow-xs relative">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-base shadow-md shadow-blue-600/20">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Siparişinizi Verin</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Telefonla arayın veya WhatsApp butonuna dokunarak adresinizi ve damacana sayınızı yazın.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/80 shadow-xs relative">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-base shadow-md shadow-blue-600/20">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Hijyenik Hazırlık</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Damacanalarımız güvenlik bandı ve steril kapağıyla servis aracımıza yüklenir.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/80 shadow-xs relative">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-base shadow-md shadow-blue-600/20">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Daire Kapınıza Teslim</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Servis personelimiz 30-45 dk içinde Ortaköy’deki evinize veya iş yerinize suyu kapınıza kadar çıkarır.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/80 shadow-xs relative">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-bold flex items-center justify-center mb-4 text-base shadow-md shadow-emerald-600/20">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Pratik Ödeme</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kapıda nakit veya mobil POS ile kredi kartınızla temassız olarak kolayca ödeyin.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-950/85 via-blue-900/80 to-slate-900/85 backdrop-blur-2xl rounded-[36px] border border-white/25 p-8 sm:p-12 text-white shadow-2xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Muğla Ortaköy’de Hemen Su Siparişi Verin
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
            Beklemek yok, ağır damacana taşımak yok. Telefonla arayın veya WhatsApp ile adresinizi gönderin, dakikalar içinde kapınızda olalım.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href={createWhatsAppUrl('Merhaba, Muğla Ortaköy için su siparişi vermek istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 border border-white/20 transition-all group"
            >
              <FaIcon name="fa-brands fa-whatsapp" className="text-base group-hover:scale-110 transition-transform" />
              <span>WhatsApp ile Yazın</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 text-blue-950 hover:bg-white font-bold text-sm shadow-lg backdrop-blur-md border border-white transition-all group"
            >
              <FaIcon name="fa-solid fa-phone" className="text-blue-600 text-xs group-hover:scale-110 transition-transform" />
              <span>Hemen Ara: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

