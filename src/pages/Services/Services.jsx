import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    number: "01",
    category: "PREVENTIVE CARE",
    title: "Complete Dental Check up",
    description:
      "Regular check ups and personalised treatment planning for your oral health.",
    icon: Stethoscope,
  },
  {
    number: "02",
    category: "PREVENTIVE CARE",
    title: "Teeth Cleaning and Polishing",
    description:
      "Professional cleaning to help maintain a cleaner and healthier smile.",
    icon: Sparkles,
  },
  {
    number: "03",
    category: "RESTORATIVE CARE",
    title: "Cavity Treatment",
    description:
      "Focused treatment for cavities and areas affected by tooth decay.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    category: "RESTORATIVE CARE",
    title: "Tooth Colored Fillings",
    description:
      "Natural looking fillings designed to restore damaged teeth.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    category: "RESTORATIVE CARE",
    title: "Root Canal Treatment",
    description:
      "Treatment focused on preserving and restoring affected natural teeth.",
    icon: Stethoscope,
  },
  {
    number: "06",
    category: "RESTORATIVE CARE",
    title: "Crowns and Bridges",
    description:
      "Restorative solutions for damaged or missing teeth.",
    icon: HeartHandshake,
  },
  {
    number: "07",
    category: "TOOTH REPLACEMENT",
    title: "Dental Implants",
    description:
      "A considered solution for replacing missing teeth.",
    icon: ShieldCheck,
  },
  {
    number: "08",
    category: "SMILE CARE",
    title: "Teeth Whitening",
    description:
      "A brighter smile with treatment planned around your needs.",
    icon: Sparkles,
  },
  {
    number: "09",
    category: "SMILE CARE",
    title: "Smile Makeover",
    description:
      "A personalised approach to improving the appearance of your smile.",
    icon: Sparkles,
  },
  {
    number: "10",
    category: "ALIGNMENT",
    title: "Braces and Clear Aligners",
    description:
      "Options designed to improve dental alignment and smile confidence.",
    icon: ShieldCheck,
  },
  {
    number: "11",
    category: "SPECIALISED CARE",
    title: "Wisdom Tooth Treatment",
    description:
      "Professional care for troublesome wisdom teeth.",
    icon: Stethoscope,
  },
  {
    number: "12",
    category: "PREVENTIVE CARE",
    title: "Gum Care",
    description:
      "Care focused on maintaining healthy gums and supporting oral health.",
    icon: HeartHandshake,
  },
  {
    number: "13",
    category: "CHILDREN'S CARE",
    title: "Children's Dentistry",
    description:
      "Gentle dental care designed around the needs of children.",
    icon: HeartHandshake,
  },
  {
    number: "14",
    category: "TOOTH REPLACEMENT",
    title: "Dentures",
    description:
      "Comfort focused solutions for replacing missing teeth.",
    icon: ShieldCheck,
  },
];

const careAreas = [
  {
    number: "01",
    title: "Preventive Care",
    text: "Regular care designed to help maintain your oral health.",
    count: "03",
  },
  {
    number: "02",
    title: "Restorative Care",
    text: "Treatment focused on restoring damaged teeth and dental function.",
    count: "04",
  },
  {
    number: "03",
    title: "Smile Care",
    text: "Treatments focused on creating a brighter and more confident smile.",
    count: "02",
  },
  {
    number: "04",
    title: "Specialised Care",
    text: "Additional treatment options for specific dental needs.",
    count: "05",
  },
];

const carePoints = [
  "Personalised treatment planning",
  "Clear explanation before treatment",
  "Comfort focused patient experience",
];

