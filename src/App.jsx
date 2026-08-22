
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AIWidgets from "./components/AI/AIWidgets";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";
import Experience from "./pages/Experience/Experience";
import Doctors from "./pages/Doctors/Doctors";
import Contact from "./pages/Contact/Contact";
import Cosmetic from "./pages/Cosmetic/Cosmetic";
import Implants from "./pages/Implants/Implants";
import Emergency from "./pages/Emergency/Emergency";
import Testimonials from "./pages/Testimonials/Testimonials";
import FAQ from "./pages/FAQ/FAQ";
import Appointment from "./pages/Appointment/Appointment";
import Ivy from "./pages/Ivy/Ivy";
import "./styles/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/ivy" element={<Ivy />} />
          <Route path="/cosmetic-dentistry" element={<Cosmetic />} />
          <Route path="/dental-implants" element={<Implants />} />
          <Route path="/emergency-dentistry" element={<Emergency />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <AIWidgets />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
