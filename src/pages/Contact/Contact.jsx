import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

import "../shared.css";
import "./Contact.css";

const services = [
  "Complete Dental Check up",
  "Teeth Cleaning and Polishing",
  "Cavity Treatment",
  "Tooth Colored Fillings",
  "Root Canal Treatment",
  "Crowns and Bridges",
  "Dental Implants",
  "Teeth Whitening",
  "Smile Makeover",
  "Braces and Clear Aligners",
  "Wisdom Tooth Treatment",
  "Gum Care",
  "Children's Dentistry",
  "Dentures",
];

const doctors = [
  {
    name: "Dr. Rajkamal S.",
    qualification: "BDS, FGD, FCE",
    phone: "8431788571",
  },
  {
    name: "Dr. Abdul Rahim",
    qualification: "BDS",
    role: "Director and Head of Candy Advanced Dental Care",
    phone: "9900176558",
  },
];

export default function Contact() {
  const [params] = useSearchParams();
  const [sent, setSent] = useState(false);

  const ivyActive = params.get("assistant") === "ivy";

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="vasu-contact">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-pattern" />

        <div className="contact-hero-inner">

          <div className="contact-hero-copy">
            <span className="contact-label">
              <i />
              VASU AESTHETICS AND DENTAL CARE
            </span>

            <h1>
              Let us make your
              <em> next visit simple.</em>
            </h1>

            <p>
              Have a question, need treatment information or want to
              request an appointment? Share your details and take the
              next step with Vasu.
            </p>

            <div className="contact-actions">
              <a href="#appointment-form" className="contact-main-btn">
                Book an Appointment
                <span>
                  <ArrowUpRight size={16} />
                </span>
              </a>

              <a
                href="tel:+918431788571"
                className="contact-call-btn"
              >
                <Phone size={15} />
                Call the clinic
              </a>
            </div>

            <div className="contact-trust-row">
              <div>
                <span className="trust-icon">
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <strong>Personalised care</strong>
                  <small>Focused on your needs</small>
                </div>
              </div>

              <div>
                <span className="trust-icon">
                  <MapPin size={16} />
                </span>
                <div>
                  <strong>Rajajinagar</strong>
                  <small>Bengaluru</small>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-hero-card">
            <div className="hero-card-top">
              <span>01</span>
              <div>
                <small>YOUR NEXT VISIT</small>
                <strong>Start with a conversation</strong>
              </div>
            </div>

            <div className="hero-card-visual">
              <div className="hero-circle hero-circle-one" />
              <div className="hero-circle hero-circle-two" />

              <div className="hero-icon">
                <CalendarDays size={38} />
              </div>

              <div className="hero-mini-card">
                <CheckCircle2 size={16} />
                <span>Appointment request</span>
              </div>
            </div>

            <div className="hero-card-bottom">
              <span>
                <MapPin size={15} />
              </span>
              <p>
                No. 211, 50th Cross, 3rd Block,
                Rajajinagar, Bengaluru 560010
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="contact-intro">
        <div className="contact-container contact-intro-inner">
          <div>
            <span className="contact-label">
              <i />
              LET'S CONNECT
            </span>

            <h2>
              One message can be the
              <em> beginning of better care.</em>
            </h2>
          </div>

          <p>
            Tell us what you are looking for and our team can guide
            you towards the appropriate next step.
          </p>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="contact-booking">
        <div className="contact-container booking-grid">

          <div className="contact-form-card" id="appointment-form">

            {!sent ? (
              <>
                <div className="form-heading">
                  <div>
                    <span>APPOINTMENT REQUEST</span>
                    <h3>Plan your visit</h3>
                    <p>
                      Share a few details so the dental care team
                      can understand what you need.
                    </p>
                  </div>

                  <div className="form-heading-icon">
                    <CalendarDays size={21} />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>

                  <div className="form-grid">

                    <label>
                      <span>
                        Full Name <b>*</b>
                      </span>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </label>

                    <label>
                      <span>
                        Phone Number <b>*</b>
                      </span>

                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </label>

                    <label>
                      <span>Email Address</span>

                      <input
                        type="email"
                        placeholder="you@example.com"
                      />
                    </label>

                    <label>
                      <span>Preferred Date</span>

                      <input type="date" />
                    </label>

                    <label className="full-field">
                      <span>
                        Dental Service <b>*</b>
                      </span>

                      <select required defaultValue="">
                        <option value="" disabled>
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option value={service} key={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="full-field">
                      <span>Preferred Time</span>

                      <select defaultValue="">
                        <option value="" disabled>
                          Select a preferred time
                        </option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                      </select>
                    </label>

                    <label className="full-field">
                      <span>Tell us a little more</span>

                      <textarea
                        rows="4"
                        placeholder="Briefly describe your concern"
                      />
                    </label>

                  </div>

                  <div className="form-bottom">
                    <div className="privacy-note">
                      <ShieldCheck size={16} />
                      <span>Your information stays private</span>
                    </div>

                    <button type="submit" className="submit-btn">
                      Send Request
                      <Send size={15} />
                    </button>
                  </div>

                </form>
              </>
            ) : (
              <div className="success-state">
                <div className="success-icon">
                  <CheckCircle2 size={38} />
                </div>

                <span>REQUEST RECEIVED</span>

                <h3>Thank you for reaching out.</h3>

                <p>
                  Your appointment request has been received.
                  Our team can follow up with confirmation and
                  available timings.
                </p>

                <button
                  type="button"
                  className="submit-btn"
                  onClick={() => setSent(false)}
                >
                  Send Another Request
                  <ArrowUpRight size={15} />
                </button>
              </div>
            )}

          </div>

          {/* CONTACT SIDE */}
          <aside className="contact-info-card">

            <div className="info-card-header">
              <span className="contact-label light">
                <i />
                SPEAK WITH US
              </span>

              <h3>
                Reach the team
                <em> directly.</em>
              </h3>

              <p>
                Connect with the dental care team or visit the
                clinic in Rajajinagar.
              </p>
            </div>

            <div className="doctor-list">

              {doctors.map((doctor) => (
                <a
                  href={`tel:+91${doctor.phone}`}
                  className="doctor-contact"
                  key={doctor.name}
                >
                  <span className="doctor-phone-icon">
                    <Phone size={16} />
                  </span>

                  <div>
                    <small>{doctor.name}</small>
                    <strong>+91 {doctor.phone}</strong>
                    <span>
                      {doctor.role || doctor.qualification}
                    </span>
                  </div>

                  <ArrowUpRight size={15} />
                </a>
              ))}

            </div>

            <div className="clinic-address">
              <span className="address-icon">
                <MapPin size={17} />
              </span>

              <div>
                <small>VISIT THE CLINIC</small>

                <strong>
                  Vasu Aesthetics and Dental Care
                </strong>

                <p>
                  No. 211, 50th Cross, 3rd Block
                  <br />
                  Rajajinagar, Bengaluru 560010
                </p>
              </div>
            </div>

            <Link
              to="/ivy"
              className="ivy-small-card"
            >
              <span>
                <Bot size={18} />
              </span>

              <div>
                <strong>Talk to Ivy</strong>
                <small>Get help before your appointment</small>
              </div>

              <ArrowUpRight size={15} />
            </Link>

          </aside>

        </div>
      </section>

      {/* LOCATION */}
      <section className="contact-location">
        <div className="contact-container">

          <div className="location-heading">
            <div>
              <span className="contact-label">
                <i />
                FIND VASU
              </span>

              <h2>
                Come visit us in
                <em> Rajajinagar.</em>
              </h2>
            </div>

            <p>
              Find Vasu Aesthetics and Dental Care at our
              Rajajinagar location in Bengaluru.
            </p>
          </div>

          <div className="location-grid">

            <div className="location-info">

              <div className="location-number">
                01
              </div>

              <div className="location-icon">
                <MapPin size={22} />
              </div>

              <span>CLINIC ADDRESS</span>

              <h3>
                Vasu Aesthetics and Dental Care
              </h3>

              <p>
                No. 211, 50th Cross, 3rd Block
                <br />
                Rajajinagar, Bengaluru 560010
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Vasu+Aesthetics+and+Dental+Care%2C+No.+211%2C+50th+Cross%2C+3rd+Block%2C+Rajajinagar%2C+Bengaluru+560010"
                target="_blank"
                rel="noreferrer"
                className="direction-btn"
              >
                Get Directions
                <ArrowUpRight size={15} />
              </a>

            </div>

            <div className="map-wrapper">

              <iframe
                title="Vasu Aesthetics and Dental Care location"
                src="https://www.google.com/maps?q=Vasu+Aesthetics+and+Dental+Care%2C+No.+211%2C+50th+Cross%2C+3rd+Block%2C+Rajajinagar%2C+Bengaluru+560010&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="map-caption">
                <span>
                  <MapPin size={14} />
                </span>

                <div>
                  <strong>Vasu Aesthetics and Dental Care</strong>
                  <small>Rajajinagar, Bengaluru</small>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* IVY */}
      <section className="contact-ivy">
        <div className="contact-container ivy-inner">

          <div className="ivy-copy">

            <span className="contact-label light">
              <i />
              AI PATIENT EXPERIENCE
            </span>

            <h2>
              {ivyActive
                ? "Ivy is ready to help."
                : "Need some help before booking?"}

              <em>
                {ivyActive
                  ? " Let's get started."
                  : " Ask Ivy."}
              </em>
            </h2>

            <p>
              Ivy can help you understand services, explore
              appointment guidance and find useful information
              before you speak with the team.
            </p>

            <div className="ivy-points">
              <span>
                <CheckCircle2 size={15} />
                Understand your options
              </span>

              <span>
                <CheckCircle2 size={15} />
                Explore dental services
              </span>

              <span>
                <CheckCircle2 size={15} />
                Get appointment guidance
              </span>
            </div>

            <Link to="/ivy" className="ivy-button">
              Talk to Ivy
              <Bot size={16} />
            </Link>

          </div>

          <div className="ivy-visual">

            <div className="ivy-glow" />
            <div className="ivy-ring ring-one" />
            <div className="ivy-ring ring-two" />

            <div className="ivy-center">
              <Bot size={34} />
              <strong>IVY</strong>
              <span>AI Receptionist</span>
            </div>

            <div className="ivy-floating ivy-one">
              <MessageCircle size={15} />
            </div>

            <div className="ivy-floating ivy-two">
              <CalendarDays size={15} />
            </div>

            <div className="ivy-floating ivy-three">
              <Sparkles size={15} />
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-final">
        <div className="contact-container final-inner">

          <div>
            <span className="contact-label light">
              <i />
              YOUR NEXT VISIT
            </span>

            <h2>
              Ready to take the
              <em> next step?</em>
            </h2>

            <p>
              Book your appointment with Vasu Aesthetics and
              Dental Care.
            </p>
          </div>

          <div className="final-actions">
            <a
              href="#appointment-form"
              className="final-primary"
            >
              Book an Appointment
              <ArrowUpRight size={15} />
            </a>

            <a
              href="tel:+918431788571"
              className="final-secondary"
            >
              <Phone size={14} />
              Call the clinic
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}