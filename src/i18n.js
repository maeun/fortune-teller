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
      loading: "Generating your fortune...",
      nationality: "Nationality",
      category: "Concern Category",
      getFortune: "Get My Fortune",
      resultTitle: "🧾 Your Fortune",
      share: "📤 Share My Fortune",
      formTitle: "Get Your Fortune",

      // Page content
      siteDescription:
        "Discover your future with our AI-powered fortune-telling service. Get personalized short- and long-term insights based on your birth info.",
      whatIsThisSiteTitle: "What is this site?",
      whatIsThisSite1:
        "This site allows you to generate personalized fortune readings using artificial intelligence. Simply enter your name, birth date, city, nationality, and gender, and you'll receive a customized short-term and long-term prediction.",
      whatIsThisSite2:
        "This service is for entertainment purposes, but the guidance may help you reflect on your personal journey.",
      exampleFortunesTitle: "Example Fortunes",
      shortTerm: "Short-term",
      longTerm: "Long-term",
      exampleFortunes: [
        {
          title: "💼 Career Fortune",
          short:
            "In the coming weeks, a new opportunity will emerge. Stay alert to offers from unexpected sources.",
          long: "Your long-term path shows a strong upward trend if you take bold steps within the next 6 months.",
        },
        {
          title: "❤️ Love Fortune",
          short:
            "A meaningful conversation will spark new energy in your love life.",
          long: "Over the next year, emotional clarity will grow. A significant relationship shift will occur—stay open and honest.",
        },
        {
          title: "💰 Money Fortune",
          short:
            "You will soon discover a new way to manage your finances efficiently.",
          long: "In the long run, stable income will flow if you reduce impulsive spending and focus on consistent investments.",
        },
        {
          title: "💪 Health Fortune",
          short:
            "Your physical and mental well-being will improve with small lifestyle adjustments.",
          long: "Long-term health will be sustained by consistent self-care and reduced stress levels.",
        },
        {
          title: "✈️ Travel Fortune",
          short:
            "An unexpected journey awaits. Be ready for pleasant surprises.",
          long: "Over the next year, meaningful travel experiences will expand your perspective and renew your spirit.",
        },
        {
          title: "🧠 Relationship Fortune",
          short:
            "Improved communication will strengthen a key relationship in your life.",
          long: "Long-term harmony is possible if you stay open to vulnerability and shared growth.",
        },
        {
          title: "🍀 Luck Fortune",
          short:
            "A moment of pure luck is just around the corner. Be prepared to say yes.",
          long: "Your long-term luck improves when you take small, brave steps outside your comfort zone.",
        },
      ],
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
      loading: "Falınız hazırlanıyor...",
      nationality: "Uyruk",
      category: "Endişe Kategorisi",
      getFortune: "Falımı Al",
      resultTitle: "🧾 Falınız",
      share: "📤 Falımı Paylaş",
      formTitle: "Falını Al",

      // Page content
      siteDescription:
        "Yapay zekâ destekli fal hizmetimizle geleceğinizi keşfedin. Doğum bilgilerinizle kişiselleştirilmiş kısa ve uzun vadeli içgörüler alın.",
      whatIsThisSiteTitle: "Bu site nedir?",
      whatIsThisSite1:
        "Bu site, yapay zekâ ile kişiselleştirilmiş fal yorumları üretmenize olanak tanır. Adınızı, doğum tarihinizi, şehri, uyruk ve cinsiyet bilgilerinizi girerek özel kısa ve uzun vadeli bir tahmin alabilirsiniz.",
      whatIsThisSite2:
        "Bu hizmet eğlence amaçlıdır, ancak verilen yönlendirmeler kişisel yolculuğunuzda düşünmenize yardımcı olabilir.",
      exampleFortunesTitle: "Örnek Fallar",
      shortTerm: "Kısa Vadeli",
      longTerm: "Uzun Vadeli",
      exampleFortunes: [
        {
          title: "💼 Kariyer Falı",
          short:
            "Önümüzdeki haftalarda yeni bir fırsat doğacak. Beklenmedik tekliflere karşı tetikte olun.",
          long: "Önümüzdeki 6 ay içinde cesur adımlar atarsanız uzun vadeli yolunuz güçlü bir yükseliş gösterecektir.",
        },
        {
          title: "❤️ Aşk Falı",
          short:
            "Anlamlı bir konuşma aşk hayatınıza yeni bir enerji getirecek.",
          long: "Önümüzdeki yıl içinde duygusal netlik artacak. Önemli bir ilişki değişimi yaşanacak—açık ve dürüst olun.",
        },
        {
          title: "💰 Para Falı",
          short:
            "Mali durumunuzu verimli şekilde yönetmenin yeni bir yolunu yakında keşfedeceksiniz.",
          long: "Uzun vadede, dürtüsel harcamaları azaltır ve tutarlı yatırımlara odaklanırsanız istikrarlı gelir elde edeceksiniz.",
        },
        {
          title: "💪 Sağlık Falı",
          short:
            "Küçük yaşam tarzı değişiklikleriyle fiziksel ve zihinsel sağlığınız gelişecek.",
          long: "Uzun vadeli sağlık için düzenli bakım ve stres yönetimi şart.",
        },
        {
          title: "✈️ Seyahat Falı",
          short:
            "Beklenmedik bir yolculuk sizi bekliyor. Güzel sürprizlere hazır olun.",
          long: "Önümüzdeki yıl içinde anlamlı seyahatler ruhunuzu tazeleyecek ve bakış açınızı genişletecek.",
        },
        {
          title: "🧠 İlişki Falı",
          short:
            "Gelişen iletişim hayatınızdaki önemli bir ilişkiyi güçlendirecek.",
          long: "Uzun vadeli uyum, açık iletişim ve birlikte büyüme ile mümkün olacak.",
        },
        {
          title: "🍀 Şans Falı",
          short:
            "Şansa dayalı güzel bir an çok yakında. 'Evet' demeye hazır olun.",
          long: "Konfor alanınızdan küçük ama cesur adımlarla çıktıkça uzun vadeli şansınız da artacak.",
        },
      ],
    },
  },
  ja: {
    translation: {
      formTitle: "運勢を占う",
      givenName: "名",
      familyName: "姓",
      dob: "生年月日",
      city: "都市",
      gender: "性別",
      male: "男性",
      female: "女性",
      other: "その他",
      loading: "運勢を生成中...",
      nationality: "国籍",
      category: "関心カテゴリ",
      getFortune: "運勢を取得",
      resultTitle: "🧾 あなたの運勢",
      share: "📤 運勢を共有",
      siteDescription:
        "AIによる運勢診断サービスで未来を発見しましょう。生年月日などの情報から、あなた専用の短期・長期運勢をお届けします。",
      whatIsThisSiteTitle: "このサイトについて",
      whatIsThisSite1:
        "このサイトでは、AIを使ってパーソナライズされた運勢診断を生成できます。名前、生年月日、都市、国籍、性別を入力するだけで、短期・長期の運勢予測が得られます。",
      whatIsThisSite2:
        "本サービスはエンターテインメント目的ですが、アドバイスが自己成長のヒントになるかもしれません。",
      exampleFortunesTitle: "運勢の例",
      shortTerm: "短期",
      longTerm: "長期",
      exampleFortunes: [
        {
          title: "💼 仕事運",
          short:
            "数週間以内に新しいチャンスが訪れます。思いがけないオファーに注意しましょう。",
          long: "今後6ヶ月以内に大胆な行動を取れば、長期的に大きな成長が期待できます。",
        },
        {
          title: "❤️ 恋愛運",
          short: "意味のある会話が恋愛に新しいエネルギーをもたらします。",
          long: "1年以内に感情の明確化が進み、重要な関係の変化が起こるでしょう。オープンで正直でいてください。",
        },
        {
          title: "💰 金運",
          short: "まもなく効率的なお金の管理方法を発見します。",
          long: "衝動的な支出を減らし、安定した投資を続ければ長期的に安定した収入が得られます。",
        },
        {
          title: "💪 健康運",
          short: "小さな生活習慣の改善で心身ともに健康になります。",
          long: "長期的な健康は、継続的なセルフケアとストレス管理で維持されます。",
        },
        {
          title: "✈️ 旅行運",
          short:
            "思いがけない旅が待っています。素敵なサプライズに備えましょう。",
          long: "1年以内に意味のある旅行体験が視野を広げ、心をリフレッシュさせます。",
        },
        {
          title: "🧠 人間関係運",
          short: "コミュニケーションの改善が大切な人間関係を強化します。",
          long: "長期的な調和は、オープンな心と共に成長することで得られます。",
        },
        {
          title: "🍀 幸運",
          short: "幸運な瞬間がすぐそこに。勇気を持って一歩踏み出しましょう。",
          long: "コンフォートゾーンから少し勇気を出して行動すれば、長期的な幸運が訪れます。",
        },
      ],
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
