import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Mail, Sparkles, ArrowUp, Menu, X } from 'lucide-react';
import portraitWebp from '../photo.webp';
import portraitImg from '../photo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Tools', href: '#tools' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <motion.a
          className="logo"
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="logo-sparkle-icon">
            <Sparkles size={16} />
          </span>
          <span>KATRINA REGALADO</span>
        </motion.a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          className="nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GET IN TOUCH
        </motion.a>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-inner">
              <div className="mobile-menu-links">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="mobile-menu-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={14} className="mobile-link-arrow" />
                  </a>
                ))}
              </div>
              <div className="mobile-menu-footer">
                <a
                  href="#contact"
                  className="mobile-menu-cta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail size={15} />
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.65]);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 420);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section ref={heroRef} className="hero">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="status-pill">
            <span className="status-dot" />
            <span>Available for Remote Opportunities</span>
          </div>

          <span className="kicker">Professional Portfolio</span>
          <h1>Katrina<br />Regalado</h1>
          <h2>Virtual Assistant &nbsp;|&nbsp; Administrative Support</h2>
          <p>
            Detail-oriented and reliable professional with strengths in administrative
            support, customer communication, data handling, organization, and day-to-day coordination.
          </p>

          <div className="buttons">
            <motion.a
              className="btn primary"
              href="#skills"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>VIEW MY SKILLS</span>
              <ArrowRight size={15} />
            </motion.a>
            <motion.a
              className="btn"
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={15} />
              <span>CONTACT ME</span>
            </motion.a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>8+</strong>
              <span>Years Experience</span>
            </div>
            <div className="hero-stat">
              <strong>100%</strong>
              <span>Reliable &amp; Discreet</span>
            </div>
            <div className="hero-stat">
              <strong>Remote</strong>
              <span>Flexible Hours</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="photo-area"
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="photo-backdrop-aura" />
          <div className="photo-backdrop-ring" />
          <div className="photo-backdrop-ring-outer" />

          <span className="photo-sparkle-top" aria-hidden="true">✦</span>
          <span className="photo-sparkle-bottom" aria-hidden="true">✧</span>

          <picture className="photo-picture">
            <source srcSet={portraitWebp} type="image/webp" />
            <img
              className="photo photo-floating"
              src={portraitImg}
              alt="Katrina Regalado"
              width="400"
              height="570"
              fetchPriority="high"
              decoding="async"
            />
          </picture>

          <motion.div
            className="photo-floating-badge"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Sparkles size={13} className="text-rose-accent" />
            <span>Dedicated VA &amp; Admin</span>
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="floating-back-to-top"
            onClick={scrollToTop}
            type="button"
            title="Scroll to top"
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={17} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
