"use client";

import Link from "next/link";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./CorporateServices.module.css";

const routeMap = {
  generators: {
    number: "02",
    mark: "POWER",
    es: {
      eyebrow: "GENERADORES Y RESPALDO ELÉCTRICO",
      title: "Energía confiable cuando el proyecto más la necesita.",
      body: "Soluciones de generación y respaldo para mantener hogares, empresas e instalaciones críticas operando con seguridad.",
      bullets: ["Evaluación de carga", "Selección de capacidad", "Transferencia y protección", "Instalación y soporte"],
      applications: ["Residencias", "Comercios", "Instituciones", "Industria"],
    },
    en: {
      eyebrow: "GENERATORS AND BACKUP POWER",
      title: "Reliable power when the project needs it most.",
      body: "Generation and backup solutions that keep homes, businesses, and critical facilities operating safely.",
      bullets: ["Load assessment", "Capacity selection", "Transfer and protection", "Installation and support"],
      applications: ["Homes", "Retail", "Institutions", "Industry"],
    },
  },
  "air-conditioning": {
    number: "03",
    mark: "CLIMATE",
    es: {
      eyebrow: "AIRE ACONDICIONADO",
      title: "Confort y control climático diseñados alrededor del espacio.",
      body: "Equipos, instalación y distribución de aire coordinados para ambientes eficientes y cómodos.",
      bullets: ["Evaluación térmica", "Selección de equipos", "Instalación profesional", "Mantenimiento y soporte"],
      applications: ["Residencias", "Locales", "Oficinas", "Instituciones"],
    },
    en: {
      eyebrow: "AIR CONDITIONING",
      title: "Comfort and climate control designed around the space.",
      body: "Equipment, installation, and air distribution coordinated for efficient and comfortable environments.",
      bullets: ["Thermal assessment", "Equipment selection", "Professional installation", "Maintenance and support"],
      applications: ["Homes", "Retail", "Offices", "Institutions"],
    },
  },
  "security-systems": {
    number: "04",
    mark: "SECURE",
    es: {
      eyebrow: "SISTEMAS DE SEGURIDAD",
      title: "Protección integrada para controlar accesos y responder a riesgos.",
      body: "Alarmas, sensores, control de acceso e intercomunicación coordinados bajo una sola estrategia.",
      bullets: ["Evaluación de riesgos", "Control de acceso", "Alarmas e intrusión", "Integración y soporte"],
      applications: ["Residencias", "Condominios", "Comercios", "Instituciones"],
    },
    en: {
      eyebrow: "SECURITY SYSTEMS",
      title: "Integrated protection for access control and risk response.",
      body: "Alarms, sensors, access control, and intercoms coordinated under one strategy.",
      bullets: ["Risk assessment", "Access control", "Alarm and intrusion", "Integration and support"],
      applications: ["Homes", "Condominiums", "Retail", "Institutions"],
    },
  },
  "cameras-surveillance": {
    number: "05",
    mark: "VISION",
    es: {
      eyebrow: "CÁMARAS Y VIDEOVIGILANCIA",
      title: "Visibilidad continua para proteger espacios y operaciones.",
      body: "Cobertura estratégica, grabación confiable y acceso remoto para una supervisión clara.",
      bullets: ["Diseño de cobertura", "Cámaras IP y CCTV", "Grabación NVR/DVR", "Monitoreo remoto"],
      applications: ["Residencias", "Comercios", "Almacenes", "Perímetros"],
    },
    en: {
      eyebrow: "CAMERAS AND SURVEILLANCE",
      title: "Continuous visibility for protecting spaces and operations.",
      body: "Strategic coverage, reliable recording, and remote access for clear oversight.",
      bullets: ["Coverage design", "IP cameras and CCTV", "NVR/DVR recording", "Remote monitoring"],
      applications: ["Homes", "Retail", "Warehouses", "Perimeters"],
    },
  },
};

const hub = {
  es: {
    eyebrow: "SERVICIOS ALTEKMAR",
    title: "Cinco divisiones. Una sola visión de proyecto.",
    body: "Altekmar coordina sistemas esenciales desde la evaluación hasta la instalación y el soporte.",
    explore: "Explorar división",
    cards: [
      ["01", "Elevadores y movilidad", "Elevadores, escaleras mecánicas y transporte vertical.", "/shop/elevators"],
      ["02", "Generadores", "Generación y respaldo eléctrico.", "/services/generators"],
      ["03", "Aire acondicionado", "Climatización residencial y comercial.", "/services/air-conditioning"],
      ["04", "Sistemas de seguridad", "Alarmas, acceso e intercomunicación.", "/services/security-systems"],
      ["05", "Cámaras y videovigilancia", "Cobertura, grabación y monitoreo.", "/services/cameras-surveillance"],
    ],
  },
  en: {
    eyebrow: "ALTEKMAR SERVICES",
    title: "Five divisions. One unified project vision.",
    body: "Altekmar coordinates essential systems from assessment through installation and support.",
    explore: "Explore division",
    cards: [
      ["01", "Elevators and mobility", "Elevators, escalators, and vertical transportation.", "/shop/elevators"],
      ["02", "Generators", "Generation and backup power.", "/services/generators"],
      ["03", "Air conditioning", "Residential and commercial climate systems.", "/services/air-conditioning"],
      ["04", "Security systems", "Alarms, access, and intercoms.", "/services/security-systems"],
      ["05", "Cameras and surveillance", "Coverage, recording, and monitoring.", "/services/cameras-surveillance"],
    ],
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function ServiceHub() {
  const language = useDocumentLanguage();
  const text = hub[language] || hub.es;

  return (
    <main className={styles.page} data-i18n-managed="true">
      <section className={styles.hubHero}>
        <p className={styles.eyebrow}>{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p>{text.body}</p>
      </section>

      <section className={styles.hubGrid}>
        {text.cards.map(([number, title, body, href]) => (
          <article key={href}>
            <div><span>{number}</span><i /></div>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link href={href}>{text.explore} <Arrow /></Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export function ServiceDivisionPage({ division }) {
  const language = useDocumentLanguage();
  const data = routeMap[division];
  const text = data?.[language] || data?.es;

  if (!data || !text) return null;

  return (
    <main className={styles.page} data-i18n-managed="true">
      <section className={styles.divisionHero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{text.eyebrow}</p>
          <h1>{text.title}</h1>
          <p>{text.body}</p>
          <Link href="/contact">{
            language === "en" ? "Request a consultation" : "Solicitar una consulta"
          } <Arrow /></Link>
        </div>

        <div className={styles.heroGraphic}>
          <span>{data.number}</span>
          <strong>{data.mark}</strong>
          <div>{Array.from({ length: 12 }).map((_, index) => <i key={index} />)}</div>
        </div>
      </section>

      <section className={styles.bullets}>
        {text.bullets.map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </div>
        ))}
      </section>

      <section className={styles.applications}>
        <div>
          <p className={styles.eyebrow}>{
            language === "en" ? "APPLICATIONS" : "APLICACIONES"
          }</p>
          <h2>{
            language === "en" ? "Designed around the environment." : "Diseñado alrededor del entorno."
          }</h2>
        </div>

        <ul>
          {text.applications.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </main>
  );
}
