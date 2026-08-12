"use client";

import Link from "next/link";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./CorporateLanding.module.css";

const copy = {
  es: {
    heroEyebrow: "ALTEKMAR GROUP",
    heroTitle: "SOLUCIONES INTEGRADAS.",
    heroAccent: "EJECUCIÓN PRECISA.",
    heroBody:
      "Suministro, instalación y coordinación de sistemas esenciales para proyectos residenciales, comerciales e institucionales.",
    explore: "Explorar servicios",
    consult: "Solicitar consulta",
    introEyebrow: "UNA CORPORACIÓN. CINCO ÁREAS ESPECIALIZADAS.",
    introTitle:
      "Infraestructura, tecnología y equipos coordinados bajo una sola organización.",
    introBody:
      "Altekmar Group conecta experiencia técnica, selección de equipos, instalación profesional y acompañamiento de proyecto para resolver necesidades críticas con claridad.",
    strengths: [
      "Evaluación técnica",
      "Suministro confiable",
      "Instalación profesional",
      "Coordinación de proyecto",
    ],
    divisionsEyebrow: "NUESTRAS DIVISIONES",
    divisionsTitle:
      "Sistemas esenciales para edificios, empresas y proyectos modernos.",
    divisions: [
      {
        number: "01",
        title: "Elevadores y movilidad",
        body:
          "Elevadores de pasajeros, residenciales, panorámicos, hospitalarios y de carga, además de escaleras y pasillos móviles.",
        href: "/shop/elevators",
      },
      {
        number: "02",
        title: "Generadores y respaldo eléctrico",
        body:
          "Equipos de generación, respaldo de energía y soluciones para continuidad operativa.",
        href: "/shop/generators",
      },
      {
        number: "03",
        title: "Aire acondicionado",
        body:
          "Climatización residencial y comercial, instalación, ventilación y soporte técnico.",
        href: "/shop/airconditioners",
      },
      {
        number: "04",
        title: "Sistemas de seguridad",
        body:
          "Alarmas, control de acceso, intercomunicación e infraestructura de protección.",
        href: "/shop/security-systems",
      },
      {
        number: "05",
        title: "Cámaras y videovigilancia",
        body:
          "Cámaras, grabación, monitoreo remoto y sistemas de vigilancia para cada entorno.",
        href: "/shop/cameras-surveillance",
      },
    ],
    viewDivision: "Explorar división",
    processEyebrow: "CÓMO TRABAJAMOS",
    processTitle: "Un proceso claro desde la consulta hasta la entrega.",
    process: [
      "Consulta",
      "Evaluación",
      "Diseño",
      "Selección",
      "Instalación",
      "Soporte",
    ],
    featureEyebrow: "CAPACIDAD INTEGRADA",
    featureTitle: "Un solo socio para sistemas esenciales.",
    featureBody:
      "Desde movilidad vertical y energía de respaldo hasta climatización y seguridad, Altekmar coordina equipos, instalación y ejecución con una visión unificada.",
    featurePoints: [
      "Soluciones residenciales y comerciales",
      "Coordinación entre múltiples disciplinas",
      "Equipos seleccionados según el proyecto",
      "Acompañamiento antes y después de la instalación",
    ],
    learnMore: "Conocer Altekmar",
    ctaEyebrow: "HABLEMOS DE SU PROYECTO",
    ctaTitle:
      "La solución correcta comienza con una evaluación clara.",
    ctaBody:
      "Cuéntenos qué necesita y coordinaremos el equipo, la instalación y el alcance adecuado.",
    ctaPrimary: "Solicitar una consulta",
    ctaSecondary: "Ver proyectos",
  },
  en: {
    heroEyebrow: "ALTEKMAR GROUP",
    heroTitle: "INTEGRATED SOLUTIONS.",
    heroAccent: "PRECISE EXECUTION.",
    heroBody:
      "Equipment supply, installation, and coordination of essential systems for residential, commercial, and institutional projects.",
    explore: "Explore services",
    consult: "Request a consultation",
    introEyebrow: "ONE CORPORATION. FIVE SPECIALIZED DIVISIONS.",
    introTitle:
      "Infrastructure, technology, and equipment coordinated under one organization.",
    introBody:
      "Altekmar Group connects technical expertise, equipment selection, professional installation, and project support to solve critical needs with clarity.",
    strengths: [
      "Technical assessment",
      "Reliable procurement",
      "Professional installation",
      "Project coordination",
    ],
    divisionsEyebrow: "OUR DIVISIONS",
    divisionsTitle:
      "Essential systems for modern buildings, businesses, and projects.",
    divisions: [
      {
        number: "01",
        title: "Elevators and mobility",
        body:
          "Passenger, residential, panoramic, hospital, and freight elevators, plus escalators and moving walkways.",
        href: "/shop/elevators",
      },
      {
        number: "02",
        title: "Generators and backup power",
        body:
          "Generation equipment, power backup, and operational-continuity solutions.",
        href: "/shop/generators",
      },
      {
        number: "03",
        title: "Air conditioning",
        body:
          "Residential and commercial climate systems, installation, ventilation, and support.",
        href: "/shop/airconditioners",
      },
      {
        number: "04",
        title: "Security systems",
        body:
          "Alarms, access control, intercoms, and integrated protection infrastructure.",
        href: "/shop/security-systems",
      },
      {
        number: "05",
        title: "Cameras and surveillance",
        body:
          "Cameras, recording, remote monitoring, and surveillance systems for every environment.",
        href: "/shop/cameras-surveillance",
      },
    ],
    viewDivision: "Explore division",
    processEyebrow: "HOW WE WORK",
    processTitle: "A clear process from consultation through delivery.",
    process: [
      "Consult",
      "Assess",
      "Design",
      "Select",
      "Install",
      "Support",
    ],
    featureEyebrow: "INTEGRATED CAPABILITY",
    featureTitle: "One partner for essential systems.",
    featureBody:
      "From vertical mobility and backup power to climate control and security, Altekmar coordinates equipment, installation, and execution with one unified view.",
    featurePoints: [
      "Residential and commercial solutions",
      "Coordination across multiple disciplines",
      "Equipment selected around the project",
      "Support before and after installation",
    ],
    learnMore: "About Altekmar",
    ctaEyebrow: "LET’S DISCUSS YOUR PROJECT",
    ctaTitle:
      "The right solution begins with a clear assessment.",
    ctaBody:
      "Tell us what you need and we will coordinate the right equipment, installation, and scope.",
    ctaPrimary: "Request a consultation",
    ctaSecondary: "View projects",
  },
};

