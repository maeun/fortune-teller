import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ExampleSlider() {
  const { t } = useTranslation();
  const examples = t("exampleFortunes", { returnObjects: true });
  const short = t("shortTerm");
  const long = t("longTerm");
  const title = t("exampleFortunesTitle");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mt-10 mb-20"> {/* ✅ 충분한 여백 확보 */}
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <Slider {...settings}>
        {examples.map((fortune, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow text-center mx-4 min-h-[280px] flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold mb-2">{fortune.title}</h3>
            <p className="text-gray-700 mb-1">
              <strong>{short}:</strong> {fortune.short}
            </p>
            <p className="text-gray-700">
              <strong>{long}:</strong> {fortune.long}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
