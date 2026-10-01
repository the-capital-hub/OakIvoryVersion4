import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  Check,
  MapPin,
  Phone,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const images = {
  hero:
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85",

  treatment:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",

  doctorOne:
    "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=85",

  doctorTwo:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",

  experience:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
};

const treatments = [
  {
    number: "01",
    title: "Complete Dental Check up",
    text: "A clear starting point for understanding your dental needs.",
  },
  {
    number: "02",
    title: "Teeth Cleaning and Polishing",
    text: "Professional care for a cleaner and healthier smile.",
  },
  {
    number: "03",
    title: "Cavity Treatment",
    text: "Focused treatment for teeth affected by cavities.",
  },
  {
    number: "04",
    title: "Tooth Colored Fillings",
    text: "A natural looking approach to restoring affected teeth.",
  },
  {
    number: "05",
    title: "Root Canal Treatment",
    text: "Care focused on preserving affected natural teeth.",
  },
  {
    number: "06",
    title: "Crowns and Bridges",
    text: "Solutions for restoring the function of your smile.",
  },
];

const principles = [
  {
    number: "01",
    title: "Listen",
    text: "We start by understanding your concerns and expectations.",
    icon: <Stethoscope size={20} />,
  },
  {
    number: "02",
    title: "Explain",
    text: "We keep treatment conversations clear and easy to understand.",
    icon: <Sparkles size={20} />,
  },
  {
    number: "03",
    title: "Care",
    text: "Your treatment journey stays centred around your needs.",
    icon: <Check size={20} />,
  },
];

const doctors = [
  {
    name: "Dr. Rajkamal S.",
    qualification: "BDS, FGD, FCE",
    role: "Dental Care",
    phone: "+91 84317 88571",
    image: images.doctorOne,
  },
  {
    name: "Dr. Abdul Rahim",
    qualification: "BDS",
    role: "Director and Head of Candy Advanced Dental Care",
    phone: "+91 99001 76558",
    image: images.doctorTwo,
  },
];

const journey = [
  "Start with a conversation",
  "Meet your dental specialist",
  "Understand your treatment options",
  "Move forward with clarity",
];

