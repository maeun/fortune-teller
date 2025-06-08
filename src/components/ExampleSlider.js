// src/components/ExampleSlider.jsx
import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ExampleSlider() {
  const { t } = useTranslation();

  // Example data - replace with your actual translation data
  const examples = t("exampleFortunes", { returnObjects: true }) || [
    {
      title: "❤️ Love Fortune",
      short:
        "A meaningful conversation will spark new energy in your love life.",
      long: "Over the next year, emotional clarity will grow. A significant relationship shift will occur—stay open and honest.",
    },
    {
      title: "💼 Career Fortune",
      short:
        "A new opportunity will present itself at work—be prepared to showcase your skills.",
      long: "Over time, your professional network will expand. Embrace collaboration and stay proactive.",
    },
    {
      title: "✈️ Travel Fortune",
      short: "An unexpected journey awaits. Be ready for pleasant surprises.",
      long: "Over the next year, meaningful travel experiences will expand your perspective and renew your spirit.",
    },
    {
      title: "💰 Financial Fortune",
      short: "A wise investment decision will bring unexpected returns.",
      long: "Financial stability will gradually improve through careful planning and smart choices.",
    },
  ];

  const shortLabel = t("shortTerm") || "Short-term";
  const longLabel = t("longTerm") || "Long-term";
  const title = t("exampleFortunesTitle") || "Example Fortunes";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots custom-dots inside-box-dots",
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
    appendDots: (dots) => (
      <div className="flex justify-center w-full mt-2 mb-0 relative z-10">
        <ul className="inline-flex">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="w-full">
      {/* Slider Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center transition-transform duration-300">
          <span className="mr-3 text-3xl">🃏</span>
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto transition-transform duration-300"></div>
      </div>

      {/* Pagination toggles (dots) will be rendered here by appendDots */}

      {/* Custom Slider Container */}
      <div className="relative slider-container">
        <Slider {...settings}>
          {examples.map((fortune, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl min-h-[280px] flex flex-col justify-center card-hover group relative">
                {/* Fortune Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 text-glow">
                    {fortune.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mx-auto"></div>
                </div>

                {/* Fortune Content */}
                <div className="space-y-4">
                  {/* Short-term */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-start space-x-2">
                      <span className="text-yellow-400 text-sm font-semibold shrink-0 bg-yellow-400/20 px-2 py-1 rounded-full">
                        {shortLabel}:
                      </span>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {fortune.short}
                      </p>
                    </div>
                  </div>

                  {/* Long-term */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-400 text-sm font-semibold shrink-0 bg-purple-400/20 px-2 py-1 rounded-full">
                        {longLabel}:
                      </span>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {fortune.long}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 text-yellow-300/30 text-2xl">
                  ✨
                </div>
                <div className="absolute bottom-4 left-4 text-purple-300/30 text-xl">
                  🌟
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Styles for Slider */}
      <style jsx>{`
        .slider-container .slick-slider {
          margin: 0;
        }
        .custom-dots.inside-box-dots {
          position: static !important;
          text-align: center;
          z-index: 10;
        }
        .custom-dots.inside-box-dots li {
          margin: 0 4px;
        }
        .custom-dots.inside-box-dots li button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          padding: 0;
          transition: all 0.3s ease;
        }
        .custom-dots.inside-box-dots li button:before {
          display: none;
        }
        .custom-dots.inside-box-dots li.slick-active button {
          background: linear-gradient(45deg, #a855f7, #ec4899);
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }
        .custom-dots.inside-box-dots li button:hover {
          background: rgba(255, 255, 255, 0.6);
          transform: scale(1.1);
        }
        .slider-container .slick-prev,
        .slider-container .slick-next {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
