import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 font-outfit">
      
      {/* Clean, simple card container */}
      <div className="w-full max-w-md bg-[#111118] border border-white/10 rounded-2xl p-8 md:p-10 text-center shadow-2xl">
        
        {/* Soft, non-neon Checkmark Icon */}
        <div className="w-20 h-20 bg-[#d4510d]/10 text-[#d4510d] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg 
            className="w-10 h-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Clear, polite typography */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Registration Successful!
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
          Thank you for registering for HackIT 2.0. We have safely received your team's details. Please join our official community group for the latest updates.
        </p>

        {/* Standard, user-friendly buttons */}
        <div className="flex flex-col gap-4">
          
          <Link href="https://chat.whatsapp.com/YOUR_LINK_HERE" target="_blank">
            <button className="w-full py-3.5 bg-[#d4510d] text-black font-semibold rounded-lg hover:bg-[#d4510d]/90 transition-colors">
              Join WhatsApp Group
            </button>
          </Link>

          <Link href="/">
            <button className="w-full py-3.5 bg-transparent border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
              Back to Home
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}