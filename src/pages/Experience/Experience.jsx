import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Smile,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../shared.css";
import "./Experience.css";

const journeySteps = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Book an Appointment",
    text: "Choose the dental care you need and take the first step toward your visit.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Meet Your Specialist",
    text: "Discuss your concerns, ask questions and understand your care clearly.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Personalize Your Treatment",
    text: "Understand the available treatment direction based on your dental needs.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Follow Your Progress",
    text: "Continue your care with appropriate follow up and guidance.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Stay Connected",
    text: "Keep communication open when you have questions about your dental care.",
  },
  {
    number: "06",
    icon: Smile,
    title: "Smile with Confidence",
    text: "Move forward with greater confidence in your dental care journey.",
  },
];

export default function Experience() {
  return (
    <main className="experience-page">

      {/* HERO */}
      <section className="experience-hero">
        <div className="experience-hero-inner">

          <div className="experience-hero-content">

            <span className="experience-eyebrow">
              <i />
              YOUR PATIENT JOURNEY
            </span>

            <h1>
              Dental care that feels
              <span> clear from the start.</span>
            </h1>

            <p>
              From your first appointment to ongoing care, every stage is
              designed around clear communication and a comfortable experience.
            </p>

            <div className="experience-actions">

              <Link
                to="/appointment"
                className="experience-primary-btn"
              >
                Book a Consultation
                <span>
                  <CalendarDays size={15} />
                </span>
              </Link>

              <Link
                to="/services"
                className="experience-secondary-btn"
              >
                Explore Treatments
                <ArrowUpRight size={15} />
              </Link>

            </div>

            <div className="experience-proof">

              <div>
                <CheckCircle2 size={15} />
                <span>Clear communication</span>
              </div>

              <div>
                <CheckCircle2 size={15} />
                <span>Personalised attention</span>
              </div>

            </div>

          </div>

          <div className="experience-hero-visual">

            <div className="experience-hero-frame">
              <img
                src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Patient receiving dental care"
              />
            </div>

            <div className="experience-hero-note">
              <span>01</span>

              <div>
                <strong>Start with a conversation</strong>
                <small>
                  Understand your needs before moving forward.
                </small>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="experience-intro">

        <div className="experience-intro-number">
          01
        </div>

        <div className="experience-intro-content">

          <span className="experience-eyebrow">
            <i />
            THE VASU EXPERIENCE
          </span>

          <h2>
            One journey.
            <span> Clear next steps.</span>
          </h2>

          <p>
            Dental care can feel easier when you know what to expect.
            Our patient journey brings together consultation, treatment
            planning and continued care in a simple flow.
          </p>

        </div>

      </section>


      {/* JOURNEY */}
      <section className="experience-journey">

        <div className="experience-journey-heading">

          <span className="experience-eyebrow">
            <i />
            SIX SIMPLE STAGES
          </span>

          <h2>
            From your first visit
            <span> to ongoing care.</span>
          </h2>

        </div>

        <div className="experience-journey-grid">

          {journeySteps.map(
            ({ number, icon: Icon, title, text }) => (
              <article
                className="experience-step"
                key={number}
              >

                <div className="experience-step-top">
                  <span>{number}</span>

                  <div className="experience-step-icon">
                    <Icon size={20} />
                  </div>
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <div className="experience-step-arrow">
                  <ArrowUpRight size={15} />
                </div>

              </article>
            )
          )}

        </div>

      </section>


      {/* FIRST VISIT */}
      <section className="experience-visit">

        <div className="experience-visit-visual">

          <img
            src="https://images.pexels.com/photos/6627465/pexels-photo-6627465.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Dental consultation"
            loading="lazy"
          />

          <div className="experience-visit-tag">
            <span>02</span>
            <strong>Your first visit</strong>
          </div>

        </div>

        <div className="experience-visit-content">

          <span className="experience-eyebrow">
            <i />
            WHAT TO EXPECT
          </span>

          <h2>
            Come prepared.
            <span> Leave with clarity.</span>
          </h2>

          <p>
            Your first visit is an opportunity to discuss your concerns,
            understand your dental needs and talk through suitable treatment
            options.
          </p>

          <div className="experience-checks">

            <div>
              <span>
                <CheckCircle2 size={15} />
              </span>
              <p>Share your concerns and goals</p>
            </div>

            <div>
              <span>
                <CheckCircle2 size={15} />
              </span>
              <p>Discuss your dental history</p>
            </div>

            <div>
              <span>
                <CheckCircle2 size={15} />
              </span>
              <p>Understand your treatment options</p>
            </div>

            <div>
              <span>
                <CheckCircle2 size={15} />
              </span>
              <p>Discuss your next step</p>
            </div>

          </div>

          <Link
            to="/appointment"
            className="experience-outline-btn"
          >
            Book Your First Visit
            <ArrowUpRight size={15} />
          </Link>

        </div>

      </section>


      {/* IVY */}
      <section className="experience-ivy">

        <div className="experience-ivy-inner">

          <div className="experience-ivy-copy">

            <span className="experience-eyebrow light">
              <i />
              MEET IVY
            </span>

            <h2>
              Have a question?
              <span> Start with Ivy.</span>
            </h2>

            <p>
              Ivy is the digital dental assistant experience created to help
              you explore information and understand the next step in your
              patient journey.
            </p>

            <div className="ivy-benefits">

              <div>
                <CheckCircle2 size={15} />
                <span>Common dental questions</span>
              </div>

              <div>
                <CheckCircle2 size={15} />
                <span>Appointment guidance</span>
              </div>

              <div>
                <CheckCircle2 size={15} />
                <span>General care information</span>
              </div>

            </div>

            <Link
              to="/contact?assistant=ivy"
              className="experience-ivy-btn"
            >
              Talk to Ivy
              <ArrowUpRight size={15} />
            </Link>

          </div>

          <div className="experience-ivy-visual">

            <div className="ivy-circle ivy-circle-large">
              <span>IVY</span>
            </div>

            <div className="ivy-circle ivy-circle-small one">
              <MessageCircle size={17} />
            </div>

            <div className="ivy-circle ivy-circle-small two">
              <CalendarDays size={17} />
            </div>

            <div className="ivy-orbit-line" />

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="experience-final">

        <div className="experience-final-inner">

          <div>

            <span className="experience-eyebrow light">
              <i />
              YOUR NEXT STEP
            </span>

            <h2>
              Ready to begin your
              <span> dental journey?</span>
            </h2>

            <p>
              Book a consultation with Vasu Aesthetics and Dental Care.
            </p>

          </div>

          <div className="experience-final-actions">

            <Link
              to="/appointment"
              className="experience-final-primary"
            >
              Book Appointment
              <CalendarDays size={15} />
            </Link>

            <Link
              to="/contact"
              className="experience-final-secondary"
            >
              Contact Us
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}