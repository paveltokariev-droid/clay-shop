import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import leftHand from '../assets/left-hand.png';   // Ліва рука
import rightHand from '../assets/right-hand.png'; // Права рука

const BrandMovement = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

 

  const leftY = useTransform(scrollYProgress, [0, 1], [60, -180]);

  const rightY = useTransform(scrollYProgress, [0, 1], [-220, 120]);

  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], [-40, 20, -40]);
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], [40, -20, 40]);


  const clayRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);


  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "42% 58% 52% 48% / 45% 45% 55% 55%", 
      "60% 40% 68% 32% / 50% 60% 40% 50%", 
      "48% 52% 42% 58% / 55% 45% 55% 45%"
    ]
  );

  return (
    <section
      ref={containerRef}
      id="movement"
      className="relative z-20 w-full bg-[#f4f3f0] text-stone-900 min-h-screen flex flex-col justify-between py-12 md:py-20 overflow-hidden"
    >
      
      {/* ── ВЕРХНЯ ХВИЛЯ ── */}
      <div className="w-full absolute top-0 left-0 z-30 transform -translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full block text-[#f4f3f0]"
          style={{ height: '140px' }}
        >
          <path
            d="M0,135 C400,155 900,170 1440,45 L1440,160 L0,160 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="flex-grow flex items-center justify-center relative w-full max-w-[1400px] mx-auto px-4 md:px-12 min-h-[600px] md:min-h-[800px]">
        

        <div className="relative w-[340px] h-[340px] md:w-[760px] md:h-[760px] flex items-center justify-center">
          

          <motion.div 
            style={{ y: leftY, x: leftX }}
            className="absolute left-[-22%] md:left-[-28%] w-[52%] h-[92%] z-20 pointer-events-none"
          >
            <img 
              src={leftHand} 
              alt="Artisan left hand shaping clay" 
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </motion.div>


          <motion.div 
            style={{ borderRadius, rotate: clayRotate }}
            className="w-[220px] h-[220px] md:w-[480px] md:h-[480px] bg-[#8c745a] flex items-center justify-center p-8 md:p-16 text-center shadow-inner relative z-10 select-none"
          >
            <motion.div 
              style={{ borderRadius }}
              className="absolute inset-[-12px] md:inset-[-20px] border border-stone-800/10 pointer-events-none scale-105"
            />

            <motion.div 
              style={{ rotate: useTransform(clayRotate, r => -r) }}
              className="w-full h-full flex items-center justify-center"
            >
              <p className="font-sans font-medium text-xl md:text-[40px] tracking-tight text-[#f4f3f0] leading-[1.1] max-w-[190px] md:max-w-[380px]">
                A movement, <br />
                not a brand.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: rightY, x: rightX }}
            className="absolute right-[-22%] md:right-[-28%] w-[52%] h-[92%] z-20 pointer-events-none"
          >
            <img 
              src={rightHand} 
              alt="Artisan right hand shaping clay" 
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </motion.div>

        </div>
      </div>


      <div className="w-full flex flex-col items-center text-center px-6 mt-6 md:mt-12 relative z-20">
        <p className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-[#7c654b]/80 mb-3 font-medium">
          Never miss a new collection
        </p>
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="w-full max-w-sm flex flex-col items-center space-y-4"
        >
          <input
            type="email"
            placeholder="Email address..."
            className="w-full bg-transparent border-b border-stone-800/20 py-2 text-center text-stone-900 placeholder-stone-800/40 focus:outline-none focus:border-stone-800/60 text-xs md:text-sm font-light transition-colors"
            required
          />
          <button
            type="submit"
            className="group flex items-center space-x-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-stone-800 hover:text-stone-900 transition-colors pt-2"
          >
            <span>Sign up to our newsletter</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </form>
      </div>

      {/* ── НИЖНЯ ХВИЛЯ ── */}
      <div className="w-full absolute bottom-0 left-0 z-30 transform translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full block text-[#7c654b] rotate-180"
          style={{ height: '140px' }}
        >
          <path
            d="M0,135 C400,155 900,170 1440,45 L1440,160 L0,160 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
};

export default BrandMovement;