"use client";

import Link from "next/link";
import catalog from "~/data/gots-elevator-catalog.json";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";

const copy = {
  es: {
    home: "INICIO",
    shop: "TIENDA",
    catalog: "ELEVADORES",
    hubTitle: "Categori­as de elevadores",
  },
  en: {
    home: "HOME",
    shop: "SHOP",
    catalog: "ELEVATORS",
    hubTitle: "Categorías de elevadores",
  },
};

export default function ElevatorCatalogBreadcumb({ categorySlug }) {
  const language = useDocumentLanguage();
  const text = copy[language];
  const category = categorySlug
    ? catalog.categories.find((item) => item.slug === categorySlug)
    : null;
  const title =
    category?.title?.[language] || category?.title?.en || text.hubTitle;

  return (
    <div
      className="breadcumb-wrapper"
      data-i18n-managed="true"
      style={{ backgroundImage: "url('/main-assets/img/bg/breadcrumb-bg.png')" }}
    >
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite"
        data-top="0"
        style={{
          backgroundImage:
            "url('/main-assets/img/shape/global-line-shape1.png')",
        }}
      />

      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>

          <ul className="breadcumb-menu">
            <li>
              <Link href="/">
                <i className="ri-home-4-fill" /> {text.home}
              </Link>
            </li>
            <li>
              <Link href="/shop">{text.shop}</Link>
            </li>
            {category ? (
              <>
                <li>
                  <Link href="/shop/elevators">{text.catalog}</Link>
                </li>
                <li className="active">{title}</li>
              </>
            ) : (
              <li className="active">{text.catalog}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}