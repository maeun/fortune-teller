import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ShareButton({ text }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState(null);

  const shareOptions = [
    {
      name: "Twitter",
      icon: "𝕏",
      color: "hover:bg-blue-500/20",
      action: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}`;
        window.open(url, "_blank");
      },
    },
    {
      name: "Facebook",
      icon: "f",
      color: "hover:bg-blue-600/20",
      action: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}`;
        window.open(url, "_blank");
      },
    },
    {
      name: "WhatsApp",
      icon: "📱",
      color: "hover:bg-green-500/20",
      action: () => {
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
      },
    },
    {
      name: "Telegram",
      icon: "📬",
      color: "hover:bg-blue-400/20",
      action: () => {
        const url = `https://t.me/share/url?url=${encodeURIComponent(
          window.location.href
        )}&text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
      },
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setShareError(null);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setShareError(t("copyError"));
      setTimeout(() => setShareError(null), 3000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t("fortuneTitle"),
          text: text,
          url: window.location.href,
        });
        setShareError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setShareError(t("shareError"));
          setTimeout(() => setShareError(null), 3000);
        }
      }
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center space-x-2">
          <span className="text-xl">✨</span>
          <span>{t("shareFortune")}</span>
          <span className="text-xl">🔮</span>
        </div>
      </button>

      {/* Share Options Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 overflow-hidden z-50 animate-slide-down">
          <div className="p-2">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => {
                  option.action();
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-white transition-colors duration-200 ${option.color}`}
              >
                <span className="text-xl">{option.icon}</span>
                <span>{option.name}</span>
              </button>
            ))}
            <button
              onClick={() => {
                handleCopy();
                setIsOpen(false);
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-purple-500/20 transition-colors duration-200"
            >
              <span className="text-xl">📋</span>
              <span>{t("copyToClipboard")}</span>
            </button>
          </div>
        </div>
      )}

      {/* Feedback Messages */}
      {copied && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-green-500/90 text-white rounded-lg shadow-lg animate-fade-in">
          {t("copiedToClipboard")}
        </div>
      )}
      {shareError && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-red-500/90 text-white rounded-lg shadow-lg animate-fade-in">
          {shareError}
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
