"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === "es" ? "English" : "Español";

  return (
    <button
      className="altekmar-language-switch"
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch to ${nextLanguage}`}
      title={`Switch to ${nextLanguage}`}
    >
      <span className={language === "es" ? "is-active" : ""}>ES</span>
      <span aria-hidden="true">/</span>
      <span className={language === "en" ? "is-active" : ""}>EN</span>
    </button>
  );
}
