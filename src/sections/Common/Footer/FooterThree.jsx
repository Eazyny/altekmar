"use client";

import Link from "next/link";

const FooterThree = () => {
    return (
        <footer className="footer-wrapper footer-layout2 bg-title shape-mockup-wrap">
            <div className="footer_shape_2-1 shape-mockup" style={{ bottom: "0px", right: "0px" }}>
                <img src="/main-assets/img/bg/testimonial-bg-shape2-1.png" alt="" />
            </div>
            <div className="container">
                <div className="widget-area">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-4">
                            <div className="widget widget-about footer-widget">
                                <div className="footer-logo">
                                    <Link href="/"><img src="/main-assets/img/logo.svg" alt="Altekmar" /></Link>
                                </div>
                                <p className="about-text">Integrated equipment, technical installations and construction under one coordinated standard.</p>
                                <h4 className="about-year">Serving the Dominican Republic</h4>
                            </div>
                        </div>
                        <div className="col-auto d-xxl-block d-none">
                            <div className="widget-divider"></div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Useful Links</h3>
                                <div className="menu-all-pages-container grid-style">
                                    <ul className="menu">
                                        <li><Link href="/about">About Altekmar</Link></li>
                                        <li><Link href="/service">Services</Link></li>
                                        <li><Link href="/project">Projects</Link></li>
                                        <li><Link href="/shop">Equipment & Products</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                    <ul className="menu">
                                        <li><Link href="/service-details">Elevators</Link></li>
                                        <li><Link href="/service-details">Power Systems</Link></li>
                                        <li><Link href="/service-details">Air Conditioning</Link></li>
                                        <li><Link href="/service-details">Security Systems</Link></li>
                                        <li><Link href="/service-details">General Contracting</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto d-xxl-block d-none">
                            <div className="widget-divider"></div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget widget-newsletter">
                                <h3 className="widget_title">Project Updates</h3>
                                <p className="footer-text">Receive updates about equipment, services and completed projects.</p>
                                <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
                                    <div className="form-group">
                                        <input className="form-control style-border3" type="email" placeholder="Email Address..." required />
                                    </div>
                                    <button type="submit" className="btn-with-icon style3">
                                        SUBMIT NOW
                                        <span className="btn-icon"><i className="ri-arrow-right-up-line"></i></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row gy-3 justify-content-center">
                        <div className="col-auto align-self-center">
                            <p className="copyright-text text-center">© 2026 <Link href="/">Altekmar</Link> | All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterThree;
