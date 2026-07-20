"use client";

import Link from "next/link";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";

const copy = {
  es: { home: "INICIO", shop: "TIENDA", catalog: "ELEVADORES" },
  en: { home: "HOME", shop: "SHOP", catalog: "ELEVATORS" },
};

export default function ElevatorBreadcumb({ product, category }) {
  const language = useDocumentLanguage();
  const text = copy[language];
  const productTitle =
    product.title?.[language] || product.title?.en || product.id;
  const categoryTitle =
    category.title?.[language] || category.title?.en || category.slug;

  return (
    <div
      className="breadcumb-wrapper"
      data-i18n-managed="true"
      style={{ backgroundImage: "url('/main-assets/img/bg/breadcrumb-bg.png')" }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{productTitle}</h1>

          <ul className="breadcumb-menu">
            <li>
              <Link href="/">
                <i className="ri-home-4-fill" /> {text.home}
              </Link>
            </li>
            <li><Link href="/shop">{text.shop}</Link></li>
            <li><Link href="/shop/elevators">{text.catalog}</Link></li>
            <li>
              <Link href={`/shop/elevators/${category.slug}`}>
                {categoryTitle}
              </Link>
            </li>
            <li className="active">{productTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}