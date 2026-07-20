"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import catalog from "~/data/gots-elevator-catalog.json";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";

const PRODUCTS_PER_PAGE = 9;

const copy = {
  es: {
    showing: "Mostrando",
    through: "a",
    of: "de",
    products: "productos",
    defaultSort: "Orden predeterminado",
    nameAscending: "Nombre: Aâ€“Z",
    nameDescending: "Nombre: Zâ€“A",
    search: "Buscar productos",
    placeholder: "Buscar por nombre o descripciÃ³n...",
    categories: "Categori­as",
    quote: "Precio bajo cotizacion",
    authorized: "Distribuidor autorizado",
    details: "Ver detalles",
    request: "Solicitar cotizacion",
    noResults: "No encontramos productos con ese termino.",
    previous: "Pagina anterior",
    next: "Pagina siguiente",
    page: "Pagina",
  },
  en: {
    showing: "Showing",
    through: "to",
    of: "of",
    products: "products",
    defaultSort: "Default sorting",
    nameAscending: "Name: Aâ€“Z",
    nameDescending: "Name: Zâ€“A",
    search: "Search products",
    placeholder: "Search by name or description...",
    categories: "Categories",
    quote: "Pricing by quotation",
    authorized: "Authorized retailer",
    details: "View details",
    request: "Request a quote",
    noResults: "No products matched that search.",
    previous: "Previous page",
    next: "Next page",
    page: "Page",
  },
};

function titleFor(product, language) {
  return product.title?.[language] || product.title?.en || product.id;
}

function descriptionFor(product, language) {
  return product.description?.[language] || product.description?.en || "";
}

function imageFor(product) {
  return (
    product.featuredImage ||
    product.images?.[0]?.publicUrl ||
    "/main-assets/img/product/product_1_1.jpg"
  );
}

