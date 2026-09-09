import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl, COMPANY_NAME, BRAND_NAME } from '../../../data/content';
import { PageId } from '../../../types';
import { FaIcon } from '../../common/FaIcon';

interface ViewProps {
  onNavigate: (page: PageId) => void;
}

export const EnUcuzMuglaSuSiparisiView: React.FC<ViewProps> = ({ onNavigate }) => {
  const customWhatsAppUrl = createWhatsAppUrl('Merhaba, Muğla su siparişi en uygun fiyat ve kapıya teslim avantajından yararlanmak istiyorum.');

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="seo-page-en-ucuz-mugla">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-xs font-semibold text-slate-500 gap-1.5" aria-label="Breadcrumb">
        <button onClick={() => onNavigate('anasayfa')} className="hover:text-blue-700 transition-colors cursor-pointer">
          Anasayfa
        </button>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-blue-900 font-bold">Muğla Su Siparişi En Ucuza Kapınızda</span>
      </nav>

      {/* Hero Header */}
      <header className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white p-8 sm:p-14 lg:p-16 border border-white/20 shadow-2xl">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <FaIcon name="fa-solid fa-coins" className="text-xs" />
            <span>Maksimum Tasarruf • Aracısız Doğrudan Bayi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Muğla Su Siparişi: <span className="text-emerald-300">En Ucuza Kapınızda!</span>
          </h1>

          <p className="text-base sm:text-lg text-blue-100/95 leading-relaxed font-normal">
            Ağır damacanaları taşımak için benzin harcamaya, belinizi zorlamaya veya fahiş aracı komisyonları ödemeye son. Yetkili <strong>{BRAND_NAME}</strong> (8.16 pH) doğal kaynak suyunu Muğla Ortaköy ve Menteşe’de en uygun fiyata, sıfır taşıma ücretiyle kapınıza getiriyoruz.
          </p>

          {/* Quick CTA Buttons */}
          <div className="pt-3 flex flex-wrap gap-3.5">
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all group"
            >
              <FaIcon name="fa-brands fa-whatsapp" className="text-lg group-hover:scale-110 transition-transform" />
              <span>En Ucuz Fiyatla WhatsApp’tan İste</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/95 text-blue-950 hover:bg-white font-bold text-sm sm:text-base shadow-lg backdrop-blur-md transition-all group"
            >
              <FaIcon name="fa-solid fa-phone" className="text-blue-600 text-sm group-hover:scale-110 transition-transform" />
              <span>Hemen Ara: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-blue-100">
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-badge-percent" className="text-emerald-400 text-sm" />
            <span>Doğrudan Bayi Fiyatları</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-truck-fast" className="text-emerald-400 text-sm" />
            <span>Ücretsiz Kapıya Teslimat</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-shield-halved" className="text-emerald-400 text-sm" />
            <span>Kat Başına Ek Masraf Yok</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-award" className="text-emerald-400 text-sm" />
            <span>8.16 pH Doğal Kaynak</span>
          </div>
        </div>
      </header>

      {/* Comparison: Market vs Mugla Su Kapıya Teslim */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Neden Marketten Taşımak Yerine Kapıya Sipariş Daha Hesaplı?
          </h2>
          <p className="text-slate-600 text-sm">
            Görünmeyen gizli maliyetleri hesapladığınızda, kapıya teslim su siparişinin hem cüzdanınız hem de sağlığınız için en kazançlı yol olduğunu göreceksiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option A: Marketten Alma */}
          <div className="bg-rose-50/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-rose-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
              <FaIcon name="fa-solid fa-cart-shopping" className="text-base text-rose-600" />
              <span>Marketten / Bakkaldan Kendin Taşıma</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Araba ile gidip gelme yakıt maliyeti (özellikle Ortaköy yokuşlarında)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>19 kiloluk damacanayı bagaja kaldırıp indirme ve bel ağrısı riski</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Apartman merdivenlerinde damacana taşırken harcanan efor ve vakit kaybı</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Depozito ve marka uyumsuzluğu sorunları</span>
              </li>
            </ul>
          </div>

          {/* Option B: Muğla Su */}
          <div className="bg-emerald-50/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-emerald-200/90 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <FaIcon name="fa-solid fa-thumbs-up" className="text-base text-emerald-600" />
              <span>Muğla Su ile En Ucuza Kapınızda</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0 mt-0.5" />
                <span>Tek bir telefon veya WhatsApp mesajıyla kapınıza kadar servis</span>
              </li>
              <li className="flex items-start gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0 mt-0.5" />
                <span>Kaçıncı katta olursanız olun asansörsüz kata ücretsiz taşıma</span>
              </li>
              <li className="flex items-start gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0 mt-0.5" />
                <span>Doğrudan Akdoruk yetkili bayisi avantajıyla aracısız net fiyat</span>
              </li>
              <li className="flex items-start gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0 mt-0.5" />
                <span>Elinizdeki boş damacanayı sorgusuz sualsiz 1\'e 1 takas imkanı</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Economical Options for Every Budget */}
      <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-lg space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 border border-emerald-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
            Bütçe Dostu Seçenekler
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Hangi Akdoruk Ambalajı Sizin İçin En Ekonomik?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Haftalık tüketim miktarına göre en düşük litre başına maliyeti sunan çözümlerimizi inceleyin:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-md inline-block">
              Litre Başına En Düşük Maliyet
            </span>
            <h3 className="font-bold text-lg text-slate-900">19L Damacana</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aileler, düzenli çay ve yemek pişirenler için litre başına en ekonomik formattır. Boş damacananız varsa sadece dolum bedeli ödersiniz.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md inline-block">
              Yazlık & Sezonluk Ekonomik
            </span>
            <h3 className="font-bold text-lg text-slate-900">5L Pet (4\'lü Koli)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Depozito parası bağlamak istemeyen, yaz aylarında Ortaköy’deki yazlık veya bağ evine gelenler için depozitosuz en hesaplı yöntem.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-md inline-block">
              İş Yeri & Şantiye Toplu
            </span>
            <h3 className="font-bold text-lg text-slate-900">Çoklu Koli & Damacana</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Haftalık toplu sevkiyat alan şantiyeler, ofisler ve villalar için faturalı özel toptan fiyatlandırma ve vadeli düzenli teslimat.
            </p>
          </div>
        </div>

        {/* CTA to Order Form */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/60">
          <div className="text-sm text-slate-700 font-medium">
            Siz de en ucuz su siparişi avantajıyla hemen damacananızı yenileyin:
          </div>
          <button
            onClick={() => onNavigate('iletisim')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer group"
          >
            <span>Hemen Siparişini Oluştur</span>
            <FaIcon name="fa-solid fa-arrow-right" className="text-xs group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Internal SEO Links */}
      <section className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-xs text-slate-600 space-y-2">
        <div className="font-bold text-slate-800 text-sm">Muğla Su Hizmet Rehberi:</div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => onNavigate('ortakoy-su-siparisi')} className="text-blue-700 hover:underline font-semibold cursor-pointer">
            Ortaköy Su Siparişi →
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('indirimli-ortakoy-su-siparisi')} className="text-blue-700 hover:underline font-semibold cursor-pointer">
            İndirimli Ortaköy Su Siparişi →
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('mugla-mentese-ortakoy-kotekli-su-siparisi')} className="text-blue-700 hover:underline font-semibold cursor-pointer">
            Menteşe, Ortaköy, Kötekli Su Siparişi →
          </button>
        </div>
      </section>
    </div>
  );
};
