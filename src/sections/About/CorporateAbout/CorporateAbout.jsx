"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./CorporateAbout.module.css";

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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingVariants = {
  hidden: ({ reducedMotion }) => ({
    opacity: reducedMotion ? 1 : 0,
    y: reducedMotion ? 0 : "108%",
  }),
  visible: ({ delay, reducedMotion }) => ({
    opacity: 1,
    y: 0,
    transition: reducedMotion
      ? { duration: 0 }
      : {
          delay,
          duration: 0.88,
          ease: [0.16, 1, 0.3, 1],
        },
  }),
};

const sceneViewport = { once: true, amount: 0.2 };

const principleImages = [
  "/main-assets/img/project/project1_3.png",
  "/main-assets/img/project/project2_1.png",
  "/main-assets/img/project/project4_1.png",
  "/main-assets/img/project/project1_1.png",
];

const divisionImages = [
  "/main-assets/img/elevators/gots/passenger/800kg-mirror-finish-passenger-elevator-stainless-steel-lift/01-passenger-elevator-5b1aeaaf.jpg",
  "/main-assets/img/project/project1_1.png",
  "/main-assets/img/project/project4_1.png",
  "/main-assets/img/project/project2_1.png",
  "/main-assets/img/project/project1_3.png",
];

const directionImages = [
  "/main-assets/img/project/project1_2.png",
  "/main-assets/img/project/project1_3.png",
  "/main-assets/img/project/project1_1.png",
];

