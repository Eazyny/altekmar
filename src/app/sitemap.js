import catalog from "~/data/gots-elevator-catalog.json";
import { absoluteUrl } from "~/lib/seo";

const staticPages = [
  ["/", 1, "weekly"],
  ["/about", 0.8, "monthly"],
  ["/services", 0.9, "monthly"],
  ["/contact", 0.8, "monthly"],
  ["/shop/elevators", 0.9, "weekly"],
  ["/shop/generators", 0.8, "monthly"],
  ["/shop/air-conditioning", 0.8, "monthly"],
  ["/shop/security-systems", 0.8, "monthly"],
  ["/shop/cameras-surveillance", 0.8, "monthly"],
  ["/privacy", 0.3, "yearly"],
  ["/terms", 0.3, "yearly"],
];

export default function sitemap() {
  const generatedAt = new Date();
  const pages = staticPages.map(([path, priority, changeFrequency]) => ({
    url: absoluteUrl(path),
    lastModified: generatedAt,
    changeFrequency,
    priority,
  }));

  for (const category of catalog.categories) {
    pages.push({
      url: absoluteUrl(`/shop/elevators/${category.slug}`),
      lastModified: generatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const product of category.products) {
      pages.push({
        url: absoluteUrl(`/shop/elevators/${category.slug}/${product.id}`),
        lastModified: generatedAt,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return pages;
}
