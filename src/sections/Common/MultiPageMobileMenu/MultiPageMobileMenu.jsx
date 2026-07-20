"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "~/i18n/LanguageSwitcher";

const submenuStyle = (open) => ({
    opacity: open ? 1 : 0,
    display: open ? "block" : "none",
    transition: "opacity 0.3s ease",
});

const MultiPageMobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

    const handleMobileMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={`mobile-menu-wrapper ${isMenuOpen ? "body-visible" : ""}`}>
            <div className="mobile-menu-area">
                <div className="mobile-logo">
                    <Link href="/" onClick={handleMobileMenuClose}>
                        <img src="/main-assets/img/logo.svg" alt="Altekmar" />
                    </Link>
                    <div className="altekmar-mobile-language">
                        <LanguageSwitcher />
                    </div>
                    <button onClick={handleMobileMenuClose} className="menu-toggle" type="button">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="mobile-menu">
                    <ul>
                        <li><Link href="/" onClick={handleMobileMenuClose}>Home</Link></li>
                        <li><Link href="/about" onClick={handleMobileMenuClose}>About</Link></li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isServiceMenuOpen ? "active-class" : ""}`}>
                            <Link
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setIsServiceMenuOpen((open) => !open);
                                }}
                            >
                                Services <span className="mean-expand-class"></span>
                            </Link>
                            <ul
                                className={`sub-menu submenu-class ${isServiceMenuOpen ? "menu-open" : ""}`}
                                style={submenuStyle(isServiceMenuOpen)}
                            >
                                <li><Link href="/service" onClick={handleMobileMenuClose}>All Services</Link></li>
                                <li><Link href="/service-details" onClick={handleMobileMenuClose}>Elevators & Vertical Mobility</Link></li>
                                <li><Link href="/service-details" onClick={handleMobileMenuClose}>Generators & Power Systems</Link></li>
                                <li><Link href="/service-details" onClick={handleMobileMenuClose}>Air Conditioning & HVAC</Link></li>
                                <li><Link href="/service-details" onClick={handleMobileMenuClose}>Security Systems</Link></li>
                                <li><Link href="/service-details" onClick={handleMobileMenuClose}>General Contracting</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/project" onClick={handleMobileMenuClose}>Projects</Link></li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isShopMenuOpen ? "active-class" : ""}`}>
                            <Link
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setIsShopMenuOpen((open) => !open);
                                }}
                            >
                                Shop <span className="mean-expand-class"></span>
                            </Link>
                            <ul
                                className={`sub-menu submenu-class ${isShopMenuOpen ? "menu-open" : ""}`}
                                style={submenuStyle(isShopMenuOpen)}
                            >
                                <li><Link href="/shop" onClick={handleMobileMenuClose}>Equipment & Products</Link></li>
                                <li><Link href="/shop-details" onClick={handleMobileMenuClose}>Product Details</Link></li>
                                <li><Link href="/cart" onClick={handleMobileMenuClose}>Request Cart</Link></li>
                                <li><Link href="/checkout" onClick={handleMobileMenuClose}>Project Request</Link></li>
                                <li><Link href="/wishlist" onClick={handleMobileMenuClose}>Saved Products</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/contact" onClick={handleMobileMenuClose}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MultiPageMobileMenu;
