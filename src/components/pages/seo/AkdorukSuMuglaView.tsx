import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl, COMPANY_NAME, BRANDS_INFO, PRODUCTS } from '../../../data/content';
import { PageId } from '../../../types';
import { FaIcon } from '../../common/FaIcon';

interface ViewProps {
  onNavigate: (page: PageId) => void;
}

export const AkdorukSuMuglaView: React.FC<ViewProps> = ({ onNavigate }) => {
  const akdorukProducts = PRODUCTS.filter((p) => p.brand === 'Akdoruk');
  const customWhatsAppUrl = createWhatsAppUrl(
    'Merhaba, Akdoruk Doğal Kaynak Suyu siparişi vermek istiyorum. Muğla Ortaköy adresime teslimat yapabilir misiniz?'
  );

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="seo-akdoruk-su-page">
      {/* Breadcrumb Navigation with URL Path */}
      <nav className="flex items-center text-xs font-semibold text-slate-500 gap-1.5 flex-wrap" aria-label="Breadcrumb">
        <button onClick={() => onNavigate('anasayfa')} className="hover:text-blue-700 transition-colors cursor-pointer">
          Anasayfa
        </button>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-slate-400">SEO & Bölgesel Sayfalar</span>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-blue-700 font-bold">Akdoruk Su Muğla Siparişi</span>
        <span className="text-[11px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-mono ml-2">
          #akdoruk-su-mugla-siparisi
        </span>
      </nav>

      {/* Hero Header */}
      <header className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white p-8 sm:p-14 lg:p-16 border border-white/20 shadow-2xl">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-sky-200 text-xs font-bold uppercase tracking-wider">
            <FaIcon name="fa-solid fa-award" className="text-cyan-300 text-xs" />
            <span>Yetkili Akdoruk Su Bayisi • Muğla Ortaköy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Akdoruk Su Muğla Siparişi: <span className="text-sky-300">8.16 pH Yüksek Alkali</span> Doğal Su
          </h1>

          <p className="text-base sm:text-lg text-blue-100/95 leading-relaxed font-normal">
            Doğanın kalbinden gelen ve Sağlık Bakanlığı onaylı 8.16 pH yüksek alkali değeriyle tescillenen <strong>Akdoruk Doğal Kaynak Suyu</strong>, {COMPANY_NAME} yetkili bayisi güvencesiyle Muğla Menteşe ve Ortaköy’de kapınıza kadar ulaştırılıyor.
          </p>

          {/* Quick CTA Buttons */}
          <div className="pt-3 flex flex-wrap gap-3.5">
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all group"
            >
              <FaIcon name="fa-brands fa-whatsapp" className="text-lg group-hover:scale-110 transition-transform" />
              <span>WhatsApp’tan Akdoruk Su Siparişi Ver</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-blue-950 hover:bg-blue-50 font-bold text-sm sm:text-base shadow-lg transition-all group"
            >
              <FaIcon name="fa-solid fa-phone" className="text-blue-600 text-sm group-hover:scale-110 transition-transform" />
              <span>Hemen Ara: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-blue-100">
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-droplet" className="text-cyan-300 text-sm" />
            <span>8.16 pH Yüksek Alkali</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-shield-halved" className="text-cyan-300 text-sm" />
            <span>Orijinal Akdoruk Mührü</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-heart-pulse" className="text-cyan-300 text-sm" />
            <span>Dengeli Kalsiyum & Magnezyum</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-building" className="text-cyan-300 text-sm" />
            <span>Kat Farkı Almaksızın Kapıda</span>
          </div>
        </div>
      </header>

      {/* Alkali Water Benefits */}
      <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-lg space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-blue-800 bg-blue-100/70 border border-blue-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
            8.16 pH Değerinin Önemi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Neden Yüksek Alkali Akdoruk Suyu Tercih Etmelisiniz?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Günlük hayatta tükettiğimiz gıdalar vücutta asidik atıklar oluşturabilir. 8.16 pH değerine sahip Akdoruk Doğal Kaynak Suyu, vücudun asit-baz dengesini düzenlemeye yardımcı olarak gün boyu canlılık ve zindelik hissi sağlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
              <FaIcon name="fa-solid fa-bolt" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Doğal Antioksidan Desteği</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Yüksek pH seviyesi, serbest radikallerle savaşan antioksidan etkiyi destekler; metabolizmanın daha hızlı çalışmasına katkıda bulunur.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
              <FaIcon name="fa-solid fa-bone" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Kemik ve Kas Sağlığı</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              İçeriğinde bulunan 27.6 mg/L Kalsiyum ve 5.2 mg/L Magnezyum mineralleri, günlük mineral ihtiyacınızı doğal yoldan karşılar.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
              <FaIcon name="fa-solid fa-lock" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Orijinal Güvenlik Bandı</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Her Akdoruk damacanası ilk defa sizin tarafınızdan açılan emniyet kilitli hijyen bandıyla mühürlenmiş olarak kapınıza gelir.
            </p>
          </div>
        </div>
      </section>

      {/* Akdoruk Mineral Analysis Table */}
      <section className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 mb-8">
          <span className="text-xs font-bold text-sky-300 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider border border-white/15">
            Resmi Laboratuvar Raporu
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Akdoruk Doğal Kaynak Suyu Mineral Değerleri
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed">
            Sağlık Bakanlığı tarafından onaylanan taze Akdoruk kaynak suyunun kimyasal analiz değerleri:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {BRANDS_INFO['Akdoruk'].minerals.map((m, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
              <div className="text-[11px] text-sky-300 font-bold uppercase">{m.name}</div>
              <div className="text-2xl font-black text-white mt-1">
                {m.amount} <span className="text-xs font-normal text-sky-200">{m.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Akdoruk Products Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Akdoruk Ürünleri</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Ortaköy’e Teslim Edilen Akdoruk Çeşitleri
            </h2>
          </div>
          <button
            onClick={() => onNavigate('iletisim')}
            className="inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:text-blue-900 cursor-pointer"
          >
            <span>İletişime Geç</span>
            <FaIcon name="fa-solid fa-arrow-right" className="text-xs" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {akdorukProducts.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/80 overflow-hidden shadow-md hover:shadow-xl transition-all p-5 flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-2xl overflow-hidden mb-4 relative bg-slate-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg">
                    {product.brand}
                  </span>
                  <span className="absolute top-3 right-3 bg-slate-900/80 text-white text-xs font-bold px-2.5 py-0.5 rounded-lg">
                    {product.ph}
                  </span>
                </div>
                <h3 className="font-extrabold text-base text-slate-900">{product.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{product.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-700">Ortaköy Stokta</span>
                <a
                  href={createWhatsAppUrl(`Merhaba, Akdoruk ${product.name} siparişi vermek istiyorum. Ortaköy adresime gönderebilir misiniz?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <FaIcon name="fa-brands fa-whatsapp" />
                  <span>Sipariş Ver</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/70 shadow-sm space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Muğla Akdoruk Su Hakkında Sık Sorulan Sorular
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-blue-600" />
              <span>Akdoruk Su orijinal kapak bandıyla mı geliyor?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Evet, firmamız yetkili Akdoruk su bayisi olup fabrikadan çıkan orijinal güvenlik bandı ve hologram mührü kesinlikle bozulmadan kapınıza teslim edilmektedir.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-blue-600" />
              <span>Akdoruk suyun pH değeri nedir?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Akdoruk Doğal Kaynak Suyu, 8.16 pH değeri ile Türkiye’nin en yüksek doğal alkali su markaları arasında yer alır. Asidik yapıyı nötralize eder.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-blue-600" />
              <span>Ortaköy’de sitelere toplu Akdoruk alımında indirim var mı?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Evet! Sitelerde komşularla birleşerek verilen veya site yönetimi adına yapılan 3 damacana ve üzeri alımlarda avantajlı fiyat uygulanır.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-blue-600" />
              <span>Akdoruk pet su koli siparişi verebilir miyim?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Tabii ki. 0.5L (24’lü koli), 1.5L (12’li koli), 5L ve 10L pratik pet şişe sularımız stoklarımızda mevcuttur.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Box */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-black">Yetkili Akdoruk Su Güvencesiyle Tanışın</h3>
        <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base">
          Muğla Menteşe ve Ortaköy bölgesinde alkali ve zengin mineralli suyun lezzetini hemen kapınıza getirelim.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={customWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-white text-blue-900 font-bold text-sm shadow-md hover:bg-blue-50 transition-colors flex items-center gap-2"
          >
            <FaIcon name="fa-brands fa-whatsapp" className="text-emerald-600 text-base" />
            <span>WhatsApp Sipariş</span>
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="px-6 py-3.5 rounded-2xl bg-blue-950/60 border border-white/30 text-white font-bold text-sm hover:bg-blue-950/80 transition-colors flex items-center gap-2"
          >
            <FaIcon name="fa-solid fa-phone" className="text-sky-300 text-sm" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
