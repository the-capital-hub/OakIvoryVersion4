import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

const exploreLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Treatments", "/services"],
  ["Our Dentists", "/doctors"],
  ["Patient Journey", "/experience"],
  ["Contact", "/contact"],
];

const treatmentLinks = [
  ["Complete Dental Care", "/services"],
  ["Dental Implants", "/dental-implants"],
  ["Cosmetic Dentistry", "/cosmetic-dentistry"],
  ["Gum Care", "/services"],
  ["Emergency Care", "/emergency-dentistry"],
];

export default function Footer() {
  return (
    <footer className="footer">

      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-brand-link">
            <span className="footer-logo">V</span>

            <div className="footer-brand-name">
              <strong>VASU AESTHETICS</strong>
              <small>DENTAL CARE</small>
            </div>
          </Link>

          <p>
            Complete dental care with personalised treatment,
            thoughtful guidance and a comfortable patient experience.
          </p>

          <div className="footer-social">
            <a
              href="#"
              aria-label="Instagram"
              className="footer-social-link"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="footer-social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="footer-column">

          <span className="footer-heading">
            <i />
            EXPLORE
          </span>

          <div className="footer-links">
            {exploreLinks.map(([label, path]) => (
              <Link to={path} key={label}>
                <span>{label}</span>
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>

        </div>

        {/* DENTAL CARE */}
        <div className="footer-column">

          <span className="footer-heading">
            <i />
            DENTAL CARE
          </span>

          <div className="footer-links">
            {treatmentLinks.map(([label, path]) => (
              <Link to={path} key={label}>
                <span>{label}</span>
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>

        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <span className="footer-heading">
            <i />
            CONTACT
          </span>

          <a
            href="tel:+918431788571"
            className="footer-contact-item"
          >
            <span className="footer-contact-icon">
              <Phone size={15} />
            </span>

            <div>
              <small>Dr. Rajkamal S.</small>
              <strong>+91 84317 88571</strong>
            </div>
          </a>

          <a
            href="tel:+919900176558"
            className="footer-contact-item"
          >
            <span className="footer-contact-icon">
              <Phone size={15} />
            </span>

            <div>
              <small>Dr. Abdul Rahim</small>
              <strong>+91 99001 76558</strong>
            </div>
          </a>

          <Link
            to="/contact"
            className="footer-contact-item"
          >
            <span className="footer-contact-icon">
              <MapPin size={15} />
            </span>

            <div>
              <small>Visit Vasu</small>

              <strong>
                No. 211, 50th Cross, 3rd Block,
                Rajajinagar, Bengaluru 560010
              </strong>
            </div>
          </Link>

        </div>
      </div>

      {/* CTA */}
      <div className="footer-cta">

        <div className="footer-cta-content">

          <span className="footer-cta-label">
            <i />
            YOUR NEXT VISIT
          </span>

          <h2>
            Your smile deserves
            <em> thoughtful care.</em>
          </h2>

        </div>

        <Link
          to="/appointment"
          className="footer-cta-button"
        >
          <span>Book an Appointment</span>

          <span className="footer-cta-arrow">
            <ArrowUpRight size={16} />
          </span>
        </Link>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <span>
          © 2026 Vasu Aesthetics and Dental Care
        </span>

        <span>
          Complete dental care
        </span>

        <Link to="/contact">
          Visit Us
          <ArrowUpRight size={13} />
        </Link>

      </div>

    </footer>
  );
}