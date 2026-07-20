"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import catalog from "~/data/gots-passenger-elevators.json";
import useDocumentLanguage from "~/i18n/useDocumentLanguage";

const PRODUCTS_PER_PAGE = 9;

const copy = {
  es: {
    showing: "Mostrando",
    through: "a",
    of: "de",
    elevators: "elevadores",
    defaultSort: "Orden predeterminado",
    nameAscending: "Nombre: Aâ€“Z",
    nameDescending: "Nombre: Zâ€“A",
    searchTitle: "Buscar elevadores",
    searchPlaceholder: "Buscar por nombre o descripciÃ³n...",
    categories: "Categori­as de productos",
    passengerElevators: "Elevadores de pasajeros",
    quote: "Precio bajo cotizaciÃ³n",
    authorized: "Distribuidor autorizado",
    viewDetails: "Ver detalles",
    requestQuote: "Solicitar cotizaciÃ³n",
    savedProducts: "Productos guardados",
    tags: "Soluciones",
    residential: "Residencial",
    commercial: "Comercial",
    accessibility: "Accesibilidad",
    modernization: "ModernizaciÃ³n",
    installation: "InstalaciÃ³n",
    noResults: "No encontramos elevadores con ese tÃ©rmino.",
    previousPage: "PÃ¡gina anterior",
    nextPage: "PÃ¡gina siguiente",
    page: "PÃ¡gina",
  },
  en: {
    showing: "Showing",
    through: "to",
    of: "of",
    elevators: "elevators",
    defaultSort: "Default sorting",
    nameAscending: "Name: Aâ€“Z",
    nameDescending: "Name: Zâ€“A",
    searchTitle: "Search elevators",
    searchPlaceholder: "Search by name or description...",
    categories: "Product Categories",
    passengerElevators: "Passenger Elevators",
    quote: "Pricing by quotation",
    authorized: "Authorized retailer",
    viewDetails: "View details",
    requestQuote: "Request a quote",
    savedProducts: "Saved products",
    tags: "Solutions",
    residential: "Residential",
    commercial: "Commercial",
    accessibility: "Accessibility",
    modernization: "Modernization",
    installation: "Installation",
    noResults: "No elevators matched that search.",
    previousPage: "Previous page",
    nextPage: "Next page",
    page: "Page",
  },
};

function localizedTitle(product, language) {
  return product.title?.[language] || product.title?.en || product.id;
}

function localizedDescription(product, language) {
  return product.description?.[language] || product.description?.en || "";
}

function productImage(product) {
  return (
    product.featuredImage ||
    product.images?.[0]?.publicUrl ||
    "/main-assets/img/product/product_1_1.jpg"
  );
}

