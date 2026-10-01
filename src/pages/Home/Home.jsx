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

const IMG = {
  hero:
    "https://images.pexels.com/photos/5355903/pexels-photo-5355903.jpeg?auto=compress&cs=tinysrgb&w=1400",

  consultation:
    "https://images.pexels.com/photos/5355894/pexels-photo-5355894.jpeg?auto=compress&cs=tinysrgb&w=1200",

  patient:
    "https://images.pexels.com/photos/5622003/pexels-photo-5622003.jpeg?auto=compress&cs=tinysrgb&w=1000",

  clinic:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
};

const treatments = [
  {
    number: "01",
    title: "Complete Dental Check up",
    text: "A clear starting point for understanding your oral health.",
  },
  {
    number: "02",
    title: "Teeth Cleaning and Polishing",
    text: "Professional cleaning focused on everyday oral care.",
  },
  {
    number: "03",
    title: "Cavity Treatment",
    text: "Focused care for teeth affected by decay.",
  },
  {
    number: "04",
    title: "Root Canal Treatment",
    text: "Treatment that helps preserve affected natural teeth.",
  },
  {
    number: "05",
    title: "Dental Implants",
    text: "A considered option for replacing missing teeth.",
  },
  {
    number: "06",
    title: "Teeth Whitening",
    text: "A brighter smile with treatment planned around you.",
  },
];

const carePrinciples = [
  {
    number: "01",
    title: "Listen first",
    text: "Your concerns and expectations begin the conversation.",
  },
  {
    number: "02",
    title: "Explain clearly",
    text: "Treatment information is shared in a simple and understandable way.",
  },
  {
    number: "03",
    title: "Plan thoughtfully",
    text: "Your dental needs guide the discussion around treatment.",
  },
];

const doctors = [
  {
    name: "Dr. Rajkamal S.",
    qualification: "BDS, FGD, FCE",
    role: "Dental Care",
    phone: "+91 84317 88571",
  },
  {
    name: "Dr. Abdul Rahim",
    qualification: "BDS",
    role: "Director and Head of Candy Advanced Dental Care",
    phone: "+91 99001 76558",
  },
];

