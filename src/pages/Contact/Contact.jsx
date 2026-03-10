import { useState } from 'react';
import styles from './Contact.module.css';
import Footer from '../../components/Footer/Footer';
import SectionTag from '../../components/SectionTag/SectionTag';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', service: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // TODO: Replace with your backend API endpoint
        // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
        await new Promise((r) => setTimeout(r, 1200)); // Simulated delay

        setLoading(false);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }, 5000);
    };

    return (
        <main>
            {/* Hero */}
            <section className={styles.contactHero}>
                <div className={styles.heroContent}>
                    <SectionTag label="Contact Us" />
                    <h1 className={styles.heroTitle}>
                        Let's Start Your<br />
                        <span className={styles.green}>Project Today</span>
                    </h1>
                    <div className={styles.gdiv} />
                    <p>Reach out for a free consultation. We respond within 24 hours.</p>
                </div>
            </section>

            {/* Main Contact */}
            <section className={styles.contactMain}>
                <div className={styles.contactInner}>
                    <div className={styles.contactGrid}>
                        {/* Info Card */}
                        <div className={styles.infoCard}>
                            <h3>Get In Touch</h3>
                            <p>Here for all your glass and aluminium needs. Reach out for a free quote.</p>

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
                                    <a href="https://wa.me/97143966833" target="_blank" rel="noreferrer">
                                        Chat directly on WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className={styles.mapWrap}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1234567890!2d55.3309213!3d25.2643209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc35ed23fa3%3A0x6e1958afbb7d64f6!2sFaizan+Nadeem+Technical+Services+LLC!5e0!3m2!1sen!2sae!4v1678456789012!5m2!1sen!2sae"
                                    title="Faizan Nadeem Location"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowfullscreen
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                        {/* Form */}
                        <div className={styles.formCard}>
                            <h3>Send Us a Message</h3>
                            <p>We'll get back to you within 24 hours with a tailored quote.</p>

                            {submitted ? (
                                <div className={styles.successMsg}>
                                    <span>✅</span>
                                    <div>
                                        <strong>Message Sent Successfully!</strong>
                                        <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.fRow}>
                                        <div className={styles.fGrp}>
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className={styles.fGrp}>
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.fGrp}>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+971 XX XXX XXXX"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.fGrp}>
                                        <label htmlFor="service">Service Needed</label>
                                        <input
                                            id="service"
                                            name="service"
                                            type="text"
                                            placeholder="Glass Partition, Double Window, ACP Cladding..."
                                            value={formData.service}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.fGrp}>
                                        <label htmlFor="message">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project — dimensions, timeline, location..."
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Contact;