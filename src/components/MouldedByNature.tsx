import potteryImage from '../assets/pottery-kiln.jpg';

const MouldedByNature = () => {
  return (
    <section 
      id="artists" 
      // Теплий темніший сірий колір
      className="relative z-20 w-full bg-[#c5c6c0] text-stone-900 min-h-screen flex flex-col pb-24 overflow-visible"
    >
      
      {/* ВЕРХНЯ ХВИЛЯ (Вона заїжджає вгору на Hero) */}
      <div className="w-full absolute top-0 left-0 z-30 transform -translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full block text-[#c5c6c0]"
          style={{ height: '140px' }}
        >
          <path
            d="M0,135 C400,155 900,170 1440,45 L1440,160 L0,160 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* КОНТЕНТ */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 pt-16 md:pt-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center flex-grow relative z-20">
        <div className="md:col-span-7 flex justify-center items-center w-full">
          <div className="relative w-full max-w-xl aspect-square md:aspect-[14/13] flex items-center justify-center">
            <img 
              src={potteryImage} 
              alt="Moulded by nature kiln" 
              className="w-full h-full object-contain mix-blend-multiply opacity-95 selection:bg-transparent"
            />
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col space-y-5 md:pl-4">
          <h2 className="font-sans font-medium text-[42px] md:text-[56px] tracking-tight leading-[1.05] text-stone-900">
            Moulded <br /> 
            by nature.
          </h2>
          <p className="font-sans text-sm md:text-base text-stone-800/85 font-light leading-relaxed max-w-sm tracking-wide">
            Similar to human beings, each handmade clay product is unique, with its own 
            set of markings and curvatures that can never truly be replicated or mass-produced.
          </p>
        </div>
      </div>

      {/* НИЖНЯ ХВИЛЯ (Робить плавний схід у білий колір) */}
      <div className="w-full absolute bottom-0 left-0 z-30 transform translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full block text-[#c5c6c0] rotate-180"
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

export default MouldedByNature;