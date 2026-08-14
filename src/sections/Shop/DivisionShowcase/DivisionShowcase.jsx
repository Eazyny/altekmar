"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./DivisionShowcase.module.css";

const sharedImages = [
  "/main-assets/img/service/service_details1_1.png",
  "/main-assets/img/project/project4_1.png",
  "/main-assets/img/project/project2_3.png",
  "/main-assets/img/project/project2_6.png",
];

const divisions = {
  "air-conditioning": {
    number: "03",
    signal: "AIRFLOW / 22°C / 48% RH",
    heroImage: "/main-assets/img/hero/hero_bg_4_2.png",
    theme: "climate",
    es: {
      eyebrow: "AIRE ACONDICIONADO · CLIMATIZACIÓN",
      title: "EL CLIMA SE DISEÑA.",
      accent: "NO SE IMPROVISA.",
      body: "Equipos, distribución de aire e instalación coordinados para crear espacios eficientes, silenciosos y cómodos.",
      capabilitiesEyebrow: "CAPACIDAD INTEGRADA",
      capabilitiesTitle: "Del cálculo térmico al",
      capabilitiesAccent: "confort diario.",
      capabilitiesIntro: "Cada decisión responde al uso real del espacio, su carga térmica y su operación a largo plazo.",
      capabilities: [
        { id: "thermal", title: "Evaluación térmica", body: "Calculamos la demanda del espacio antes de definir capacidad, distribución y consumo." },
        { id: "selection", title: "Selección de equipos", body: "Comparamos eficiencia, desempeño acústico y configuración para elegir el sistema correcto." },
        { id: "installation", title: "Instalación profesional", body: "Coordinamos equipos, drenajes, ductos y alimentación con una ejecución limpia y precisa." },
        { id: "support", title: "Mantenimiento y soporte", body: "Protegemos el rendimiento del sistema con servicio preventivo y atención técnica." },
      ],
      environmentsEyebrow: "ENTORNOS",
      environmentsTitle: "Confort ajustado a la forma en que",
      environmentsAccent: "cada espacio funciona.",
      applications: ["Residencias", "Locales comerciales", "Oficinas", "Instituciones"],
      cta: "SOLICITAR EVALUACIÓN",
      capabilityLabel: "CAPACIDADES",
      environmentLabel: "ENTORNOS",
    },
    en: {
      eyebrow: "AIR CONDITIONING · CLIMATE CONTROL",
      title: "CLIMATE IS DESIGNED.",
      accent: "NEVER IMPROVISED.",
      body: "Equipment, air distribution, and installation coordinated to create efficient, quiet, and comfortable spaces.",
      capabilitiesEyebrow: "INTEGRATED CAPABILITY",
      capabilitiesTitle: "From thermal load to",
      capabilitiesAccent: "everyday comfort.",
      capabilitiesIntro: "Every decision responds to the space's real use, thermal load, and long-term operation.",
      capabilities: [
        { id: "thermal", title: "Thermal assessment", body: "We calculate the space's demand before defining capacity, distribution, and consumption." },
        { id: "selection", title: "Equipment selection", body: "We compare efficiency, acoustic performance, and configuration to select the right system." },
        { id: "installation", title: "Professional installation", body: "We coordinate equipment, drainage, ductwork, and power with clean, precise execution." },
        { id: "support", title: "Maintenance and support", body: "We protect system performance with preventive service and technical assistance." },
      ],
      environmentsEyebrow: "ENVIRONMENTS",
      environmentsTitle: "Comfort tuned to how",
      environmentsAccent: "each space works.",
      applications: ["Homes", "Retail", "Offices", "Institutions"],
      cta: "REQUEST AN ASSESSMENT",
      capabilityLabel: "CAPABILITIES",
      environmentLabel: "ENVIRONMENTS",
    },
  },
  "security-systems": {
    number: "04",
    signal: "ZONE 04 / ACCESS CONTROLLED",
    heroImage: "/main-assets/img/hero/hero_bg_4_3.png",
    theme: "security",
    es: {
      eyebrow: "SEGURIDAD · ACCESO · RESPUESTA",
      title: "PROTECCIÓN QUE ANTICIPA.",
      accent: "CONTROL QUE RESPONDE.",
      body: "Alarmas, sensores, acceso e intercomunicación integrados bajo una estrategia clara de protección.",
      capabilitiesEyebrow: "PROTECCIÓN INTEGRADA",
      capabilitiesTitle: "Cada punto vulnerable",
      capabilitiesAccent: "se convierte en control.",
      capabilitiesIntro: "Diseñamos la respuesta como un sistema completo, no como una colección de dispositivos aislados.",
      capabilities: [
        { id: "risk", title: "Evaluación de riesgos", body: "Identificamos accesos, recorridos y puntos críticos antes de definir la solución." },
        { id: "access", title: "Control de acceso", body: "Organizamos permisos, entradas y registros para proteger personas y operaciones." },
        { id: "alarm", title: "Alarmas e intrusión", body: "Conectamos sensores y alertas para detectar eventos y acelerar la respuesta." },
        { id: "integration", title: "Integración y soporte", body: "Unificamos sistemas, configuración y mantenimiento para una operación confiable." },
      ],
      environmentsEyebrow: "ÁREAS PROTEGIDAS",
      environmentsTitle: "Seguridad diseñada alrededor de",
      environmentsAccent: "personas y recorridos.",
      applications: ["Residencias", "Condominios", "Comercios", "Instituciones"],
      cta: "SOLICITAR EVALUACIÓN",
      capabilityLabel: "CAPACIDADES",
      environmentLabel: "ENTORNOS",
    },
    en: {
      eyebrow: "SECURITY · ACCESS · RESPONSE",
      title: "PROTECTION THAT ANTICIPATES.",
      accent: "CONTROL THAT RESPONDS.",
      body: "Alarms, sensors, access, and intercoms integrated under one clear protection strategy.",
      capabilitiesEyebrow: "INTEGRATED PROTECTION",
      capabilitiesTitle: "Every vulnerable point",
      capabilitiesAccent: "becomes controlled.",
      capabilitiesIntro: "We design response as a complete system, not a collection of isolated devices.",
      capabilities: [
        { id: "risk", title: "Risk assessment", body: "We identify access points, circulation, and critical zones before defining the solution." },
        { id: "access", title: "Access control", body: "We organize permissions, entry, and records to protect people and operations." },
        { id: "alarm", title: "Alarms and intrusion", body: "We connect sensors and alerts to detect events and accelerate response." },
        { id: "integration", title: "Integration and support", body: "We unify systems, configuration, and maintenance for reliable operation." },
      ],
      environmentsEyebrow: "PROTECTED AREAS",
      environmentsTitle: "Security designed around",
      environmentsAccent: "people and movement.",
      applications: ["Homes", "Condominiums", "Retail", "Institutions"],
      cta: "REQUEST AN ASSESSMENT",
      capabilityLabel: "CAPABILITIES",
      environmentLabel: "ENVIRONMENTS",
    },
  },
  "cameras-surveillance": {
    number: "05",
    signal: "LIVE / 4K / REMOTE VIEW",
    heroImage: "/main-assets/img/hero/hero_bg_4_1.png",
    theme: "vision",
    es: {
      eyebrow: "CÁMARAS · GRABACIÓN · MONITOREO",
      title: "VER TODO.",
      accent: "PERDER NADA.",
      body: "Cobertura estratégica, grabación confiable y acceso remoto para supervisar espacios y operaciones con claridad.",
      capabilitiesEyebrow: "VISIBILIDAD CONTINUA",
      capabilitiesTitle: "De cada ángulo a una",
      capabilitiesAccent: "visión completa.",
      capabilitiesIntro: "La cobertura se diseña desde el entorno: iluminación, recorridos, distancias y puntos de decisión.",
      capabilities: [
        { id: "coverage", title: "Diseño de cobertura", body: "Definimos ángulos, distancias y puntos ciegos para obtener evidencia útil." },
        { id: "cameras", title: "Cámaras IP y CCTV", body: "Seleccionamos óptica y tecnología según iluminación, entorno y nivel de detalle." },
        { id: "recording", title: "Grabación NVR/DVR", body: "Dimensionamos almacenamiento y retención para consultar eventos con confianza." },
        { id: "remote", title: "Monitoreo remoto", body: "Configuramos acceso seguro para revisar cámaras, alertas y grabaciones desde cualquier lugar." },
      ],
      environmentsEyebrow: "CAMPO DE VISIÓN",
      environmentsTitle: "Cobertura precisa para los espacios que",
      environmentsAccent: "no pueden quedar fuera de vista.",
      applications: ["Residencias", "Comercios", "Almacenes", "Perímetros"],
      cta: "DISEÑAR COBERTURA",
      capabilityLabel: "CAPACIDADES",
      environmentLabel: "ENTORNOS",
    },
    en: {
      eyebrow: "CAMERAS · RECORDING · MONITORING",
      title: "SEE EVERYTHING.",
      accent: "MISS NOTHING.",
      body: "Strategic coverage, reliable recording, and remote access for clear oversight of spaces and operations.",
      capabilitiesEyebrow: "CONTINUOUS VISIBILITY",
      capabilitiesTitle: "From every angle to one",
      capabilitiesAccent: "complete view.",
      capabilitiesIntro: "Coverage starts with the environment: lighting, movement, distance, and decision points.",
      capabilities: [
        { id: "coverage", title: "Coverage design", body: "We define angles, distances, and blind spots to capture useful evidence." },
        { id: "cameras", title: "IP cameras and CCTV", body: "We select optics and technology for the lighting, environment, and required detail." },
        { id: "recording", title: "NVR/DVR recording", body: "We size storage and retention so events can be reviewed with confidence." },
        { id: "remote", title: "Remote monitoring", body: "We configure secure access to cameras, alerts, and recordings from anywhere." },
      ],
      environmentsEyebrow: "FIELD OF VIEW",
      environmentsTitle: "Precise coverage for spaces that",
      environmentsAccent: "cannot leave sight.",
      applications: ["Homes", "Retail", "Warehouses", "Perimeters"],
      cta: "DESIGN COVERAGE",
      capabilityLabel: "CAPABILITIES",
      environmentLabel: "ENVIRONMENTS",
    },
  },
};

