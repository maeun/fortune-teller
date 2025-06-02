import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
      loading: "Generating your fortune...",
      nationality: "Nationality",
      category: "Concern Category",
      getFortune: "Get My Fortune",
      resultTitle: "🧾 Your Fortune",
      share: "📤 Share My Fortune",

      // Page content
      siteDescription: "Discover your future with our AI-powered fortune-telling service. Get personalized short- and long-term insights based on your birth info.",
      whatIsThisSiteTitle: "What is this site?",
      whatIsThisSite1: "This site allows you to generate personalized fortune readings using artificial intelligence. Simply enter your name, birth date, city, nationality, and gender, and you'll receive a customized short-term and long-term prediction.",
      whatIsThisSite2: "This service is for entertainment purposes, but the guidance may help you reflect on your personal journey.",
      exampleFortunesTitle: "Example Fortunes",
      shortTerm: "Short-term",
      longTerm: "Long-term",
      exampleFortunes: [
        {
          title: "💼 Career Fortune",
          short: "In the coming weeks, a new opportunity will emerge. Stay alert to offers from unexpected sources.",
          long: "Your long-term path shows a strong upward trend if you take bold steps within the next 6 months.",
        },
        {
          title: "❤️ Love Fortune",
          short: "A meaningful conversation will spark new energy in your love life.",
          long: "Over the next year, emotional clarity will grow. A significant relationship shift will occur—stay open and honest.",
        },
        {
          title: "💰 Money Fortune",
          short: "You will soon discover a new way to manage your finances efficiently.",
          long: "In the long run, stable income will flow if you reduce impulsive spending and focus on consistent investments.",
        },
        {
          title: "💪 Health Fortune",
          short: "Your physical and mental well-being will improve with small lifestyle adjustments.",
          long: "Long-term health will be sustained by consistent self-care and reduced stress levels.",
        },
        {
          title: "✈️ Travel Fortune",
          short: "An unexpected journey awaits. Be ready for pleasant surprises.",
          long: "Over the next year, meaningful travel experiences will expand your perspective and renew your spirit.",
        },
        {
          title: "🧠 Relationship Fortune",
          short: "Improved communication will strengthen a key relationship in your life.",
          long: "Long-term harmony is possible if you stay open to vulnerability and shared growth.",
        },
        {
          title: "🍀 Luck Fortune",
          short: "A moment of pure luck is just around the corner. Be prepared to say yes.",
          long: "Your long-term luck improves when you take small, brave steps outside your comfort zone.",
        },
      ]
    }
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
      loading: "Falınız hazırlanıyor...",
      nationality: "Uyruk",
      category: "Endişe Kategorisi",
      getFortune: "Falımı Al",
      resultTitle: "🧾 Falınız",
      share: "📤 Falımı Paylaş",

      // Page content
      siteDescription: "Yapay zekâ destekli fal hizmetimizle geleceğinizi keşfedin. Doğum bilgilerinizle kişiselleştirilmiş kısa ve uzun vadeli içgörüler alın.",
      whatIsThisSiteTitle: "Bu site nedir?",
      whatIsThisSite1: "Bu site, yapay zekâ ile kişiselleştirilmiş fal yorumları üretmenize olanak tanır. Adınızı, doğum tarihinizi, şehri, uyruk ve cinsiyet bilgilerinizi girerek özel kısa ve uzun vadeli bir tahmin alabilirsiniz.",
      whatIsThisSite2: "Bu hizmet eğlence amaçlıdır, ancak verilen yönlendirmeler kişisel yolculuğunuzda düşünmenize yardımcı olabilir.",
      exampleFortunesTitle: "Örnek Fallar",
      shortTerm: "Kısa Vadeli",
      longTerm: "Uzun Vadeli",
      exampleFortunes: [
        {
          title: "💼 Kariyer Falı",
          short: "Önümüzdeki haftalarda yeni bir fırsat doğacak. Beklenmedik tekliflere karşı tetikte olun.",
          long: "Önümüzdeki 6 ay içinde cesur adımlar atarsanız uzun vadeli yolunuz güçlü bir yükseliş gösterecektir.",
        },
        {
          title: "❤️ Aşk Falı",
          short: "Anlamlı bir konuşma aşk hayatınıza yeni bir enerji getirecek.",
          long: "Önümüzdeki yıl içinde duygusal netlik artacak. Önemli bir ilişki değişimi yaşanacak—açık ve dürüst olun.",
        },
        {
          title: "💰 Para Falı",
          short: "Mali durumunuzu verimli şekilde yönetmenin yeni bir yolunu yakında keşfedeceksiniz.",
          long: "Uzun vadede, dürtüsel harcamaları azaltır ve tutarlı yatırımlara odaklanırsanız istikrarlı gelir elde edeceksiniz.",
        },
        {
          title: "💪 Sağlık Falı",
          short: "Küçük yaşam tarzı değişiklikleriyle fiziksel ve zihinsel sağlığınız gelişecek.",
          long: "Uzun vadeli sağlık için düzenli bakım ve stres yönetimi şart.",
        },
        {
          title: "✈️ Seyahat Falı",
          short: "Beklenmedik bir yolculuk sizi bekliyor. Güzel sürprizlere hazır olun.",
          long: "Önümüzdeki yıl içinde anlamlı seyahatler ruhunuzu tazeleyecek ve bakış açınızı genişletecek.",
        },
        {
          title: "🧠 İlişki Falı",
          short: "Gelişen iletişim hayatınızdaki önemli bir ilişkiyi güçlendirecek.",
          long: "Uzun vadeli uyum, açık iletişim ve birlikte büyüme ile mümkün olacak.",
        },
        {
          title: "🍀 Şans Falı",
          short: "Şansa dayalı güzel bir an çok yakında. 'Evet' demeye hazır olun.",
          long: "Konfor alanınızdan küçük ama cesur adımlarla çıktıkça uzun vadeli şansınız da artacak.",
        },
      ]
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;