function Image({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.style.opacity = "0";
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="vasu-home">
      {/* HERO */}

      <section className="home-hero">
        <div className="home-hero-orb orb-one" />
        <div className="home-hero-orb orb-two" />

        <div className="home-container hero-layout">
          <div className="hero-content">
            <span className="home-label">
              <i />
              VASU AESTHETICS AND DENTAL CARE
            </span>

            <h1>
              Dentistry with
              <span> clarity, care</span>
              and confidence.
            </h1>

            <p className="hero-description">
              Personalised dental care in Rajajinagar with clear
              communication, thoughtful treatment planning and a patient
              focused approach.
            </p>

            <div className="hero-buttons">
              <Link to="/appointment" className="primary-button">
                Book an Appointment
                <ArrowUpRight size={16} />
              </Link>

              <Link to="/services" className="outline-button">
                Explore Treatments
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="hero-location">
              <span className="location-icon">
                <MapPin size={15} />
              </span>

              <div>
                <strong>Rajajinagar, Bengaluru</strong>
                <small>Vasu Aesthetics and Dental Care</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <Image
                src={IMG.hero}
                alt="Dental professional caring for a patient"
              />
            </div>

            <div className="hero-image-caption">
              <span className="caption-icon">
                <Sparkles size={16} />
              </span>

              <div>
                <strong>Thoughtful dental care</strong>
                <span>Designed around your needs</span>
              </div>
            </div>

            <div className="hero-number">
              <strong>14</strong>
              <span>Dental<br />services</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>PERSONALISED CARE</span>
          <span className="hero-bottom-line" />
          <span>CLEAR GUIDANCE</span>
          <span className="hero-bottom-line" />
          <span>RAJAJINAGAR</span>
        </div>
      </section>

      {/* INTRO */}

      <section className="home-intro">
        <div className="home-container intro-layout">
          <div className="intro-heading">
            <span className="home-label">
              <i />
              A DIFFERENT APPROACH
            </span>

            <h2>
              Your dental care should feel
              <span> understandable.</span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              At Vasu Aesthetics and Dental Care, we believe good dental care
              starts with listening. Every conversation gives you an
              opportunity to understand your dental needs and the options
              available to you.
            </p>

            <Link to="/about" className="underlined-link">
              Discover Vasu
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CARE PRINCIPLES */}

      <section className="care-section">
        <div className="home-container">
          <div className="care-top">
            <div>
              <span className="home-label light">
                <i />
                THE VASU APPROACH
              </span>

              <h2>
                Three things that shape
                <span> every conversation.</span>
              </h2>
            </div>

            <p>
              From your first enquiry to your treatment discussion, the
              experience should remain clear and comfortable.
            </p>
          </div>

          <div className="care-grid">
            {carePrinciples.map((item) => (
              <article className="care-card" key={item.number}>
                <span className="care-number">{item.number}</span>

                <div className="care-card-icon">
                  {item.number === "01" && <Stethoscope size={21} />}
                  {item.number === "02" && <Check size={21} />}
                  {item.number === "03" && <Sparkles size={21} />}
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <span className="care-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}

      <section className="treatment-section">
        <div className="home-container">
          <div className="treatment-heading">
            <div>
              <span className="home-label">
                <i />
                DENTAL TREATMENTS
              </span>

              <h2>
                Care for every stage of
                <span> your smile.</span>
              </h2>
            </div>

            <Link to="/services" className="round-arrow">
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="treatment-layout">
            <div className="treatment-feature">
              <Image
                src={IMG.consultation}
                alt="Dental consultation"
              />

              <div className="feature-overlay">
                <span>01</span>

                <div>
                  <h3>Complete Dental Check up</h3>
                  <p>
                    Begin with a clear understanding of your oral health.
                  </p>
                </div>

                <Link to="/services">
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            <div className="treatment-list">
              {treatments.slice(1).map((item) => (
                <Link
                  to="/services"
                  className="treatment-row"
                  key={item.number}
                >
                  <span className="treatment-number">{item.number}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <span className="treatment-arrow">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="treatment-footer">
            <span>14 dental services available</span>

            <Link to="/services">
              View all treatments
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* DOCTORS */}

      <section className="doctors-preview">
        <div className="home-container">
          <div className="doctors-heading">
            <div>
              <span className="home-label">
                <i />
                OUR DENTISTS
              </span>

              <h2>
                Meet the people behind
                <span> your dental care.</span>
              </h2>
            </div>

            <Link to="/doctors" className="underlined-link">
              Meet our dentists
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="doctors-grid">
            {doctors.map((doctor, index) => (
              <article className="doctor-preview-card" key={doctor.name}>
                <div className="doctor-image">
                  <Image
                    src={index === 0 ? IMG.patient : IMG.clinic}
                    alt={doctor.name}
                  />

                  <span className="doctor-index">0{index + 1}</span>
                </div>

                <div className="doctor-info">
                  <div>
                    <span className="doctor-role">{doctor.role}</span>
                    <h3>{doctor.name}</h3>
                    <p>{doctor.qualification}</p>
                  </div>

                  <a
                    href={`tel:${doctor.phone.replace(/\s/g, "")}`}
                    className="doctor-phone"
                  >
                    <Phone size={14} />
                    {doctor.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IVY */}

      <section className="ivy-section">
        <div className="home-container ivy-layout">
          <div className="ivy-copy">
            <span className="home-label light">
              <i />
              MEET IVY
            </span>

            <h2>
              A simpler way to
              <span> connect with Vasu.</span>
            </h2>

            <p>
              Ivy is the digital dental assistant for Vasu Aesthetics and
              Dental Care. Use Ivy to explore dental information and begin an
              appointment enquiry.
            </p>

            <Link to="/ivy" className="ivy-button">
              Talk to Ivy
              <Bot size={16} />
            </Link>
          </div>

          <div className="ivy-orbit">
            <div className="ivy-orbit-ring" />

            <div className="ivy-center">
              <div className="ivy-icon-large">
                <Bot size={31} />
              </div>

              <strong>Ivy</strong>
              <span>Digital Dental Assistant</span>
            </div>

            <div className="ivy-point point-one">
              <span />
              Dental information
            </div>

            <div className="ivy-point point-two">
              <span />
              Appointment enquiry
            </div>

            <div className="ivy-point point-three">
              <span />
              Clinic connection
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section className="experience-section">
        <div className="home-container experience-layout">
          <div className="experience-image">
            <Image
              src={IMG.clinic}
              alt="Vasu dental care environment"
            />

            <div className="experience-label">
              <span />
              THE VASU EXPERIENCE
            </div>
          </div>

          <div className="experience-content">
            <span className="home-label">
              <i />
              BEYOND THE PROCEDURE
            </span>

            <h2>
              Good dental care is also about
              <span> how you feel.</span>
            </h2>

            <p>
              A comfortable experience begins with clear communication,
              thoughtful guidance and enough space to understand what comes
              next.
            </p>

            <div className="experience-points">
              <div>
                <span>01</span>
                <strong>Feel heard</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Understand your options</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Move forward with clarity</strong>
              </div>
            </div>

            <Link to="/experience" className="underlined-link">
              Explore the patient journey
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION */}

      <section className="location-section">
        <div className="home-container location-layout">
          <div className="location-content">
            <span className="home-label">
              <i />
              VISIT VASU
            </span>

            <h2>
              Find us in
              <span> Rajajinagar.</span>
            </h2>

            <p>
              No. 211, 50th Cross, 3rd Block, Rajajinagar, Bengaluru 560010.
            </p>

            <div className="location-actions">
              <Link to="/contact" className="primary-button">
                Contact the clinic
                <ArrowUpRight size={15} />
              </Link>

              <a href="tel:+918431788571" className="location-call">
                <Phone size={15} />
                +91 84317 88571
              </a>
            </div>
          </div>

          <div className="location-card">
            <div className="location-card-top">
              <div className="location-pin">
                <MapPin size={20} />
              </div>

              <span>VASU AESTHETICS AND DENTAL CARE</span>
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

      <section className="home-final">
        <div className="home-container final-layout">
          <div>
            <span className="home-label light">
              <i />
              YOUR NEXT STEP
            </span>

            <h2>
              Start with a
              <span> conversation.</span>
            </h2>

            <p>
              Tell us what you need and take the next step towards
              personalised dental care.
            </p>
          </div>

          <div className="final-actions">
            <Link to="/appointment" className="final-button">
              <CalendarDays size={17} />
              Book an Appointment
              <ArrowUpRight size={16} />
            </Link>

            <a href="tel:+918431788571" className="final-phone">
              <Phone size={15} />
              +91 84317 88571
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}