"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "~/i18n/LanguageProvider";
import styles from "./HeaderFour.module.css";

const copy = {
  es: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    projects: "Proyectos",
    shop: "Tienda",
    contact: "Contacto",
    quote: "Solicitar cotización",
    call: "Solicitar llamada",
    schedule: "Lunes–sábado · Con cita",
    location: "República Dominicana",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchLanguage: "Cambiar idioma",
    servicesList: [
      ["Elevadores y movilidad", "/shop/elevators"],
      ["Generadores y respaldo eléctrico", "/shop/generators"],
      ["Aire acondicionado", "/shop/airconditioners"],
      ["Sistemas de seguridad", "/shop/security-systems"],
      ["Cámaras y videovigilancia", "/shop/cameras-surveillance"],
    ],
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    shop: "Shop",
    contact: "Contact",
    quote: "Request a quote",
    call: "Request a call",
    schedule: "Monday–Saturday · By appointment",
    location: "Dominican Republic",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Switch language",
    servicesList: [
      ["Elevators and mobility", "/shop/elevators"],
      ["Generators and backup power", "/shop/generators"],
      ["Air conditioning", "/shop/airconditioners"],
      ["Security systems", "/shop/security-systems"],
      ["Cameras and surveillance", "/shop/cameras-surveillance"],
    ],
  },
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.arrow}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.chevron}>
      <path d="m7 9 5 5 5-5" />
    </svg>
  );
}

function Clock() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.utilityIcon}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function Pin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.utilityIcon}>
      <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

export default function HeaderFour() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const text = copy[language] || copy.es;

  const active = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  return (
    <header
      className={styles.header}
      data-i18n-managed="true"
    >
      <div className={styles.utilityBar}>
        <div className={styles.utilityInner}>
          <div className={styles.utilityInfo}>
            <span><Clock />{text.schedule}</span>
            <span><Pin />{text.location}</span>
            <Link href="/contact">{text.call}</Link>
          </div>
        </div>
      </div>

      <div className={styles.mainBar}>
        <div className={styles.mainInner}>
          <Link href="/" className={styles.logoLink} aria-label="Altekmar Group">
            <img
              src="/brand/altekgoldwide.webp"
              alt="Altekmar Group"
              className={styles.logoImage}
              data-altekmar-header-logo="true"
            />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <Link href="/" className={active("/") ? styles.active : ""}>
              {text.home}
            </Link>
            <Link href="/about" className={active("/about") ? styles.active : ""}>
              {text.about}
            </Link>

            <div className={styles.dropdown}>
              <button
                type="button"
                onClick={() => setServicesOpen((value) => !value)}
                aria-expanded={servicesOpen}
              >
                {text.services}
                <Chevron />
              </button>
              <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownOpen : ""}`}>
                {text.servicesList.map(([label, href], index) => (
                  <Link href={href} key={`${label}-${index}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {label}
                    <Arrow />
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/project" className={active("/project") ? styles.active : ""}>
              {text.projects}
            </Link>
            <Link href="/shop" className={active("/shop") ? styles.active : ""}>
              {text.shop}
            </Link>
            <Link href="/contact" className={active("/contact") ? styles.active : ""}>
              {text.contact}
            </Link>
          </nav>

          <div className={styles.desktopActions}>
            <button
              type="button"
              className={styles.language}
              onClick={toggleLanguage}
              aria-label={text.switchLanguage}
            >
              <span className={language === "es" ? styles.current : ""}>ES</span>
              <i>/</i>
              <span className={language === "en" ? styles.current : ""}>EN</span>
            </button>

            <Link href="/contact" className={styles.quote}>
              {text.quote}
              <Arrow />
            </Link>
          </div>

          <div className={styles.mobileActions}>
            <button
              type="button"
              className={styles.mobileLanguage}
              onClick={toggleLanguage}
              aria-label={text.switchLanguage}
            >
              {language.toUpperCase()}
            </button>
            <button
              type="button"
              className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? text.closeMenu : text.openMenu}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/"><span>01</span>{text.home}</Link>
          <Link href="/about"><span>02</span>{text.about}</Link>

          <div className={styles.mobileServices}>
            <button
              type="button"
              onClick={() => setServicesOpen((value) => !value)}
              aria-expanded={servicesOpen}
            >
              <span>03</span>
              {text.services}
              <Chevron />
            </button>
            <div className={`${styles.mobileServiceList} ${servicesOpen ? styles.mobileServiceListOpen : ""}`}>
              {text.servicesList.map(([label, href], index) => (
                <Link href={href} key={`${label}-mobile-${index}`}>
                  {label}
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>

          <Link href="/project"><span>04</span>{text.projects}</Link>
          <Link href="/shop"><span>05</span>{text.shop}</Link>
          <Link href="/contact"><span>06</span>{text.contact}</Link>
        </nav>

        <div className={styles.mobileFooter}>
          <Link href="/contact" className={styles.mobileQuote}>
            {text.quote}
            <Arrow />
          </Link>
          <div className={styles.mobileMeta}>
            <span><Clock />{text.schedule}</span>
            <span><Pin />{text.location}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        onClick={() => setMenuOpen(false)}
        tabIndex={menuOpen ? 0 : -1}
        aria-label={text.closeMenu}
      />
    </header>
  );
}
