"use client";

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
    rights: "Todos los derechos reservados.",
    links: [
      ["Elevadores y movilidad", "/shop/elevators"],
      ["Generadores", "/services/generators"],
      ["Aire acondicionado", "/services/air-conditioning"],
      ["Sistemas de seguridad", "/services/security-systems"],
      ["Cámaras y videovigilancia", "/services/cameras-surveillance"],
    ],
    companyLinks: [
      ["Nosotros", "/about"],
      ["Servicios", "/service"],
      ["Proyectos", "/project"],
      ["Tienda", "/shop"],
      ["Contacto", "/contact"],
    ],
  },
  en: {
    summary: "Equipment supply, installation, and coordination of essential systems for residential, commercial, and institutional projects.",
    divisions: "Divisions",
    company: "Company",
    contact: "Contact",
    consultation: "Request a consultation",
    rights: "All rights reserved.",
    links: [
      ["Elevators and mobility", "/shop/elevators"],
      ["Generators", "/services/generators"],
      ["Air conditioning", "/services/air-conditioning"],
      ["Security systems", "/services/security-systems"],
      ["Cameras and surveillance", "/services/cameras-surveillance"],
    ],
    companyLinks: [
      ["About", "/about"],
      ["Services", "/service"],
      ["Projects", "/project"],
      ["Shop", "/shop"],
      ["Contact", "/contact"],
    ],
  },
};

export default function CorporateFooter() {
  const language = useDocumentLanguage();
  const text = copy[language] || copy.es;

  return (
    <footer className={styles.footer} data-i18n-managed="true">
      <div className={styles.grid}>
        <div className={styles.brand}>
          <img src="/brand/altekgoldwide.png" alt="Altekmar Group" />
          <p>{text.summary}</p>
          <Link href="/contact">{text.consultation} <span>↗</span></Link>
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
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>
      </div>
    </footer>
  );
}
