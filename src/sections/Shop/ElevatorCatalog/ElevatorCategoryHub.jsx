"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import catalog from "~/lib/elevatorCatalog";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./ElevatorCatalog.module.css";

const copy = {
  es: {
    eyebrow: "CINCO FORMAS DE ELEVAR",
    title: "Una solución para cada",
    accent: "forma de avanzar.",
    intro:
      "Desde residencias privadas hasta infraestructura de alto tránsito, cada categoría responde a una necesidad distinta.",
    products: "productos",
    view: "EXPLORAR CATEGORÍA",
    authorized: "DISTRIBUIDOR AUTORIZADO",
  },
  en: {
    eyebrow: "FIVE WAYS TO RISE",
    title: "A solution for every",
    accent: "way forward.",
    intro:
      "From private residences to high-traffic infrastructure, each category answers a different need.",
    products: "products",
    view: "EXPLORE CATEGORY",
    authorized: "AUTHORIZED RETAILER",
  },
};

const cardSpans = ["wide", "standard", "standard", "wide", "wide"];

const scene = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.085,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.66, ease: [0.16, 1, 0.3, 1] },
  },
};

function imageForCategory(category) {
  const first = category.products?.find(
    (product) => product.featuredImage || product.images?.[0]?.publicUrl,
  );

  return (
    first?.featuredImage ||
    first?.images?.[0]?.publicUrl ||
    "/main-assets/img/product/product_1_1.jpg"
  );
}

export default function ElevatorCategoryHub() {
  const language = useDocumentLanguage();
  const reduceMotion = useReducedMotion();
  const text = copy[language];

  return (
    <motion.section
      id="elevator-categories"
      className={styles.catalogSection}
      data-i18n-managed="true"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={scene}
    >
      <div className={styles.catalogInner}>
        <motion.header className={styles.catalogHeader} variants={reveal}>
          <span className={styles.sectionEyebrow}>{text.eyebrow}</span>
          <h2>
            {text.title}
            <em>{text.accent}</em>
          </h2>
          <div className={styles.headerNote}>
            <span aria-hidden="true">
              {String(catalog.categories.length).padStart(2, "0")}
            </span>
            <p>{text.intro}</p>
          </div>
        </motion.header>

        <div className={styles.categoryGrid}>
          {catalog.categories.map((category, index) => {
            const title =
              category.title?.[language] || category.title?.en || category.slug;
            const description =
              category.description?.[language] ||
              category.description?.en ||
              "";

            return (
              <motion.article
                className={`${styles.categoryCard} ${styles[cardSpans[index]]}`}
                key={category.slug}
                tabIndex={0}
                variants={reveal}
              >
                <span
                  className={styles.cardMedia}
                  style={{ "--card-image": `url("${imageForCategory(category)}")` }}
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
                        <span>
                          {category.productCount} {text.products}
                        </span>
                        <Link href={`/shop/elevators/${category.slug}`}>
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
      </div>
    </motion.section>
  );
}
