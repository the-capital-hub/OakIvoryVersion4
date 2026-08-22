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
    text: "Choose the service you need and a time that works comfortably for you.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Meet Your Specialist",
    text: "Discuss your concerns, ask questions and receive a clear treatment plan.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Personalize Your Treatment",
    text: "Move forward with care designed around your needs, goals and comfort.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Follow Your Progress",
    text: "Regular follow-up and guidance help keep your oral health on track.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Stay Connected",
    text: "Our team and Ivy make questions, support and follow-up easier between visits.",
  },
  {
    number: "06",
    icon: Smile,
    title: "Smile with Confidence",
    text: "Enjoy healthier gums, better function and confidence in your long-term care.",
  },
];

export default function Experience() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="experience-hero">
        <div className="experience-hero-inner">
          <div className="experience-hero-content">
            <span className="experience-kicker">
              <i></i>
              OUR PATIENT JOURNEY
            </span>

            <h1>
              A simpler path to{" "}
              <em>better oral health.</em>
            </h1>

            <p>
              From your first question to ongoing care, we make
              every step clear, comfortable and personalized.
            </p>

            <div className="experience-hero-actions">
              <Link
                to="/appointment"
                className="experience-primary-btn"
              >
                Start Your Journey
                <span>
                  <ArrowUpRight size={15} />
                </span>
              </Link>

              <Link
                to="/services"
                className="experience-text-btn"
              >
                Explore our services
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="experience-trust">
              <span>
                <CheckCircle2 size={15} />
                Clear treatment plans
              </span>

              <span>
                <CheckCircle2 size={15} />
                Personalised support
              </span>
            </div>
          </div>

          <div className="experience-hero-visual">
            <div className="experience-hero-image">
              <img
                src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Patient receiving dental care"
              />
            </div>

            <div className="experience-hero-card">
              <span>
                <CheckCircle2 size={17} />
              </span>

              <div>
                <strong>Every step, explained</strong>
                <small>
                  Clear care from consultation to follow-up
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          JOURNEY INTRO
      ===================================================== */}

      <section className="experience-intro">
        <div className="experience-intro-heading">
          <span className="experience-eyebrow">
            <i></i>
            SIMPLE STEPS
          </span>

          <h2>
            Your journey,{" "}
            <em>step by step.</em>
          </h2>
        </div>

        <div className="experience-intro-copy">
          <p>
            Good dental care should not feel complicated. We
            guide you through each stage so you always know
            what happens next.
          </p>

          <span className="experience-intro-line"></span>
        </div>
      </section>


      {/* =====================================================
          JOURNEY TIMELINE
      ===================================================== */}

      <section className="experience-journey">
        <div className="experience-journey-line"></div>

        <div className="experience-steps">
          {journeySteps.map(
            ({ number, icon: Icon, title, text }, index) => (
              <article
                className={`experience-step ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={number}
              >
                <div className="experience-step-content">
                  <span className="experience-step-number">
                    {number}
                  </span>

                  <div className="experience-step-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <span className="experience-step-link">
                    {number === "01"
                      ? "Begin here"
                      : number === "06"
                      ? "Your result"
                      : "Next step"}

                    <ArrowUpRight size={13} />
                  </span>
                </div>

                <div className="experience-step-dot">
                  <span></span>
                </div>
              </article>
            )
          )}
        </div>
      </section>


      {/* =====================================================
          BEFORE YOUR VISIT
      ===================================================== */}

      <section className="experience-before">
        <div className="experience-before-image">
          <img
            src="https://images.pexels.com/photos/6627465/pexels-photo-6627465.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Dental consultation"
            loading="lazy"
          />

          <div className="experience-image-label">
            <span>02</span>

            <div>
              <strong>Meet your specialist</strong>
              <small>
                Questions first. Treatment second.
              </small>
            </div>
          </div>
        </div>

        <div className="experience-before-content">
          <span className="experience-eyebrow">
            <i></i>
            WHAT TO EXPECT
          </span>

          <h2>
            Come prepared.{" "}
            <em>Leave reassured.</em>
          </h2>

          <p>
            Your first visit is about understanding you. We
            listen to your concerns, review your oral health
            and explain the available options clearly.
          </p>

          <div className="experience-check-list">
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
              <p>Agree on your next step together</p>
            </div>
          </div>

          <Link
            to="/appointment"
            className="experience-outline-btn"
          >
            Book Your First Visit
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>


      {/* =====================================================
          IVY SUPPORT
      ===================================================== */}

      <section className="experience-ivy">
        <div className="experience-ivy-inner">
          <div className="experience-ivy-content">
            <span className="experience-eyebrow light">
              <i></i>
              24/7 DIGITAL SUPPORT
            </span>

            <h2>
              Need help between visits?{" "}
              <em>Ivy is here.</em>
            </h2>

            <p>
              Ask questions, understand services, explore
              appointment options and get guidance without
              waiting for office hours.
            </p>

            <div className="experience-ivy-points">
              <span>
                <CheckCircle2 size={15} />
                Answers to common questions
              </span>

              <span>
                <CheckCircle2 size={15} />
                Appointment guidance
              </span>

              <span>
                <CheckCircle2 size={15} />
                Support between visits
              </span>
            </div>

            <Link
              className="experience-ivy-btn"
              to="/contact?assistant=ivy"
            >
              Talk to Ivy
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="experience-ivy-visual">
            <div className="experience-ivy-orbit">
              <span>IVY</span>
            </div>

            <div className="experience-ivy-floating one">
              <MessageCircle size={15} />
              <span>Ask a question</span>
            </div>

            <div className="experience-ivy-floating two">
              <CalendarDays size={15} />
              <span>Find an appointment</span>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="experience-final">
        <div>
          <span className="experience-eyebrow">
            <i></i>
            READY WHEN YOU ARE
          </span>

          <h2>
            Your next step can start{" "}
            <em>today.</em>
          </h2>

          <p>
            Take the first step toward healthier oral health
            with a consultation designed around you.
          </p>
        </div>

        <div className="experience-final-actions">
          <Link
            to="/appointment"
            className="experience-final-primary"
          >
            Schedule Appointment
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/contact"
            className="experience-final-secondary"
          >
            Contact our team
          </Link>
        </div>
      </section>
    </>
  );
}