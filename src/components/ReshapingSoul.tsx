import wheelImage from '../assets/pottery-wheel.png';


const HEADING_FONT = "font-['Poppins']";


const CeramicContours = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    fill="none"
    style={{ overflow: 'visible' }}
  >
    <path
      d="M 47.00,2.67 C 65.59,2.67 84.52,20.73 84.52,37.50 C 84.52,54.27 67.95,70.23 47.00,70.23 C 26.05,70.23 10.13,56.37 10.13,37.50 C 10.13,18.63 28.41,2.67 47.00,2.67 Z"
      stroke="#ffffff"
      strokeWidth="0.15"
    />
    <path
      d="M 47.00,-2.81 C 70.12,-2.81 84.36,17.50 84.36,37.50 C 84.36,57.50 70.01,76.25 47.00,76.25 C 23.99,76.25 4.61,59.96 4.61,37.50 C 4.61,15.04 23.88,-2.81 47.00,-2.81 Z"
      stroke="#ffffff"
      strokeWidth="0.2"
    />
    <path
      d="M 47.00,-3.94 C 70.42,-3.94 90.60,14.98 90.60,37.50 C 90.60,60.02 74.81,74.22 47.00,74.22 C 19.19,74.22 7.26,58.25 7.26,37.50 C 7.26,16.75 23.58,-3.94 47.00,-3.94 Z"
      stroke="#ffffff"
      strokeWidth="0.25"
    />
  </svg>
);


const GrainOverlay = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12] mix-blend-overlay">
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain)" />
  </svg>
);

const ReshapingSoul = () => {
  return (
    <section
      id="reshaping"
      className="relative z-20 w-full text-stone-100 min-h-screen flex flex-col pb-32 md:pb-44 overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 90% at 15% 10%, #8a6f52 0%, #7c654b 35%, #6b5640 70%, #5e4a37 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(45% 40% at 80% 25%, rgba(168,138,102,0.35) 0%, rgba(168,138,102,0) 70%), radial-gradient(35% 45% at 90% 85%, rgba(94,74,55,0.5) 0%, rgba(94,74,55,0) 70%), radial-gradient(30% 30% at 10% 80%, rgba(255,235,210,0.08) 0%, rgba(255,235,210,0) 70%)',
        }}
      />
      <GrainOverlay />


      <div className="w-full absolute top-0 left-0 z-30 transform -translate-y-[99%] pointer-events-none">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="w-full block" style={{ height: '170px' }}>
          <defs>
            <linearGradient id="waveTopBack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#96795a" />
              <stop offset="100%" stopColor="#7c654b" />
            </linearGradient>
            <linearGradient id="waveTopFront" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8a6f52" />
              <stop offset="50%" stopColor="#7c654b" />
              <stop offset="100%" stopColor="#6b5640" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,60 C260,10 520,150 800,90 C1040,40 1250,120 1440,50 L1440,220 L0,220 Z"
            fill="url(#waveTopBack)"
            opacity="0.55"
          />

          <path
            d="M0,110 C320,190 720,60 1080,150 C1260,195 1380,140 1440,110 L1440,220 L0,220 Z"
            fill="url(#waveTopFront)"
          />
        </svg>
      </div>

  
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-16 pt-24 md:pt-36 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center flex-grow relative z-20">
        <div className="md:col-span-5 flex flex-col space-y-6 md:pr-4 relative z-10">
          <h2 className={`${HEADING_FONT} font-semibold text-[42px] md:text-[56px] tracking-tight leading-[1.05] text-white`}>
            Reshaping the <br />
            soul of the Earth.
          </h2>

          <div className="space-y-4 font-sans text-xs md:text-sm text-white/80 font-light leading-relaxed max-w-sm tracking-wide">
            <p>
              Our passion for clay work transcends the mere act of production, embodying an artistic and philosophical
              approach to craftsmanship. Each clay product is meticulously fashioned as an intimate dialogue
              between the raw earth and our artisan's vision.
            </p>
            <p>
              Klei Works is a testament to the alchemy of clay, where artistry and philosophy converge to mould
              objects that resonate with the soul.
            </p>
          </div>
        </div>

        <div className="md:col-span-7 flex justify-center md:justify-end items-center w-full relative">
          <div className="relative w-full max-w-[450px] md:max-w-[550px] aspect-square flex items-center justify-center">
          
            <CeramicContours />

        
            <div className="absolute inset-0 z-10 isolate flex items-center justify-center">
              <img
                src={wheelImage}
                alt="Hands working on a pottery wheel"
                className="w-full h-full object-contain opacity-95 select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

    
      <div className="w-full absolute bottom-0 left-0 z-30 transform translate-y-[99%] pointer-events-none">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="w-full block rotate-180" style={{ height: '170px' }}>
          <defs>
            <linearGradient id="waveBottomBack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ece9e3" />
              <stop offset="100%" stopColor="#dedad2" />
            </linearGradient>
            <linearGradient id="waveBottomFront" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4f3f0" />
              <stop offset="100%" stopColor="#e7e4de" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C300,110 640,20 960,90 C1180,140 1320,70 1440,40 L1440,220 L0,220 Z"
            fill="url(#waveBottomBack)"
            opacity="0.6"
          />
          <path
            d="M0,90 C400,200 850,40 1200,150 C1320,190 1400,140 1440,100 L1440,220 L0,220 Z"
            fill="url(#waveBottomFront)"
          />
        </svg>
      </div>
    </section>
  );
};

export default ReshapingSoul;