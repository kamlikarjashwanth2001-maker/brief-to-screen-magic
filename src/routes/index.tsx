import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  BatteryCharging,
  BellRing,
  Check,
  ChevronDown,
  CircleDot,
  CloudOff,
  Compass,
  Cpu,
  Gauge,
  Leaf,
  LockKeyhole,
  Menu,
  Navigation,
  ShieldCheck,
  Snowflake,
  Sun,
  Thermometer,
  Truck,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTruck from "@/assets/truck-hero.jpg";
import insightColdChain from "@/assets/insight-coldchain.jpg";
import insightCharging from "@/assets/insight-charging.jpg";
import insightDriver from "@/assets/insight-driver.jpg";

const honours = { name: "", body: "", year: "" };
const hasHonours = Object.values(honours).some((value) => value.trim().length > 0);

const offerings = [
  { icon: Snowflake, title: "Frozen zone", body: "Dedicated frozen-cargo monitoring, with a target set point of −18°C." },
  { icon: Thermometer, title: "Chilled zone", body: "A separate chilled compartment with a target range of 0–4°C." },
  { icon: ShieldCheck, title: "Cool & medical zone", body: "Independent monitoring for a 4–8°C target range and sensitive cargo." },
  { icon: Gauge, title: "Driver behaviour scoring", body: "Understand driving events and coaching opportunities across your fleet." },
  { icon: BatteryCharging, title: "Charging-misuse detection", body: "Bring charging activity and vehicle utilisation into one view." },
  { icon: LockKeyhole, title: "Immobiliser & e-lock", body: "Add configurable vehicle access and cargo security controls." },
];

