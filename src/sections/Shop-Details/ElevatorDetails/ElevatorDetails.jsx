"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";

const copy = {
  es: {
    quote: "Precio bajo cotizaciÃ³n",
    authorized: "Altekmar Â· Distribuidor autorizado",
    request: "Solicitar cotizaciÃ³n",
    back: "Volver a la categorÃ­a",
    description: "DescripciÃ³n",
    specifications: "Especificaciones",
    manufacturer: "Fabricante",
    category: "CategorÃ­a",
    source: "InformaciÃ³n del fabricante",
    sourceText:
      "Consulta la ficha original del fabricante para informaciÃ³n adicional.",
    sourceButton: "Ver ficha del fabricante",
    related: "Productos relacionados.",
    viewAll: "VER TODA LA CATEGORÃA",
    installation:
      "Venta, coordinaciÃ³n tÃ©cnica e instalaciÃ³n profesional disponibles.",
    configuration:
      "La configuraciÃ³n final se define segÃºn capacidad, recorrido y proyecto.",
    availability:
      "Disponibilidad, transporte y tiempos se confirman en la cotizaciÃ³n.",
    noSpecifications:
      "Las especificaciones se confirmarÃ¡n durante la evaluaciÃ³n tÃ©cnica.",
  },
  en: {
    quote: "Pricing by quotation",
    authorized: "Altekmar Â· Authorized retailer",
    request: "Request a quote",
    back: "Back to category",
    description: "Description",
    specifications: "Specifications",
    manufacturer: "Manufacturer",
    category: "Category",
    source: "Manufacturer information",
    sourceText:
      "View the original manufacturer listing for additional information.",
    sourceButton: "View manufacturer listing",
    related: "Related products.",
    viewAll: "VIEW FULL CATEGORY",
    installation:
      "Sales, technical coordination and professional installation are available.",
    configuration:
      "Final configuration is defined according to capacity, travel and project requirements.",
    availability:
      "Availability, transportation and lead times are confirmed in the quotation.",
    noSpecifications:
      "Specifications will be confirmed during the technical assessment.",
  },
};

function titleFor(product, language) {
  return product.title?.[language] || product.title?.en || product.id;
}

function descriptionFor(product, language) {
  return product.description?.[language] || product.description?.en || "";
}

function imagesFor(product) {
  const images = (product.images || [])
    .map((image) => image.publicUrl)
    .filter(Boolean);

  if (product.featuredImage && !images.includes(product.featuredImage)) {
    images.unshift(product.featuredImage);
  }

  return images.length
    ? images
    : ["/main-assets/img/product/product_details_1_1.jpg"];
}

