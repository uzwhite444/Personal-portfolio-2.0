import React from 'react';
import { motion } from 'framer-motion';
import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: 'bi-github', url: 'https://github.com/uzwhite444', label: 'GitHub' },
    { icon: 'bi-discord', url: 'https://discord.com/', label: 'Discord' },
    { icon: 'bi-envelope', url: 'mailto:nuuuu391@gmail.com', label: 'Email' }
  ];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="footer__content">
          {/* Left side - Logo & Description */}
          <div className="footer__brand">
            <motion.a 
              href="#top" 
              className="footer__logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="logo__icon">
                <span>M</span>
              </div>
              <span className="logo__text">Muhammadabdulloh</span>
            </motion.a>
            
            <p className="footer__description">
              Frontend Developer & Web Designer crafting exceptional digital experiences.
            </p>
            
            <div className="footer__email">
              <a href="mailto:nuuuu391@gmail.com">nuuuu391@gmail.com</a>
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="footer__nav">
            <h4 className="footer__nav-title">Navigation</h4>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side - Social Links */}
          <div className="footer__social">
            <h4 className="footer__social-title">Connect</h4>
            <div className="social__links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="social__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="footer__bottom">
          <div className="footer__divider"></div>
          <div className="footer__copyright">
            <p>© {currentYear} Muhammadabdulloh. All rights reserved.</p>
            <p className="footer__credit">
              Designed & Built with <span className="heart">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
