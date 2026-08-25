import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../shared.css";
import "./Appointment.css";

const services = [
  {
    id: "consultation",
    title: "New Patient Consultation",
    desc: "A complete first visit to understand your needs.",
  },
  {
    id: "checkup",
    title: "Routine Dental Check-up",
    desc: "Regular examination and preventive care.",
  },
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    desc: "Professional cleaning for a healthier smile.",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    desc: "Discuss options for a more confident smile.",
  },
  {
    id: "implant",
    title: "Dental Implant Consultation",
    desc: "Explore implant treatment and suitability.",
  },
  {
    id: "emergency",
    title: "Emergency Consultation",
    desc: "For urgent pain, swelling or dental concerns.",
  },
];

const timeSlots = [
  "09:30 AM",
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:00 PM",
  "04:30 PM",
  "05:30 PM",
  "06:30 PM",
];

export default function Appointment() {
  const [step, setStep] = useState(1);

  const [service, setService] = useState("");

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const [patient, setPatient] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [done, setDone] = useState(false);

  const selectedService = useMemo(
    () => services.find((item) => item.id === service),
    [service]
  );

  const canContinueStep1 = service !== "";
  const canContinueStep2 = date !== "" && time !== "";

  const updatePatient = (field, value) => {
    setPatient((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const goNext = () => {
    if (step === 1 && canContinueStep1) {
      setStep(2);
    }

    if (step === 2 && canContinueStep2) {
      setStep(3);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patient.name || !patient.phone) return;

    setDone(true);
  };

  const resetBooking = () => {
    setStep(1);
    setService("");
    setDate("");
    setTime("");

    setPatient({
      name: "",
      phone: "",
      email: "",
    });

    setDone(false);
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="appointment-hero">
        <div className="appointment-hero-inner">
          <div className="appointment-hero-content">
            <span className="appointment-kicker">
              <i></i>
              AI APPOINTMENT BOOKING
            </span>

            <h1>
              Choose a time that{" "}
              <em>works for you.</em>
            </h1>

            <p>
              Book a consultation in a few simple steps.
              Choose your service, preferred time and share
              your details we'll take care of the rest.
            </p>

            <div className="appointment-hero-trust">
              <span>
                <CheckCircle2 size={15} />
                Simple booking
              </span>

              <span>
                <CheckCircle2 size={15} />
                Personalised care
              </span>

              <span>
                <CheckCircle2 size={15} />
                24/7 Ivy support
              </span>
            </div>
          </div>

          <div className="appointment-hero-visual">
            <div className="appointment-hero-image">
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85"
                alt="Dental appointment"
              />
            </div>

            <div className="appointment-hero-card">
              <span>
                <CalendarDays size={17} />
              </span>

              <div>
                <strong>Find your appointment</strong>
                <small>
                  A few simple steps to get started
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKING AREA
      ===================================================== */}

      <section className="appointment-section">
        <div className="appointment-section-heading">
          <div>
            <span className="appointment-eyebrow">
              <i></i>
              SCHEDULE YOUR VISIT
            </span>

            <h2>
              Simple booking.
              <br />
              <em>No waiting on hold.</em>
            </h2>
          </div>

          <p>
            Tell us what you need, choose a convenient time
            and confirm your details. The whole process takes
            just a few moments.
          </p>
        </div>

        {!done ? (
          <div className="appointment-booking-card">
            {/* =================================================
                STEPPER
            ================================================= */}

            <div className="appointment-stepper">
              <div
                className={`appointment-step ${
                  step >= 1 ? "active" : ""
                }`}
              >
                <span>01</span>
                <div>
                  <strong>Service</strong>
                  <small>What do you need?</small>
                </div>
              </div>

              <div
                className={`appointment-step ${
                  step >= 2 ? "active" : ""
                }`}
              >
                <span>02</span>
                <div>
                  <strong>Date & Time</strong>
                  <small>Choose your slot</small>
                </div>
              </div>

              <div
                className={`appointment-step ${
                  step >= 3 ? "active" : ""
                }`}
              >
                <span>03</span>
                <div>
                  <strong>Your Details</strong>
                  <small>Confirm information</small>
                </div>
              </div>
            </div>

            <div className="appointment-progress">
              <span
                style={{
                  width:
                    step === 1
                      ? "33.33%"
                      : step === 2
                      ? "66.66%"
                      : "100%",
                }}
              ></span>
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="appointment-booking-body">
              <div className="appointment-form-area">
                {/* =============================================
                    STEP 1
                ============================================= */}

                {step === 1 && (
                  <div className="appointment-step-content">
                    <span className="appointment-form-label">
                      STEP 01
                    </span>

                    <h3>
                      What would you like help with?
                    </h3>

                    <p className="appointment-form-description">
                      Choose the service that best matches
                      what you need today.
                    </p>

                    <div className="appointment-service-grid">
                      {services.map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          className={`appointment-service-card ${
                            service === item.id
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            setService(item.id)
                          }
                        >
                          <div className="appointment-service-icon">
                            <CalendarDays size={18} />
                          </div>

                          <div>
                            <strong>{item.title}</strong>

                            <p>{item.desc}</p>
                          </div>

                          <span className="appointment-select-circle">
                            <CheckCircle2 size={14} />
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="appointment-navigation">
                      <span></span>

                      <button
                        type="button"
                        className="appointment-next-btn"
                        disabled={!canContinueStep1}
                        onClick={goNext}
                      >
                        Continue
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* =============================================
                    STEP 2
                ============================================= */}

                {step === 2 && (
                  <div className="appointment-step-content">
                    <span className="appointment-form-label">
                      STEP 02
                    </span>

                    <h3>
                      Find a convenient time.
                    </h3>

                    <p className="appointment-form-description">
                      Select your preferred date and one of
                      the available appointment times.
                    </p>

                    <div className="appointment-date-box">
                      <label>
                        <CalendarDays size={16} />
                        Preferred date

                        <input
                          type="date"
                          value={date}
                          min={
                            new Date()
                              .toISOString()
                              .split("T")[0]
                          }
                          onChange={(e) =>
                            setDate(e.target.value)
                          }
                        />
                      </label>
                    </div>

                    <div className="appointment-time-section">
                      <div className="appointment-time-heading">
                        <div>
                          <Clock3 size={16} />

                          <strong>
                            Available times
                          </strong>
                        </div>

                        <small>
                          Clinic hours · 9 AM – 7 PM
                        </small>
                      </div>

                      <div className="appointment-time-grid">
                        {timeSlots.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            className={
                              time === slot
                                ? "selected"
                                : ""
                            }
                            onClick={() =>
                              setTime(slot)
                            }
                          >
                            {slot}

                            {time === slot && (
                              <CheckCircle2 size={13} />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="appointment-navigation">
                      <button
                        type="button"
                        className="appointment-back-btn"
                        onClick={goBack}
                      >
                        <ArrowLeft size={15} />
                        Back
                      </button>

                      <button
                        type="button"
                        className="appointment-next-btn"
                        disabled={!canContinueStep2}
                        onClick={goNext}
                      >
                        Continue
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* =============================================
                    STEP 3
                ============================================= */}

                {step === 3 && (
                  <form
                    className="appointment-step-content"
                    onSubmit={handleSubmit}
                  >
                    <span className="appointment-form-label">
                      STEP 03
                    </span>

                    <h3>
                      Tell us about yourself.
                    </h3>

                    <p className="appointment-form-description">
                      We'll use these details to confirm
                      your appointment.
                    </p>

                    <div className="appointment-fields">
                      <label>
                        Full name
                        <span>*</span>

                        <div className="appointment-input">
                          <UserRound size={16} />

                          <input
                            type="text"
                            placeholder="Your full name"
                            value={patient.name}
                            onChange={(e) =>
                              updatePatient(
                                "name",
                                e.target.value
                              )
                            }
                            required
                          />
                        </div>
                      </label>

                      <label>
                        Phone number
                        <span>*</span>

                        <div className="appointment-input">
                          <PhoneIcon />

                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={patient.phone}
                            onChange={(e) =>
                              updatePatient(
                                "phone",
                                e.target.value
                              )
                            }
                            required
                          />
                        </div>
                      </label>

                      <label>
                        Email address

                        <div className="appointment-input">
                          <MailIcon />

                          <input
                            type="email"
                            placeholder="you@example.com"
                            value={patient.email}
                            onChange={(e) =>
                              updatePatient(
                                "email",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </label>
                    </div>

                    <div className="appointment-navigation">
                      <button
                        type="button"
                        className="appointment-back-btn"
                        onClick={goBack}
                      >
                        <ArrowLeft size={15} />
                        Back
                      </button>

                      <button
                        type="submit"
                        className="appointment-confirm-btn"
                      >
                        Confirm Appointment
                        <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* =================================================
                  SUMMARY
              ================================================= */}

              <aside className="appointment-summary">
                <div className="appointment-summary-top">
                  <span>
                    <CalendarDays size={17} />
                  </span>

                  <div>
                    <small>YOUR APPOINTMENT</small>

                    <strong>
                      Booking summary
                    </strong>
                  </div>
                </div>

                <div className="appointment-summary-line"></div>

                <div className="appointment-summary-item">
                  <small>SERVICE</small>

                  <strong>
                    {selectedService
                      ? selectedService.title
                      : "Not selected yet"}
                  </strong>

                  {selectedService && (
                    <p>{selectedService.desc}</p>
                  )}
                </div>

                <div className="appointment-summary-item">
                  <small>DATE</small>

                  <strong>
                    {date
                      ? new Date(
                          `${date}T00:00:00`
                        ).toLocaleDateString("en-IN", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                        })
                      : "Choose a date"}
                  </strong>
                </div>

                <div className="appointment-summary-item">
                  <small>TIME</small>

                  <strong>
                    {time || "Choose a time"}
                  </strong>
                </div>

                <div className="appointment-summary-note">
                  <ShieldCheck size={15} />

                  <p>
                    This is a frontend booking demo.
                    Production availability would be
                    connected to the clinic system.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        ) : (
          /* ===================================================
             SUCCESS
          =================================================== */

          <div className="appointment-success">
            <div className="appointment-success-icon">
              <CheckCircle2 size={42} />
            </div>

            <span className="appointment-eyebrow">
              <i></i>
              BOOKING COMPLETE
            </span>

            <h2>
              You're all <em>set.</em>
            </h2>

            <p>
              Your demo appointment request has been
              captured. Here's what the appointment looks
              like:
            </p>

            <div className="appointment-success-card">
              <div>
                <small>SERVICE</small>

                <strong>
                  {selectedService?.title ||
                    "Dental Consultation"}
                </strong>
              </div>

              <div>
                <small>DATE</small>

                <strong>
                  {date
                    ? new Date(
                        `${date}T00:00:00`
                      ).toLocaleDateString("en-IN", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                      })
                    : "Selected date"}
                </strong>
              </div>

              <div>
                <small>TIME</small>

                <strong>
                  {time || "Selected time"}
                </strong>
              </div>
            </div>

            <div className="appointment-success-message">
              <CheckCircle2 size={16} />

              <span>
                In production, Ivy would confirm this
                appointment through the clinic system.
              </span>
            </div>

            <div className="appointment-success-actions">
              <button
                type="button"
                className="appointment-confirm-btn"
                onClick={resetBooking}
              >
                Book Another
                <ArrowUpRight size={15} />
              </button>

              <Link
                to="/"
                className="appointment-home-btn"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* =====================================================
          HELP CTA
      ===================================================== */}

      <section className="appointment-help">
        <div className="appointment-help-inner">
          <div>
            <span className="appointment-eyebrow">
              <i></i>
              NEED HELP?
            </span>

            <h2>
              Not sure which service{" "}
              <em>you need?</em>
            </h2>

            <p>
              Ivy can help you understand the options before
              you book your appointment.
            </p>
          </div>

          <Link
            to="/ivy"
            className="appointment-help-btn"
          >
            Ask Ivy
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}


/* Small inline icon helpers */

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}