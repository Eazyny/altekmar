"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import catalog from "~/lib/elevatorCatalog";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./ElevatorCatalog.module.css";

const sharedCopy = {
  es: {
    explore: "EXPLORAR MODELOS",
    consult: "HABLAR CON UN ESPECIALISTA",
    models: "MODELOS",
    catalogEyebrow: "COLECCIÓN GOTS",
    searchLabel: "Buscar modelos",
    searchPlaceholder: "Buscar por nombre, descripción o modelo",
    sortLabel: "Ordenar modelos",
    defaultSort: "Orden editorial",
    ascending: "Nombre: A–Z",
    descending: "Nombre: Z–A",
    categories: "OTRAS CATEGORÍAS",
    showing: "modelos disponibles",
    authorized: "DISTRIBUIDOR AUTORIZADO",
    quote: "CONFIGURACIÓN BAJO COTIZACIÓN",
    view: "VER MODELO",
    noResults: "No encontramos modelos con ese término.",
    clear: "LIMPIAR BÚSQUEDA",
  },
  en: {
    explore: "EXPLORE MODELS",
    consult: "TALK TO A SPECIALIST",
    models: "MODELS",
    catalogEyebrow: "GOTS COLLECTION",
    searchLabel: "Search models",
    searchPlaceholder: "Search by name, description, or model",
    sortLabel: "Sort models",
    defaultSort: "Editorial order",
    ascending: "Name: A–Z",
    descending: "Name: Z–A",
    categories: "OTHER CATEGORIES",
    showing: "models available",
    authorized: "AUTHORIZED RETAILER",
    quote: "CONFIGURATION BY QUOTATION",
    view: "VIEW MODEL",
    noResults: "No models matched that search.",
    clear: "CLEAR SEARCH",
  },
};