const Product = () => {
  const language = useDocumentLanguage();
  const text = copy[language];
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const products = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = catalog.products.filter((product) => {
      if (!normalizedQuery) {
        return true;
      }

      const searchable = [
        localizedTitle(product, language),
        localizedDescription(product, language),
        product.sku || "",
        product.manufacturer || "",
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });

    if (sort === "name-asc") {
      return [...filtered].sort((a, b) =>
        localizedTitle(a, language).localeCompare(
          localizedTitle(b, language),
          language,
        ),
      );
    }

    if (sort === "name-desc") {
      return [...filtered].sort((a, b) =>
        localizedTitle(b, language).localeCompare(
          localizedTitle(a, language),
          language,
        ),
      );
    }

    return filtered;
  }, [language, query, sort]);

  const pageCount = Math.max(
    1,
    Math.ceil(products.length / PRODUCTS_PER_PAGE),
  );

  const safeCurrentPage = Math.min(currentPage, pageCount);
  const firstProductIndex =
    (safeCurrentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(
    firstProductIndex,
    firstProductIndex + PRODUCTS_PER_PAGE,
  );

  const firstVisibleProduct =
    products.length === 0 ? 0 : firstProductIndex + 1;
  const lastVisibleProduct = Math.min(
    firstProductIndex + PRODUCTS_PER_PAGE,
    products.length,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [language, query, sort]);

  function goToPage(page) {
    const nextPage = Math.min(Math.max(page, 1), pageCount);

    setCurrentPage(nextPage);

    window.requestAnimationFrame(() => {
      document
        .getElementById("elevator-results")
        ?.scrollIntoView({
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
          <div
            className="col-xl-9 col-lg-8"
            id="elevator-results"
          >
            <div className="shop-sort-bar">
              <div className="row justify-content-between align-items-center">
                <div className="col-md">
                  <p className="woocommerce-result-count">
                    {text.showing} {firstVisibleProduct}
                    {products.length > 0
                      ? ` ${text.through} ${lastVisibleProduct}`
                      : ""}{" "}
                    {text.of} {products.length} {text.elevators}
                  </p>
                </div>

                <div className="col-md-auto">
                  <div className="woocommerce-ordering shop-page-select-width">
                    <div className="form-group mb-0">
                      <select
                        name="orderby"
                        className="single-select orderby"
                        aria-label={text.defaultSort}
                        value={sort}
                        onChange={(event) => setSort(event.target.value)}
                      >
                        <option value="default">
                          {text.defaultSort}
                        </option>
                        <option value="name-asc">
                          {text.nameAscending}
                        </option>
                        <option value="name-desc">
                          {text.nameDescending}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {products.length ? (
              <>
                <div className="row gy-40">
                  {paginatedProducts.map((product) => {
                    const href = `/shop/elevators/${product.id}`;
                    const title = localizedTitle(
                      product,
                      language,
                    );

                    return (
                      <div
                        className="col-xl-4 col-md-6 product-space-none"
                        key={product.id}
                      >
                        <div className="product-card altekmar-elevator-card">
                          <div className="product-img">
                            <img
                              src={productImage(product)}
                              alt={title}
                              loading="lazy"
                            />
                            <div className="actions">
                              <Link
                                href={href}
                                className="icon-btn"
                                aria-label={`${text.viewDetails}: ${title}`}
                                title={text.viewDetails}
                              >
                                <i className="ri-eye-line" />
                              </Link>

                              <Link
                                href={`/contact?product=${encodeURIComponent(
                                  product.id,
                                )}`}
                                className="icon-btn"
                                aria-label={`${text.requestQuote}: ${title}`}
                                title={text.requestQuote}
                              >
                                <i className="ri-file-list-3-line" />
                              </Link>

                              <Link
                                href="/wishlist"
                                className="icon-btn"
                                aria-label={text.savedProducts}
                                title={text.savedProducts}
                              >
                                <i className="ri-heart-line" />
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
                        </div>
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
                      {safeCurrentPage > 1 ? (
                        <li>
                          <a
                            href="#elevator-results"
                            aria-label={text.previousPage}
                            onClick={(event) => {
                              event.preventDefault();
                              goToPage(safeCurrentPage - 1);
                            }}
                          >
                            <i className="ri-arrow-left-line" />
                          </a>
                        </li>
                      ) : null}

                      {Array.from(
                        { length: pageCount },
                        (_, index) => index + 1,
                      ).map((page) => (
                        <li key={page}>
                          <a
                            href="#elevator-results"
                            className={
                              page === safeCurrentPage
                                ? "active"
                                : ""
                            }
                            aria-current={
                              page === safeCurrentPage
                                ? "page"
                                : undefined
                            }
                            aria-label={`${text.page} ${page}`}
                            onClick={(event) => {
                              event.preventDefault();
                              goToPage(page);
                            }}
                          >
                            {String(page).padStart(2, "0")}
                          </a>
                        </li>
                      ))}

                      {safeCurrentPage < pageCount ? (
                        <li>
                          <a
                            href="#elevator-results"
                            aria-label={text.nextPage}
                            onClick={(event) => {
                              event.preventDefault();
                              goToPage(safeCurrentPage + 1);
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
                <h3 className="widget_title">
                  {text.searchTitle}
                </h3>

                <form
                  className="search-form"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input
                    type="search"
                    placeholder={text.searchPlaceholder}
                    value={query}
                    onChange={(event) =>
                      setQuery(event.target.value)
                    }
                  />

                  <button
                    type="submit"
                    aria-label={text.searchTitle}
                  >
                    <i className="ri-search-line" />
                  </button>
                </form>
              </div>

              <div className="widget widget_categories">
                <h3 className="widget_title">
                  {text.categories}
                </h3>

                <ul>
                  <li>
                    <Link href="/shop/elevators">
                      {text.passengerElevators}
                      <span>{catalog.products.length}</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">{text.tags}</h3>

                <div className="tagcloud">
                  <Link href="/service-details">
                    {text.residential}
                  </Link>
                  <Link href="/service-details">
                    {text.commercial}
                  </Link>
                  <Link href="/service-details">
                    {text.accessibility}
                  </Link>
                  <Link href="/service-details">
                    {text.modernization}
                  </Link>
                  <Link href="/contact">
                    {text.installation}
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;