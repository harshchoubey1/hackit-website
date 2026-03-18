export default function Loading() {
  return (
    // Clean, solid dark background
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center  font-outfit overflow-hidden">
      
      <div className="flex flex-col items-center">
        
        {/* Sleek, Modern Spinner */}
        <div className="relative w-14 h-14 flex items-center justify-center mb-6">
          {/* Faint background track */}
          <div className="absolute inset-0 border-[3px] border-white/5 rounded-full"></div>
          
          {/* Smooth spinning highlight */}
          <div className="absolute inset-0 border-[3px] border-[#d4510d] rounded-full border-t-transparent animate-spin"></div>
        </div>

        {/* Minimalist Text */}
        <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide animate-pulse">
          Loading...
        </p>

      </div>
      
    </div>
  );
}