const categoryCopy = {
  passenger: {
    es: {
      breadcrumb: "Pasajeros",
      eyebrow: "MOVILIDAD VERTICAL · PASAJEROS",
      title: "MOVIMIENTO PENSADO PARA",
      accent: "CADA LLEGADA.",
      intro:
        "Elevadores configurables para residencias, torres, hoteles y edificios de uso mixto, coordinados desde la selección hasta la instalación.",
      collection: "COLECCIÓN DE PASAJEROS",
      configurable: "CONFIGURABLES",
      catalogTitle: "Cabinas que responden al",
      catalogAccent: "ritmo del proyecto.",
      catalogIntro:
        "Compare acabados y configuraciones. La capacidad, velocidad, recorrido y tecnología se especifican con nuestro equipo técnico.",
    },
    en: {
      breadcrumb: "Passengers",
      eyebrow: "VERTICAL MOBILITY · PASSENGERS",
      title: "MOVEMENT DESIGNED FOR",
      accent: "EVERY ARRIVAL.",
      intro:
        "Configurable elevators for residences, towers, hotels, and mixed-use buildings, coordinated from selection through installation.",
      collection: "PASSENGER COLLECTION",
      configurable: "CONFIGURABLE",
      catalogTitle: "Cabins shaped around the",
      catalogAccent: "rhythm of the project.",
      catalogIntro:
        "Compare finishes and configurations. Capacity, speed, travel, and technology are specified with our technical team.",
    },
  },
  villa: {
    es: {
      breadcrumb: "Residenciales",
      eyebrow: "MOVILIDAD VERTICAL · RESIDENCIAS",
      title: "CONFORT INTEGRADO EN",
      accent: "CADA NIVEL.",
      intro:
        "Elevadores residenciales compactos y personalizables, coordinados con la arquitectura, los acabados y el ritmo cotidiano del hogar.",
      collection: "COLECCIÓN RESIDENCIAL",
      configurable: "A MEDIDA",
      catalogTitle: "Diseño privado,",
      catalogAccent: "movimiento cotidiano.",
      catalogIntro:
        "Compare cabinas y acabados para viviendas, dúplex y villas. Recorrido, acceso y dimensiones se definen con nuestro equipo técnico.",
    },
    en: {
      breadcrumb: "Villa & home",
      eyebrow: "VERTICAL MOBILITY · RESIDENCES",
      title: "COMFORT BUILT INTO",
      accent: "EVERY LEVEL.",
      intro:
        "Compact, customizable home elevators coordinated with the architecture, finishes, and everyday rhythm of a private residence.",
      collection: "RESIDENTIAL COLLECTION",
      configurable: "MADE TO FIT",
      catalogTitle: "Private design,",
      catalogAccent: "everyday movement.",
      catalogIntro:
        "Compare cabins and finishes for homes, duplexes, and villas. Travel, access, and dimensions are defined with our technical team.",
    },
  },
  observation: {
    es: {
      breadcrumb: "Panorámicos",
      eyebrow: "ARQUITECTURA · VISTA PANORÁMICA",
      title: "TRANSPARENCIA QUE",
      accent: "ELEVA EL ESPACIO.",
      intro:
        "Elevadores panorámicos integrados a fachadas, atrios y espacios representativos donde el recorrido también forma parte de la arquitectura.",
      collection: "COLECCIÓN PANORÁMICA",
      configurable: "INTEGRABLES",
      catalogTitle: "Una vista diseñada para",
      catalogAccent: "formar parte del edificio.",
      catalogIntro:
        "Compare geometrías, cristales y acabados. La estructura, el recorrido y la integración arquitectónica se coordinan proyecto por proyecto.",
    },
    en: {
      breadcrumb: "Observation",
      eyebrow: "ARCHITECTURE · PANORAMIC VIEW",
      title: "TRANSPARENCY THAT",
      accent: "ELEVATES THE SPACE.",
      intro:
        "Panoramic elevators integrated into façades, atriums, and statement spaces where the journey becomes part of the architecture.",
      collection: "PANORAMIC COLLECTION",
      configurable: "INTEGRATED",
      catalogTitle: "A view designed to",
      catalogAccent: "belong to the building.",
      catalogIntro:
        "Compare geometries, glazing, and finishes. Structure, travel, and architectural integration are coordinated for each project.",
    },
  },
  hospital: {
    es: {
      breadcrumb: "Hospitalarios",
      eyebrow: "SALUD · MOVILIDAD CRÍTICA",
      title: "RECORRIDOS PENSADOS PARA",
      accent: "CUIDAR CADA TRASLADO.",
      intro:
        "Elevadores hospitalarios dimensionados para camillas, personal y operación continua, con circulación clara y respuesta confiable.",
      collection: "COLECCIÓN HOSPITALARIA",
      configurable: "OPERACIÓN CONTINUA",
      catalogTitle: "Movilidad clínica con",
      catalogAccent: "prioridad humana.",
      catalogIntro:
        "Compare configuraciones para pacientes, camillas y equipos. Capacidad, puertas, controles y recorridos se coordinan con el entorno clínico.",
    },
    en: {
      breadcrumb: "Hospital",
      eyebrow: "HEALTHCARE · CRITICAL MOBILITY",
      title: "ROUTES DESIGNED TO",
      accent: "SUPPORT EVERY TRANSFER.",
      intro:
        "Hospital elevators sized for stretchers, staff, and continuous operation, with clear circulation and dependable response.",
      collection: "HOSPITAL COLLECTION",
      configurable: "CONTINUOUS DUTY",
      catalogTitle: "Clinical mobility with",
      catalogAccent: "people as the priority.",
      catalogIntro:
        "Compare configurations for patients, stretchers, and equipment. Capacity, doors, controls, and travel are coordinated with the clinical environment.",
    },
  },
  freight: {
    es: {
      breadcrumb: "Carga",
      eyebrow: "INDUSTRIA · MOVIMIENTO DE CARGA",
      title: "CAPACIDAD QUE",
      accent: "SOSTIENE LA OPERACIÓN.",
      intro:
        "Elevadores de carga configurados para almacenes, fábricas y centros logísticos donde cada recorrido debe responder con estabilidad.",
      collection: "COLECCIÓN DE CARGA",
      configurable: "ALTA CAPACIDAD",
      catalogTitle: "Potencia dimensionada para",
      catalogAccent: "el trabajo real.",
      catalogIntro:
        "Compare capacidades y configuraciones para carga industrial. Dimensiones, puertas, velocidad y recorrido se especifican según la operación.",
    },
    en: {
      breadcrumb: "Freight",
      eyebrow: "INDUSTRY · FREIGHT MOVEMENT",
      title: "CAPACITY THAT",
      accent: "KEEPS OPERATIONS MOVING.",
      intro:
        "Freight elevators configured for warehouses, factories, and logistics centers where every trip must perform with stability.",
      collection: "FREIGHT COLLECTION",
      configurable: "HIGH CAPACITY",
      catalogTitle: "Power sized around",
      catalogAccent: "the work itself.",
      catalogIntro:
        "Compare capacities and configurations for industrial loads. Dimensions, doors, speed, and travel are specified around the operation.",
    },
  },
};

