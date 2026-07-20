"use client";

import Link from "next/link";
import catalog from "~/data/gots-elevator-catalog.json";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";

const copy = {
  es: {
    eyebrow: "Catalogo de movilidad vertical",
    title: "Explora nuestras categorias.",
    intro:
      "Cada categoria mantiene sus productos separados para que puedas comparar la solucion correcta para tu proyecto.",
    products: "productos",
    view: "Ver categoria",
    authorized: "Distribuidor autorizado",
  },
  en: {
    eyebrow: "Vertical mobility catalog",
    title: "Explore our categories.",
    intro:
      "Each category keeps its products separate so you can compare the right solution for your project.",
    products: "products",
    view: "View category",
    authorized: "Authorized retailer",
  },
};

function imageForCategory(category) {
  const first = category.products?.find(
    (product) => product.featuredImage || product.images?.[0]?.publicUrl,
  );

  return (
    first?.featuredImage ||
    first?.images?.[0]?.publicUrl ||
    "/main-assets/img/product/product_1_1.jpg"
  );
}

export default function ElevatorCategoryHub() {
  const language = useDocumentLanguage();
  const text = copy[language];

  return (
    <section
      className="space-top space-extra-bottom"
      data-i18n-managed="true"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="title-area text-center">
              <span className="sub-title">{text.eyebrow}</span>
              <h2 className="sec-title">{text.title}</h2>
              <p>{text.intro}</p>
            </div>
          </div>
        </div>

        <div className="row gy-40">
          {catalog.categories.map((category) => {
            const title =
              category.title?.[language] || category.title?.en || category.slug;
            const description =
              category.description?.[language] ||
              category.description?.en ||
              "";

            return (
              <div className="col-xl-4 col-md-6" key={category.slug}>
                <article className="product-card altekmar-category-card">
                  <div className="product-img">
                    <img src={imageForCategory(category)} alt={title} />
                  </div>

                  <div className="product-content">
                    <span className="star-rating altekmar-product-label">
                      <i className="ri-verified-badge-fill" />
                      {text.authorized}
                    </span>

                    <h3 className="product-title">
                      <Link href={`/shop/elevators/${category.slug}`}>
                        {title}
                      </Link>
                    </h3>

                    <p className="altekmar-category-description">
                      {description}
                    </p>

                    <div className="altekmar-category-footer">
                      <span>
                        {category.productCount} {text.products}
                      </span>
                      <Link
                        className="btn style-border"
                        href={`/shop/elevators/${category.slug}`}
                      >
                        {text.view}
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}