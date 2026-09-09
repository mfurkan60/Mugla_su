import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl, COMPANY_NAME, BRAND_NAME } from '../../../data/content';
import { PageId } from '../../../types';
import { FaIcon } from '../../common/FaIcon';

interface ViewProps {
  onNavigate: (page: PageId) => void;
}

export const IndirimliOrtakoySuSiparisiView: React.FC<ViewProps> = ({ onNavigate }) => {
  const customWhatsAppUrl = createWhatsAppUrl('Merhaba, İndirimli Ortaköy su siparişi kampanyalarınız hakkında bilgi almak ve sipariş vermek istiyorum.');

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="seo-page-indirimli-ortakoy">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-xs font-semibold text-slate-500 gap-1.5" aria-label="Breadcrumb">
        <button onClick={() => onNavigate('anasayfa')} className="hover:text-blue-700 transition-colors cursor-pointer">
          Anasayfa
        </button>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-blue-900 font-bold">İndirimli Ortaköy Su Siparişi</span>
      </nav>

      {/* Hero Header */}
      <header className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900 text-white p-8 sm:p-14 lg:p-16 border border-white/20 shadow-2xl">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <FaIcon name="fa-solid fa-percent" className="text-xs" />
            <span>Tasarruf & Özel Fırsatlar</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            İndirimli Ortaköy Su Siparişi: <span className="text-emerald-300">En Uygun Damacana Fiyatları</span>
          </h1>

          <p className="text-base sm:text-lg text-blue-100/95 leading-relaxed font-normal">
            Muğla Ortaköy’de bütçenizi yormayan, kaliteli ve yüksek alkali <strong>{BRAND_NAME}</strong> kaynak suyuna en avantajlı fiyatlarla ulaşın. Çoklu siparişlerde, site ortak alımlarında ve düzenli aboneliklerde ekstra indirim fırsatları sizi bekliyor.
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
              <span>İndirimli Siparişini WhatsApp’tan Yaz</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/95 text-blue-950 hover:bg-white font-bold text-sm sm:text-base shadow-lg backdrop-blur-md transition-all group"
            >
              <FaIcon name="fa-solid fa-phone" className="text-blue-600 text-sm group-hover:scale-110 transition-transform" />
              <span>Kampanya Danışma: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-blue-100">
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-tag" className="text-emerald-400 text-sm" />
            <span>Çoklu Alımda Özel İndirim</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-users" className="text-emerald-400 text-sm" />
            <span>Site & Apartman Fırsatı</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-truck-fast" className="text-emerald-400 text-sm" />
            <span>Kat Taşıma Ücreti Yok</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-shield-halved" className="text-emerald-400 text-sm" />
            <span>%100 Akdoruk Orijinal</span>
          </div>
        </div>
      </header>

      {/* 4 Active Campaigns / Discount Packages */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ortaköy İçin Aktif Su İndirim Kampanyaları
          </h2>
          <p className="text-slate-600 text-sm">
            Her hanenin ve işletmenin su tüketim alışkanlığına uygun tasarruf modelleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Campaign 1 */}
          <div className="bg-white/75 backdrop-blur-xl rounded-3xl p-6 border border-white/90 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full inline-block">
                Fırsat 1
              </span>
              <h3 className="text-lg font-bold text-slate-900">2+ Damacana Çoklu Alım</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tek seferde 2 veya daha fazla 19L damacana sipariş ettiğinizde birim damacana başına indirimli fiyattan faydalanırsınız.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0" />
                  <span>Tek servis, daha hesaplı birim fiyat</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0" />
                  <span>Yedek damacananız daima hazır</span>
                </li>
              </ul>
            </div>
            <a
              href={createWhatsAppUrl('Merhaba, 2 adet veya daha fazla damacana için çoklu alım indiriminden yararlanmak istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition-all block"
            >
              Fiyatı Sor & Sipariş Ver
            </a>
          </div>

          {/* Campaign 2 */}
          <div className="bg-white/75 backdrop-blur-xl rounded-3xl p-6 border border-white/90 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full inline-block">
                Fırsat 2
              </span>
              <h3 className="text-lg font-bold text-slate-900">Site & Komşu İndirimi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ortaköy’deki sitenizde veya apartmanınızda komşunuzla birlikte aynı anda sipariş verin, ikiniz de indirim kazanın.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <FaIcon name="fa-solid fa-circle-check" className="text-blue-600 text-xs shrink-0" />
                  <span>Aynı adrese toplu teslim avantajı</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <FaIcon name="fa-solid fa-circle-check" className="text-blue-600 text-xs shrink-0" />
                  <span>Site WhatsApp gruplarına özel teklif</span>
                </li>
              </ul>
            </div>
            <a
              href={createWhatsAppUrl('Merhaba, sitemiz ve komşularımızla birlikte toplu su siparişi vermek ve indirimden yararlanmak istiyoruz.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center transition-all block"
            >
              Site Teklifi Al
            </a>
          </div>

          {/* Campaign 3 */}
          <div className="bg-white/75 backdrop-blur-xl rounded-3xl p-6 border border-white/90 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full inline-block">
                Fırsat 3
              </span>
              <h3 className="text-lg font-bold text-slate-900">Haftalık Abone Paketi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Her hafta belirli bir gün ve saatte düzenli su teslimatı tanımlayın, hem suyunuz bitmesin hem de sabit fiyat garantisi yakalayın.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <FaIcon name="fa-solid fa-circle-check" className="text-amber-600 text-xs shrink-0" />
                  <span>Zamlardan etkilenmeyen periyot</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <FaIcon name="fa-solid fa-circle-check" className="text-amber-600 text-xs shrink-0" />
                  <span>Otomatik hatırlatma ve takip</span>
                </li>
              </ul>
            </div>
            <a
              href={createWhatsAppUrl('Merhaba, haftalık düzenli damacana su aboneliği indiriminiz hakkında bilgi almak istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs text-center transition-all block"
            >
              Abonelik Başlat
            </a>
          </div>

          {/* Campaign 4 */}
          <div className="bg-white/75 backdrop-blur-xl rounded-3xl p-6 border border-white/90 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full inline-block">
                Fırsat 4
              </span>
              <h3 className="text-lg font-bold text-slate-900">Sıfır Depozito Takası</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evinizde başka bir markaya ait sağlam polikarbon damacana varsa, hiçbir ek depozito ücreti ödemeden Akdoruk’a geçiş yapabilirsiniz.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <FaIcon name="fa-solid fa-circle-check" className="text-purple-600 text-xs shrink-0" />
                  <span>Yüksek depozito masrafından kurtulun</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <FaIcon name="fa-solid fa-circle-check" className="text-purple-600 text-xs shrink-0" />
                  <span>Anında 1\'e 1 kapıda takas</span>
                </li>
              </ul>
            </div>
            <a
              href={createWhatsAppUrl('Merhaba, başka marka boş damacanamı verip Akdoruk damacana suyu takas indiriminden faydalanmak istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs text-center transition-all block"
            >
              Boş Damacana Takas Et
            </a>
          </div>
        </div>
      </section>

      {/* Savings Breakdown & Why We Are More Economical */}
      <section className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/70 shadow-lg space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
            Akıllı Hesap
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Neden Muğla Su ile Ortaköy’de Daha Çok Tasarruf Edersiniz?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pek çok su dağıtıcısında son adımda karşınıza çıkan gizli masraflar yoktur. Bizde şeffaf, dürüst ve gerçek kapı teslim maliyeti esastır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 shadow-xs space-y-2">
            <div className="text-lg font-bold text-slate-900">Gizli Kat Ücreti Yok</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bazı firmalar 3. ve 4. katlara damacana başına ekstra 15-30 TL kat ücreti ekler. Bizde hangi katta olursanız olun ek masraf çıkmaz.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 shadow-xs space-y-2">
            <div className="text-lg font-bold text-slate-900">Aracı Komisyonu Yok</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Üçüncü parti sipariş uygulamalarının aldığı %15-20 servis komisyonları olmadığı için doğrudan bayi fiyatından faydalanırsınız.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 shadow-xs space-y-2">
            <div className="text-lg font-bold text-slate-900">Yüksek Kalite / Fiyat Oranı</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              8.16 pH yüksek alkali ve doğal dağ kaynağı suyunu arıtma su fiyatına yakın bir bütçeyle tüketirsiniz.
            </p>
          </div>
        </div>

        {/* CTA to Order View */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/60">
          <div className="text-sm text-slate-700">
            İndirimli Ortaköy su siparişiniz için bizimle hemen iletişime geçebilirsiniz:
          </div>
          <button
            onClick={() => onNavigate('iletisim')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer group"
          >
            <span>İletişime Geç</span>
            <FaIcon name="fa-solid fa-arrow-right" className="text-xs group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Internal SEO Links */}
      <section className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-xs text-slate-600 space-y-2">
        <div className="font-bold text-slate-800 text-sm">İlgili Diğer Sayfalarımız:</div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => onNavigate('ortakoy-su-siparisi')} className="text-blue-700 hover:underline font-semibold cursor-pointer">
            Ortaköy Su Siparişi →
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('mugla-mentese-ortakoy-kotekli-su-siparisi')} className="text-blue-700 hover:underline font-semibold cursor-pointer">
            Menteşe, Ortaköy, Kötekli Su Siparişi →
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('en-ucuz-mugla-su-siparisi')} className="text-blue-700 hover:underline font-semibold cursor-pointer">
            Muğla Su Siparişi En Ucuza Kapınızda →
          </button>
        </div>
      </section>
    </div>
  );
};
