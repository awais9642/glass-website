
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/Br-Logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Brand */}
        <div className={styles.footerBrand}>
            <div className={styles.brandRow}>
                <img src={logo} alt="FN Logo" className={styles.footerLogo} />
          <div className={styles.logoText}>
                    <span className={styles.logoName}>Faizan Nadeem</span>
                    <span className={styles.logoSub}>Technical Services</span>
                  </div>
            </div>
          
          <p>Your trusted partner in high-quality glass and aluminium fabrication. Serving Dubai and all Emirates with precision and pride.</p>
          <div className={styles.socialRow}>
            <a href="https://wa.me/971508310029" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href="mailto:info@faizannadeemts.com" className={styles.socialBtn} aria-label="Email">📧</a>
            <a href="tel:+97143966833" className={styles.socialBtn} aria-label="Phone">📞</a>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.footerCol}>
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.footerCol}>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Office Glass Partition</Link></li>
            <li><Link to="/services">Glass Shop Front</Link></li>
            <li><Link to="/services">Shower Glass Partition</Link></li>
            <li><Link to="/services">Glass Partition & Doors</Link></li>
            <li><Link to="/services">Modern Glass Staircase Railings</Link></li>
            <li><Link to="/services">Outdoor Pergola Structure</Link></li>
            <li><Link to="/services">Aluminium & UPVC Doors Partition</Link></li>

          </ul>
        </div>

        {/* Contact */}
        <div className={styles.footerCol}>
          <h4>Contact</h4>
          <ul>
            <li><span>info@faizannadeemts.com</span></li>
            <li><span>+971 4 396 6833</span></li>
            <li><span>+971 50 831 0029</span></li>
            <li><span>Al Khabaisi - Deira - Dubai</span></li>
            <li>
              <a href="https://wa.me/971508310029" target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2024 Faizan Nadeem Technical Services LLC. All rights reserved.</p>
        <p>Behind FAB Bank, Al Khabeesi, Deira, Dubai UAE</p>
      </div>
    </footer>
  );
};

export default Footer;