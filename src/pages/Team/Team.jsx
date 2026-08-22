import { ArrowUpRight, CheckCircle2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import "../shared.css";
import "./Team.css";

const people = [
  {
    name: "Dr. Ananya Rao",
    role: "Founder & Lead Dentist",
    specialty: "Periodontics & Preventive Care",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200",
    experience: "15+ years",
    slug: "ananya-rao",
  },
  {
    name: "Dr. Rohan Mehta",
    role: "Associate Dentist",
    specialty: "Implant & General Dentistry",
    image:
      "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1200",
    experience: "10+ years",
    slug: "rohan-mehta",
  },
  {
    name: "Dr. Meera Shah",
    role: "Cosmetic & Restorative Dentist",
    specialty: "Cosmetic & Restorative Care",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200",
    experience: "8+ years",
    slug: "meera-shah",
  },
];

const patientTypes = [
  {
    number: "01",
    title: "Gum Health",
    text: "For patients managing bleeding gums, gum disease or changes in periodontal health.",
  },
  {
    number: "02",
    title: "Implant Care",
    text: "For patients exploring dental implants or needing ongoing implant maintenance.",
  },
  {
    number: "03",
    title: "Smile & Restorative",
    text: "For patients looking for restorative, cosmetic or confidence-building care.",
  },
];

export default function Team() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="team-hero">
        <div className="team-hero-inner">
          <div className="team-hero-content">
            <span className="team-kicker">
              <i></i>
              OUR DENTISTS
            </span>

            <h1>
              Meet the people behind{" "}
              <em>your care.</em>
            </h1>

            <p>
              Experienced clinicians, thoughtful communication and
              modern dental care — brought together to make every
              patient feel informed and comfortable.
            </p>

            <div className="team-hero-actions">
              <Link
                to="/appointment"
                className="team-primary-btn"
              >
                Book an Appointment
                <span>
                  <ArrowUpRight size={15} />
                </span>
              </Link>

              <Link
                to="/contact"
                className="team-text-btn"
              >
                Talk to our team
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="team-trust-row">
              <span>
                <CheckCircle2 size={15} />
                Specialist-led care
              </span>

              <span>
                <CheckCircle2 size={15} />
                Patient-first approach
              </span>
            </div>
          </div>

          <div className="team-hero-visual">
            <div className="team-hero-image">
              <img
                src="https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Oak and Ivory dental team"
              />
            </div>

            <div className="team-hero-card">
              <div className="team-hero-card-icon">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <strong>A team you can trust</strong>
                <small>
                  Experience, expertise & empathy
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          PATIENT TYPES
      ===================================================== */}

      <section className="team-patients-section">
        <div className="team-section-heading">
          <div>
            <span className="team-eyebrow">
              <i></i>
              WHO WE HELP
            </span>

            <h2>
              Care designed around{" "}
              <em>your needs.</em>
            </h2>
          </div>

          <p>
            Whether you are visiting for prevention, treatment
            or a complete smile transformation, our team starts
            by understanding what matters to you.
          </p>
        </div>

        <div className="team-patient-grid">
          {patientTypes.map((item) => (
            <article
              className="team-patient-card"
              key={item.number}
            >
              <span className="team-patient-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <Link to="/services">
                Explore care
                <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>


      {/* =====================================================
          DOCTORS
      ===================================================== */}

      <section className="team-doctors-section">
        <div className="team-doctors-heading">
          <span className="team-eyebrow">
            <i></i>
            OUR SPECIALISTS
          </span>

          <h2>
            Expertise with a{" "}
            <em>human approach.</em>
          </h2>

          <p>
            Get to know the clinicians who will guide your care
            from your first consultation to long-term follow-up.
          </p>
        </div>

        <div className="team-doctors-grid">
          {people.map((person, index) => (
            <article
              className="team-doctor-card"
              key={person.name}
            >
              <div className="team-doctor-image">
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                />

                <span className="team-doctor-number">
                  0{index + 1}
                </span>

                <div className="team-doctor-overlay">
                  <Link to={`/team/${person.slug}`}>
                    View Profile
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="team-doctor-content">
                <div>
                  <h3>{person.name}</h3>

                  <span className="team-doctor-role">
                    {person.role}
                  </span>

                  <p>{person.specialty}</p>
                </div>

                <div className="team-doctor-meta">
                  <span>
                    <GraduationCap size={14} />
                    {person.experience}
                  </span>

                  <Link to={`/team/${person.slug}`}>
                    Profile
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* =====================================================
          CARE APPROACH
      ===================================================== */}

      <section className="team-approach-section">
        <div className="team-approach-inner">
          <div className="team-approach-image">
            <img
              src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dentist speaking with patient"
              loading="lazy"
            />

            <div className="team-approach-badge">
              <strong>01</strong>

              <span>
                Listen first
                <small>Understand before we recommend</small>
              </span>
            </div>
          </div>

          <div className="team-approach-content">
            <span className="team-eyebrow light">
              <i></i>
              OUR APPROACH
            </span>

            <h2>
              Great dentistry starts with{" "}
              <em>great conversations.</em>
            </h2>

            <p>
              We don't believe in rushing patients through a
              treatment plan. Our clinicians take time to listen,
              explain your options and make sure you understand
              the next step.
            </p>

            <div className="team-approach-points">
              <div>
                <CheckCircle2 size={17} />
                <span>Understand your concerns</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Explain every treatment option</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Create a plan together</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Support you beyond treatment</span>
              </div>
            </div>

            <Link
              to="/appointment"
              className="team-approach-btn"
            >
              Meet with a dentist
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="team-final-cta">
        <div>
          <span className="team-eyebrow">
            <i></i>
            YOUR NEXT STEP
          </span>

          <h2>
            Ready to meet your{" "}
            <em>care team?</em>
          </h2>

          <p>
            Book a consultation and let our team help you
            understand the right next step for your smile.
          </p>
        </div>

        <div className="team-final-actions">
          <Link
            to="/appointment"
            className="team-final-primary"
          >
            Schedule Appointment
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/contact"
            className="team-final-secondary"
          >
            Contact our team
          </Link>
        </div>
      </section>
    </>
  );
}