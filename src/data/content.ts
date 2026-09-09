import { ProductItem, ServiceItem, WaterBrand } from '../types';

export const COMPANY_NAME = 'Muğla Su';
export const BRAND_NAME = 'Akdoruk & Topçam Doğal Kaynak Suları';
export const BRAND_BADGE = 'Yetkili Akdoruk & Topçam Su Bayisi';
export const REGION_NAME = 'Muğla Ortaköy';
export const PHONE_NUMBER = '0505 081 84 66';
export const PHONE_TEL = '+905050818466';
export const PHONE_NUMBER_RAW = '905050818466';
export const LANDLINE_NUMBER = '0 (252) 214 00 00';
export const ADDRESS_TEXT = 'Ortaköy Mahallesi, Menteşe / Muğla';
export const WORKING_HOURS = 'Haftanın 7 Günü: 08:30 - 20:00';

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(message)}`;
}

export interface MineralValue {
  name: string;
  symbol: string;
  amount: string;
  unit: string;
  desc: string;
}

export interface BrandDetail {
  id: WaterBrand;
  name: string;
  fullName: string;
  source: string;
  ph: string;
  highlight: string;
  description: string;
  badge: string;
  features: string[];
  imageUrl: string;
  minerals: MineralValue[];
}

export const AKDORUK_MINERALS: MineralValue[] = [
  { name: 'Alkali pH', symbol: 'pH', amount: '8.16', unit: '', desc: 'Doğal Yüksek Alkali' },
  { name: 'Kalsiyum', symbol: 'Ca²⁺', amount: '46.2', unit: 'mg/L', desc: 'Kemik & Hücre Desteği' },
  { name: 'Magnezyum', symbol: 'Mg²⁺', amount: '12.8', unit: 'mg/L', desc: 'Kas & Kalp Dengesi' },
  { name: 'Düşük Sodyum', symbol: 'Na⁺', amount: '4.1', unit: 'mg/L', desc: 'Tansiyon & Diyet Dostu' },
  { name: 'Bikarbonat', symbol: 'HCO₃⁻', amount: '185.0', unit: 'mg/L', desc: 'Hızlı Sindirim & Ferahlık' },
  { name: 'Sertlik', symbol: 'dH', amount: '6.8', unit: '°dH', desc: 'İpeksi Yumuşak İçim' }
];

export const TOPCAM_MINERALS: MineralValue[] = [
  { name: 'Dengeli pH', symbol: 'pH', amount: '7.50', unit: '', desc: 'Doğal İdeal Denge' },
  { name: 'Kalsiyum', symbol: 'Ca²⁺', amount: '38.4', unit: 'mg/L', desc: 'Zengin Dağ Kaynağı' },
  { name: 'Magnezyum', symbol: 'Mg²⁺', amount: '8.9', unit: 'mg/L', desc: 'Hafif & Canlandırıcı' },
  { name: 'Düşük Sodyum', symbol: 'Na⁺', amount: '3.2', unit: 'mg/L', desc: 'Diyet & Kalp Dostu' },
  { name: 'Bikarbonat', symbol: 'HCO₃⁻', amount: '142.0', unit: 'mg/L', desc: 'Mideyi Yormayan Doğallık' },
  { name: 'Sertlik', symbol: 'dH', amount: '5.4', unit: '°dH', desc: 'Efsane Yumuşak Çay/Kahve' }
];

export const BRANDS_INFO: Record<WaterBrand, BrandDetail> = {
  Akdoruk: {
    id: 'Akdoruk',
    name: 'Akdoruk Su',
    fullName: 'Akdoruk Doğal Kaynak Suyu',
    source: 'Yüksek Dağ Zirve Kaynağı',
    ph: '8.16 pH',
    highlight: '8.16 pH Doğal Yüksek Alkali & Zengin Mineralli',
    badge: 'Yüksek Alkali',
    description: 'El değmeden tam otomatik modern tesislerde şişelenen, yüksek alkali dengesi ve ferahlatıcı lezzetiyle Muğla\'nın vazgeçilmezi.',
    features: [
      '8.16 pH yüksek doğal alkali dengesi',
      'Zengin kalsiyum ve magnezyum mineral zenginliği',
      'Tam otomatik hijyenik dolum tesisleri',
      'Hücresel hidrasyon ve sindirim dostu yapı'
    ],
    imageUrl: '/assets/hero.jpg',
    minerals: AKDORUK_MINERALS
  },
  'Topçam': {
    id: 'Topçam',
    name: 'Topçam Madran Su',
    fullName: 'Topçam Madran Doğal Kaynak Suyu',
    source: 'Madran Dağı Zirve Pınarı',
    ph: '7.50 pH',
    highlight: 'Madran Dağı’nın Efsane İpeksi Yumuşak İçimi',
    badge: 'Madran Zirvesi',
    description: 'Ege’nin asırlık efsanesi Madran Dağı’nın el değmemiş zirve pınarından doğan, çayda ve kahvede eşsiz berraklık sunan yumuşacık kaynak lezzeti.',
    features: [
      'Madran Dağı\'nın granit kayaçlarından süzülen saflık',
      '7.50 pH dengeli ve boğazı yakmayan ipeksi yumuşak içim',
      'Çay ve kahvede tortu bırakmayan berrak demleme',
      '3.2 mg/L ultra düşük sodyum oranıyla tansiyon dostu'
    ],
    imageUrl: '/assets/topçam_services2.jpeg',
    minerals: TOPCAM_MINERALS
  }
};

export const PRODUCTS: ProductItem[] = [
  // AKDORUK ÜRÜNLERİ
  {
    id: 'akdoruk-damacana-19l',
    name: 'Akdoruk 19L Doğal Kaynak Damacana Su',
    brand: 'Akdoruk',
    category: 'Damacana Su',
    volume: '19 Litre',
    ph: '8.16 pH',
    description: 'Akdoruk’un yüksek dağ zirvelerinden gelen 8.16 pH alkali doğal kaynak suyu. Muğla Ortaköy ev ve iş yerleri için en çok tercih edilen taze lezzet.',
    features: [
      'Akdoruk orijinal güvenlik emniyet kilitli kapak',
      'pH 8.16 yüksek alkali ve zengin mineralli yapı',
      'Ortaköy bölgesine 30-45 dk hızlı teslimat',
      'Boş damacana değişimiyle anında teslim'
    ],
    imageUrl: '/assets/services_2.jpeg',
    isPopular: true
  },
  {
    id: 'akdoruk-cam-damacana-19l',
    name: 'Akdoruk 19L Sağlıklı Cam Damacana Su',
    brand: 'Akdoruk',
    category: 'Cam Seri',
    volume: '19 Litre',
    ph: '8.16 pH',
    description: 'Akdoruk eşsiz lezzetini %100 sağlıklı camın saflığıyla buluşturan, bebekler ve aileler için en hijyenik su tercihi.',
    features: [
      '%100 Hijyenik ve koku/tat bırakmayan cam ambalaj',
      'Özel koruyucu sepeti ile kapınıza güvenli teslimat',
      'Doğal dağ pınarı mineral dengesini en üst düzeyde korur',
      'Düzenli sterilizasyon ve hijyen denetimi'
    ],
    imageUrl: '/assets/hero.jpg',
    isPopular: false
  },
  {
    id: 'akdoruk-pet-5l-koli',
    name: 'Akdoruk 5L Pet Su (4\'lü Koli)',
    brand: 'Akdoruk',
    category: 'Pratik Boy',
    volume: '4 x 5 Litre',
    ph: '8.16 pH',
    description: 'Mutfakta yemek yaparken, çay demlerken veya seyahatlerde kolay taşınabilir Akdoruk kaynak suyu paketi.',
    features: [
      'Ergonomik tutma kulbu ile kolay kullanım',
      'Yemek ve çay için mükemmel yumuşak içim',
      'BPA içermeyen güvenilir gıda sınıfı ambalaj',
      '4 adet 5L ekonomik koli avantajı'
    ],
    imageUrl: '/assets/services_.jpg',
    isPopular: true
  },
  {
    id: 'akdoruk-pet-10l-koli',
    name: 'Akdoruk 10L Pet Su (2\'li Koli)',
    brand: 'Akdoruk',
    category: 'Geniş Hacim',
    volume: '2 x 10 Litre',
    ph: '8.16 pH',
    description: 'Kalabalık aileler, şantiyeler ve yoğun su tüketen haneler için ekonomik ve pratik depozitosuz Akdoruk suyu.',
    features: [
      '10 Litrelik geniş depozitosuz ambalaj',
      'Tüm manuel pompalar ve sebillerle uyumlu',
      '2\'li koli halinde kapınıza kadar servis',
      'Yüksek mineral ve zengin magnezyum'
    ],
    imageUrl: '/assets/hero.jpg',
    isPopular: false
  },
  {
    id: 'akdoruk-pet-05l-koli',
    name: 'Akdoruk 0.5L Pet Su (24\'lü Koli)',
    brand: 'Akdoruk',
    category: 'Tek İçimlik',
    volume: '24 x 0.5 Litre',
    ph: '8.16 pH',
    description: 'Günlük koşuşturmacada, spor yaparken, araçta veya ofis ikramlarında pratik Akdoruk kaynak suyu.',
    features: [
      'Çantanızda ve cebinizde kolayca taşınabilir',
      'Misafir, toplantı ve ofis ikramları için ideal',
      '24\'lü hijyenik korumalı koli ambalajı',
      'Yumuşak ve taze alkali içim'
    ],
    imageUrl: '/assets/services_.jpg',
    isPopular: false
  },
  {
    id: 'akdoruk-pet-15l-koli',
    name: 'Akdoruk 1.5L Sofralık Pet Su (12\'li Koli)',
    brand: 'Akdoruk',
    category: 'Sofralık Boy',
    volume: '12 x 1.5 Litre',
    ph: '8.16 pH',
    description: 'Yemek masalarında ve gün boyu çalışma masanızda tüketmek için ideal hacimde 12\'li Akdoruk paketi.',
    features: [
      'Yemek masaları için ideal boyut',
      '12 adetlik ekonomik koli',
      'Günlük su ihtiyacınızı kolayca takip edin',
      'Buz gibi serinletici kaynak suyu'
    ],
    imageUrl: '/assets/hero.jpg',
    isPopular: false
  },
  {
    id: 'akdoruk-bardak-su-koli',
    name: 'Akdoruk Bardak Su (200 ml - 60\'lı Koli)',
    brand: 'Akdoruk',
    category: 'Etkinlik & İkram',
    volume: '60 x 200 ml',
    ph: '8.16 pH',
    description: 'Düğün, cemiyet, mevlüt, piknik, restoran ve işletmeler için el değmeden ambalajlanmış tek kullanımlık bardak su.',
    features: [
      '60 adet hijyenik emniyet folyolu bardak',
      'Toplu organizasyonlar için en pratik çözüm',
      'Dökülme ve israfı önleyen kilitli kapak',
      'Toptan alımlara özel avantajlı fiyat'
    ],
    imageUrl: '/assets/services_.jpg',
    isPopular: false
  },

  // TOPÇAM MADRAN ÜRÜNLERİ
  {
    id: 'topcam-damacana-19l',
    name: 'Topçam Madran 19L Doğal Kaynak Damacana Su',
    brand: 'Topçam',
    category: 'Damacana Su',
    volume: '19 Litre',
    ph: '7.50 pH',
    description: 'Efsane Madran Dağı’nın 7.50 pH dengeli, ipeksi yumuşak içimli doğal kaynak suyu. Çay demleyenlerin ve hafif su sevenlerin 1 numaralı tercihi.',
    features: [
      'Madran Dağı zirvesinden gelen tescilli kaynak suyu',
      'Orijinal Topçam emniyet kilitli hijyenik kapak',
      'İpeksi yumuşak içim & çayda tortu bırakmayan saflık',
      'Muğla Ortaköy’e hızlı kapıya taşıma garantisi'
    ],
    imageUrl: '/assets/topçam_services2.jpeg',
    isPopular: true
  },
  {
    id: 'topcam-cam-damacana-19l',
    name: 'Topçam Madran 19L Sağlıklı Cam Damacana Su',
    brand: 'Topçam',
    category: 'Cam Seri',
    volume: '19 Litre',
    ph: '7.50 pH',
    description: 'Madran Dağı pınarını en doğal cam saflığında evinize taşıyan, bebekler ve sağlıklı yaşam tutkunları için ideal cam damacana.',
    features: [
      '%100 Sağlıklı ve kokusuz cam damacana ambalajı',
      'Güvenli koruyucu kafes ile kapıya kadar taşıma',
      'Madran pınarının minerallerini taptaze muhafaza eder',
      'Boş cam şişe ile birebir değişim avantajı'
    ],
    imageUrl: '/assets/topçam_servces1.jpg',
    isPopular: false
  },
  {
    id: 'topcam-pet-5l-koli',
    name: 'Topçam Madran 5L Pet Su (4\'lü Koli)',
    brand: 'Topçam',
    category: 'Pratik Boy',
    volume: '4 x 5 Litre',
    ph: '7.50 pH',
    description: 'Madran Dağı’nın berrak lezzeti mutfaklarınızda! Çay, kahve ve yemeklerinizde fark yaratan yumuşacık 5L pet koli.',
    features: [
      '4 adet 5 Litrelik ekonomik koli',
      'Özellikle çay tiryakileri için tavsiye edilir',
      'Kolay taşınabilir ergonomik kulp tasarımı',
      'BPA içermeyen dayanıklı pet gövde'
    ],
    imageUrl: '/assets/topçam_services2.jpeg',
    isPopular: true
  },
  {
    id: 'topcam-pet-10l-koli',
    name: 'Topçam Madran 10L Pet Su (2\'li Koli)',
    brand: 'Topçam',
    category: 'Geniş Hacim',
    volume: '2 x 10 Litre',
    ph: '7.50 pH',
    description: 'Geniş aileler ve depozitosuz damacana rahatlığı isteyenler için 10 Litre Topçam Madran pratik su çözümü.',
    features: [
      '2 adet 10 Litrelik geniş kullanım hacmi',
      'Depozitosuz, boş şişe iade derdi yok',
      'Standart pompalarla uyumlu ağız yapısı',
      'Madran zirve pınarı güvencesi'
    ],
    imageUrl: '/assets/topçam_services2.jpeg',
    isPopular: false
  },
  {
    id: 'topcam-pet-05l-koli',
    name: 'Topçam Madran 0.5L Pet Su (24\'lü Koli)',
    brand: 'Topçam',
    category: 'Tek İçimlik',
    volume: '24 x 0.5 Litre',
    ph: '7.50 pH',
    description: 'Yolda, okulda, sporda veya arabada her an yanınızda olan 24\'lü Topçam Madran küçük pet su paketi.',
    features: [
      '24 adet hijyenik 0.5 Litre pet şişe',
      'Yumuşak içimiyle gün boyu su içmeyi kolaylaştırır',
      'Düşük sodyum oranıyla ferahlatıcı etki',
      'Ofis ve toplantı ikramlarına uygun'
    ],
    imageUrl: '/assets/topçam_services2.jpeg',
    isPopular: false
  },
  {
    id: 'topcam-pet-15l-koli',
    name: 'Topçam Madran 1.5L Sofralık Pet Su (12\'li Koli)',
    brand: 'Topçam',
    category: 'Sofralık Boy',
    volume: '12 x 1.5 Litre',
    ph: '7.50 pH',
    description: 'Aile yemeklerinde masanızı şenlendiren, hafif ve dengeli mineral yapısıyla 12\'li Topçam sofralık su.',
    features: [
      '12 adet 1.5 Litrelik sofralık ambalaj',
      'Sofrada rahat döküm sağlayan ergonomik form',
      'Yemeklerin doğal lezzetini öne çıkarır',
      'Ekonomik koli avantajı'
    ],
    imageUrl: '/assets/topçam_services2.jpeg',
    isPopular: false
  },
  {
    id: 'topcam-bardak-su-koli',
    name: 'Topçam Madran Bardak Su (200 ml - 60\'lı Koli)',
    brand: 'Topçam',
    category: 'Etkinlik & İkram',
    volume: '60 x 200 ml',
    ph: '7.50 pH',
    description: 'Kır düğünleri, mevlitler, iş yeri yemekhaneleri ve piknikler için pratik 60\'lı koli Topçam bardak su.',
    features: [
      '60 adet alüminyum emniyet folyolu tek içimlik bardak',
      'Aç-iç pratikliği ve hijyen güvencesi',
      'Etkinlik ve toplu ikramlar için ideal',
      'Toptan alımlarda indirimli fiyat'
    ],
    imageUrl: '/assets/topçam_services2.jpeg',
    isPopular: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'evlere-servis',
    title: 'Evlere Hızlı Su Servisi',
    shortDesc: 'Muğla Ortaköy genelinde kat farkı gözetmeksizin kapınıza kadar taşıma garantili damacana teslimatı.',
    fullDesc: 'Muğla Ortaköy’de müstakil evler, köy içi haneler ve siteler için haftanın 7 günü aksamayan evlere servis hizmeti veriyoruz. Ağır damacanaları taşıma derdine son veriyoruz; güler yüzlü personelimiz suyu kapınıza kadar getirir.',
    iconName: 'Home',
    benefits: [
      'Kat ayrımı yapmaksızın daire kapısına teslim',
      'Güler yüzlü, güvenilir ve hijyenik servis personeli',
      '30-45 dakika içinde hızlı teslimat',
      'Kapıda nakit veya kredi kartı ile pratik ödeme'
    ]
  },
  {
    id: 'site-toplu-servis',
    title: 'Site ve Apartmanlara Düzenli Dağıtım',
    shortDesc: 'Ortaköy bölgesindeki sitelere ve toplu konutlara özel periyodik sevkiyat ve avantajlı abonelik.',
    fullDesc: 'Ortaköy bölgesinde yer alan çok haneli siteler, tatil siteleri ve villa grupları için toplu su dağıtım servisimiz mevcuttur. Belirlenen gün ve saatlerde sitenize düzenli araç çıkartarak suyunuzun hiç bitmemesini sağlıyoruz.',
    iconName: 'Building',
    benefits: [
      'Site sakinlerine özel toplu sipariş avantajı',
      'Haftalık veya günlük sabit teslimat saatleri',
      'Site güvenliği ve yönetimiyle koordineli giriş',
      'Toplu siparişlerde öncelikli servis'
    ]
  },
  {
    id: 'isyeri-ofis',
    title: 'İş Yerleri ve Ofislere Su Tedariği',
    shortDesc: 'Ofisler, dükkanlar, şantiyeler ve atölyeler için kurumsal su çözümleri ve sebil desteği.',
    fullDesc: 'Çalışma alanlarınızın su ihtiyacını kesintisiz karşılıyoruz. Düzenli faturalı teslimat, su sebili temizleme desteği ve yüksek hacimli tüketimlerde özel planlamalar sunuyoruz.',
    iconName: 'Briefcase',
    benefits: [
      'Düzenli kurumsal fatura kesimi',
      'Su sebili aparatları ve pompa desteği',
      'Tüketim hızınıza göre otomatik sevkiyat',
      'Mesai saatlerine uyumlu hızlı teslimat'
    ]
  },
  {
    id: 'cam-damacana-hizmeti',
    title: 'Cam Damacana Değişimi & Hijyen',
    shortDesc: 'En doğal ve sağlıklı suyu tercih edenler için steril cam damacana servisi.',
    fullDesc: 'Plastik kullanmak istemeyen müşterilerimiz için özel koruyucu kafesli cam damacana su servisi sağlıyoruz. Her teslimatta damacanalar fabrikasyon sterilizasyon kontrolünden geçer.',
    iconName: 'ShieldCheck',
    benefits: [
      'BPA ve kimyasal içermeyen %100 cam gövde',
      'Darbe korumalı taşıma kasası',
      'Hassas bebek ve çocuk tüketimine uygun',
      'Eski cam şişe ile birebir değişim'
    ]
  }
];

export const DELIVERY_AREAS = [
  'Ortaköy Köy İçi & Merkez',
  'Ortaköy Tepe Siteleri',
  'Muğla-Ortaköy Yolu Konutları',
  'Ortaköy Villa Siteleri & Çiftlik Evleri',
  'Ortaköy Sanayi & Dükkanlar Çevresi',
  'Menteşe / Ortaköy Bağlantı Güzergahı'
];

export const FAQS = [
  {
    q: 'Hangi su markalarını sipariş verebilirim?',
    a: 'Muğla Su olarak hem 8.16 pH yüksek alkali Akdoruk Doğal Kaynak Suyu’nu hem de Madran Dağı’nın efsane yumuşak içimli Topçam Doğal Kaynak Suyu’nu kapınıza getiriyoruz. Siparişinizde dilediğiniz markayı seçebilir veya telefon/WhatsApp ile belirtebilirsiniz.'
  },
  {
    q: 'Muğla Ortaköy’e teslimat ne kadar sürede yapılıyor?',
    a: 'Ortaköy içi siparişlerinizde ortalama teslimat süremiz 30 ile 45 dakika arasındadır. Servis aracımız mahalle içinde sürekli ring halinde olduğu için acil durumlarda daha da hızlı ulaşabilmekteyiz.'
  },
  {
    q: 'Farklı marka boş damacanam var, değişim yapıyor musunuz?',
    a: 'Evet, standart polikarbon damacana standartlarına uygun olan tüm boş damacanalarınızı (Akdoruk, Topçam veya diğer markalar) farksız olarak teslim alıyor, dilediğiniz markanın taze dolu damacanası ile değiştiriyoruz.'
  },
  {
    q: 'Kapıda kredi kartı ile ödeme yapabilir miyim?',
    a: 'Evet, kapıda nakit ödemenin yanı sıra mobil POS cihazımızla tüm banka ve kredi kartlarıyla temassız veya şifreli ödeme yapabilirsiniz.'
  },
  {
    q: 'Hafta sonu su servisi var mı?',
    a: 'Evet, Muğla Su olarak haftanın 7 günü (Pazar günleri dahil) sabah 08:30’dan akşam 20:00’ye kadar kesintisiz hizmet vermekteyiz.'
  }
];
