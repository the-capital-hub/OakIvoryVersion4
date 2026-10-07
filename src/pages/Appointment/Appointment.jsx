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
import clinic2 from "../../assets/image/clinic2.png"

const services = [
  {
    id: "checkup",
    title: "Complete Dental Check up",
    desc: "Regular check ups and personalised treatment planning.",
  },
  {
    id: "cleaning",
    title: "Teeth Cleaning and Polishing",
    desc: "Professional cleaning for a fresh and healthy smile.",
  },
  {
    id: "cavity",
    title: "Cavity Treatment",
    desc: "Gentle care for cavities and tooth decay.",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    desc: "Treatment to save and restore painful teeth.",
  },
  {
    id: "implants",
    title: "Dental Implants",
    desc: "A durable solution for missing teeth.",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    desc: "Brighten your smile with professional care.",
  },
  {
    id: "smile",
    title: "Smile Makeover",
    desc: "Improve the appearance of your smile.",
  },
  {
    id: "aligners",
    title: "Braces and Clear Aligners",
    desc: "Straighten teeth with suitable treatment options.",
  },
  {
    id: "wisdom",
    title: "Wisdom Tooth Treatment",
    desc: "Comfortable care for troublesome wisdom teeth.",
  },
  {
    id: "gum",
    title: "Gum Care",
    desc: "Care for bleeding and unhealthy gums.",
  },
  {
    id: "children",
    title: "Children’s Dentistry",
    desc: "Gentle and friendly dental care for children.",
  },
  {
    id: "dentures",
    title: "Dentures",
    desc: "Comfortable solutions for missing teeth.",
  },
  {
    id: "crowns",
    title: "Crowns and Bridges",
    desc: "Restore damaged or missing teeth.",
  },
  {
    id: "fillings",
    title: "Tooth Colored Fillings",
    desc: "Natural looking fillings for damaged teeth.",
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
    <main className="appointment-page">

      {/* HERO */}

      <section className="appointment-hero">

        <div className="appointment-hero-inner">

          <div className="appointment-hero-content">

            <span className="appointment-kicker">
              <i />
              VASU APPOINTMENTS
            </span>

            <h1>
              Your visit starts with
              <em> one simple step.</em>
            </h1>

            <p>
              Choose the dental service you need, select a convenient
              appointment time and share your details with us.
            </p>

            <div className="appointment-hero-trust">

              <span>
                <CheckCircle2 size={16} />
                Simple booking
              </span>

              <span>
                <CheckCircle2 size={16} />
                Personalised care
              </span>

              <span>
                <CheckCircle2 size={16} />
                Clear communication
              </span>

            </div>

          </div>


          <div className="appointment-hero-visual">

            <div className="appointment-hero-image">

              <img
                src={clinic2}
                alt="Dental consultation at Vasu Aesthetics and Dental Care"
              />

            </div>

            <div className="appointment-hero-orbit" />

            <div className="appointment-hero-card">

              <span>
                <CalendarDays size={18} />
              </span>

              <div>
                <strong>Plan your visit</strong>
                <small>Choose your preferred service and time</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* BOOKING */}

      <section className="appointment-section">

        <div className="appointment-section-heading">

          <div>

            <span className="appointment-eyebrow">
              <i />
              SCHEDULE YOUR VISIT
            </span>

            <h2>
              A calmer way to
              <em> book dental care.</em>
            </h2>

          </div>

          <p>
            Tell us what you need, choose your preferred time and
            provide your contact details.
          </p>

        </div>


        {!done ? (

          <div className="appointment-booking-card">

            {/* STEPPER */}

            <div className="appointment-stepper">

              <div
                className={`appointment-step ${
                  step >= 1 ? "active" : ""
                }`}
              >

                <span>01</span>

                <div>
                  <strong>Service</strong>
                  <small>Select your treatment</small>
                </div>

              </div>


              <div
                className={`appointment-step ${
                  step >= 2 ? "active" : ""
                }`}
              >

                <span>02</span>

                <div>
                  <strong>Date and Time</strong>
                  <small>Choose your preferred slot</small>
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
                  <small>Share your information</small>
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
              />

            </div>


            <div className="appointment-booking-body">

              <div className="appointment-form-area">

                {/* STEP 1 */}

                {step === 1 && (

                  <div className="appointment-step-content">

                    <span className="appointment-form-label">
                      STEP 01
                    </span>

                    <h3>
                      What would you like help with?
                    </h3>

                    <p className="appointment-form-description">
                      Select the service that best matches your
                      current dental needs.
                    </p>


                    <div className="appointment-service-grid">

                      {services.map((item) => (

                        <button
                          type="button"
                          key={item.id}
                          className={`appointment-service-card ${
                            service === item.id ? "selected" : ""
                          }`}
                          onClick={() => setService(item.id)}
                        >

                          <div className="appointment-service-icon">
                            <CalendarDays size={19} />
                          </div>

                          <div className="appointment-service-content">

                            <strong>
                              {item.title}
                            </strong>

                            <p>
                              {item.desc}
                            </p>

                          </div>

                          <span className="appointment-select-circle">

                            <CheckCircle2 size={15} />

                          </span>

                        </button>

                      ))}

                    </div>


                    <div className="appointment-navigation">

                      <span />

                      <button
                        type="button"
                        className="appointment-next-btn"
                        disabled={!canContinueStep1}
                        onClick={goNext}
                      >
                        Continue
                        <ChevronRight size={17} />
                      </button>

                    </div>

                  </div>

                )}


                {/* STEP 2 */}

                {step === 2 && (

                  <div className="appointment-step-content">

                    <span className="appointment-form-label">
                      STEP 02
                    </span>

                    <h3>
                      Find a convenient time.
                    </h3>

                    <p className="appointment-form-description">
                      Select your preferred date and appointment time.
                    </p>


                    <div className="appointment-date-box">

                      <label>

                        <span className="appointment-date-label">
                          <CalendarDays size={17} />
                          Preferred date
                        </span>

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
                          <Clock3 size={17} />
                          <strong>Available times</strong>
                        </div>

                        <small>
                          Select a suitable appointment slot
                        </small>

                      </div>


                      <div className="appointment-time-grid">

                        {timeSlots.map((slot) => (

                          <button
                            type="button"
                            key={slot}
                            className={
                              time === slot ? "selected" : ""
                            }
                            onClick={() => setTime(slot)}
                          >

                            {slot}

                            {time === slot && (
                              <CheckCircle2 size={14} />
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
                        <ArrowLeft size={16} />
                        Back
                      </button>

                      <button
                        type="button"
                        className="appointment-next-btn"
                        disabled={!canContinueStep2}
                        onClick={goNext}
                      >
                        Continue
                        <ChevronRight size={17} />
                      </button>

                    </div>

                  </div>

                )}


                {/* STEP 3 */}

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
                      We will use these details to contact you
                      regarding your appointment request.
                    </p>


                    <div className="appointment-fields">

                      <label>

                        Full name
                        <span>*</span>

                        <div className="appointment-input">

                          <UserRound size={17} />

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
                        <ArrowLeft size={16} />
                        Back
                      </button>

                      <button
                        type="submit"
                        className="appointment-confirm-btn"
                      >
                        Submit Request
                        <ArrowUpRight size={16} />
                      </button>

                    </div>

                  </form>

                )}

              </div>


              {/* SUMMARY */}

              <aside className="appointment-summary">

                <div className="appointment-summary-top">

                  <span>
                    <CalendarDays size={18} />
                  </span>

                  <div>
                    <small>YOUR VISIT</small>
                    <strong>Booking overview</strong>
                  </div>

                </div>


                <div className="appointment-summary-line" />


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

                  <ShieldCheck size={16} />

                  <p>
                    Your request will be reviewed by the clinic
                    before the appointment is confirmed.
                  </p>

                </div>

              </aside>

            </div>

          </div>

        ) : (

          /* SUCCESS */

          <div className="appointment-success">

            <div className="appointment-success-icon">
              <CheckCircle2 size={42} />
            </div>

            <span className="appointment-eyebrow">
              <i />
              REQUEST RECEIVED
            </span>

            <h2>
              You are all
              <em> set.</em>
            </h2>

            <p>
              Your appointment request has been captured.
              Here is a quick overview of the details you selected.
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

              <CheckCircle2 size={17} />

              <span>
                The clinic team can contact you using the details
                provided in the form.
              </span>

            </div>


            <div className="appointment-success-actions">

              <button
                type="button"
                className="appointment-confirm-btn"
                onClick={resetBooking}
              >
                Book Another Visit
                <ArrowUpRight size={16} />
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


      {/* HELP */}

      <section className="appointment-help">

        <div className="appointment-help-inner">

          <div>

            <span className="appointment-eyebrow">
              <i />
              NEED HELP
            </span>

            <h2>
              Not sure which service
              <em> you need?</em>
            </h2>

            <p>
              Explore the available dental services before
              choosing your appointment.
            </p>

          </div>

          <Link
            to="/services"
            className="appointment-help-btn"
          >
            Explore Services
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}


function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
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
      width="17"
      height="17"
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