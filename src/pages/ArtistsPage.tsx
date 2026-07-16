import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { LogoMark } from '../components/Logo';

const artists = [
  {
    id: 1,
    name: 'Maria Kovach',
    role: 'Master of Minimalist Vases',
    tag: 'Earth & Form',
    location: 'Kyiv, Ukraine',
    years: '12 years',
    bio: 'Maria finds stillness in clay. Her work is defined by restrained forms — bowls that hold space, vases that breathe. She trained under a Kyoto master and returned to Ukraine to shape a new language of silence.',
    quote: '"The less I add, the more the clay speaks."',
    specialty: ['Vases', 'Vessels', 'Minimalist bowls'],
    img: 'https://images.pexels.com/photos/2166341/pexels-photo-2166341.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 2,
    name: 'Alex Dmytruk',
    role: 'Sculptural Clay Art',
    tag: 'Fire & Texture',
    location: 'Lviv, Ukraine',
    years: '8 years',
    bio: 'Alex works with fire as a collaborator. His raku-fired pieces carry unpredictable crackle patterns — each one a conversation between craft and chance. His studio in Lviv is a place of controlled chaos.',
    quote: '"I set the conditions. The fire decides the rest."',
    specialty: ['Raku firing', 'Sculptural pieces', 'Statement vessels'],
    img: 'https://images.pexels.com/photos/6611247/pexels-photo-6611247.jpeg',
  },
  {
    id: 3,
    name: 'Anna Levchenko',
    role: 'Earthy Tableware',
    tag: 'Water & Flow',
    location: 'Odesa, Ukraine',
    years: '15 years',
    bio: "Anna's tableware carries the spirit of Odesa's coastal light. She works in terracotta and earthenware, creating functional pieces with an organic, sun-warmed quality. Her plates and cups feel like they belong on summer tables.",
    quote: '"Clay remembers water. I just remind it."',
    specialty: ['Tableware sets', 'Plates', 'Earthenware cups'],
    img: 'https://images.pexels.com/photos/18702623/pexels-photo-18702623.jpeg',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const slideIn = (direction: 'left' | 'right'): Variants => ({
  hidden: { opacity: 0, x: direction === 'left' ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  },
});

const ArtistsPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-900">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 bg-[#faf9f7]/90 backdrop-blur-md border-b border-stone-200/60"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <LogoMark size={30} />
            <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-stone-700 group-hover:text-stone-400 transition-colors duration-300">
              Clay Works
            </span>
          </Link>
          <div className="flex items-center gap-8 font-sans text-[11px] tracking-[0.3em] uppercase">
            <Link to="/"           className="text-stone-500 hover:text-stone-900 transition-colors duration-300">Home</Link>
            <Link to="/collections" className="text-stone-500 hover:text-stone-900 transition-colors duration-300">Collections</Link>
            <Link to="/artists"    className="text-stone-900 border-b border-stone-900 pb-0.5">Artists</Link>
          </div>
        </div>
      </motion.nav>

      <div className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-semibold block mb-4"
            >
              The minds behind the clay
            </motion.span>
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-light tracking-wide text-stone-800 uppercase leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Artists &<br />Designers
            </motion.h1>
          </div>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-stone-500 text-sm font-light max-w-xs leading-relaxed md:pb-2"
          >
            Three voices. Three cities. One shared belief — that clay,
            shaped with intention, becomes something more than material.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-16"
      >
        <div className="w-full h-px bg-stone-200" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 space-y-0">
        {artists.map((artist, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={artist.id}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 border-b border-stone-200`}
            >
              <motion.div
                variants={slideIn(isEven ? 'left' : 'right')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="md:w-1/2 overflow-hidden relative group"
                style={{ aspectRatio: '4/3' }}
              >
                <motion.img
                  src={artist.img}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <span className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[9px] uppercase tracking-[0.3em] text-stone-700 font-semibold">
                  {artist.tag}
                </span>
              </motion.div>

              <motion.div
                variants={slideIn(isEven ? 'right' : 'left')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="md:w-1/2 flex flex-col justify-center p-10 md:p-16"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-[80px] font-light text-stone-100 leading-none mb-4 select-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  0{artist.id}
                </motion.span>

                <h2
                  className="text-3xl md:text-4xl font-light tracking-wide text-stone-800 uppercase leading-tight mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {artist.name}
                </h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-semibold mb-6">
                  {artist.role}
                </p>

                <div className="flex gap-6 mb-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 block mb-1">Location</span>
                    <span className="text-xs text-stone-700">{artist.location}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 block mb-1">Experience</span>
                    <span className="text-xs text-stone-700">{artist.years}</span>
                  </div>
                </div>

                <p className="text-stone-600 text-sm font-light leading-relaxed mb-6 max-w-sm">
                  {artist.bio}
                </p>

                <motion.blockquote
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-stone-400 text-sm italic font-light border-l-2 border-stone-200 pl-4 mb-8"
                >
                  {artist.quote}
                </motion.blockquote>

                <div className="flex gap-2 flex-wrap">
                  {artist.specialty.map((s, si) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * si }}
                      className="px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-stone-600 border border-stone-200 font-semibold"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 md:px-16 py-20 text-center"
      >
        <p className="text-stone-400 text-sm font-light mb-6">Explore their work in the collection</p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/collections"
            className="inline-block px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-sans font-semibold bg-stone-900 text-stone-50 hover:bg-stone-700 transition-colors duration-300"
          >
            View Collections
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-stone-200 py-8 px-6 md:px-16 max-w-7xl mx-auto flex items-center justify-between"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
          © {new Date().getFullYear()} Clay Works
        </span>
        <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-stone-500 hover:text-stone-900 transition-colors duration-300">
          ← Back to home
        </Link>
      </motion.div>
    </div>
  );
};

export default ArtistsPage;