export default function Home() {
  return (
    <main className="vasu-home">

      {/* HERO */}

      <section className="vh-hero">

        <div className="vh-hero-decoration vh-decoration-one" />
        <div className="vh-hero-decoration vh-decoration-two" />

        <div className="vh-container vh-hero-grid">

          <div className="vh-hero-copy">

            <div className="vh-label">
              <i />
              VASU AESTHETICS AND DENTAL CARE
            </div>

            <h1>
              A healthier smile
              <span> starts with care.</span>
            </h1>

            <p>
              Thoughtful dental care in Rajajinagar with clear
              communication, personalised treatment and a
              comfortable patient experience.
            </p>

            <div className="vh-hero-buttons">

              <Link to="/appointment" className="vh-primary">
                Book an Appointment
                <ArrowUpRight size={16} />
              </Link>

              <Link to="/services" className="vh-secondary">
                Explore Treatments
              </Link>

            </div>

            <div className="vh-hero-address">

              <div className="vh-address-icon">
                <MapPin size={16} />
              </div>

              <div>
                <strong>Rajajinagar, Bengaluru</strong>
                <span>Vasu Aesthetics and Dental Care</span>
              </div>

            </div>

          </div>

          <div className="vh-hero-visual">

            <div className="vh-hero-photo">

              <img
                src={images.hero}
                alt="Dental care at Vasu Aesthetics and Dental Care"
              />

              <div className="vh-photo-overlay" />

            </div>

            <div className="vh-hero-note">

              <div className="vh-note-icon">
                <Sparkles size={16} />
              </div>

              <div>
                <strong>Thoughtful care</strong>
                <span>Built around your needs</span>
              </div>

            </div>

            <div className="vh-hero-badge">
              <strong>14</strong>
              <span>
                Dental
                <br />
                services
              </span>
            </div>

            <div className="vh-hero-stamp">
              <strong>VASU</strong>
              <span>DENTAL CARE</span>
            </div>

          </div>

        </div>

        <div className="vh-hero-footer">

          <span>
            <i />
            PERSONALISED CARE
          </span>

          <b />

          <span>CLEAR GUIDANCE</span>

          <b />

          <span>RAJAJINAGAR</span>

        </div>

      </section>


      {/* INTRO */}

      <section className="vh-intro">

        <div className="vh-container vh-intro-grid">

          <div className="vh-intro-index">
            <strong>01</strong>
            <span />
            <small>OUR APPROACH</small>
          </div>

          <div className="vh-intro-title">

            <div className="vh-label">
              <i />
              THE VASU APPROACH
            </div>

            <h2>
              Dental care should feel
              <span> clear and comfortable.</span>
            </h2>

          </div>

          <div className="vh-intro-copy">

            <p>
              Every patient is different. That is why we focus
              on understanding your concerns first, then helping
              you understand the care that comes next.
            </p>

            <Link to="/about" className="vh-text-link">
              Discover Vasu
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

      </section>


      {/* PRINCIPLES */}

      <section className="vh-principles">

        <div className="vh-container">

          <div className="vh-principles-head">

            <div>

              <div className="vh-label vh-label-light">
                <i />
                WHAT MATTERS TO US
              </div>

              <h2>
                Three ideas behind
                <span> your experience.</span>
              </h2>

            </div>

            <p>
              From your first question to your treatment
              discussion, we keep the experience simple.
            </p>

          </div>

          <div className="vh-principles-grid">

            {principles.map((item) => (
              <article
                className="vh-principle-card"
                key={item.number}
              >

                <div className="vh-principle-top">
                  <span>{item.number}</span>

                  <div className="vh-principle-icon">
                    {item.icon}
                  </div>
                </div>

                <div className="vh-principle-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className="vh-principle-line" />

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* TREATMENTS */}

      <section className="vh-treatments">

        <div className="vh-container">

          <div className="vh-section-head">

            <div>

              <div className="vh-label">
                <i />
                DENTAL TREATMENTS
              </div>

              <h2>
                One place for your
                <span> dental needs.</span>
              </h2>

            </div>

            <Link
              to="/services"
              className="vh-round-link"
              aria-label="View all treatments"
            >
              <ArrowUpRight size={18} />
            </Link>

          </div>

          <div className="vh-treatment-layout">

            <div className="vh-treatment-feature">

              <img
                src={images.treatment}
                alt="Dental consultation"
              />

              <div className="vh-treatment-feature-content">

                <div className="vh-feature-number">
                  01
                </div>

                <div>
                  <span>START HERE</span>

                  <h3>
                    Complete Dental Check up
                  </h3>

                  <p>
                    Begin with a clear understanding
                    of your dental needs.
                  </p>
                </div>

                <Link to="/services" className="vh-feature-arrow">
                  <ArrowUpRight size={16} />
                </Link>

              </div>

            </div>

            <div className="vh-treatment-list">

              {treatments.slice(1).map((item) => (
                <Link
                  to="/services"
                  className="vh-treatment-card"
                  key={item.number}
                >

                  <span className="vh-treatment-number">
                    {item.number}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <span className="vh-treatment-arrow">
                    <ArrowUpRight size={15} />
                  </span>

                </Link>
              ))}

            </div>

          </div>

          <div className="vh-treatment-footer">
            <span>14 dental services</span>

            <Link to="/services">
              View all treatments
              <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>

      </section>


      {/* DOCTORS */}

      <section className="vh-doctors">

        <div className="vh-container">

          <div className="vh-section-head">

            <div>

              <div className="vh-label">
                <i />
                OUR DENTISTS
              </div>

              <h2>
                Meet the people behind
                <span> your care.</span>
              </h2>

            </div>

            <Link
              to="/doctors"
              className="vh-text-link vh-doctors-desktop-link"
            >
              Meet our dentists
              <ArrowUpRight size={15} />
            </Link>

          </div>

          <div className="vh-doctors-grid">

            {doctors.map((doctor, index) => (
              <article
                className="vh-doctor-card"
                key={doctor.name}
              >

                <div className="vh-doctor-photo">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                  />

                  <span>
                    0{index + 1}
                  </span>

                </div>

                <div className="vh-doctor-info">

                  <div>

                    <small>{doctor.role}</small>

                    <h3>{doctor.name}</h3>

                    <p>{doctor.qualification}</p>

                  </div>

                  <a
                    href={`tel:${doctor.phone.replace(/\s/g, "")}`}
                    className="vh-doctor-phone"
                  >
                    <Phone size={14} />
                    {doctor.phone}
                  </a>

                </div>

              </article>
            ))}

          </div>

          <Link
            to="/doctors"
            className="vh-text-link vh-doctors-mobile-link"
          >
            Meet our dentists
            <ArrowUpRight size={15} />
          </Link>

        </div>

      </section>


      {/* IVY */}

      <section className="vh-ivy">

        <div className="vh-ivy-decoration" />

        <div className="vh-container vh-ivy-grid">

          <div className="vh-ivy-copy">

            <div className="vh-label vh-label-light">
              <i />
              MEET IVY
            </div>

            <h2>
              Your first step can be
              <span> a simple conversation.</span>
            </h2>

            <p>
              Ivy is the digital dental assistant for Vasu.
              Explore dental information and begin an
              appointment enquiry through a simple conversation.
            </p>

            <Link to="/ivy" className="vh-ivy-button">
              Talk to Ivy
              <Bot size={17} />
            </Link>

          </div>

          <div className="vh-ivy-visual">

            <div className="vh-ivy-ring vh-ring-large" />
            <div className="vh-ivy-ring vh-ring-small" />

            <div className="vh-ivy-core">

              <div>
                <Bot size={28} />
              </div>

              <strong>Ivy</strong>

              <span>Digital Dental Assistant</span>

            </div>

            <div className="vh-ivy-pill vh-pill-one">
              <i />
              Dental information
            </div>

            <div className="vh-ivy-pill vh-pill-two">
              <i />
              Appointment enquiry
            </div>

            <div className="vh-ivy-pill vh-pill-three">
              <i />
              Clinic connection
            </div>

          </div>

        </div>

      </section>


      {/* PATIENT JOURNEY */}

      <section className="vh-journey">

        <div className="vh-container vh-journey-grid">

          <div className="vh-journey-image">

            <img
              src={images.experience}
              alt="Vasu patient experience"
            />

            <div className="vh-journey-tag">
              <i />
              THE PATIENT JOURNEY
            </div>

          </div>

          <div className="vh-journey-copy">

            <div className="vh-label">
              <i />
              BEYOND THE PROCEDURE
            </div>

            <h2>
              Know what comes
              <span> next.</span>
            </h2>

            <p>
              A good experience is about more than treatment.
              It is about knowing what to expect and having
              clear information along the way.
            </p>

            <div className="vh-journey-list">

              {journey.map((item, index) => (
                <div key={item}>

                  <span>0{index + 1}</span>

                  <strong>{item}</strong>

                </div>
              ))}

            </div>

            <Link to="/experience" className="vh-text-link">
              Explore the patient journey
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

      </section>


      {/* LOCATION */}

      <section className="vh-location">

        <div className="vh-container vh-location-grid">

          <div className="vh-location-copy">

            <div className="vh-label">
              <i />
              VISIT VASU
            </div>

            <h2>
              Find us in
              <span> Rajajinagar.</span>
            </h2>

            <p>
              No. 211, 50th Cross, 3rd Block,
              Rajajinagar, Bengaluru 560010.
            </p>

            <div className="vh-location-actions">

              <Link
                to="/contact"
                className="vh-location-button"
              >
                Contact the clinic
                <ArrowUpRight size={15} />
              </Link>

              <a
                href="tel:+918431788571"
                className="vh-location-phone"
              >
                <Phone size={15} />
                +91 84317 88571
              </a>

            </div>

          </div>

          <div className="vh-address-card">

            <div className="vh-address-head">

              <div>
                <MapPin size={19} />
              </div>

              <span>
                VASU AESTHETICS
                <br />
                AND DENTAL CARE
              </span>

            </div>

            <strong>
              No. 211, 50th Cross,
              <br />
              3rd Block, Rajajinagar
              <br />
              Bengaluru 560010
            </strong>

            <Link to="/contact">
              View contact details
              <ArrowUpRight size={14} />
            </Link>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="vh-final">

        <div className="vh-container vh-final-grid">

          <div>

            <div className="vh-label vh-label-light">
              <i />
              YOUR NEXT STEP
            </div>

            <h2>
              Start with a
              <span> conversation.</span>
            </h2>

            <p>
              Tell us what you need and take the next step
              towards personalised dental care.
            </p>

          </div>

          <div className="vh-final-actions">

            <Link
              to="/appointment"
              className="vh-final-button"
            >
              <CalendarDays size={17} />
              Book an Appointment
              <ArrowUpRight size={16} />
            </Link>

            <a
              href="tel:+918431788571"
              className="vh-final-phone"
            >
              <Phone size={15} />
              +91 84317 88571
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}