import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 pt-16 pb-8 border-t-[8px] border-maroon">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1 flex flex-col items-start">
            <div className="bg-white p-3 rounded-2xl mb-6 inline-block shadow-sm">
              <Image 
                src="/logo/logo.png" 
                alt="Nabajiban Sangha Logo" 
                width={200} 
                height={140} 
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-2">Nabajiban Sangha</h3>
            <p className="text-sm font-medium tracking-wider text-maroon-light uppercase mb-4">
              Established: 2nd February 1959
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact & Address</h4>
            <div className="space-y-4">
              <address className="not-italic leading-relaxed space-y-1 text-white/80">
                <p>Vivekananda Para,</p>
                <p>Dhupguri,</p>
                <p>Dist - Jalpaiguri,</p>
                <p>West Bengal</p>
              </address>
              <div>
                <p className="text-sm text-white/60 mb-1">Official Number</p>
                <p className="font-medium text-white">98321 52755 <span className="text-sm text-white/60 font-normal">(General Secretary)</span></p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Registration</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-white/60 mb-1">Govt. Regd. No.</p>
                <p className="font-medium text-white">S/2L/333467</p>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Affiliated by</p>
                <p className="font-medium text-white leading-tight">
                  District Sport Association &<br />
                  Bengal Sport Association
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Publication</h4>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-sm text-white/60 mb-1">Official Publication</p>
              <p className="font-playfair font-bold text-xl text-white">Krandoshi</p>
            </div>
          </div>
          
        </div>
        
        {/* Footer Banner */}
        <div className="flex justify-center pb-12 px-4">
          <a 
            href="https://www.digitaldictionarysiliguri.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full max-w-4xl animate-[pulse_3s_ease-in-out_infinite] hover:animate-none group"
          >
            <img 
              src="/banner-transparent.png" 
              alt="Digital Dictionary Siliguri" 
              className="w-full h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" 
            />
          </a>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2026 Nabajiban Sangha. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
