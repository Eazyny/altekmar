export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://altekmar.com"
).replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function compactDescription(value, maxLength = 160) {
  const text = String(value || "").replace(/\s+/g, " ").trim();

  if (text.length <= maxLength) return text;

  const shortened = text.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 100 ? lastSpace : maxLength - 1)}…`;
}

export function compactTitle(value, maxLength = 54) {
  const text = String(value || "").replace(/\s+/g, " ").trim();

  if (text.length <= maxLength) return text;

  const shortened = text.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 34 ? lastSpace : maxLength - 1)}…`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "/brand/android-chrome-512x512.png",
  type = "website",
}) {
  const canonical = absoluteUrl(path);
  const normalizedDescription = compactDescription(description);

  return {
    title,
    description: normalizedDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: normalizedDescription,
      url: canonical,
      siteName: "Altekmar Group",
      locale: "es_DO",
      type,
      images: [
        {
          url: absoluteUrl(image),
          alt: "Altekmar Group",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: normalizedDescription,
      images: [absoluteUrl(image)],
    },
  };
}

export function productMetadata(product, category) {
  const title = compactTitle(product.title?.es || product.title?.en || product.id);
  const description =
    product.description?.es ||
    product.description?.en ||
    "Elevador disponible mediante evaluación técnica y cotización con Altekmar.";
  const path = `/shop/elevators/${category.slug}/${product.id}`;

  return createPageMetadata({
    title,
    description,
    path,
    image:
      product.featuredImage ||
      product.images?.[0]?.publicUrl ||
      "/brand/android-chrome-512x512.png",
    type: "website",
  });
}
