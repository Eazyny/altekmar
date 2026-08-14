"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./ElevatorDetails.module.css";

const copy = {
  es: {
    quote: "Precio bajo cotización",
    authorized: "Distribuidor autorizado",
    request: "Solicitar cotización",
    back: "Ver la colección",
    manufacturer: "Fabricante",
    category: "Colección",
    sourceTitle: "Información directa del fabricante",
    sourceText:
      "Consulta la ficha original para conocer documentación y detalles adicionales del modelo.",
    sourceButton: "Ver ficha original",
    related: "Más opciones para comparar",
    relatedIntro:
      "Modelos de la misma colección seleccionados para continuar tu evaluación.",
    viewAll: "Ver toda la colección",
    installation: "Instalación profesional",
    installationText:
      "Coordinamos suministro, montaje y puesta en marcha con personal técnico.",
    configuration: "Configuración por proyecto",
    configurationText:
      "Capacidad, recorrido y acabados se definen según el espacio y el uso previsto.",
    availability: "Cotización transparente",
    availabilityText:
      "Confirmamos disponibilidad, transporte y tiempos antes de iniciar.",
    technicalTitle: "Configuración técnica",
    technicalIntro:
      "Datos de referencia para orientar la selección. La configuración definitiva se valida durante la evaluación técnica.",
    noSpecifications:
      "Este modelo se configura de acuerdo con las condiciones del proyecto. Nuestro equipo confirmará capacidad, dimensiones, recorrido y acabados durante la evaluación.",
    assessment: "Solicitar evaluación técnica",
    imageLabel: "Imagen",
    galleryLabel: "Galería del producto",
    relatedAction: "Ver modelo",
  },
  en: {
    quote: "Pricing by quotation",
    authorized: "Authorized retailer",
    request: "Request a quote",
    back: "View the collection",
    manufacturer: "Manufacturer",
    category: "Collection",
    sourceTitle: "Information from the manufacturer",
    sourceText:
      "View the original listing for documentation and additional details about this model.",
    sourceButton: "View original listing",
    related: "More options to compare",
    relatedIntro:
      "Models from the same collection selected to continue your evaluation.",
    viewAll: "View full collection",
    installation: "Professional installation",
    installationText:
      "We coordinate supply, installation and commissioning with technical personnel.",
    configuration: "Project-specific configuration",
    configurationText:
      "Capacity, travel and finishes are defined around the space and intended use.",
    availability: "Transparent quotation",
    availabilityText:
      "Availability, transportation and lead times are confirmed before work begins.",
    technicalTitle: "Technical configuration",
    technicalIntro:
      "Reference data to guide selection. Final configuration is validated during the technical assessment.",
    noSpecifications:
      "This model is configured around the project conditions. Our team will confirm capacity, dimensions, travel and finishes during the assessment.",
    assessment: "Request technical assessment",
    imageLabel: "Image",
    galleryLabel: "Product gallery",
    relatedAction: "View model",
  },
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

function titleFor(product, language) {
  return cleanText(product.title?.[language] || product.title?.en || product.id);
}

function descriptionFor(product, language) {
  return cleanText(product.description?.[language] || product.description?.en || "");
}

const spanishSpecificationLabels = {
  Application: "Aplicación",
  Brand: "Marca",
  "Cabin Depth": "Profundidad de cabina",
  "Cabin Dimension": "Dimensiones de cabina",
  "Cabin Dimensions": "Dimensiones de cabina",
  "Cabin Frame": "Estructura de cabina",
  "Cabin Material": "Material de cabina",
  Capacity: "Capacidad",
  Certification: "Certificación",
  Component: "Componente",
  "Control System": "Sistema de control",
  "Door Clearance": "Altura libre de puerta",
  "Door Knife": "Mecanismo de puerta",
  "Door Opening": "Apertura de puerta",
  "Door Systems": "Sistemas de puerta",
  "Door Type": "Tipo de puerta",
  "Door opening dimensions mm": "Dimensiones de apertura de puerta (mm)",
  "Drive System": "Sistema de tracción",
  "Drive Type": "Tipo de tracción",
  "Elevator Type": "Tipo de elevador",
  Feature: "Características",
  "Framing Finishes": "Acabados de estructura",
  "Glass Type": "Tipo de vidrio",
  "Handrail Options": "Opciones de pasamanos",
  "Heavy-duty option": "Configuración de alta capacidad",
  "Interior Finish": "Acabado interior",
  Item: "Elemento",
  "Leveling Accuracy": "Precisión de nivelación",
  "Levelling Accuracy": "Precisión de nivelación",
  "Load (kg)": "Capacidad de carga (kg)",
  "Load Capacity": "Capacidad de carga",
  "Load Capacity (KG)": "Capacidad de carga (kg)",
  "Machine Room": "Cuarto de máquinas",
  Materials: "Materiales",
  "Max Travel Height": "Recorrido máximo",
  Model: "Modelo",
  "Model Series": "Serie",
  "Motor Power": "Potencia del motor",
  "No.": "Configuración",
  "Noise Level": "Nivel de ruido",
  "Overhead Height": "Altura superior",
  "Pit Depth": "Profundidad de foso",
  "Place of Origin": "País de origen",
  "Power Supply": "Alimentación eléctrica",
  "Product Name": "Nombre del producto",
  "Rated Capacity": "Capacidad nominal",
  "Rated Load": "Carga nominal",
  "Rated Load (Typical)": "Carga nominal típica",
  "Rated Load(kg)": "Carga nominal (kg)",
  "Rated Speed": "Velocidad nominal",
  "Safety Compliance": "Normativas de seguridad",
  Specifications: "Especificaciones",
  Speed: "Velocidad",
  "Speed Range": "Rango de velocidad",
  Type: "Tipo",
  Warranty: "Garantía",
};

function normalizeSpecificationLabel(label) {
  return cleanText(label)
    .replace(/\u200b/g, "")
    .replace(/[（]/g, "(")
    .replace(/[）]/g, ")")
    .trim();
}

function specificationLabelFor(label, language) {
  const normalized = normalizeSpecificationLabel(label);

  if (language !== "es") return normalized;
  if (spanishSpecificationLabels[normalized]) {
    return spanishSpecificationLabels[normalized];
  }
  if (/^\d+(?:\.\d+)?$/.test(normalized)) {
    return Number(normalized) >= 100
      ? `Capacidad ${normalized} kg`
      : `Configuración ${normalized}`;
  }

  return normalized;
}

function specificationValueFor(value, language) {
  const normalized = cleanText(value);
  if (language !== "es") return normalized;

  return normalized
    .replace(/Passenger Elevator/g, "Elevador de pasajeros")
    .replace(/Office Buildings, Hotels, Residential/g, "Edificios de oficinas, hoteles y residencias")
    .replace(/Computerized Elevator Control/g, "Control computarizado de elevador")
    .replace(/Stainless Steel\/Wood\/Customized/g, "Acero inoxidable, madera o personalizado")
    .replace(/Low Noise, Smooth Operation/g, "Bajo nivel de ruido y operación suave")
    .replace(/12 Months After Shipping/g, "12 meses después del envío")
    .replace(/Side-opening double-fold/g, "Apertura lateral plegable doble")
    .replace(/Split in half/g, "Apertura central")
    .replace(/\bPersons\b/g, "personas")
    .replace(/\btons\b/g, "toneladas");
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
  const title = titleFor(product, language);
  const description = descriptionFor(product, language);
  const categoryTitle = cleanText(
    category.title?.[language] || category.title?.en || category.slug,
  );
  const categoryHref = categoryRouteFor(category);
  const specifications = Object.entries(product.specifications || {}).filter(
    ([, value]) => value !== null && value !== undefined && String(value).trim(),
  );
  const manufacturerUrl =
    language === "es" && product.source?.spanish
      ? product.source.spanish
      : product.source?.english;

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  const promises = [
    ["ri-tools-line", text.installation, text.installationText],
    ["ri-layout-4-line", text.configuration, text.configurationText],
    ["ri-file-list-3-line", text.availability, text.availabilityText],
  ];

  return (
    <main className={styles.page} data-i18n-managed="true">
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.mediaColumn}>
            <figure className={styles.mediaStage}>
              <img key={activeImage} src={activeImage} alt={title} />
              <figcaption>
                <span>{categoryTitle}</span>
                <span>{String(images.indexOf(activeImage) + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
              </figcaption>
            </figure>

            {images.length > 1 ? (
              <div className={styles.thumbnails} aria-label={`${text.galleryLabel}: ${title}`}>
                {images.map((image, index) => (
                  <button
                    className={activeImage === image ? styles.activeThumbnail : ""}
                    type="button"
                    key={image}
                    onClick={() => setActiveImage(image)}
                    aria-label={`${text.imageLabel} ${index + 1}: ${title}`}
                    aria-pressed={activeImage === image}
                  >
                    <img src={image} alt="" loading="lazy" />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className={styles.heroCopy}>
            <h1>{title}</h1>
            <p className={styles.description}>{description}</p>

            <div className={styles.status}>
              <span>
                <i className="ri-price-tag-3-line" aria-hidden="true" />
                {text.quote}
              </span>
              <span>
                <i className="ri-verified-badge-fill" aria-hidden="true" />
                {product.manufacturer || "GOTS Elevator"} · {text.authorized}
              </span>
            </div>

            <div className={styles.actions}>
              <Link
                href={`/contact?product=${encodeURIComponent(product.id)}&category=${category.slug}`}
                className={styles.primaryAction}
              >
                <span>{text.request}</span>
                <i className="ri-arrow-right-up-line" aria-hidden="true" />
              </Link>
              <a
                href={categoryHref}
                className={styles.secondaryAction}
              >
                <span>{text.back}</span>
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </a>
            </div>

            <dl className={styles.meta}>
              <div>
                <dt>{text.category}</dt>
                <dd><a href={categoryHref}>{categoryTitle}</a></dd>
              </div>
              <div>
                <dt>{text.manufacturer}</dt>
                <dd>{product.manufacturer || "GOTS Elevator"}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.assurance} aria-label={text.configuration}>
        <div className={styles.assuranceInner}>
          {promises.map(([icon, heading, body]) => (
            <article className={styles.promise} key={heading}>
              <i className={icon} aria-hidden="true" />
              <div>
                <h2>{heading}</h2>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.technical}>
        <div className={styles.technicalInner}>
          <header className={styles.technicalHeader}>
            <h2>{text.technicalTitle}</h2>
            <p>{text.technicalIntro}</p>
          </header>

          {specifications.length ? (
            <dl className={styles.specifications}>
              {specifications.map(([label, value]) => (
                <div className={styles.specification} key={label}>
                  <dt>{specificationLabelFor(label, language)}</dt>
                  <dd>{specificationValueFor(value, language)}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <div className={styles.emptySpecifications}>
              <p>{text.noSpecifications}</p>
              <Link
                href={`/contact?product=${encodeURIComponent(product.id)}&category=${category.slug}`}
              >
                {text.assessment}
                <i className="ri-arrow-right-up-line" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {manufacturerUrl ? (
        <section className={styles.source}>
          <div className={styles.sourceInner}>
            <div>
              <h2>{text.sourceTitle}</h2>
              <p>{text.sourceText}</p>
            </div>
            <a href={manufacturerUrl} target="_blank" rel="noreferrer">
              <span>{text.sourceButton}</span>
              <i className="ri-external-link-line" aria-hidden="true" />
            </a>
          </div>
        </section>
      ) : null}

      {relatedProducts.length ? (
        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <header className={styles.relatedHeader}>
              <div>
                <h2>{text.related}</h2>
                <p>{text.relatedIntro}</p>
              </div>
              <a href={categoryHref}>
                {text.viewAll}
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </a>
            </header>

            <div className={styles.relatedGrid}>
              {relatedProducts.map((related, index) => {
                const relatedTitle = titleFor(related, language);
                const relatedImage =
                  related.featuredImage ||
                  related.images?.[0]?.publicUrl ||
                  "/main-assets/img/product/product_1_1.jpg";

                return (
                  <Link
                    className={styles.relatedCard}
                    href={`/shop/elevators/${category.slug}/${related.id}`}
                    key={related.id}
                  >
                    <img src={relatedImage} alt="" loading="lazy" />
                    <span className={styles.relatedShade} aria-hidden="true" />
                    <span className={styles.relatedNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={styles.relatedContent}>
                      <strong>{relatedTitle}</strong>
                      <span>
                        {text.relatedAction}
                        <i className="ri-arrow-right-up-line" aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