export default function Services() {
  return (
    <main className="services-page">

      {/* HERO */}

      <section className="services-hero">

        <div className="services-hero-glow glow-one" />
        <div className="services-hero-glow glow-two" />

        <div className="services-container services-hero-grid">

          <div className="services-hero-content">

            <div className="services-label">
              <i />
              VASU AESTHETICS AND DENTAL CARE
            </div>

            <div className="hero-kicker">
              <span>14</span>
              Dental services
            </div>

            <h1>
              Care for your
              <span> complete smile.</span>
            </h1>

            <p>
              Explore the dental treatments available at Vasu
              Aesthetics and Dental Care. Every treatment begins
              with understanding your individual needs.
            </p>

            <div className="services-hero-actions">

              <Link
                to="/appointment"
                className="services-primary"
              >
                Book an Appointment
                <span>
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              <Link
                to="/contact"
                className="services-secondary"
              >
                Contact our team
                <ArrowUpRight size={15} />
              </Link>

            </div>

            <div className="services-hero-meta">

              <div>
                <strong>14</strong>
                <span>Services</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Care areas</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Dental destination</span>
              </div>

            </div>

          </div>

          <div className="services-hero-visual">

            <div className="hero-main-card">

              <div className="hero-card-header">
                <span>VASU</span>
                <span>RAJAJINAGAR</span>
              </div>

              <div className="hero-card-body">

                <div className="hero-orbit orbit-one" />
                <div className="hero-orbit orbit-two" />

                <div className="hero-center">

                  <div className="hero-center-icon">
                    <Sparkles size={25} />
                  </div>

                  <span>YOUR SMILE</span>

                  <h2>
                    Care that
                    <em> begins</em>
                    <br />
                    with you.
                  </h2>

                </div>

              </div>

              <div className="hero-card-footer">
                <span>PERSONALISED CARE</span>
                <span>01</span>
              </div>

            </div>

            <div className="hero-info-card hero-info-top">

              <span className="hero-info-number">
                14
              </span>

              <div>
                <strong>Dental treatments</strong>
                <small>Across different care needs</small>
              </div>

            </div>

            <div className="hero-info-card hero-info-bottom">

              <span className="hero-check">
                <Check size={15} />
              </span>

              <div>
                <strong>Clear treatment planning</strong>
                <small>Understand your next step</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="services-intro">

        <div className="services-container services-intro-grid">

          <div className="intro-side">

            <span className="intro-number">
              01
            </span>

            <div className="intro-line" />

            <span className="intro-side-text">
              TREATMENT PHILOSOPHY
            </span>

          </div>

          <div className="intro-content">

            <div className="services-label">
              <i />
              A CLEARER APPROACH
            </div>

            <h2>
              Different needs.
              <span> One thoughtful approach.</span>
            </h2>

            <p>
              Dental care is not the same for everyone. Our
              treatment range brings different areas of dental
              care together so your next step can begin with a
              clear understanding of what you need.
            </p>

          </div>

        </div>

      </section>


      {/* CARE AREAS */}

      <section className="services-care">

        <div className="services-container">

          <div className="services-section-head">

            <div>

              <div className="services-label">
                <i />
                EXPLORE BY CARE AREA
              </div>

              <h2>
                Find your
                <span> starting point.</span>
              </h2>

            </div>

            <p>
              Explore the main areas of dental care before
              choosing an individual treatment.
            </p>

          </div>

          <div className="care-grid">

            {careAreas.map((area) => (
              <a
                href="#all-treatments"
                className="care-card"
                key={area.number}
              >

                <div className="care-card-top">

                  <span>{area.number}</span>

                  <strong>{area.count}</strong>

                </div>

                <div className="care-card-body">

                  <h3>{area.title}</h3>

                  <p>{area.text}</p>

                </div>

                <div className="care-card-link">

                  <span>Explore care</span>

                  <span className="care-arrow">
                    <ArrowUpRight size={14} />
                  </span>

                </div>

              </a>
            ))}

          </div>

        </div>

      </section>


      {/* ALL TREATMENTS */}

      <section
        className="services-all"
        id="all-treatments"
      >

        <div className="services-container">

          <div className="all-heading">

            <div>

              <div className="services-label">
                <i />
                COMPLETE TREATMENT DIRECTORY
              </div>

              <h2>
                Explore our
                <span> treatments.</span>
              </h2>

            </div>

            <div className="all-count">

              <strong>14</strong>

              <span>
                dental
                <br />
                services
              </span>

            </div>

          </div>

          <div className="treatment-list">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <article
                  className="treatment-card"
                  key={service.number}
                >

                  <div className="treatment-number">
                    {service.number}
                  </div>

                  <div className="treatment-icon">
                    <Icon size={18} />
                  </div>

                  <div className="treatment-main">

                    <span className="treatment-category">
                      {service.category}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                  </div>

                  <Link
                    to="/contact"
                    className="treatment-link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowUpRight size={17} />
                  </Link>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* APPROACH */}

      <section className="services-approach">

        <div className="approach-glow" />

        <div className="services-container approach-grid">

          <div className="approach-visual">

            <div className="approach-orbit approach-orbit-one" />
            <div className="approach-orbit approach-orbit-two" />

            <div className="approach-main-card">

              <span>VASU APPROACH</span>

              <div className="approach-icon">
                <HeartHandshake size={27} />
              </div>

              <h3>
                Care that feels
                <em> considered.</em>
              </h3>

              <p>
                Your concerns, comfort and understanding remain
                part of the treatment journey.
              </p>

            </div>

            <div className="approach-tag tag-one">
              LISTEN
            </div>

            <div className="approach-tag tag-two">
              EXPLAIN
            </div>

            <div className="approach-tag tag-three">
              CARE
            </div>

          </div>

          <div className="approach-content">

            <div className="services-label light">
              <i />
              OUR APPROACH
            </div>

            <h2>
              Treatment should feel
              <span> clear and personal.</span>
            </h2>

            <p>
              Good dental care starts with communication. We
              believe patients should understand what is being
              recommended and why it matters to their dental
              health.
            </p>

            <div className="care-points">

              {carePoints.map((point, index) => (
                <div key={point}>

                  <span>
                    0{index + 1}
                  </span>

                  <Check size={15} />

                  <p>{point}</p>

                </div>
              ))}

            </div>

            <Link
              to="/appointment"
              className="approach-button"
            >
              Begin your care journey
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

      </section>


      {/* IVY */}

      <section className="services-ivy">

        <div className="services-container ivy-grid">

          <div className="ivy-content">

            <div className="services-label">
              <i />
              MEET IVY
            </div>

            <h2>
              A simple way to
              <span> start the conversation.</span>
            </h2>

            <p>
              Ivy is the digital dental assistant for Vasu.
              Explore treatments, understand your options and
              find your next step through a simple conversation.
            </p>

            <Link
              to="/ivy"
              className="ivy-button"
            >
              Talk to Ivy
              <ArrowUpRight size={16} />
            </Link>

          </div>

          <div className="ivy-card">

            <div className="ivy-header">

              <div className="ivy-avatar">
                <Sparkles size={17} />
              </div>

              <div>
                <strong>Ivy</strong>
                <small>Digital dental assistant</small>
              </div>

              <span className="ivy-status">
                <i />
                Ready
              </span>

            </div>

            <div className="ivy-chat">

              <div className="ivy-message">
                Hi, I am Ivy. What would you like to know about
                your dental care?
              </div>

              <div className="ivy-user-message">
                I want to explore treatments.
              </div>

              <div className="ivy-message">
                You can explore the treatments available at Vasu
                and choose what you would like to know more about.
              </div>

              <div className="ivy-options">
                <span>Explore treatments</span>
                <span>Book an appointment</span>
              </div>

            </div>

            <div className="ivy-input">
              <span>Ask Ivy something</span>
              <ArrowUpRight size={14} />
            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="services-final">

        <div className="services-container final-inner">

          <div>

            <div className="services-label light">
              <i />
              YOUR NEXT STEP
            </div>

            <h2>
              Not sure where
              <span> to begin?</span>
            </h2>

            <p>
              Start with a conversation and let our team
              understand what you need.
            </p>

          </div>

          <div className="final-actions">

            <Link
              to="/appointment"
              className="final-primary"
            >
              Book an Appointment
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="final-secondary"
            >
              Contact Vasu
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}