import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl, COMPANY_NAME, BRANDS_INFO } from '../../../data/content';
import { PageId } from '../../../types';
import { FaIcon } from '../../common/FaIcon';

interface ViewProps {
  onNavigate: (page: PageId) => void;
}

export const KotekliSuSiparisiView: React.FC<ViewProps> = ({ onNavigate }) => {
  const customWhatsAppUrl = createWhatsAppUrl(
    'Merhaba, Muğla Kötekli için su siparişi vermek istiyorum. Apart/Daire kapıma teslimat süreniz nedir?'
  );

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="seo-kotekli-su-page">
      {/* Breadcrumb Navigation with URL Path */}
      <nav className="flex items-center text-xs font-semibold text-slate-500 gap-1.5 flex-wrap" aria-label="Breadcrumb">
        <button onClick={() => onNavigate('anasayfa')} className="hover:text-blue-700 transition-colors cursor-pointer">
          Anasayfa
        </button>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-slate-400">SEO & Bölgesel Sayfalar</span>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-indigo-700 font-bold">Kötekli Su Siparişi</span>
        <span className="text-[11px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full font-mono ml-2">
          #kotekli-su-siparisi
        </span>
      </nav>

      {/* Hero Header */}
      <header className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white p-8 sm:p-14 lg:p-16 border border-white/20 shadow-2xl">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-indigo-200 text-xs font-bold uppercase tracking-wider">
            <FaIcon name="fa-solid fa-graduation-cap" className="text-indigo-300 text-xs" />
            <span>MSKÜ Kampüs, Apart & Öğrenci Dostu Su Servisi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Kötekli Su Siparişi: <span className="text-sky-300">Apart ve Sitelerinize</span> Hızlı Teslimat
          </h1>

          <p className="text-base sm:text-lg text-blue-100/95 leading-relaxed font-normal">
            Muğla Sıtkı Koçman Üniversitesi yerleşkesi, Kötekli Mahallesi ve Yoğurtçu mevkisinde; apart dairelerinize, öğrenci evlerinize ve işletmelere kat farkı ücreti almaksızın <strong>Akdoruk (8.16 pH)</strong> ve <strong>Topçam (7.50 pH)</strong> kaynak suyu ulaştırıyoruz.
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
              <span>WhatsApp’tan Kötekli Su Siparişi</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm sm:text-base shadow-lg transition-all group"
            >
              <FaIcon name="fa-solid fa-phone" className="text-blue-600 text-sm group-hover:scale-110 transition-transform" />
              <span>Hemen Ara: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-blue-100">
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-stairs" className="text-sky-300 text-sm" />
            <span>Asansörsüz Kata Ücretsiz Çıkarma</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-bolt" className="text-sky-300 text-sm" />
            <span>Apartlara Hızlı Dağıtım</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-wallet" className="text-sky-300 text-sm" />
            <span>Öğrenci Dostu Fiyat Tarifesi</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-repeat" className="text-sky-300 text-sm" />
            <span>Her Marka Boş Damacana Değişimi</span>
          </div>
        </div>
      </header>

      {/* Why Kötekli Residents Choose Us */}
      <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-lg space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-indigo-800 bg-indigo-100/70 border border-indigo-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
            Kötekli & MSKÜ Bölgesi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ağır Damacanaları Merdivenlerden Taşımaya Son!
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kötekli bölgesindeki çok katlı apartlarda ve yurt çevrelerinde su taşımak öğrenciler ve sakinler için büyük zahmettir. Dağıtım personelimiz 19 litrelik damacanaları doğrudan dairenizin içine veya kapınızın önüne kadar çıkarır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
              <FaIcon name="fa-solid fa-building-user" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Tüm Apart ve Siteler</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kötekli merkez, Sıtkı Koçman Bulvarı, Yeniköy yolu ve kampüs çevresindeki her aparta günlük kesintisiz servisimiz vardır.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
              <FaIcon name="fa-solid fa-credit-card" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Kapıda Nakit / IBAN / Kart</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Öğrenciler için ödeme esnekliği sağlıyoruz. İster kapıda nakit ödeyin, ister anında IBAN / Fast ile havale yapın.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
              <FaIcon name="fa-solid fa-message" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">WhatsApp Tek Dokunuşla</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Uygulama indirmeye veya üyelik açmaya gerek yok. Sadece apart adınızı ve daire numaranızı yazın, suyunuz gelsin.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Choices */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="max-w-3xl space-y-3 mb-8">
          <span className="text-xs font-bold text-sky-400 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
            Damak Tadınıza Göre Su Seçeneği
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Kötekli’de İki Güçlü Marka: Akdoruk & Topçam
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Hangisini isterseniz aynı hız ve aynı ekonomik fiyat güvencesiyle kapınıza getiriyoruz:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/15 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-blue-400 font-bold text-lg">Akdoruk Doğal Kaynak Suyu</span>
              <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">8.16 pH</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Yüksek doğal alkali içeriğiyle ders çalışırken ve spor yaparken vücudunuzun hidrasyonunu ve zindeliğini en üst seviyede tutar.
            </p>
            <div className="text-xs text-blue-200 font-semibold flex items-center gap-1.5">
              <FaIcon name="fa-solid fa-circle-check" className="text-emerald-400" />
              <span>Orijinal Mühürlü Damacana</span>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/15 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 font-bold text-lg">Topçam Madran Suyu</span>
              <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">7.50 pH</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Madran Dağı’nın kadife yumuşaklığındaki içimi sayesinde çayınızı ve kahvenizi kireçsiz, berrak ve enfes lezzette demler.
            </p>
            <div className="text-xs text-emerald-200 font-semibold flex items-center gap-1.5">
              <FaIcon name="fa-solid fa-circle-check" className="text-emerald-400" />
              <span>İpeksi Yumuşak İçim Garantisi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/70 shadow-sm space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Kötekli Su Siparişi Hakkında Sıkça Sorulan Sorular
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-indigo-600" />
              <span>4. katta asansör yok, su kapıya kadar çıkarılır mı?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Evet! {COMPANY_NAME} olarak asansörsüz apartmanlarda dahi kat farkı almadan damacanayı doğrudan kapınızın önüne teslim ediyoruz.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-indigo-600" />
              <span>Öğrenci evinde boş damacana yoksa ne yapmalıyım?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              İlk kez damacana alıyorsanız uygun depozito bedeliyle yeni damacana temin edebilir veya manuel su pompasıyla birlikte set olarak sipariş verebilirsiniz.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-indigo-600" />
              <span>Farklı bir marka boş damacana kabul ediliyor mu?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Kesinlikle evet. Elinizdeki herhangi bir tanınmış marka polikarbon boş damacanayı ücretsiz olarak Akdoruk veya Topçam ile değiştiriyoruz.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-indigo-600" />
              <span>Kötekli’ye teslimat süresi ortalama kaç dakikadır?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Kötekli ve Ortaköy bölgesinde sürekli hareket halinde dağıtım aracımız olduğundan siparişiniz yoğunluğa bağlı olarak 30-45 dakika içinde kapınızdadır.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Box */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-black">Kötekli’de Susuz Kalmayın!</h3>
        <p className="text-indigo-100 max-w-xl mx-auto text-sm sm:text-base">
          WhatsApp üzerinden apart adınızı ve daire numaranızı yazın, suyunuz anında kapınıza gelsin.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={customWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-white text-indigo-950 font-bold text-sm shadow-md hover:bg-indigo-50 transition-colors flex items-center gap-2"
          >
            <FaIcon name="fa-brands fa-whatsapp" className="text-emerald-600 text-base" />
            <span>WhatsApp ile Kötekli Sipariş</span>
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="px-6 py-3.5 rounded-2xl bg-indigo-950/60 border border-white/30 text-white font-bold text-sm hover:bg-indigo-950/80 transition-colors flex items-center gap-2"
          >
            <FaIcon name="fa-solid fa-phone" className="text-sky-300 text-sm" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