function Arrow() {
  return (
    <span aria-hidden="true" className={styles.arrow}>
      ↗
    </span>
  );
}

export default function CorporateLanding() {
  const language = useDocumentLanguage();
  const text = copy[language] || copy.es;

  return (
    <main className={styles.page} data-i18n-managed="true">
      <section className={`${styles.hero} altekmar-snap-section`}>
        <div className={styles.heroDark}>
          <div className={styles.heroRule} />
          <p className={styles.eyebrow}>{text.heroEyebrow}</p>

          <h1>
            <span>{text.heroTitle}</span>
            <strong>{text.heroAccent}</strong>
          </h1>

          <p className={styles.heroBody}>{text.heroBody}</p>

          <div className={styles.actions}>
            <Link href="#divisions" className={styles.goldButton}>
              {text.explore}
              <Arrow />
            </Link>
            <Link href="/contact" className={styles.textLink}>
              {text.consult}
              <Arrow />
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.gridLines} />
          <img
            src="/main-assets/img/elevators/elevator_escalator.png"
            alt=""
          />
          <div className={styles.visualLabel}>
            <span>ALTEKMAR</span>
            <small>SUPPLY · INSTALLATION · COORDINATION</small>
          </div>
        </div>
      </section>

      <section className={`${styles.intro} altekmar-snap-section`}>
        <div className={styles.ruleHeading}>
          <span />
          <p>{text.introEyebrow}</p>
        </div>

        <div className={styles.introGrid}>
          <h2>{text.introTitle}</h2>

          <div>
            <p className={styles.lead}>{text.introBody}</p>

            <div className={styles.strengths}>
              {text.strengths.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="divisions"
        className={`${styles.divisions} altekmar-snap-section`}
      >
        <div className={styles.divisionHeading}>
          <div>
            <p className={styles.goldEyebrow}>
              {text.divisionsEyebrow}
            </p>
            <h2>{text.divisionsTitle}</h2>
          </div>
          <span className={styles.bigFive}>05</span>
        </div>

        <div className={styles.divisionGrid}>
          {text.divisions.map((division) => (
            <article key={division.number}>
              <div className={styles.cardRule}>
                <span>{division.number}</span>
                <i />
              </div>

              <h3>{division.title}</h3>
              <p>{division.body}</p>

              <Link href={division.href}>
                {text.viewDivision}
                <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.process} altekmar-snap-section`}>
        <div className={styles.processHeading}>
          <p className={styles.goldEyebrow}>{text.processEyebrow}</p>
          <h2>{text.processTitle}</h2>
        </div>

        <div className={styles.processTrack}>
          {text.process.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i />
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.cta} altekmar-snap-section`}>
        <div>
          <p className={styles.goldEyebrow}>{text.ctaEyebrow}</p>
          <h2>{text.ctaTitle}</h2>
          <p>{text.ctaBody}</p>
        </div>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.goldButton}>
            {text.ctaPrimary}
            <Arrow />
          </Link>
          <Link href="/project" className={styles.textLink}>
            {text.ctaSecondary}
            <Arrow />
          </Link>
        </div>
      </section>

      <section className={`${styles.feature} altekmar-snap-section`}>
        <div className={styles.featureImage}>
          <img
            src="/main-assets/img/elevators/elevator_escalator.png"
            alt=""
          />
        </div>

        <div className={styles.featureCopy}>
          <p className={styles.goldEyebrow}>{text.featureEyebrow}</p>
          <h2>{text.featureTitle}</h2>
          <p className={styles.lead}>{text.featureBody}</p>

          <ul>
            {text.featurePoints.map((point) => (
              <li key={point}>
                <span />
                {point}
              </li>
            ))}
          </ul>

          <Link href="/about" className={styles.outlineButton}>
            {text.learnMore}
            <Arrow />
          </Link>
        </div>
      </section>


    </main>
  );
}