const copy = {
  es: {
    heroEyebrow: "ALTEKMAR GROUP · QUIÉNES SOMOS",
    heroTitle: "UNA CORPORACIÓN.",
    heroAccent: "UNA VISIÓN INTEGRADA.",
    heroBody:
      "Altekmar Group reúne suministro, instalación y coordinación de sistemas esenciales bajo una sola estructura de proyecto.",
    heroPrimary: "Explorar servicios",
    heroSecondary: "Iniciar conversación",
    heroStat: "05",
    heroStatLabel: "DIVISIONES ESPECIALIZADAS",
    heroTracks: [
      "MOVILIDAD",
      "ENERGÍA",
      "CLIMA",
      "SEGURIDAD",
      "VISIÓN",
    ],

    storyEyebrow: "NUESTRA FORMA DE PENSAR",
    storyTitle:
      "La complejidad del proyecto no debería convertirse en complejidad para el cliente.",
    storyLead:
      "Nuestro papel es conectar las piezas correctas: entender la necesidad, definir el sistema adecuado, coordinar la instalación y mantener una línea clara de responsabilidad.",
    storyBody:
      "Trabajamos con una visión integral para que cada disciplina responda al proyecto completo, no como una solución aislada.",
    principles: [
      {
        number: "01",
        title: "Rigor técnico",
        body:
          "Cada decisión parte de requisitos reales, condiciones del espacio y objetivos de operación.",
      },
      {
        number: "02",
        title: "Selección responsable",
        body:
          "Equipos y soluciones elegidos alrededor de la necesidad, no alrededor de un catálogo.",
      },
      {
        number: "03",
        title: "Ejecución coordinada",
        body:
          "Suministro, instalación y seguimiento organizados como una sola experiencia de proyecto.",
      },
      {
        number: "04",
        title: "Continuidad",
        body:
          "La relación no termina con la instalación; el soporte forma parte de la solución.",
      },
    ],

    integrationEyebrow: "CAPACIDAD INTEGRADA",
    integrationTitle:
      "Cinco disciplinas conectadas por una misma forma de ejecutar.",
    integrationBody:
      "Altekmar integra sistemas que impactan directamente la movilidad, continuidad, confort y seguridad de un proyecto.",
    divisionLink: "Explorar división",
    divisions: [
      {
        number: "01",
        title: "Elevadores y movilidad",
        short: "MOVILIDAD",
        body:
          "Transporte vertical y soluciones de movilidad para entornos residenciales, comerciales e institucionales.",
        href: "/shop/elevators",
      },
      {
        number: "02",
        title: "Generadores y respaldo eléctrico",
        short: "ENERGÍA",
        body:
          "Generación y respaldo para proteger la continuidad operativa.",
        href: "/shop/generators",
      },
      {
        number: "03",
        title: "Aire acondicionado",
        short: "CLIMA",
        body:
          "Climatización coordinada alrededor del uso, el espacio y el rendimiento.",
        href: "/shop/air-conditioning",
      },
      {
        number: "04",
        title: "Sistemas de seguridad",
        short: "SEGURIDAD",
        body:
          "Control, protección e integración para administrar accesos y riesgos.",
        href: "/shop/security-systems",
      },
      {
        number: "05",
        title: "Cámaras y videovigilancia",
        short: "VISIÓN",
        body:
          "Cobertura, grabación y supervisión para mantener visibilidad sobre cada entorno.",
        href: "/shop/cameras-surveillance",
      },
    ],

    directionEyebrow: "PROPÓSITO Y DIRECCIÓN",
    directionTitle:
      "Una organización construida alrededor de responsabilidad, coordinación y largo plazo.",
    direction: [
      {
        number: "01",
        title: "Misión",
        body:
          "Resolver necesidades esenciales con soluciones técnicas claras, bien seleccionadas y correctamente ejecutadas.",
      },
      {
        number: "02",
        title: "Visión",
        body:
          "Ser un socio de confianza para proyectos que necesitan múltiples sistemas coordinados bajo una sola visión.",
      },
      {
        number: "03",
        title: "Nuestro estándar",
        body:
          "Comunicación clara, criterio técnico y responsabilidad desde la evaluación inicial hasta el soporte posterior.",
      },
    ],

    promiseEyebrow: "EL COMPROMISO ALTEKMAR",
    promiseTitle:
      "Claridad antes de instalar. Coordinación durante la ejecución. Respaldo después de entregar.",
    promiseBody:
      "Cada proyecto merece una solución que se sienta resuelta, no fragmentada. Ese es el estándar que buscamos llevar a cada disciplina.",
    promisePoints: [
      "Un solo punto de coordinación",
      "Decisiones basadas en el proyecto",
      "Ejecución profesional",
      "Acompañamiento después de la instalación",
    ],
    promisePrimary: "Hablemos de su proyecto",
    promiseSecondary: "Ver nuestros servicios",
  },

  en: {
    heroEyebrow: "ALTEKMAR GROUP · ABOUT US",
    heroTitle: "ONE CORPORATION.",
    heroAccent: "ONE INTEGRATED VISION.",
    heroBody:
      "Altekmar Group brings equipment supply, installation, and coordination of essential systems under one project structure.",
    heroPrimary: "Explore services",
    heroSecondary: "Start a conversation",
    heroStat: "05",
    heroStatLabel: "SPECIALIZED DIVISIONS",
    heroTracks: [
      "MOBILITY",
      "POWER",
      "CLIMATE",
      "SECURITY",
      "VISION",
    ],

    storyEyebrow: "HOW WE THINK",
    storyTitle:
      "Project complexity should not become client complexity.",
    storyLead:
      "Our role is to connect the right pieces: understand the requirement, define the right system, coordinate installation, and maintain a clear line of responsibility.",
    storyBody:
      "We work with an integrated view so every discipline responds to the complete project rather than operating as an isolated solution.",
    principles: [
      {
        number: "01",
        title: "Technical rigor",
        body:
          "Every decision begins with actual requirements, site conditions, and operating goals.",
      },
      {
        number: "02",
        title: "Responsible selection",
        body:
          "Equipment and solutions are selected around the need, not around a catalog.",
      },
      {
        number: "03",
        title: "Coordinated execution",
        body:
          "Supply, installation, and follow-through are organized as one project experience.",
      },
      {
        number: "04",
        title: "Continuity",
        body:
          "The relationship does not end at installation; support is part of the solution.",
      },
    ],

    integrationEyebrow: "INTEGRATED CAPABILITY",
    integrationTitle:
      "Five disciplines connected by one way of executing.",
    integrationBody:
      "Altekmar integrates systems that directly affect a project's mobility, continuity, comfort, and security.",
    divisionLink: "Explore division",
    divisions: [
      {
        number: "01",
        title: "Elevators and mobility",
        short: "MOBILITY",
        body:
          "Vertical transportation and mobility solutions for residential, commercial, and institutional environments.",
        href: "/shop/elevators",
      },
      {
        number: "02",
        title: "Generators and backup power",
        short: "POWER",
        body:
          "Generation and backup systems designed to protect operational continuity.",
        href: "/shop/generators",
      },
      {
        number: "03",
        title: "Air conditioning",
        short: "CLIMATE",
        body:
          "Climate solutions coordinated around use, space, and performance.",
        href: "/shop/air-conditioning",
      },
      {
        number: "04",
        title: "Security systems",
        short: "SECURITY",
        body:
          "Control, protection, and integration for managing access and risk.",
        href: "/shop/security-systems",
      },
      {
        number: "05",
        title: "Cameras and surveillance",
        short: "VISION",
        body:
          "Coverage, recording, and oversight that maintain visibility across each environment.",
        href: "/shop/cameras-surveillance",
      },
    ],

    directionEyebrow: "PURPOSE AND DIRECTION",
    directionTitle:
      "An organization built around responsibility, coordination, and the long term.",
    direction: [
      {
        number: "01",
        title: "Mission",
        body:
          "Solve essential needs through clear technical solutions that are properly selected and properly executed.",
      },
      {
        number: "02",
        title: "Vision",
        body:
          "Be a trusted partner for projects that need multiple systems coordinated under one vision.",
      },
      {
        number: "03",
        title: "Our standard",
        body:
          "Clear communication, technical judgment, and accountability from initial assessment through post-installation support.",
      },
    ],

    promiseEyebrow: "THE ALTEKMAR COMMITMENT",
    promiseTitle:
      "Clarity before installation. Coordination during execution. Support after delivery.",
    promiseBody:
      "Every project deserves a solution that feels resolved rather than fragmented. That is the standard we aim to bring to every discipline.",
    promisePoints: [
      "One point of coordination",
      "Project-led decisions",
      "Professional execution",
      "Support after installation",
    ],
    promisePrimary: "Discuss your project",
    promiseSecondary: "View our services",
  },
};

