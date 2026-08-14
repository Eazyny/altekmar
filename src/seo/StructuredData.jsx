import { absoluteUrl } from "~/lib/seo";

export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function OrganizationStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["Organization", "LocalBusiness"],
            "@id": `${absoluteUrl("/")}#organization`,
            name: "Altekmar Group, SRL",
            url: absoluteUrl("/"),
            logo: absoluteUrl("/brand/android-chrome-512x512.png"),
            image: absoluteUrl("/brand/android-chrome-512x512.png"),
            email: "info@altekmar.com",
            telephone: ["+1-809-497-3535", "+1-849-525-0600"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Santo Domingo",
              addressCountry: "DO",
            },
            areaServed: {
              "@type": "Country",
              name: "República Dominicana",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "info@altekmar.com",
              telephone: "+1-809-497-3535",
              availableLanguage: ["Spanish", "English"],
            },
          },
          {
            "@type": "WebSite",
            "@id": `${absoluteUrl("/")}#website`,
            url: absoluteUrl("/"),
            name: "Altekmar Group",
            inLanguage: "es-DO",
            publisher: {
              "@id": `${absoluteUrl("/")}#organization`,
            },
          },
        ],
      }}
    />
  );
}

export function ProductStructuredData({ product, category }) {
  const path = `/shop/elevators/${category.slug}/${product.id}`;
  const name = product.title?.es || product.title?.en || product.id;
  const description = product.description?.es || product.description?.en || "";
  const images = (product.images || [])
    .map((image) => image.publicUrl)
    .filter(Boolean)
    .map(absoluteUrl);

  if (product.featuredImage && !images.includes(absoluteUrl(product.featuredImage))) {
    images.unshift(absoluteUrl(product.featuredImage));
  }

  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Product",
            "@id": `${absoluteUrl(path)}#product`,
            name,
            description,
            image: images,
            sku: product.sku || product.id,
            category: category.title?.es || category.title?.en || category.slug,
            brand: {
              "@type": "Brand",
              name: product.manufacturer || "GOTS Elevator",
            },
            url: absoluteUrl(path),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: absoluteUrl("/"),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Elevadores",
                item: absoluteUrl("/shop/elevators"),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: category.title?.es || category.title?.en || category.slug,
                item: absoluteUrl(`/shop/elevators/${category.slug}`),
              },
              {
                "@type": "ListItem",
                position: 4,
                name,
                item: absoluteUrl(path),
              },
            ],
          },
        ],
      }}
    />
  );
}

export function ContactStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${absoluteUrl("/contact")}#contact-page`,
        url: absoluteUrl("/contact"),
        name: "Contacto | Altekmar",
        inLanguage: "es-DO",
        about: {
          "@id": `${absoluteUrl("/")}#organization`,
        },
      }}
    />
  );
}
