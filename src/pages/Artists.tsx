const Artists = () => {
  return (
    <section className="p-12 max-w-6xl mx-auto w-full">
      <h2 className="text-3xl font-serif font-light tracking-wide text-stone-800 uppercase mb-8 border-b border-stone-200 pb-4">
        Our Artists & Designers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group cursor-pointer">
          <div className="bg-stone-200 aspect-[3/4] mb-4 overflow-hidden bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=600')] grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"></div>
          <h3 className="font-serif text-lg text-stone-800">Maria Kovach</h3>
          <p className="text-xs text-stone-400 uppercase tracking-wider mt-1">Master of Minimalist Vases</p>
        </div>
        <div className="group cursor-pointer">
          <div className="bg-stone-200 aspect-[3/4] mb-4 overflow-hidden bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1565192647048-f997ed87f5e2?q=80&w=600')] grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"></div>
          <h3 className="font-serif text-lg text-stone-800">Alex Dmytruk</h3>
          <p className="text-xs text-stone-400 uppercase tracking-wider mt-1">Sculptural Clay Art</p>
        </div>
        <div className="group cursor-pointer">
          <div className="bg-stone-200 aspect-[3/4] mb-4 overflow-hidden bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600')] grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"></div>
          <h3 className="font-serif text-lg text-stone-800">Anna Levchenko</h3>
          <p className="text-xs text-stone-400 uppercase tracking-wider mt-1">Earthy Tableware</p>
        </div>
      </div>
    </section>
  );
};

export default Artists;