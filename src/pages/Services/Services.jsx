import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import "../shared.css";
import "./Services.css";

const imgs = [
  "https://images.pexels.com/photos/6627465/pexels-photo-6627465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/5355821/pexels-photo-5355821.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4687357/pexels-photo-4687357.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

const services = [
  [
    "Gum Disease Care",
    "Diagnosis, prevention and specialist treatment designed to protect the tissues supporting your teeth.",
  ],
  [
    "Dental Implants",
    "Specialist implant planning with a focus on healthy foundations and predictable long-term care.",
  ],
  [
    "Smile & Restorative Care",
    "Modern restorative and cosmetic options to help you smile with confidence.",
  ],
  [
    "Emergency Dental Care",
    "Fast assessment and guidance when pain, swelling or an urgent dental concern appears.",
  ],
  [
    "Maintenance & Prevention",
    "Personalized maintenance plans designed to preserve your results and oral health.",
  ],
  [
    "Virtual Dental Support",
    "Ivy AI answers questions and helps patients navigate appointments and services 24/7.",
  ],
];

const servicePoints = [
  "Personalized treatment planning",
  "Clear explanation before every procedure",
  "Comfort-focused patient experience",
];

export default function Services() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">
        <div className="services-hero-inner">
          <div className="services-hero-content">
            <span className="services-kicker">
              <i></i>
              OUR SPECIALIZED SERVICES
            </span>

            <h1>
              Comprehensive care for{" "}
              <em>healthy smiles.</em>
            </h1>

            <p>
              From gum health and implants to ongoing prevention,
              our services are designed around long term outcomes
              and an exceptional patient experience.
            </p>

            <div className="services-hero-actions">
              <Link
                to="/appointment"
                className="services-primary-btn"
              >
                Book an Appointment
                <span>
                  <ArrowUpRight size={15} />
                </span>
              </Link>

              <Link
                to="/contact"
                className="services-secondary-btn"
              >
                Speak with our team
              </Link>
            </div>

            <div className="services-hero-trust">
              <span>
                <CheckCircle2 size={15} />
                Patient-first care
              </span>

              <span>
                <ShieldCheck size={15} />
                Specialist-led treatment
              </span>
            </div>
          </div>

          <div className="services-hero-visual">
            <div className="services-image-orbit"></div>

            <div className="services-main-image">
              <img
                src={imgs[1]}
                alt="Dental specialist providing patient care"
              />
            </div>

            <div className="services-floating-card">
              <span className="services-floating-icon">
                <CheckCircle2 size={17} />
              </span>

              <div>
                <strong>Complete Dental Care</strong>
                <small>
                  From diagnosis to long-term prevention
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-list-section">
        <div className="services-section-head">
          <div>
            <span className="services-eyebrow">
              <i></i>
              WHAT WE DO
            </span>

            <h2>
              Specialist services,{" "}
              <em>thoughtfully delivered.</em>
            </h2>
          </div>

          <p>
            Explore our core treatments and patient support
            services. Every plan begins with understanding
            your needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map(([title, description], index) => (
            <article
              className="service-card"
              key={title}
            >
              <div className="service-card-image">
                <img
                  src={imgs[index]}
                  alt={title}
                  loading="lazy"
                />

                <span className="service-number">
                  0{index + 1}
                </span>
              </div>

              <div className="service-card-body">
                <div>
                  <h3>{title}</h3>

                  <p>{description}</p>
                </div>

                <Link
                  to="/contact"
                  className="service-learn-link"
                >
                  Learn more
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* =====================================================
          CARE PHILOSOPHY
      ===================================================== */}

      <section className="services-care-section">
        <div className="services-care-inner">

          <div className="services-care-image">
            <img
              src={imgs[2]}
              alt="Patient receiving professional dental care"
              loading="lazy"
            />

            <div className="services-care-badge">
              <strong>01</strong>
              <span>
                Understand
                <small>your needs first</small>
              </span>
            </div>
          </div>

          <div className="services-care-content">
            <span className="services-eyebrow light">
              <i></i>
              OUR APPROACH
            </span>

            <h2>
              Treatment should feel{" "}
              <em>clear and personal.</em>
            </h2>

            <p>
              We believe good dental care starts with listening.
              Our team takes time to understand your concerns,
              explain your options and create a treatment plan
              that makes sense for you.
            </p>

            <div className="services-care-points">
              {servicePoints.map((point) => (
                <div key={point}>
                  <CheckCircle2 size={17} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <Link
              to="/appointment"
              className="services-care-btn"
            >
              Start your care journey
              <ArrowUpRight size={15} />
            </Link>
          </div>

        </div>
      </section>


      {/* =====================================================
          IVY
      ===================================================== */}

      <section className="services-ivy-section">
        <div className="services-ivy-content">
          <span className="services-eyebrow">
            <i></i>
            AI-POWERED PATIENT SUPPORT
          </span>

          <h2>
            Not sure what you need?{" "}
            <em>Ask Ivy.</em>
          </h2>

          <p>
            Ivy can explain services, answer common questions
            and guide patients to the right appointment before
            they ever speak with your team.
          </p>

          <div className="services-ivy-actions">
            <Link
              className="services-ivy-primary"
              to="/ivy"
            >
              Talk to Ivy
              <ArrowUpRight size={15} />
            </Link>

            <Link
              className="services-ivy-secondary"
              to="/appointment"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="services-ivy-visual">
          <div className="ivy-window">

            <div className="ivy-window-head">
              <div className="ivy-avatar">
                ✦
              </div>

              <div>
                <strong>Ivy</strong>
                <small>
                  AI dental assistant
                </small>
              </div>

              <span className="ivy-online">
                <i></i>
                Online
              </span>
            </div>

            <div className="ivy-conversation">

              <div className="ivy-bubble">
                Hi, I’m Ivy. How can I help you today?
              </div>

              <div className="ivy-bubble user">
                I want to know which treatment I need.
              </div>

              <div className="ivy-bubble">
                I can help you understand your options
                and find the right next step.
              </div>

              <div className="ivy-options">
                <span>Book consultation</span>
                <span>Explore treatments</span>
                <span>Ask a question</span>
              </div>

            </div>

            <div className="ivy-input">
              <span>Type your question...</span>
              <ArrowUpRight size={14} />
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="services-final-cta">
        <div>
          <span className="services-eyebrow">
            <i></i>
            READY WHEN YOU ARE
          </span>

          <h2>
            Your healthier smile
            <em> starts here.</em>
          </h2>

          <p>
            Tell us what you need and our team will help you
            find the right next step.
          </p>
        </div>

        <div className="services-final-actions">
          <Link
            to="/appointment"
            className="services-final-primary"
          >
            Schedule Appointment
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/contact"
            className="services-final-secondary"
          >
            Contact our team
          </Link>
        </div>
      </section>
    </>
  );
}