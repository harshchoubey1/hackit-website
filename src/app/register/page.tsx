"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { problemsList } from "@/data/problems";

type FormData = {
  email: string;
  teamName: string;
  teamSize: string;
  leaderName: string;
  phone: string;
  githubLink: string;
  participantType: string;
  college: string;
  enrollment: string;
  branch: string;
  year: string;
  ps1: string;
  ps2: string;
  collegeId: File | null;
  payment: File | null;
  [key: string]: unknown;
};

export default function RegisterPage() {
  const [step, setStep]               = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileNames, setFileNames]     = useState({ id: "", payment: "" });
  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    email: "", teamName: "", teamSize: "1", leaderName: "", phone: "",
    githubLink: "", participantType: "", college: "", enrollment: "",
    branch: "", year: "", ps1: "", ps2: "", collegeId: null, payment: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setForm({ ...form, [name]: files[0] });
      setFileNames((prev) => ({
        ...prev,
        [name === "collegeId" ? "id" : "payment"]: files[0].name,
      }));
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let collegeIdUrl  = "";
      let paymentUrl    = "";

      const CLOUD_NAME    = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const UPLOAD_PRESET = "data_default";

      const uploadToCloudinary = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);
        try {
          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
            { method: "POST", body: formData }
          );
          if (!res.ok) { console.error("Cloudinary failed:", await res.text()); return ""; }
          const data = await res.json();
          return data.secure_url || "";
        } catch (err) {
          console.error("Upload error:", err);
          return "";
        }
      };

      if (form.collegeId) collegeIdUrl = await uploadToCloudinary(form.collegeId as File);
      if (form.payment)   paymentUrl   = await uploadToCloudinary(form.payment as File);

      const finalData = {
        teamName:        form.teamName,
        teamSize:        form.teamSize,
        leaderName:      form.leaderName,
        email:           form.email,
        phone:           form.phone,
        githubLink:      form.githubLink,
        participantType: form.participantType,
        college:         form.college,
        enrollment:      form.enrollment,
        year:            form.year,
        ps1:             form.ps1,
        ps2:             form.ps2,
        collegeIdUrl,
        paymentUrl,
        membersData: Object.keys(form)
          .filter((key) => key.startsWith("member"))
          .reduce((obj, key) => { obj[key] = form[key]; return obj; }, {} as Record<string, unknown>),
        registeredAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "hackathon_registrations"), finalData);
      console.log("Registration saved:", docRef.id);
      router.push("/success");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-[#0a0b14] border border-white/8 rounded-xl p-3.5 text-white " +
    "focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 " +
    "transition-all text-sm placeholder:text-gray-600";

  const labelClass = "block text-sm text-gray-400 mb-2";

  const renderAdditionalMembers = () => {
    const size = parseInt(form.teamSize);
    if (size <= 1) return null;
    return (
      <div className="mt-8 pt-8 border-t border-white/8 space-y-6">
        {Array.from({ length: size - 1 }, (_, idx) => {
          const n = idx + 2;
          return (
            <div key={n} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl">
              <h4 className="text-white font-semibold mb-4 text-sm">
                Member {n}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Name</label>
                  <input type="text" name={`member${n}Name`} required onChange={handleChange} className={inputClass} placeholder="Full Name" />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name={`member${n}Email`} required onChange={handleChange} className={inputClass} placeholder="Email Address" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const stepLabels = ["Team Info", "Academics", "Project & Members", "Uploads"];

  return (
    <div
      className="min-h-screen text-white py-24 px-4 sm:px-6 flex justify-center"
      style={{ fontFamily: "var(--font-exo2)" }}
    >
      <div className="w-full max-w-3xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Register for HackIT 2026
          </h1>
          <p className="text-gray-500 text-sm">
            Fill out the details below to secure your spot.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs mb-3 px-1">
            {stepLabels.map((label, i) => (
              <span
                key={label}
                className={`transition-colors ${
                  step >= i + 1 ? "text-white" : "text-gray-600"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="w-full h-[2px] bg-white/8 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF6600] transition-all duration-500 rounded-full"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#0a0b14] border border-white/8 rounded-2xl p-6 md:p-10">
          <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>

            {/* STEP 1 — Team & Leader */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-lg font-semibold mb-6 pb-4 border-b border-white/8 text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}>
                  Team &amp; Leader Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Team Name *</label>
                    <input type="text" name="teamName" required value={form.teamName} onChange={handleChange} className={inputClass} placeholder="e.g. Innovators" />
                  </div>
                  <div>
                    <label className={labelClass}>Team Size *</label>
                    <select name="teamSize" required value={form.teamSize} onChange={handleChange} className={inputClass}>
                      <option value="1">Solo (1 Member)</option>
                      <option value="2">2 Members</option>
                      <option value="3">3 Members</option>
                      <option value="4">4 Members</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Leader Name *</label>
                    <input type="text" name="leaderName" required value={form.leaderName} onChange={handleChange} className={inputClass} placeholder="Full Name" />
                  </div>
                  <div>
                    <label className={labelClass}>Leader Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="email@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Contact Number *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="+91..." />
                  </div>
                  <div>
                    <label className={labelClass}>GitHub Profile</label>
                    <input type="url" name="githubLink" value={form.githubLink} onChange={handleChange} className={inputClass} placeholder="https://github.com/..." />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 — Academics */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-lg font-semibold mb-6 pb-4 border-b border-white/8 text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}>
                  Academic Background
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Participant Type *</label>
                    <select name="participantType" required value={form.participantType} onChange={handleChange} className={inputClass}>
                      <option value="">Select Status</option>
                      <option value="Amitian">AMITIAN</option>
                      <option value="Non-Amitian">NON-AMITIAN</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Academic Year *</label>
                    <select name="year" required value={form.year} onChange={handleChange} className={inputClass}>
                      <option value="">Select Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>University / College *</label>
                    <input type="text" name="college" required value={form.college} onChange={handleChange} className={inputClass} placeholder="Institution name" />
                  </div>
                  <div>
                    <label className={labelClass}>Enrollment / College ID *</label>
                    <input type="text" name="enrollment" required value={form.enrollment} onChange={handleChange} className={inputClass} placeholder="ID Number" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 — Problem Statement & Members */}
            {step === 3 && (
              <div className="space-y-5">
                <h2 className="text-lg font-semibold mb-6 pb-4 border-b border-white/8 text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}>
                  Problem Statement &amp; Team
                </h2>
                <div>
                  <label className={labelClass}>Primary Problem Statement *</label>
                  <select name="ps1" required value={form.ps1} onChange={handleChange} className={inputClass}>
                    <option value="">Select Primary Target</option>
                    {problemsList.map((ps) => (
                      <option key={ps.id} value={ps.id}>
                        {ps.id} — {ps.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Secondary Problem Statement (Optional)</label>
                  <select name="ps2" value={form.ps2} onChange={handleChange} className={inputClass}>
                    <option value="">Select Secondary Target</option>
                    {problemsList.map((ps) => (
                      <option key={`sec-${ps.id}`} value={ps.id}>
                        {ps.id} — {ps.title}
                      </option>
                    ))}
                  </select>
                </div>
                {renderAdditionalMembers()}
              </div>
            )}

            {/* STEP 4 — Uploads */}
            {step === 4 && (
              <div className="space-y-5">
                <h2 className="text-lg font-semibold mb-6 pb-4 border-b border-white/8 text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}>
                  Required Documents
                </h2>

                {/* College ID Upload */}
                <div className="relative border border-dashed border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-colors">
                  <input
                    type="file" name="collegeId" accept="image/*" required
                    onChange={handleFile}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <p className="text-sm font-medium text-white mb-1">College ID Card *</p>
                  <p className="text-xs text-gray-600 mb-3">Image only — click to upload</p>
                  <span className="text-xs text-gray-400 bg-white/5 border border-white/8 px-4 py-1.5 rounded-lg">
                    {fileNames.id || "No file selected"}
                  </span>
                </div>

                {/* Payment Screenshot Upload */}
                <div className="relative border border-dashed border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-colors">
                  <input
                    type="file" name="payment" accept="image/*,.pdf" required
                    onChange={handleFile}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <p className="text-sm font-medium text-white mb-1">Payment Screenshot *</p>
                  <p className="text-xs text-gray-600 mb-3">Image or PDF — click to upload</p>
                  <span className="text-xs text-gray-400 bg-white/5 border border-white/8 px-4 py-1.5 rounded-lg">
                    {fileNames.payment || "No file selected"}
                  </span>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-10 flex justify-between pt-6 border-t border-white/8">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-2.5 rounded-xl text-sm transition-colors ${
                  step === 1
                    ? "invisible"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Back
              </button>

              {step < 4 ? (
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-[#FF6600] text-white font-semibold rounded-xl
                             hover:bg-[#FF8533] hover:-translate-y-0.5
                             transition-all duration-300 text-sm"
                  style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "0.05em" }}
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-2.5 bg-[#FF6600] text-white font-semibold rounded-xl
                             hover:bg-[#FF8533] hover:-translate-y-0.5
                             transition-all duration-300 text-sm
                             disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "0.05em" }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Complete Registration"
                  )}
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}