function Arrow() {
  return (
    <span aria-hidden="true" className={styles.arrow}>
      ↗
    </span>
  );
}

export default function CorporateAbout() {
  const language = useDocumentLanguage();
  const text = copy[language] || copy.es;
  const reducedMotion = useReducedMotion();
  const sceneInitial = reducedMotion ? false : "hidden";

  return (
    <>
      <main
        className={styles.page}
        data-corporate-about="true"
        data-i18n-managed="true"
      >
        <motion.section
          className={`${styles.section} ${styles.hero}`}
          initial={sceneInitial}
          animate="visible"
          variants={sceneVariants}
        >
          <motion.div className={styles.heroCopy} variants={revealVariants}>
            <div className={styles.heroRule} />
            <p className={styles.eyebrow}>{text.heroEyebrow}</p>

            <h1>
              <span className={styles.heroTitleLine}>
                <motion.span
                  custom={{ delay: 0.16, reducedMotion }}
                  initial="hidden"
                  animate="visible"
                  variants={headingVariants}
                >
                  {text.heroTitle}
                </motion.span>
              </span>
              <strong className={styles.heroAccentLine}>
                <motion.span
                  custom={{ delay: 0.32, reducedMotion }}
                  initial="hidden"
                  animate="visible"
                  variants={headingVariants}
                >
                  {text.heroAccent}
                </motion.span>
              </strong>
            </h1>

            <p className={styles.heroBody}>{text.heroBody}</p>

            <div className={styles.actions}>
              <Link href="/services" className={styles.goldButton}>
                {text.heroPrimary}
                <Arrow />
              </Link>

              <Link href="/contact" className={styles.textLink}>
                {text.heroSecondary}
                <Arrow />
              </Link>
            </div>
          </motion.div>

          <motion.div className={styles.heroSystem} variants={revealVariants}>
            <span className={styles.heroMedia} aria-hidden="true" />
            <div className={styles.heroGrid} />

            <div className={styles.heroNumber}>
              <strong>{text.heroStat}</strong>
              <span>{text.heroStatLabel}</span>
            </div>

            <div className={styles.heroTracks}>
              {text.heroTracks.map((track, index) => (
                <div key={track}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{track}</strong>
                  <i />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className={`${styles.section} ${styles.story}`}
          initial={sceneInitial}
          whileInView="visible"
          viewport={sceneViewport}
          variants={sceneVariants}
        >
          <motion.div className={styles.sectionLabel} variants={revealVariants}>
            <span />
            <p>{text.storyEyebrow}</p>
          </motion.div>

          <div className={styles.storyGrid}>
            <div>
              <motion.h2 variants={revealVariants}>{text.storyTitle}</motion.h2>
            </div>

            <motion.div className={styles.storyCopy} variants={revealVariants}>
              <p className={styles.lead}>{text.storyLead}</p>
              <p>{text.storyBody}</p>
            </motion.div>
          </div>

          <motion.div className={styles.principleGrid} variants={sceneVariants}>
            {text.principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                className={`${styles.revealCard} ${styles.principleCard}`}
                variants={revealVariants}
                tabIndex={0}
                style={{ "--card-image": `url(${principleImages[index]})` }}
              >
                <span className={styles.cardMedia} aria-hidden="true" />
                <span className={styles.cardShade} aria-hidden="true" />
                <div className={styles.cardContent}>
                  <h3>{principle.title}</h3>
                  <div className={styles.cardDetails}>
                    <div className={styles.principleTop}>
                      <span>{principle.number}</span>
                      <i />
                    </div>
                    <p>{principle.body}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className={`${styles.section} ${styles.integration}`}
          initial={sceneInitial}
          whileInView="visible"
          viewport={sceneViewport}
          variants={sceneVariants}
        >
          <motion.div className={styles.integrationHeading} variants={revealVariants}>
            <div>
              <p className={styles.goldEyebrow}>
                {text.integrationEyebrow}
              </p>
              <h2>{text.integrationTitle}</h2>
            </div>

            <p>{text.integrationBody}</p>
          </motion.div>

          <motion.div className={styles.divisionRail} variants={sceneVariants}>
            {text.divisions.map((division, index) => (
              <motion.div key={division.number} variants={revealVariants}>
              <Link
                href={division.href}
                className={`${styles.division} ${styles.revealCard}`}
                style={{ "--card-image": `url(${divisionImages[index]})` }}
              >
                <span className={styles.cardMedia} aria-hidden="true" />
                <span className={styles.cardShade} aria-hidden="true" />
                <div className={styles.cardContent}>
                  <h3>{division.title}</h3>
                  <div className={styles.cardDetails}>
                    <div className={styles.divisionTop}>
                      <span>{division.number}</span>
                      <small>{division.short}</small>
                    </div>
                    <p>{division.body}</p>
                    <div className={styles.divisionLink}>
                      <span>{text.divisionLink}</span>
                      <Arrow />
                    </div>
                  </div>
                </div>
              </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className={`${styles.section} ${styles.direction}`}
          initial={sceneInitial}
          whileInView="visible"
          viewport={sceneViewport}
          variants={sceneVariants}
        >
          <motion.div className={styles.directionHeading} variants={revealVariants}>
            <p className={styles.goldEyebrow}>
              {text.directionEyebrow}
            </p>
            <h2>{text.directionTitle}</h2>
          </motion.div>

          <motion.div className={styles.directionGrid} variants={sceneVariants}>
            {text.direction.map((item, index) => (
              <motion.article
                key={item.number}
                className={`${styles.revealCard} ${styles.directionCard}`}
                variants={revealVariants}
                tabIndex={0}
                style={{ "--card-image": `url(${directionImages[index]})` }}
              >
                <span className={styles.cardMedia} aria-hidden="true" />
                <span className={styles.cardShade} aria-hidden="true" />
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <div className={styles.cardDetails}>
                    <div className={styles.directionNumber}>{item.number}</div>
                    <p>{item.body}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className={`${styles.section} ${styles.promise}`}
          initial={sceneInitial}
          whileInView="visible"
          viewport={sceneViewport}
          variants={sceneVariants}
        >
          <div className={styles.promiseGrid}>
            <motion.div className={styles.promiseStatement} variants={revealVariants}>
              <p className={styles.goldEyebrow}>
                {text.promiseEyebrow}
              </p>
              <h2>{text.promiseTitle}</h2>
              <p>{text.promiseBody}</p>
            </motion.div>

            <motion.div className={styles.promiseRight} variants={revealVariants}>
              <ul>
                {text.promisePoints.map((point, index) => (
                  <li key={point}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>

              <div className={styles.actions}>
                <Link href="/contact" className={styles.goldButton}>
                  {text.promisePrimary}
                  <Arrow />
                </Link>

                <Link href="/services" className={styles.darkTextLink}>
                  {text.promiseSecondary}
                  <Arrow />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className={styles.wordmark} aria-hidden="true">
            ALTEKMAR
          </div>
        </motion.section>
      </main>

      <div className={styles.footerSnap}>
        <CorporateFooter />
      </div>
    </>
  );
}
