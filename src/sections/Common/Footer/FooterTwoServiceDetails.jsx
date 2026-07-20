"use client";

import Link from "next/link";

const FooterTwoServiceDetails = () => {
    return (
        <div>
            <footer className="footer-wrapper footer-layout1" style={{ backgroundImage: "url('/main-assets/img/bg/footer-bg1-1.png')" }}>
                <div className="container">
                    <div className="footer-top-1">
                        <div className="footer-logo">
                            <Link href="/"><img src="/main-assets/img/logo.svg" alt="Altekmar" /></Link>
                        </div>
                        <div className="subscribe-box">
                            <p className="subscribe-box_text">Receive updates about equipment, services and completed projects.</p>
                            <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
                                <input className="form-control" type="email" placeholder="Enter your email..." required />
                                <button type="submit" className="btn style2">SUBSCRIBE<i className="ri-arrow-right-up-line"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-3">
                                <div className="widget widget-about footer-widget">
                                    <h3 className="widget_title">About Altekmar</h3>
                                    <p className="about-text">Altekmar coordinates equipment, installation and construction for residential and commercial projects.</p>
                                    <h4 className="about-year">Serving the Dominican Republic</h4>
                                    <h5 className="about-subtitle">PROJECT CONSULTATIONS</h5>
                                    <p className="about-text"><span className="text-theme">Monday–Saturday:</span> By appointment</p>
                                </div>
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
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget widget-contact">
                                    <h3 className="widget_title">Service Area</h3>
                                    <p className="contact-text">Dominican Republic</p>
                                    <h3 className="widget_title">Email Address</h3>
                                    <p className="text-white footer-text">Start a project request</p>
                                    <p className="footer-text"><Link href="/contact">Use our contact form</Link></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Phone Number</h3>
                                    <p className="footer-text"><Link href="/contact">Request a call</Link></p>
                                    <h3 className="widget_title">Follow Us</h3>
                                    <div className="social-btn style2">
                                        <Link href="https://www.instagram.com/"><i className="ri-instagram-line"></i></Link>
                                        <Link href="https://www.facebook.com/"><i className="ri-facebook-fill"></i></Link>
                                        <Link href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-wrap">
                        <div className="row gy-3 justify-content-md-between justify-content-center">
                            <div className="col-auto align-self-center">
                                <p className="copyright-text text-center">© 2026 <Link href="/">Altekmar</Link> | All rights reserved</p>
                            </div>
                            <div className="col-auto">
                                <div className="footer-links">
                                    <Link href="/service">Services</Link>
                                    <Link href="/project">Projects</Link>
                                    <Link href="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterTwoServiceDetails;
