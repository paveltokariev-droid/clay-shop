const Artists = () => {
  const artists = [
    {
      name: 'Maria Kovach',
      role: 'Master of Minimalist Vases',
      tag: 'Earth & Form',
      img: 'https://images.pexels.com/photos/2166341/pexels-photo-2166341.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
      name: 'Alex Dmytruk',
      role: 'Sculptural Clay Art',
      tag: 'Fire & Texture',
      img: 'https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg?auto=compress&cs=tinysrgb&w=700',
      offset: true,
    },
    {
      name: 'Anna Levchenko',
      role: 'Earthy Tableware',
      tag: 'Water & Flow',
      img: 'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
  ];

  return (
    <section
      id="artists"
      className="bg-[#faf9f7] text-stone-900 py-28 px-8 md:px-14 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-stone-400 block mb-3 font-semibold">
              The Minds Behind the Clay
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-stone-800 uppercase leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Artists &<br />Designers
            </h2>
          </div>
          <p className="text-stone-500 text-sm font-light max-w-xs leading-relaxed">
            Each creator brings their own elemental language to the clay,
            shaping stories that cannot be replicated.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-[1px] bg-stone-200 mb-20" />

        {/* ── Artist grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
          {artists.map((a, i) => (
            <div
              key={i}
              className={`group cursor-pointer ${a.offset ? 'md:translate-y-14' : ''}`}
            >
              
              <div className="overflow-hidden mb-6 relative">
                <div
                  className="aspect-[3/4] bg-cover bg-center transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url('${a.img}')` }}
                />
                
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-stone-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  {a.tag}
                </div>
                
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-stone-800 group-hover:w-full transition-all duration-500" />
              </div>

              {/* Info */}
              <div className="flex items-end justify-between">
                <div>
                  <h3
                    className="text-xl font-light tracking-wide text-stone-800 uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {a.name}
                  </h3>
                  <p className="text-[10px] text-stone-400 uppercase tracking-[0.22em] mt-1.5 font-semibold">
                    {a.role}
                  </p>
                </div>
                {/* Arrow */}
                <span className="text-stone-300 text-lg font-light opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;