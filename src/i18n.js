// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Fortune Telling Form",
      givenName: "Given Name",
      familyName: "Family Name",
      dob: "Date of Birth",
      city: "City",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      nationality: "Nationality",
      category: "Concern Category",
      getFortune: "Get My Fortune",
      resultTitle: "🧾 Your Fortune",
      loading: "Generating your fortune...",
      share: "📤 Share My Fortune",
    },
  },
  tr: {
    translation: {
      title: "Fal Formu",
      givenName: "Ad",
      familyName: "Soyad",
      dob: "Doğum Tarihi",
      city: "Şehir",
      gender: "Cinsiyet",
      male: "Erkek",
      female: "Kadın",
      other: "Diğer",
      nationality: "Uyruk",
      category: "Endişe Kategorisi",
      getFortune: "Falımı Al",
      resultTitle: "🧾 Falınız",
      loading: "Falınız hazırlanıyor...",
      share: "📤 Falımı Paylaş",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
