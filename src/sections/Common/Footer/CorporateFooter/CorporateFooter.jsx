"use client";


import Image from "next/image";
import Link from "next/link";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./CorporateFooter.module.css";

const copy = {
  es: {
    summary: "Suministro, instalación y coordinación de sistemas esenciales para proyectos residenciales, comerciales e institucionales.",
    divisions: "Divisiones",
    company: "Corporación",
    contact: "Contacto",
    consultation: "Solicitar una consulta",
    closingEyebrow: "Altekmar Group",
    closingTitle: "Cinco divisiones. Una sola visión.",
    rights: "Todos los derechos reservados.",
    createdBy: "Creado por",
    links: [
      ["Elevadores y movilidad", "/shop/elevators"],
      ["Generadores", "/shop/generators"],
      ["Aire acondicionado", "/shop/air-conditioning"],
      ["Sistemas de seguridad", "/shop/security-systems"],
      ["Cámaras y videovigilancia", "/shop/cameras-surveillance"],
    ],
    companyLinks: [
      ["Nosotros", "/about"],
      ["Servicios", "/services"],
      ["Contacto", "/contact"],
      ["Privacidad", "/privacy"],
      ["Términos", "/terms"],
    ],
  },
  en: {
    summary: "Equipment supply, installation, and coordination of essential systems for residential, commercial, and institutional projects.",
    divisions: "Divisions",
    company: "Company",
    contact: "Contact",
    consultation: "Request a consultation",
    closingEyebrow: "Altekmar Group",
    closingTitle: "Five divisions. One unified vision.",
    rights: "All rights reserved.",
    createdBy: "Created by",
    links: [
      ["Elevators and mobility", "/shop/elevators"],
      ["Generators", "/shop/generators"],
      ["Air conditioning", "/shop/air-conditioning"],
      ["Security systems", "/shop/security-systems"],
      ["Cameras and surveillance", "/shop/cameras-surveillance"],
    ],
    companyLinks: [
      ["About", "/about"],
      ["Services", "/services"],
      ["Contact", "/contact"],
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
    ],
  },
};

export default function CorporateFooter() {
  const language = useDocumentLanguage();
  const text = copy[language] || copy.es;

  return (
    <footer
      className={styles.footer}
      data-home-section="footer"
      data-i18n-managed="true"
    >
      <div className={styles.closing}>
        <div className={styles.closingCopy}>
          <p>{text.closingEyebrow}</p>
          <h2>{text.closingTitle}</h2>
        </div>

        <div className={styles.closingAside}>
          <span aria-hidden="true">05</span>
          <Link href="/contact" className={styles.closingLink}>
            {text.consultation} <span>↗</span>
          </Link>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.brand}>
          <Image
  width={1199}
  height={800}
  unoptimized src="/brand/altekgoldwide.webp" alt="Altekmar Group" />
          <p>{text.summary}</p>
        </div>

        <div>
          <h3>{text.divisions}</h3>
          <nav>
            {text.links.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </nav>
        </div>

        <div>
          <h3>{text.company}</h3>
          <nav>
            {text.companyLinks.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </nav>
        </div>

        <div className={styles.contact}>
          <h3>{text.contact}</h3>
          <p>Santo Domingo, República Dominicana</p>
          <a href="tel:+18094973535">+1 (809) 497-3535</a>
          <a href="tel:+18495250600">+1 (849) 525-0600</a>
          <a href="mailto:info@altekmar.com">info@altekmar.com</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Altekmar Group, SRL. {text.rights}</p>
        <div className={styles.bottomActions}>
          <a
            className={styles.creatorCredit}
            href="https://ozony.tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${text.createdBy} Ozony.tech`}
          >
            <Image
  width={296}
  height={295}
  unoptimized src="/brand/ozonytech300.svg" alt="" aria-hidden="true" />
            <span>{text.createdBy} <strong>OZONY.TECH</strong></span>
          </a>
          <button
            type="button"
            aria-label={language === "en" ? "Back to top" : "Volver arriba"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
