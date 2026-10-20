import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Droplets,
  Flower2,
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

const heroImage = 'https://images.pexels.com/photos/7518740/pexels-photo-7518740.jpeg?auto=compress&cs=tinysrgb&w=1800';
const interiorImage = 'https://images.pexels.com/photos/7518734/pexels-photo-7518734.jpeg?auto=compress&cs=tinysrgb&w=1200';
const portraitImage = 'https://images.pexels.com/photos/4625619/pexels-photo-4625619.jpeg?auto=compress&cs=tinysrgb&w=900';
const goldPortrait = 'https://images.pexels.com/photos/7518736/pexels-photo-7518736.jpeg?auto=compress&cs=tinysrgb&w=900';
const mirrorImage = 'https://images.pexels.com/photos/7518739/pexels-photo-7518739.jpeg?auto=compress&cs=tinysrgb&w=1200';

const fallingTools = [
  { type: 'scissors', left: '8%',  delay: '0s',   duration: '8s',  rotate: '-18deg' },
  { type: 'wind',     left: '20%', delay: '2.5s',  duration: '10s', rotate: '12deg'  },
  { type: 'scissors', left: '83%', delay: '1.4s',  duration: '9s',  rotate: '26deg'  },
  { type: 'wind',     left: '92%', delay: '4s',    duration: '11s', rotate: '-14deg' },
  { type: 'sparkle',  left: '15%', delay: '5s',    duration: '12s', rotate: '0deg'   },
  { type: 'sparkle',  left: '76%', delay: '6.4s',  duration: '10s', rotate: '0deg'   },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#home" aria-label="Hairbucks Salon home">
      <img className="brand-logo" src="/HiarbuckNobg.png" alt="Hairbucks Salon" />
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

function FacebookMark() {
  return (
    <svg className="facebook-mark" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13 21v-7h2.5l.5-3H13V9.5C13 8.67 13.33 8 14.5 8H16V5.3A18 18 0 0 0 13.7 5C11.5 5 10 6.4 10 9.2V11H7.5v3H10v7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('hairbucks-theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const toggleTheme = () => {
    setDarkMode((current) => {
      window.localStorage.setItem('hairbucks-theme', current ? 'light' : 'dark');
      return !current;
    });
  };

  return (
    <main className={darkMode ? 'app dark' : 'app light'}>
      <header className="navbar">
        <div className="nav-inner">
          <Logo />
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#about"   onClick={() => setMenuOpen(false)}>The salon</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#artists" onClick={() => setMenuOpen(false)}>Our artists</a>
            <a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle colour theme">
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="nav-book" href="tel:+919419774034">Book appointment <ArrowUpRight size={15} /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <img className="hero-image" src={heroImage} alt="Salon styling session at Hairbucks" />
        <div className="hero-shade" />
        <div className="hero-tools" aria-hidden="true">
          {fallingTools.map((tool, index) => {
            const ToolIcon = tool.type === 'scissors' ? Scissors : tool.type === 'wind' ? Wind : Sparkles;
            return (
              <ToolIcon
                key={index}
                className="falling-tool"
                style={{ left: tool.left, animationDelay: tool.delay, animationDuration: tool.duration, transform: `rotate(${tool.rotate})` }}
                size={index % 2 ? 28 : 34}
                strokeWidth={1}
              />
            );
          })}
        </div>
        <div className="hero-content page-width">
          <p className="eyebrow hero-eyebrow"><span /> Batamaloo, Srinagar <span /></p>
          <p className="hero-kicker">Premium Hair &amp; Grooming</p>
          <h1>Hairbucks<br /><em>Salon</em></h1>
          <p className="hero-description">Look sharp. Feel confident. Expert cuts, colours and grooming tailored for every style and occasion.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="tel:+919419774034">Book appointment <ArrowUpRight size={17} /></a>
            <a className="text-link light-link" href="https://wa.me/919419774034" target="_blank" rel="noreferrer">WhatsApp us <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="hero-bottom page-width">
          <span>Haircuts <i /> Colour <i /> Beard <i /> Styling</span>
          <a href="#about">Discover the salon <ArrowDown size={16} /></a>
        </div>
      </section>

      <section className="intro section page-width" id="about">
        <div className="intro-aside reveal"><span className="vertical-label">THE HAIRBUCKS STANDARD</span><span className="vertical-line" /></div>
        <div className="intro-copy reveal">
          <p className="eyebrow">A refined ritual</p>
          <h2>Where every detail makes <em>the difference.</em></h2>
          <p className="large-copy">Modern luxury, with a human touch. Hairbucks Salon is located on New Court Road, MominAbad Batamaloo, Srinagar — a space for considered transformations, attentive service and the details that make you feel entirely yourself.</p>
          <a className="text-link" href="#services">Explore our services <ArrowUpRight size={16} /></a>
        </div>
        <div className="intro-stamp reveal">
          <div className="stamp-ring">
            <Scissors size={27} strokeWidth={1} />
            <span>EST.</span>
            <strong>HAIRBUCKS</strong>
            <span>SALON</span>
            <span>BATAMALOO · SRINAGAR</span>
          </div>
        </div>
      </section>

      <section className="services-section section" id="services">
        <div className="page-width">
          <div className="section-heading reveal">
            <div><p className="eyebrow">The menu</p><h2>Expertise, <em>beautifully</em> delivered.</h2></div>
            <p>From a signature cut to a complete style reset, every appointment is tailored to you.</p>
          </div>
          <div className="service-grid">
            <ServiceCard number="01" icon={<Scissors />}   title="Haircuts"    detail="Classic cuts · Fades · Texture · Styling"              image={portraitImage} />
            <ServiceCard number="02" icon={<Droplets />}   title="Hair Colour" detail="Colour · Highlights · Toning · Modern looks"           image={goldPortrait}  />
            <ServiceCard number="03" icon={<Flower2 />}    title="Beard Craft" detail="Beard trims · Sculpting · Shaping · Hot towel care"    image={interiorImage} />
            <ServiceCard number="04" icon={<UserRound />}  title="Grooming"    detail="A complete grooming reset for your sharpest self."     image={mirrorImage}   />
          </div>
          <div className="service-footer reveal">
            <span><Check size={15} /> Walk-ins welcome</span>
            <a className="text-link" href="tel:+919419774034">Find your style <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="feature section page-width">
        <div className="feature-image reveal">
          <img src={interiorImage} alt="Inside Hairbucks Salon" />
          <div className="image-caption"><span>01 / 04</span><span>Inside Hairbucks</span></div>
        </div>
        <div className="feature-copy reveal">
          <p className="eyebrow">The experience</p>
          <h2>Luxury lives in the <em>details.</em></h2>
          <p>Clean equipment. Polite staff. A quietly luxurious atmosphere. Our salon is designed to let you slow down, settle in and leave feeling renewed.</p>
          <div className="feature-list">
            <span><strong>01</strong> Personalised consultation</span>
            <span><strong>02</strong> Premium products</span>
            <span><strong>03</strong> Care beyond the chair</span>
          </div>
          <a className="button button-outline" href="tel:+919419774034">Plan your visit <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="artists section" id="artists">
        <div className="page-width">
          <div className="section-heading reveal">
            <div><p className="eyebrow">The artists</p><h2>Hands with <em>instinct.</em></h2></div>
            <p>Meet the people behind the Hairbucks standard.</p>
          </div>
          <div className="artist-grid">
            <Artist name="Ms. Razia"      role="Grooming artist"  image={goldPortrait}  />
            <Artist name="Mr. Rashid Ali" role="Style & grooming" image={portraitImage} />
            <Artist name="Salman"         role="Hair artist"      image={mirrorImage}   />
          </div>
        </div>
      </section>

      <section className="quote-section section page-width" id="journal">
        <div className="quote-mark">"</div>
        <blockquote>It is not just a service.<br /><em>It is how you feel when you leave.</em></blockquote>
        <div className="rating"><span>★★★★★</span><strong>4.9 / 5</strong><small>What our guests say</small></div>
      </section>

      <section className="visit section page-width">
        <div className="visit-card reveal">
          <div className="visit-content">
            <p className="eyebrow">Your next appointment</p>
            <h2>Make an entrance.<br /><em>Leave a little lighter.</em></h2>
            <p>Hair · Colour · Beard · Grooming</p>
            <a className="button button-gold" href="tel:+919419774034">Book appointment <CalendarDays size={16} /></a>
          </div>
          <div className="visit-image"><img src={heroImage} alt="Hair styling at Hairbucks Salon" /></div>
        </div>
      </section>

      <footer className="footer">
        <div className="page-width">
          <div className="footer-top">
            <Logo compact />
            <p>Premium Hair &amp; Grooming<br />Batamaloo · Srinagar</p>
            <a className="footer-cta" href="https://wa.me/919419774034" target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={16} /></a>
          </div>
          <div className="footer-grid">
            <div>
              <span className="footer-label">Visit</span>
              <p>New Court Road, MominAbad Batamaloo,<br />Srinagar, Jammu &amp; Kashmir</p>
              <a href="https://maps.google.com/?q=New+Court+Road+MominAbad+Batamaloo+Srinagar" target="_blank" rel="noreferrer">
                Get directions <ArrowUpRight size={13} />
              </a>
            </div>
            <div>
              <span className="footer-label">Contact</span>
              <a href="tel:+919419774034"><Phone size={13} /> 094197 74034</a>
              <a href="mailto:contact.hairbucks@gmail.com"><Mail size={13} /> contact.hairbucks@gmail.com</a>
              <a className="instagram-link" href="https://www.instagram.com/hairbucks.salon" target="_blank" rel="noreferrer">
                <InstagramMark /> @hairbucks.salon
              </a>
              <a className="facebook-link" href="https://www.facebook.com/p/hairbuckssalon-61561866850318/" target="_blank" rel="noreferrer">
                <FacebookMark /> Hairbucks Salon
              </a>
            </div>
            <div>
              <span className="footer-label">Hours</span>
              <p>Every day<br /><strong>9:00 AM – 10:00 PM</strong></p>
              <span className="open-dot"><i /> Open today</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© Hairbucks Salon</span>
            <span>Batamaloo · Srinagar</span>
            <span className="footer-social">
              <a href="https://www.instagram.com/hairbucks.salon" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramMark /></a>
              <a href="https://www.facebook.com/p/hairbuckssalon-61561866850318/" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookMark /></a>
            </span>
          </div>
        </div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/919419774034" target="_blank" rel="noreferrer" aria-label="WhatsApp Hairbucks Salon">
        <span>WhatsApp</span>
        <Phone size={20} />
      </a>
    </main>
  );
}

function ServiceCard({ number, icon, title, detail, image }: { number: string; icon: ReactNode; title: string; detail: string; image: string }) {
  return (
    <a className="service-card reveal" href="tel:+919419774034">
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
