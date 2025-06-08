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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.givenName.trim()) {
      newErrors.givenName = t("requiredField");
    }
    if (!form.familyName.trim()) {
      newErrors.familyName = t("requiredField");
    }
    if (!form.dob) {
      newErrors.dob = t("requiredField");
    } else {
      const dobDate = new Date(form.dob);
      const today = new Date();
      if (dobDate > today) {
        newErrors.dob = t("invalidDate");
      }
    }
    if (!form.city.trim()) {
      newErrors.city = t("requiredField");
    }
    if (!form.nationality.trim()) {
      newErrors.nationality = t("requiredField");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      await onSubmit(form);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const getDobPlaceholder = () => {
    switch (t("dob")) {
      case "生年月日":
        return "YYYY年MM月DD日";
      case "出生日期":
        return "YYYY年MM月DD日";
      case "Doğum Tarihi":
        return "YYYY-AA-GG";
      case "Date of Birth":
        return "YYYY-MM-DD";
      default:
        return "YYYY-MM-DD";
    }
  };

  const InputField = ({
    name,
    icon,
    type = "text",
    placeholder,
    required = true,
  }) => (
    <div className="relative">
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
        {icon}
      </span>
      <input
        className={`w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border ${
          errors[name] ? "border-red-400" : "border-white/30"
        } rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/50 transition-all duration-300 placeholder-gray-300 text-white shadow-lg hover:shadow-xl hover:bg-white/25`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={form[name]}
        onChange={handleChange}
        onFocus={() => handleFocus(name)}
        onBlur={handleBlur}
        required={required}
      />
      {errors[name] && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-400 text-sm">
          {errors[name]}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField name="givenName" icon="🧑" placeholder={t("givenName")} />
          <InputField
            name="familyName"
            icon="👨‍👩‍👧‍👦"
            placeholder={t("familyName")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            name="dob"
            icon="🎂"
            type="date"
            placeholder={getDobPlaceholder()}
          />
          <InputField name="city" icon="🌍" placeholder={t("city")} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            name="nationality"
            icon="🌐"
            placeholder={t("nationality")}
          />
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
              ⚤
            </span>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              onFocus={() => handleFocus("gender")}
              onBlur={handleBlur}
              className={`w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border ${
                errors.gender ? "border-red-400" : "border-white/30"
              } rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/50 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:bg-white/25 appearance-none cursor-pointer`}
            >
              {genderOptions.map((g) => (
                <option
                  key={g.value}
                  value={g.value}
                  className="bg-gray-800 text-white"
                >
                  {g.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
              🎯
            </span>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              onFocus={() => handleFocus("category")}
              onBlur={handleBlur}
              className={`w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border ${
                errors.category ? "border-red-400" : "border-white/30"
              } rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/50 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:bg-white/25 appearance-none cursor-pointer`}
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-gray-800 text-white"
                >
                  {category}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                <span>{t("submitting")}</span>
              </div>
            ) : (
              t("getFortune")
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
