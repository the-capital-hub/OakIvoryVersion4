
import { useState } from "react";
import "../shared.css";
const qs=[
["Are you accepting new patients?","Yes. Oak & Ivory Dental welcomes new patients."],
["How can I book an appointment?","You can book through the website, call the clinic, message on WhatsApp or speak with Ivy, our AI receptionist."],
["Do you offer emergency dental treatment?","Yes. Contact us if you're experiencing an urgent dental concern so our team can assess the situation and guide you appropriately."],
["Do you offer teeth whitening?","Yes. We provide professional teeth-whitening options following an appropriate dental assessment."],
["Do you provide dental implants?","Yes. Our dentists provide implant consultations and treatment where clinically appropriate."],
["Do you offer clear aligners?","Yes. Our team provides clear-aligner consultations and can determine whether you're a suitable candidate."],
["Do you treat children?","Yes. We provide family dental care, including preventive dental care for children."],
["Do you accept insurance?","We can help you understand available payment and insurance-related options. Coverage depends on your individual plan."],
["Do you accept UPI and cards?","The clinic can accept commonly used digital and card payment methods. Final payment options should be confirmed with the clinic."],
["I am scared of dentists. Can you help?","Absolutely. Our team takes a calm, patient and judgement-free approach."]
];
export default function FAQ(){const [open,setOpen]=useState(0);return <><section className="page-hero"><div className="page-hero-inner"><div><span className="kicker">Frequently Asked Questions</span><h1>Questions? We've got <em>answers.</em></h1><p>Clear information helps you feel confident before your appointment, during treatment and after you leave.</p></div><div className="page-hero-photo"><img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85" alt="Dental care"/></div></div></section><section className="content-section"><div className="faq-layout"><div><span className="eyebrow">Need More Help?</span><h2 className="section-title">Still have a <em>question?</em></h2><p className="section-copy">Talk to Ivy for quick guidance or contact our team for help with your specific situation.</p></div><div className="faq-list">{qs.map(([q,a],i)=><div className={`faq-row ${open===i?"open":""}`} key={q} onClick={()=>setOpen(open===i?-1:i)}><div><strong>{q}</strong>{open===i&&<p>{a}</p>}</div><span>{open===i?"−":"+"}</span></div>)}</div></div></section></>}
