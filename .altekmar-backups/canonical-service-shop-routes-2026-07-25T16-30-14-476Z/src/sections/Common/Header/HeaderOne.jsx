"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MultiPageMobileMenu from "../MultiPageMobileMenu/MultiPageMobileMenu";
import LanguageSwitcher from "~/i18n/LanguageSwitcher";

const HeaderOne = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sidebarRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearchPopupOpen = () => {
        setIsPopupOpen(true);
    }
    const handleSearchPopupClose = () => {
        setIsPopupOpen(false);
    }

    const handleMobileMenuOpen = () => {
        setIsMenuOpen(true);
    }
    const handleSideBarClose = () => {
        setIsSideBarOpen(false);
    }

    const handleSideBarOpen = () => {
        setIsSideBarOpen(true);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSideBarOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarRef]);


    return (
        <div className="header-decoration">
            <div className={`popup-search-box ${isPopupOpen ? 'show' : ''}`}>
                <button onClick={handleSearchPopupClose} className="searchClose"><i className="ri-close-line"></i></button>
                <form action="#">
                    <input type="text" placeholder="Search Here.." />
                    <button type="submit"><i className="ri-search-line"></i></button>
                </form>
            </div>
            <div className={`sidemenu-wrapper ${isSideBarOpen ? 'show' : ''}`}>
                <div ref={sidebarRef} className="sidemenu-content">
                    <button onClick={handleSideBarClose} className="closeButton sideMenuCls">
                        <i className="ri-close-line"></i>
                    </button>
                    <div className="widget widget-about footer-widget">
                        <div className="footer-logo footer-img">
                            <Link href="/">
                                <img src="/main-assets/img/logo.svg" alt="Altekmar" width={100} height={50} />
                            </Link>
                        </div>
                        <p className="about-text mb-4">
                            A small business can be better than a big business because of agility and
                            adaptability due to their size and scale.
                        </p>

                        <p className="footer-text">
                            <Link href="/contact">
                                <i className="ri-phone-line space-right-sidebar-icon"></i>+85 155 596 1658
                            </Link>
                        </p>
                        <p className="contact-text">
                            <i className="ri-map-pin-line space-right-sidebar-icon"></i> Losangle, Street Road 24, New
                            York, USA - 67452
                        </p>
                        <p className="footer-text">
                            <Link href="/contact">
                                <i className="ri-mail-line space-right-sidebar-icon"></i>support@gmail.com
                            </Link>
                        </p>
                        <div className="social-btn style3 mt-30">
                            <Link href="https://www.twitter.com/"><i className="ri-twitter-x-line"></i></Link>
                            <Link href="https://instagram.com/"><i className="ri-instagram-line"></i></Link>
                            <Link href="https://facebook.com/"><i className="ri-facebook-fill"></i></Link>
                            <Link href="https://linkedin.com/"><i className="ri-linkedin-fill"></i></Link>
                        </div>
                        <div className="recent-post-wrap mt-40">
                            <div className="recent-post">
                                <div className="media-img">
                                    <Link href="/project">
                                        <img src="/main-assets/img/blog/recent-post1.png" alt="Blog Image" width={100} height={100} />
                                    </Link>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title">
                                        <Link className="text-inherit" href="/project">Best features of
                                            Building construction work</Link>
                                    </h4>
                                    <div className="recent-post-meta">
                                        <Link href="/project">By Nicholes</Link>
                                        <Link href="/project">30 min ago</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="media-img">
                                    <Link href="/project">
                                        <img src="/main-assets/img/blog/recent-post2.png" alt="Blog Image" width={100} height={100} />
                                    </Link>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title">
                                        <Link className="text-inherit" href="/project">The beast team is a
                                            around and how we make it</Link>
                                    </h4>
                                    <div className="recent-post-meta">
                                        <Link href="/project">By Nicholes</Link>
                                        <Link href="/project">2 days ago</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="media-img">
                                    <Link href="/project">
                                        <img src="/main-assets/img/blog/recent-post4.png" alt="Blog Image" width={100} height={100} />
                                    </Link>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title">
                                        <Link className="text-inherit" href="/project">A well designed
                                            construction website is user accessible</Link>
                                    </h4>
                                    <div className="recent-post-meta">
                                        <Link href="/project">By Nicholes</Link>
                                        <Link href="/project">3 week ago</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></MultiPageMobileMenu>
            <header className="nav-header header-layout1 header-decoration">
                <div className="header-top">
                    <div className="container">
                        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2 ">
                            <div className="col-auto d-none d-lg-block">
                                <div className="header-top-left">
                                    <div className="header-links">
                                        <ul>
                                            <li>
                                                <div className="social-links">
                                                    <Link href="https://www.facebook.com/"><i className="ri-facebook-fill"></i></Link>
                                                    <Link href="https://www.twitter.com/"><i className="ri-twitter-x-fill"></i></Link>
                                                    <Link href="https://www.instagram.com/"><i className="ri-instagram-line"></i></Link>
                                                    <Link href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="header-top-right">
                                    <div className="header-links ps-0">
                                        <ul>
                                            <li><i className="ri-time-line"></i>Mon - Sat / 8am : 12pm</li>
                                            <li><i className="ri-map-pin-line"></i><Link href="/contact">96 Jones Street, New York, USA</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
                    <div className="menu-area">
                        <div className="header-navbar-logo">
                            <Link href="/"><img src="/main-assets/img/logo.svg" alt="Altekmar" /></Link>
                        </div>
                        <div className="logo-bg"></div>
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-start justify-content-between">
                                <div className="col-auto d-xxl-none d-block">
                                    <div className="header-logo">
                                        <Link href="/"><img src="/main-assets/img/logo.svg" alt="Altekmar" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto menu-bar ms-xxl-0">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            <li><Link href="/">HOME</Link></li>
                                            <li><Link href="/about">ABOUT</Link></li>
                                            <li className="menu-item-has-children">
                                                <Link href="/service">SERVICES</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/service-details">Elevators & Vertical Mobility</Link></li>
                                                    <li><Link href="/service-details">Generators & Power Systems</Link></li>
                                                    <li><Link href="/service-details">Air Conditioning & HVAC</Link></li>
                                                    <li><Link href="/service-details">Security Systems</Link></li>
                                                    <li><Link href="/service-details">General Contracting</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/project">PROJECTS</Link></li>
                                            <li className="menu-item-has-children">
                                                <Link href="/shop">SHOP</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/shop">Equipment & Products</Link></li>
                                                    <li><Link href="/shop-details">Product Details</Link></li>
                                                    <li><Link href="/cart">Request Cart</Link></li>
                                                    <li><Link href="/wishlist">Saved Products</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact">CONTACT</Link></li>
                                        </ul>
                                    </nav>
                                    <div className="navbar-right d-inline-flex d-lg-none">
                                        <button onClick={handleMobileMenuOpen} type="button" className="menu-toggle icon-btn"><i className="ri-menu-line"></i></button>
                                    </div>
                                </div>
                                <div className="col-auto d-xl-block d-none space-left">
                                    <div className="header-button">
                                        <LanguageSwitcher />
                                        <Link href="/contact" className="btn header-one-extra-style">GET A QUOTE <i className="ri-arrow-right-up-line"></i></Link>
                                        <button onClick={handleSearchPopupOpen} type="button" className="search-btn searchBoxToggler simple-icon">
                                            <i className="ri-search-line"></i>
                                        </button>
                                        <button onClick={handleSideBarOpen} type="button" className="sidebar-btn sideMenuToggler simple-icon">
                                            <i className="ri-grid-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-right-desc d-xxl-flex d-none" style={{ backgroundImage: "url('/main-assets/img/bg/header-1-bg.png')" }}>
                            <div className="icon-btn">
                                <i className="ri-phone-fill"></i>
                            </div>
                            <div className="navbar-right-desc-details">
                                <h6 className="title">Call us any time</h6>
                                <Link className="link" href="/contact">+123 556 8824</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div >
    );
};

export default HeaderOne;