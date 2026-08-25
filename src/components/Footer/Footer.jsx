import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-logo">H</div>
        <h3>OAK & IVORY DENTAL</h3>
        <p>
          Specialist periodontal care with thoughtful technology, personalized
          treatment and an AI-powered patient experience.
        </p>
        <div className="social-row">
       
<span><FaInstagram /></span>
  <span><FaFacebookF /></span>
  <span><FaLinkedinIn /></span>
          
        </div>
      </div>
      <div>
        <h4>Explore</h4>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/team">Who We Help</Link>
        <Link to="/experience">Patient Journey</Link>
      </div>
      <div>
        <h4>Specialist Care</h4>
        <Link to="/services">Gum Health</Link>
        <Link to="/services">Dental Implants</Link>
        <Link to="/cosmetic-dentistry">Cosmetic Dentistry</Link>
        <Link to="/dental-implants">Dental Implants</Link>
        <Link to="/emergency-dentistry">Emergency Care</Link>
        <Link to="/contact">AI Receptionist</Link>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="mailto:info@harmonydental.com">
          <Mail size={13} /> info@harmonydental.com
        </a>
        <a href="tel:+11234567890">
          <Phone size={13} /> +91 80 4123 4567
        </a>
        <a href="/contact">
          <MapPin size={13} /> 123 Main Street, Your City
        </a>
        <div className="footer-hours">
          <span>Mon – Fri</span>
          <strong>9:00 AM – 5:00 PM</strong>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Oak & Ivory Dental. All rights reserved.</span>
        <span>Specialist care • Smart patient experience</span>
      </div>
    </footer>
  );
}