const insights = [
  { image: insightColdChain, alt: "Worker handling fresh produce beside an open refrigerated truck", category: "Cold chain", title: "Cold-chain compliance, explained" },
  { image: insightCharging, alt: "Electric refrigerated truck connected to a depot charging station", category: "Fleet intelligence", title: "How charging analytics helps flag misuse" },
  { image: insightDriver, alt: "Professional driver focused on the road from a truck cab", category: "Safer journeys", title: "Driver behaviour scoring for safer fleets" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nouveau Chargé | Electric Cold-Chain Trucks & Fleet Intelligence" },
      { name: "description", content: "Meet Nouveau Chargé: multi-zone electric refrigerated trucks and AI fleet intelligence for India's temperature-sensitive supply chains." },
      { property: "og:title", content: "Nouveau Chargé | Electric Cold-Chain Trucks & Fleet Intelligence" },
      { property: "og:description", content: "Multi-zone electric refrigerated trucks and AI fleet intelligence for temperature-sensitive cargo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Nouveau Chargé",
        description: "Indian electric cold-chain trucks and AI fleet-intelligence solutions.",
        email: "[EMAIL PLACEHOLDER]",
        telephone: "[PHONE PLACEHOLDER]",
      }),
    }],
  }),
  component: HomePage,
});

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a aria-label="Nouveau Chargé home" className={`wordmark${footer ? " footer-wordmark" : ""}`} href="#home">
      <span className="brand-symbol" aria-hidden="true"><Leaf size={19} strokeWidth={2.2} /></span>
      <span>
        <span className="wordmark-name">Nouveau <span>Chargé</span></span>
        {footer ? <span className="logo-note">Logo mark placeholder</span> : null}
      </span>
    </a>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) {
      setNewsletterMessage("Thanks for your interest. Newsletter sign-up is ready to connect.");
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="site-shell">
      <section className="hero page-gutter" id="home" aria-labelledby="hero-title">
        <img className="hero-photo" src={heroTruck} alt="Electric refrigerated truck with rooftop solar panels on an Indian road" width={1808} height={1200} fetchPriority="high" />
        <div className="hero-nav-wrap">
          <nav className="nav-shell" aria-label="Main navigation">
            <Brand />
            <div className={`nav-links${menuOpen ? " is-open" : ""}`} id="primary-navigation">
              <a href="#home" onClick={closeMenu}>Home</a>
              <a href="#trucks" onClick={closeMenu}>Trucks</a>
              <a href="#platform" onClick={closeMenu}>AI platform</a>
              <a href="#compliance" onClick={closeMenu}>Compliance</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
            <div className="nav-quote">
              <Button asChild variant="brand" size="pill" className="site-button"><a href="#contact">Get a quote</a></Button>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="mobile-menu-trigger"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >{menuOpen ? <X /> : <Menu />}</Button>
          </nav>
        </div>
        <div className="hero-copy">
          <div className="hero-eyebrow"><span /> Electric cold chain · AI fleet intelligence</div>
          <h1 className="hero-title" id="hero-title">Cold chain that runs on electrons and <em>intelligence.</em></h1>
          <p className="hero-description">22-ft EV trucks with three independent temperature zones, solar-assisted backup and an AI command centre for your whole fleet.</p>
          <div className="hero-actions">
            <Button asChild variant="brand" size="pill" className="site-button"><a href="#contact">Request a quote <ArrowRight /></a></Button>
            <Button asChild variant="heroOutline" size="pill" className="site-button"><a href="#trucks">Explore the truck <ArrowDownRight /></a></Button>
          </div>
        </div>
        <p className="hero-caption">Truck imagery is illustrative.</p>
      </section>

      <section className="feature-rail reveal" aria-label="Fleet highlights">
        <div className="feature-item"><span className="feature-icon"><Thermometer size={20} /></span><div><strong>3 temperature zones</strong><span>Configured for mixed cargo</span></div></div>
        <div className="feature-item"><span className="feature-icon"><CloudOff size={20} /></span><div><strong>Works offline</strong><span>Local logging when coverage drops</span></div></div>
        <div className="feature-item"><span className="feature-icon"><Compass size={20} /></span><div><strong>AI fleet tracking</strong><span>One view across every journey</span></div></div>
      </section>

      <section className="section-space page-gutter" id="trucks">
        <div className="about-grid">
          <div className="about-photo-wrap reveal">
            <img className="about-photo" src={heroTruck} alt="Illustrative electric cold-chain truck with rooftop solar panels" width={1808} height={1200} loading="lazy" />
            <span className="photo-tag">Illustrative vehicle image</span>
          </div>
          <div className="about-copy reveal" id="about">
            <span className="section-kicker">Built around the cargo</span>
            <h2 className="section-title">Reliable cold chain for every kind of cargo</h2>
            <p className="section-lead">A purpose-built electric platform that brings controlled temperatures, practical power backup and fleet visibility together.</p>
            <div className="stats-grid" aria-label="Vehicle and platform targets">
              <Stat value="3" label="independent temperature zones" />
              <Stat value="2 kWp" label="solar-assisted roof target" target />
              <Stat value="5–10 sec" label="local logging interval target" target />
              <Stat value="24 months" label="data retention target" target />
            </div>
            <p className="payload-note">Payload: up to 3-5 tonnes, subject to configuration.</p>
          </div>
        </div>
      </section>

      <section className="offer-section section-space" id="compliance">
        <div className="page-gutter">
          <div className="section-heading-row reveal">
            <div><span className="section-kicker">One connected fleet</span><h2 className="section-title">A smarter way to move sensitive cargo</h2></div>
            <p className="section-lead">From independent temperature zones to access controls, bring everyday fleet operations into one clear picture.</p>
          </div>
          <div className="offering-grid">
            {offerings.map(({ icon: Icon, title, body }) => (
              <article className="offering-card reveal" key={title}>
                <span className="offering-icon"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-gutter section-space" aria-label="Build the cold chain of tomorrow">
        <div className="callout reveal">
          <img className="callout-photo" src={heroTruck} alt="Electric refrigerated truck ready for a cold-chain journey" width={1808} height={1200} loading="lazy" />
          <div className="callout-copy"><span className="section-kicker">Made for what's next</span><h2>Build the cold chain of <em>tomorrow.</em></h2><p>Pair an electric refrigerated truck with a live view of the fleet behind it.</p><Button asChild variant="brand" size="pill" className="site-button"><a href="#contact">Talk to our team <ArrowRight /></a></Button></div>
        </div>
      </section>

      <section className="section-space page-gutter" id="founders">
        <div className="reveal"><span className="section-kicker">Meet the founders</span><h2 className="section-title">Engineering a better way to deliver</h2><p className="section-lead">Healthcare, connected devices and applied intelligence come together in the founding team.</p></div>
        <div className="founder-grid">
          <article className="founder-card reveal"><div className="founder-avatar" aria-hidden="true">SA</div><div><h3>Dr. Simi Agarwal</h3><p>Gold-medalist surgeon and AI innovator</p><span className="founder-role">Co-founder</span></div></article>
          <article className="founder-card reveal"><div className="founder-avatar" aria-hidden="true">AG</div><div><h3>Er. Akhil Gabbeta</h3><p>IoT and AI expert</p><span className="founder-role">Co-founder</span></div></article>
        </div>
        {hasHonours ? <aside className="honours-card"><p><strong>{honours.name}</strong> · {honours.body} · {honours.year}</p></aside> : null}
      </section>

      <section className="app-section section-space" id="platform">
        <div className="page-gutter app-grid">
          <FleetPhone />
          <div className="app-copy reveal"><span className="section-kicker">Your command centre</span><h2 className="section-title">Track every truck from your pocket</h2><p className="section-lead">A practical fleet view for dispatch teams, operators and people responsible for the cargo.</p>
            <div className="command-list">
              <CommandItem icon={Navigation}>Live vehicle locations and trip history in one place</CommandItem>
              <CommandItem icon={BellRing}>Temperature and route alerts across all three zones</CommandItem>
              <CommandItem icon={Cpu}>Offline-first data, synced when connectivity returns</CommandItem>
              <CommandItem icon={Zap}>Charging activity, driver events and fleet summaries</CommandItem>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space page-gutter" id="insights">
        <div className="section-heading-row reveal"><div><span className="section-kicker">Ideas in motion</span><h2 className="section-title">Notes from the cold chain</h2></div><p className="section-lead">Practical perspectives on cargo care, charging and safer fleet operations.</p></div>
        <div className="insight-grid">
          {insights.map((item) => <article className="insight-card reveal" key={item.title}><img className="insight-photo" src={item.image} alt={item.alt} width={1200} height={912} loading="lazy" /><div className="insight-copy"><span className="insight-category">{item.category}</span><h3>{item.title}</h3><a className="insight-link" href="#contact">Explore topic <ArrowRight size={15} /></a></div></article>)}
        </div>
      </section>

      <aside className="partner-line"><div className="page-gutter"><p>Proposed technical collaboration: IIT Ropar <span>(subject to formal MoU; no institutional endorsement implied)</span></p></div></aside>

      <section className="newsletter" aria-labelledby="newsletter-title">
        <div className="page-gutter newsletter-inner">
          <div><h2 id="newsletter-title">A clearer view of the cold chain.</h2><p>Occasional notes on electric fleet operations and cargo care.</p></div>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input className="newsletter-input" id="newsletter-email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <Button className="site-button newsletter-button" variant="darkOutline" type="submit">Stay in touch <ArrowRight /></Button>
            {newsletterMessage ? <p className="newsletter-message" role="status">{newsletterMessage}</p> : null}
          </form>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="page-gutter">
          <div className="footer-grid">
            <div className="footer-brand"><Brand footer /><p>Electric cold-chain vehicles and fleet intelligence for temperature-sensitive journeys.</p></div>
            <FooterColumn title="Explore"><a href="#home">Home</a><a href="#trucks">Trucks</a><a href="#platform">AI platform</a><a href="#founders">About us</a></FooterColumn>
            <FooterColumn title="Solutions"><a href="#compliance">Temperature zones</a><a href="#compliance">Fleet analytics</a><a href="#compliance">Cargo security</a><a href="#insights">Insights</a></FooterColumn>
            <div className="footer-column"><h3>Get in touch</h3><div className="footer-links"><p>Talk with us about your cold-chain needs.</p><span className="footer-placeholder">[EMAIL PLACEHOLDER]</span><span className="footer-placeholder">[PHONE PLACEHOLDER]</span></div></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Nouveau Chargé. All rights reserved.</span><span>Vehicle and platform figures are targets where indicated; final specification may vary.</span></div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ value, label, target = false }: { value: string; label: string; target?: boolean }) {
  return <div className="stat-card">{target ? <span className="stat-target">Target</span> : null}<strong className="stat-value">{value}</strong><span className="stat-label">{label}</span></div>;
}

function CommandItem({ children, icon: Icon }: { children: string; icon: typeof Navigation }) {
  return <div className="command-item"><Icon size={19} aria-hidden="true" /><span>{children}</span></div>;
}

function FleetPhone() {
  return (
    <div className="phone-stage reveal" aria-label="Illustrative fleet dashboard preview">
      <div className="phone-frame">
        <div className="phone-island" />
        <div className="phone-header"><span>Fleet overview</span><span>● 4 online</span></div>
        <div className="map-preview" aria-label="Illustrative fleet map">
          <span className="map-road map-road-one" /><span className="map-road map-road-two" /><span className="map-road map-road-three" />
          <span className="map-pin map-pin-one"><Truck size={15} /></span><span className="map-pin map-pin-two"><Truck size={15} /></span>
          <span className="map-caption">LIVE VIEW · ILLUSTRATIVE</span>
        </div>
        <div className="phone-alert"><span className="phone-alert-icon"><CircleDot size={18} /></span><div><strong>Zone 2 temperature</strong><span>4.2°C · within target range</span></div><Check size={16} /></div>
        <div className="phone-list"><div><span>NC-204 · On route</span><span>−18°C</span></div><div><span>NC-118 · Charging</span><span>3.2°C</span></div></div>
        <div className="preview-label">Illustrative dashboard preview</div>
      </div>
    </div>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="footer-column"><h3>{title}</h3><div className="footer-links">{children}</div></div>;
}
