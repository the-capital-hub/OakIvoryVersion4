import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  ChevronRight,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const IMG = {
  hero:
    "https://images.pexels.com/photos/5355903/pexels-photo-5355903.jpeg?auto=compress&cs=tinysrgb&w=1400",

  consult:
    "https://images.pexels.com/photos/5355894/pexels-photo-5355894.jpeg?auto=compress&cs=tinysrgb&w=1200",

  patient:
    "https://images.pexels.com/photos/5622003/pexels-photo-5622003.jpeg?auto=compress&cs=tinysrgb&w=1000",

  doctor:
    "https://images.pexels.com/photos/6812577/pexels-photo-6812577.jpeg?auto=compress&cs=tinysrgb&w=1000",

  clinic:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
};

function Img({ src, alt, className = "" }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        if (e.currentTarget.src !== IMG.consult) {
          e.currentTarget.src = IMG.consult;
        }
      }}
    />
  );
}

const services = [
  {
    title: "General Dentistry",
    text: "Check-ups, cleaning, fillings and preventive care.",
    img: IMG.consult,
    path: "/services",
  },
  {
    title: "Cosmetic Dentistry",
    text: "Whitening, veneers, bonding and smile makeovers.",
    img: IMG.patient,
    path: "/cosmetic-dentistry",
  },
  {
    title: "Dental Implants",
    text: "Stable, natural-looking solutions for missing teeth.",
    img: IMG.doctor,
    path: "/dental-implants",
  },
  {
    title: "Emergency Dentistry",
    text: "Fast guidance for pain, swelling or dental trauma.",
    img: IMG.hero,
    path: "/emergency-dentistry",
  },
];

const journey = [
  [
    "01",
    "Connect",
    "Book online, call, WhatsApp or speak with Ivy.",
  ],
  [
    "02",
    "Meet",
    "We listen to your concerns and understand your goals.",
  ],
  [
    "03",
    "Understand",
    "Get a clear diagnosis and straightforward options.",
  ],
  [
    "04",
    "Begin",
    "Start treatment only when you feel comfortable.",
  ],
  [
    "05",
    "Stay on track",
    "Follow-ups keep your smile healthy long-term.",
  ],
];

