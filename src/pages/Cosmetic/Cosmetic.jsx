
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../shared.css";
const items=[
 ["Teeth Whitening","Brighten your smile and reduce the appearance of stains.","https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85"],
 ["Veneers","Create a refined, natural-looking smile with customised dental veneers.","https://images.unsplash.com/photo-1606265752439-1f18756aa2b7?auto=format&fit=crop&w=1200&q=85"],
 ["Composite Bonding","Improve the shape and appearance of teeth with minimally invasive cosmetic treatment.","https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"],
 ["Smile Makeovers","Combine treatments to create a comprehensive smile transformation.","https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85"],
 ["Clear Aligners","Straighten your teeth discreetly with modern clear-aligner treatment.","https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85"],
];
export default function Cosmetic(){
 return <>
  <section className="page-hero"><div className="page-hero-inner"><div><span className="kicker">Cosmetic Dentistry</span><h1>Your dream smile, <em>designed for you.</em></h1><p>You don't need a completely different smile. You need a smile that makes you feel confident. Our cosmetic dentistry is designed around your face, personality and goals.</p><Link className="button-primary" to="/contact">Book a Smile Consultation <ArrowUpRight size={14}/></Link></div><div className="page-hero-photo"><img src={items[0][2]} alt="Cosmetic dentistry"/></div></div></section>
  <section className="content-section"><span className="eyebrow">Popular Treatments</span><h2 className="section-title">Natural-looking <em>smile transformations.</em></h2><div className="card-grid" style={{marginTop:35}}>{items.map(([t,p,img])=><article className="info-card" key={t}><div className="card-image"><img src={img} alt={t}/></div><h3>{t}</h3><p>{p}</p><Link to="/contact">Explore Treatment <ArrowUpRight size={12}/></Link></article>)}</div></section>
  <section className="dark-section"><div className="dark-inner split"><div><span className="eyebrow" style={{color:"#8ce7e1"}}>Personalized Smile Design</span><h2 className="section-title" style={{color:"white"}}>Your smile should still look like <em>you.</em></h2><p className="section-copy">We begin with your goals, facial proportions, current oral health and the level of change you actually want.</p><Link className="button-primary" to="/contact">Start Your Consultation <ArrowUpRight size={14}/></Link></div><div className="image-card"><img src={items[3][2]} alt="Smile consultation"/></div></div></section>
 </>;
}
