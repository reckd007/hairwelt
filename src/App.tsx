import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Droplets,
  Mail,
  Menu,
  Moon,
  Phone,
  Scissors,
  Sparkles,
  Sun,
  UserRound,
  Wind,
  X,
} from 'lucide-react';

/* ─── Images — hair, beauty, makeup, and bridal salon imagery ─────────── */
const heroImage      = 'https://images.pexels.com/photos/20309789/pexels-photo-20309789.jpeg?auto=compress&cs=tinysrgb&w=1800';
const interiorImage  = 'https://images.pexels.com/photos/7755557/pexels-photo-7755557.jpeg?auto=compress&cs=tinysrgb&w=1200';
const beardImage     = 'https://images.pexels.com/photos/3065096/pexels-photo-3065096.jpeg?auto=compress&cs=tinysrgb&w=900';
const colourImage    = 'https://images.pexels.com/photos/14615064/pexels-photo-14615064.jpeg?auto=compress&cs=tinysrgb&w=900';
const groomImage     = 'https://images.pexels.com/photos/10279714/pexels-photo-10279714.jpeg?auto=compress&cs=tinysrgb&w=900';
const artist1Image   = 'https://images.pexels.com/photos/33463732/pexels-photo-33463732.jpeg?auto=compress&cs=tinysrgb&w=900';
const artist2Image   = 'https://images.pexels.com/photos/11894622/pexels-photo-11894622.jpeg?auto=compress&cs=tinysrgb&w=900';
const artist3Image   = 'https://images.pexels.com/photos/7755226/pexels-photo-7755226.jpeg?auto=compress&cs=tinysrgb&w=900';

const fallingTools = [
  { type: 'scissors', left: '7%',  delay: '0s',   duration: '8s',  rotate: '-18deg' },
  { type: 'wind',     left: '19%', delay: '2.5s',  duration: '10s', rotate: '12deg'  },
  { type: 'scissors', left: '82%', delay: '1.4s',  duration: '9s',  rotate: '26deg'  },
  { type: 'wind',     left: '91%', delay: '4s',    duration: '11s', rotate: '-14deg' },
  { type: 'sparkle',  left: '14%', delay: '5s',    duration: '12s', rotate: '0deg'   },
  { type: 'sparkle',  left: '77%', delay: '6.4s',  duration: '10s', rotate: '0deg'   },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#home" aria-label="Jawed Habib Salon home">
      <img className="brand-logo" src="/JawedHabibNobg copy.png" alt="Jawed Habib Salon" />
    </a>
  );
}

