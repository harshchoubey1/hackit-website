"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

type FormData = {
  email: string;
  teamName: string;
  leaderName: string;
  phone: string;
  participantType: string;
  college: string;
  enrollment: string;
  branch: string;
  year: string;
  ps1: string;
  ps2: string;
  collegeId: File | null;
  payment: File | null;
};

export default function RegisterPage() {

const [form,setForm] = useState<FormData>({
email:"",
teamName:"",
leaderName:"",
phone:"",
participantType:"",
college:"",
enrollment:"",
branch:"",
year:"",
ps1:"",
ps2:"",
collegeId:null,
payment:null
});

const handleChange = (
e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
)=>{
const {name,value} = e.target;
setForm({...form,[name]:value});
};

const handleFile = (e:ChangeEvent<HTMLInputElement>)=>{
const {name,files}=e.target;

if(files){
setForm({...form,[name]:files[0]});
}
};

const handleSubmit = (e:FormEvent)=>{
e.preventDefault();

console.log(form);

alert("Registration Submitted!");
};

return(

<div className="register-page">

{/* NAVBAR */}

<nav className="navbar">

<div className="nav-left">
<Image
src="/images/logo-footer-1913c3.png"
alt="HackIT"
width={150}
height={40}
/>
</div>

<div className="nav-links">

<Link href="/">Home</Link>

<Link href="/problem-statement">Problems</Link>

<Link href="/rules">Rules</Link>

<Link href="/about">About</Link>

<Link href="/register">
<button className="register-btn">
Register Now
</button>
</Link>

</div>

</nav>


{/* PAGE TITLE */}

<h1>HackIT Registration</h1>


<form className="register-form" onSubmit={handleSubmit}>

{/* EMAIL */}

<label>Email *</label>
<input
type="email"
name="email"
required
onChange={handleChange}
/>


{/* TEAM NAME */}

<label>Team Name *</label>
<input
type="text"
name="teamName"
required
onChange={handleChange}
/>


{/* TEAM LEADER */}

<label>Team Leader Name *</label>
<input
type="text"
name="leaderName"
required
onChange={handleChange}
/>


{/* PHONE */}

<label>Contact Number (WhatsApp) *</label>
<input
type="tel"
name="phone"
required
onChange={handleChange}
/>


{/* PARTICIPANT TYPE */}

<label>Are You? *</label>

<select
name="participantType"
required
onChange={handleChange}
>

<option value="">Select</option>
<option value="Amitian">AMITIAN</option>
<option value="Non-Amitian">NON-AMITIAN</option>

</select>


{/* COLLEGE */}

<label>University / College Name *</label>
<input
type="text"
name="college"
required
onChange={handleChange}
/>


{/* ENROLLMENT */}

<label>Enrollment Number / College ID *</label>
<input
type="text"
name="enrollment"
required
onChange={handleChange}
/>


{/* COLLEGE ID UPLOAD */}

<label>College ID Card (Photo) *</label>
<input
type="file"
name="collegeId"
accept="image/*"
required
onChange={handleFile}
/>


{/* BRANCH */}

<label>Branch</label>
<input
type="text"
name="branch"
onChange={handleChange}
/>


{/* YEAR */}

<label>Academic Year *</label>

<select
name="year"
required
onChange={handleChange}
>

<option value="">Select Year</option>
<option>1st Year</option>
<option>2nd Year</option>
<option>3rd Year</option>
<option>4th Year</option>

</select>


{/* PS TITLE 1 */}

<label>PS Title 1 *</label>

<select
name="ps1"
required
onChange={handleChange}
>

<option value="">Select Problem Statement</option>

<option>PS1001 - MentorConnect</option>
<option>PS1002 - SkillGap Analyzer</option>
<option>PS2001 - AgriConnect</option>
<option>PS2002 - FinTrack</option>
<option>PS3001 - AI-Powered Document Analysis</option>
<option>PS3002 - Emotion Analysis System</option>
<option>PS4001 - PhishShield</option>
<option>PS4002 - Intrusion Detection System</option>
<option>PS5001 - Smart City Digital Twin</option>

</select>


{/* PS TITLE 2 */}

<label>PS Title 2 (Optional)</label>

<select
name="ps2"
onChange={handleChange}
>

<option value="">Optional</option>

<option>PS1001 - MentorConnect</option>
<option>PS1002 - SkillGap Analyzer</option>
<option>PS2001 - AgriConnect</option>
<option>PS2002 - FinTrack</option>
<option>PS3001 - AI-Powered Document Analysis</option>
<option>PS3002 - Emotion Analysis System</option>
<option>PS4001 - PhishShield</option>
<option>PS4002 - Intrusion Detection System</option>
<option>PS5001 - Smart City Digital Twin</option>

</select>


{/* PAYMENT SCREENSHOT */}

<label>Payment Screenshot *</label>

<input
type="file"
name="payment"
accept="image/*,.pdf"
required
onChange={handleFile}
/>


<button type="submit">

Submit Registration

</button>

</form>

</div>

);

}