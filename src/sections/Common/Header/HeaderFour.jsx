"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "~/i18n/LanguageProvider";
import styles from "./HeaderFour.module.css";
import premiumStyles from "./HeaderFourPremium.module.css";
import Image from "next/image";

const copy = {
  es: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
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
      ["Aire acondicionado", "/shop/air-conditioning"],
      ["Sistemas de seguridad", "/shop/security-systems"],
      ["Cámaras y videovigilancia", "/shop/cameras-surveillance"],
    ],
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
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
      ["Air conditioning", "/shop/air-conditioning"],
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


function parseColor(color) {
  if (!color || color === "transparent") return null;

  const match = color.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)/
  );

  if (!match) return null;

  const alphaRaw = match[4];
  const alpha =
    alphaRaw === undefined
      ? 1
      : alphaRaw.endsWith("%")
        ? Number(alphaRaw.slice(0, -1)) / 100
        : Number(alphaRaw);

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    a: alpha,
  };
}

function relativeLuminance({ r, g, b }) {
  const convert = (channel) => {
    const value = channel / 255;
    return value <= 0.03928
      ? value / 12.92
      : ((value + 0.055) / 1.055) ** 2.4;
  };

  return (
    0.2126 * convert(r) +
    0.7152 * convert(g) +
    0.0722 * convert(b)
  );
}

function toneFromElement(element) {
  let node = element;

  while (node && node !== document.documentElement) {
    if (node instanceof HTMLElement) {
      const declaredTone = node.dataset?.headerTone;

      if (declaredTone === "dark" || declaredTone === "light") {
        return declaredTone;
      }

      if (node.tagName === "VIDEO") {
        return "dark";
      }

      const style = window.getComputedStyle(node);
      const backgroundColor = parseColor(style.backgroundColor);

      if (backgroundColor && backgroundColor.a >= 0.35) {
        return relativeLuminance(backgroundColor) >= 0.42
          ? "light"
          : "dark";
      }
    }

    node = node.parentElement;
  }

  const bodyColor = parseColor(
    window.getComputedStyle(document.body).backgroundColor
  );

  if (bodyColor) {
    return relativeLuminance(bodyColor) >= 0.42 ? "light" : "dark";
  }

  return "light";
}

function getUnderlyingElement(header, x, y) {
  const previousPointerEvents = header.style.pointerEvents;

  /*
   * elementFromPoint normally hits the sticky header itself.
   * Temporarily remove the header from hit-testing so we inspect
   * the real page surface directly behind it.
   */
  header.style.pointerEvents = "none";
  const element = document.elementFromPoint(x, y);
  header.style.pointerEvents = previousPointerEvents;

  return element;
}

function getHeaderSurfaceTone(header, mainBar) {
  if (!header || !mainBar) return "light";

  const rect = mainBar.getBoundingClientRect();

  if (rect.width <= 0 || rect.height <= 0) {
    return "light";
  }

  /*
   * Sample the ACTUAL area behind the main navigation instead of
   * sampling below the header. Five horizontal points prevents one
   * unusual card/image from deciding the entire header state.
   */
  const xPositions = [0.14, 0.32, 0.5, 0.68, 0.86];
  const yPositions = [0.42, 0.68];

  let light = 0;
  let dark = 0;

  for (const yRatio of yPositions) {
    const y = Math.min(
      window.innerHeight - 1,
      Math.max(1, rect.top + rect.height * yRatio)
    );

    for (const xRatio of xPositions) {
      const x = Math.min(
        window.innerWidth - 1,
        Math.max(1, rect.left + rect.width * xRatio)
      );

      const underlying = getUnderlyingElement(header, x, y);
      const tone = toneFromElement(underlying);

      if (tone === "dark") dark += 1;
      else light += 1;
    }
  }

  return dark > light ? "dark" : "light";
}

