import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function InputForm({ onSubmit }) {
  const { t } = useTranslation();

  const categories = [
    "Love",
    "Career",
    "Health",
    "Family",
    "Money",
    "Education",
    "Other",
  ];

  const genderOptions = [
    { value: "Male", label: t("male") },
    { value: "Female", label: t("female") },
    { value: "Other", label: t("other") },
  ];

  const [form, setForm] = useState({
    givenName: "",
    familyName: "",
    dob: "",
    city: "",
    nationality: "",
    gender: "Other",
    category: categories[0],
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <p className="text-gray-200 text-lg">Enter your details to discover your destiny</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Given Name */}
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r from-purple-400/30 To-pink-400/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === 'givenName' ? 'opacity-100' : ''}`}></div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">🧑</span>
            <input
              className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/50 transition-all duration-300 placeholder-gray-300 text-white shadow-lg hover:shadow-xl hover:bg-white/25"
              type="text"
              name="givenName"
              placeholder={t("givenName")}
              value={form.givenName}
              onChange={handleChange}
              onFocus={() => handleFocus('givenName')}
              onBlur={handleBlur}
              required
            />
          </div>
        </div>

        {/* Family Name */}
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === 'familyName' ? 'opacity-100' : ''}`}></div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">👨‍👩‍👧‍👦</span>
            <input
              className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/50 transition-all duration-300 placeholder-gray-300 text-white shadow-lg hover:shadow-xl hover:bg-white/25"
              type="text"
              name="familyName"
              placeholder={t("familyName")}
              value={form.familyName}
              onChange={handleChange}
              onFocus={() => handleFocus('familyName')}
              onBlur={handleBlur}
              required
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === 'dob' ? 'opacity-100' : ''}`}></div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">🎂</span>
            <input
              className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/50 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:bg-white/25"
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              onFocus={() => handleFocus('dob')}
              onBlur={handleBlur}
              required
            />
          </div>
        </div>

        {/* City */}
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === 'city' ? 'opacity-100' : ''}`}></div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">🌍</span>
            <input
              className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/50 transition-all duration-300 placeholder-gray-300 text-white shadow-lg hover:shadow-xl hover:bg-white/25"
              type="text"
              name="city"
              placeholder={t("city")}
              value={form.city}
              onChange={handleChange}
              onFocus={() => handleFocus('city')}
              onBlur={handleBlur}
              required
            />
          </div>
        </div>

        {/* Nationality */}
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === 'nationality' ? 'opacity-100' : ''}`}></div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">🌐</span>
            <input
              className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/50 transition-all duration-300 placeholder-gray-300 text-white shadow-lg hover:shadow-xl hover:bg-white/25"
              type="text"
              name="nationality"
              placeholder={t("nationality")}
              value={form.nationality}
              onChange={handleChange}
              onFocus={() => handleFocus('nationality')}
              onBlur={handleBlur}
              required
            />
          </div>
        </div>

        {/* Gender */}
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === 'gender' ? 'opacity-100' : ''}`}></div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">⚤</span>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              onFocus={() => handleFocus('gender')}
              onBlur={handleBlur}
              className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/50 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:bg-white/25 appearance-none cursor-pointer"
            >
              {genderOptions.map((g) => (
                <option key={g.value} value={g.value} className="bg-gray-800 text-white">
                  {g.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${focusedField === 'category' ? 'opacity-100' : ''}`}></div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">🎯</span>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              onFocus={() => handleFocus('category')}
              onBlur={handleBlur}
              className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/50 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:bg-white/25 appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-gray-800 text-white">
                  {cat}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center space-x-2">
              <span className="text-2xl">✨</span>
              <span>{t("getFortune")}</span>
              <span className="text-2xl">🔮</span>
            </div>
          </button>
        </div>
        </form>
    </div>
  );
}