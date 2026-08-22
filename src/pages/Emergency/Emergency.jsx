
import { AlertTriangle, Phone, Bot, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../shared.css";
export default function Emergency(){
 return <>
  <section className="page-hero"><div className="page-hero-inner"><div><span className="kicker">Emergency Dentistry</span><h1>Dental emergencies need <em>attention.</em></h1><p>If you're experiencing severe tooth pain, swelling, a broken tooth or another urgent dental problem, contact the clinic as soon as possible.</p><div style={{display:"flex",gap:9,flexWrap:"wrap",marginTop:18}}><a className="button-primary" href="tel:+918041234567"><Phone size={14}/> Call the Clinic</a><Link className="button-primary" to="/contact?assistant=ivy"><Bot size={14}/> Talk to Ivy</Link></div></div><div className="page-hero-photo"><img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85" alt="Emergency dental care"/></div></div></section>
  <section className="content-section"><span className="eyebrow">Urgent Concerns</span><h2 className="section-title">When should you <em>contact us?</em></h2><div className="card-grid" style={{marginTop:35}}>{["Severe toothache","Facial or dental swelling","Broken or damaged tooth","Dental trauma","Bleeding","Lost dental restoration","Severe sensitivity"].map(t=><article className="info-card simple" key={t}><h3><AlertTriangle size={16}/> {t}</h3><p>Contact the clinic so our team can assess your situation and guide you toward the appropriate next step.</p></article>)}</div></section>
  <section className="dark-section"><div className="dark-inner"><span className="eyebrow" style={{color:"#8ce7e1"}}>Important</span><h2 className="section-title" style={{color:"white"}}>Ivy can guide. <em>Your dentist diagnoses.</em></h2><p className="section-copy">Ivy provides general guidance and appointment assistance. She does not diagnose conditions or replace professional medical advice.</p></div></section>
 </>;
}
