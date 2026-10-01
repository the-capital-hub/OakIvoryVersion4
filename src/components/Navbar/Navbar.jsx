import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Bot,
  Menu,
  X,
  Phone,
} from "lucide-react";
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
      {/* TOP UTILITY BAR */}

      <div className="utility-bar">
        <div className="utility-left">
          <span className="utility-dot" />
          <span>Rajajinagar, Bengaluru</span>
        </div>

        <div className="utility-center">
          Vasu Aesthetics and Dental Care
        </div>

        <a
          href="tel:+918431788571"
          className="utility-phone"
        >
          <Phone size={13} />
          <span>+91 84317 88571</span>
        </a>
      </div>

      {/* NAVBAR */}

      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="nav-inner">

          {/* BRAND */}

          <Link
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
          >
            <span className="brand-mark">
              V
            </span>

            <span className="brand-name">
              VASU AESTHETICS
              <small>DENTAL CARE</small>
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

          {/* DESKTOP ACTIONS */}

          <div className="nav-actions">

            <Link
              to="/ivy"
              className="ivy-nav-btn"
            >
              <span className="ivy-icon">
                <Bot size={14} />
              </span>

              <span>Talk to Ivy</span>
            </Link>

            <Link
              to="/appointment"
              className="appointment-nav-btn"
            >
              <span className="appointment-text">
                Book Appointment
              </span>

              <span className="appointment-arrow">
                <ArrowUpRight size={15} />
              </span>
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}

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

        {/* MOBILE NAVIGATION */}

        <div
          className={`mobile-nav ${
            open ? "mobile-nav-open" : ""
          }`}
        >
          <div className="mobile-nav-header">
            <div className="mobile-brand">
              <span>VASU AESTHETICS</span>
              <small>DENTAL CARE</small>
            </div>

            <div className="mobile-location">
              <i />
              Rajajinagar, Bengaluru
            </div>
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
                <ArrowUpRight size={15} />
              </NavLink>
            ))}
          </div>

          <div className="mobile-nav-actions">

            <Link
              to="/ivy"
              className="mobile-ivy"
              onClick={() => setOpen(false)}
            >
              <span className="mobile-ivy-icon">
                <Bot size={17} />
              </span>

              <div>
                <b>Talk to Ivy</b>
                <small>
                  Your digital dental assistant
                </small>
              </div>

              <ArrowUpRight size={15} />
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
            <Phone size={14} />

            <a href="tel:+918431788571">
              +91 84317 88571
            </a>
          </div>
        </div>
      </header>
    </>
  );
}