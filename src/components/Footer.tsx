import React from 'react';
import { PageId } from '../types';
import { COMPANY_NAME, PHONE_NUMBER, PHONE_TEL, LANDLINE_NUMBER, ADDRESS_TEXT, WORKING_HOURS, createWhatsAppUrl } from '../data/content';
import { FaIcon } from './common/FaIcon';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickWhatsAppUrl = createWhatsAppUrl('Merhaba, Muğla Ortaköy için su siparişi vermek istiyorum.');

  const handleLink = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950/85 backdrop-blur-2xl text-slate-300 border-t border-white/15 relative" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <FaIcon name="fa-solid fa-droplet" className="text-white text-base" animation="beat" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Yetkili Akdoruk ve Topçam Su Bayisi güvencesiyle Muğla Ortaköy ve çevre yerleşimlerde ev, site, apartman ve işletmelere taze ve sağlıklı doğal kaynak suyu dağıtım servisi.
            </p>
            <div className="flex items-center gap-2 text-xs text-sky-300 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <FaIcon name="fa-solid fa-shield-halved" className="text-emerald-400 shrink-0 text-sm" />
              <span>Akdoruk & Topçam Yetkili Bayisi • 8.16 & 7.50 pH</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold tracking-wide">Sayfalar</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('anasayfa')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-2"
                  id="footer-link-home"
                >
                  <FaIcon name="fa-solid fa-house" className="text-xs text-slate-400" />
                  <span>Anasayfa</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('hizmetlerimiz')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-2"
                  id="footer-link-services"
                >
                  <FaIcon name="fa-solid fa-boxes-stacked" className="text-xs text-slate-400" />
                  <span>Hizmetlerimiz</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('evlere-servis')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-2"
                  id="footer-link-delivery"
                >
                  <FaIcon name="fa-solid fa-truck-fast" className="text-xs text-slate-400" />
                  <span>Evlere Su Servisi</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('iletisim')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-2"
                  id="footer-link-contact"
                >
                  <FaIcon name="fa-solid fa-location-dot" className="text-xs text-slate-400" />
                  <span>İletişim & Konum</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas in Ortaköy */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold tracking-wide">Hizmet Alanı</h3>
            <p className="text-xs text-slate-400">
              Muğla Ortaköy sınırları içerisindeki tüm site ve konutlara kapıda teslimat:
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-blue-400 text-[11px]" />
                <span>Ortaköy Köy İçi & Mahalle Merkezi</span>
              </li>
              <li className="flex items-center gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-blue-400 text-[11px]" />
                <span>Ortaköy Tepe Siteleri & Villaları</span>
              </li>
              <li className="flex items-center gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-blue-400 text-[11px]" />
                <span>Muğla - Ortaköy Bağlantı Siteleri</span>
              </li>
              <li className="flex items-center gap-2">
                <FaIcon name="fa-solid fa-circle-check" className="text-blue-400 text-[11px]" />
                <span>Bölgedeki Atölye, Şantiye ve İş Yerleri</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Phone/WhatsApp ONLY */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold tracking-wide">Hızlı İletişim</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <FaIcon name="fa-solid fa-phone-volume" className="text-blue-400 mt-1 shrink-0 text-sm" />
                <div>
                  <div className="text-xs text-slate-400">Sipariş & Bilgi Hattı</div>
                  <a href={`tel:${PHONE_TEL}`} className="font-bold text-white hover:text-blue-300 transition-colors">
                    {PHONE_NUMBER}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">Sabit Hat: {LANDLINE_NUMBER}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FaIcon name="fa-solid fa-clock" className="text-blue-400 mt-1 shrink-0 text-sm" />
                <div>
                  <div className="text-xs text-slate-400">Çalışma Saatleri</div>
                  <div className="text-white text-xs">{WORKING_HOURS}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FaIcon name="fa-solid fa-location-dot" className="text-blue-400 mt-1 shrink-0 text-sm" />
                <div>
                  <div className="text-xs text-slate-400">Adres</div>
                  <div className="text-white text-xs">{ADDRESS_TEXT}</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={quickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all group shadow-md"
                  id="footer-whatsapp-btn"
                >
                  <FaIcon name="fa-brands fa-whatsapp" className="text-lg group-hover:scale-110 transition-transform" />
                  <span>WhatsApp ile Yazın</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                * E-posta adresi bulunmamaktadır. Lütfen telefon veya WhatsApp ile ulaşınız.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Regional Quick Links Section */}
        <div className="mt-10 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <FaIcon name="fa-solid fa-map-location-dot" className="text-sky-400" />
              <span>Popüler Su Siparişi Bölgeleri & Fırsatlar</span>
            </h4>
            <span className="text-[11px] text-slate-500">Muğla Geneli Hızlı Dağıtım</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => handleLink('topcam-su-mugla-siparisi')}
              className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer"
              id="footer-seo-link-topcam"
            >
              <div className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300 flex items-center gap-1.5">
                <FaIcon name="fa-solid fa-leaf" className="text-emerald-400 text-xs" />
                <span>Topçam Su Muğla Siparişi</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Madran doğal kaynak suyu • 7.50 pH
              </div>
              <div className="text-[10px] font-mono text-emerald-400/80 mt-1">#topcam-su-mugla-siparisi</div>
            </button>

            <button
              onClick={() => handleLink('akdoruk-su-mugla-siparisi')}
              className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all group cursor-pointer"
              id="footer-seo-link-akdoruk"
            >
              <div className="text-xs font-semibold text-slate-200 group-hover:text-sky-300 flex items-center gap-1.5">
                <FaIcon name="fa-solid fa-droplet" className="text-blue-400 text-xs" />
                <span>Akdoruk Su Muğla Siparişi</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                8.16 pH yüksek alkali doğal mineralli su
              </div>
              <div className="text-[10px] font-mono text-sky-400/80 mt-1">#akdoruk-su-mugla-siparisi</div>
            </button>

            <button
              onClick={() => handleLink('kotekli-su-siparisi')}
              className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 transition-all group cursor-pointer"
              id="footer-seo-link-kotekli"
            >
              <div className="text-xs font-semibold text-slate-200 group-hover:text-indigo-300 flex items-center gap-1.5">
                <FaIcon name="fa-solid fa-graduation-cap" className="text-indigo-400 text-xs" />
                <span>Kötekli Su Siparişi (MSKÜ)</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Öğrenci apartları ve yurtlara kata teslimat
              </div>
              <div className="text-[10px] font-mono text-indigo-400/80 mt-1">#kotekli-su-siparisi</div>
            </button>

            <button
              onClick={() => handleLink('mugla-damacana-su-fiyatlari')}
              className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-500/30 transition-all group cursor-pointer"
              id="footer-seo-link-fiyatlar"
            >
              <div className="text-xs font-semibold text-slate-200 group-hover:text-amber-300 flex items-center gap-1.5">
                <FaIcon name="fa-solid fa-tags" className="text-amber-400 text-xs" />
                <span>Muğla Damacana Su Fiyatları</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                0 TL kat farkı & şeffaf güncel tarifeler
              </div>
              <div className="text-[10px] font-mono text-amber-400/80 mt-1">#mugla-damacana-su-fiyatlari</div>
            </button>

            <button
              onClick={() => handleLink('ortakoy-su-siparisi')}
              className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all group cursor-pointer"
              id="footer-seo-link-ortakoy"
            >
              <div className="text-xs font-semibold text-slate-200 group-hover:text-sky-300 flex items-center gap-1.5">
                <FaIcon name="fa-solid fa-house-chimney" className="text-sky-400 text-xs" />
                <span>Ortaköy Su Siparişi</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Ortaköy köy içi ve villalara ekspres servis
              </div>
              <div className="text-[10px] font-mono text-sky-400/80 mt-1">#ortakoy-su-siparisi</div>
            </button>

            <button
              onClick={() => handleLink('indirimli-ortakoy-su-siparisi')}
              className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer"
              id="footer-seo-link-indirimli"
            >
              <div className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300 flex items-center gap-1.5">
                <FaIcon name="fa-solid fa-percent" className="text-emerald-400 text-xs" />
                <span>İndirimli Ortaköy Su Siparişi</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Çoklu alım, site ve abonelik avantajları
              </div>
              <div className="text-[10px] font-mono text-emerald-400/80 mt-1">#indirimli-ortakoy-su-siparisi</div>
            </button>

            <button
              onClick={() => handleLink('en-ucuz-mugla-su-siparisi')}
              className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer"
              id="footer-seo-link-en-ucuz"
            >
              <div className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300 flex items-center gap-1.5">
                <FaIcon name="fa-solid fa-coins" className="text-emerald-400 text-xs" />
                <span>Muğla Su Siparişi En Ucuza Kapınızda</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Aracısız doğrudan bayi fiyatı & kat masrafsız
              </div>
              <div className="text-[10px] font-mono text-emerald-400/80 mt-1">#en-ucuz-mugla-su-siparisi</div>
            </button>

            <button
              onClick={() => handleLink('mugla-mentese-ortakoy-kotekli-su-siparisi')}
              className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all group cursor-pointer"
              id="footer-seo-link-mentese"
            >
              <div className="text-xs font-semibold text-slate-200 group-hover:text-sky-300 flex items-center gap-1.5">
                <FaIcon name="fa-solid fa-truck-ramp-box" className="text-sky-400 text-xs" />
                <span>Menteşe, Ortaköy, Kötekli Su Dağıtımı</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Merkez, kampüs ve sitelere hızlı servis
              </div>
              <div className="text-[10px] font-mono text-sky-400/80 mt-1">#mugla-mentese-ortakoy-kotekli-su-siparisi</div>
            </button>
          </div>
        </div>

        {/* Subfooter with GET Yazılım Credit */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_NAME} - Muğla Su Dağıtım & Servisi. Tüm hakları saklıdır.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs">
            <span className="text-slate-400">Muğla Menteşe Ortaköy</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Damacana & Şişe Su Satışı</span>
            <span className="text-slate-600">•</span>
            {/* Requested GET Yazılım link */}
            <a
              href="https://getsoft.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all group"
              title="GET Yazılım - getsoft.com.tr"
              id="footer-get-yazilim-link"
            >
              <FaIcon name="fa-solid fa-code" className="text-sky-400 text-xs group-hover:scale-110 transition-transform" />
              <span>GET Yazılım :</span>
              <span className="font-bold text-sky-300 group-hover:text-sky-200 underline decoration-sky-400/40 underline-offset-2">
                https://getsoft.com.tr/
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
