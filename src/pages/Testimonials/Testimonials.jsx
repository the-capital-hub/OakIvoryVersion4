import "../shared.css";
const quotes = [
  [
    "“I finally stopped being nervous about the dentist.”",
    "I had avoided going to the dentist for years because I was anxious. Everyone at Oak & Ivory was incredibly patient and never made me feel uncomfortable.",
    "Sneha R.",
  ],
  [
    "“The entire process was so smooth.”",
    "From booking the appointment to completing my treatment, the team was professional and genuinely caring. I always knew what was happening and what the next step was.",
    "Rahul M.",
  ],
  [
    "“My smile has completely changed my confidence.”",
    "I had been thinking about improving my smile for years. Dr. Meera understood exactly what I wanted and helped me choose a treatment that looked natural.",
    "Priya S.",
  ],
  [
    "“Excellent experience from start to finish.”",
    "The clinic is modern, the staff is friendly and the doctors take the time to actually listen. I would definitely recommend Oak & Ivory.",
    "Arjun K.",
  ],
];
export default function Testimonials() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div>
            <span className="kicker">Patient Testimonials</span>
            <h1>
              Real experiences. <em>Real confidence.</em>
            </h1>
            <p>
              Stories from patients who wanted clearer communication, thoughtful
              treatment and a more comfortable dental experience.
            </p>
          </div>
          <div className="page-hero-photo">
            <img
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=85"
              alt="Happy patient"
            />
          </div>
        </div>
      </section>
      <section className="content-section">
        <span className="eyebrow">What Our Patients Say</span>
        <h2 className="section-title">
          Care that people <em>remember.</em>
        </h2>
        <div className="quote-grid" style={{ marginTop: 35 }}>
          {quotes.map(([q, p, n]) => (
            <article className="quote-card" key={n}>
              <div className="quote-mark">“</div>
              <p>{q}</p>
              <small>{p}</small>
              <div className="quote-person">
                {n}
                <small>Patient • ★★★★★</small>
              </div>
            </article>
          ))}
        </div>
        <p style={{ fontSize: 9, color: "#8b9e9b", marginTop: 25 }}>
          Demo note: These testimonials are fictional and must be replaced with
          genuine, consented patient testimonials before production use.
        </p>
      </section>
    </>
  );
}
