// src/App.js
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-bounce delay-500"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-400/10 rounded-full blur-xl animate-bounce delay-700"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300/60 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 8 + 8}px`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Header Hero Section */}
      <header className="relative z-10 pt-16 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-float">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              <span className="inline-block animate-bounce mr-4 text-5xl">🔮</span>
              Fortune Teller
            </h1>
          </div>
          
          <p className="max-w-3xl mx-auto text-xl text-gray-200 mb-8 leading-relaxed">
            {t("siteDescription")}
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                lang === 'en' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
              onClick={() => changeLanguage('en')}
            >
              🇬🇧 English
            </button>
            <button
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                lang === 'tr' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
              onClick={() => changeLanguage('tr')}
            >
              🇹🇷 Türkçe
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 pb-16">
        {/* What is this site Section */}
        <section className="mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">✨</span>
              <h2 className="text-3xl font-bold text-white">
                {t("whatIsThisSiteTitle")}
              </h2>
            </div>
            <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
              <p>{t("whatIsThisSite1")}</p>
              <p>{t("whatIsThisSite2")}</p>
            </div>
          </div>
        </section>

        {/* Example Slider */}
        <section className="mb-16">
          <ExampleSlider />
        </section>

        {/* Input Form */}
        <section className="mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🎴</span>
              <h3 className="text-2xl font-bold text-white">
                {t("formTitle")}
              </h3>
            </div>
            
            <InputForm onSubmit={handleSubmit} />
            
            {loading && (
              <div className="mt-8 text-center">
                <div className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-purple-400 border-t-transparent"></div>
                  <span className="text-white font-medium">{t("loading")}</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Result Section */}
        {result && (
          <section className="mb-12">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl animate-slide-up">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">🌟</span>
                <h3 className="text-2xl font-bold text-white">
                  {t("resultTitle")}
                </h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10">
                <p className="whitespace-pre-line text-gray-100 text-lg leading-relaxed">
                  {result}
                </p>
              </div>
              
              <div className="flex justify-end">
                <ShareButton text={result} />
              </div>
            </div>

            {/* Ad Banner */}
            <div className="mt-8 flex justify-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <AdBanner />
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🔮</span>
            <span className="text-white font-semibold">Fortune Teller</span>
          </div>
          <p className="text-gray-300">
            © 2025 Fortune Teller. Powered by AI and Firebase.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;