function InstagramMark() {
  return (
    <svg className="instagram-mark" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1.15" fill="currentColor" />
    </svg>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('jawedhabib-theme');
    if (saved === 'light') setDarkMode(false);
  }, []);

  const toggleTheme = () => {
    setDarkMode((cur) => {
      window.localStorage.setItem('jawedhabib-theme', cur ? 'light' : 'dark');
      return !cur;
    });
  };

  return (
    <main className={darkMode ? 'app dark' : 'app light'}>

      {/* ── NAVBAR ── */}
      <header className="navbar">
        <div className="nav-inner">
          <Logo />
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#about"    onClick={() => setMenuOpen(false)}>The salon</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#artists"  onClick={() => setMenuOpen(false)}>Our artists</a>
            <a href="#journal"  onClick={() => setMenuOpen(false)}>Reviews</a>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle colour theme">
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="nav-book" href="tel:+919419195563">Book appointment <ArrowUpRight size={15} /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <img className="hero-image" src={heroImage} alt="Stylist creating a beautiful salon look" />
        <div className="hero-shade" />
        <div className="hero-tools" aria-hidden="true">
          {fallingTools.map((tool, i) => {
            const Icon = tool.type === 'scissors' ? Scissors : tool.type === 'wind' ? Wind : Sparkles;
            return (
              <Icon key={i} className="falling-tool"
                style={{ left: tool.left, animationDelay: tool.delay, animationDuration: tool.duration, transform: `rotate(${tool.rotate})` }}
                size={i % 2 ? 28 : 34} strokeWidth={1} />
            );
          })}
        </div>
        <div className="hero-content page-width">
          <p className="eyebrow hero-eyebrow"><span /> Rajbagh, Srinagar <span /></p>
          <p className="hero-kicker">Kashmir's Best Salon — Hair &amp; Beauty</p>
          <h1>Jawed Habib<br /><em>Salon</em></h1>
          <p className="hero-description">Award-winning hair styling, beauty, makeup and premium treatments — crafted to help every guest look and feel their best.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="tel:+919419195563">Book appointment <ArrowUpRight size={17} /></a>
            <a className="text-link light-link" href="https://wa.me/919419195563" target="_blank" rel="noreferrer">WhatsApp us <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="hero-bottom page-width">
          <span>Hair <i /> Beauty <i /> Bridal <i /> Makeup</span>
          <a href="#about">Discover the salon <ArrowDown size={16} /></a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="intro section page-width" id="about">
        <div className="intro-aside reveal"><span className="vertical-label">THE JAWED HABIB STANDARD</span><span className="vertical-line" /></div>
        <div className="intro-copy reveal">
          <p className="eyebrow">Beauty, perfected</p>
          <h2>Where style meets <em>confidence.</em></h2>
          <p className="large-copy">Jawed Habib Salon brings Kashmir's finest hair and beauty expertise to Rajbagh, Srinagar. From precision cuts and colour to bridal styling, makeup and premium hair treatments, every visit is tailored to your personal style.</p>
          <a className="text-link" href="#services">Explore our services <ArrowUpRight size={16} /></a>
        </div>
        <div className="intro-stamp reveal">
          <div className="stamp-ring">
            <Scissors size={27} strokeWidth={1} />
            <span>AWARD-WINNING</span>
            <strong>JAWED HABIB</strong>
            <span>BEAUTY SALON</span>
            <span>RAJBAGH · SRINAGAR</span>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section section" id="services">
        <div className="page-width">
          <div className="section-heading reveal">
            <div><p className="eyebrow">The menu</p><h2>Beauty, <em>beautifully done.</em></h2></div>
            <p>From everyday styling to bridal beauty, every service is delivered with care, creativity and expert technique.</p>
          </div>
          <div className="service-grid">
            <ServiceCard number="01" icon={<Scissors />}  title="Hair Styling"    detail="Cuts · Blowouts · Styling · Hair transformations"          image={interiorImage} />
            <ServiceCard number="02" icon={<UserRound />} title="Bridal Beauty"   detail="Bridal hair · Makeup · Draping · Wedding-day styling"      image={beardImage}    />
            <ServiceCard number="03" icon={<Droplets />}  title="Hair Colour"     detail="Colour · Highlights · Balayage · Glossing · Toning"       image={colourImage}   />
            <ServiceCard number="04" icon={<Wind />}      title="Makeup & Beauty"  detail="Party makeup · Skin prep · Lashes · Occasion beauty"       image={groomImage}    />
          </div>
          <div className="service-footer reveal">
            <span><Check size={15} /> Walk-ins welcome</span>
            <a className="text-link" href="tel:+919419195563">Find your style <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE FEATURE ── */}
      <section className="feature section page-width">
        <div className="feature-image reveal">
          <img src={interiorImage} alt="Stylist creating a polished salon look" />
          <div className="image-caption"><span>01 / 04</span><span>Inside Jawed Habib Salon</span></div>
        </div>
        <div className="feature-copy reveal">
          <p className="eyebrow">The experience</p>
          <h2>Beautiful details.<br /><em>Lasting impressions.</em></h2>
          <p>Professional products. Expert artists. A clean, welcoming atmosphere for every guest. Walk in, settle in and leave feeling polished, refreshed and confident.</p>
          <div className="feature-list">
            <span><strong>01</strong> One-on-one style consultation</span>
            <span><strong>02</strong> Premium hair and beauty products</span>
            <span><strong>03</strong> Bridal and occasion expertise</span>
          </div>
          <a className="button button-outline" href="tel:+919419195563">Plan your visit <ArrowUpRight size={16} /></a>
        </div>
      </section>

      {/* ── BARBERS ── */}
      <section className="artists section" id="artists">
        <div className="page-width">
          <div className="section-heading reveal">
            <div><p className="eyebrow">The artists</p><h2>Masters of <em>the craft.</em></h2></div>
            <p>Our artists are trained to the Jawed Habib standard — creativity, care and expert technique.</p>
          </div>
          <div className="artist-grid">
            <Artist name="Razia"  role="Bridal hair & makeup artist" image={artist1Image} />
            <Artist name="Sana"   role="Hair colour & styling artist" image={artist2Image} />
            <Artist name="Aaliya" role="Beauty & occasion artist"    image={artist3Image} />
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="quote-section section page-width" id="journal">
        <div className="quote-mark">"</div>
        <blockquote>Not just a service.<br /><em>A feeling you carry with you.</em></blockquote>
        <div className="rating"><span>★★★★★</span><strong>4.9 / 5</strong><small>What our guests say</small></div>
      </section>

      {/* ── VISIT CTA ── */}
      <section className="visit section page-width">
        <div className="visit-card reveal">
          <div className="visit-content">
            <p className="eyebrow">Your next appointment</p>
            <h2>Feel beautiful.<br /><em>Leave unforgettable.</em></h2>
            <p>Hair · Makeup · Bridal · Beauty · Colour</p>
            <a className="button button-gold" href="tel:+919419195563">Book appointment <CalendarDays size={16} /></a>
          </div>
          <div className="visit-image"><img src={heroImage} alt="Hair and beauty styling at Jawed Habib Salon" /></div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="page-width">
          <div className="footer-top">
            <Logo compact />
            <p>Kashmir's Best Salon<br />Hair · Beauty · Bridal · Rajbagh, Srinagar</p>
            <a className="footer-cta" href="https://wa.me/919419195563" target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={16} /></a>
          </div>
          <div className="footer-grid">
            <div>
              <span className="footer-label">Visit</span>
              <p>Post Office Lane, Near Gold Gym,<br />Rajbagh, Srinagar – 190008<br />Jammu &amp; Kashmir</p>
              <a href="https://maps.google.com/?q=Post+Office+Lane+Rajbagh+Srinagar" target="_blank" rel="noreferrer">
                Get directions <ArrowUpRight size={13} />
              </a>
            </div>
            <div>
              <span className="footer-label">Contact</span>
              <a href="tel:+919419195563"><Phone size={13} /> 94191 95563</a>
              <a href="tel:+917006276287"><Phone size={13} /> 70062 76287</a>
              <a href="mailto:Jawedhabibkashmir786@gmail.com"><Mail size={13} /> Jawedhabibkashmir786@gmail.com</a>
              <a className="instagram-link" href="https://www.instagram.com/jawed.habib.kashmir/" target="_blank" rel="noreferrer">
                <InstagramMark /> @jawed.habib.kashmir
              </a>
            </div>
            <div>
              <span className="footer-label">Hours</span>
              <p>Every day<br /><strong>10:00 AM – 9:00 PM</strong></p>
              <span className="open-dot"><i /> Open today</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© Jawed Habib Salon</span>
            <span>Rajbagh · Srinagar</span>
            <span className="footer-social">
              <a href="https://www.instagram.com/jawed.habib.kashmir/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramMark /></a>
            </span>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a className="floating-whatsapp" href="https://wa.me/919419195563" target="_blank" rel="noreferrer" aria-label="WhatsApp Jawed Habib Salon">
        <span>WhatsApp</span>
        <Phone size={20} />
      </a>

    </main>
  );
}

function ServiceCard({ number, icon, title, detail, image }: { number: string; icon: ReactNode; title: string; detail: string; image: string }) {
  return (
    <a className="service-card reveal" href="tel:+919419195563">
      <div className="service-image"><img src={image} alt="" /></div>
      <div className="service-overlay" />
      <div className="service-info">
        <div className="service-top"><span>{number}</span><span className="service-icon">{icon}</span></div>
        <h3>{title}</h3>
        <p>{detail}</p>
        <span className="circle-arrow"><ChevronRight size={18} /></span>
      </div>
    </a>
  );
}

function Artist({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="artist reveal">
      <div className="artist-image"><img src={image} alt={name} /></div>
      <div className="artist-meta">
        <div><h3>{name}</h3><p>{role}</p></div>
        <span><ArrowUpRight size={16} /></span>
      </div>
    </div>
  );
}

export default App;
