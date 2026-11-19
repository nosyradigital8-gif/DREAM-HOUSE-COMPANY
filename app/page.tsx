import Image from "next/image";
import { ArrowUpRight, Check, Clock3, Hammer, MapPin, MessageCircle, Phone, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import MobileNav from "./components/mobile-nav";

const services = [
  { number: "01", title: "P.O.P Ceiling Design", text: "Plywood P.O.P ceiling design and installation with a clean, considered finish.", image: "/images/furniture/custom-cabinet.jpg", icon: Ruler },
  { number: "02", title: "Wall Tiling & Cladding", text: "Wall tiling, cladding and detail-led finishing for modern spaces.", image: "/images/tiling/wall-tiling.jpg", icon: Sparkles },
  { number: "03", title: "Floor Tiling & Finishing", text: "Floor tiling and all finishing work, shaped around the character of your project.", image: "/images/tiling/floor-tiling.jpg", icon: Hammer },
  { number: "04", title: "Custom Furniture", text: "TV units, bedroom furniture, kitchen cabinets and furniture made for your space.", image: "/images/furniture/kitchen-red.jpg", icon: Ruler },
  { number: "05", title: "Roofing Work", text: "Quality roofing sheets and residential roofing projects built for stronger homes.", image: "/images/roofing/residential-roofing.jpg", icon: ShieldCheck },
];

const projects = [
  { title: "TV Unit", category: "Interior & Furniture", image: "/images/furniture/tv-unit.jpg" },
  { title: "Kitchen Furniture", category: "Interior & Furniture", image: "/images/furniture/kitchen-red.jpg" },
  { title: "Custom Cabinet", category: "Interior & Furniture", image: "/images/furniture/custom-cabinet.jpg" },
  { title: "Wall Tiling", category: "Tiling & Cladding", image: "/images/tiling/wall-tiling.jpg" },
  { title: "Floor Tiling", category: "Tiling & Cladding", image: "/images/tiling/floor-tiling.jpg" },
  { title: "Roofing Sheets", category: "Roofing Work", image: "/images/roofing/roofing-sheets.jpg" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Dream House Company home">
            <Image src="/images/branding/dream-house-logo-transparent.png" alt="DHC logo" width={62} height={62} priority />
            <span><strong>DREAM HOUSE</strong><small>COMPANY</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a><a href="#services">Services</a><a href="#projects">Our Projects</a><a href="#contact">Contact</a>
            <a className="nav-cta" href="https://wa.me/233245373859">Get a Quote <ArrowUpRight size={16} /></a>
          </nav>
          <MobileNav />
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-lines" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Building · Renovating · Finishing to Perfection</p>
            <h1>We build spaces <em>that inspire.</em></h1>
            <p className="hero-text">From custom interiors and furniture to roofing and finishing, Dream House Company brings your vision to life with quality craftsmanship and attention to detail.</p>
            <div className="hero-actions"><a className="button button-gold" href="https://wa.me/233245373859">Request a Quote <ArrowUpRight size={18} /></a><a className="text-link" href="#projects">Explore our projects <span>↓</span></a></div>
            <div className="hero-proof"><div><strong>Ghana</strong><span>& beyond</span></div><div><strong>05</strong><span>core services</span></div><div><strong>01</strong><span>dedicated team</span></div></div>
          </div>
          <div className="hero-visual"><div className="hero-image-wrap"><Image src="/images/furniture/tv-unit.jpg" alt="Custom TV unit interior finishing project" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="hero-caption"><span>01 / Interior craft</span><span>Made with purpose</span></div><div className="gold-stamp">DHC<br /><span>CRAFT</span></div></div>
        </div>
      </section>

      <section className="intro section" id="about"><div className="container intro-grid"><div><p className="section-kicker">01 — The company</p><h2>Your vision.<br /><em>Our craftsmanship.</em></h2></div><div className="intro-copy"><p className="lead">DREAM HOUSE COMPANY is a construction and interior finishing company focused on making spaces feel considered, useful and beautifully complete.</p><p>We work across construction, renovation, custom furniture, roofing, tiling and finishing. Wherever your project is in Ghana or globally, our approach begins with the details that make a space feel like yours.</p><a className="arrow-link" href="#services">Discover what we do <ArrowUpRight size={18} /></a></div></div></section>

      <section className="services section-dark" id="services"><div className="container"><div className="section-head light"><div><p className="section-kicker">02 — What we do</p><h2>Crafted for the way<br /><em>you live.</em></h2></div><p>From the first surface to the final detail, our services bring structure, warmth and finish to your project.</p></div><div className="services-list">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.number}><div className="service-media"><Image src={service.image} alt={service.title} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="service-body"><div className="service-top"><span>{service.number}</span><Icon size={20} /></div><h3>{service.title}</h3><p>{service.text}</p></div></article>; })}</div></div></section>

      <section className="projects section" id="projects"><div className="container"><div className="section-head"><div><p className="section-kicker">03 — Selected work</p><h2>Real work.<br /><em>Real character.</em></h2></div><p>Explore a selection of interior, tiling and roofing work from the original company flyer.</p></div><div className="project-grid">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.title}><div className="project-image"><Image src={project.image} alt={`${project.title} by Dream House Company`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="project-meta"><span>{project.category}</span><h3>{project.title}</h3></div></article>)}</div></div></section>

      <section className="why section-light"><div className="container why-grid"><div><p className="section-kicker">04 — Why choose us</p><h2>The right team<br /><em>makes the difference.</em></h2><p className="why-intro">A great result is built on the people, materials and care behind it.</p></div><div className="benefits"><div><Check size={21} /><span><strong>Skilled craftsmen</strong><small>Hands-on attention at every stage.</small></span></div><div><Check size={21} /><span><strong>Quality materials</strong><small>Thoughtful materials for lasting finish.</small></span></div><div><Check size={21} /><span><strong>Timely delivery</strong><small>Clear progress toward your next step.</small></span></div></div></div></section>

      <section className="founder section"><div className="container founder-grid"><div className="founder-image"><Image src="/images/founder/isaac-toku-founder.jpg" alt="Isaac Toku, Founder and CEO of Dream House Company" fill sizes="(max-width: 700px) 100vw, 40vw" /></div><div className="founder-copy"><p className="section-kicker">05 — The founder</p><h2>Built on a belief<br />in <em>better work.</em></h2><p>Driven by a commitment to quality craftsmanship, Dream House Company focuses on building, renovating and finishing spaces to a high standard.</p><div className="founder-name"><strong>Isaac Toku</strong><span>Founder & CEO</span></div></div></div></section>

      <section className="contact section-dark" id="contact"><div className="container contact-grid"><div><p className="section-kicker light-kicker">06 — Let&apos;s talk</p><h2>Ready to transform<br /><em>your space?</em></h2><p>Let&apos;s discuss your next construction, renovation, roofing or interior finishing project.</p><div className="contact-actions"><a className="button button-gold" href="https://wa.me/233245373859"><MessageCircle size={18} /> WhatsApp Us</a><a className="button button-outline" href="tel:+233245373859"><Phone size={18} /> Call Now</a></div></div><div className="contact-details"><div><MapPin size={20} /><span><small>Location</small>Assin Foso Central, Ghana.</span></div><div><Phone size={20} /><span><small>WhatsApp / Call</small><a href="tel:+233245373859">0245373859</a></span></div><div><Clock3 size={20} /><span><small>Opening hours</small>Monday–Saturday, 8am–6pm.</span></div></div></div></section>

      <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Image src="/images/branding/dream-house-logo-full.png" alt="Dream House Company logo on white background" width={110} height={110} /><div><strong>DREAM HOUSE COMPANY</strong><p>Building · Renovating · Finishing to Perfection</p></div></div><div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Dream House Company. All rights reserved.</span><span>Assin Foso Central, Ghana · Global</span></div></div></footer>
    </main>
  );
}
