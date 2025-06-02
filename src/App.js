import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ShareButton from './components/ShareButton';
import { getFortune } from './services/openai';
import { saveFortune } from './firebase';
import { useTranslation } from 'react-i18next';
import './styles.css';
import AdBanner from './components/AdBanner';
import ExampleSlider from './components/ExampleSlider';

function App() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const fortune = await getFortune({ ...formData, lang });
      setResult(fortune);
      await saveFortune(formData, fortune);
    } catch (error) {
      setResult('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container max-w-3xl mx-auto px-4 py-8">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2">🔮 Fortune Teller</h1>
        <p className="text-gray-700">{t("siteDescription")}</p>
        <div className="mt-4 space-x-2">
          <button onClick={() => changeLanguage('en')}>🇬🇧</button>
          <button onClick={() => changeLanguage('tr')}>🇹🇷</button>
        </div>
      </header>

      <section className="bg-gray-50 p-4 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">✨ {t("whatIsThisSiteTitle")}</h2>
        <p className="text-gray-800 mb-2">{t("whatIsThisSite1")}</p>
        <p className="text-gray-800">{t("whatIsThisSite2")}</p>
      </section>

      <ExampleSlider />

      <main>
        <InputForm onSubmit={handleSubmit} />
        {loading && <p className="mt-4 text-indigo-600">{t("loading")}</p>}

        {result && (
          <>
            <div className="mt-6 p-4 bg-white shadow rounded-xl">
              <h2 className="text-lg font-semibold mb-2">{t("resultTitle")}</h2>
              <p className="text-gray-800 whitespace-pre-line">{result}</p>
              <ShareButton text={result} />
            </div>
            <AdBanner />
          </>
        )}
      </main>

      <footer className="mt-10 text-center text-sm text-gray-500">
        &copy; 2025 Fortune Teller. Powered by AI and Firebase.
      </footer>
    </div>
  );
}

export default App;
