"use client";

import Link from "next/link";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./ElevatorBreadcumb.module.css";

const copy = {
  es: { home: "Inicio", catalog: "Elevadores", label: "Ruta del producto" },
  en: { home: "Home", catalog: "Elevators", label: "Product path" },
};

function cleanText(value) {
  return String(value || "").replace(/[\u2013\u2014]/g, "-");
}

export default function ElevatorBreadcumb({ product, category }) {
  const language = useDocumentLanguage();
  const text = copy[language];
  const categoryHref = `/shop/elevators/${category.slug}`;
  const productTitle = cleanText(
    product.title?.[language] || product.title?.en || product.id,
  );
  const categoryTitle = cleanText(
    category.title?.[language] || category.title?.en || category.slug,
  );

  return (
    <nav
      className={styles.rail}
      aria-label={text.label}
      data-i18n-managed="true"
    >
      <div className={styles.inner}>
        <a
          className={styles.back}
          href={categoryHref}
        >
          <i className="ri-arrow-left-line" aria-hidden="true" />
          {categoryTitle}
        </a>

        <ol className={styles.trail}>
          <li><Link href="/">{text.home}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/shop/elevators">{text.catalog}</Link></li>
          <li aria-hidden="true">/</li>
          <li className={styles.current} aria-current="page">{productTitle}</li>
        </ol>
      </div>
    </nav>
  );
}
