import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const images = {
  hero:
    "https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1400",
  story:
    "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1200",
  care:
    "https://images.pexels.com/photos/5355903/pexels-photo-5355903.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const doctors = [
  {
    name: "Dr. Rajkamal S.",
    qualification: "BDS, FGD, FCE",
    phone: "8431788571",
    role: "Dental Care",
    image:
      "https://images.pexels.com/photos/37272297/pexels-photo-37272297.jpeg",
  },
  {
    name: "Dr. Abdul Rahim",
    qualification: "BDS",
    phone: "9900176558",
    role: "Director and Head of Candy Advanced Dental Care",
    image:
      "https://images.pexels.com/photos/28516280/pexels-photo-28516280.jpeg",
  },
];

const careAreas = [
  {
    icon: Sparkles,
    number: "01",
    title: "Smile Care",
    text: "Teeth whitening and smile makeover treatments designed around your smile goals.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Restorative Care",
    text: "Root canal treatment, crowns, bridges and tooth colored fillings for damaged teeth.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Complete Dental Care",
    text: "Check ups, cleaning, gum care, wisdom tooth treatment and children's dentistry.",
  },
];

const values = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by understanding your concerns, expectations and dental needs.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Explain",
    text: "Treatment information should be clear enough for you to make informed choices.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Care",
    text: "Your treatment journey should feel considered, comfortable and personal.",
    icon: HeartHandshake,
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}

      <section className="about-hero">
        <div className="about-hero-pattern" />

        <div className="about-container about-hero-grid">
          <div className="about-hero-copy">
            <span className="about-label">
              <i />
              ABOUT VASU AESTHETICS AND DENTAL CARE
            </span>

            <h1>
              Dental care that
              <span> starts with you.</span>
            </h1>

            <p>
              Vasu Aesthetics and Dental Care brings personalised dental care,
              thoughtful treatment planning and clear communication together
              in Rajajinagar, Bengaluru.
            </p>

            <div className="about-hero-actions">
              <Link to="/appointment" className="about-primary">
                Book an Appointment
                <span>
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              <Link to="/services" className="about-secondary">
                Explore Treatments
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="about-hero-meta">
              <span>
                <MapPin size={14} />
              </span>

              <div>
                <strong>Rajajinagar, Bengaluru</strong>
                <small>Vasu Aesthetics and Dental Care</small>
              </div>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-hero-frame">
              <img
                src={images.hero}
                alt="Dental care at Vasu Aesthetics and Dental Care"
              />
            </div>

            <div className="about-hero-stamp">
              <strong>VASU</strong>
              <span>AESTHETICS</span>
              <small>AND DENTAL CARE</small>
            </div>

            <div className="about-hero-note">
              <span>
                <Check size={16} />
              </span>

              <div>
                <strong>Personalised care</strong>
                <small>Clear guidance at every step</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}

      <section className="about-story">
        <div className="about-container about-story-grid">
          <div className="about-story-visual">
            <img
              src={images.story}
              alt="Patient receiving dental care"
              loading="lazy"
            />

            <div className="about-story-index">
              <span>01</span>
              <small>OUR STORY</small>
            </div>
          </div>

          <div className="about-story-copy">
            <span className="about-label">
              <i />
              OUR APPROACH
            </span>

            <h2>
              Care that begins with
              <span> understanding.</span>
            </h2>

            <p>
              Every patient has different dental needs. Our approach focuses
              on understanding those needs and creating a treatment journey
              that feels clear, comfortable and personalised.
            </p>

            <div className="about-value-list">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="about-value" key={item.number}>
                    <div className="about-value-icon">
                      <Icon size={18} />
                    </div>

                    <div className="about-value-content">
                      <div className="about-value-title">
                        <span>{item.number}</span>
                        <h3>{item.title}</h3>
                      </div>

                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CARE AREAS */}

      <section className="about-care">
        <div className="about-container">
          <div className="about-section-head">
            <div>
              <span className="about-label">
                <i />
                WHAT WE CARE FOR
              </span>

              <h2>
                A complete view of
                <span> dental care.</span>
              </h2>
            </div>

            <p>
              From everyday dental care to restorative and smile focused
              treatments, our services cover a wide range of dental needs.
            </p>
          </div>

          <div className="about-care-layout">
            <div className="about-care-image">
              <img
                src={images.care}
                alt="Dental professional providing care"
                loading="lazy"
              />

              <div className="about-care-image-caption">
                <span />
                Thoughtful treatment planning
              </div>
            </div>

            <div className="about-care-list">
              {careAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="about-care-item" key={item.number}>
                    <div className="about-care-number">
                      {item.number}
                    </div>

                    <div className="about-care-icon">
                      <Icon size={19} />
                    </div>

                    <div className="about-care-content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>

                      <Link to="/services">
                        Explore
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}

      <section className="about-doctors">
        <div className="about-container">
          <div className="about-doctors-head">
            <div>
              <span className="about-label light">
                <i />
                OUR DENTISTS
              </span>

              <h2>
                Meet the people behind
                <span> your dental care.</span>
              </h2>
            </div>

            <p>
              Meet the dental professionals associated with Vasu Aesthetics
              and Dental Care.
            </p>
          </div>

          <div className="about-doctor-grid">
            {doctors.map((doctor, index) => (
              <article className="about-doctor" key={doctor.name}>
                <div className="about-doctor-top">
                  <span className="about-doctor-count">
                    0{index + 1}
                  </span>

                  <span className="about-doctor-mark">
                    <img src={doctor.image} alt="" />
                    

                    {doctor.name.charAt(3)}
                  </span>
                </div>

                <div className="about-doctor-main">
                  <span>{doctor.role}</span>

                  <h3>{doctor.name}</h3>

                  <strong>{doctor.qualification}</strong>

                  {index === 1 && (
                    <p>
                      Director and Head of Candy Advanced Dental Care
                    </p>
                  )}
                </div>

                <a
                  href={`tel:${doctor.phone}`}
                  className="about-doctor-phone"
                >
                  <Phone size={14} />
                  +91 {doctor.phone.slice(0, 5)} {doctor.phone.slice(5)}
                </a>
              </article>
            ))}
          </div>

          <div className="about-doctor-footer">
            <span>Professional dental care</span>

            <Link to="/doctors">
              View dentist profiles
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION */}

      <section className="about-location">
        <div className="about-container about-location-grid">
          <div className="about-location-copy">
            <span className="about-label">
              <i />
              VISIT VASU
            </span>

            <h2>
              Your dental care,
              <span> close to you.</span>
            </h2>

            <p>
              Vasu Aesthetics and Dental Care is located at No. 211, 50th
              Cross, 3rd Block, Rajajinagar, Bengaluru 560010.
            </p>

            <Link to="/contact" className="about-location-link">
              View Contact Details
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="about-address">
            <div className="about-address-icon">
              <MapPin size={20} />
            </div>

            <span className="about-address-label">
              VASU AESTHETICS AND DENTAL CARE
            </span>

            <h3>
              No. 211, 50th Cross,
              <br />
              3rd Block, Rajajinagar
            </h3>

            <p>Bengaluru 560010</p>

            <div className="about-address-line" />
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="about-final">
        <div className="about-container about-final-inner">
          <div>
            <span className="about-label light">
              <i />
              YOUR NEXT STEP
            </span>

            <h2>
              Start with a
              <span> conversation.</span>
            </h2>

            <p>
              Take the next step towards personalised dental care at Vasu.
            </p>
          </div>

          <Link to="/appointment" className="about-final-button">
            Book an Appointment
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}