const testimonials = [
  [
    "“I finally stopped being nervous about the dentist.”",
    "Sneha R.",
  ],
  [
    "“The entire process was so smooth and reassuring.”",
    "Rahul M.",
  ],
  [
    "“My smile has completely changed my confidence.”",
    "Priya S.",
  ],
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="oak-hero">
        <div className="hero-noise" />

        <div className="oak-hero-inner">
          <div className="oak-hero-copy">
            <div className="hero-eyebrow">
              <span />
              MODERN DENTISTRY · PERSONAL CARE · CONFIDENT SMILES
            </div>

            <h1>
              A healthier smile,
              <em> with care you can trust.</em>
            </h1>

            <p>
              Experienced dentists, modern technology and a calmer patient
              experience — from your first consultation to long-term care.
            </p>

            <div className="hero-actions">
              <Link className="hero-primary" to="/contact">
                Book an Appointment
                <ArrowUpRight size={16} />
              </Link>

              <Link
                className="hero-secondary"
                to="/contact?assistant=ivy"
              >
                <span>
                  <Bot size={15} />
                </span>
                Talk to Ivy
              </Link>
            </div>

            <div className="hero-trust-row">
              <div className="trust-rating">
                <strong>4.9</strong>

                <span>★★★★★</span>

                <small>Patient experience</small>
              </div>

              <div className="trust-divider" />

              <div className="trust-detail">
                <ShieldCheck size={17} />

                <span>
                  <b>Patient-first care</b>
                  <small>
                    Clear advice. No rushed visits.
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="oak-hero-art">
            <div className="hero-backdrop" />

            <div className="hero-image-wrap">
              <Img
                src={IMG.hero}
                alt="Dentist caring for a patient in a modern dental clinic"
              />
            </div>

            <div className="hero-card hero-card-top">
              <Sparkles size={15} />

              <span>
                <b>Calm, modern care</b>
                <small>Designed around you</small>
              </span>
            </div>

            <div className="hero-card hero-card-bottom">
              <span className="ivy-mini">
                <Bot size={14} />
              </span>

              <span>
                <b>Ivy is online</b>
                <small>Ready to help 24/7</small>
              </span>

              <i />
            </div>
          </div>
        </div>

        <div className="hero-bottom-note">
          <span>SCROLL TO EXPLORE</span>
          <ChevronRight size={13} />
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}

      <section className="oak-strip">
        <div>
          <ShieldCheck />

          <span>
            <b>Experienced Dentists</b>
            <small>Thoughtful clinical care</small>
          </span>
        </div>

        <div>
          <Sparkles />

          <span>
            <b>Modern Technology</b>
            <small>Precise & comfortable</small>
          </span>
        </div>

        <div>
          <Clock3 />

          <span>
            <b>Convenient Care</b>
            <small>Online + Ivy 24/7</small>
          </span>
        </div>

        <div>
          <MapPin />

          <span>
            <b>Indiranagar</b>
            <small>Bengaluru · 9 AM – 7 PM</small>
          </span>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="oak-about section-pad">
        <div className="oak-image-stack">
          <div className="stack-main">
            <Img
              src={IMG.consult}
              alt="Dentist consulting with a patient"
            />
          </div>

          <div className="stack-small">
            <Img
              src={IMG.patient}
              alt="Comfortable dental consultation"
            />
          </div>

          <div className="stack-note">
            <strong>Patient-first</strong>

            <span>
              No rushed appointments. No confusing jargon.
            </span>
          </div>
        </div>

        <div className="oak-copy">
          <span className="eyebrow">
            WHY OAK & IVORY
          </span>

          <h2>
            A better dental experience,
            <em> from the first hello.</em>
          </h2>

          <p>
            Good dentistry is not just about treating teeth. It is about
            understanding the person sitting in the chair.
          </p>

          <div className="check-list">
            <div>
              <span>01</span>

              <b>Clear communication</b>

              <small>
                Understand your diagnosis, options and next steps.
              </small>
            </div>

            <div>
              <span>02</span>

              <b>Personalised treatment</b>

              <small>
                A plan shaped around your needs and comfort.
              </small>
            </div>

            <div>
              <span>03</span>

              <b>Comfort first</b>

              <small>
                A calm environment where questions are encouraged.
              </small>
            </div>
          </div>

          <Link className="text-link" to="/about">
            Discover our approach
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="oak-services">
        <div className="section-head-dark">
          <div>
            <span className="eyebrow light">
              OUR SERVICES
            </span>

            <h2>
              Complete dental care
              <em> under one roof.</em>
            </h2>
          </div>

          <Link
            className="circle-link"
            to="/services"
            aria-label="View services"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="service-mosaic">
          {services.map((service, i) => (
            <Link
              to={service.path}
              className={`service-tile tile-${i + 1}`}
              key={service.title}
            >
              <Img
                src={service.img}
                alt={service.title}
              />

              <div className="service-shade" />

              <div className="service-tile-content">
                <span>0{i + 1}</span>

                <div>
                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>

                <ArrowUpRight size={17} />
              </div>
            </Link>
          ))}
        </div>

        <div className="service-more">
          <Link to="/services">
            View all treatments
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      {/* ================= PATIENT JOURNEY ================= */}

      <section className="oak-journey section-pad">
        <div className="journey-head">
          <div>
            <span className="eyebrow">
              PATIENT EXPERIENCE
            </span>

            <h2>
              Dental care that
              <em> fits your life.</em>
            </h2>
          </div>

          <p>
            From the first message to your follow-up, every step is designed
            to feel clear, calm and convenient.
          </p>
        </div>

        <div className="journey-line">
          {journey.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>

              <div>
                <h3>{title}</h3>

                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>

        <Link
          className="hero-primary"
          to="/experience"
        >
          Explore the patient journey
          <ArrowUpRight size={14} />
        </Link>
      </section>

      {/* ================= DOCTOR ================= */}
{/* 
      <section className="oak-doctor">
  <div className="doctor-photo">
    <Img
      src={IMG.doctor}
      alt="Dr. Ananya Rao speaking with a patient"
    />
  </div>

  <div className="doctor-copy">
    <span className="eyebrow">
      MEET YOUR DENTAL CARE TEAM
    </span>

    <h2>
      Expertise you can trust.
      <em> A human approach.</em>
    </h2>

    <p>
      Our dentists take the time to listen, explain and recommend only
      what makes sense for you. Every treatment begins with understanding
      your concerns and ends with care you can feel confident about.
    </p>

    <div className="doctor-card">
      <div className="doctor-avatar">
        <Img
          src={IMG.doctor}
          alt="Dr. Ananya Rao"
        />
      </div>

      <div className="doctor-info">
        <b>Dr. Ananya Rao</b>

        <small>
          BDS, MDS · Founder & Lead Dentist
        </small>

        <span>
          Cosmetic & Restorative Dentistry
        </span>

        <div className="doctor-meta">
          <span>20+ Years Experience</span>
          <span className="doctor-online">
            <i></i> Available for consultation
          </span>
        </div>
      </div>

      <Link
        to="/doctors"
        className="doctor-arrow"
        aria-label="Meet our dentists"
      >
        <ArrowUpRight size={15} />
      </Link>
    </div>

    <Link
      className="text-link"
      to="/doctors"
    >
      Meet our dentists
      <ArrowUpRight size={14} />
    </Link>
  </div>
</section> */}

      {/* ================= IVY ================= */}

      <section className="ivy-section">
        <div className="ivy-copy">
          <span className="eyebrow light">
            CLINICOS · AI RECEPTIONIST
          </span>

          <h2>
            Your clinic&apos;s front desk,
            <em> always awake.</em>
          </h2>

          <p>
            Ivy answers questions, helps patients choose a service, supports
            appointment requests and collects callback requests — 24/7.
          </p>

          <div className="ivy-actions">
            <Link to="/contact?assistant=ivy">
              Talk to Ivy
              <Bot size={14} />
            </Link>

            <Link to="/contact">
              Book with Ivy
              <CalendarDays size={14} />
            </Link>
          </div>

          <div className="ivy-trust">
            <span>●</span>
            Available 24/7 · Never misses a patient enquiry
          </div>
        </div>

        <div className="ivy-ui">
          <div className="ivy-ui-top">
            <div className="ivy-logo">
              <Bot size={18} />
            </div>

            <div>
              <b>Ivy</b>
              <small>AI Receptionist · Online</small>
            </div>

            <span className="online-dot" />
          </div>

          <div className="ivy-messages">
            <div className="ivy-msg">
              Hi! I&apos;m Ivy 👋
              <br />
              How can I help you today?
            </div>

            <div className="ivy-msg user">
              I want to book a dental cleaning.
            </div>

            <div className="ivy-msg">
              Absolutely. I can help you find a suitable appointment.
            </div>

            <div className="ivy-quick">
              <span>Book appointment</span>
              <span>Clinic hours</span>
              <span>Services</span>
            </div>
          </div>

          <div className="ivy-input">
            Ask Ivy anything
            <span>↗</span>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="oak-testimonials section-pad">
        <div className="journey-head">
          <div>
            <span className="eyebrow">
              PATIENT STORIES
            </span>

            <h2>
              What our patients
              <em> say.</em>
            </h2>
          </div>

          <Link
            className="text-link"
            to="/testimonials"
          >
            Read all stories
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="testimonial-row">
          {testimonials.map(([quote, name]) => (
            <article key={name}>
              <div className="stars">
                ★★★★★
              </div>

              <p>{quote}</p>

              <b>— {name}</b>

              <small>
                Oak & Ivory patient
              </small>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="oak-cta">
        <div>
          <span className="eyebrow light">
            READY WHEN YOU ARE
          </span>

          <h2>
            Let&apos;s make your next dental visit
            <em> different.</em>
          </h2>

          <p>
            Book online, call the clinic or let Ivy help you get started.
          </p>

          <div className="cta-actions">
            <Link
              to="/contact"
              className="cta-white"
            >
              Book an Appointment
              <ArrowUpRight size={14} />
            </Link>

            <a
              href="tel:+918041234567"
              className="cta-ghost"
            >
              <Phone size={13} />
              Call the clinic
            </a>
          </div>
        </div>

        <div className="cta-art">
          <div className="cta-circle" />

          <Img
            src={IMG.patient}
            alt="Confident dental patient"
          />
        </div>
      </section>
    </>
  );
}