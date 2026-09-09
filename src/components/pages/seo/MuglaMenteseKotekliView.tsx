import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl, COMPANY_NAME, BRAND_NAME } from '../../../data/content';
import { PageId } from '../../../types';
import { FaIcon } from '../../common/FaIcon';

interface ViewProps {
  onNavigate: (page: PageId) => void;
}

export const MuglaMenteseKotekliView: React.FC<ViewProps> = ({ onNavigate }) => {
  const customWhatsAppUrl = createWhatsAppUrl('Merhaba, Muğla Menteşe / Kötekli / Ortaköy su siparişi vermek istiyorum.');

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="seo-page-mentese-kotekli">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-xs font-semibold text-slate-500 gap-1.5" aria-label="Breadcrumb">
        <button onClick={() => onNavigate('anasayfa')} className="hover:text-blue-700 transition-colors cursor-pointer">
          Anasayfa
        </button>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-blue-900 font-bold">Menteşe, Ortaköy, Kötekli Su Siparişi</span>
      </nav>

      {/* Hero Section */}
      <header className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-sky-900/85 text-white p-8 sm:p-14 lg:p-16 border border-white/20 shadow-2xl">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-sky-200 text-xs font-bold uppercase tracking-wider">
            <FaIcon name="fa-solid fa-location-dot" className="text-cyan-300 text-xs" />
            <span>Muğla Geniş Kapsamlı Dağıtım Ağı</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Muğla Su Siparişi: <span className="text-sky-300">Menteşe, Ortaköy ve Kötekli</span> Su Servisi
          </h1>

          <p className="text-base sm:text-lg text-blue-100/95 leading-relaxed font-normal">
            Muğla’nın kalbi Menteşe ilçesinde, Ortaköy sitelerinden Kötekli üniversite yerleşkesine kadar taze <strong>{BRAND_NAME}</strong> (8.16 pH) damacana ve pet sularını kapınıza getiriyoruz. Kat farkı yok, bekleme yok!
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
              <span>WhatsApp ile Hemen İste</span>
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

        {/* Floating Quick Badges */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-blue-100">
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-clock" className="text-cyan-300 text-sm" />
            <span>Ortalama 30-45 Dk Teslimat</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-shield-halved" className="text-cyan-300 text-sm" />
            <span>8.16 pH Yüksek Alkali</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-truck-fast" className="text-cyan-300 text-sm" />
            <span>Asansörsüz Kata Çıkarma</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-award" className="text-cyan-300 text-sm" />
            <span>Yetkili Akdoruk Bayisi</span>
          </div>
        </div>
      </header>

      {/* 3 Regional Service Pillars */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Hizmet Bölgelerimiz & Dağıtım Detayları
          </h2>
          <p className="text-slate-600 text-sm">
            Menteşe ilçemizin 3 kritik bölgesine özel servis araçlarımızla kesintisiz kaynak suyu ulaştırıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ortaköy Hub */}
          <article className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <FaIcon name="fa-solid fa-house" className="text-xl" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Ana Dağıtım Merkezi</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Ortaköy Su Servisi</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ortaköy merkez, villalar, tepe siteleri ve mahalle aralarındaki hanelere en hızlı ulaştığımız bölgedir. Şantiye, atölye ve haneler için boş damacana takasıyla anında değişim sağlıyoruz.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0" />
                <span>Ortaköy sitelerine ekspres teslimat</span>
              </li>
              <li className="flex items-center gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0" />
                <span>Müstakil ve bahçeli evlere kapı önü servis</span>
              </li>
            </ul>
          </article>

          {/* Menteşe Center */}
          <article className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
              <FaIcon name="fa-solid fa-city" className="text-xl" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">İlçe Merkezi & İş Yerleri</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Menteşe Su Siparişi</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Muğla Menteşe merkezindeki ofisler, dükkanlar, resmi kurumlar ve konutlar için periyodik damacana ve koli pet su servisi. Yoğun saatlerde bile düzenli sevkiyat programı.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0" />
                <span>Kurumsal işletmelere faturalı ve düzenli sevkiyat</span>
              </li>
              <li className="flex items-center gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0" />
                <span>Apartman dairelerine kat farkı almaksızın teslimat</span>
              </li>
            </ul>
          </article>

          {/* Kötekli Campus */}
          <article className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <FaIcon name="fa-solid fa-graduation-cap" className="text-xl" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Öğrenci & Kampüs Dostu</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Kötekli Su Siparişi</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Muğla Sıtkı Koçman Üniversitesi öğrencileri ve Kötekli sakinleri için bütçe dostu, pratik su temini. Apartlara, yurt civarına ve öğrenci evlerine kapıda ödeme kolaylığı.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0" />
                <span>Öğrenci bütçesine uygun ekonomik damacana</span>
              </li>
              <li className="flex items-center gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-emerald-600 text-xs shrink-0" />
                <span>WhatsApp üzerinden tek mesajla hızlı sipariş</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Why Choose Akdoruk in Mugla */}
      <section className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/70 shadow-lg space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
            Neden Muğla Su & Akdoruk?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Menteşe, Ortaköy ve Kötekli Halkının Güvendiği Su Kalitesi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Muğla yaz aylarında sıcaklığıyla, kış aylarında ise yüksek su tüketimiyle bilinir. Günlük sıvı ihtiyacınızı karşılarken vücudunuzun mineral dengesini korumak için <strong>8.16 pH</strong> derecesine sahip Akdoruk Doğal Kaynak Suyu’nu tercih edin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 shadow-xs space-y-2">
            <h3 className="font-bold text-base text-slate-900">1. Kapıya Kadar Taşıma Kolaylığı</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              19 kiloluk ağır damacanaları bakkaldan taşımak zorunda kalmayın. Servis personelimiz kapınızın eşiğine kadar getirir.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 shadow-xs space-y-2">
            <h3 className="font-bold text-base text-slate-900">2. Orijinal Güvenlik Bandı</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Her damacana Akdoruk fabrikasında el değmeden doldurulup emniyet bandıyla mühürlenir. İlk kapağı siz açarsınız.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 shadow-xs space-y-2">
            <h3 className="font-bold text-base text-slate-900">3. Esnek Ödeme Seçenekleri</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Kapıda nakit, mobil POS ile kredi kartı veya banka havalesi/FAST yöntemleriyle rahatça ödeme yapabilirsiniz.
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/60">
          <div className="text-sm text-slate-600">
            Hemen sipariş vermek veya bölgeniz için teslimat süresini öğrenmek mi istiyorsunuz?
          </div>
          <button
            onClick={() => onNavigate('iletisim')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer group"
          >
            <span>İletişime Geç</span>
            <FaIcon name="fa-solid fa-arrow-right" className="text-xs group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Local SEO FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center">
          Sıkça Sorulan Sorular: Menteşe, Ortaköy ve Kötekli Su Dağıtımı
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 shadow-xs space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Ortaköy veya Kötekli’ye siparişim ne kadar sürede gelir?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sipariş yoğunluğuna ve güzergaha bağlı olarak servisimiz ortalama 30 ile 45 dakika içinde kapınızda olur.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 shadow-xs space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Elimde farklı bir markanın boş damacanası var, alır mısınız?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Evet! Standart polikarbonat veya onaylı boş damacanalarınızı Akdoruk damacanamızla ek depozito talep etmeden takas ediyoruz.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 shadow-xs space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Apartmanda asansör yok, yukarı çıkarma ücreti var mı?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hayır, {COMPANY_NAME} prensipleri gereğince kat ayrımı veya asansörsüz bina ek ücreti kesinlikle talep edilmez.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 shadow-xs space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Kötekli’de öğrenci apartlarına toplu su siparişi verilebilir mi?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Elbette. Birden fazla damacana ya da koli pet su isteyen apart dairelerine ve öğrenci evlerine özel indirimli fiyat avantajı sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Internal SEO Links to other pages */}
      <section className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-xs text-slate-600 space-y-2">
        <div className="font-bold text-slate-800 text-sm">İlgili Hizmet Sayfalarımız:</div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => onNavigate('ortakoy-su-siparisi')} className="text-blue-700 hover:underline font-semibold cursor-pointer">
            Ortaköy Su Siparişi →
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('indirimli-ortakoy-su-siparisi')} className="text-blue-700 hover:underline font-semibold cursor-pointer">
            İndirimli Ortaköy Su Siparişi →
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
