const productAttributes = [
  { id: 1, title: "İlgili Kategoriler", content: ["Bebek Takımı"], },
  { id: 2, title: "Marka", content: ["LC Waikiki", "Civil", "Altınbaş", "Defacto", "Skygo", "ADABEBEK", "BabyBird", "Koton", "Mavi", "Pierre Cardin", "GAP", "Miniworld", "Babydonat"], placeholder: "Marka ara" },
  { id: 3, title: "Beden", content: ["XS", "Yeni Doğan", "0-3 Ay", "3-6 Ay", "6-9 Ay", "9-12 Ay", "12-15 Ay", "15-18 Ay", "18-24 Ay", "2-3 Yaş", "4-5 Yaş", "6-7 Yaş", "7-8 Yaş", "9-10 Yaş", "11-12 Yaş", "Standart"], placeholder: "Beden ara" },
  { id: 4, title: "Avantajlı Ürünler", content: ["Süper Avantajlı Ürün", "Çok Avantajlı Ürün", "Avantajlı Ürün"] },
  { id: 5, title: "Cinsiyet", content: ["Kadın", "Erkek", "Çocuk"] },
  { id: 6, title: "Fiyat", content: ["0TL - 200TL", "200 - 350", "350 - 500", "500 - 800", "800 - 1500", "1500 - 60000"], },
  { id: 7, title: "Renk", content: ["Pembe", "Ekru", "Siyah", "Sarı", "Yeşil", "Mavi", "Turuncu"] },
  { id: 8, title: "Çocuk Cinsiyeti", content: ["Kız Çocuk", "Erkek Çocuk", "Kız Bebek"] },
  { id: 9, title: "Materyal", content: ["Akrilik", "Kadife", "Keten", "Likra", "Pamuk Polyester", "Pamuklu", "Polar", "Polyester", "Viskon", "Yünlü"], placeholder: "Materyal ara" },
  { id: 10, title: "Paket İçeriği", content: ["2'li", "3'lü", "4'lü", "5'li", "6'lı", "Tekli"] },
  { id: 11, title: "Kol Boyu", content: ["Askılı", "Kısa", "Kolsuz", "Tek Kol", "Uzun"] },
  { id: 12, title: "Kumaş Tipi", content: ["Belirtilmemiş", "Dantel", "Denim", "Dokuma", "Örme", "Triko"], placeholder: "Kumaş Tipi ara" },
  { id: 13, title: "Ortam", content: ["Business", "Casual", "Casual/Günlük", "Daily", "Gündüz/Gece", "Günlük", "Homewear", "Lounge/Home", "Party", "Prom", "Şık/Gece", "Sportswear", "Stylish/Night", "Young"], placeholder: "Ortam ara" },
  { id: 14, title: "Kol Tipi", content: ["Askılı", "Ay Kol", "Balon Kol", "Büzgülü/Fırfırlı Kol", "Düşük Kol", "Kısa Kol", "Kolsuz", "Reglan Kol", "Standart Kol", "T Kol", "Takma Kol", "Uzun Kol"], placeholder: "Kol tipi ara" },
  { id: 15, title: "Desen", content: ["Ajurlu", "Animal", "Armitürlü", "Baskılı", "Çiçekli", "Çini", "Çizgili", "Ekose/Kareli", "Geometrik", "Kabartma", "Lisanslı", "Puantiyeli", "Renk Bloklu", "Renkli", "Saç Örgü", "Simli", "Slogan", "Soyut", "Tropikal", "Yılbaşı"], placeholder: "Desen ara" },
  { id: 16, title: "Fiyat Geçmişi", content: ["Son 7 Gün", "Son 14 Gün", "Son 30 Gün"] },
  { id: 17, title: "Kalıp", content: ["3/4 Boy", "7/8 Boy", "A-Line", "Anvelop", "Asimetrik", "Balon", "Beli Lastikli", "Bol", "Büyük Beden", "Çan", "Crop", "Dar", "Denim", "Desteksiz"] },
  { id: 18, title: "Paça Tipi", content: ["Açık Paça", "Bol Paça", "Boru Paça", "Dar Paça", "Düz Paça", "Geniş Paça", "Jogger", "Kısa Paça", "Lastikli Paça", "Manşetli Paça", "Paçasız", "Regular"] },
  { id: 19, title: "Boy", content: ["15 ML", "150", "162", "Diz Boyu", "Kapri", "Kısa", "Midi", "Mini"], placeholder: "Boy ara" },
  { id: 20, title: "Sürdürülebilirlik Detayı", content: ["Evet", "Hayır", "Organik", "Recycle", "Recycle+Organik"] },
  { id: 21, title: "Satıcı Tipi", content: ["Onaylanmış Satıcı", "Başarılı Satıcı"] },
  { id: 22, title: "Yaka Tipi", content: ["Bebe Yaka", "Bisiklet Yaka", "Bomber Yaka", "Ceket Yaka", "Dik Yaka", "Gömlek Yaka", "Kapüşonlu", "Kare Yaka", "Kruvaze", "Polo Yaka", "V Yaka"] },
  {
    id: 23, title: "Koleksiyon", content: [
      "Authentic", "Basic", "Business", "Care", "Christmas", "Design", "Eco-friendly", "Era", "Hamile",
      "Homewear", "İç Giyim", "Lisanslı", "Party", "Petite", "Sportswear", "Unisex", "Young"], placeholder: "Koleksiyon ara"
  },
  { id: 24, title: "Fenomenlerin Seçtikleri", content: [] },
  { id: 25, title: "Kampanyalı Ürünler", content: [] },
  { id: 26, title: "Hediye Paketi", content: [] },
  { id: 27, title: "Birlikte Al Kazan", content: [] },
  { id: 28, title: "Ürün Puanı", content: [] },
  { id: 29, title: "Fotoğraflı Yorumlar", content: [], },
  { id: 30, title: "Videolu Ürünler", content: [] },
  { id: 31, title: "Kurumsal Faturaya Uygun", content: [] },
  { id: 32, title: "Kuponlu Ürünler", content: [] },
  { id: 33, title: "Çok Al Az Öde", content: [] }
];

export default productAttributes;
