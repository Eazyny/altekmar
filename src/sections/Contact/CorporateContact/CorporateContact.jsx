"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import inquiryProducts from "~/data/elevator-inquiry-products.json";
import styles from "./CorporateContact.module.css";

const copy = {
  es: {
    eyebrow: "CONTACTO · REPÚBLICA DOMINICANA",
    title: "HABLEMOS DEL",
    accent: "PRÓXIMO PROYECTO.",
    intro:
      "Cuéntanos qué necesita el espacio. Nuestro equipo te ayudará a ordenar alcance, equipos y próximos pasos.",
    start: "INICIAR CONSULTA",
    office: "OFICINA PRINCIPAL",
    location: "Santo Domingo, República Dominicana",
    phone: "TELÉFONOS",
    email: "CORREO",
    hours: "HORARIO",
    hoursValue: "Lunes–sábado · Con cita",
    formEyebrow: "CUÉNTANOS SOBRE EL PROYECTO",
    formTitle: "La mejor solución empieza con",
    formAccent: "una conversación clara.",
    formIntro:
      "Comparte la información que ya tengas. Podemos ayudarte incluso si el proyecto todavía está tomando forma.",
    name: "Nombre",
    emailField: "Correo electrónico",
    phoneField: "Teléfono",
    subject: "Área de interés",
    message: "¿Qué necesitas resolver?",
    select: "Selecciona una división",
    options: [
      ["elevators", "Elevadores y movilidad"],
      ["generators", "Generadores y respaldo eléctrico"],
      ["air-conditioning", "Aire acondicionado"],
      ["security-systems", "Sistemas de seguridad"],
      ["cameras-surveillance", "Cámaras y videovigilancia"],
      ["general", "Consulta general"],
    ],
    submit: "ENVIAR CONSULTA",
    submitting: "ENVIANDO CONSULTA…",
    success: "Gracias. Recibimos tu consulta y nuestro equipo se pondrá en contacto contigo pronto.",
    error: "No pudimos enviar la consulta. Inténtalo nuevamente o escríbenos a info@altekmar.com.",
    configurationError: "El formulario aún no está configurado. Escríbenos a info@altekmar.com.",
    mapEyebrow: "UBICACIÓN",
    mapTitle: "Coordinamos proyectos desde",
    mapAccent: "Santo Domingo.",
    mapNote: "Atención con cita previa",
    mapLabel: "Mapa de Santo Domingo, República Dominicana",
  },
  en: {
    eyebrow: "CONTACT · DOMINICAN REPUBLIC",
    title: "LET'S TALK ABOUT",
    accent: "YOUR NEXT PROJECT.",
    intro:
      "Tell us what the space needs. Our team will help organize scope, equipment, and next steps.",
    start: "START A CONSULTATION",
    office: "MAIN OFFICE",
    location: "Santo Domingo, Dominican Republic",
    phone: "PHONE",
    email: "EMAIL",
    hours: "HOURS",
    hoursValue: "Monday–Saturday · By appointment",
    formEyebrow: "TELL US ABOUT THE PROJECT",
    formTitle: "The right solution starts with",
    formAccent: "a clear conversation.",
    formIntro:
      "Share whatever information you have. We can help even if the project is still taking shape.",
    name: "Name",
    emailField: "Email address",
    phoneField: "Phone number",
    subject: "Area of interest",
    message: "What do you need to solve?",
    select: "Select a division",
    options: [
      ["elevators", "Elevators and mobility"],
      ["generators", "Generators and backup power"],
      ["air-conditioning", "Air conditioning"],
      ["security-systems", "Security systems"],
      ["cameras-surveillance", "Cameras and surveillance"],
      ["general", "General inquiry"],
    ],
    submit: "SEND INQUIRY",
    submitting: "SENDING INQUIRY…",
    success: "Thank you. We received your inquiry and our team will contact you shortly.",
    error: "We couldn't send your inquiry. Please try again or email us at info@altekmar.com.",
    configurationError: "The form is not configured yet. Please email us at info@altekmar.com.",
    mapEyebrow: "LOCATION",
    mapTitle: "We coordinate projects from",
    mapAccent: "Santo Domingo.",
    mapNote: "Visits by appointment",
    mapLabel: "Map of Santo Domingo, Dominican Republic",
  },
};


