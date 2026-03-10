import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styles from './Services.module.css';
import Footer from '../../components/Footer/Footer';
import SectionTag from '../../components/SectionTag/SectionTag';
import shopFront from '../../assets/Glass-Shop-Front.jpeg'
import glassOfficePartition from '../../assets/About-Page-2.jpeg'
import showerGlassPartition from '../../assets/shower-Glass-Partition.jpeg'
import glassPartitionDoors from '../../assets/Glass-Partition-Doors.jpeg'
import outdoorPergolaStructure from '../../assets/Outdoor-Pergola-Structure.jpeg'
import aluminiumUPVCDoorsPartition from '../../assets/Aluminium-UPVC.png'
import glassStaircaseFencing from '../../assets/Glass-Staircase-Fencing.jpeg'



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

const Services = () => {

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target); // animate once only
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <main>
      {/* Hero */}
      <section className={styles.svcHero}>
        <div className={styles.heroContent}>
          <SectionTag label="Our Services" />
          <h1 className={styles.heroTitle}>
            Expert Fabrication<br />
            for <span className={styles.green}>Every Project</span>
          </h1>
          <div className={styles.gdiv} />
          <p>Three specialized services. One unwavering standard of quality for Dubai's residential and commercial landscape.</p>
        </div>
      </section>

      {/* Service Details */}
      {servicesList.map((svc, index) => (
        <section
          key={svc.id}
           ref={(el) => (sectionRefs.current[index] = el)}
          className={`${styles.svcDetail} ${svc.bg === 'offwhite' ? styles.bgOff : styles.bgWhite}`}
        >
          <div className={`${styles.svcInner} ${svc.reverse ? styles.reverse : ''}`}>
            <div className={styles.svcImgWrap}>
              {svc.video ? (
                <video
                  src={svc.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.svcVideo}
                />
              ) : (
                <img src={svc.image} alt={svc.title} style={svc.id === '07' ? { objectPosition: 'center' } : {}} />
              )}
              <div className={styles.imgBadge}>{svc.icon} {svc.subtitle}</div>
            </div>
            <div className={styles.svcContent}>
              <SectionTag label={`Service ${svc.id}`} />
              <h2>
                {svc.title.split(' ').slice(0, -1).join(' ')}<br />
                <span className={styles.green}>{svc.title.split(' ').slice(-1)[0]}</span>
              </h2>
              <p>{svc.desc1}</p>
              <p>{svc.desc2}</p>
              <ul className={styles.featList}>
                {svc.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/contact" className={styles.btnGreen}>
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
};

export default Services;