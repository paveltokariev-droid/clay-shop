import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import girlVaseImage from '../assets/girl-vase.png';
import { LogoMark } from './Logo'; // Імпорт твого реального логотипу

const HEADING_FONT = "font-['Poppins']";

// Точний центр системи координат для обертання та деформації овалів
const CX = 48.8;
const CY = 38; // Зміщено нижче, щоб овали ідеально оминали плечі моделі

// Динамічні параметри руху для ефекту "живої глини"
const SHAPES_CONFIG = {
  inner: {
    d: 'M 48.80,7.68 C 58.35,7.68 68.26,14.82 73.04,23.09 C 78.48,32.52 76.79,43.81 71.35,53.24 C 66.01,62.48 59.47,68.06 48.80,68.06 C 39.34,68.06 30.49,61.98 25.76,53.79 C 20.15,44.09 22.33,33.23 27.93,23.53 C 33.51,13.86 37.63,7.68 48.80,7.68 Z',
    strokeWidth: 0.22,
    dasharray: null,
    rotateRange: [0, 180],      // Активне обертання при скролі
    scaleXRange: [0.85, 1.25],   // Виражений морфінг по горизонталі
    scaleYRange: [1.2, 0.8],     // Виражений морфінг по вертикалі
  },
  middle: {
    d: 'M 48.80,-2.52 C 64.42,-2.52 71.23,0.06 79.04,13.59 C 87.40,28.08 88.60,43.67 80.23,58.16 C 72.28,71.94 64.70,80.51 48.80,80.51 C 32.09,80.51 20.48,73.17 12.13,58.70 C 4.14,44.86 3.62,30.71 11.61,16.87 C 18.49,4.96 35.04,-2.52 48.80,-2.52 Z',
    strokeWidth: 0.18,
    dasharray: '1.5 1.5',
    rotateRange: [0, -220],
    scaleXRange: [1.2, 0.8],
    scaleYRange: [0.85, 1.2],
  },
  outer: {
    d: 'M 48.80,-21.53 C 69.17,-21.53 86.51,-7.35 96.69,10.29 C 106.70,27.64 105.22,51.92 95.20,69.27 C 84.18,88.36 70.85,92.36 48.80,92.36 C 28.00,92.36 12.80,85.69 2.40,67.68 C -7.32,50.84 -5.99,23.14 3.74,6.30 C 13.48,-10.57 29.32,-21.53 48.80,-21.53 Z',
    strokeWidth: 0.14,
    dasharray: null,
    rotateRange: [0, 270],
    scaleXRange: [0.9, 1.2],
    scaleYRange: [1.15, 0.85],
  },
};

interface RotatingShapeProps {
  shapeKey: 'inner' | 'middle' | 'outer';
  scrollYProgress: any;
}

const RotatingShape = ({ shapeKey, scrollYProgress }: RotatingShapeProps) => {
  const config = SHAPES_CONFIG[shapeKey];

  const rotate = useTransform(scrollYProgress, [0, 1], config.rotateRange);
  const scaleX = useTransform(scrollYProgress, [0, 1], config.scaleXRange);
  const scaleY = useTransform(scrollYProgress, [0, 1], config.scaleYRange);

  return (
    <motion.path
      d={config.d}
      stroke="#1c1917" 
      strokeOpacity={0.85} 
      strokeWidth={config.strokeWidth}
      strokeDasharray={config.dasharray || undefined}
      fill="none"
      style={{
        transformOrigin: `${CX}% ${CY}%`,
        rotate,
        scaleX,
        scaleY,
      }}
    />
  );
};

const OrganicShapes = ({ scrollYProgress }: { scrollYProgress: any }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none z-0"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet" // Овали не будуть деформуватися розтягуванням вікна
    fill="none"
    style={{ overflow: 'visible' }}
  >
    <RotatingShape shapeKey="inner" scrollYProgress={scrollYProgress} />
    <RotatingShape shapeKey="middle" scrollYProgress={scrollYProgress} />
    <RotatingShape shapeKey="outer" scrollYProgress={scrollYProgress} />
  </svg>
);

// Кругла печатка з твоїм іменованим імпортованим логотипом
const Seal = () => (
  <div className="relative w-28 h-28 md:w-32 md:h-32 select-none opacity-90">
    {/* Круговий текст, що плавно обертається */}
    <div className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]">
      <svg viewBox="0 0 160 160" className="w-full h-full">
        <defs>
          <path id="sealTop" d="M 20,80 A 60,60 0 0 1 140,80" />
          <path id="sealBottom" d="M 140,82 A 60,60 0 0 1 20,82" />
        </defs>
        <text fontSize="10.5" letterSpacing="4" fill="#1c1917" className="uppercase font-medium">
          <textPath href="#sealTop" startOffset="50%" textAnchor="middle">
            KLEI WORKS •
          </textPath>
        </text>
        <text fontSize="10.5" letterSpacing="4" fill="#1c1917" className="uppercase font-medium">
          <textPath href="#sealBottom" startOffset="50%" textAnchor="middle">
            ARTISAN TABLEWARE
          </textPath>
        </text>
      </svg>
    </div>

    {/* Твій реальний LogoMark у центрі */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 text-[#1c1917] flex items-center justify-center">
        <LogoMark />
      </div>
    </div>
  </div>
);

const SingleApproach = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f0eee9] text-stone-900 min-h-screen flex flex-col overflow-hidden pb-40 md:pb-56"
    >
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-16 pt-24 md:pt-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center flex-grow relative z-20">
        
        {/* ЛІВА ЧАСТИНА: Фото + Анімовані овали */}
        <div className="md:col-span-6 flex justify-center md:justify-start items-center w-full relative">
          <div className="relative w-full max-w-[420px] md:max-w-[480px] aspect-square flex items-center justify-center">
            
            {/* Овали: Тепер мають правильні пропорції та живий рух під фото */}
            <OrganicShapes scrollYProgress={scrollYProgress} />
            
            {/* Зображення дівчини (z-10, перекриває овали) */}
            <img
              src={girlVaseImage}
              alt="Woman holding a ceramic vase with flowers covering her face"
              className="w-full h-full object-contain relative z-10 select-none pointer-events-none"
            />
          </div>
        </div>

        {/* ПРАВА ЧАСТИНА: Текст + Печатка з LogoMark */}
        <div className="md:col-span-6 flex flex-col space-y-8 relative z-10">
          <h2 className={`${HEADING_FONT} font-normal text-[42px] md:text-[56px] tracking-tight leading-[1.1] text-stone-900`}>
            There can be no <br />
            single approach <br />
            to art or beauty.
          </h2>

          <p className="font-sans text-sm md:text-base text-stone-600 font-light leading-relaxed max-w-md">
            That is why no two Klei products are alike. We understand the multi-faceted nature of
            beauty and have created a hub of artists who express their own vision through exquisite
            clay products.
          </p>

          <Seal />
        </div>
      </div>

      {/* Хвиля переходу */}
      <div className="w-full absolute bottom-0 left-0 z-0 pointer-events-none">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="w-full block" style={{ height: '180px' }}>
          <defs>
            <linearGradient id="approachWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a6f52" />
              <stop offset="100%" stopColor="#6b5640" />
            </linearGradient>
          </defs>
          <path
            d="M0,120 C280,60 620,170 960,100 C1180,55 1320,110 1440,80 L1440,220 L0,220 Z"
            fill="url(#approachWave)"
          />
        </svg>
      </div>
    </section>
  );
};

export default SingleApproach;