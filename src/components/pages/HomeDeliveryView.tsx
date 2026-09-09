import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl, FAQS } from '../../data/content';
import { PageId } from '../../types';
import { FaIcon } from '../common/FaIcon';

interface HomeDeliveryViewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeDeliveryView: React.FC<HomeDeliveryViewProps> = ({ onNavigate }) => {
  const quickWhatsAppUrl = createWhatsAppUrl(
    'Merhaba, Muğla Ortaköy evime damacana su siparişi vermek istiyorum. Adresim:'
  );

  return (
    <div className="space-y-16 py-8 sm:py-12" id="home-delivery-page">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-950/85 via-blue-900/80 to-sky-900/80 backdrop-blur-2xl text-white rounded-[36px] border border-white/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl space-y-5 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-sky-200 text-xs font-bold uppercase tracking-wide">
              <FaIcon name="fa-solid fa-house" className="text-xs text-sky-300" />
              <span>Yetkili Akdoruk & Topçam Su Bayisi • Muğla Ortaköy</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Evlere Hızlı ve Hijyenik Akdoruk & Topçam Su Servisi
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Muğla Ortaköy genelinde 8.16 pH yüksek alkali <strong>Akdoruk</strong> ve Madran Dağı’nın efsane yumuşak içimli <strong>Topçam Doğal Kaynak Suyu</strong> lezzetini kapınıza getiriyoruz. Ağır damacanaları merdivenlerden yukarı taşımaktan kurtulun; ister müstakil evde, ister 4. kat apartman dairesinde olun, kat farkı almaksızın kapınızın önüne teslim ediyoruz.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 border border-white/20 transition-all group"
                id="delivery-hero-whatsapp"
              >
                <FaIcon name="fa-brands fa-whatsapp" className="text-base group-hover:scale-110 transition-transform" />
                <span>WhatsApp’tan Evime Su İste</span>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 text-blue-950 hover:bg-white font-bold text-sm shadow-lg backdrop-blur-md border border-white transition-all group"
                id="delivery-hero-phone"
              >
                <FaIcon name="fa-solid fa-phone" className="text-blue-600 text-xs group-hover:scale-110 transition-transform" />
                <span>Telefon: {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Home Delivery Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs inline-block">
            Önceliklerimiz
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Ev Servisinde Neden Muğla Su?
          </h2>
          <p className="text-slate-600 text-sm">
            Ortaköy sakinlerinin yıllardır güvenle tükettiği temiz, taze ve pratik ev servisi deneyimi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-7 border border-white/70 shadow-lg shadow-sky-950/5 space-y-4 hover:bg-white/70 hover:border-white/90 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-blue-700 flex items-center justify-center shadow-xs">
              <FaIcon name="fa-solid fa-truck-fast" className="text-xl text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Kat Farkı Yok</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Asansör olmayan binalarda bile hiçbir ek ücret talep etmeksizin damacananızı katınıza kadar çıkarıyor, arzu ederseniz sebilinize veya mutfak alanınıza yerleştiriyoruz.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-7 border border-white/70 shadow-lg shadow-sky-950/5 space-y-4 hover:bg-white/70 hover:border-white/90 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-emerald-700 flex items-center justify-center shadow-xs">
              <FaIcon name="fa-solid fa-shield-halved" className="text-xl text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Hijyen ve Güvenlik Bandı</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tüm damacanalarımız el değmeden dolum sonrası özel termal güvenlik bandıyla mühürlenir. Güvenlik bandını ilk siz açarak tazeliğinden ve saflığından emin olursunuz.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-7 border border-white/70 shadow-lg shadow-sky-950/5 space-y-4 hover:bg-white/70 hover:border-white/90 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-amber-700 flex items-center justify-center shadow-xs">
              <FaIcon name="fa-solid fa-rotate" className="text-xl text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Marka Ayrımı Olmadan Değişim</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Elinizde farklı bir markaya ait standart polikarbon boş damacana varsa, depozito ödemeden boş damacanayı teslim edip yeni suyumuzu hemen teslim alabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      {/* Ev Servisi Nasıl İşler? Adım Adım */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/40 backdrop-blur-2xl rounded-[36px] p-8 sm:p-12 border border-white/65 shadow-xl shadow-sky-950/5">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Evlere Servis Sipariş Rehberi
              </h2>
              <p className="text-slate-600 text-sm">
                Siparişinizi oluştururken nelere dikkat etmelisiniz?
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 flex items-start gap-4 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Açık Adres ve Site Bilgisi</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Ortaköy’de bulunduğunuz sitenin adı, blok veya kapı numarası ve kat bilginizi WhatsApp mesajınızda veya telefonda belirtmeniz yeterlidir.
                  </p>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 flex items-start gap-4 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Boş Damacana Durumu</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Değişime vereceğiniz boş damacana olup olmadığını bildirmeniz, servis personelimizin aracı buna göre hazırlamasını sağlar.
                  </p>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 flex items-start gap-4 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Ödeme Tercihiniz</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Kapıda nakit mi yoksa temassız kredi kartı (mobil POS) ile mi ödemek istediğinizi belirtiniz.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => onNavigate('iletisim')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 border border-white/20 transition-colors cursor-pointer"
              >
                <span>İletişime Geç</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sıkça Sorulan Sorular */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="faq-section">
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-blue-700 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs text-xs font-bold uppercase tracking-wider">
            <FaIcon name="fa-regular fa-circle-question" className="text-sm text-blue-600" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Ev Servisi Hakkında Sıkça Sorulanlar
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/70 p-5 sm:p-6 shadow-md shadow-sky-950/5 hover:bg-white/70 transition-all">
              <h3 className="font-bold text-slate-900 text-base mb-2 flex items-start gap-2">
                <span className="text-blue-600 font-bold">S:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-slate-600 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
