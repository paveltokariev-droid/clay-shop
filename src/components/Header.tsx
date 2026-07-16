import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LogoMark } from './Logo'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'h-36 md:h-40 text-stone-800' 
          : 'h-24 text-white/90 bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      

      <div 
        className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out pointer-events-none z-0 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
        }`}
      >
        <div className="absolute inset-0 bg-[#f2ede4] h-[65%] shadow-sm"></div>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute left-0 w-full block text-[#f2ede4]"
          style={{ top: '65%', height: '55px' }}
        >
          <path
            d="M0,0 L1440,0 L1440,20 C1050,140 450,15 0,55 Z"
            fill="currentColor"
          />
        </svg>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-7 pb-3 flex items-center justify-between">
        

        <Link to="/" className="w-10 h-10 opacity-95 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
          <LogoMark size={38} />
        </Link>

        <nav className="hidden md:flex items-center gap-12 font-sans text-[11px] tracking-[0.3em] uppercase font-normal">
          <a href="#collections" className="hover:opacity-60 transition-opacity duration-300">Collections</a>
          <Link to="/artists" className="hover:opacity-60 transition-opacity duration-300">Artists & Designers</Link>
          <a href="#philosophy" className="hover:opacity-60 transition-opacity duration-300">Philosophy</a>
        </nav>

        <div className="font-sans text-[11px] tracking-[0.3em] uppercase font-normal">
          <a href="#contact" className="hover:opacity-60 transition-opacity duration-300">Contact</a>
        </div>

      </div>
    </header>
  );
};

export default Header;