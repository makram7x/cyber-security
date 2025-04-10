import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Arabic translations
const arTranslations = {
  common: {
    search: 'بحث',
    menu: 'القائمة',
    home: 'الرئيسية',
    news: 'الأخبار',
    reports: 'التقارير',
    articles: 'المقالات',
    events: 'الفعاليات',
    media: 'المكتبة',
    about: 'من نحن',
    more: 'المزيد'
  },
  footer: {
    copyright: '© 2525. جميع الحقوق محفوظة',
    newsletter: 'النشرة الإخبارية',
    subscribe: 'اشترك',
    followUs: 'تابعنا'
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: arTranslations
      }
    },
    lng: 'ar', // Default language
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false // React already escapes by default
    },
    // RTL settings
    dir: 'rtl',
    // Other options
    supportedLngs: ['ar'],
    react: {
      useSuspense: false
    }
  });

export default i18n;