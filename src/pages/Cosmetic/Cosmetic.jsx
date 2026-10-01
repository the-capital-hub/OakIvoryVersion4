import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../shared.css";
import "./Cosmetic.css";

const treatments = [
  {
    number: "01",
    title: "Teeth Whitening",
    text: "Brighten your smile and reduce the appearance of stains with a carefully planned whitening treatment.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Veneers",
    text: "Create a refined and natural looking smile with customised dental veneers designed around your appearance.",
    image:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa2b7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Composite Bonding",
    text: "Improve the shape and appearance of teeth with a minimally invasive cosmetic treatment.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Smile Makeover",
    text: "Combine suitable cosmetic treatments to create a balanced and personalised smile transformation.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    title: "Clear Aligners",
    text: "Straighten your teeth discreetly with modern clear aligner treatment and personalised planning.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
  },
];

const principles = [
  {
    icon: Sparkles,
    title: "Natural Results",
    text: "The goal is a smile that feels balanced, natural and comfortable for you.",
  },
  {
    icon: ShieldCheck,
    title: "Thoughtful Planning",
    text: "Your goals and existing dental condition guide the treatment approach.",
  },
  {
    icon: Heart,
    title: "Personalised Care",
    text: "Every smile has its own character, so your treatment is planned around you.",
  },
];

export default function Cosmetic() {
  return (
    <main className="cosmetic-page">
      <section className="cosmetic-hero">
        <div className="cosmetic-hero-glow" />

        <div className="cosmetic-hero-inner">
          <div className="cosmetic-hero-content">
            <span className="cosmetic-kicker">
              <i />
              COSMETIC DENTISTRY
            </span>

            <h1>
              A confident smile,
              <em> designed around you.</em>
            </h1>

            <p>
              Cosmetic dentistry at Vasu Aesthetics and Dental Care focuses on
              creating smiles that feel natural, balanced and personal to you.
            </p>

            <div className="cosmetic-hero-actions">
              <Link to="/contact" className="cosmetic-primary-btn">
                Book a Smile Consultation
                <span>
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              <a href="#treatments" className="cosmetic-scroll-link">
                Explore Treatments
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="cosmetic-hero-points">
              <span>
                <CheckCircle2 size={15} />
                Personalised planning
              </span>

              <span>
                <CheckCircle2 size={15} />
                Natural looking results
              </span>
            </div>
          </div>

          <div className="cosmetic-hero-visual">
            <div className="cosmetic-hero-image">
              <img
                src={treatments[0].image}
                alt="Cosmetic dental treatment"
              />
            </div>

            <div className="cosmetic-image-ring" />

            <div className="cosmetic-floating-card">
              <span>
                <Sparkles size={17} />
              </span>

              <div>
                <strong>Smile focused care</strong>
                <small>Designed around your natural features</small>
              </div>
            </div>

            <div className="cosmetic-number-card">
              <strong>05</strong>
              <span>Cosmetic treatments</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cosmetic-intro">
        <div className="cosmetic-intro-inner">
          <div className="cosmetic-intro-heading">
            <span className="cosmetic-eyebrow">
              <i />
              YOUR SMILE
            </span>

            <h2>
              Cosmetic care should feel
              <em> personal.</em>
            </h2>
          </div>

          <div className="cosmetic-intro-copy">
            <p>
              Your smile is part of how you express yourself. Our cosmetic
              treatments are planned around your existing smile, your goals and
              the level of change you actually want.
            </p>

            <Link to="/contact" className="cosmetic-outline-btn">
              Discuss Your Smile
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="cosmetic-treatments" id="treatments">
        <div className="cosmetic-section-heading">
          <div>
            <span className="cosmetic-eyebrow">
              <i />
              COSMETIC TREATMENTS
            </span>

            <h2>
              Small changes can create
              <em> a meaningful difference.</em>
            </h2>
          </div>

          <p>
            Explore cosmetic treatment options available at Vasu Aesthetics
            and Dental Care.
          </p>
        </div>

        <div className="cosmetic-treatment-grid">
          {treatments.map((item) => (
            <article className="cosmetic-treatment-card" key={item.title}>
              <div className="cosmetic-card-image">
                <img src={item.image} alt={item.title} />

                <span className="cosmetic-card-number">
                  {item.number}
                </span>

                <div className="cosmetic-card-overlay" />
              </div>

              <div className="cosmetic-card-content">
                <span className="cosmetic-card-label">
                  COSMETIC CARE
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <Link to="/contact">
                  Discuss This Treatment
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cosmetic-principles">
        <div className="cosmetic-principles-inner">
          <div className="cosmetic-principles-heading">
            <span className="cosmetic-eyebrow light">
              <i />
              OUR APPROACH
            </span>

            <h2>
              Designed for your smile,
              <em> not someone else's.</em>
            </h2>

            <p>
              Cosmetic dentistry is not only about changing teeth. It is about
              creating a result that works naturally with your face and smile.
            </p>
          </div>

          <div className="cosmetic-principles-grid">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <article
                className="cosmetic-principle-card"
                key={title}
              >
                <div className="cosmetic-principle-top">
                  <span>0{index + 1}</span>

                  <div>
                    <Icon size={19} />
                  </div>
                </div>

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cosmetic-story">
        <div className="cosmetic-story-image">
          <img
            src={treatments[3].image}
            alt="Smile makeover treatment"
            loading="lazy"
          />

          <div className="cosmetic-story-badge">
            <strong>VASU</strong>
            <span>AESTHETICS AND DENTAL CARE</span>
          </div>
        </div>

        <div className="cosmetic-story-content">
          <span className="cosmetic-eyebrow">
            <i />
            SMILE DESIGN
          </span>

          <h2>
            Your smile should still look
            <em> like you.</em>
          </h2>

          <p>
            We start by understanding what you would like to improve and what
            you want your smile to look and feel like. From there, suitable
            cosmetic options can be discussed with you.
          </p>

          <div className="cosmetic-check-list">
            <div>
              <CheckCircle2 size={16} />
              <span>Understand your smile goals</span>
            </div>

            <div>
              <CheckCircle2 size={16} />
              <span>Discuss suitable treatment options</span>
            </div>

            <div>
              <CheckCircle2 size={16} />
              <span>Create a personalised treatment approach</span>
            </div>
          </div>

          <Link to="/contact" className="cosmetic-outline-btn">
            Start Your Consultation
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section className="cosmetic-final">
        <div className="cosmetic-final-inner">
          <div>
            <span className="cosmetic-eyebrow light">
              <i />
              YOUR NEXT STEP
            </span>

            <h2>
              Ready to talk about
              <em> your smile?</em>
            </h2>

            <p>
              Book a consultation with Vasu Aesthetics and Dental Care to
              discuss your smile goals.
            </p>
          </div>

          <Link to="/contact" className="cosmetic-final-btn">
            Book a Consultation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}