export default function ElevatorDetails({
  product,
  category,
  relatedProducts,
}) {
  const language = useDocumentLanguage();
  const text = copy[language];
  const images = useMemo(() => imagesFor(product), [product]);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeTab, setActiveTab] = useState("description");
  const title = titleFor(product, language);
  const description = descriptionFor(product, language);
  const categoryTitle =
    category.title?.[language] || category.title?.en || category.slug;
  const specifications = Object.entries(product.specifications || {});

  return (
    <section
      className="product-details space altekmar-elevator-details"
      data-i18n-managed="true"
    >
      <div className="container">
        <div className="row gx-60">
          <div className="col-xl-6">
            <div className="altekmar-elevator-gallery">
              <div className="product-big-img">
                <div className="img">
                  <img src={activeImage} alt={title} />
                </div>
              </div>

              {images.length > 1 ? (
                <div className="altekmar-elevator-thumbnails">
                  {images.map((image, index) => (
                    <button
                      className={activeImage === image ? "is-active" : ""}
                      type="button"
                      key={image}
                      onClick={() => setActiveImage(image)}
                      aria-label={`${title} ${index + 1}`}
                    >
                      <img src={image} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="col-xl-6 align-self-center">
            <div className="product-about">
              <p className="price altekmar-detail-quote">{text.quote}</p>
              <h2 className="product-title">{title}</h2>

              <div className="product-rating altekmar-authorized-retailer">
                <span className="star-rating">
                  <i className="ri-verified-badge-fill" />
                </span>
                {text.authorized}
              </div>

              <p className="text">{description}</p>

              <div className="checklist">
                <ul>
                  <li><i className="ri-checkbox-circle-line" />{text.installation}</li>
                  <li><i className="ri-checkbox-circle-line" />{text.configuration}</li>
                  <li><i className="ri-checkbox-circle-line" />{text.availability}</li>
                </ul>
              </div>

              <div className="actions altekmar-detail-actions">
                <Link
                  href={`/contact?product=${encodeURIComponent(
                    product.id,
                  )}&category=${category.slug}`}
                  className="btn"
                >
                  {text.request}
                </Link>

                <Link
                  href={`/shop/elevators/${category.slug}`}
                  className="btn style-border"
                >
                  {text.back}
                </Link>
              </div>

              <div className="product_meta">
                <span>
                  {text.category}:{" "}
                  <Link href={`/shop/elevators/${category.slug}`}>
                    {categoryTitle}
                  </Link>
                </span>
                <span>
                  {text.manufacturer}:{" "}
                  <a
                    href={product.source?.english}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {product.manufacturer || "GOTS Elevator"}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-tab-area">
          <ul className="nav product-tab-style1" role="tablist">
            {[
              ["description", text.description],
              ["specifications", text.specifications],
              ["manufacturer", text.manufacturer],
            ].map(([id, label]) => (
              <li className="nav-item" role="presentation" key={id}>
                <button
                  className={`nav-link ${activeTab === id ? "active" : ""}`}
                  type="button"
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            <div
              className={`tab-pane fade ${
                activeTab === "description" ? "show active" : ""
              }`}
            >
              <p>{description}</p>
            </div>

            <div
              className={`tab-pane fade ${
                activeTab === "specifications" ? "show active" : ""
              }`}
            >
              {specifications.length ? (
                <table className="woocommerce-table">
                  <tbody>
                    {specifications.map(([label, value]) => (
                      <tr key={label}>
                        <th>{label}</th>
                        <td>{String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>{text.noSpecifications}</p>
              )}
            </div>

            <div
              className={`tab-pane fade ${
                activeTab === "manufacturer" ? "show active" : ""
              }`}
            >
              <h3>{text.source}</h3>
              <p>{text.sourceText}</p>
              <a
                className="btn"
                href={
                  language === "es" && product.source?.spanish
                    ? product.source.spanish
                    : product.source?.english
                }
                target="_blank"
                rel="noreferrer"
              >
                {text.sourceButton}
              </a>
            </div>
          </div>
        </div>

        {relatedProducts.length ? (
          <div className="space-extra-top shop-details-card">
            <div className="row justify-content-between">
              <div className="col-md-6">
                <div className="title-area text-md-start text-center">
                  <h2 className="sec-title">{text.related}</h2>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="sec-btn mb-40">
                  <Link
                    href={`/shop/elevators/${category.slug}`}
                    className="btn"
                  >
                    {text.viewAll}
                  </Link>
                </div>
              </div>
            </div>

            <div className="row gy-40">
              {relatedProducts.map((related) => {
                const relatedTitle = titleFor(related, language);
                const relatedImage =
                  related.featuredImage ||
                  related.images?.[0]?.publicUrl ||
                  "/main-assets/img/product/product_1_1.jpg";

                return (
                  <div className="col-xl-3 col-md-6" key={related.id}>
                    <article className="product-card altekmar-elevator-card">
                      <div className="product-img">
                        <img
                          src={relatedImage}
                          alt={relatedTitle}
                          loading="lazy"
                        />
                      </div>
                      <div className="product-content">
                        <h3 className="product-title">
                          <Link
                            href={`/shop/elevators/${category.slug}/${related.id}`}
                          >
                            {relatedTitle}
                          </Link>
                        </h3>
                        <span className="price altekmar-quote-price">
                          {text.quote}
                        </span>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}