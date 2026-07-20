"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getTranslatedText, META_COPY } from "./copy";

const LanguageContext = createContext(null);
const STORAGE_KEY = "altekmar-language";
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const translatedAttributes = ["placeholder", "title", "aria-label"];
const skippedTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE"]);

function isManagedI18nNode(node) {
  const element =
    node instanceof Element
      ? node
      : node?.parentElement;

  return Boolean(
    element?.closest?.('[data-i18n-managed="true"]'),
  );
}

function preserveOuterWhitespace(source, translated) {
  const leading = source.match(/^\s*/)?.[0] ?? "";
  const trailing = source.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function translateTextNode(node, language) {
  const parent = node.parentElement;
  if (
    !parent ||
    skippedTags.has(parent.tagName) ||
    isManagedI18nNode(node)
  ) {
    return;
  }

  if (!originalText.has(node)) {
    originalText.set(node, node.nodeValue ?? "");
  }

  const source = originalText.get(node);
  const translated = getTranslatedText(source, language);

  const nextValue = preserveOuterWhitespace(source, translated);
  if (node.nodeValue !== nextValue) {
    node.nodeValue = nextValue;
  }
}

function translateElementAttributes(element, language) {
  if (
    !(element instanceof HTMLElement) ||
    isManagedI18nNode(element)
  ) {
    return;
  }

  let stored = originalAttributes.get(element);
  if (!stored) {
    stored = {};
    originalAttributes.set(element, stored);
  }

  for (const attribute of translatedAttributes) {
    if (!element.hasAttribute(attribute)) {
      continue;
    }

    if (!(attribute in stored)) {
      stored[attribute] = element.getAttribute(attribute) ?? "";
    }

    const source = stored[attribute];
    const translated = getTranslatedText(source, language);

    if (element.getAttribute(attribute) !== translated) {
      element.setAttribute(attribute, translated);
    }
  }
}

function translateTree(root, language) {
  if (!root) {
    return;
  }

  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root, language);
    return;
  }

  if (!(root instanceof Element || root instanceof Document || root instanceof DocumentFragment)) {
    return;
  }

  if (root instanceof Element) {
    translateElementAttributes(root, language);
  }

  const elementWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  let element = elementWalker.nextNode();
  while (element) {
    translateElementAttributes(element, language);
    element = elementWalker.nextNode();
  }

  const textWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let textNode = textWalker.nextNode();
  while (textNode) {
    translateTextNode(textNode, language);
    textNode = textWalker.nextNode();
  }
}

export default function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("es");

  const setLanguage = useCallback((nextLanguage) => {
    const safeLanguage = nextLanguage === "en" ? "en" : "es";
    setLanguageState(safeLanguage);
    window.localStorage.setItem(STORAGE_KEY, safeLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "es" ? "en" : "es");
  }, [language, setLanguage]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    document.title = META_COPY[language].title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", META_COPY[language].description);
    }

    translateTree(document.body, language);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target, language);
          continue;
        }

        for (const node of mutation.addedNodes) {
          translateTree(node, language);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, setLanguage, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }
  return context;
}
