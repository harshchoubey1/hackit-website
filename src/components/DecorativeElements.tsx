import Image from "next/image";

export default function DecorativeElements() {
    return (
        // Wrapper: Isko absolute aur pointer-events-none rakha hai taaki ye content ke peeche rahe 
        // aur button clicks ko block na kare.
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            
            {/* ---------------- GLOWING CYBER ORBS ---------------- 
                (Yeh tere purane 'circle-1' se 'circle-7' ka naya aur optimized roop hain. 
                Poore page mein upar se neeche tak failay hain taaki scroll karne pe mast glow aaye) 
            */}
            <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-cyber-cyan/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"></div>
            <div className="absolute top-[60%] left-[-10%] w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[150px]"></div>
            <div className="absolute top-[85%] right-[-5%] w-[350px] h-[350px] bg-cyber-cyan/10 rounded-full blur-[100px]"></div>

            {/* ---------------- FLOATING TECH CROSSES ---------------- 
                (Hacker vibe badhane ke liye background mein chote-chote blinking '+' signs) 
            */}
            <div className="absolute top-[20%] left-[10%] text-cyber-cyan/30 font-mono text-2xl animate-pulse">+</div>
            <div className="absolute top-[45%] right-[15%] text-cyber-cyan/30 font-mono text-2xl animate-[pulse_3s_infinite]">+</div>
            <div className="absolute top-[75%] left-[20%] text-cyber-cyan/30 font-mono text-2xl animate-pulse">+</div>

            {/* ---------------- DECORATIVE IMAGES ---------------- 
                (Tere purane bg-image-1, bg-image-2, aur bg-image-3. Inko Next.js ke <Image /> tag 
                se optimize kar diya hai. Opacity kam rakhi hai taaki content clearly dikhe) 
            */}
            
            {/* Small abstract shapes */}
            <div className="absolute top-[25%] left-[5%] opacity-20 hover:opacity-40 transition-opacity duration-700">
                <Image src="/images/bg-1-56586a.png" alt="Decor Element" width={50} height={50} />
            </div>
            
            <div className="absolute top-[55%] right-[10%] opacity-20">
                <Image src="/images/bg-2-56586a.png" alt="Decor Element" width={80} height={90} className="rounded-xl" />
            </div>

            {/* Big SVG Decoration (Top right corner pe jo bada sa graphic tha) */}
            <div className="absolute top-[5%] right-0 md:right-[5%] opacity-20 md:opacity-30 mix-blend-screen w-[250px] md:w-[400px]">
                <Image 
                    src="/images/svgs.png" 
                    alt="Cyber SVG Decor" 
                    width={500} 
                    height={650} 
                    className="object-contain drop-shadow-[0_0_20px_rgba(0,245,212,0.3)]" 
                />
            </div>

        </div>
    );
}