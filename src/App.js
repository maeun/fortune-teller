import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ShareButton from "./components/ShareButton";
import { getFortune } from "./services/openai";
import { saveFortune } from "./firebase";
import { useTranslation } from "react-i18next";
import "./styles.css";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const fortune = await getFortune({ ...formData, lang: i18n.language }); // 🔥 현재 언어 추가
      setResult(fortune);
      await saveFortune(formData, fortune);
    } catch (error) {
      setResult("Something went wrong. Please try again.");
      console.error(error);
    }
    setLoading(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">🔮 {t("title")}</h1>
        <div className="lang-switch">
          <button onClick={() => changeLanguage("en")} title="English">
            🇬🇧
          </button>
          <button onClick={() => changeLanguage("tr")} title="Türkçe">
            🇹🇷
          </button>
        </div>
      </header>

      <main className="main-card">
        <InputForm onSubmit={handleSubmit} />

        {loading && (
          <p className="loading">
            ⏳ {t("loading") || "Generating your fortune..."}
          </p>
        )}

        {result && (
          <div className="result-card">
            <h2>{t("resultTitle")}</h2>
            <p>{result}</p>
            <ShareButton text={result} />
          </div>
        )}
      </main>

      <footer className="footer">
        ✨ Powered by ChatGPT, Firebase, and your destiny ✨
      </footer>
    </div>
  );
}

export default App;
