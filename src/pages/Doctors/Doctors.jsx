import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Phone,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../shared.css";
import "./Doctors.css";

const doctors = [
  {
    name: "Dr. Rajkamal S.",
    role: "Dental Surgeon",
    qualification: "BDS, FGD, FCE",
    phone: "8431788571",
    image:
      "https://images.pexels.com/photos/37272297/pexels-photo-37272297.jpeg",
  },
  {
    name: "Dr. Abdul Rahim",
    role: "Director and Head",
    qualification: "BDS",
    description: "Director and Head of Candy Advanced Dental Care",
    phone: "9900176558",
    image:
      "https://images.pexels.com/photos/28516280/pexels-photo-28516280.jpeg",
  },
];

const carePoints = [
  {
    icon: HeartHandshake,
    title: "Patient Focused Care",
    text: "Every consultation begins with understanding your concerns and dental needs.",
  },
  {
    icon: ShieldCheck,
    title: "Thoughtful Treatment",
    text: "Treatment options are discussed clearly so you understand your next step.",
  },
  {
    icon: Sparkles,
    title: "Complete Dental Care",
    text: "Your dental needs remain at the centre of the care experience.",
  },
];

const philosophyPoints = [
  "Clear treatment explanations",
  "Personalised treatment planning",
  "Comfort focused patient experience",
  "Long term oral care guidance",
];

export default function Doctors() {
  return (
    <main className="doctors-page">

      {/* HERO */}
      <section className="doctors-hero">
        <div className="doctors-hero-inner">

          <div className="doctors-hero-copy">
            <span className="doctors-eyebrow">
              <i />
              OUR DENTAL TEAM
            </span>

            <h1>
              Meet the people
              <span> behind your care.</span>
            </h1>

            <p>
              Get to know the dental professionals associated with Vasu
              Aesthetics and Dental Care.
            </p>

            <div className="doctors-hero-actions">
              <Link to="/appointment" className="doctors-primary-btn">
                <span>Book a Consultation</span>
                <CalendarDays size={16} />
              </Link>

              <a href="#our-doctors" className="doctors-link-btn">
                Meet Our Doctors
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="doctors-hero-note">
              <CheckCircle2 size={15} />
              <span>Personalised attention and clear communication</span>
            </div>
          </div>

          <div className="doctors-hero-side">

            <div className="hero-image-wrap">
              <img
                src={doctors[0].image}
                alt="Dr. Rajkamal S."
              />

              <div className="hero-image-caption">
                <span>01</span>
                <div>
                  <strong>Dr. Rajkamal S.</strong>
                  <small>BDS, FGD, FCE</small>
                </div>
              </div>
            </div>

            <div className="hero-side-info">
              <span className="hero-side-number">02</span>
              <div>
                <strong>Dental Professionals</strong>
                <small>Associated with Vasu Aesthetics and Dental Care</small>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="doctors-intro">
        <div className="doctors-intro-inner">

          <div className="intro-number">
            01
          </div>

          <div className="intro-content">
            <span className="doctors-eyebrow">
              <i />
              OUR APPROACH
            </span>

            <h2>
              Dental care starts with
              <span> understanding you.</span>
            </h2>

            <p>
              Your concerns deserve time, attention and clear communication.
              The focus is on understanding your needs before discussing the
              appropriate treatment direction.
            </p>

            <Link to="/contact" className="doctors-outline-btn">
              Talk to Our Team
              <ArrowUpRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* DOCTORS */}
      <section className="doctors-team" id="our-doctors">

        <div className="doctors-team-heading">
          <div>
            <span className="doctors-eyebrow">
              <i />
              OUR DOCTORS
            </span>

            <h2>
              Meet your dental
              <span> care team.</span>
            </h2>
          </div>

          <p>
            Learn more about the professionals associated with Vasu
            Aesthetics and Dental Care.
          </p>
        </div>

        <div className="doctors-list">

          {doctors.map((doctor, index) => (
            <article className="doctor-profile" key={doctor.name}>

              <div className="doctor-profile-number">
                0{index + 1}
              </div>

              <div className="doctor-profile-image">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                />
              </div>

              <div className="doctor-profile-content">

                <span className="doctor-label">
                  VASU DENTAL CARE
                </span>

                <h3>{doctor.name}</h3>

                <strong className="doctor-role">
                  {doctor.role}
                </strong>

                <div className="doctor-qualification">
                  <CheckCircle2 size={15} />
                  <span>{doctor.qualification}</span>
                </div>

                {doctor.description && (
                  <p className="doctor-description">
                    {doctor.description}
                  </p>
                )}

                <div className="doctor-contact-row">

                  <a
                    href={`tel:+91${doctor.phone}`}
                    className="doctor-phone"
                  >
                    <Phone size={14} />
                    <span>{doctor.phone}</span>
                  </a>

                  <Link
                    to="/appointment"
                    className="doctor-appointment-link"
                  >
                    Book Consultation
                    <ArrowUpRight size={14} />
                  </Link>

                </div>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* CARE */}
      <section className="doctors-care">

        <div className="doctors-care-inner">

          <div className="doctors-care-intro">
            <span className="doctors-eyebrow light">
              <i />
              HOW WE CARE
            </span>

            <h2>
              A more thoughtful
              <span> dental experience.</span>
            </h2>

            <p>
              Good dental care is not only about treatment. It is also about
              how clearly you understand your care and how comfortable you
              feel throughout the experience.
            </p>
          </div>

          <div className="doctors-care-grid">

            {carePoints.map(({ icon: Icon, title, text }, index) => (
              <article className="care-card" key={title}>

                <div className="care-card-top">
                  <span>0{index + 1}</span>

                  <div className="care-icon">
                    <Icon size={19} />
                  </div>
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="doctors-philosophy">

        <div className="philosophy-visual">

          <img
            src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Patient receiving dental care"
            loading="lazy"
          />

          <div className="philosophy-label">
            <span>VASU</span>
            <small>AESTHETICS AND DENTAL CARE</small>
          </div>

        </div>

        <div className="philosophy-content">

          <span className="doctors-eyebrow">
            <i />
            CLINICAL APPROACH
          </span>

          <h2>
            Clear thinking behind
            <span> every conversation.</span>
          </h2>

          <p>
            Understanding your dental needs is an important part of deciding
            the right direction for your care. We focus on clear explanations
            and personalised treatment planning.
          </p>

          <div className="philosophy-list">
            {philosophyPoints.map((point) => (
              <div key={point}>
                <span>
                  <CheckCircle2 size={14} />
                </span>

                <p>{point}</p>
              </div>
            ))}
          </div>

          <Link to="/appointment" className="doctors-outline-btn">
            Book a Consultation
            <CalendarDays size={15} />
          </Link>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="doctors-final">

        <div className="doctors-final-inner">

          <div>
            <span className="doctors-eyebrow light">
              <i />
              YOUR NEXT VISIT
            </span>

            <h2>
              Start your dental care with
              <span> a conversation.</span>
            </h2>

            <p>
              Book a consultation with Vasu Aesthetics and Dental Care.
            </p>
          </div>

          <Link to="/appointment" className="doctors-final-btn">
            Schedule Appointment
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}