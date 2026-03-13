
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import SectionTag from '../../components/SectionTag/SectionTag';
import { Briefcase, Award, MapPin, ShieldCheck,Target, Settings, RefreshCw, MapPinned } from 'lucide-react';
import heroImage from "../../assets/Glass-partiton-office-10.jpeg";
import useCountUp from '../../hooks/useCountUp';
import shopFront from '../../assets/Glass-Shop-Front.jpeg'
import glassOfficePartition from '../../assets/About-Page-2.jpeg'
import showerGlassPartition from "../../assets/shower-glass-partition.jpeg"
import glassPartitionDoors from '../../assets/Glass-Partition-Doors.jpeg'
import outdoorPergolaStructure from '../../assets/Outdoor-Pergola-Structure.jpeg'
import aluminiumUPVCDoorsPartition from '../../assets/Aluminium-UPVC.png'
import glassStaircaseFencing from '../../assets/Glass-Staircase-Fencing.jpeg'
import whyChooseUsImage from '../../assets/Home-Image.jpeg'



const servicesList = [
  {
    id: '01',
    title: 'Office Glass Partition',
    subtitle: 'Glass Partitions',
    image: glassOfficePartition,
    bg: 'white',
    reverse: false,
    desc1: 'Create open, light-filled workspaces with our premium office glass partition systems in Dubai. Ideal for corporate offices, co-working spaces, and commercial fit-outs — our partitions maximize natural light while maintaining acoustic privacy.',
    desc2: 'We supply and install frameless glass partitions, aluminium-framed systems, and glass office dividers across Dubai and the UAE. All glass is toughened and tempered to meet UAE safety standards, with same-week installation available.',
    features: [
      'Frameless & framed glass office partitions',
      'Floor-to-ceiling & demountable systems',
      'Acoustic & soundproof glass options',
      'Frosted, tinted, clear & smart glass',
      'Custom sizing & premium hardware',
      'UAE building code compliant',
    ],
  },
  {
    id: '02',
    title: 'Glass Shop Front',
    subtitle: 'Shop Front Glass',
    image: shopFront,
    bg: 'offwhite',
    reverse: true,
    desc1: 'Make a powerful first impression with a modern glass shop front that attracts customers and elevates your brand. We design and install commercial glass storefronts for retail shops, showrooms, restaurants, and business entrances across Dubai.',
    desc2: 'Our shop front glass solutions use high-strength tempered safety glass with aluminium or frameless systems — built to withstand Dubai\'s climate while keeping your interior cool, visible, and secure. Fully customizable with automatic sliding doors.',
    features: [
      'Frameless & aluminium shop front systems',
      'Automatic & manual sliding glass doors',
      'Toughened safety & security glass',
      'UV-resistant & heat-reflective glass',
      'Brand-matched powder coat finishes',
      'Retail, restaurant & showroom fit-outs',
    ],
  },
  {
    id: '03',
    title: 'Shower Glass Partition',
    subtitle: 'Shower Enclosures',
    image: showerGlassPartition,
    bg: 'white',
    reverse: false,
    desc1: 'Upgrade your bathroom with a sleek, frameless shower glass partition that combines luxury aesthetics with practical waterproofing. Our shower enclosures are a top choice for villas, hotels, and apartments in Dubai seeking a modern, spa-like finish.',
    desc2: 'We fabricate and install frameless shower screens, semi-frameless enclosures, and fixed shower panels using 8mm–12mm toughened safety glass. All fittings are corrosion-resistant and certified for wet area use — fitted perfectly to your bathroom dimensions.',
    features: [
      'Frameless & semi-frameless shower screens',
      '8mm & 12mm toughened safety glass',
      'Walk-in, pivot & sliding door options',
      'Anti-limescale easy-clean coating',
      'Corrosion-resistant chrome & matte fittings',
      'Custom fit for any bathroom layout',
    ],
  },
  {
    id: '04',
    title: 'Glass Partition & Doors',
    subtitle: 'Interior Glass Doors',
    image: glassPartitionDoors,
    bg: 'white',
    reverse: true,
    desc1: 'Divide and define interior spaces beautifully with our glass partition walls and glass doors for homes and commercial properties. Perfect for living rooms, home offices, hotel lobbies, and retail interiors — adding elegance without blocking light.',
    desc2: 'From sliding glass room dividers to full-height glass walls with built-in doors, we handle design, fabrication, and installation across the UAE. Choose from clear, frosted, patterned, or digitally printed glass to match any interior style.',
    features: [
      'Sliding, pivot & hinged glass doors',
      'Full-height glass partition walls',
      'Frosted, patterned & printed glass',
      'Aluminium, stainless steel & frameless',
      'Residential & commercial interiors',
      'Made-to-measure for any space',
    ],
  },
  {
    id: '05',
    title: 'Glass Staircase Railing',
    subtitle: 'Glass Railings',
    image: glassStaircaseFencing,
    bg: 'white',
    reverse: false,
    desc1: 'Transform your staircase into a striking architectural feature with frameless glass railings. Our glass balustrades and staircase railings are in high demand for Dubai villas, duplexes, and luxury apartments — delivering safety with sophisticated style.',
    desc2: 'We install frameless glass balustrades, stainless steel post systems, and top-rail glass fencing for both indoor and outdoor staircases. All glass is 12mm–15mm toughened and laminated, engineered to meet Dubai Municipality safety codes.',
    features: [
      'Frameless & post-mounted glass balustrades',
      '12mm–15mm laminated toughened glass',
      'Indoor & outdoor staircase railings',
      'Stainless steel, chrome & black hardware',
      'Pool fencing & terrace glass barriers',
      'Dubai Municipality compliant',
    ],
  },
  {
    id: '06',
    title: 'Outdoor Pergola Structure',
    subtitle: 'Aluminium Pergolas',
    image: outdoorPergolaStructure,
    bg: 'white',
    reverse: true,
    desc1: 'Extend your living space outdoors with a custom aluminium pergola structure — the most searched outdoor upgrade for Dubai villas, gardens, and rooftop terraces. Beat the heat with louvred roofs, retractable shade, and weather-resistant finishes.',
    desc2: 'Our pergolas are fabricated from marine-grade aluminium, powder-coated for UV and rust resistance, and engineered to handle Dubai\'s extreme summer conditions. We offer freestanding and wall-mounted designs with optional motorized louvre roofs.',
    features: [
      'Motorized & manual louvre roof pergolas',
      'Marine-grade aluminium frame',
      'UV & weather-resistant powder coat',
      'Freestanding & wall-mounted options',
      'Integrated LED lighting & drainage',
      'Villas, pools & rooftop installations',
    ],
  },
  {
    id: '07',
    title: 'Aluminium & UPVC Doors',
    subtitle: 'Aluminium & UPVC',
    image: aluminiumUPVCDoorsPartition,
    bg: 'white',
    reverse: false,
    desc1: 'Upgrade your property with energy-efficient aluminium and UPVC doors and windows — the most popular choice for Dubai villas, apartments, and commercial buildings seeking heat insulation, noise reduction, and long-term durability.',
    desc2: 'We fabricate and install aluminium casement windows, UPVC sliding doors, and thermally broken frames built specifically for UAE climate conditions. Expect up to 40% reduction in heat transfer and significant savings on cooling costs.',
    features: [
      'Aluminium & UPVC doors and windows',
      'Thermal break & double-glazed units',
      'Up to 40% heat reduction performance',
      'Noise insulation up to 42 dB',
      'Casement, sliding & tilt-and-turn',
      'Custom powder coat & woodgrain finishes',
    ],
  },
];

