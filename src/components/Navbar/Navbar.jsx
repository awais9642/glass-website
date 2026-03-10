import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/Br-Logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="FN Logo" className={styles.logoImg} />
        <div className={styles.logoText}>
          <span className={styles.logoName}>Faizan Nadeem</span>
          <span className={styles.logoSub}>Technical Services</span>
        </div>
      </Link>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/contact" className={styles.navCta}>
        Free Quote
      </Link>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;