// ALTEKMAR PRODUCT INQUIRY START
const productInquiryCopy = {
  es: {
    signal: "CONSULTA DE PRODUCTO / 01",
    selected: "MODELO SELECCIONADO",
    note:
      "Este modelo exacto y su enlace se incluirán automáticamente con tu consulta.",
    viewModel: "VER MODELO",
    subjectPrefix: "Consulta de elevador",
  },
  en: {
    signal: "PRODUCT INQUIRY / 01",
    selected: "SELECTED MODEL",
    note:
      "This exact model and its link will be included automatically with your inquiry.",
    viewModel: "VIEW MODEL",
    subjectPrefix: "Elevator inquiry",
  },
};

function productMessageFor(inquiry, language) {
  if (!inquiry) return "";

  const title =
    inquiry.title?.[language] ||
    inquiry.title?.en ||
    inquiry.id;

  if (language === "en") {
    return `I'm interested in the "${title}" model. Please send me information about pricing, availability, installation requirements, estimated lead time, and the next steps for evaluating this elevator for my project.`;
  }

  return `Estoy interesado en el modelo "${title}". Quisiera recibir información sobre precio, disponibilidad, requisitos de instalación, tiempo estimado de entrega y los próximos pasos para evaluar este elevador para mi proyecto.`;
}

function resolveProductInquiry() {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("product");
  const categorySlug = params.get("category");

  if (!productId || !categorySlug) return null;

  return (
    inquiryProducts.find(
      (item) =>
        item.id === productId &&
        item.categorySlug === categorySlug,
    ) || null
  );
}
// ALTEKMAR PRODUCT INQUIRY END

