
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import Footer from '../../components/Footer/Footer';
import SectionTag from '../../components/SectionTag/SectionTag';
import infoImage from '../../assets/Info-Image.jpeg'


const missionCards = [
  { icon: '🎯', title: 'Our Mission', text: 'To deliver precision-engineered glass and aluminium solutions that elevate spaces and exceed client expectations — on time, every time, with zero compromise on quality.' },
  { icon: '🌟', title: 'Our Vision', text: 'To be the UAE\'s most trusted name in glass and aluminium fabrication, recognized for innovation, reliability, and craftsmanship in every project we deliver.' },
  { icon: '🤝', title: 'Our Promise', text: 'Every project is treated with the same care as if it were our own. We stand behind our work with comprehensive after-service support and maintenance.' },
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className={styles.aboutHero}>
        <div className={styles.heroContent}>
          <SectionTag label="About Us" />
          <h1 className={styles.heroTitle}>
            Who We <span className={styles.green}>Are</span>
          </h1>
          <div className={styles.gdiv} />
          <p>Dubai's trusted specialists in glass and aluminium fabrication — delivering excellence with every project.</p>
        </div>
      </section>

      {/* About Grid */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutGrid}>
          {/* Image Side */}
          <div className={styles.imgSide}>
            <img
              src={infoImage}
              alt="Faizan Nadeem Technical Services"
            />
          </div>
          {/* Text Side */}
          <div className={styles.aboutText}>
            <SectionTag label="Our Story" />
            <h2>
              Welcome to <span className={styles.green}>Faizan Nadeem</span><br />
              Technical Services
            </h2>
            <div className={styles.gdiv} />
            <p>Your trusted partner in high-quality glass and aluminum fabrication. We specialize in the design, fabrication, and installation of glass windows, panels, doors, and a wide range of custom aluminum solutions.</p>
            <p>With a focus on durability, precision, and modern design, our team is committed to delivering exceptional results for both residential and commercial projects. In addition to fabrication, we also offer professional repair, replacement, and maintenance services to ensure long-lasting performance and customer satisfaction.</p>
            <p>Based in the heart of Deira, Dubai, we have built a strong reputation across the UAE for reliability, craftsmanship, and attention to detail that truly sets us apart.</p>
            <div className={styles.btnRow}>
              <Link to="/services" className={styles.btnGreen}>Our Services</Link>
              <Link to="/contact" className={styles.btnOutline}>Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.missionSec}>
        <div className={styles.missionHead}>
          <SectionTag label="Our Values" center />
          <h2 className={styles.sh2}>
            Mission, Vision & <span className={styles.green}>Promise</span>
          </h2>
        </div>
        <div className={styles.mCards}>
          {missionCards.map((m) => (
            <div key={m.title} className={styles.mCard}>
              <div className={styles.mIco}>{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;