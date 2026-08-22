import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

import "../shared.css";
import "./Contact.css";

const services = [
  "Gum Disease Care",
  "Dental Implant Consultation",
  "Smile & Restorative Care",
  "Emergency Care",
  "Maintenance & Prevention",
];

export default function Contact() {
  const [params] = useSearchParams();
  const [sent, setSent] = useState(false);

  const ivyActive = params.get("assistant") === "ivy";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-hero-content">
            <span className="contact-kicker">
              <i></i>
              GET IN TOUCH
            </span>

            <h1>
              Let's talk about your <em>smile.</em>
            </h1>

            <p>
              Book a consultation, ask a question or let Ivy
              help you find the right next step.
            </p>

            <div className="contact-hero-actions">
              <a
                href="#appointment-form"
                className="contact-primary-btn"
              >
                Book a Consultation

                <span>
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="tel:+918041234567"
                className="contact-text-btn"
              >
                Call the clinic
                <Phone size={14} />
              </a>
            </div>

            <div className="contact-trust">
              <span>
                <CheckCircle2 size={15} />
                Clear treatment guidance
              </span>

              <span>
                <CheckCircle2 size={15} />
                24/7 Ivy support
              </span>
            </div>
          </div>

          <div className="contact-hero-visual">
            <div className="contact-hero-image">
              <img
                src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Dental consultation"
              />
            </div>

            <div className="contact-hero-card">
              <span>
                <CalendarDays size={17} />
              </span>

              <div>
                <strong>Ready when you are</strong>
                <small>
                  Book your consultation in a few steps
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPOINTMENT SECTION
      ===================================================== */}

      <section className="contact-main">
        <div className="contact-main-heading">
          <div>
            <span className="contact-eyebrow">
              <i></i>
              APPOINTMENT REQUEST
            </span>

            <h2>
              Tell us how we can <em>help.</em>
            </h2>
          </div>

          <p>
            Share a few details and our team can guide you
            toward the most appropriate next step.
          </p>
        </div>

        <div className="contact-layout">

          {/* =================================================
              APPOINTMENT FORM
          ================================================= */}

          <div
            className="contact-form-card"
            id="appointment-form"
          >
            {!sent ? (
              <>
                <div className="contact-form-header">
                  <div>
                    <span className="contact-form-step">
                      STEP 01
                    </span>

                    <h3>Schedule an Appointment</h3>
                  </div>

                  <div className="contact-form-icon">
                    <CalendarDays size={19} />
                  </div>
                </div>

                <p className="contact-form-intro">
                  Fill in your details and tell us what you
                  would like help with.
                </p>

                <form onSubmit={handleSubmit}>

                  <div className="contact-field-row">

                    <label>
                      Full Name
                      <span>*</span>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </label>

                    <label>
                      Phone Number
                      <span>*</span>

                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </label>

                  </div>

                  <div className="contact-field-row">

                    <label>
                      Email Address

                      <input
                        type="email"
                        placeholder="you@example.com"
                      />
                    </label>

                    <label>
                      Preferred Date

                      <input type="date" />
                    </label>

                  </div>

                  <label className="contact-full-field">
                    What can we help with?
                    <span>*</span>

                    <select
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option
                          value={service}
                          key={service}
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="contact-full-field">
                    Preferred Time

                    <select defaultValue="">
                      <option value="" disabled>
                        Select a preferred time
                      </option>

                      <option>
                        Morning — 9 AM to 12 PM
                      </option>

                      <option>
                        Afternoon — 12 PM to 4 PM
                      </option>

                      <option>
                        Evening — 4 PM to 7 PM
                      </option>
                    </select>
                  </label>

                  <label className="contact-full-field">
                    Tell us a little more

                    <textarea
                      placeholder="Briefly describe your concern..."
                      rows="4"
                    ></textarea>
                  </label>

                  <div className="contact-form-bottom">

                    <div className="contact-privacy">
                      <ShieldCheck size={15} />

                      <span>
                        Your information stays private
                      </span>
                    </div>

                    <button
                      className="contact-submit-btn"
                      type="submit"
                    >
                      Send Request
                      <Send size={14} />
                    </button>

                  </div>
                </form>
              </>
            ) : (

              /* =================================================
                 SUCCESS STATE
              ================================================= */

              <div className="contact-success">

                <div className="contact-success-icon">
                  <CheckCircle2 size={35} />
                </div>

                <span>REQUEST RECEIVED</span>

                <h3>
                  Thank you for reaching out.
                </h3>

                <p>
                  Your appointment request has been captured.
                  Our team can follow up with confirmation and
                  available timings.
                </p>

                <div className="contact-success-info">
                  <Clock3 size={16} />

                  <span>
                    Typical response during clinic hours
                  </span>
                </div>

                <button
                  type="button"
                  className="contact-submit-btn"
                  onClick={() => setSent(false)}
                >
                  Book Another Appointment
                  <ArrowUpRight size={14} />
                </button>

              </div>
            )}
          </div>


          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <aside className="contact-info-card">

            <div className="contact-info-top">

              <span className="contact-eyebrow light">
                <i></i>
                OAK & IVORY DENTAL
              </span>

              <h3>
                We're here to <em>help.</em>
              </h3>

              <p>
                Speak with our team during clinic hours or
                use Ivy for common questions and guidance
                anytime.
              </p>

            </div>


            <div className="contact-details">

              {/* Phone */}

              <a
                href="tel:+918041234567"
                className="contact-detail-card"
              >
                <span>
                  <Phone size={17} />
                </span>

                <div>
                  <small>PHONE</small>

                  <strong>
                    +91 80 4123 4567
                  </strong>
                </div>

                <ArrowUpRight size={14} />
              </a>


              {/* Email */}

              <a
                href="mailto:info@oakandivorydental.com"
                className="contact-detail-card"
              >
                <span>
                  <Mail size={17} />
                </span>

                <div>
                  <small>EMAIL</small>

                  <strong>
                    info@oakandivorydental.com
                  </strong>
                </div>

                <ArrowUpRight size={14} />
              </a>


              {/* Location */}

              <div className="contact-detail-card">

                <span>
                  <MapPin size={17} />
                </span>

                <div>
                  <small>CLINIC</small>

                  <strong>
                    123, 3rd Floor, 80 Feet Road
                  </strong>

                  <p>
                    Indiranagar, Bengaluru
                  </p>
                </div>

              </div>


              {/* Hours */}

              <div className="contact-detail-card">

                <span>
                  <Clock3 size={17} />
                </span>

                <div>
                  <small>CLINIC HOURS</small>

                  <strong>
                    Mon – Sat · 9:00 AM – 7:00 PM
                  </strong>

                  <p>
                    Sunday · By appointment
                  </p>
                </div>

              </div>

            </div>


            {/* Ivy mini card */}

            <div className="contact-ivy-mini">

              <div className="contact-ivy-icon">
                <Bot size={18} />
              </div>

              <div>
                <strong>
                  Ivy AI Receptionist
                </strong>

                <p>
                  Available 24/7 for common questions and
                  appointment guidance.
                </p>
              </div>

              <Link to="/contact?assistant=ivy">
                <ArrowUpRight size={15} />
              </Link>

            </div>

          </aside>
        </div>
      </section>


      {/* =====================================================
          IVY SECTION
      ===================================================== */}

      <section className="contact-ivy-section">

        <div className="contact-ivy-inner">

          <div className="contact-ivy-content">

            <span className="contact-eyebrow light">
              <i></i>
              AI PATIENT EXPERIENCE
            </span>

            <h2>

              {ivyActive
                ? "Ivy is ready to help."
                : "Need help before you book?"}

              <em>
                {ivyActive
                  ? " Let's get started."
                  : " Ask Ivy."}
              </em>

            </h2>

            <p>
              Ivy can explain our services, answer common
              questions and help you understand the right
              next step before you speak with our team.
            </p>


            <div className="contact-ivy-features">

              <span>
                <CheckCircle2 size={15} />
                Understand your options
              </span>

              <span>
                <CheckCircle2 size={15} />
                Explore appointment choices
              </span>

              <span>
                <CheckCircle2 size={15} />
                Get support anytime
              </span>

            </div>


            <Link
              to="/ivy"
              className="contact-ivy-btn"
            >
              Talk to Ivy
              <Bot size={16} />
            </Link>

          </div>


          {/* Ivy visual */}

          <div className="contact-ivy-visual">

            <div className="contact-ivy-circle">

              <Bot size={35} />

              <strong>IVY</strong>

              <small>
                AI Receptionist
              </small>

            </div>

            <span className="contact-orbit one">
              <MessageCircle size={14} />
            </span>

            <span className="contact-orbit two">
              <CalendarDays size={14} />
            </span>

            <span className="contact-orbit three">
              <CheckCircle2 size={14} />
            </span>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final">

        <div>

          <span className="contact-eyebrow">
            <i></i>
            YOUR NEXT STEP
          </span>

          <h2>
            Ready to start your{" "}
            <em>smile journey?</em>
          </h2>

          <p>
            Book a consultation and let our team help you
            find the right path forward.
          </p>

        </div>


        <div className="contact-final-actions">

          <a
            href="#appointment-form"
            className="contact-final-primary"
          >
            Schedule Appointment
            <ArrowUpRight size={16} />
          </a>

          <a
            href="tel:+918041234567"
            className="contact-final-secondary"
          >
            <Phone size={14} />
            Call Now
          </a>

        </div>

      </section>
    </>
  );
}