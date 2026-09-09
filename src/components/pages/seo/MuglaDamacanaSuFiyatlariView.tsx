import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl, COMPANY_NAME } from '../../../data/content';
import { PageId } from '../../../types';
import { FaIcon } from '../../common/FaIcon';

interface ViewProps {
  onNavigate: (page: PageId) => void;
}

export const MuglaDamacanaSuFiyatlariView: React.FC<ViewProps> = ({ onNavigate }) => {
  const customWhatsAppUrl = createWhatsAppUrl(
    'Merhaba, Muğla Ortaköy güncel damacana su fiyatları ve toplu alım indirimleri hakkında bilgi alabilir miyim?'
  );

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="seo-su-fiyatlari-page">
      {/* Breadcrumb Navigation with URL Path */}
      <nav className="flex items-center text-xs font-semibold text-slate-500 gap-1.5 flex-wrap" aria-label="Breadcrumb">
        <button onClick={() => onNavigate('anasayfa')} className="hover:text-blue-700 transition-colors cursor-pointer">
          Anasayfa
        </button>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-slate-400">SEO & Bölgesel Sayfalar</span>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-amber-700 font-bold">Muğla Damacana Su Fiyatları</span>
        <span className="text-[11px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-mono ml-2">
          #mugla-damacana-su-fiyatlari
        </span>
      </nav>

      {/* Hero Header */}
      <header className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-14 lg:p-16 border border-white/20 shadow-2xl">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <FaIcon name="fa-solid fa-tags" className="text-amber-300 text-xs" />
            <span>Şeffaf Fiyat Politikası • Kat Farkı Yok • Gizli Masraf Yok</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Muğla Damacana Su Fiyatları: <span className="text-amber-300">En Uygun Tarife</span> & Site İndirimleri
          </h1>

          <p className="text-base sm:text-lg text-blue-100/95 leading-relaxed font-normal">
            Muğla Ortaköy, Menteşe ve Kötekli genelinde <strong>Akdoruk (8.16 pH)</strong> ve <strong>Topçam (7.50 pH)</strong> damacana sularını piyasadaki en avantajlı fiyatlarla, kat farkı almadan kapınıza getiriyoruz. Farklı marka boş damacanaları ek ücret talep etmeden birebir değiştiriyoruz.
          </p>

          {/* Quick CTA Buttons */}
          <div className="pt-3 flex flex-wrap gap-3.5">
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 transition-all group"
            >
              <FaIcon name="fa-brands fa-whatsapp" className="text-lg group-hover:scale-110 transition-transform" />
              <span>WhatsApp’tan Fiyat Sor & Sipariş Ver</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm sm:text-base shadow-lg transition-all group"
            >
              <FaIcon name="fa-solid fa-phone" className="text-blue-600 text-sm group-hover:scale-110 transition-transform" />
              <span>Telefonla Fiyat Al: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-blue-100">
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-ban" className="text-amber-300 text-sm" />
            <span>0 TL Kat Taşıma Farkı</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-repeat" className="text-amber-300 text-sm" />
            <span>Marka Farkı Olmadan Boş Değişimi</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-percent" className="text-amber-300 text-sm" />
            <span>Sitelere Çoklu Alım İndirimi</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-truck-fast" className="text-amber-300 text-sm" />
            <span>Ücretsiz Adrese Teslimat</span>
          </div>
        </div>
      </header>

      {/* Transparent Price Comparison Cards */}
      <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-lg space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-amber-800 bg-amber-100/70 border border-amber-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
            Güncel Tarife Rehberi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ortaköy ve Muğla Bölgesi Damacana & Su Fiyat Tablosu
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Piyasadaki fahiş kurye ücretleri ve kat farkı bindirmelerine son! {COMPANY_NAME} olarak tüketici dostu net fiyatlarla hizmet veriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 19L Polikarbon */}
          <div className="p-6 rounded-3xl bg-white/90 border border-blue-200 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              En Popüler
            </div>
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase">19 Litre Damacana</span>
              <h3 className="text-xl font-extrabold text-slate-900">Akdoruk & Topçam 19L</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Boş damacananız varsa sadece dolum ücreti ödersiniz. Boş damacananız yoksa uygun depozito ile başlatılır.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <FaIcon name="fa-solid fa-check" className="text-emerald-600" />
                  <span>Kat farkı yok (4. kata kadar aynı fiyat)</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaIcon name="fa-solid fa-check" className="text-emerald-600" />
                  <span>Başka marka boş damacanalar kabul edilir</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaIcon name="fa-solid fa-check" className="text-emerald-600" />
                  <span>8.16 veya 7.50 pH seçimi</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onNavigate('iletisim')}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Sipariş Ver / Fiyat İste
              </button>
            </div>
          </div>

          {/* Card 2: 15L Cam Seri */}
          <div className="p-6 rounded-3xl bg-white/90 border border-emerald-200 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Sağlıklı Seçim
            </div>
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-700 uppercase">15 Litre Cam Damacana</span>
              <h3 className="text-xl font-extrabold text-slate-900">Doğal Cam Seri</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                %100 saf cam ambalajda el değmeden şişelenen kaynak lezzeti. Plastiksiz, koku yapmayan tertemiz içim.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <FaIcon name="fa-solid fa-check" className="text-emerald-600" />
                  <span>BPA ve mikroplastik içermez</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaIcon name="fa-solid fa-check" className="text-emerald-600" />
                  <span>Özel cam damacana koruma kasası</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaIcon name="fa-solid fa-check" className="text-emerald-600" />
                  <span>Kapıya kadar güvenli teslimat</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onNavigate('iletisim')}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Cam Damacana Sipariş
              </button>
            </div>
          </div>

          {/* Card 3: Site & Toplu Alım */}
          <div className="p-6 rounded-3xl bg-white/90 border border-amber-200 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              En Avantajlı
            </div>
            <div className="space-y-4">
              <span className="text-xs font-bold text-amber-700 uppercase">Toplu & Site Paketi</span>
              <h3 className="text-xl font-extrabold text-slate-900">3+ Damacana Siparişi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Komşularla ortak siparişlerde, site yönetimlerinde ve ofislerde damacana başı ekstra indirim uygulanır.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <FaIcon name="fa-solid fa-check" className="text-emerald-600" />
                  <span>Damacana başı indirimli tarife</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaIcon name="fa-solid fa-check" className="text-emerald-600" />
                  <span>Planlı haftalık rutin teslimat</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaIcon name="fa-solid fa-check" className="text-emerald-600" />
                  <span>Koli pet ve bardak su ekleme imkanı</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={createWhatsAppUrl('Merhaba, Ortaköy sitelerimiz için toplu damacana su indirim fiyat teklifi almak istiyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <FaIcon name="fa-brands fa-whatsapp" />
                <span>Site Teklifi İste</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Depozito & Boş Değişim Kuralları */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Boş Damacana Değişimi Nasıl Yapılır? (Depozito Şartları)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white/10 rounded-2xl p-5 border border-white/10 space-y-2">
            <div className="text-amber-400 font-bold text-base flex items-center gap-2">
              <FaIcon name="fa-solid fa-rotate" />
              <span>1. Başka Marka Damacana</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Elinizdeki boş damacana Sağlık Bakanlığı onaylı herhangi bir markaya ait ise, yıpranmamış ve delinmemiş olması koşuluyla <strong>0 TL depozito</strong> ile birebir değiştirilir.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-white/10 space-y-2">
            <div className="text-amber-400 font-bold text-base flex items-center gap-2">
              <FaIcon name="fa-solid fa-box-open" />
              <span>2. İlk Kez Su Alanlar</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Evinizde hiç boş damacana yoksa yalnızca ilk siparişte bir defaya mahsus standart damacana depozito bedeli alınır; sonraki siparişlerde sadece su dolum bedeli ödersiniz.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-white/10 space-y-2">
            <div className="text-amber-400 font-bold text-base flex items-center gap-2">
              <FaIcon name="fa-solid fa-hand-holding-dollar" />
              <span>3. İade Garantisi</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Taşınma veya abonelik sonlandırma durumunda sağlam damacananızı teslim ettiğinizde depozito tutarınız tarafınıza nakit olarak geri iade edilir.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/70 shadow-sm space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Fiyatlar ve Ödemeler Hakkında SSS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-amber-600" />
              <span>Teslimatta ekstra servis ücreti alınıyor mu?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Hayır! Muğla Ortaköy ve yakın çevresine yaptığımız tüm damacana teslimatlarında servis ve nakliye tamamen ücretsizdir.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-amber-600" />
              <span>Hangi ödeme yöntemlerini kabul ediyorsunuz?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Kapıda nakit, temassız banka/kredi kartı veya anında banka transferi (IBAN / FAST) ile ödeme yapabilirsiniz.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-amber-600" />
              <span>Akdoruk ile Topçam damacana fiyatları aynı mı?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Her iki markamız da yetkili bayi tavsiye edilen perakende satış fiyatları üzerinden şeffaf ve eşit koşullarla sunulmaktadır.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-amber-600" />
              <span>Fiyatlar güncellenirken müşteriye bilgi verilir mi?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Her zaman! Sürpriz zam veya gizli artışlar uygulanmaz; sipariş anında teyit edilen fiyat ne ise kapıda o tutar geçerlidir.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Box */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-slate-950 rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-black text-white">En Uygun Fiyatla Taze Su Kapınızda</h3>
        <p className="text-amber-100 max-w-xl mx-auto text-sm sm:text-base">
          Muğla Ortaköy’de bütçe dostu, kat farkı olmayan güvenilir su servisi için hemen iletişime geçin.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={customWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-slate-950 text-white font-bold text-sm shadow-md hover:bg-slate-900 transition-colors flex items-center gap-2"
          >
            <FaIcon name="fa-brands fa-whatsapp" className="text-emerald-400 text-base" />
            <span>WhatsApp ile Fiyat Al</span>
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="px-6 py-3.5 rounded-2xl bg-white/90 text-slate-950 font-bold text-sm hover:bg-white transition-colors flex items-center gap-2 shadow-xs"
          >
            <FaIcon name="fa-solid fa-phone" className="text-blue-600 text-sm" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