const scene = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.085,
    },
  },
};

const rise = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1] },
  },
};

function titleFor(product, language) {
  return product.title?.[language] || product.title?.en || product.id;
}

function descriptionFor(product, language) {
  return product.description?.[language] || product.description?.en || "";
}

function imageFor(product) {
  return (
    product.featuredImage ||
    product.images?.[0]?.publicUrl ||
    "/main-assets/img/product/product_1_1.jpg"
  );
}

export default function ElevatorCategoryCatalog({ categorySlug = "passenger" }) {
  const language = useDocumentLanguage();
  const reduceMotion = useReducedMotion();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const categoryText = categoryCopy[categorySlug] || categoryCopy.passenger;
  const text = {
    ...(sharedCopy[language] || sharedCopy.es),
    ...(categoryText[language] || categoryText.es),
  };
  const category = catalog.categories.find((item) => item.slug === categorySlug);

  const products = useMemo(() => {
    if (!category) return [];

    const normalized = query.trim().toLocaleLowerCase(language);
    const filtered = category.products.filter((product) =>
      [
        titleFor(product, language),
        descriptionFor(product, language),
        product.sku || "",
      ]
        .join(" ")
        .toLocaleLowerCase(language)
        .includes(normalized),
    );

    if (sort === "name-asc") {
      return [...filtered].sort((a, b) =>
        titleFor(a, language).localeCompare(titleFor(b, language), language),
      );
    }

    if (sort === "name-desc") {
      return [...filtered].sort((a, b) =>
        titleFor(b, language).localeCompare(titleFor(a, language), language),
      );
    }

    return filtered;
  }, [category, language, query, sort]);

  if (!category) return null;

  return (
    <main className={styles.passengerPage} data-i18n-managed="true">
      <motion.section
        className={`${styles.hero} ${styles.passengerHero}`}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={scene}
      >
        <div
          className={styles.heroImage}
          style={{ "--hero-image": `url("${imageFor(category.products[0])}")` }}
          aria-hidden="true"
        />
        <div className={styles.heroVeil} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroInner}>
          <motion.div className={styles.heroCopy} variants={rise}>
            <nav className={styles.passengerBreadcrumb} aria-label="Breadcrumb">
              <Link href="/">Altekmar</Link>
              <span aria-hidden="true">/</span>
              <Link href="/shop/elevators">Elevadores</Link>
              <span aria-hidden="true">/</span>
              <span>{text.breadcrumb}</span>
            </nav>

            <span className={styles.eyebrow}>{text.eyebrow}</span>
            <h1 className={styles.heroTitle}>
              <span>{text.title}</span>
              <em>{text.accent}</em>
            </h1>
            <p className={styles.heroIntro}>{text.intro}</p>

            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href={`#${category.slug}-models`}>
                {text.explore}
                <span aria-hidden="true">↓</span>
              </Link>
              <Link className={styles.secondaryAction} href="/contact">
                {text.consult}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </motion.div>

          <motion.aside className={styles.heroRail} variants={rise}>
            <span className={styles.railLabel}>{text.collection}</span>
            <div className={styles.passengerRailMark} aria-hidden="true">
              <span>
                {String(
                  catalog.categories.findIndex((item) => item.slug === category.slug) +
                    1,
                ).padStart(2, "0")}
              </span>
              <i />
              <span>{String(category.productCount).padStart(2, "0")}</span>
            </div>
          </motion.aside>

          <motion.div className={styles.heroMetrics} variants={rise}>
            <div>
              <strong>{String(category.productCount).padStart(2, "0")}</strong>
              <span>{text.models}</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>{text.configurable}</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id={`${category.slug}-models`}
        className={`${styles.catalogSection} ${styles.passengerCatalog}`}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.04 }}
        variants={scene}
      >
        <div className={styles.catalogInner}>
          <motion.header className={styles.catalogHeader} variants={rise}>
            <span className={styles.sectionEyebrow}>{text.catalogEyebrow}</span>
            <h2>
              {text.catalogTitle}
              <em>{text.catalogAccent}</em>
            </h2>
            <div className={styles.headerNote}>
              <span aria-hidden="true">
                {String(category.productCount).padStart(2, "0")}
              </span>
              <p>{text.catalogIntro}</p>
            </div>
          </motion.header>

          <motion.div className={styles.catalogTools} variants={rise}>
            <label className={styles.searchControl}>
              <span>{text.searchLabel}</span>
              <span className={styles.searchField}>
                <input
                  type="search"
                  value={query}
                  placeholder={text.searchPlaceholder}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <i className="ri-search-line" aria-hidden="true" />
              </span>
            </label>

            <label className={styles.sortControl}>
              <span>{text.sortLabel}</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="default">{text.defaultSort}</option>
                <option value="name-asc">{text.ascending}</option>
                <option value="name-desc">{text.descending}</option>
              </select>
            </label>

            <div className={styles.resultCount} aria-live="polite">
              <strong>{String(products.length).padStart(2, "0")}</strong>
              <span>{text.showing}</span>
            </div>
          </motion.div>

          <motion.nav
            className={styles.categoryNav}
            aria-label={text.categories}
            variants={rise}
          >
            <span>{text.categories}</span>
            <div>
              {catalog.categories.map((item) => (
                <Link
                  href={`/shop/elevators/${item.slug}`}
                  aria-current={item.slug === category.slug ? "page" : undefined}
                  key={item.slug}
                >
                  {item.title?.[language] || item.title?.en}
                </Link>
              ))}
            </div>
          </motion.nav>

          {products.length ? (
            <div className={styles.productGrid}>
              {products.map((product, index) => {
                const title = titleFor(product, language);
                const description = descriptionFor(product, language);
                const href = `/shop/elevators/${category.slug}/${product.id}`;
                const isFeature =
                  category.productCount <= 4 ||
                  (category.productCount > 8 &&
                    (index % 9 === 0 || index % 9 === 5));
                const isMedium =
                  category.productCount > 4 && category.productCount <= 6;

                return (
                  <motion.article
                    className={`${styles.productCard} ${
                      isFeature ? styles.productCardFeature : ""
                    } ${isMedium ? styles.productCardMedium : ""}`}
                    key={product.id}
                    tabIndex={0}
                    layout={!reduceMotion}
                    variants={rise}
                  >
                    <span
                      className={styles.cardMedia}
                      style={{ "--card-image": `url("${imageFor(product)}")` }}
                      aria-hidden="true"
                    />
                    <span className={styles.cardShade} aria-hidden="true" />

                    <div className={styles.cardContent}>
                      <div className={styles.cardHeading}>
                        <span className={styles.cardIndex}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={styles.cardRule} aria-hidden="true" />
                      </div>

                      <h3>{title}</h3>

                      <div className={styles.cardDetails}>
                        <div className={styles.cardDetailsInner}>
                          <span className={styles.authorized}>{text.authorized}</span>
                          <p>{description}</p>
                          <div className={styles.cardFooter}>
                            <span>{text.quote}</span>
                            <Link href={href} aria-label={`${text.view}: ${title}`}>
                              {text.view} <span aria-hidden="true">↗</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <motion.div className={styles.emptyState} variants={rise}>
              <span aria-hidden="true">00</span>
              <p>{text.noResults}</p>
              <button type="button" onClick={() => setQuery("")}>
                {text.clear}
              </button>
            </motion.div>
          )}
        </div>
      </motion.section>
    </main>
  );
}
