"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./CorporateLanding.module.css";

const heroHeadingVariants = {
  hidden: ({ reducedMotion }) => ({
    opacity: reducedMotion ? 1 : 0,
    y: reducedMotion ? 0 : "110%",
  }),
  visible: ({ delay, reducedMotion }) => ({
    opacity: 1,
    y: 0,
    transition: reducedMotion
      ? { duration: 0 }
      : {
          delay,
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        },
  }),
};

const sceneVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageRevealVariants = {
  hidden: {
    opacity: 0,
    scale: 1.035,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sceneViewport = {
  once: true,
  amount: 0.24,
};

const strengthCardImages = [
  "/main-assets/img/project/project1_1.png",
  "/main-assets/img/project/project1_2.png",
  "/main-assets/img/project/project1_3.png",
  "/main-assets/img/project/project4_1.png",
];

const divisionCardImages = [
  "/main-assets/img/elevators/gots/passenger/800kg-mirror-finish-passenger-elevator-stainless-steel-lift/01-passenger-elevator-5b1aeaaf.jpg",
  "/main-assets/img/project/project1_1.png",
  "/main-assets/img/project/project4_1.png",
  "/main-assets/img/project/project2_1.png",
  "/main-assets/img/project/project1_3.png",
];

const processCardImages = [
  "/main-assets/img/project/project1_2.png",
  "/main-assets/img/project/project2_1.png",
  "/main-assets/img/project/project1_3.png",
  "/main-assets/img/project/project2_2.png",
  "/main-assets/img/project/project4_1.png",
  "/main-assets/img/project/project1_1.png",
];

const copy = {
  es: {
    heroEyebrow: "ALTEKMAR GROUP",
    heroTitle: "SOLUCIONES INTEGRADAS.",
    heroAccent: "EJECUCIÓN PRECISA.",
    heroBody:
      "Ingeniería, suministro e instalación coordinados para proyectos que exigen precisión.",
    explore: "Explorar soluciones",
    consult: "Hablemos",
    heroIndex: "05 DIVISIONES",
    heroCapability: "CAPACIDAD INTEGRADA",
    heroDescriptor: "UNA CORPORACIÓN · CINCO DIVISIONES",
    heroSectors: [
      "MOVILIDAD",
      "ENERGÍA",
      "CLIMA",
      "SEGURIDAD",
      "VIDEOVIGILANCIA",
    ],
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
          "Elevadores de pasajeros, residenciales, panorámicos, hospitalarios y de carga para cada tipo de proyecto.",
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
        href: "/shop/air-conditioning",
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
    processDetails: [
      "Definimos la necesidad, el alcance y las prioridades.",
      "Revisamos condiciones técnicas y viabilidad.",
      "Coordinamos la solución con el proyecto.",
      "Elegimos equipos según desempeño y entorno.",
      "Ejecutamos, probamos y dejamos el sistema operativo.",
      "Acompañamos el mantenimiento y la continuidad.",
    ],
    featureEyebrow: "CAPACIDAD INTEGRADA",
    featureTitle: "Un solo socio para sistemas esenciales.",
    featureBody:
      "Desde movilidad vertical y energía de respaldo hasta climatización y seguridad, Altekmar coordina equipos, instalación y ejecución con una visión unificada.",
    featureImageAlt:
      "Edificio de apartamentos con elevador central, aires acondicionados y un generador de respaldo",
    featurePoints: [
      "Soluciones residenciales y comerciales",
      "Coordinación entre múltiples disciplinas",
      "Equipos seleccionados según el proyecto",
      "Acompañamiento antes y después de la instalación",
    ],
    learnMore: "Conocer Altekmar",
  },
  en: {
    heroEyebrow: "ALTEKMAR GROUP",
    heroTitle: "INTEGRATED SOLUTIONS.",
    heroAccent: "PRECISE EXECUTION.",
    heroBody:
      "Engineering, procurement, and installation coordinated for projects that demand precision.",
    explore: "Explore solutions",
    consult: "Let’s talk",
    heroIndex: "05 DIVISIONS",
    heroCapability: "INTEGRATED CAPABILITY",
    heroDescriptor: "ONE CORPORATION · FIVE DIVISIONS",
    heroSectors: [
      "MOBILITY",
      "POWER",
      "CLIMATE",
      "SECURITY",
      "SURVEILLANCE",
    ],
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
          "Passenger, residential, panoramic, hospital, and freight elevators for every type of project.",
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
        href: "/shop/air-conditioning",
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
    processDetails: [
      "We define the need, scope, and priorities.",
      "We review technical conditions and feasibility.",
      "We coordinate the solution with the project.",
      "We select equipment for performance and context.",
      "We install, test, and leave the system operational.",
      "We support maintenance and continuity.",
    ],
    featureEyebrow: "INTEGRATED CAPABILITY",
    featureTitle: "One partner for essential systems.",
    featureBody:
      "From vertical mobility and backup power to climate control and security, Altekmar coordinates equipment, installation, and execution with one unified view.",
    featureImageAlt:
      "Apartment building with a central elevator, wall-mounted air conditioners, and one backup generator",
    featurePoints: [
      "Residential and commercial solutions",
      "Coordination across multiple disciplines",
      "Equipment selected around the project",
      "Support before and after installation",
    ],
    learnMore: "About Altekmar",
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
  const heroVideoRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const sceneInitial = reducedMotion ? false : "hidden";

  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let isVisible = true;

    const syncPlayback = () => {
      const video = heroVideoRef.current;

      if (!video) {
        return;
      }

      if (preference.matches || !isVisible || document.hidden) {
        video.pause();
        if (preference.matches) video.currentTime = 0;
        return;
      }

      const playback = video.play();

      if (playback?.catch) {
        playback.catch(() => {});
      }
    };

    syncPlayback();
    preference.addEventListener?.("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.08 },
    );

    if (heroVideoRef.current) {
      observer.observe(heroVideoRef.current);
    }

    return () => {
      preference.removeEventListener?.("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      observer.disconnect();
    };
  }, []);

  return (
    <main className={styles.page} data-i18n-managed="true" data-corporate-home="true">
      <section
        className={`${styles.hero} altekmar-snap-section`}
        data-home-section="hero"
      >
        <div className={styles.heroMedia} aria-hidden="true">
          <video
            ref={heroVideoRef}
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/footage/dr_drone-poster.webp"
            tabIndex={-1}
          >
            <source
              src="/footage/dr_drone.webm"
              type="video/webm"
            />
          </video>

          <div className={styles.heroFilm} />
          <div className={styles.gridLines} />
        </div>

        <div className={styles.heroFrame}>
          <div className={styles.heroTopbar}>
            <div className={styles.heroBrandLine}>
              <span />
              <p>{text.heroEyebrow}</p>
            </div>
</div>

          <div className={styles.heroContent}>
            <h1>
              <span className={styles.heroTitleLine}>
                <motion.span
                  custom={{ delay: 0.2, reducedMotion }}
                  initial="hidden"
                  animate="visible"
                  variants={heroHeadingVariants}
                >
                  {text.heroTitle}
                </motion.span>
              </span>
              <strong className={styles.heroAccentLine}>
                <motion.span
                  custom={{ delay: 0.36, reducedMotion }}
                  initial="hidden"
                  animate="visible"
                  variants={heroHeadingVariants}
                >
                  {text.heroAccent}
                </motion.span>
              </strong>
            </h1>

            <div className={styles.heroSupport}>
              <p className={styles.heroBody}>
                {text.heroBody}
              </p>

              <div className={styles.actions}>
                <Link
                  href="#divisions"
                  className={styles.goldButton}
                >
                  {text.explore}
                  <Arrow />
                </Link>

                <Link
                  href="/contact"
                  className={styles.textLink}
                >
                  {text.consult}
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.heroFooter}>
            <span className={styles.heroFooterLabel}>
              {text.heroCapability}
            </span>

            <div className={styles.heroSectors}>
              {text.heroSectors.map((sector) => (
                <span key={sector}>
                  <i />
                  <strong>{sector}</strong>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className={`${styles.intro} altekmar-snap-section`}
        data-home-section="intro"
        initial={sceneInitial}
        whileInView="visible"
        viewport={sceneViewport}
        variants={sceneVariants}
      >
        <motion.div className={styles.ruleHeading} variants={revealVariants}>
          <span />
          <p>{text.introEyebrow}</p>
        </motion.div>

        <div className={styles.introGrid}>
          <motion.h2 variants={revealVariants}>{text.introTitle}</motion.h2>

          <motion.div variants={revealVariants}>
            <p className={styles.lead}>{text.introBody}</p>

            <motion.div className={styles.strengths} variants={sceneVariants}>
              {text.strengths.map((item, index) => (
                <motion.div
                  key={`strength-${index}`}
                  className={`${styles.interactiveCard} ${styles.strengthCard}`}
                  variants={revealVariants}
                  tabIndex={0}
                  style={{ "--card-image": `url(${strengthCardImages[index]})` }}
                >
                  <span className={styles.cardMedia} data-card-media aria-hidden="true" />
                  <span className={styles.cardShade} data-card-shade aria-hidden="true" />
                  <div className={styles.interactiveCardContent} data-card-content>
                    <p>{item}</p>
                    <div className={styles.interactiveCardDetails}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="divisions"
        className={`${styles.divisions} altekmar-snap-section`}
        data-home-section="divisions"
        initial={sceneInitial}
        whileInView="visible"
        viewport={sceneViewport}
        variants={sceneVariants}
      >
        <motion.div className={styles.divisionHeading} variants={revealVariants}>
          <div>
            <p className={styles.goldEyebrow}>
              {text.divisionsEyebrow}
            </p>
            <h2>{text.divisionsTitle}</h2>
          </div>
          <span className={styles.bigFive}>05</span>
        </motion.div>

        <motion.div className={styles.divisionGrid} variants={sceneVariants}>
          {text.divisions.map((division) => (
            <motion.article
              key={division.number}
              className={`${styles.interactiveCard} ${styles.divisionCard}`}
              variants={revealVariants}
              style={{ "--card-image": `url(${divisionCardImages[Number(division.number) - 1]})` }}
            >
              <span className={styles.cardMedia} data-card-media aria-hidden="true" />
              <span className={styles.cardShade} data-card-shade aria-hidden="true" />
              <div className={styles.interactiveCardContent} data-card-content>
                <h3>{division.title}</h3>
                <div className={styles.interactiveCardDetails}>
                  <div className={styles.cardRule}>
                    <span>{division.number}</span>
                    <i />
                  </div>
                  <p>{division.body}</p>
                  <Link href={division.href}>
                    {text.viewDivision}
                    <Arrow />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className={`${styles.process} altekmar-snap-section`}
        data-home-section="process"
        initial={sceneInitial}
        whileInView="visible"
        viewport={sceneViewport}
        variants={sceneVariants}
      >
        <motion.div className={styles.processHeading} variants={revealVariants}>
          <p className={styles.goldEyebrow}>{text.processEyebrow}</p>
          <h2>{text.processTitle}</h2>
        </motion.div>

        <motion.div className={styles.processTrack} variants={sceneVariants}>
          {text.process.map((step, index) => (
            <motion.div
              key={`process-${index}`}
              className={`${styles.interactiveCard} ${styles.processCard}`}
              variants={revealVariants}
              tabIndex={0}
              style={{ "--card-image": `url(${processCardImages[index]})` }}
            >
              <span className={styles.cardMedia} data-card-media aria-hidden="true" />
              <span className={styles.cardShade} data-card-shade aria-hidden="true" />
              <div className={styles.interactiveCardContent} data-card-content>
                <p>{step}</p>
                <div className={styles.interactiveCardDetails}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i />
                  <small>{text.processDetails[index]}</small>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className={`${styles.feature} altekmar-snap-section`}
        data-home-section="capability"
        initial={sceneInitial}
        whileInView="visible"
        viewport={sceneViewport}
        variants={sceneVariants}
      >
        <motion.div className={styles.featureImage} variants={imageRevealVariants}>
          <Image
            src="/main-assets/img/corporate/integrated-building-systems.webp"
            alt={text.featureImageAlt}
            fill
            unoptimized
            sizes="(max-width: 991px) 100vw, 55vw"
          />
        </motion.div>

        <motion.div className={styles.featureCopy} variants={revealVariants}>
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
        </motion.div>
      </motion.section>

    </main>
  );
}