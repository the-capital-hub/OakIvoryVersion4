import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, CheckCircle2 } from "lucide-react";
import "../shared.css";
import "./Doctors.css";

const doctors = [
  {
    name: "Dr. Ananya Rao",
    role: "Founder & Lead Dentist",
    specialty: "Cosmetic & Restorative Dentistry",
    experience: "20+ Years Experience",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Dr. Rohan Mehta",
    role: "Associate Dentist",
    specialty: "Periodontal & Preventive Care",
    experience: "12+ Years Experience",
    image:
      "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Dr. Meera Shah",
    role: "Cosmetic & Restorative Dentist",
    specialty: "Smile & Restorative Dentistry",
    experience: "10+ Years Experience",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Priya Nair",
    role: "Clinic Manager",
    specialty: "Patient Experience & Care",
    experience: "8+ Years Experience",
    image:
      "https://images.pexels.com/photos/7659574/pexels-photo-7659574.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

export default function Doctors() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="page-hero">
        <div className="page-hero-inner">
          <div>
            <span className="kicker">Meet Our Care Team</span>

            <h1>
              Specialists who care about the{" "}
              <em>whole journey.</em>
            </h1>

            <p>
              Our clinicians combine specialist training, modern dentistry
              and a calm, patient-first approach. Every recommendation begins
              with understanding what matters to you.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "22px",
              }}
            >
              <Link
                className="button-primary"
                to="/appointment"
              >
                Meet With Our Team
                <CalendarDays size={14} />
              </Link>

              <Link
                className="text-link"
                to="/experience"
                style={{ alignSelf: "center" }}
              >
                See Patient Journey
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="page-hero-photo">
            <img
              src={doctors[0].image}
              alt="Dr. Ananya Rao"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCTOR GRID
      ===================================================== */}

      <section className="content-section">
        <span className="eyebrow">
          Our Specialists
        </span>

        <h2 className="section-title">
          Experienced hands.{" "}
          <em>Thoughtful care.</em>
        </h2>

        <p className="section-copy">
          Meet the people behind Oak & Ivory Dental. Our team works together
          to make treatment clearer, more comfortable and focused on
          long-term oral health.
        </p>

        <div
          className="card-grid"
          style={{
            marginTop: "38px",
          }}
        >
          {doctors.map((doctor) => (
            <article
              className="info-card doctor-profile-card"
              key={doctor.name}
            >
              <div className="card-image">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                />
              </div>

              <div style={{ padding: "0 4px 4px" }}>
                <h3>{doctor.name}</h3>

                <p
                  style={{
                    marginBottom: "5px",
                    color: "#287f7a",
                    fontWeight: 700,
                  }}
                >
                  {doctor.role}
                </p>

                <p>
                  {doctor.specialty}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    margin: "10px 0 13px",
                    color: "#708a86",
                    fontSize: "9px",
                    fontWeight: 700,
                  }}
                >
                  <CheckCircle2
                    size={13}
                    color="#35bdb6"
                  />

                  {doctor.experience}
                </div>

                <Link
                  to="/appointment"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "10px",
                    fontWeight: 800,
                    color: "#075b57",
                  }}
                >
                  Book a consultation
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          CLINICAL PHILOSOPHY
      ===================================================== */}

      <section className="content-section split">
        <div>
          <span className="eyebrow">
            Clinical Philosophy
          </span>

          <h2 className="section-title">
            Precision with a{" "}
            <em>human touch.</em>
          </h2>

          <p className="section-copy">
            We explain your options clearly, use modern diagnostics and
            build treatment plans around long-term oral health rather than
            one-off fixes.
          </p>

          <div className="feature-list">
            <div>
              <span>✓</span>
              Clear treatment explanations
            </div>

            <div>
              <span>✓</span>
              Modern diagnostic technology
            </div>

            <div>
              <span>✓</span>
              Personalized treatment planning
            </div>

            <div>
              <span>✓</span>
              Long-term patient support
            </div>
          </div>

          <Link
            className="button-primary"
            to="/appointment"
          >
            Book a Consultation
            <CalendarDays size={14} />
          </Link>
        </div>

        <div className="image-card">
          <img
            src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Dental team providing patient care"
          />
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="dark-section">
        <div className="dark-inner">
          <div className="split">
            <div>
              <span
                className="eyebrow"
                style={{ color: "#8ce7e1" }}
              >
                READY WHEN YOU ARE
              </span>

              <h2
                className="section-title"
                style={{ color: "white" }}
              >
                Start with a conversation.{" "}
                <em>We'll take it from there.</em>
              </h2>

              <p className="section-copy">
                Tell us what you need help with and our team will guide you
                toward the right next step.
              </p>

              <Link
                className="button-primary"
                to="/appointment"
              >
                Schedule Appointment
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div
              className="image-card"
              style={{ height: "320px" }}
            >
              <img
                src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Patient consultation with dental professional"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}