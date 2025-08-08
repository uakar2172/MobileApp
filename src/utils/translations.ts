import { Language } from '../types';

export const translations = {
  tr: {
    // Navigation
    home: 'Ana Sayfa',
    profile: 'Profil',
    settings: 'Ayarlar',
    search: 'Ara',
    
    // Auth
    login: 'Giriş Yap',
    register: 'Kayıt Ol',
    logout: 'Çıkış Yap',
    email: 'E-posta',
    password: 'Şifre',
    firstName: 'Ad',
    lastName: 'Soyad',
    phone: 'Telefon',
    
    // Profile
    editProfile: 'Profili Düzenle',
    about: 'Hakkımda',
    projects: 'Projeler',
    education: 'Eğitim',
    experience: 'Deneyimler',
    skills: 'Beceriler',
    contact: 'İletişim',
    views: 'görüntüleme',
    likes: 'beğeni',
    
    // Settings
    darkMode: 'Koyu Mod',
    language: 'Dil',
    turkish: 'Türkçe',
    english: 'İngilizce',
    
    // Common
    save: 'Kaydet',
    cancel: 'İptal',
    delete: 'Sil',
    edit: 'Düzenle',
    add: 'Ekle',
    loading: 'Yükleniyor...',
    error: 'Hata',
    success: 'Başarılı',
  },
  en: {
    // Navigation
    home: 'Home',
    profile: 'Profile',
    settings: 'Settings',
    search: 'Search',
    
    // Auth
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    email: 'Email',
    password: 'Password',
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone',
    
    // Profile
    editProfile: 'Edit Profile',
    about: 'About',
    projects: 'Projects',
    education: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    views: 'views',
    likes: 'likes',
    
    // Settings
    darkMode: 'Dark Mode',
    language: 'Language',
    turkish: 'Turkish',
    english: 'English',
    
    // Common
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
  },
};

export const getTranslation = (key: string, language: Language): string => {
  return translations[language.code][key] || key;
};
