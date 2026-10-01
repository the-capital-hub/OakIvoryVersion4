import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  Check,
  CheckCircle2,
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
  "Explore services",
  "Talk to the clinic",
  "Understand treatments",
];

const guidance = [
  {
    number: "01",
    title: "Ask what you need",
    text: "Start with a simple question about your dental care.",
  },
  {
    number: "02",
    title: "Explore your options",
    text: "Understand the services and information relevant to you.",
  },
  {
    number: "03",
    title: "Choose your next step",
    text: "Move towards an appointment or connect with the team.",
  },
];

export default function Ivy() {
  const [message, setMessage] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState("");

  const handleSuggestion = (item) => {
    setActiveSuggestion(item);
    setMessage(item);
  };

  const handleSend = (event) => {
    event.preventDefault();

    if (!message.trim()) return;

    setActiveSuggestion(message);
    setMessage("");
  };

  return (
    <main className="ivy-page">

      {/* HERO */}

      <section className="ivy-hero">

        <div className="ivy-hero-circle ivy-circle-one" />
        <div className="ivy-hero-circle ivy-circle-two" />

        <div className="ivy-container ivy-hero-inner">

          <div className="ivy-hero-copy">

            <span className="ivy-label light">
              <i />
              VASU PATIENT EXPERIENCE
            </span>

            <div className="ivy-title-mark">
              <div className="ivy-title-icon">
                <Sparkles size={17} />
              </div>

              <span>MEET IVY</span>
            </div>

            <h1>
              Start your dental
              <em> journey with Ivy.</em>
            </h1>

            <p>
              A simple digital space to explore dental services,
              understand your options and decide what you would
              like to do next with Vasu Aesthetics and Dental Care.
            </p>

            <div className="ivy-hero-actions">

              <Link
                to="/appointment"
                className="ivy-primary"
              >
                Book an Appointment
                <span>
                  <ArrowUpRight size={15} />
                </span>
              </Link>

              <Link
                to="/services"
                className="ivy-outline"
              >
                Explore treatments
              </Link>

            </div>

            <div className="ivy-phone-row">
              <Phone size={14} />

              <span>Prefer speaking with the team?</span>

              <a href="tel:+918431788571">
                +91 84317 88571
              </a>
            </div>

          </div>


          {/* IVY EXPERIENCE CARD */}

          <div className="ivy-experience">

            <div className="ivy-experience-label">
              <span>VASU</span>
              <span>IVY</span>
            </div>

            <div className="ivy-experience-main">

              <div className="ivy-experience-heading">

                <div className="ivy-round-icon">
                  <Bot size={21} />
                </div>

                <div>
                  <strong>Ivy</strong>

                  <span>
                    <i />
                    Digital dental assistant
                  </span>
                </div>

              </div>


              <div className="ivy-conversation">

                <div className="ivy-date">
                  YOUR CONVERSATION
                </div>

                <div className="ivy-bubble-row">

                  <div className="ivy-small-avatar">
                    <Bot size={12} />
                  </div>

                  <div className="ivy-bubble">
                    Hi, I am Ivy.
                    <br />
                    How can I help you today?
                  </div>

                </div>

                <div className="ivy-bubble-row user">

                  <div className="ivy-bubble user">
                    I want to explore dental cleaning.
                  </div>

                </div>

                <div className="ivy-bubble-row">

                  <div className="ivy-small-avatar">
                    <Bot size={12} />
                  </div>

                  <div className="ivy-bubble">
                    I can help you understand the service
                    and guide you towards the next step.
                  </div>

                </div>

              </div>


              <div className="ivy-quick-title">
                YOU CAN START WITH
              </div>

              <div className="ivy-options">

                {suggestions.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={
                      activeSuggestion === item
                        ? "active"
                        : ""
                    }
                    onClick={() => handleSuggestion(item)}
                  >
                    <span>{item}</span>
                    <ArrowUpRight size={13} />
                  </button>
                ))}

              </div>


              <form
                className="ivy-input"
                onSubmit={handleSend}
              >

                <input
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  placeholder="Ask Ivy a question"
                  aria-label="Ask Ivy a question"
                />

                <button
                  type="submit"
                  aria-label="Send message"
                >
                  <Send size={15} />
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="ivy-intro">

        <div className="ivy-container ivy-intro-inner">

          <div className="ivy-intro-number">
            <span>01</span>
            <div />
            <small>WHY IVY EXISTS</small>
          </div>

          <div className="ivy-intro-content">

            <span className="ivy-label">
              <i />
              A CLEARER FIRST STEP
            </span>

            <h2>
              Dental care can begin
              <em> with a conversation.</em>
            </h2>

            <p>
              Sometimes the first step is simply knowing what
              to ask. Ivy gives patients a straightforward place
              to begin exploring their dental needs before
              continuing with the Vasu team.
            </p>

          </div>

        </div>

      </section>


      {/* GUIDANCE */}

      <section className="ivy-guidance">

        <div className="ivy-container">

          <div className="ivy-heading-row">

            <div>

              <span className="ivy-label">
                <i />
                HOW IVY HELPS
              </span>

              <h2>
                From your first
                <em> question onward.</em>
              </h2>

            </div>

            <p>
              Ivy keeps the first interaction simple while
              helping you understand where to go next.
            </p>

          </div>


          <div className="ivy-guidance-grid">

            {guidance.map((item) => (
              <article
                className="ivy-guidance-card"
                key={item.number}
              >

                <div className="ivy-guidance-top">

                  <span>{item.number}</span>

                  <div className="ivy-guidance-arrow">
                    <ArrowUpRight size={15} />
                  </div>

                </div>

                <div className="ivy-guidance-icon">
                  {item.number === "01" && (
                    <MessageCircle size={20} />
                  )}

                  {item.number === "02" && (
                    <Sparkles size={20} />
                  )}

                  {item.number === "03" && (
                    <CalendarDays size={20} />
                  )}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* HUMAN CARE */}

      <section className="ivy-human">

        <div className="ivy-human-glow" />

        <div className="ivy-container ivy-human-inner">

          <div className="ivy-human-content">

            <span className="ivy-label light">
              <i />
              TECHNOLOGY WITH A HUMAN SIDE
            </span>

            <h2>
              Ivy starts the
              <em> conversation.</em>
              <br />
              Your care stays personal.
            </h2>

            <p>
              Ivy is there to make the beginning easier. When
              personal guidance is needed, patients can continue
              their conversation with the Vasu dental care team.
            </p>

            <div className="ivy-check-list">

              <div>
                <span>
                  <Check size={14} />
                </span>
                <p>Simple information</p>
              </div>

              <div>
                <span>
                  <Check size={14} />
                </span>
                <p>Clear next steps</p>
              </div>

              <div>
                <span>
                  <Check size={14} />
                </span>
                <p>Connection with the team</p>
              </div>

            </div>

          </div>


          <div className="ivy-human-visual">

            <div className="ivy-human-ring ring-large" />
            <div className="ivy-human-ring ring-medium" />

            <div className="ivy-human-center">

              <div className="ivy-center-icon">
                <Bot size={29} />
              </div>

              <strong>IVY</strong>

              <span>
                A simpler beginning
              </span>

            </div>

            <div className="ivy-visual-note note-top">
              <CheckCircle2 size={14} />
              <span>Clear guidance</span>
            </div>

            <div className="ivy-visual-note note-bottom">
              <MessageCircle size={14} />
              <span>Easy conversation</span>
            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="ivy-final">

        <div className="ivy-container ivy-final-inner">

          <div>

            <span className="ivy-label light">
              <i />
              START WITH IVY
            </span>

            <h2>
              Have a question?
              <em> Start here.</em>
            </h2>

            <p>
              Explore your dental care options and decide
              what you would like to do next.
            </p>

          </div>

          <div className="ivy-final-actions">

            <Link
              to="/contact?assistant=ivy"
              className="ivy-final-primary"
            >
              Talk to Ivy
              <Bot size={15} />
            </Link>

            <Link
              to="/appointment"
              className="ivy-final-secondary"
            >
              Book an Appointment
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}