const features = [
    { icon: <Target size={22} />, title: 'Expert Fabrication Team', desc: 'Certified technicians with years of hands-on experience in glass and aluminium across the UAE.' },
    { icon: <Settings size={22} />, title: 'Fully Custom Solutions', desc: 'Every project is fabricated to your exact specifications — no off-the-shelf compromises.' },
    { icon: <RefreshCw size={22} />, title: 'End-to-End Service', desc: 'Design, fabrication, installation, and after-service maintenance — all under one roof.' },
    { icon: <MapPinned size={22} />, title: 'Dubai-Based & UAE-Wide', desc: 'Located in Deira, we serve residential and commercial clients across all Emirates.' },
];

const stats = [
    { icon: <Briefcase size={22} />, num: 500, suffix: '+', label: 'Projects Completed' },
    { icon: <Award size={22} />, num: 10, suffix: '+', label: 'Years of Experience' },
    { icon: <MapPin size={22} />, num: null, display: 'UAE', label: 'Nationwide Coverage' },
    { icon: <ShieldCheck size={22} />, num: 100, suffix: '%', label: 'Client Satisfaction' },
];

// Sub-component so each stat gets its own hook instance
const StatItem = ({ icon, num, suffix, display, label }) => {
    const { count, ref } = useCountUp(num ?? 0, 2200);

    return (
        <div className={styles.statItem} ref={ref}>
            <div className={styles.statIco}>{icon}</div>
            <div>
                <div className={styles.statNum}>
                    {display
                        ? display
                        : <>{count}{suffix}</>
                    }
                </div>
                <div className={styles.statLbl}>{label}</div>
            </div>
        </div>
    );
};

