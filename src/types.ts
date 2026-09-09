export type PageId = 
  | 'anasayfa' 
  | 'hizmetlerimiz' 
  | 'evlere-servis' 
  | 'iletisim'
  | 'mugla-mentese-ortakoy-kotekli-su-siparisi'
  | 'ortakoy-su-siparisi'
  | 'indirimli-ortakoy-su-siparisi'
  | 'en-ucuz-mugla-su-siparisi'
  | 'topcam-su-mugla-siparisi'
  | 'akdoruk-su-mugla-siparisi'
  | 'kotekli-su-siparisi'
  | 'mugla-damacana-su-fiyatlari';

export type WaterBrand = 'Akdoruk' | 'Topçam';

export interface ProductItem {
  id: string;
  name: string;
  brand: WaterBrand;
  category: string;
  volume: string;
  ph: string;
  priceApprox?: string;
  description: string;
  features: string[];
  imageUrl: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
}
