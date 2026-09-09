/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomeView } from './components/pages/HomeView';
import { ServicesView } from './components/pages/ServicesView';
import { HomeDeliveryView } from './components/pages/HomeDeliveryView';
import { ContactView } from './components/pages/ContactView';
import { MuglaMenteseKotekliView } from './components/pages/seo/MuglaMenteseKotekliView';
import { OrtakoySuSiparisiView } from './components/pages/seo/OrtakoySuSiparisiView';
import { IndirimliOrtakoySuSiparisiView } from './components/pages/seo/IndirimliOrtakoySuSiparisiView';
import { EnUcuzMuglaSuSiparisiView } from './components/pages/seo/EnUcuzMuglaSuSiparisiView';
import { TopcamSuMuglaView } from './components/pages/seo/TopcamSuMuglaView';
import { AkdorukSuMuglaView } from './components/pages/seo/AkdorukSuMuglaView';
import { KotekliSuSiparisiView } from './components/pages/seo/KotekliSuSiparisiView';
import { MuglaDamacanaSuFiyatlariView } from './components/pages/seo/MuglaDamacanaSuFiyatlariView';

const PAGE_SEO: Record<PageId, { title: string; description: string }> = {
  anasayfa: {
    title: 'Muğla Su Siparişi | Akdoruk & Topçam Ortaköy Bayisi',
    description: 'Muğla Menteşe, Ortaköy ve Kötekli’ye Akdoruk ve Topçam damacana su servisi. Haftanın 7 günü hızlı teslimat için arayın veya WhatsApp’tan sipariş verin.'
  },
  hizmetlerimiz: {
    title: 'Muğla Su Dağıtım Hizmetleri | Ev, Site ve İş Yeri',
    description: 'Muğla Ortaköy’de evlere, sitelere ve iş yerlerine Akdoruk ve Topçam doğal kaynak suyu dağıtımı; hızlı, hijyenik ve kat farkı olmadan teslimat.'
  },
  'evlere-servis': {
    title: 'Evlere Su Servisi Muğla Ortaköy | Hızlı Teslimat',
    description: 'Muğla Ortaköy’de evinize Akdoruk ve Topçam damacana su siparişi verin. Haftanın 7 günü 30-45 dakikada kapıya teslimat.'
  },
  iletisim: {
    title: 'Muğla Su İletişim | Ortaköy Su Sipariş Hattı',
    description: 'Muğla Ortaköy Akdoruk ve Topçam su sipariş hattı, çalışma saatleri ve adres bilgileri. Telefon: 0505 081 84 66.'
  },
  'mugla-mentese-ortakoy-kotekli-su-siparisi': { title: 'Muğla Menteşe, Ortaköy ve Kötekli Su Siparişi', description: 'Menteşe, Ortaköy ve Kötekli’de Akdoruk ve Topçam damacana suyu hızlıca kapınıza sipariş edin.' },
  'ortakoy-su-siparisi': { title: 'Ortaköy Su Siparişi | Akdoruk & Topçam Su Servisi', description: 'Muğla Ortaköy’de Akdoruk ve Topçam damacana su siparişi; kat farkı olmadan hızlı ve hijyenik teslimat.' },
  'indirimli-ortakoy-su-siparisi': { title: 'İndirimli Ortaköy Su Siparişi | Damacana Kampanyaları', description: 'Ortaköy’de avantajlı Akdoruk ve Topçam damacana su seçeneklerini inceleyin, telefon veya WhatsApp’tan sipariş verin.' },
  'en-ucuz-mugla-su-siparisi': { title: 'Uygun Fiyatlı Muğla Su Siparişi | Kapınıza Teslim', description: 'Muğla’da uygun fiyatlı damacana su siparişi, hızlı servis ve kat farkı olmadan kapıya teslimat seçenekleri.' },
  'topcam-su-mugla-siparisi': { title: 'Topçam Su Muğla Siparişi | Madran Kaynak Suyu', description: 'Topçam Madran doğal kaynak suyunu Muğla Menteşe ve Ortaköy’de hızlı servisle kapınıza sipariş edin.' },
  'akdoruk-su-mugla-siparisi': { title: 'Akdoruk Su Muğla Siparişi | Ortaköy Bayisi', description: 'Akdoruk doğal kaynak suyu ürünlerini Muğla Menteşe ve Ortaköy’de yetkili satış noktasından kapınıza sipariş edin.' },
  'kotekli-su-siparisi': { title: 'Kötekli Su Siparişi | Hızlı Damacana Servisi', description: 'Kötekli, apartlar ve MSKÜ çevresine Akdoruk ve Topçam damacana suyu hızlıca sipariş edin.' },
  'mugla-damacana-su-fiyatlari': { title: 'Muğla Damacana Su Fiyatları | Akdoruk & Topçam', description: 'Muğla’da Akdoruk ve Topçam damacana su seçenekleri ve sipariş bilgileri. Güncel fiyat için hemen iletişime geçin.' }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('anasayfa');

  // Sync state with URL hash for clean static navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'anasayfa', 
        'hizmetlerimiz', 
        'evlere-servis', 
        'iletisim',
        'mugla-mentese-ortakoy-kotekli-su-siparisi',
        'ortakoy-su-siparisi',
        'indirimli-ortakoy-su-siparisi',
        'en-ucuz-mugla-su-siparisi',
        'topcam-su-mugla-siparisi',
        'akdoruk-su-mugla-siparisi',
        'kotekli-su-siparisi',
        'mugla-damacana-su-fiyatlari'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const seo = PAGE_SEO[currentPage];
    document.title = seo.title;

    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${window.location.pathname}`;
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });

  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-900 selection:bg-sky-600 selection:text-white relative" id="ortakoy-su-app">
      {/* Header with quick SEO Page paths */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-grow" id="main-content">
        {currentPage === 'anasayfa' && <HomeView onNavigate={navigateTo} />}
        {currentPage === 'hizmetlerimiz' && <ServicesView onNavigate={navigateTo} />}
        {currentPage === 'evlere-servis' && <HomeDeliveryView onNavigate={navigateTo} />}
        {currentPage === 'iletisim' && <ContactView />}

        {/* SEO Landing Pages */}
        {currentPage === 'mugla-mentese-ortakoy-kotekli-su-siparisi' && (
          <MuglaMenteseKotekliView onNavigate={navigateTo} />
        )}
        {currentPage === 'ortakoy-su-siparisi' && (
          <OrtakoySuSiparisiView onNavigate={navigateTo} />
        )}
        {currentPage === 'indirimli-ortakoy-su-siparisi' && (
          <IndirimliOrtakoySuSiparisiView onNavigate={navigateTo} />
        )}
        {currentPage === 'en-ucuz-mugla-su-siparisi' && (
          <EnUcuzMuglaSuSiparisiView onNavigate={navigateTo} />
        )}
        {currentPage === 'topcam-su-mugla-siparisi' && (
          <TopcamSuMuglaView onNavigate={navigateTo} />
        )}
        {currentPage === 'akdoruk-su-mugla-siparisi' && (
          <AkdorukSuMuglaView onNavigate={navigateTo} />
        )}
        {currentPage === 'kotekli-su-siparisi' && (
          <KotekliSuSiparisiView onNavigate={navigateTo} />
        )}
        {currentPage === 'mugla-damacana-su-fiyatlari' && (
          <MuglaDamacanaSuFiyatlariView onNavigate={navigateTo} />
        )}
      </main>

      {/* Floating Action Buttons (Phone & WhatsApp) */}
      <FloatingActions />

      {/* Footer with SEO Sitemap Links */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