const Home = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        btn.textContent = '✅ Sent! We\'ll contact you soon.';
        btn.style.background = 'linear-gradient(135deg, #2A9E18, #1E7812)';
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = 'Send Message';
            btn.style.background = '';
            btn.disabled = false;
            e.target.reset();
        }, 4000);
    };

    return (
        <main>
            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={styles.heroBgImg}>
                    <img
                        src={heroImage}
                        alt="Glass Building"
                    />
                </div>
                <div className={styles.heroOverlay} />
                <div className={styles.heroLeftFade} />
                <div className={styles.heroCircle1} />
                <div className={styles.heroCircle2} />

                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot} />
                        <span>Dubai's Trusted Fabrication Experts</span>
                    </div>
                    <p className={styles.heroSubtitle}>Aluminium · Glass · Fabrication</p>
                    <h1 className={styles.heroTitle}>
                        Building<br />
                        <span className={styles.green}>Brighter</span><br />
                        <span className={styles.stroke}>Futures</span>
                    </h1>
                    <p className={styles.heroDesc}>
                        Precision-crafted glass partitions, double-glazed windows, and ACP cladding
                        for residential and commercial projects across the UAE.
                    </p>
                    <div className={styles.heroActions}>
                        <Link to="/services" className={styles.btnGreen}>Explore Services</Link>
                        <Link to="/contact" className={styles.btnOutline}>Talk to Us</Link>
                    </div>
                </div>

                <div className={styles.heroStats}>
                    {stats.map((s) => (
                        <StatItem key={s.label} {...s} />
                    ))}
                </div>
            </section>

            {/* ── WHAT WE DO ── */}
            <section className={styles.secWwd}>
                <div className={styles.wwdHead}>
                    <SectionTag label="What We Do" center />
                    <h2 className={styles.sh2}>
                        Our Core <span className={styles.green}>Services</span>
                    </h2>
                    <p>Specialized fabrication and installation services — engineered for precision, designed for modern UAE living and commercial excellence.</p>
                </div>

                <div className={styles.carouselOuter}>
                    <div className={styles.carouselTrack}>
                        {[...servicesList, ...servicesList].map((s, i) => (
                            <Link to="/services" key={`${s.id}-${i}`} className={styles.carouselCard}>
                                <div className={styles.carouselImg}>
                                    <img src={s.image} alt={s.title} />
                                    <span className={styles.carouselBadge}>{s.subtitle}</span>
                                </div>
                                <div className={styles.carouselBody}>
                                    <div className={styles.carouselIco}>{s.icon}</div>
                                    <h3 className={styles.carouselTitle}>{s.title}</h3>
                                    <p className={styles.carouselDesc}>{s.desc1}</p>
                                    <ul className={styles.carouselFeats}>
                                        {s.features.slice(0, 3).map((f) => (
                                            <li key={f}>✦ {f}</li>
                                        ))}
                                    </ul>
                                    <span className={styles.carouselLnk}>Learn More →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY US ── */}
            <section className={styles.secWhy}>
                <div className={styles.whyInner}>
                    <div className={styles.whyImg}>
                        <div className={styles.whyCorner} />
                        <img
                            src={whyChooseUsImage}
                            alt="Our Work"
                        />
                        <div className={styles.whyBadge}>
                            <div className={styles.bn}>500+</div>
                            <div className={styles.bl}>Happy Clients</div>
                        </div>
                    </div>
                    <div className={styles.whyContent}>
                        <SectionTag label="Why Choose Us" />
                        <h2 className={styles.sh2}>
                            Bright Results.<br />
                            <span className={styles.green}>Every Time.</span>
                        </h2>
                        <div className={styles.gdiv} />
                        <ul className={styles.featList}>
                            {features.map((f) => (
                                <li key={f.title} className={styles.featItem}>
                                    <div className={styles.featIco}>{f.icon}</div>
                                    <div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <Link to="/about" className={`${styles.btnGreen} ${styles.mt2}`}>
                            About Our Company
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section className={styles.secContact}>
                <div className={styles.contactInner}>
                    <div className={styles.contactHead}>
                        <SectionTag label="Talk To Us" center />
                        <h2 className={styles.sh2}>
                            Let's Build <span className={styles.green}>Together</span>
                        </h2>
                        <p>Get in touch for a free consultation and quote. We respond within 24 hours.</p>
                    </div>
                    <div className={styles.contactGrid}>
                        {/* Info Card */}
                        <div className={styles.cinfoCard}>
                            <h3>Contact Details</h3>
                            <p>We're here for all your glass and aluminium needs. Reach out anytime.</p>

                            <div className={styles.ciItem}>
                                <div className={styles.ciIco}>✉️</div>
                                <div className={styles.ciBody}>
                                    <span>Email</span>
                                    <a href="mailto:info@faizannadeemts.com">info@faizannadeemts.com</a>
                                </div>
                            </div>
                            <div className={styles.ciItem}>
                                <div className={styles.ciIco}>📞</div>
                                <div className={styles.ciBody}>
                                    <span>Phone Number</span>
                                    <div>
                                        <strong>Landline:</strong><br />
                                        <a href="tel:+97143966833">+971 4 396 6833</a>
                                    </div>
                                    <div style={{ marginTop: "6px" }}>
                                        <strong>Mobile:</strong><br />
                                        <a href="tel:+971508310029">+971 50 831 0029</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ciItem}>
                                <div className={styles.ciIco}>📍</div>
                                <div className={styles.ciBody}>
                                    <span>Address</span>
                                    <p>Behind FAB Bank, Al Khabeesi,<br />Deira, Dubai UAE</p>
                                </div>
                            </div>
                            <div className={styles.ciItem}>
                                <div className={styles.ciIco}>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div className={styles.ciBody}>
                                    <span>WhatsApp</span>
                                    <a href="https://wa.me/97143966833" target="_blank" rel="noreferrer">Chat with us now</a>
                                </div>
                            </div>

                            <div className={styles.mapWrap}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1234567890!2d55.3309213!3d25.2643209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc35ed23fa3%3A0x6e1958afbb7d64f6!2sFaizan+Nadeem+Technical+Services+LLC!5e0!3m2!1sen!2sae!4v1678456789012!5m2!1sen!2sae"
                                    title="Faizan Nadeem Location"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                        {/* Form */}
                        <div className={styles.cformCard}>
                            <h3>Send Us a Message</h3>
                            <p>Fill in the form and we'll get back to you with a tailored quote.</p>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.fRow}>
                                    <div className={styles.fGrp}>
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Your name" required />
                                    </div>
                                    <div className={styles.fGrp}>
                                        <label>Email</label>
                                        <input type="email" placeholder="your@email.com" required />
                                    </div>
                                </div>
                                <div className={styles.fGrp}>
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+971 XX XXX XXXX" />
                                </div>
                                <div className={styles.fGrp}>
                                    <label>Message</label>
                                    <textarea placeholder="Tell us about your project..." />
                                </div>
                                <button type="submit" className={`${styles.btnGreen} ${styles.fSubmit}`}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Home;