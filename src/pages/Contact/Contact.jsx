import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="vasu-contact">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-glow" />

        <div className="contact-hero-inner">

          <div className="contact-hero-content">

            <span className="contact-kicker">
              <i />
              VASU AESTHETICS AND DENTAL CARE
            </span>

            <h1>
              Your next visit
              <em> starts here.</em>
            </h1>

            <p>
              Whether you want to book a consultation, ask about
              a treatment or simply speak with our team, we are
              here to help you take the next step with confidence.
            </p>

            <div className="contact-hero-actions">

              <a
                href="#appointment-form"
                className="contact-primary-btn"
              >
                Book an Appointment
                <span>
                  <ArrowUpRight size={16} />
                </span>
              </a>

              <a
                href="tel:+918431788571"
                className="contact-secondary-btn"
              >
                <Phone size={15} />
                Call the clinic
              </a>

            </div>

            <div className="contact-hero-meta">

              <div>
                <CheckCircle2 size={17} />
                <span>
                  <strong>Personalised care</strong>
                  <small>Built around your needs</small>
                </span>
              </div>

              <div>
                <MapPin size={17} />
                <span>
                  <strong>Rajajinagar</strong>
                  <small>Bengaluru</small>
                </span>
              </div>

            </div>

          </div>


          <div className="contact-hero-visual">

            <div className="contact-hero-ring" />

            <div className="contact-hero-image">

              <img
                src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Dental consultation at Vasu Aesthetics and Dental Care"
              />

            </div>

            <div className="contact-floating-card">

              <span>
                <CalendarDays size={18} />
              </span>

              <div>
                <strong>Ready for your visit?</strong>
                <small>Send an appointment request</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section className="contact-intro">

        <div className="contact-intro-inner">

          <div>

            <span className="contact-eyebrow">
              <i />
              LET'S CONNECT
            </span>

            <h2>
              Tell us what
              <em> you need.</em>
            </h2>

          </div>

          <p>
            Share a few details with us and we can understand
            your requirement before your visit.
          </p>

        </div>

      </section>


      {/* =====================================================
          APPOINTMENT + CONTACT
      ===================================================== */}

      <section className="contact-booking">

        <div className="contact-booking-inner">

          {/* FORM */}

          <div
            className="contact-form-card"
            id="appointment-form"
          >

            {!sent ? (
              <>

                <div className="contact-form-top">

                  <div>

                    <span className="contact-form-label">
                      APPOINTMENT REQUEST
                    </span>

                    <h3>
                      Plan your visit
                    </h3>

                    <p>
                      Tell us a little about yourself and the
                      dental care you are looking for.
                    </p>

                  </div>

                  <div className="contact-form-icon">
                    <CalendarDays size={20} />
                  </div>

                </div>


                <form onSubmit={handleSubmit}>

                  <div className="contact-fields">

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


                    <label className="contact-field-wide">
                      <span>
                        Dental Service <b>*</b>
                      </span>

                      <select required defaultValue="">
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


                    <label className="contact-field-wide">
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


                    <label className="contact-field-wide">
                      <span>Tell us a little more</span>

                      <textarea
                        rows="4"
                        placeholder="Briefly describe your concern"
                      />
                    </label>

                  </div>


                  <div className="contact-form-footer">

                    <div className="contact-private">

                      <ShieldCheck size={16} />

                      <span>
                        Your information stays private
                      </span>

                    </div>

                    <button
                      type="submit"
                      className="contact-submit"
                    >
                      Send Request
                      <Send size={15} />
                    </button>

                  </div>

                </form>

              </>
            ) : (

              <div className="contact-success">

                <div className="contact-success-icon">
                  <CheckCircle2 size={38} />
                </div>

                <span>REQUEST RECEIVED</span>

                <h3>
                  Thank you for reaching out.
                </h3>

                <p>
                  Your appointment request has been received.
                  Our team can follow up with confirmation and
                  available timings.
                </p>

                <button
                  type="button"
                  className="contact-submit"
                  onClick={() => setSent(false)}
                >
                  Send Another Request
                  <ArrowUpRight size={15} />
                </button>

              </div>

            )}

          </div>


          {/* CONTACT PANEL */}

          <aside className="contact-side-card">

            <div className="contact-side-heading">

              <span className="contact-eyebrow light">
                <i />
                SPEAK WITH US
              </span>

              <h3>
                A simple way to
                <em> reach Vasu.</em>
              </h3>

              <p>
                Connect directly with the dental care team or
                visit us at our Rajajinagar clinic.
              </p>

            </div>


            <div className="contact-doctors">

              {doctors.map((doctor) => (

                <a
                  href={`tel:+91${doctor.phone}`}
                  className="contact-doctor"
                  key={doctor.name}
                >

                  <div className="contact-doctor-icon">
                    <Phone size={16} />
                  </div>

                  <div className="contact-doctor-info">

                    <small>{doctor.name}</small>

                    <strong>
                      +91 {doctor.phone}
                    </strong>

                    <span>
                      {doctor.role || doctor.qualification}
                    </span>

                  </div>

                  <ArrowUpRight size={15} />

                </a>

              ))}

            </div>


            <div className="contact-side-address">

              <div className="contact-address-icon">
                <MapPin size={18} />
              </div>

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
              to="/contact?assistant=ivy"
              className="contact-ivy-mini"
            >

              <span>
                <Bot size={18} />
              </span>

              <div>
                <strong>Talk to Ivy</strong>
                <small>
                  Get help before your appointment
                </small>
              </div>

              <ArrowUpRight size={15} />

            </Link>

          </aside>

        </div>

      </section>


      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="contact-location">

        <div className="contact-location-inner">

          <div className="contact-location-heading">

            <div>

              <span className="contact-eyebrow">
                <i />
                FIND VASU
              </span>

              <h2>
                Your dental care,
                <em> close to you.</em>
              </h2>

            </div>

            <p>
              Find Vasu Aesthetics and Dental Care in
              Rajajinagar, Bengaluru and plan your visit
              using the map.
            </p>

          </div>


          <div className="contact-location-grid">

            <div className="contact-location-info">

              <div className="contact-location-number">
                01
              </div>

              <div className="contact-location-pin">
                <MapPin size={21} />
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
                className="contact-map-button"
              >
                Get Directions
                <ArrowUpRight size={15} />
              </a>

            </div>


            <div className="contact-map">

              <iframe
                title="Vasu Aesthetics and Dental Care location"
                src="https://www.google.com/maps?q=Vasu+Aesthetics+and+Dental+Care%2C+No.+211%2C+50th+Cross%2C+3rd+Block%2C+Rajajinagar%2C+Bengaluru+560010&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="contact-map-label">

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


      {/* =====================================================
          IVY
      ===================================================== */}

      <section className="contact-ivy">

        <div className="contact-ivy-inner">

          <div className="contact-ivy-copy">

            <span className="contact-eyebrow light">
              <i />
              AI PATIENT EXPERIENCE
            </span>

            <h2>

              {ivyActive
                ? "Ivy is ready to help."
                : "Have a question before you book?"}

              <em>
                {ivyActive
                  ? " Let's get started."
                  : " Ask Ivy."}
              </em>

            </h2>

            <p>
              Ivy can help you understand our services,
              explore appointment options and find useful
              information before you speak with the team.
            </p>

            <div className="contact-ivy-points">

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

            <Link
              to="/ivy"
              className="contact-ivy-button"
            >
              Talk to Ivy
              <Bot size={16} />
            </Link>

          </div>


          <div className="contact-ivy-visual">

            <div className="ivy-glow" />

            <div className="ivy-orbit orbit-one" />
            <div className="ivy-orbit orbit-two" />

            <div className="ivy-core">

              <Bot size={34} />

              <strong>IVY</strong>

              <span>AI Receptionist</span>

            </div>

            <div className="ivy-float ivy-float-one">
              <MessageCircle size={15} />
            </div>

            <div className="ivy-float ivy-float-two">
              <CalendarDays size={15} />
            </div>

            <div className="ivy-float ivy-float-three">
              <Sparkles size={15} />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final">

        <div className="contact-final-inner">

          <div>

            <span className="contact-eyebrow light">
              <i />
              YOUR NEXT VISIT
            </span>

            <h2>
              Ready to take the next
              <em> step?</em>
            </h2>

            <p>
              Book your appointment with Vasu Aesthetics
              and Dental Care.
            </p>

          </div>

          <div className="contact-final-actions">

            <a
              href="#appointment-form"
              className="contact-final-primary"
            >
              Book an Appointment
              <ArrowUpRight size={15} />
            </a>

            <a
              href="tel:+918431788571"
              className="contact-final-secondary"
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