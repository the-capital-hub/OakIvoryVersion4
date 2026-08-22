import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../shared.css";
import "./Ivy.css";

const suggestions = [
  "Book an appointment",
  "Clinic hours",
  "Explore services",
  "Talk to the clinic",
];

const features = [
  {
    icon: Bot,
    title: "Answer questions",
    text: "Get quick guidance on services, clinic information and common patient questions.",
  },
  {
    icon: CalendarDays,
    title: "Book appointments",
    text: "Guide patients through service selection and the next step toward booking.",
  },
  {
    icon: Clock3,
    title: "Support 24/7",
    text: "Keep your first-response experience available even when the clinic is closed.",
  },
  {
    icon: MessageCircle,
    title: "Collect enquiries",
    text: "Capture callback requests and hand conversations to your clinic team when needed.",
  },
];

export default function Ivy() {
  const [message, setMessage] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState("");

  const handleSuggestion = (item) => {
    setActiveSuggestion(item);
    setMessage(item);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setActiveSuggestion(message);
    setMessage("");
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ivy-hero">
        <div className="ivy-hero-glow"></div>

        <div className="ivy-hero-inner">
          <div className="ivy-hero-content">
            <span className="ivy-kicker">
              <i></i>
              CLINICOS · AI RECEPTIONIST
            </span>

            <h1>
              Meet <em>Ivy.</em>
              <br />
              Your clinic's front desk,
              <span>always awake.</span>
            </h1>

            <p>
              Ivy can answer common questions, guide patients
              to the right service and help them find the next
              step — 24/7.
            </p>

            <div className="ivy-hero-actions">
              <Link
                className="ivy-primary-btn"
                to="/appointment"
              >
                Book with Ivy
                <span>
                  <CalendarDays size={15} />
                </span>
              </Link>

              <a
                className="ivy-call-link"
                href="tel:+918041234567"
              >
                <Phone size={14} />
                Call the clinic
              </a>
            </div>

            <div className="ivy-trust-row">
              <span>
                <CheckCircle2 size={15} />
                Available 24/7
              </span>

              <span>
                <CheckCircle2 size={15} />
                Patient-first guidance
              </span>

              <span>
                <CheckCircle2 size={15} />
                Easy handoff to team
              </span>
            </div>
          </div>


          {/* =================================================
              IVY CHAT DEMO
          ================================================= */}

          <div className="ivy-demo-wrap">
            <div className="ivy-demo-glow"></div>

            <div className="ivy-demo-card">

              <div className="ivy-demo-head">
                <div className="ivy-avatar">
                  <Bot size={22} />
                </div>

                <div className="ivy-demo-identity">
                  <strong>Ivy</strong>

                  <span>
                    <i></i>
                    AI Receptionist · Online
                  </span>
                </div>

                <div className="ivy-sparkle">
                  <Sparkles size={16} />
                </div>
              </div>


              <div className="ivy-demo-divider"></div>


              <div className="ivy-chat-area">

                <div className="ivy-chat-time">
                  TODAY · 10:24 AM
                </div>

                <div className="ivy-message-row">
                  <div className="ivy-mini-avatar">
                    <Bot size={13} />
                  </div>

                  <div className="ivy-bubble">
                    Hi! I'm Ivy 👋
                    <br />
                    How can I help you today?
                  </div>
                </div>


                <div className="ivy-message-row user">
                  <div className="ivy-bubble user">
                    I'd like to book a dental cleaning.
                  </div>
                </div>


                <div className="ivy-message-row">
                  <div className="ivy-mini-avatar">
                    <Bot size={13} />
                  </div>

                  <div className="ivy-bubble">
                    Of course. I can help you find the right
                    appointment.
                  </div>
                </div>


                <div className="ivy-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                  <small>Ivy is typing</small>
                </div>


                <div className="ivy-quick-label">
                  QUICK OPTIONS
                </div>

                <div className="ivy-options">
                  {suggestions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={
                        activeSuggestion === item
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        handleSuggestion(item)
                      }
                    >
                      {item}
                      <ArrowUpRight size={12} />
                    </button>
                  ))}
                </div>

              </div>


              <form
                className="ivy-chat-input"
                onSubmit={handleSend}
              >
                <input
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  placeholder="Ask Ivy anything..."
                />

                <button type="submit">
                  <Send size={15} />
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          WHAT IVY CAN DO
      ===================================================== */}

      <section className="ivy-features-section">
        <div className="ivy-section-heading">
          <div>
            <span className="ivy-eyebrow">
              <i></i>
              WHAT IVY CAN DO
            </span>

            <h2>
              A better first response for{" "}
              <em>every patient.</em>
            </h2>
          </div>

          <p>
            Ivy makes the first interaction simple, useful
            and reassuring — while keeping your clinical
            team in control.
          </p>
        </div>


        <div className="ivy-feature-grid">
          {features.map(
            ({ icon: Icon, title, text }, index) => (
              <article
                className="ivy-feature-card"
                key={title}
              >
                <div className="ivy-feature-top">
                  <span className="ivy-feature-number">
                    0{index + 1}
                  </span>

                  <div className="ivy-feature-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <span className="ivy-feature-arrow">
                  Explore
                  <ArrowUpRight size={13} />
                </span>
              </article>
            )
          )}
        </div>
      </section>


      {/* =====================================================
          PATIENT-FIRST AI
      ===================================================== */}

      <section className="ivy-human-section">
        <div className="ivy-human-inner">

          <div className="ivy-human-content">
            <span className="ivy-eyebrow light">
              <i></i>
              PATIENT-FIRST AI
            </span>

            <h2>
              AI should feel{" "}
              <em>human.</em>
            </h2>

            <p>
              Ivy is designed to make the first step easier —
              not to replace dentists or clinical judgement.
              When a patient needs your team, Ivy helps
              create a smooth handoff.
            </p>

            <div className="ivy-human-points">

              <div>
                <span>
                  <CheckCircle2 size={16} />
                </span>

                <div>
                  <strong>Simple conversations</strong>

                  <p>
                    Clear language patients can understand.
                  </p>
                </div>
              </div>


              <div>
                <span>
                  <CheckCircle2 size={16} />
                </span>

                <div>
                  <strong>Human handoff</strong>

                  <p>
                    Escalate conversations when your team
                    needs to step in.
                  </p>
                </div>
              </div>


              <div>
                <span>
                  <CheckCircle2 size={16} />
                </span>

                <div>
                  <strong>Always available</strong>

                  <p>
                    Helpful first responses, even outside
                    clinic hours.
                  </p>
                </div>
              </div>

            </div>

            <Link
              className="ivy-human-btn"
              to="/appointment"
            >
              Try the booking flow
              <CalendarDays size={15} />
            </Link>
          </div>


          <div className="ivy-human-visual">

            <div className="ivy-human-ring ring-one"></div>
            <div className="ivy-human-ring ring-two"></div>

            <div className="ivy-core">

              <div className="ivy-core-icon">
                <Bot size={32} />
              </div>

              <strong>IVY</strong>

              <span>
                AI Receptionist
              </span>

              <small>
                Always here to help
              </small>

            </div>


            <div className="ivy-floating-card card-one">
              <CheckCircle2 size={14} />

              <div>
                <strong>Patient supported</strong>
                <small>Just now</small>
              </div>
            </div>


            <div className="ivy-floating-card card-two">
              <CalendarDays size={14} />

              <div>
                <strong>Appointment guided</strong>
                <small>In a few steps</small>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="ivy-final">

        <div>
          <span className="ivy-eyebrow">
            <i></i>
            READY TO EXPERIENCE IVY?
          </span>

          <h2>
            Make your first patient interaction{" "}
            <em>feel effortless.</em>
          </h2>

          <p>
            Give patients a clearer way to ask questions,
            explore services and take the next step.
          </p>
        </div>

        <div className="ivy-final-actions">

          <Link
            to="/appointment"
            className="ivy-final-primary"
          >
            Schedule Appointment
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/contact?assistant=ivy"
            className="ivy-final-secondary"
          >
            Talk to Ivy
            <Bot size={15} />
          </Link>

        </div>

      </section>
    </>
  );
}