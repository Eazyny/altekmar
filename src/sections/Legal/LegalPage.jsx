"use client";

import useDocumentLanguage from "~/i18n/useDocumentLanguage";
import styles from "./LegalPage.module.css";

const content = {
  privacy: {
    es: {
      eyebrow: "INFORMACIÓN LEGAL · 01",
      title: "Política de privacidad",
      intro:
        "Esta política explica qué información recibe Altekmar Group, SRL cuando utilizas este sitio y cómo la utilizamos.",
      updated: "Vigente desde el 13 de agosto de 2026",
      sections: [
        [
          "Información que recopilamos",
          "Cuando envías el formulario de contacto podemos recibir tu nombre, correo electrónico, teléfono, división de interés y los detalles que compartas sobre el proyecto. También puedes contactarnos directamente por teléfono o correo.",
        ],
        [
          "Cómo utilizamos la información",
          "Usamos estos datos para responder consultas, preparar evaluaciones y cotizaciones, coordinar servicios y mantener comunicaciones relacionadas con el proyecto solicitado.",
        ],
        [
          "Servicios externos",
          "El formulario utiliza Web3Forms para entregar las consultas a Altekmar. La página de contacto incorpora Google Maps. Estos proveedores pueden procesar datos técnicos de acuerdo con sus propias políticas de privacidad.",
        ],
        [
          "Preferencia de idioma",
          "El sitio guarda la preferencia de idioma en el almacenamiento local del navegador. Esta preferencia no identifica personalmente al visitante.",
        ],
        [
          "Conservación y protección",
          "Conservamos la información durante el tiempo razonablemente necesario para responder la consulta, prestar el servicio, cumplir obligaciones legales y proteger nuestros intereses legítimos.",
        ],
        [
          "Tus solicitudes",
          "Puedes solicitar acceso, corrección o eliminación de la información que nos hayas enviado escribiendo a info@altekmar.com. Evaluaremos cada solicitud conforme a la normativa aplicable.",
        ],
      ],
    },
    en: {
      eyebrow: "LEGAL INFORMATION · 01",
      title: "Privacy policy",
      intro:
        "This policy explains what information Altekmar Group, SRL receives when you use this website and how we use it.",
      updated: "Effective August 13, 2026",
      sections: [
        [
          "Information we collect",
          "When you submit the contact form, we may receive your name, email address, phone number, area of interest, and the project details you choose to share. You may also contact us directly by phone or email.",
        ],
        [
          "How we use information",
          "We use this information to answer inquiries, prepare assessments and quotations, coordinate services, and communicate about the requested project.",
        ],
        [
          "External services",
          "The contact form uses Web3Forms to deliver inquiries to Altekmar. The contact page embeds Google Maps. These providers may process technical data under their own privacy policies.",
        ],
        [
          "Language preference",
          "The website stores your language preference in the browser's local storage. This preference does not personally identify a visitor.",
        ],
        [
          "Retention and protection",
          "We retain information for as long as reasonably necessary to answer the inquiry, provide services, meet legal obligations, and protect our legitimate interests.",
        ],
        [
          "Your requests",
          "You may request access, correction, or deletion of information you submitted by emailing info@altekmar.com. We will review each request under applicable law.",
        ],
      ],
    },
  },
  terms: {
    es: {
      eyebrow: "INFORMACIÓN LEGAL · 02",
      title: "Términos de uso",
      intro:
        "Estos términos regulan el uso del sitio web de Altekmar y la información sobre equipos y servicios publicada en él.",
      updated: "Vigente desde el 13 de agosto de 2026",
      sections: [
        [
          "Información del sitio",
          "El contenido es informativo y puede cambiar sin previo aviso. Las fotografías, configuraciones y especificaciones representan opciones generales y no sustituyen una evaluación técnica.",
        ],
        [
          "Cotizaciones y disponibilidad",
          "Los precios, disponibilidad, transporte, instalación, garantías y tiempos de entrega se confirman mediante una cotización aprobada. Enviar un formulario no crea una orden ni un contrato.",
        ],
        [
          "Requisitos del proyecto",
          "La selección final de equipos depende de capacidad, recorrido, condiciones del inmueble, alimentación eléctrica, normativa aplicable y demás requisitos técnicos del proyecto.",
        ],
        [
          "Propiedad intelectual",
          "La marca Altekmar, el diseño del sitio y el contenido original pertenecen a Altekmar Group, SRL o se utilizan con autorización. Las marcas y materiales de fabricantes pertenecen a sus respectivos titulares.",
        ],
        [
          "Enlaces externos",
          "El sitio puede enlazar fichas de fabricantes y servicios externos. Altekmar no controla su disponibilidad, contenido ni políticas.",
        ],
        [
          "Contacto",
          "Para preguntas sobre estos términos, escribe a info@altekmar.com o utiliza el formulario de contacto.",
        ],
      ],
    },
    en: {
      eyebrow: "LEGAL INFORMATION · 02",
      title: "Terms of use",
      intro:
        "These terms govern use of the Altekmar website and the equipment and service information published on it.",
      updated: "Effective August 13, 2026",
      sections: [
        [
          "Website information",
          "Website content is informational and may change without notice. Photographs, configurations, and specifications represent general options and do not replace a technical assessment.",
        ],
        [
          "Quotations and availability",
          "Prices, availability, transportation, installation, warranties, and lead times are confirmed through an approved quotation. Submitting a form does not create an order or contract.",
        ],
        [
          "Project requirements",
          "Final equipment selection depends on capacity, travel, building conditions, electrical service, applicable standards, and other technical project requirements.",
        ],
        [
          "Intellectual property",
          "The Altekmar brand, site design, and original content belong to Altekmar Group, SRL or are used with permission. Manufacturer marks and materials belong to their respective owners.",
        ],
        [
          "External links",
          "The website may link to manufacturer information and external services. Altekmar does not control their availability, content, or policies.",
        ],
        [
          "Contact",
          "For questions about these terms, email info@altekmar.com or use the contact form.",
        ],
      ],
    },
  },
};

export default function LegalPage({ type }) {
  const language = useDocumentLanguage();
  const text = content[type]?.[language] || content[type].es;

  return (
    <main className={styles.page} data-i18n-managed="true">
      <header className={styles.hero}>
        <div>
          <p>{text.eyebrow}</p>
          <h1>{text.title}</h1>
          <span>{text.updated}</span>
        </div>
        <p className={styles.intro}>{text.intro}</p>
      </header>

      <div className={styles.sections}>
        {text.sections.map(([title, body], index) => (
          <section key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
