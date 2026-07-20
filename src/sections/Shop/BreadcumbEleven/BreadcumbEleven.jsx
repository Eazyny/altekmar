"use client";

import Link from "next/link";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";

const copy = {
  es: {
    title: "Elevadores de pasajeros",
    home: "INICIO",
    shop: "TIENDA",
    active: "ELEVADORES",
  },
  en: {
    title: "Passenger Elevators",
    home: "HOME",
    shop: "SHOP",
    active: "ELEVATORS",
  },
};

const BreadcumbEleven = () => {
  const language = useDocumentLanguage();
  const text = copy[language];

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
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">{text.title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">
                    <i className="ri-home-4-fill" /> {text.home}
                  </Link>
                </li>
                <li>
                  <Link href="/shop">{text.shop}</Link>
                </li>
                <li className="active">{text.active}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcumbEleven;