import platesImage from '../assets/ceramic-plates.jpg';

const Collections = () => {
  return (
    <section 
      id="collections" 

      className="relative z-20 w-full bg-[#dbdeda] text-stone-900 min-h-screen flex flex-col pb-24 overflow-visible"
    >
      

      <div className="w-full absolute top-0 left-0 z-30 transform -translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full block text-[#dbdeda]"
          style={{ height: '140px' }}
        >
          <path
            d="M0,135 C400,155 900,170 1440,45 L1440,160 L0,160 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* КОНТЕНТ */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 pt-16 md:pt-28 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center flex-grow relative z-20">
        <div className="md:col-span-5 flex flex-col space-y-6 md:pr-4">
          <h2 className="font-sans font-medium text-[42px] md:text-[56px] tracking-tight leading-[1.05] text-stone-900">
            Each piece a <br /> 
            unique story.
          </h2>
          <div className="space-y-4 font-sans text-sm md:text-base text-stone-800/85 font-light leading-relaxed max-w-sm tracking-wide">
            <p>
              For a clay product to be moulded into existence, it requires the unity of five elements: earth, 
              water, fire, air, and the creative human touch.
            </p>
            <p>
              Klei Works celebrates each product's natural origin and its creative journey, presenting each 
              work as a true art form.
            </p>
          </div>
        </div>

        <div className="md:col-span-7 flex justify-center items-center w-full">
          <div className="relative w-full max-w-xl aspect-square flex items-center justify-center">
            <img 
              src={platesImage} 
              alt="Ceramic plates collection" 
              className="w-full h-full object-contain mix-blend-multiply opacity-95 selection:bg-transparent"
            />
          </div>
        </div>
      </div>


      <div className="w-full absolute bottom-0 left-0 z-30 transform translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full block text-[#dbdeda] rotate-180"
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

export default Collections;