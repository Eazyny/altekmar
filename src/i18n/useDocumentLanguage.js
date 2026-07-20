"use client";

import { useLanguage } from "./LanguageProvider";

export default function useDocumentLanguage() {
  const { language } = useLanguage();
  return language;
}