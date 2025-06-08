import React from "react";
import { useTranslation } from "react-i18next";

export default function AdBanner() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 p-4 group">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-gradient-x"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl animate-bounce">✨</span>
          <div>
            <h4 className="text-white font-semibold text-sm">
              {t("supportUs")}
            </h4>
            <p className="text-gray-300 text-xs">{t("supportMessage")}</p>
          </div>
        </div>
        <button
          onClick={() =>
            window.open("https://your-donation-link.com", "_blank")
          }
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
        >
          {t("donate")}
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full filter blur-3xl transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full filter blur-3xl transform -translate-x-16 translate-y-16 group-hover:-translate-x-12 group-hover:translate-y-12 transition-transform duration-500"></div>

      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