const scene = {
  hidden: {},
  visible: { transition: { delayChildren: 0.1, staggerChildren: 0.085 } },
};

const rise = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1] },
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function DivisionShowcase({ division }) {
  const language = useDocumentLanguage();
  const reduceMotion = useReducedMotion();
  const data = divisions[division];
  const text = data?.[language] || data?.es;

  if (!data || !text) return null;

  return (
    <main className={`${styles.page} ${styles[data.theme]}`} data-i18n-managed="true">
      <motion.section
        className={styles.hero}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={scene}
      >
        <span
          className={styles.heroImage}
          style={{ "--hero-image": `url("${data.heroImage}")` }}
          aria-hidden="true"
        />
        <span className={styles.heroVeil} aria-hidden="true" />
        <span className={styles.systemField} aria-hidden="true">
          {Array.from({ length: 12 }).map((_, index) => <i key={index} />)}
        </span>

        <div className={styles.heroInner}>
          <motion.div className={styles.heroCopy} variants={rise}>
            <span className={styles.eyebrow}>{text.eyebrow}</span>
            <h1>
              <span>{text.title}</span>
              <em>{text.accent}</em>
            </h1>
            <p>{text.body}</p>
            <Link className={styles.primaryAction} href="/contact">
              {text.cta} <Arrow />
            </Link>
          </motion.div>

          <motion.aside className={styles.signalPanel} variants={rise}>
            <span>{data.signal}</span>
            <strong>{data.number}</strong>
            <div aria-hidden="true">
              <i /><i /><i /><i />
            </div>
          </motion.aside>

          <motion.div className={styles.heroMetrics} variants={rise}>
            <div><strong>04</strong><span>{text.capabilityLabel}</span></div>
            <div><strong>04</strong><span>{text.environmentLabel}</span></div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.capabilities}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={scene}
      >
        <div className={styles.sectionInner}>
          <motion.header className={styles.sectionHeader} variants={rise}>
            <span className={styles.sectionEyebrow}>{text.capabilitiesEyebrow}</span>
            <h2>{text.capabilitiesTitle}<em>{text.capabilitiesAccent}</em></h2>
            <p>{text.capabilitiesIntro}</p>
          </motion.header>

          <div className={styles.cardGrid}>
            {text.capabilities.map((item, index) => (
              <motion.article
                className={styles.revealCard}
                key={item.id}
                tabIndex={0}
                variants={rise}
              >
                <span
                  className={styles.cardMedia}
                  style={{ "--card-image": `url("${sharedImages[index]}")` }}
                  aria-hidden="true"
                />
                <span className={styles.cardShade} aria-hidden="true" />
                <div className={styles.cardContent}>
                  <div className={styles.cardHeading}>
                    <span>{String(index + 1).padStart(2, "0")}</span><i />
                  </div>
                  <h3>{item.title}</h3>
                  <div className={styles.cardDetails}>
                    <p>{item.body}</p>
                    <Link href="/contact">{text.cta} <Arrow /></Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className={styles.environments}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={scene}
      >
        <div className={styles.environmentLead}>
          <motion.span className={styles.sectionEyebrow} variants={rise}>{text.environmentsEyebrow}</motion.span>
          <motion.h2 variants={rise}>{text.environmentsTitle}<em>{text.environmentsAccent}</em></motion.h2>
        </div>
        <motion.ol className={styles.environmentList} variants={rise}>
          {text.applications.map((item, index) => (
            <li key={`${division}-${index}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </motion.ol>
      </motion.section>
    </main>
  );
}
