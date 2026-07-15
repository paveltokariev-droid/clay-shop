import bgImage from '../assets/hero-bg.jpg';
import { LogoMark } from './Logo';

const CircularText = () => (
  <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
    <defs>
      <path id="cw-circle" d="M200,200 m-155,0 a155,155 0 1,1 310,0 a155,155 0 1,1 -310,0" />
    </defs>
    <text 
      fill="rgba(255,255,255,0.85)" 
      fontSize="14" 
      fontFamily="'Cormorant Garamond', serif" 
      letterSpacing="6.5" 
      fontWeight="400"
    >
      <textPath href="#cw-circle" startOffset="0%">
        • CLAY WORKS • ARTISAN TABLEWARE • HANDCRAFTED PIECES •
      </textPath>
    </text>
  </svg>
);

const Hero = () => {
  return (
    <div 
      id="hero" 
      className="fixed top-0 left-0 w-full h-screen bg-stone-950 text-stone-100 flex flex-col justify-center items-center overflow-hidden z-0"
    >
      
      {/* Фонове фото: тепер ми соваємо сам блок за допомогою translate-x та translate-y */}
       <div
       className="absolute inset-0 bg-cover bg-center z-0 scale-[1.08] translate-x-[-110px] translate-y-[15px] transition-all duration-300"
        style={{ backgroundImage: `url(${bgImage})` }}
        />
      

      {/* Затемнення фону */}
      <div 
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(160deg, rgba(25,18,14,0.55) 0%, rgba(15,10,8,0.4) 50%, rgba(25,18,14,0.6) 100%)' }}
      />

      {/* Центр: Медальйон */}
      <div className="relative z-20 px-4 md:translate-x-[1.5%] md:translate-y-[1%]">
        <div className="relative w-[290px] h-[290px] md:w-[390px] md:h-[390px] group animate-[fadeInScale_1.2s_ease-out_both]">
          <div className="absolute inset-0 rounded-full backdrop-blur-[5px] bg-white/[0.03] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.4)]" />
          <div className="absolute inset-[6px] rounded-full border border-white/5 opacity-60" />
          
          <div className="absolute inset-[14px] md:inset-[16px]" style={{ animation: 'slowRotate 70s linear infinite' }}>
            <CircularText />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
            <LogoMark size={145} className="text-white/90" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;