export default function HeaderFour() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [surfaceTone, setSurfaceTone] = useState("light");
  const headerRef = useRef(null);
  const mainBarRef = useRef(null);
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

  useEffect(() => {
    const updateScrolledState = () => setScrolled(window.scrollY > 24);
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  useEffect(() => {
    let frameId = 0;
    const timers = [];

    const updateSurfaceTone = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        /*
         * At the absolute top of the page, force the light-surface mode
         * so the header starts with dark text and never flashes white
         * before the hero/layout finishes settling.
         */
        if (window.scrollY <= 4) {
          setSurfaceTone("light");
          return;
        }

        const nextTone = getHeaderSurfaceTone(
          headerRef.current,
          mainBarRef.current
        );

        setSurfaceTone((currentTone) =>
          currentTone === nextTone ? currentTone : nextTone
        );
      });
    };

    updateSurfaceTone();

    /*
     * Re-check after hydration, fonts, video/poster loading and layout
     * have had time to settle. This prevents stale first-load contrast.
     */
    [100, 300, 700, 1500].forEach((delay) => {
      timers.push(window.setTimeout(updateSurfaceTone, delay));
    });

    window.addEventListener("scroll", updateSurfaceTone, { passive: true });
    window.addEventListener("resize", updateSurfaceTone, { passive: true });
    window.addEventListener("load", updateSurfaceTone);

    return () => {
      cancelAnimationFrame(frameId);

      timers.forEach((timer) => {
        window.clearTimeout(timer);
      });

      window.removeEventListener("scroll", updateSurfaceTone);
      window.removeEventListener("resize", updateSurfaceTone);
      window.removeEventListener("load", updateSurfaceTone);
    };
  }, [pathname]);


  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${premiumStyles.premiumHeader} ${
        surfaceTone === "dark"
          ? premiumStyles.overDark
          : premiumStyles.overLight
      } ${scrolled ? premiumStyles.scrolled : ""}`}
      data-i18n-managed="true"
      data-surface-tone={surfaceTone}
    >
      <div className={`${styles.utilityBar} ${premiumStyles.premiumUtility}`}>
        <div className={`${styles.utilityInner} ${premiumStyles.premiumUtilityInner}`}>
          <div className={`${styles.utilityInfo} ${premiumStyles.premiumUtilityInfo}`}>
            <span><Clock />{text.schedule}</span>
            <span><Pin />{text.location}</span>
            <Link href="/contact">{text.call}</Link>
          </div>
        </div>
      </div>

      <div
        ref={mainBarRef}
        className={`${styles.mainBar} ${premiumStyles.premiumMainBar}`}
      >
        <div className={`${styles.mainInner} ${premiumStyles.premiumMainInner}`}>
          <Link
            href="/"
            className={`${styles.logoLink} ${premiumStyles.premiumLogoLink}`}
            aria-label="Altekmar Group"
          >
            <Image
              src="/brand/altekmar_wide.svg"
              alt="Altekmar Group"
              width={532}
              height={168}
              className={`${styles.logoImage} ${premiumStyles.premiumLogoImage}`}
              data-altekmar-header-logo="true"
              priority
            />
          </Link>

          <nav className={`${styles.desktopNav} ${premiumStyles.premiumNav}`} aria-label="Primary navigation">
            <Link href="/" className={active("/") ? styles.active : ""}>
              {text.home}
            </Link>
            <Link href="/about" className={active("/about") ? styles.active : ""}>
              {text.about}
            </Link>

            <div className={`${styles.dropdown} ${premiumStyles.premiumDropdown}`}>
              <button
                type="button"
                onClick={() => setServicesOpen((value) => !value)}
                aria-expanded={servicesOpen}
              >
                {text.services}
                <Chevron />
              </button>
              <div className={`${styles.dropdownMenu} ${premiumStyles.premiumDropdownMenu} ${servicesOpen ? styles.dropdownOpen : ""}`}>
                {text.servicesList.map(([label, href], index) => (
                  <Link href={href} key={`${label}-${index}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {label}
                    <Arrow />
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className={active("/contact") ? styles.active : ""}>
              {text.contact}
            </Link>
          </nav>

          <div className={`${styles.desktopActions} ${premiumStyles.premiumActions}`}>
            <button
              type="button"
              className={`${styles.language} ${premiumStyles.premiumLanguage}`}
              onClick={toggleLanguage}
              aria-label={text.switchLanguage}
            >
              <span className={language === "es" ? styles.current : ""}>ES</span>
              <i>/</i>
              <span className={language === "en" ? styles.current : ""}>EN</span>
            </button>

            <Link href="/contact" className={`${styles.quote} ${premiumStyles.premiumQuote}`}>
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

          <Link href="/contact"><span>04</span>{text.contact}</Link>
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
