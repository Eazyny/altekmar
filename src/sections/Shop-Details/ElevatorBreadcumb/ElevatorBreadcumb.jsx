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

const categoryRoutes = {
  passenger: "/shop/elevators/passenger",
  villa: "/shop/elevators/villa",
  observation: "/shop/elevators/observation",
  hospital: "/shop/elevators/hospital",
  freight: "/shop/elevators/freight",
};

function categoryRouteFor(category) {
  const slug = String(category?.slug || "")
    .trim()
    .toLowerCase();

  return categoryRoutes[slug] || "/shop/elevators";
}

export default function ElevatorBreadcumb({ product, category }) {
  const language = useDocumentLanguage();
  const text = copy[language];
  const categoryHref = categoryRouteFor(category);
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
