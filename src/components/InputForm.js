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

  // 🔽 t 호출 이후 gender 라벨 지정
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        type="text"
        name="givenName"
        placeholder={`🧑 ${t("givenName")}`}
        value={form.givenName}
        onChange={handleChange}
        required
      />

      <input
        className="input"
        type="text"
        name="familyName"
        placeholder={`🧑‍🏫 ${t("familyName")}`}
        value={form.familyName}
        onChange={handleChange}
        required
      />

      <input
        className="input"
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        required
      />

      <input
        className="input"
        type="text"
        name="city"
        placeholder={`🌍 ${t("city")}`}
        value={form.city}
        onChange={handleChange}
        required
      />

      <input
        className="input"
        type="text"
        name="nationality"
        placeholder={`🌐 ${t("nationality")}`}
        value={form.nationality}
        onChange={handleChange}
        required
      />

      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        className="input"
      >
        {genderOptions.map((g) => (
          <option key={g.value} value={g.value}>
            {g.label}
          </option>
        ))}
      </select>

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="input"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button type="submit" className="button">
        ✨ {t("getFortune")}
      </button>
    </form>
  );
}
