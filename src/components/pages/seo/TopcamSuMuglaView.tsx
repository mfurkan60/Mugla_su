import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, createWhatsAppUrl, COMPANY_NAME, BRANDS_INFO, PRODUCTS } from '../../../data/content';
import { PageId } from '../../../types';
import { FaIcon } from '../../common/FaIcon';

interface ViewProps {
  onNavigate: (page: PageId) => void;
}

export const TopcamSuMuglaView: React.FC<ViewProps> = ({ onNavigate }) => {
  const topcamProducts = PRODUCTS.filter((p) => p.brand === 'Topçam');
  const customWhatsAppUrl = createWhatsAppUrl(
    'Merhaba, Topçam Doğal Kaynak Suyu siparişi vermek istiyorum. Muğla Ortaköy adresime teslimat yapabilir misiniz?'
  );

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="seo-topcam-su-page">
      {/* Breadcrumb Navigation with URL Path */}
      <nav className="flex items-center text-xs font-semibold text-slate-500 gap-1.5 flex-wrap" aria-label="Breadcrumb">
        <button onClick={() => onNavigate('anasayfa')} className="hover:text-blue-700 transition-colors cursor-pointer">
          Anasayfa
        </button>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-slate-400">SEO & Bölgesel Sayfalar</span>
        <FaIcon name="fa-solid fa-chevron-right" className="text-[10px] text-slate-400" />
        <span className="text-emerald-700 font-bold">Topçam Su Muğla Siparişi</span>
        <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-mono ml-2">
          #topcam-su-mugla-siparisi
        </span>
      </nav>

      {/* Hero Header */}
      <header className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white p-8 sm:p-14 lg:p-16 border border-white/20 shadow-2xl">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <FaIcon name="fa-solid fa-mountain" className="text-emerald-300 text-xs" />
            <span>Madran Dağı Efsanesi • Muğla Ortaköy Yetkili Bayisi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Topçam Su Muğla Siparişi: <span className="text-emerald-300">Madran Kaynak Suyu</span> Kapınızda
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/95 leading-relaxed font-normal">
            Aydın Madran Dağı’nın el değmemiş zirvelerinden süzülen <strong>Topçam Doğal Kaynak Suyu</strong> (7.50 pH), ipeksi yumuşak içimi ve dengeli mineral profiliyle {COMPANY_NAME} yetkili bayisi güvencesiyle Muğla Menteşe, Ortaköy ve sitelerine teslim edilmektedir.
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
              <span>WhatsApp’tan Topçam Su Sipariş Et</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-sm sm:text-base shadow-lg transition-all group"
            >
              <FaIcon name="fa-solid fa-phone" className="text-emerald-600 text-sm group-hover:scale-110 transition-transform" />
              <span>Hemen Ara: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-emerald-100">
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-droplet" className="text-emerald-300 text-sm" />
            <span>7.50 pH İpeksi Yumuşak İçim</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-mountain" className="text-emerald-300 text-sm" />
            <span>Tescilli Madran Kaynağı</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-truck-fast" className="text-emerald-300 text-sm" />
            <span>Ortaköy’e Hızlı Ring Servis</span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon name="fa-solid fa-shield-halved" className="text-emerald-300 text-sm" />
            <span>Orijinal Mühürlü Damacana</span>
          </div>
        </div>
      </header>

      {/* Brand Story & Why Topçam */}
      <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-lg space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
            Neden Topçam Madran Suyu?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ege’nin Asırlık Damak Tadı: Doğal Mineralli ve Yumuşak İçimli Su
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Madran Dağı’nın granit kaya katmanlarından doğal olarak süzülen Topçam Suyu, düşük sodyum oranı ve kalsiyum-magnezyum dengesi sayesinde mideyi yormaz, gün boyu rahatça içilebilir. Çay ve kahve demlerken kireç bırakmaz, içeceklerin gerçek lezzetini ortaya çıkarır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
              <FaIcon name="fa-solid fa-mug-hot" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Çay ve Kahvede Mükemmel Lezzet</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Topçam Suyu'nun dengeli sertlik derecesi, demlenen çayın berrak ve parlak olmasını, kokusunun ise tam kıvamında kalmasını sağlar.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
              <FaIcon name="fa-solid fa-baby" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Bebekler ve Aile İçin Güvenli</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Düşük sodyum (Na) içeriği sayesinde bebek maması hazırlamakta ve tansiyon hassasiyeti olan aile fertlerinde güvenle tercih edilebilir.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-white/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
              <FaIcon name="fa-solid fa-bottle-water" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Cam ve Polikarbon Seçenekleri</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              19L klasik damacananın yanı sıra 15L Doğal Cam Damacana seçeneği ile sofranıza hijyenik ve çevre dostu lezzet sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Topçam Mineral Analysis Table */}
      <section className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 mb-8">
          <span className="text-xs font-bold text-emerald-300 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider border border-white/15">
            T.C. Sağlık Bakanlığı Tescilli Analiz
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Topçam Doğal Kaynak Suyu Analiz Raporu
          </h2>
          <p className="text-emerald-200 text-sm leading-relaxed">
            Kaynak noktasından el değmeden dolum yapılan Topçam suyunun resmi laboratuvar değerleri:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {BRANDS_INFO['Topçam'].minerals.map((m, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
              <div className="text-[11px] text-emerald-300 font-bold uppercase">{m.name}</div>
              <div className="text-2xl font-black text-white mt-1">
                {m.amount} <span className="text-xs font-normal text-emerald-200">{m.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Options */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Topçam Ürün Ailesi</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Ortaköy ve Muğla’ya Dağıtılan Topçam Ürünleri
            </h2>
          </div>
          <button
            onClick={() => onNavigate('iletisim')}
            className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
          >
            <span>İletişime Geç</span>
            <FaIcon name="fa-solid fa-arrow-right" className="text-xs" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topcamProducts.slice(0, 3).map((product) => (
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
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg">
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
                <span className="text-xs font-bold text-emerald-700">Ortaköy Stokta</span>
                <a
                  href={createWhatsAppUrl(`Merhaba, Topçam ${product.name} siparişi vermek istiyorum. Ortaköy teslimatınız var mı?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
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
          Muğla Topçam Su Hakkında Sıkça Sorulan Sorular
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-emerald-600" />
              <span>Evimde başka marka boş damacana var, değişim yapılır mı?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Evet! Standart polikarbon boş damacanalarınız marka fark etmeksizin hiçbir ek depozito ücreti alınmadan Topçam Su damacanasıyla birebir değiştirilir.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-emerald-600" />
              <span>Muğla Ortaköy’e teslimat süresi ne kadardır?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Ortaköy ve yakın sitelere araçlarımız gün boyu ring servisi yapmaktadır. Genellikle 25 ile 45 dakika içinde kapınıza ulaştırılır.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-emerald-600" />
              <span>Apartmanlarda üst katlara teslimatta ek kat farkı var mı?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Kesinlikle hayır. Asansörlü veya asansörsüz tüm binalarda daire kapınıza kadar teslim ediyor ve kat farkı ücreti talep etmiyoruz.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-white/90">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaIcon name="fa-solid fa-circle-question" className="text-emerald-600" />
              <span>Cam damacana siparişi verebilir miyim?</span>
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Evet, Topçam 15L Doğal Cam Damacana ürünümüz mevcuttur. Cam damacana pompası veya sebiliyle birlikte kapınıza teslim edilmektedir.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Box */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-black">Topçam Madran Suyunu Hemen Deneyin</h3>
        <p className="text-emerald-100 max-w-xl mx-auto text-sm sm:text-base">
          Muğla Ortaköy’ün her noktasına gün içi teslimat. WhatsApp veya telefonla anında sipariş oluşturun.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={customWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-white text-emerald-900 font-bold text-sm shadow-md hover:bg-emerald-50 transition-colors flex items-center gap-2"
          >
            <FaIcon name="fa-brands fa-whatsapp" className="text-emerald-600 text-base" />
            <span>WhatsApp Sipariş</span>
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="px-6 py-3.5 rounded-2xl bg-emerald-950/60 border border-white/30 text-white font-bold text-sm hover:bg-emerald-950/80 transition-colors flex items-center gap-2"
          >
            <FaIcon name="fa-solid fa-phone" className="text-emerald-300 text-sm" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
