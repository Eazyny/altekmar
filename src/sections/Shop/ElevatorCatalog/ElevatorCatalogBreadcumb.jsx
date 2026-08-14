"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import catalog from "~/data/gots-elevator-catalog.json";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./ElevatorCatalog.module.css";

const copy = {
  es: {
    home: "INICIO",
    shop: "SERVICIOS",
    catalog: "ELEVADORES",
    hubTitle: "Categorías de elevadores",
    eyebrow: "MOVILIDAD VERTICAL · CATÁLOGO",
    title: "MOVILIDAD QUE",
    accent: "DEFINE EL PROYECTO.",
    intro:
      "Elevadores, escaleras y soluciones de transporte vertical seleccionadas para cada entorno.",
    explore: "EXPLORAR CATEGORÍAS",
    consult: "SOLICITAR ASESORÍA",
    categories: "CATEGORÍAS",
    models: "MODELOS",
    collection: "COLECCIÓN GOTS",
  },
  en: {
    home: "HOME",
    shop: "SERVICES",
    catalog: "ELEVATORS",
    hubTitle: "Elevator categories",
    eyebrow: "VERTICAL MOBILITY · CATALOG",
    title: "MOBILITY THAT",
    accent: "DEFINES THE PROJECT.",
    intro:
      "Elevators, escalators, and vertical transportation solutions selected for every environment.",
    explore: "EXPLORE CATEGORIES",
    consult: "REQUEST GUIDANCE",
    categories: "CATEGORIES",
    models: "MODELS",
    collection: "GOTS COLLECTION",
  },
};

const scene = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.09,
    },
  },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ElevatorCatalogBreadcumb({ categorySlug }) {
  const language = useDocumentLanguage();
  const reduceMotion = useReducedMotion();
  const text = copy[language];
  const category = categorySlug
    ? catalog.categories.find((item) => item.slug === categorySlug)
    : null;
  const title =
    category?.title?.[language] || category?.title?.en || text.hubTitle;

  if (!categorySlug) {
    const categoryCount = catalog.categories.length;
    const productCount = catalog.categories.reduce(
      (total, item) => total + Number(item.productCount || 0),
      0,
    );

    return (
      <motion.section
        className={styles.hero}
        data-i18n-managed="true"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={scene}
      >
        <div className={styles.heroImage} aria-hidden="true" />
        <div className={styles.heroVeil} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroInner}>
          <motion.div className={styles.heroCopy} variants={rise}>
            <span className={styles.eyebrow}>{text.eyebrow}</span>
            <h1 className={styles.heroTitle}>
              <span>{text.title}</span>
              <em>{text.accent}</em>
            </h1>
            <p className={styles.heroIntro}>{text.intro}</p>

            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href="#elevator-categories">
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
            <div className={styles.railNumbers} aria-hidden="true">
              {catalog.categories.map((item, index) => (
                <span key={item.slug}>{String(index + 1).padStart(2, "0")}</span>
              ))}
            </div>
          </motion.aside>

          <motion.div className={styles.heroMetrics} variants={rise}>
            <div>
              <strong>{String(categoryCount).padStart(2, "0")}</strong>
              <span>{text.categories}</span>
            </div>
            <div>
              <strong>{String(productCount).padStart(2, "0")}</strong>
              <span>{text.models}</span>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  }

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
              <Link href="/services">{text.shop}</Link>
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
