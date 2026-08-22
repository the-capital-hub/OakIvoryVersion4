import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Bot, Menu, X, Phone } from "lucide-react";
import "./Navbar.css";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Treatments", "/services"],
  ["Our Dentists", "/doctors"],
  ["Patient Journey", "/experience"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ================= UTILITY BAR ================= */}

      <div className="utility-bar">
        <div className="utility-left">
          <span className="utility-dot"></span>
          <span>Indiranagar · Bengaluru</span>
        </div>

        <div className="utility-center">
          Specialist Dental Care · New Patient Consultations Available
        </div>

        <a href="tel:+918041234567" className="utility-phone">
          <Phone size={11} />
          <span>+91 80 4123 4567</span>
        </a>
      </div>

      {/* ================= NAVBAR ================= */}

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-inner">

          {/* LOGO */}

          <Link
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
          >
            <span className="brand-mark">
              O
            </span>

            <span className="brand-name">
              OAK & IVORY
              <small>DENTAL</small>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="desktop-nav">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* ACTIONS */}

          <div className="nav-actions">

            <Link
              className="ivy-nav-btn"
              to="/ivy"
            >
              <span className="ivy-icon">
                <Bot size={13} />
              </span>

              Talk to Ivy
            </Link>

            <Link
              className="appointment-nav-btn"
              to="/appointment"
            >
              <span className="appointment-text">
                Book Appointment
              </span>

              <span className="appointment-arrow">
                <ArrowUpRight size={14} />
              </span>
            </Link>

          </div>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            className={`mobile-menu ${
              open ? "menu-open" : ""
            }`}
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>

        {/* ================= MOBILE NAV ================= */}

        <div
          className={`mobile-nav ${
            open ? "mobile-nav-open" : ""
          }`}
        >

          <div className="mobile-nav-header">
            <div>
              <span>OAK & IVORY</span>
              <small>DENTAL CARE</small>
            </div>

            <span className="mobile-status">
              <i></i>
              Open today
            </span>
          </div>

          <div className="mobile-nav-links">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "mobile-nav-link active"
                    : "mobile-nav-link"
                }
              >
                <span>{label}</span>
                <ArrowUpRight size={14} />
              </NavLink>
            ))}
          </div>

          <div className="mobile-nav-actions">

            <Link
              to="/ivy"
              className="mobile-ivy"
              onClick={() => setOpen(false)}
            >
              <span>
                <Bot size={16} />
              </span>

              <div>
                <b>Talk to Ivy</b>
                <small>AI receptionist · Available 24/7</small>
              </div>
            </Link>

            <Link
              to="/appointment"
              className="mobile-book"
              onClick={() => setOpen(false)}
            >
              <span>Book an Appointment</span>
              <ArrowUpRight size={17} />
            </Link>

          </div>

          <div className="mobile-contact">
            <Phone size={13} />

            <a href="tel:+918041234567">
              +91 80 4123 4567
            </a>

            <span>
              · 9 AM – 7 PM
            </span>
          </div>

        </div>
      </header>
    </>
  );
}