const scene = {
  hidden: {},
  visible: { transition: { delayChildren: 0.1, staggerChildren: 0.085 } },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.64, ease: [0.16, 1, 0.3, 1] },
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function CorporateContact() {
  const language = useDocumentLanguage();
  const reduceMotion = useReducedMotion();
  const text = copy[language] || copy.es;
  const [formStatus, setFormStatus] = useState("idle");
  const [productInquiry, setProductInquiry] = useState(null);
  const [division, setDivision] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const messageEditedRef = useRef(false);
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const inquiryText =
    productInquiryCopy[language] || productInquiryCopy.es;

  const productTitle = productInquiry
    ? productInquiry.title?.[language] ||
      productInquiry.title?.en ||
      productInquiry.id
    : "";

  const productCategoryTitle = productInquiry
    ? productInquiry.categoryTitle?.[language] ||
      productInquiry.categoryTitle?.en ||
      productInquiry.categorySlug
    : "";

  const productPath = productInquiry
    ? `/shop/elevators/${productInquiry.categorySlug}/${productInquiry.id}`
    : "";

  useEffect(() => {
    const inquiry = resolveProductInquiry();

    setProductInquiry(inquiry);

    if (inquiry) {
      setDivision("elevators");
    }
  }, []);

  useEffect(() => {
    if (!productInquiry || messageEditedRef.current) return;

    setMessageValue(
      productMessageFor(productInquiry, language),
    );
  }, [language, productInquiry]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formStatus === "submitting") return;

    if (!accessKey) {
      setFormStatus("configurationError");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    setFormStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Web3Forms submission failed");
      }

      form.reset();
      messageEditedRef.current = false;
      setDivision(productInquiry ? "elevators" : "");
      setMessageValue(
        productInquiry
          ? productMessageFor(productInquiry, language)
          : "",
      );
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  const feedback = formStatus === "success"
    ? text.success
    : formStatus === "error"
      ? text.error
      : formStatus === "configurationError"
        ? text.configurationError
        : "";

  return (
    <main className={styles.page} data-i18n-managed="true">
      <motion.section
        className={styles.hero}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={scene}
      >
        <span className={styles.heroGrid} aria-hidden="true" />
        <span className={styles.heroGlow} aria-hidden="true" />

        <div className={styles.heroInner}>
          <motion.div className={styles.heroCopy} variants={rise}>
            <span className={styles.eyebrow}>{text.eyebrow}</span>
            <h1><span>{text.title}</span><em>{text.accent}</em></h1>
            <p>{text.intro}</p>
            <a className={styles.primaryAction} href="#contact-form">
              {text.start} <span aria-hidden="true">↓</span>
            </a>
          </motion.div>

          <motion.address className={styles.contactIndex} variants={rise}>
            <div>
              <span>01 · {text.office}</span>
              <p>{text.location}</p>
            </div>
            <div>
              <span>02 · {text.phone}</span>
              <Link href="tel:+18094973535">+1 (809) 497-3535</Link>
              <Link href="tel:+18495250600">+1 (849) 525-0600</Link>
            </div>
            <div>
              <span>03 · {text.email}</span>
              <Link href="mailto:info@altekmar.com">info@altekmar.com</Link>
            </div>
            <div>
              <span>04 · {text.hours}</span>
              <p>{text.hoursValue}</p>
            </div>
          </motion.address>
        </div>
      </motion.section>

      <motion.section
        id="contact-form"
        className={styles.formSection}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={scene}
      >
        <div className={styles.formLead}>
          <motion.span className={styles.sectionEyebrow} variants={rise}>{text.formEyebrow}</motion.span>
          <motion.h2 variants={rise}>{text.formTitle}<em>{text.formAccent}</em></motion.h2>
          <motion.p variants={rise}>{text.formIntro}</motion.p>
        </div>

        <motion.div className={styles.formShell} variants={rise}>
          <span className={styles.formSignal} aria-hidden="true">
            {productInquiry
              ? inquiryText.signal
              : "PROJECT BRIEF / 01"}
          </span>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="access_key" value={accessKey || ""} />
            <input
              type="hidden"
              name="subject"
              value={productInquiry
                ? `${inquiryText.subjectPrefix}: ${productTitle} | Altekmar`
                : language === "en"
                  ? "New project inquiry from the Altekmar website"
                  : "Nueva consulta de proyecto desde el sitio web de Altekmar"}
            />
            <input
              type="hidden"
              name="from_name"
              value="Altekmar Website"
            />
            <input
              type="hidden"
              name="inquiry_type"
              value={
                productInquiry
                  ? "elevator_product"
                  : "general_project"
              }
            />
            {productInquiry ? (
              <>
                <input
                  type="hidden"
                  name="product_id"
                  value={productInquiry.id}
                />
                <input
                  type="hidden"
                  name="product_name"
                  value={productTitle}
                />
                <input
                  type="hidden"
                  name="product_category"
                  value={productCategoryTitle}
                />
                <input
                  type="hidden"
                  name="product_url"
                  value={`https://altekmar.com${productPath}`}
                />
              </>
            ) : null}
            {productInquiry ? (
              <div className={styles.productContext}>
                <span className={styles.productContextLabel}>
                  {inquiryText.selected}
                </span>

                <strong>{productTitle}</strong>

                <p>
                  {productCategoryTitle}
                  {productInquiry.manufacturer
                    ? ` · ${productInquiry.manufacturer}`
                    : ""}
                </p>

                <small>{inquiryText.note}</small>

                <Link
                  href={productPath}
                  className={styles.productContextLink}
                >
                  {inquiryText.viewModel} <Arrow />
                </Link>
              </div>
            ) : null}

            <div className={styles.botCheck} aria-hidden="true">
              <label htmlFor="contact-botcheck">Leave this field empty</label>
              <input
                id="contact-botcheck"
                type="checkbox"
                name="botcheck"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-name">{text.name}</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email">{text.emailField}</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-phone">{text.phoneField}</label>
              <input id="contact-phone" name="number" type="tel" autoComplete="tel" />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-subject">{text.subject}</label>
              <select
                id="contact-subject"
                name="division"
                value={division}
                onChange={(event) =>
                  setDivision(event.target.value)
                }
                required
              >
                <option value="" disabled>{text.select}</option>
                {text.options.map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>

            <div className={`${styles.field} ${styles.messageField}`}>
              <label htmlFor="contact-message">{text.message}</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={messageValue}
                onChange={(event) => {
                  messageEditedRef.current = true;
                  setMessageValue(event.target.value);
                }}
                required
              />
            </div>

            <button
              className={styles.submit}
              type="submit"
              disabled={formStatus === "submitting"}
            >
              {formStatus === "submitting" ? text.submitting : text.submit} <Arrow />
            </button>
            <p
              className={`${styles.feedback} ${formStatus === "success" ? styles.feedbackSuccess : styles.feedbackError}`}
              role={formStatus === "error" || formStatus === "configurationError" ? "alert" : "status"}
              aria-live="polite"
            >
              {feedback}
            </p>
          </form>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.mapSection}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={scene}
      >
        <motion.header className={styles.mapHeader} variants={rise}>
          <span className={styles.sectionEyebrow}>{text.mapEyebrow}</span>
          <h2>{text.mapTitle}<em>{text.mapAccent}</em></h2>
          <p>{text.mapNote}</p>
        </motion.header>

        <motion.div className={styles.mapFrame} variants={rise}>
          <iframe
            title={text.mapLabel}
            src="https://www.google.com/maps?q=Santo+Domingo,+Dominican+Republic&z=12&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className={styles.mapMarker} aria-hidden="true"><span>ALTEKMAR</span><i /></div>
        </motion.div>
      </motion.section>
    </main>
  );
}
