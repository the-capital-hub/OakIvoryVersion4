
import { useState } from "react";
import { Bot, CalendarDays, Phone, X, Send, CheckCircle2 } from "lucide-react";
import "./AIWidgets.css";

export default function AIWidgets(){
 const [mode,setMode]=useState(null);
 const [confirmed,setConfirmed]=useState(false);

 const close=()=>{setMode(null);setConfirmed(false)};
 return <>
  <div className="ai-dock">
    <span className="ai-live"></span><strong>AI Receptionist</strong>
    <button onClick={()=>setMode("chat")}><Bot size={13}/> Talk to Ivy</button>
    <button className="ai-dock-book" onClick={()=>setMode("booking")}><CalendarDays size={13}/> Appointment</button>
  </div>

  {mode && <div className="ai-overlay" onClick={close}>
   <div className={`ai-modal ${mode==="call"?"call-modal":""}`} onClick={e=>e.stopPropagation()}>
    <button className="ai-close" onClick={close}><X/></button>

    {mode==="chat" && <>
      <div className="ai-header"><div className="ai-avatar"><Bot/></div><div><strong>Ivy</strong><small>Online • AI Dental Receptionist</small></div><span className="ai-online"></span></div>
      <div className="ai-chat">
        <div className="ai-bubble bot">Hi! I'm Ivy 👋 How can I help you today?</div>
        <div className="ai-bubble user">I'd like to book a gum health consultation.</div>
        <div className="ai-bubble bot">Absolutely. I can help you find a suitable appointment.</div>
        <div className="ai-quick">
          <button onClick={()=>setMode("booking")}>Book an appointment</button>
          <button>Gum care information</button><button>Clinic hours</button>
        </div>
      </div>
      <div className="ai-input">Type your message... <Send size={15}/></div>
    </>}

    {mode==="booking" && <>
      {confirmed ? <div className="booking-success">
        <div className="success-icon"><CheckCircle2/></div><span className="ai-kicker">Ivy AI Booking</span>
        <h2>Appointment<br/><em>Confirmed.</em></h2>
        <p>Wednesday, 21 August • 11:30 AM<br/>Gum Health Consultation</p>
        <button className="ai-primary" onClick={close}>Done</button>
      </div> : <>
        <span className="ai-kicker">Ivy AI Booking</span><h2>Let's find your<br/><em>perfect appointment.</em></h2>
        <div className="booking-progress"><span className="active">1 Service</span><span>2 Date & Time</span><span>3 Details</span></div>
        <select className="ai-select"><option>Gum Health Consultation</option><option>Dental Implant Consultation</option><option>Smile & Whitening</option></select>
        <div className="booking-dates"><button>Tue<br/><b>20</b></button><button className="selected">Wed<br/><b>21</b></button><button>Thu<br/><b>22</b></button><button>Fri<br/><b>23</b></button></div>
        <div className="booking-times"><button>10:00 AM</button><button className="selected">11:30 AM</button><button>2:00 PM</button><button>4:30 PM</button></div>
        <button className="ai-primary full" onClick={()=>setConfirmed(true)}>Confirm with Ivy <CalendarDays size={15}/></button>
      </>}
    </>}

    {mode==="call" && <>
      <div className="voice-orb"><span></span><span></span><span></span></div>
      <span className="ai-kicker">AI Voice Receptionist</span><h2>Talk to <em>Ivy.</em></h2>
      <p className="voice-copy">Ask about treatments, availability, directions or your next appointment.</p>
      <div className="voice-wave">{Array.from({length:24},(_,i)=><i key={i} style={{height:`${18+Math.abs(Math.sin(i*1.6))*55}px`}}/>)}</div>
      <button className="ai-primary full" onClick={close}><Phone size={15}/> End Demo Call</button>
    </>}
   </div>
  </div>}
 </>
}
