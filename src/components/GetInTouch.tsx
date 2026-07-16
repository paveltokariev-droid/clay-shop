import React, { useState } from 'react';
import toolsImage from '../assets/pottery-tools.jpg'; 

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organisation: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  return (
    <section 
      id="contact" 

      className="relative z-20 w-full bg-[#cbd1cc] text-[#1c1917] min-h-screen flex flex-col pb-36 overflow-visible"
    >
      
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 pt-24 md:pt-36 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center flex-grow relative z-20">

        <div className="md:col-span-5 flex justify-center items-center w-full relative">
          <div className="relative w-full max-w-md aspect-[4/3] md:aspect-[1.1/1] flex items-center justify-center rounded-lg overflow-hidden shadow-sm">
            <img 
              src={toolsImage} 
              alt="Artisan ceramic tools and clay plate" 
              className="w-full h-full object-cover opacity-95 selection:bg-transparent"
            />
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center items-start w-full md:pl-8">
          <h2 className="font-sans font-medium text-[42px] md:text-[52px] tracking-tight text-stone-900 mb-8">
            Get in touch.
          </h2>

          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">

            <div className="relative w-full">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name..."
                className="w-full bg-transparent border-b border-stone-800/25 py-2 text-stone-900 placeholder-stone-800/45 focus:outline-none focus:border-stone-900 text-sm md:text-base font-light transition-colors"
                required
              />
            </div>

            <div className="relative w-full">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name..."
                className="w-full bg-transparent border-b border-stone-800/25 py-2 text-stone-900 placeholder-stone-800/45 focus:outline-none focus:border-stone-900 text-sm md:text-base font-light transition-colors"
                required
              />
            </div>

            <div className="relative w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email..."
                className="w-full bg-transparent border-b border-stone-800/25 py-2 text-stone-900 placeholder-stone-800/45 focus:outline-none focus:border-stone-900 text-sm md:text-base font-light transition-colors"
                required
              />
            </div>

            <div className="relative w-full">
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Organisation..."
                className="w-full bg-transparent border-b border-stone-800/25 py-2 text-stone-900 placeholder-stone-800/45 focus:outline-none focus:border-stone-900 text-sm md:text-base font-light transition-colors"
              />
            </div>

            <div className="relative w-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message..."
                rows={3}
                className="w-full bg-transparent border-b border-stone-800/25 py-2 text-stone-900 placeholder-stone-800/45 focus:outline-none focus:border-stone-900 text-sm md:text-base font-light transition-colors resize-none"
                required
              />
            </div>


            <button
              type="submit"
              className="group flex items-center space-x-3 pt-6 text-xs md:text-sm font-medium uppercase tracking-widest text-stone-900 hover:text-stone-700 transition-colors focus:outline-none"
            >
              <span>Submit</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

          </form>
        </div>

      </div>


      <div className="w-full absolute bottom-0 left-0 z-30 transform translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full block text-white rotate-180"
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

export default GetInTouch;