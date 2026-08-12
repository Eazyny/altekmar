import About from "~/sections/Home-2/About";
import Blog from "~/sections/Home-2/Blog";
import Client from "~/sections/Home-2/Client";
import Contact from "~/sections/Home-2/Contact";
import Counter from "~/sections/Home-2/Counter";
import FAQ from "~/sections/Home-2/FAQ";
import Hero from "~/sections/Home-2/Hero";
import Portfolio from "~/sections/Home-2/Portfolio";
import Pricing from "~/sections/Home-2/Pricing";
import Process from "~/sections/Home-2/Process";
import Service from "~/sections/Home-2/Service";
import Testimonial from "~/sections/Home-2/Testimonial";
import Video from "~/sections/Home-2/Video";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function HomeTwo() {
  return (
    <div className="altekmar-home-page" style={{ overflow: 'hidden' }}>
      <HeaderFour />
      <section className="altekmar-snap-section altekmar-hero-shell" data-home-section="hero">
        <Hero />
      </section>
      <section className="altekmar-snap-section" data-home-section="about">
        <About />
      </section>
      <section className="altekmar-snap-section" data-home-section="services">
        <Service />
      </section>
      <section className="altekmar-snap-section" data-home-section="process">
        <Process />
      </section>
      <section className="altekmar-snap-section" data-home-section="video">
        <Video />
      </section>
      <section className="altekmar-snap-section" data-home-section="counter">
        <Counter />
      </section>
      <section className="altekmar-snap-section" data-home-section="portfolio">
        <Portfolio />
      </section>
      <section className="altekmar-snap-section" data-home-section="testimonial">
        <Testimonial />
      </section>
      <section className="altekmar-snap-section" data-home-section="pricing">
        <Pricing />
      </section>
      <section className="altekmar-snap-section" data-home-section="faq">
        <FAQ />
      </section>
      <section className="altekmar-snap-section" data-home-section="clients">
        <Client />
      </section>
      <section className="altekmar-snap-section" data-home-section="insights">
        <Blog />
      </section>
      <section className="altekmar-snap-section" data-home-section="contact">
        <Contact />
      </section>
      <FooterThree />
      <Scroll />
    </div>
  );
}
