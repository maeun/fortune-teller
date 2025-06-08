// src/App.js
import React, { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import ShareButton from "./components/ShareButton";
import { getFortune } from "./services/openai";
import { saveFortune } from "./firebase";
import { useTranslation } from "react-i18next";
import "./styles.css";
import AdBanner from "./components/AdBanner";
import ExampleSlider from "./components/ExampleSlider";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    let scrollTimer;
    let lastScrollTop = 0;
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      // Clear any existing timeout
      clearTimeout(scrollTimeout);

      // If we're actually scrolling (position changed)
      if (currentScrollTop !== lastScrollTop) {
        setIsScrolling(true);
        lastScrollTop = currentScrollTop;
      }

      // Set a new timeout to hide the dots
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Hide dots 1 second after scrolling stops
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const fortune = await getFortune({ ...formData, lang });
      setResult(fortune);
      await saveFortune(formData, fortune);
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Navigation Dots */}
      <div
        className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4 transition-all duration-300 ${
          isScrolling ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#home"
          className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300"
        ></a>
        <a
          href="#about"
          className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300"
        ></a>
        <a
          href="#fortune"
          className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300"
        ></a>
        {result && (
          <a
            href="#result"
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300"
          ></a>
        )}
      </div>

      {/* 1. Title/Introduction */}
      <section
        id="home"
        className="h-screen snap-start bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
      >
        <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight flex items-center justify-center">
            <span
              className="inline-block animate-bounce mr-3 text-4xl"
              style={{
                fontFamily:
                  "'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Android Emoji','EmojiSymbols',sans-serif",
              }}
            >
              🔮
            </span>
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Fortune Teller
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-6 leading-relaxed text-center">
            {t("siteDescription")}
          </p>
          <div className="flex justify-center space-x-3 mb-6">
            <button
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                lang === "en"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
              onClick={() => changeLanguage("en")}
            >
              🇬🇧 English
            </button>
            <button
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                lang === "tr"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
              onClick={() => changeLanguage("tr")}
            >
              🇹🇷 Türkçe
            </button>
            <button
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                lang === "ja"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
              onClick={() => changeLanguage("ja")}
            >
              🇯🇵 日本語
            </button>
          </div>
        </div>
      </section>

      {/* 2. What is this site? + ExampleSlider */}
      <section
        id="about"
        className="h-screen snap-start bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
      >
        <div className="min-h-screen px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Description */}
            <div className="w-full mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-center mb-4">
                  <span className="text-2xl md:text-3xl mr-3">✨</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {t("whatIsThisSiteTitle")}
                  </h2>
                </div>
                <div className="space-y-4 text-gray-200 text-base md:text-lg leading-relaxed">
                  <p>{t("whatIsThisSite1")}</p>
                  <p>{t("whatIsThisSite2")}</p>
                </div>
              </div>
            </div>

            {/* ExampleSlider */}
            <div className="w-full">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <ExampleSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Input Form */}
      <section
        id="fortune"
        className="h-screen snap-start bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
      >
        <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
          <div className="w-full max-w-3xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="flex items-center mb-8">
                <span className="text-3xl mr-3">🎴</span>
                <h3 className="text-2xl font-bold text-white">
                  {t("formTitle")}
                </h3>
              </div>
              <InputForm onSubmit={handleSubmit} />
              {loading && (
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20">
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-purple-400 border-t-transparent"></div>
                    <span className="text-white font-medium">
                      {t("loading")}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Result (when available) */}
      {result && (
        <section
          id="result"
          className="h-screen snap-start bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
        >
          <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
            <div className="w-full max-w-3xl">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-up">
                <div className="flex items-center mb-8">
                  <span className="text-3xl mr-3">🌟</span>
                  <h3 className="text-2xl font-bold text-white">
                    {t("resultTitle")}
                  </h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/10">
                  <p className="whitespace-pre-line text-gray-100 text-lg leading-relaxed">
                    {result}
                  </p>
                </div>
                <div className="flex justify-end">
                  <ShareButton text={result} />
                </div>
                <div className="mt-8">
                  <AdBanner />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
