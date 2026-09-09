import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl, COMPANY_NAME, BRAND_NAME } from '../../../data/content';
import { PageId } from '../../../types';
import { FaIcon } from '../../common/FaIcon';

interface ViewProps {
  onNavigate: (page: PageId) => void;
}

export const OrtakoySuSiparisiView: React.FC<ViewProps> = ({ onNavigate }) => {
  const customWhatsAppUrl = createWhatsAppUrl('Merhaba, Ortaköy su siparişi vermek istiyorum. Adresime teslimat süresini öğrenebilir miyim?');

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="seo-page-ortakoy-su">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-xs font-semibold text-slate-500 gap-1.5" aria-label="Breadcrumb">
        <button onClick={() => onNavigate('anasayfa')} className="hover:text-blue-700 transition-colors cursor-pointer">
          Anasayfa
        </button>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-blue-900 font-bold">Ortaköy Su Siparişi</span>
      </nav>

      {/* Hero Header */}
      <header className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-sky-900 text-white p-8 sm:p-14 lg:p-16 border border-white/20 shadow-2xl">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-sky-200 text-xs font-bold uppercase tracking-wider">
            <FaIcon name="fa-solid fa-house" className="text-cyan-300 text-xs" />
            <span>Ortaköy Mahallesine Özel Ekspres Servis</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Ortaköy Su Siparişi: <span className="text-sky-300">Taze & Doğal Kaynak Suyu</span> Kapınızda
          </h1>

          <p className="text-base sm:text-lg text-blue-100/95 leading-relaxed font-normal">
            Muğla Ortaköy’ün yerel su bayisi olarak, yetkili <strong>{BRAND_NAME}</strong> (8.16 pH) damacana ve şişe sularını mahallenizin her sokağına, sitelerine ve müstakil evlerine anında ulaştırıyoruz.
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
              <span>WhatsApp’tan Ortaköy Su Siparişi Ver</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/95 text-blue-950 hover:bg-white font-bold text-sm sm:text-base shadow-lg backdrop-blur-md transition-all group"
            >
              <FaIcon name="fa-solid fa-phone" className="text-blue-600 text-sm group-hover:scale-110 transition-transform" />
              <span>Telefonla Ara: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-blue-100">
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-clock" className="text-cyan-300 text-sm" />
            <span>25-40 Dk İçi Hızlı Teslimat</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-droplet" className="text-cyan-300 text-sm" />
            <span>8.16 pH Alkali Değer</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-truck-fast" className="text-cyan-300 text-sm" />
            <span>Tüm Sitelerde Kapı Önü</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-shield-halved" className="text-cyan-300 text-sm" />
            <span>Orijinal Kapak Kilidi</span>
          </div>
        </div>
      </header>

      {/* Ortaköy Local Coverage Details */}
      <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-lg space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
            Ortaköy Yerel Dağıtım Ağı
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ortaköy’ün Tüm Sokak ve Sitelerine Günlük Düzenli Servis
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Ortaköy coğrafi olarak hem tepe siteleri, hem ova mevkii, hem de köy içi yerleşimini barındırır. Araçlarımız sürekli Ortaköy güzergahında ring attığı için sipariş verdiğinizde dakikalar içinde kapınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          <div className="p-5 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-2">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-location-dot" className="text-blue-600 text-sm shrink-0" />
              <span>Ortaköy Tepe & Yamaç Siteleri</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Muğla manzaralı yamaç siteleri ve kooperatif konutlarına dik yokuş veya merdiven farkı gözetmeksizin doğrudan kapı önüne kadar teslimat yapıyoruz.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-2">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-location-dot" className="text-blue-600 text-sm shrink-0" />
              <span>Köy İçi & Müstakil Evler</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ortaköy’ün geleneksel yerleşiminde yaşayan ailelerimiz için bahçe kapısına veya mutfak tezgahına kadar damacana teslimi sağlıyoruz.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-2">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-location-dot" className="text-blue-600 text-sm shrink-0" />
              <span>İşletme, Atölye & İnşaatlar</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bölgedeki marangozhaneler, oto bakım noktaları, şantiye ofisleri ve marketler için koli pet su ve sebil damacanaları toptan avantajla ulaştırılır.
            </p>
          </div>
        </div>
      </section>

      {/* Akdoruk Product Highlights for Ortakoy */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ortaköy Sakinlerinin En Çok Tercih Ettiği Akdoruk Ürünleri
          </h2>
          <p className="text-slate-600 text-sm">
            İhtiyacınıza en uygun ambalajı seçin, aynı gün hızlı teslimatla suyunuza kavuşun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/90 shadow-sm space-y-3">
            <div className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md inline-block">
              En Çok Satan
            </div>
            <h3 className="font-bold text-slate-900 text-base">Akdoruk 19L Damacana</h3>
            <p className="text-xs text-slate-600">
              8.16 pH yüksek alkali dengesiyle ev ve ofisler için ideal yumuşak içimli doğal kaynak suyu.
            </p>
            <div className="text-xs font-semibold text-blue-700">✓ Boş damacana takası geçerli</div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/90 shadow-sm space-y-3">
            <div className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-md inline-block">
              Özel Sağlık Serisi
            </div>
            <h3 className="font-bold text-slate-900 text-base">Akdoruk 19L Cam Damacana</h3>
            <p className="text-xs text-slate-600">
              Bebekler ve hassas aileler için %100 hijyenik cam ambalaj. Koruyucu sepetiyle teslim edilir.
            </p>
            <div className="text-xs font-semibold text-blue-700">✓ Saf lezzet garantisi</div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/90 shadow-sm space-y-3">
            <div className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md inline-block">
              Pratik & Depozitosuz
            </div>
            <h3 className="font-bold text-slate-900 text-base">Akdoruk 5L Pet (4\'lü Koli)</h3>
            <p className="text-xs text-slate-600">
              Çay ve yemekler için depozito derdi olmayan, taşınması kolay 4 adet 5 litrelik koli paketi.
            </p>
            <div className="text-xs font-semibold text-blue-700">✓ Ergonomik kulp</div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/90 shadow-sm space-y-3">
            <div className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md inline-block">
              Yemek Masalarına
            </div>
            <h3 className="font-bold text-slate-900 text-base">Akdoruk 0.5L & 1.5L Pet</h3>
            <p className="text-xs text-slate-600">
              Günlük çantada taşıma, araç içi veya misafir ikramları için hijyenik koli ambalajlar.
            </p>
            <div className="text-xs font-semibold text-blue-700">✓ 24\'lü ve 12\'li koliler</div>
          </div>
        </div>
      </section>

      {/* Step by step order in Ortakoy */}
      <section className="bg-gradient-to-r from-blue-900 to-sky-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center">
          Ortaköy’de Su Siparişi Nasıl Verilir?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
            <div className="w-10 h-10 rounded-full bg-cyan-400 text-blue-950 font-extrabold flex items-center justify-center mx-auto text-lg">
              1
            </div>
            <h3 className="font-bold text-base">İletişim Kanalını Seçin</h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              0505 081 84 66 numaramızı doğrudan arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
            <div className="w-10 h-10 rounded-full bg-cyan-400 text-blue-950 font-extrabold flex items-center justify-center mx-auto text-lg">
              2
            </div>
            <h3 className="font-bold text-base">Ortaköy Adresinizi Bildirin</h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              Site adı, blok veya sokak numaranızı ve istediğiniz Akdoruk su çeşidini belirtin.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
            <div className="w-10 h-10 rounded-full bg-cyan-400 text-blue-950 font-extrabold flex items-center justify-center mx-auto text-lg">
              3
            </div>
            <h3 className="font-bold text-base">Kapıda Teslim Alın</h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              Servis personelimiz suyunu kapınıza getirir. İster nakit, ister kredi kartı ile kapıda ödeyin.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('iletisim')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-blue-950 font-bold text-sm sm:text-base hover:bg-sky-50 shadow-lg transition-all cursor-pointer group"
          >
            <span>Hemen Ortaköy Su Siparişi Ver</span>
            <FaIcon name="fa-solid fa-arrow-right" className="text-xs group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Internal SEO Links */}
      <section className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-xs text-slate-600 space-y-2">
        <div className="font-bold text-slate-800 text-sm">Diğer Popüler Hizmetlerimiz:</div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => onNavigate('mugla-mentese-ortakoy-kotekli-su-siparisi')} className="text-blue-700 hover:underline font-semibold cursor-pointer">
            Menteşe, Ortaköy, Kötekli Su Siparişi →
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
