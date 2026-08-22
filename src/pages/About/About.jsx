import {
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../shared.css";
import "./About.css";

const heroImage =
  "https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1400";

const philosophyImage =
  "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1200";

const reasons = [
  {
    icon: Sparkles,
    title: "Specialist Expertise",
    text: "Focused specialist knowledge and modern clinical protocols.",
  },
  {
    icon: ShieldCheck,
    title: "Modern Technology",
    text: "Digital tools that make planning, communication and follow-up easier.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Trust",
    text: "Clear explanations and treatment decisions made with you.",
  },
];

const metrics = [
  ["20+", "Years experience"],
  ["5,000+", "Successful treatments"],
  ["4.9/5", "Patient rating"],
  ["24/7", "AI support"],
];

export default function About() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">
        <div className="about-hero-inner">

          <div className="about-hero-content">
            <span className="about-kicker">
              <i></i>
              ABOUT OAK & IVORY DENTAL
            </span>

            <h1>
              Specialist care with a{" "}
              <em>human touch.</em>
            </h1>

            <p>
              We believe specialist dental care should feel
              personal, clear and reassuring. Our team combines
              clinical expertise with modern technology to create
              better patient experiences.
            </p>

            <div className="about-hero-actions">
              <Link
                to="/appointment"
                className="about-primary-btn"
              >
                Book an Appointment
                <span>
                  <ArrowUpRight size={15} />
                </span>
              </Link>

              <Link
                to="/services"
                className="about-text-btn"
              >
                Explore our services
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-hero-image">
              <img
                src={heroImage}
                alt="Dental specialist caring for a patient"
              />
            </div>

            <div className="about-hero-note">
              <span>
                <CheckCircle2 size={17} />
              </span>

              <div>
                <strong>Care that feels personal</strong>
                <small>
                  Specialist expertise · Clear communication
                </small>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="about-philosophy">
        <div className="about-philosophy-image">
          <img
            src={philosophyImage}
            alt="Patient receiving dental care"
            loading="lazy"
          />

          <div className="about-image-badge">
            <strong>01</strong>

            <span>
              Prevention first
              <small>Built for long-term oral health</small>
            </span>
          </div>
        </div>

        <div className="about-philosophy-content">
          <span className="about-eyebrow">
            <i></i>
            OUR PHILOSOPHY
          </span>

          <h2>
            Healthy foundations for{" "}
            <em>confident smiles.</em>
          </h2>

          <p>
            Our approach is built around prevention, precision
            and long-term oral health. Every patient receives a
            plan shaped around their needs, concerns and goals.
          </p>

          <div className="about-feature-list">
            <div>
              <span>
                <CheckCircle2 size={14} />
              </span>
              <p>Specialist periodontal expertise</p>
            </div>

            <div>
              <span>
                <CheckCircle2 size={14} />
              </span>
              <p>Modern digital workflow</p>
            </div>

            <div>
              <span>
                <CheckCircle2 size={14} />
              </span>
              <p>Clear, comfortable communication</p>
            </div>

            <div>
              <span>
                <CheckCircle2 size={14} />
              </span>
              <p>Personalized follow-up</p>
            </div>
          </div>

          <Link
            className="about-outline-btn"
            to="/services"
          >
            Explore Services
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="about-reasons">
        <div className="about-reasons-inner">

          <div className="about-reasons-heading">
            <span className="about-eyebrow light">
              <i></i>
              WHY PATIENTS CHOOSE US
            </span>

            <h2>
              Specialist expertise.
              <em> Thoughtful experience.</em>
            </h2>

            <p>
              From the first conversation to long-term
              maintenance, every part of the experience is
              designed to feel clear and considered.
            </p>
          </div>

          <div className="about-reasons-grid">
            {reasons.map(
              ({ icon: Icon, title, text }, index) => (
                <article
                  className="about-reason-card"
                  key={title}
                >
                  <span className="about-reason-number">
                    0{index + 1}
                  </span>

                  <div className="about-reason-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <span className="about-card-arrow">
                    <ArrowUpRight size={15} />
                  </span>
                </article>
              )
            )}
          </div>

        </div>
      </section>


      {/* =====================================================
          METRICS
      ===================================================== */}

      <section className="about-metrics-section">
        <div className="about-metrics-heading">
          <span className="about-eyebrow">
            <i></i>
            OUR NUMBERS
          </span>

          <h2>
            Experience that{" "}
            <em>matters.</em>
          </h2>

          <p>
            A patient-first approach backed by experience,
            technology and consistent care.
          </p>
        </div>

        <div className="about-metrics-grid">
          {metrics.map(([number, label]) => (
            <div
              className="about-metric"
              key={label}
            >
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final-cta">
        <div>
          <span className="about-eyebrow">
            <i></i>
            YOUR CARE JOURNEY
          </span>

          <h2>
            Let’s make your next dental visit{" "}
            <em>feel different.</em>
          </h2>

          <p>
            Have a question, concern or treatment in mind?
            Our team is here to help you find the right next
            step.
          </p>
        </div>

        <div className="about-final-actions">
          <Link
            to="/appointment"
            className="about-final-primary"
          >
            Schedule Appointment
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/contact"
            className="about-final-secondary"
          >
            Contact our team
          </Link>
        </div>
      </section>
    </>
  );
}