export default function ElevatorCategoryListing({ categorySlug }) {
  const language = useDocumentLanguage();
  const text = copy[language];
  const category = catalog.categories.find(
    (item) => item.slug === categorySlug,
  );
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const products = useMemo(() => {
    if (!category) return [];

    const normalized = query.trim().toLowerCase();

    const filtered = category.products.filter((product) => {
      if (!normalized) return true;

      return [
        titleFor(product, language),
        descriptionFor(product, language),
        product.sku || "",
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalized);
    });

    if (sort === "name-asc") {
      return [...filtered].sort((a, b) =>
        titleFor(a, language).localeCompare(titleFor(b, language), language),
      );
    }

    if (sort === "name-desc") {
      return [...filtered].sort((a, b) =>
        titleFor(b, language).localeCompare(titleFor(a, language), language),
      );
    }

    return filtered;
  }, [category, language, query, sort]);

  useEffect(() => {
    setCurrentPage(1);
  }, [language, query, sort, categorySlug]);

  if (!category) return null;

  const pageCount = Math.max(1, Math.ceil(products.length / PRODUCTS_PER_PAGE));
  const page = Math.min(currentPage, pageCount);
  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const visible = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  const first = products.length ? startIndex + 1 : 0;
  const last = Math.min(startIndex + PRODUCTS_PER_PAGE, products.length);

  function goToPage(nextPage) {
    setCurrentPage(Math.min(Math.max(nextPage, 1), pageCount));

    window.requestAnimationFrame(() => {
      document.getElementById("category-products")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <section
      className="space-top space-extra-bottom shop-page-select-contain"
      data-i18n-managed="true"
    >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-9 col-lg-8" id="category-products">
            <div className="shop-sort-bar">
              <div className="row justify-content-between align-items-center">
                <div className="col-md">
                  <p className="woocommerce-result-count">
                    {text.showing} {first}
                    {products.length ? ` ${text.through} ${last}` : ""}{" "}
                    {text.of} {products.length} {text.products}
                  </p>
                </div>

                <div className="col-md-auto">
                  <div className="woocommerce-ordering shop-page-select-width">
                    <select
                      className="single-select orderby"
                      value={sort}
                      onChange={(event) => setSort(event.target.value)}
                    >
                      <option value="default">{text.defaultSort}</option>
                      <option value="name-asc">{text.nameAscending}</option>
                      <option value="name-desc">{text.nameDescending}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {visible.length ? (
              <>
                <div className="row gy-40">
                  {visible.map((product) => {
                    const title = titleFor(product, language);
                    const href = `/shop/elevators/${category.slug}/${product.id}`;

                    return (
                      <div
                        className="col-xl-4 col-md-6 product-space-none"
                        key={product.id}
                      >
                        <article className="product-card altekmar-elevator-card">
                          <div className="product-img">
                            <img
                              src={imageFor(product)}
                              alt={title}
                              loading="lazy"
                            />

                            <div className="actions">
                              <Link
                                href={href}
                                className="icon-btn"
                                aria-label={`${text.details}: ${title}`}
                              >
                                <i className="ri-eye-line" />
                              </Link>

                              <Link
                                href={`/contact?product=${encodeURIComponent(
                                  product.id,
                                )}&category=${category.slug}`}
                                className="icon-btn"
                                aria-label={`${text.request}: ${title}`}
                              >
                                <i className="ri-file-list-3-line" />
                              </Link>
                            </div>
                          </div>

                          <div className="product-content">
                            <span className="star-rating altekmar-product-label">
                              <i className="ri-verified-badge-fill" />
                              {text.authorized}
                            </span>

                            <h3 className="product-title">
                              <Link href={href}>{title}</Link>
                            </h3>

                            <span className="price altekmar-quote-price">
                              {text.quote}
                            </span>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>

                {pageCount > 1 ? (
                  <div
                    className="pagination justify-content-center"
                    aria-label={`${text.page} navigation`}
                  >
                    <ul>
                      {page > 1 ? (
                        <li>
                          <a
                            href="#category-products"
                            aria-label={text.previous}
                            onClick={(event) => {
                              event.preventDefault();
                              goToPage(page - 1);
                            }}
                          >
                            <i className="ri-arrow-left-line" />
                          </a>
                        </li>
                      ) : null}

                      {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                        (pageNumber) => (
                          <li key={pageNumber}>
                            <a
                              href="#category-products"
                              className={pageNumber === page ? "active" : ""}
                              aria-current={
                                pageNumber === page ? "page" : undefined
                              }
                              onClick={(event) => {
                                event.preventDefault();
                                goToPage(pageNumber);
                              }}
                            >
                              {String(pageNumber).padStart(2, "0")}
                            </a>
                          </li>
                        ),
                      )}

                      {page < pageCount ? (
                        <li>
                          <a
                            href="#category-products"
                            aria-label={text.next}
                            onClick={(event) => {
                              event.preventDefault();
                              goToPage(page + 1);
                            }}
                          >
                            <i className="ri-arrow-right-line" />
                          </a>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                ) : null}
              </>
            ) : (
              <div className="altekmar-shop-empty">
                <i className="ri-search-line" />
                <p>{text.noResults}</p>
              </div>
            )}
          </div>

          <div className="col-xl-3 col-lg-4">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <h3 className="widget_title">{text.search}</h3>
                <form
                  className="search-form"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input
                    type="search"
                    placeholder={text.placeholder}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <button type="submit" aria-label={text.search}>
                    <i className="ri-search-line" />
                  </button>
                </form>
              </div>

              <div className="widget widget_categories">
                <h3 className="widget_title">{text.categories}</h3>
                <ul>
                  {catalog.categories.map((item) => (
                    <li
                      className={item.slug === category.slug ? "active" : ""}
                      key={item.slug}
                    >
                      <Link href={`/shop/elevators/${item.slug}`}>
                        {item.title?.[language] || item.title?.en}
                        <span>{item.productCount}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}