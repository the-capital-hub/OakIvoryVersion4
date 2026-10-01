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
        <div className="services-hero-circle circle-one" />
        <div className="services-hero-circle circle-two" />

        <div className="services-container services-hero-grid">

          <div className="services-hero-content">

            <span className="services-label">
              <i />
              VASU AESTHETICS AND DENTAL CARE
            </span>

            <h1>
              Dental care with
              <span> a clearer approach.</span>
            </h1>

            <p>
              Explore the dental treatments available at Vasu Aesthetics and
              Dental Care. From preventive care to restorative, smile and
              replacement treatments, every service begins with understanding
              your individual needs.
            </p>

            <div className="services-hero-actions">

              <Link to="/appointment" className="services-primary">
                Book an Appointment

                <span>
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              <Link to="/contact" className="services-secondary">
                Contact our team
                <ArrowUpRight size={15} />
              </Link>

            </div>

            <div className="services-stats">

              <div>
                <strong>14</strong>
                <span>Dental services</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Care destination</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Care principles</span>
              </div>

            </div>

          </div>

          <div className="services-hero-visual">

            <div className="services-hero-panel">

              <div className="hero-panel-top">
                <span>VASU</span>
                <span>01</span>
              </div>

              <div className="hero-panel-center">

                <div className="hero-panel-icon">
                  <Sparkles size={27} />
                </div>

                <span>YOUR DENTAL CARE</span>

                <h2>
                  Starts with
                  <em> understanding.</em>
                </h2>

                <p>
                  Clear care.
                  <br />
                  Thoughtful treatment.
                </p>

              </div>

              <div className="hero-panel-bottom">
                <span>Dental Care</span>
                <span>Rajajinagar</span>
              </div>

            </div>

            <div className="hero-floating-card hero-card-one">
              <span className="floating-number">14</span>

              <div>
                <strong>Dental Services</strong>
                <small>Across different care needs</small>
              </div>
            </div>

            <div className="hero-floating-card hero-card-two">
              <span className="floating-check">
                <Check size={15} />
              </span>

              <div>
                <strong>Personalised care</strong>
                <small>Planned around you</small>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTRO */}

      <section className="services-intro">
        <div className="services-container services-intro-grid">

          <div>
            <span className="services-label">
              <i />
              OUR TREATMENT PHILOSOPHY
            </span>
          </div>

          <div>

            <h2>
              One place for
              <span> different dental needs.</span>
            </h2>

            <p>
              Dental care is not the same for everyone. Our treatment range
              brings different areas of dental care together so your next step
              can begin with a clear understanding of what you need.
            </p>

          </div>

        </div>
      </section>

      {/* CARE AREAS */}

      <section className="services-care-areas">

        <div className="services-container">

          <div className="services-heading">

            <div>
              <span className="services-label">
                <i />
                EXPLORE BY CARE AREA
              </span>

              <h2>
                Find your
                <span> starting point.</span>
              </h2>
            </div>

            <p>
              Browse the main areas of care before exploring the individual
              treatments available at Vasu.
            </p>

          </div>

          <div className="care-area-grid">

            {careAreas.map((area) => (
              <article className="care-area-card" key={area.number}>

                <div className="care-area-top">
                  <span>{area.number}</span>

                  <strong>{area.count}</strong>
                </div>

                <div className="care-area-content">

                  <h3>{area.title}</h3>

                  <p>{area.text}</p>

                </div>

                <a href="#all-treatments">
                  Explore care
                  <ArrowUpRight size={15} />
                </a>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* ALL TREATMENTS */}

      <section className="services-all" id="all-treatments">

        <div className="services-container">

          <div className="services-all-heading">

            <div>

              <span className="services-label">
                <i />
                COMPLETE TREATMENT DIRECTORY
              </span>

              <h2>
                Treatments designed around
                <span> real dental needs.</span>
              </h2>

            </div>

            <div className="service-count">
              <strong>14</strong>
              <span>services available</span>
            </div>

          </div>

          <div className="treatment-list">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <article
                  className="treatment-row"
                  key={service.number}
                >

                  <span className="treatment-number">
                    {service.number}
                  </span>

                  <div className="treatment-icon">
                    <Icon size={18} />
                  </div>

                  <div className="treatment-content">

                    <span>{service.category}</span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                  </div>

                  <Link
                    to="/contact"
                    className="treatment-arrow"
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

        <div className="services-container services-approach-grid">

          <div className="approach-visual">

            <div className="approach-circle" />

            <div className="approach-card">

              <span>VASU APPROACH</span>

              <div className="approach-icon">
                <HeartHandshake size={27} />
              </div>

              <h3>
                Care that feels
                <em> considered.</em>
              </h3>

              <p>
                Your concerns, comfort and understanding remain part of the
                treatment journey.
              </p>

            </div>

            <div className="approach-tags">
              <span>LISTEN</span>
              <span>EXPLAIN</span>
              <span>CARE</span>
            </div>

          </div>

          <div className="approach-content">

            <span className="services-label light">
              <i />
              OUR APPROACH
            </span>

            <h2>
              Treatment should feel
              <span> clear and personal.</span>
            </h2>

            <p>
              Good dental care starts with communication. We believe patients
              should understand what is being recommended and why it matters
              to their dental health.
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

            <span className="services-label">
              <i />
              MEET IVY
            </span>

            <h2>
              Have a question
              <span> before you visit?</span>
            </h2>

            <p>
              Ivy is the digital dental assistant for Vasu. Use Ivy to explore
              treatments, understand your options and find your next step.
            </p>

            <Link to="/ivy" className="ivy-button">
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
                Hi, I am Ivy. What would you like to know about your dental
                care?
              </div>

              <div className="ivy-user-message">
                I want to explore treatments.
              </div>

              <div className="ivy-message">
                You can explore the treatments available at Vasu and choose
                what you would like to know more about.
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

      {/* CTA */}

      <section className="services-final">

        <div className="services-container services-final-inner">

          <div>

            <span className="services-label light">
              <i />
              YOUR NEXT STEP
            </span>

            <h2>
              Not sure where
              <span> to begin?</span>
            </h2>

            <p>
              Start with a conversation and let our team understand what you
              need.
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