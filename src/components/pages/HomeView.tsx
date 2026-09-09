import React, { useState } from "react";
import { PageId, WaterBrand } from "../../types";
import {
  PRODUCTS,
  PHONE_NUMBER,
  PHONE_TEL,
  createWhatsAppUrl,
  COMPANY_NAME,
  BRANDS_INFO,
  BRAND_BADGE,
  DELIVERY_AREAS,
} from "../../data/content";
import { FaIcon } from "../common/FaIcon";

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [selectedBrand, setSelectedBrand] = useState<"all" | WaterBrand>("all");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeShowcaseBrand, setActiveShowcaseBrand] =
    useState<WaterBrand>("Akdoruk");

  const currentShowcase = BRANDS_INFO[activeShowcaseBrand];
  const quickWhatsAppUrl = createWhatsAppUrl(
    "Merhaba, Muğla Ortaköy için Akdoruk ve Topçam Su siparişi vermek istiyorum.",
  );

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedBrand !== "all" && product.brand !== selectedBrand)
      return false;
    if (activeCategory === "all") return true;
    if (activeCategory === "damacana")
      return product.category === "Damacana Su";
    if (activeCategory === "cam") return product.category === "Cam Seri";
    if (activeCategory === "pet") {
      return (
        product.category === "Pratik Boy" ||
        product.category === "Geniş Hacim" ||
        product.category === "Tek İçimlik" ||
        product.category === "Sofralık Boy"
      );
    }
    if (activeCategory === "bardak")
      return product.category === "Etkinlik & İkram";
    return true;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-12" id="home-page-container">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8"
        id="hero-section"
      >
        <div className="relative max-w-7xl mx-auto rounded-[36px] overflow-hidden bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-slate-900/85 backdrop-blur-2xl border border-white/30 text-white py-14 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16 shadow-2xl shadow-sky-950/15">
          {/* Subtle background image overlay */}
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
            <img
              src="/assets/akdoruk-su-urunleri.jpg"
              alt="Akdoruk doğal kaynak suyu ürünleri ve 19 litre damacana"
              className="w-full h-full object-cover"
              width="1024"
              height="1024"
              fetchPriority="high"
            />
          </div>

          <div className="relative max-w-3xl space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-sky-200 text-xs sm:text-sm font-semibold tracking-wide animate-water-pulse">
              <FaIcon
                name="fa-solid fa-wand-magic-sparkles"
                className="text-cyan-300 text-xs"
              />
              <span>{BRAND_BADGE} • Muğla Ortaköy Hızlı Servis</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Ortaköy’de <span className="text-sky-300">Akdoruk</span> &{" "}
              <span className="text-emerald-300">Topçam Su</span> Kapınızda
            </h1>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal max-w-2xl">
              {COMPANY_NAME} güvencesiyle 8.16 pH yüksek alkali{" "}
              <strong>Akdoruk Doğal Kaynak Suyu</strong> ve Madran Dağı’nın
              efsane yumuşak içimli <strong>Topçam Doğal Kaynak Suyu</strong>{" "}
              ürünlerini haftanın 7 günü Muğla Ortaköy, siteler ve hanelerinize
              kat farkı gözetmeksizin teslim ediyoruz.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 border border-white/30 transition-all cursor-pointer text-center group"
                id="hero-btn-whatsapp"
              >
                <FaIcon
                  name="fa-brands fa-whatsapp"
                  className="text-xl group-hover:scale-115 transition-transform"
                />
                <span>WhatsApp ile Sipariş Ver</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/90 hover:bg-white text-blue-950 font-bold text-base shadow-lg shadow-blue-950/20 backdrop-blur-md border border-white transition-all text-center group"
                id="hero-btn-phone"
              >
                <FaIcon
                  name="fa-solid fa-phone-volume"
                  className="text-blue-600 text-base group-hover:scale-110 transition-transform"
                />
                <span>Telefon: {PHONE_NUMBER}</span>
              </a>
            </div>

            {/* Trust bullet points */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/20 text-blue-100 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <FaIcon
                  name="fa-solid fa-truck-fast"
                  className="text-cyan-300 text-sm shrink-0"
                />
                <span>30-45 Dk Teslimat</span>
              </div>
              <div className="flex items-center gap-2">
                <FaIcon
                  name="fa-solid fa-shield-halved"
                  className="text-cyan-300 text-sm shrink-0"
                />
                <span>Akdoruk (8.16) & Topçam (7.5)</span>
              </div>
              <div className="flex items-center gap-2">
                <FaIcon
                  name="fa-solid fa-clock"
                  className="text-cyan-300 text-sm shrink-0"
                />
                <span>Haftanın 7 Günü</span>
              </div>
              <div className="flex items-center gap-2">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-cyan-300 text-sm shrink-0"
                />
                <span>Kat Farkı Yok</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Animated Ticker Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20 overflow-hidden">
        <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl py-3 px-4 shadow-md overflow-hidden flex items-center">
          <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-blue-700">
              <FaIcon name="fa-solid fa-droplet" className="text-cyan-500" />
              Yetkili Akdoruk & Topçam Su Bayisi
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-blue-700">
              <FaIcon name="fa-solid fa-mountain" className="text-blue-500" />
              Akdoruk: 8.16 pH Yüksek Doğal Alkali
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-700">
              <FaIcon name="fa-solid fa-leaf" className="text-emerald-500" />
              Topçam Madran: 7.50 pH İpeksi Yumuşak İçim
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-blue-800">
              <FaIcon
                name="fa-solid fa-location-dot"
                className="text-rose-500"
              />
              Muğla Menteşe • Ortaköy • Kötekli
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-purple-700">
              <FaIcon
                name="fa-solid fa-truck-fast"
                className="text-purple-500"
              />
              Kat Farkı Yok • Hızlı Kapıya Teslim
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-700">
              <FaIcon name="fa-solid fa-phone" className="text-blue-600" />
              Sipariş Hattı: {PHONE_NUMBER}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-cyan-700">
              <FaIcon
                name="fa-solid fa-shield-halved"
                className="text-cyan-600"
              />
              Orijinal Emniyet Kilitli Damacanalar
            </span>
          </div>
        </div>
      </div>

      {/* Value Pillars */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="features-section"
      >
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs">
            Neden Muğla Su?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Sağlıklı, Hijyenik ve Kesintisiz Su Hizmeti
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Muğla Ortaköy’de su tedariğinizi güvenli ve zahmetsiz hale getiren
            standartlarımız
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-white/45 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/70 shadow-lg shadow-sky-950/5 hover:bg-white/65 hover:border-white/90 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-blue-700 flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform">
              <FaIcon
                name="fa-solid fa-droplet"
                className="text-xl text-blue-600"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Doğal ve Zengin Mineralli
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Doğanın kalbinden el değmeden şişelenen, dengeli mineral yapısı ve
              8.16 alkali pH değeriyle ailenizin güvenle içeceği taze kaynak
              suyu.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2 text-blue-700 font-medium">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-xs text-blue-600"
                />
                <span>Hafif ve lezzetli içim</span>
              </li>
              <li className="flex items-center gap-2 text-blue-700 font-medium">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-xs text-blue-600"
                />
                <span>Çay ve yemeklerde berrak tat</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white/45 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/70 shadow-lg shadow-sky-950/5 hover:bg-white/65 hover:border-white/90 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-cyan-700 flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform">
              <FaIcon
                name="fa-solid fa-truck-fast"
                className="text-xl text-cyan-600"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Kapınıza Kadar Taşıma
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Ortaköy'ün tepeleri, siteleri veya apartmanlarında kat ayrımı
              yapmadan; asansörlü veya merdivenli tüm dairelerin kapısına kadar
              servis sağlıyoruz.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2 text-cyan-700 font-medium">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-xs text-cyan-600"
                />
                <span>Sıfır ek taşıma ücreti</span>
              </li>
              <li className="flex items-center gap-2 text-cyan-700 font-medium">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-xs text-cyan-600"
                />
                <span>Daire kapısına nazik teslimat</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white/45 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/70 shadow-lg shadow-sky-950/5 hover:bg-white/65 hover:border-white/90 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-emerald-700 flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform">
              <FaIcon
                name="fa-solid fa-shield-halved"
                className="text-xl text-emerald-600"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Her Damacanada Yüksek Hijyen
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Dönüşümlü damacanalar özel sterilizasyon istasyonlarında çok
              aşamalı arıtma ve dezenfeksiyon testlerinden geçtikten sonra
              emniyet bandıyla mühürlenir.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2 text-emerald-700 font-medium">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-xs text-emerald-600"
                />
                <span>Gıda kodeksine %100 uygun</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-700 font-medium">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-xs text-emerald-600"
                />
                <span>Özel emniyet kapak bandı</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Akdoruk & Topçam Doğal Kaynak Suyu Çift Marka Özel Tanıtım & Mineral Analiz Bölümü */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="brands-showcase"
      >
        <div className="bg-gradient-to-br from-white/85 via-white/70 to-sky-50/80 backdrop-blur-2xl rounded-[36px] border border-white/80 p-6 sm:p-12 lg:p-14 shadow-2xl shadow-sky-950/5 relative overflow-hidden">
          {/* Brand Switcher Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/80 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-200">
                Resmi İki Büyük Kaynak Suyu Markası
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Hangi Suyu Tercih Edersiniz?
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Ortaköy’de damak tadınıza ve mineral ihtiyacınıza göre Akdoruk
                veya Topçam Su siparişi verebilirsiniz.
              </p>
            </div>

            {/* Brand Toggle Tabs */}
            <div className="flex items-center p-1.5 rounded-2xl bg-slate-100/80 backdrop-blur-md border border-white shadow-inner">
              <button
                type="button"
                onClick={() => setActiveShowcaseBrand("Akdoruk")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeShowcaseBrand === "Akdoruk"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FaIcon
                  name="fa-solid fa-droplet"
                  className={
                    activeShowcaseBrand === "Akdoruk"
                      ? "text-cyan-200"
                      : "text-blue-500"
                  }
                />
                <span>Akdoruk Su (8.16 pH)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveShowcaseBrand("Topçam")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeShowcaseBrand === "Topçam"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FaIcon
                  name="fa-solid fa-leaf"
                  className={
                    activeShowcaseBrand === "Topçam"
                      ? "text-emerald-200"
                      : "text-emerald-500"
                  }
                />
                <span>Topçam Madran Su (7.50 pH)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/80 h-72 sm:h-96 group">
                <img
                  src={currentShowcase.imageUrl}
                  alt={`${currentShowcase.name} Kaynak Pınarı`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width="800"
                  height="600"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-blue-900/90 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
                  <FaIcon
                    name="fa-solid fa-award"
                    className="text-amber-400 text-xs"
                  />
                  <span>Yetkili Satış & Dağıtım Noktası</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs text-sky-300 font-bold tracking-wider uppercase block">
                    {currentShowcase.source}
                  </span>
                  <p className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                    {currentShowcase.name}
                  </p>
                  <p className="text-xs text-blue-100/90 mt-1">
                    {currentShowcase.highlight}
                  </p>
                </div>
              </div>

              {/* Floating pH badge */}
              <div className="absolute -bottom-4 -right-2 sm:right-4 min-w-[210px] bg-white/95 backdrop-blur-xl border border-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float-slow">
                <div
                  className={`w-10 h-10 rounded-xl text-white flex items-center justify-center font-extrabold text-sm shadow-sm shrink-0 ${
                    activeShowcaseBrand === "Akdoruk"
                      ? "bg-gradient-to-br from-blue-600 to-sky-500"
                      : "bg-gradient-to-br from-emerald-600 to-teal-500"
                  }`}
                >
                  {currentShowcase.ph}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                    {activeShowcaseBrand === "Akdoruk"
                      ? "Doğal Alkali"
                      : "Yumuşak Denge"}
                  </div>
                  <div className="text-xs font-extrabold text-blue-950">
                    {activeShowcaseBrand === "Akdoruk"
                      ? "Yüksek 8.16 pH"
                      : "İpeksi 7.50 pH"}
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Facts */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border mb-3 ${
                    activeShowcaseBrand === "Akdoruk"
                      ? "text-blue-800 bg-blue-100/80 border-blue-200/80"
                      : "text-emerald-800 bg-emerald-100/80 border-emerald-200/80"
                  }`}
                >
                  <FaIcon
                    name="fa-solid fa-award"
                    className={
                      activeShowcaseBrand === "Akdoruk"
                        ? "text-blue-600"
                        : "text-emerald-600"
                    }
                  />
                  <span>Yetkili Bayi • {currentShowcase.name}</span>
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {currentShowcase.fullName}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                  {currentShowcase.description}
                </p>
              </div>

              {/* 4 Feature Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentShowcase.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/70 border border-white/90 shadow-xs"
                  >
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <FaIcon
                        name="fa-solid fa-circle-check"
                        className={`text-sm shrink-0 ${
                          activeShowcaseBrand === "Akdoruk"
                            ? "text-blue-600"
                            : "text-emerald-600"
                        }`}
                      />
                      <span>{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate("iletisim")}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white font-bold text-sm shadow-md transition-all cursor-pointer group ${
                    activeShowcaseBrand === "Akdoruk"
                      ? "bg-blue-600 hover:bg-blue-700 shadow-blue-600/25"
                      : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25"
                  }`}
                  id="brand-cta-order"
                >
                  <span>İletişime Geç</span>
                  <FaIcon
                    name="fa-solid fa-arrow-right"
                    className="text-xs group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <a
                  href={createWhatsAppUrl(
                    `Merhaba, yetkili bayinizden ${currentShowcase.name} siparişi vermek ve bilgi almak istiyorum.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all group"
                  id="brand-cta-whatsapp"
                >
                  <FaIcon
                    name="fa-brands fa-whatsapp"
                    className="text-base group-hover:scale-115 transition-transform"
                  />
                  <span>WhatsApp Sipariş</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sertifikalı Laboratuvar Analiz Tablosu */}
          <div className="mt-12 pt-8 border-t border-white/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                    activeShowcaseBrand === "Akdoruk"
                      ? "text-blue-700 bg-blue-100/70 border-blue-200"
                      : "text-emerald-700 bg-emerald-100/70 border-emerald-200"
                  }`}
                >
                  Laboratuvar Analizi
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {currentShowcase.name} Mineral Analiz Değerleri
                </h3>
              </div>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <FaIcon
                  name="fa-solid fa-certificate"
                  className="text-emerald-600"
                />
                T.C. Sağlık Bakanlığı Onaylı Resmi Analiz Değerleri
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {currentShowcase.minerals.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/70 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/90 shadow-xs hover:bg-white hover:shadow-md transition-all text-center group"
                >
                  <div className="text-[11px] font-bold text-slate-500 tracking-wide uppercase">
                    {item.name}
                  </div>
                  <div
                    className={`text-xl sm:text-2xl font-black mt-1 transition-colors ${
                      activeShowcaseBrand === "Akdoruk"
                        ? "text-blue-900 group-hover:text-blue-700"
                        : "text-emerald-900 group-hover:text-emerald-700"
                    }`}
                  >
                    {item.amount}
                    {item.unit && (
                      <span className="text-xs font-semibold text-slate-500 ml-0.5">
                        {item.unit}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mt-2 inline-block">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Products Section with Brand & Category Filters */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="popular-products"
      >
        <div className="bg-white/40 backdrop-blur-2xl rounded-[36px] border border-white/65 p-6 sm:p-10 lg:p-12 shadow-xl shadow-sky-950/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/80">
                Zengin Ürün Yelpazesi • 14 Farklı Seçenek
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Ortaköy Su Çeşitleri & Ambalaj Boyları
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                İster 8.16 pH alkali <strong>Akdoruk</strong>, ister Madran
                Dağı’nın efsanesi <strong>Topçam Su</strong>; damacana, cam ve
                pet boy seçenekleriyle kapınızda.
              </p>
            </div>
            <button
              onClick={() => onNavigate("iletisim")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/70 hover:bg-white backdrop-blur-md border border-white/80 text-sm font-bold text-blue-700 hover:text-blue-900 shadow-xs cursor-pointer transition-all group"
            >
              <span>İletişime Geç</span>
              <FaIcon
                name="fa-solid fa-chevron-right"
                className="text-xs group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Filter Bar 1: Brand Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-4 pb-4 border-b border-white/60">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1.5">
              <FaIcon name="fa-solid fa-filter" className="text-slate-400" />
              Marka Seçimi:
            </span>
            <button
              type="button"
              onClick={() => setSelectedBrand("all")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedBrand === "all"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white/70 hover:bg-white text-slate-700 border border-white/80"
              }`}
            >
              <span>Tüm Markalar ({PRODUCTS.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedBrand("Akdoruk")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedBrand === "Akdoruk"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white/70 hover:bg-white text-slate-700 border border-white/80"
              }`}
            >
              <FaIcon
                name="fa-solid fa-droplet"
                className={
                  selectedBrand === "Akdoruk"
                    ? "text-cyan-200"
                    : "text-blue-600"
                }
              />
              <span>Akdoruk Su (8.16 pH)</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedBrand("Topçam")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedBrand === "Topçam"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white/70 hover:bg-white text-slate-700 border border-white/80"
              }`}
            >
              <FaIcon
                name="fa-solid fa-leaf"
                className={
                  selectedBrand === "Topçam"
                    ? "text-emerald-200"
                    : "text-emerald-600"
                }
              />
              <span>Topçam Madran Su (7.50 pH)</span>
            </button>
          </div>

          {/* Filter Bar 2: Category Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              {
                id: "all",
                label: "Tüm Boylar",
                icon: "fa-solid fa-border-all",
              },
              {
                id: "damacana",
                label: "19L Damacana",
                icon: "fa-solid fa-droplet",
              },
              {
                id: "cam",
                label: "Sağlıklı Cam Seri",
                icon: "fa-solid fa-wine-bottle",
              },
              {
                id: "pet",
                label: "Pet Şişeler (5L, 10L, 0.5L)",
                icon: "fa-solid fa-bottle-water",
              },
              {
                id: "bardak",
                label: "Bardak Su (İkramlık)",
                icon: "fa-solid fa-glass-water",
              },
            ].map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-600"
                      : "bg-white/60 hover:bg-white text-slate-700 border border-white/80"
                  }`}
                >
                  <FaIcon
                    name={cat.icon}
                    className={isSelected ? "text-white" : "text-blue-600"}
                  />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const productWhatsApp = createWhatsAppUrl(
                `Merhaba, ${product.brand} - ${product.name} siparişi vermek istiyorum. `,
              );
              return (
                <div
                  key={product.id}
                  className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 overflow-hidden flex flex-col shadow-md shadow-sky-950/5 hover:bg-white/85 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="relative h-48 bg-slate-100/60 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      width="800"
                      height="600"
                      loading="lazy"
                    />
                    {/* Brand Pill Badge */}
                    <div
                      className={`absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide shadow-xs ${
                        product.brand === "Akdoruk"
                          ? "bg-blue-700/90"
                          : "bg-emerald-700/90"
                      }`}
                    >
                      {product.brand} Su
                    </div>

                    <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-xs">
                      {product.ph}
                    </div>

                    {product.isPopular && (
                      <div className="absolute bottom-3 left-3 bg-amber-500/95 backdrop-blur-md text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
                        Çok Satan
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide">
                        <span
                          className={
                            product.brand === "Akdoruk"
                              ? "text-blue-700"
                              : "text-emerald-700"
                          }
                        >
                          {product.category}
                        </span>
                        <span className="text-slate-400 font-bold">
                          {product.volume}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mt-1 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-white/60">
                      <div className="text-xs text-slate-600 flex items-center justify-between">
                        <span>
                          Kaynak:{" "}
                          <strong>
                            {product.brand === "Akdoruk"
                              ? "Zirve Pınarı"
                              : "Madran Dağı"}
                          </strong>
                        </span>
                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                          <FaIcon
                            name="fa-solid fa-circle-check"
                            className="text-emerald-600 text-xs"
                          />
                          Ortaköy Stokta
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={productWhatsApp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors group/btn"
                        >
                          <FaIcon
                            name="fa-brands fa-whatsapp"
                            className="text-sm group-hover/btn:scale-115 transition-transform"
                          />
                          <span>WhatsApp</span>
                        </a>
                        <button
                          onClick={() => onNavigate("iletisim")}
                          className="flex items-center justify-center gap-1 py-2.5 px-2.5 rounded-xl bg-white/80 hover:bg-white text-blue-900 text-xs font-bold border border-white shadow-xs transition-colors cursor-pointer"
                        >
                          <span>İletişim</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Site Su Servisi Özel Vurgusu */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="site-water-section"
      >
        <div className="bg-gradient-to-r from-blue-950/85 via-blue-900/80 to-slate-900/85 backdrop-blur-2xl rounded-[36px] border border-white/25 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-sky-200 text-xs font-bold uppercase tracking-wider">
              <FaIcon
                name="fa-solid fa-building-user"
                className="text-sky-300 text-xs"
              />
              <span>Ortaköy Siteleri & Toplu Konutlar İçin</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ortaköy'deki Sitenize Düzenli ve Güvenilir Su Servisi
            </h2>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Muğla Ortaköy’deki site yöneticileri ve site sakinleri için özel
              planlanmış su servis günleri! Sitenizde suyunuzun hiç tükenmemesi
              için haftalık sabit servis araçlarımızla kapınıza teslim ediyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-emerald-400 text-xs shrink-0"
                />
                <span>Site sakinlerine toplu sipariş kolaylığı</span>
              </div>
              <div className="flex items-center gap-2">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-emerald-400 text-xs shrink-0"
                />
                <span>Yönetimle koordineli güvenli giriş</span>
              </div>
              <div className="flex items-center gap-2">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-emerald-400 text-xs shrink-0"
                />
                <span>Boş damacana takibi ve değişimi</span>
              </div>
              <div className="flex items-center gap-2">
                <FaIcon
                  name="fa-solid fa-circle-check"
                  className="text-emerald-400 text-xs shrink-0"
                />
                <span>WhatsApp üzerinden 1 dakikada talep</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={createWhatsAppUrl(
                  "Merhaba, Muğla Ortaköy'deki sitemiz için toplu su siparişi / abonelik hakkında bilgi almak istiyorum.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 border border-white/20 transition-colors group"
              >
                <FaIcon
                  name="fa-brands fa-whatsapp"
                  className="text-base group-hover:scale-110 transition-transform"
                />
                <span>Site Su Talebi Gönder</span>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white font-semibold text-sm transition-colors group"
              >
                <FaIcon
                  name="fa-solid fa-phone-volume"
                  className="text-sky-300 text-xs group-hover:scale-110 transition-transform"
                />
                <span>Hemen Danışın</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas Preview */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="delivery-areas-overview"
      >
        <div className="bg-white/45 backdrop-blur-xl rounded-[36px] border border-white/70 p-8 sm:p-10 shadow-lg shadow-sky-950/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl font-bold text-slate-900">
                Muğla Ortaköy Servis Bölgeleri
              </h3>
              <p className="text-sm text-slate-600">
                Ortaköy mahalle sınırları içerisindeki tüm cadde, sokak ve
                sitelere servis aracımız gün boyu aktiftir.
              </p>
            </div>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shrink-0 self-start md:self-auto shadow-md shadow-blue-600/20 border border-white/30 transition-all group"
            >
              <FaIcon
                name="fa-solid fa-phone-volume"
                className="text-white text-xs group-hover:scale-110 transition-transform"
              />
              <span>Bölgemi Teyit Et: {PHONE_NUMBER}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/60">
            {DELIVERY_AREAS.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
