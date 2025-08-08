# Kariyer Planlama Uygulaması

Bu uygulama, kariyer gelişimini planlamak ve yönetmek için tasarlanmış cross-platform bir React Native uygulamasıdır.

## Özellikler

### 🔐 Kimlik Doğrulama
- E-posta ve şifre ile giriş
- Ad, soyad, e-posta, telefon ve şifre ile kayıt
- Güvenli şifre doğrulama

### 🎨 Tema ve Dil Desteği
- Açık/koyu tema değiştirme
- Türkçe ve İngilizce dil desteği
- Dinamik tema renkleri

### 👤 Profil Yönetimi
- Profil fotoğrafı yükleme
- Kişisel bilgileri düzenleme
- Ünvan ve hakkında bilgileri

### 📊 Kategori Sistemi
- 3x2 grid layout ile kategoriler
- Projeler, Eğitim, Hakkımda, Deneyimler, Beceriler, İletişim
- Smooth animasyonlu kategori açılma/kapanma

### 📈 İstatistikler
- Profil görüntüleme sayısı
- Beğeni sayısı
- Göz ve kalp ikonları ile görsel gösterim

### 🔍 Arama
- Kullanıcı arama özelliği
- Arama çubuğu ile kolay erişim

## Teknolojiler

- **React Native** - Cross-platform mobil uygulama geliştirme
- **Expo** - Geliştirme ve dağıtım platformu
- **TypeScript** - Tip güvenliği
- **React Navigation** - Navigasyon yönetimi
- **AsyncStorage** - Yerel veri depolama
- **Expo Image Picker** - Fotoğraf seçimi

## Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd KariyerPlanlamaApp
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Expo CLI'yi yükleyin (eğer yüklü değilse):
```bash
npm install -g @expo/cli
```

4. Uygulamayı başlatın:
```bash
npm start
```

## Kullanım

### Giriş
- Demo hesap: `test@example.com` / `password`
- Yeni hesap oluşturmak için kayıt sayfasını kullanın

### Ana Sayfa
- Profil fotoğrafı ve bilgileri görüntüleme
- Kategori grid'inden istediğiniz bölümü seçin
- Smooth animasyonla içerik açılır

### Ayarlar
- Tema değiştirme (açık/koyu)
- Dil seçimi (Türkçe/İngilizce)
- Profil düzenleme
- Çıkış yapma

## Proje Yapısı

```
src/
├── components/     # Yeniden kullanılabilir bileşenler
├── screens/        # Ekran bileşenleri
├── navigation/     # Navigasyon yapısı
├── context/        # React Context (tema, dil)
├── utils/          # Yardımcı fonksiyonlar
├── types/          # TypeScript tip tanımları
└── assets/         # Statik dosyalar
```

## Ekranlar

1. **LoginScreen** - Giriş ekranı
2. **RegisterScreen** - Kayıt ekranı
3. **HomeScreen** - Ana sayfa (profil + kategoriler)
4. **SettingsScreen** - Ayarlar ekranı
5. **EditProfileScreen** - Profil düzenleme

## Geliştirme

### Yeni Özellik Ekleme
1. İlgili ekranı `src/screens/` altında oluşturun
2. Navigation'a ekleyin
3. Gerekirse yeni tipler ekleyin
4. Çevirileri güncelleyin

### Tema Ekleme
1. `src/context/AppContext.tsx` dosyasında yeni tema tanımlayın
2. Renk paletini güncelleyin

### Dil Ekleme
1. `src/utils/translations.ts` dosyasına yeni dil ekleyin
2. Çeviri anahtarlarını güncelleyin

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## İletişim

Proje hakkında sorularınız için issue açabilirsiniz.
