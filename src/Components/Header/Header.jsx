import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Header.scss';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about', icon: 'bi-person' },
    { label: 'Projects', href: '#projects', icon: 'bi-grid-3x3' },
    { label: 'Contact', href: '#contact', icon: 'bi-envelope' }
  ];

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      style={{ 
        backdropFilter: `blur(${headerBlur}px)`,
        WebkitBackdropFilter: `blur(${headerBlur}px)`
      }}
    >
      <div className="container">
        <motion.div 
          className="header__inner"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <motion.a 
            href="#top" 
            className="header__logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="logo__icon">
              <span className="logo__letter">M</span>
              <div className="logo__glow"></div>
            </div>
            <span className="logo__text">Muhammadabdulloh</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="header__nav desktop-nav">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="nav__link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
                <div className="link__underline"></div>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, x: 0, pointerEvents: 'auto' },
          closed: { opacity: 0, x: '100%', pointerEvents: 'none' }
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mobile-nav__content">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="mobile-nav__link"
              onClick={handleMenuClick}
              initial={{ opacity: 0, x: 50 }}
              animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="mobile-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </motion.header>
  );
}

export default Header;
