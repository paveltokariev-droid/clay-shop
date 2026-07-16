import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { LogoMark } from '../components/Logo';

const products = [
  { id: 1, name: 'Ember Bowl',    category: 'bowls',  price: '€ 68',  tag: 'Bestseller', img: 'https://images.pexels.com/photos/17888788/pexels-photo-17888788.jpeg', material: 'Stoneware clay' },
  { id: 2, name: 'Dusk Plate',   category: 'plates', price: '€ 54',  tag: 'New',        img: 'https://images.pexels.com/photos/13745063/pexels-photo-13745063.jpeg', material: 'Terracotta' },
  { id: 3, name: 'Mist Vase',    category: 'vases',  price: '€ 112', tag: '',           img: 'https://images.pexels.com/photos/8063809/pexels-photo-8063809.jpeg',   material: 'Porcelain clay' },
  { id: 4, name: 'River Cup',    category: 'cups',   price: '€ 38',  tag: 'Handmade',   img: 'https://images.pexels.com/photos/34103366/pexels-photo-34103366.jpeg', material: 'Earthenware' },
  { id: 5, name: 'Stone Platter',category: 'plates', price: '€ 89',  tag: '',           img: 'https://images.pexels.com/photos/29665163/pexels-photo-29665163.jpeg', material: 'Stoneware clay' },
  { id: 6, name: 'Earth Vessel', category: 'vases',  price: '€ 145', tag: 'Limited',    img: 'https://images.pexels.com/photos/37483664/pexels-photo-37483664.jpeg', material: 'Raw clay' },
  { id: 7, name: 'Ash Bowl',     category: 'bowls',  price: '€ 72',  tag: '',           img: 'https://images.pexels.com/photos/14443652/pexels-photo-14443652.jpeg', material: 'Raku clay' },
  { id: 8, name: 'Terra Cup',    category: 'cups',   price: '€ 42',  tag: 'New',        img: 'https://images.pexels.com/photos/4830750/pexels-photo-4830750.jpeg',   material: 'Terracotta' },
];

const filters = ['all', 'bowls', 'plates', 'vases', 'cups'];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
};

const CollectionsPage = () => {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? products : products.filter(p => p.category === active);

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
            <Link to="/"            className="text-stone-500 hover:text-stone-900 transition-colors duration-300">Home</Link>
            <Link to="/collections" className="text-stone-900 border-b border-stone-900 pb-0.5">Collections</Link>
            <Link to="/artists"     className="text-stone-500 hover:text-stone-900 transition-colors duration-300">Artists</Link>
          </div>
        </div>
      </motion.nav>

      <div className="pt-32 pb-16 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
        <motion.span
          custom={0}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-semibold block mb-4"
        >
          Handcrafted ceramics
        </motion.span>

        <motion.h1
          custom={1}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-light tracking-wide text-stone-800 uppercase leading-none mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Our<br />Collections
        </motion.h1>

        <motion.p
          custom={2}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-stone-500 text-sm font-light max-w-md leading-relaxed"
        >
          Each piece is shaped by hand, fired with intention, and finished with care —
          a small universe of earth and fire brought to your table.
        </motion.p>
      </div>

      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-16"
      >
        <div className="w-full h-px bg-stone-200" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="max-w-7xl mx-auto px-6 md:px-16 py-8 flex items-center gap-2 flex-wrap"
      >
        {filters.map(f => (
          <motion.button
            key={f}
            onClick={() => setActive(f)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className={`px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-sans font-semibold transition-all duration-300 border ${
              active === f
                ? 'bg-stone-900 text-stone-50 border-stone-900'
                : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-800'
            }`}
          >
            {f}
          </motion.button>
        ))}
        <motion.span
          key={filtered.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="ml-auto text-[10px] uppercase tracking-[0.3em] text-stone-400 font-sans"
        >
          {filtered.length} pieces
        </motion.span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-32">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-stone-100 mb-5" style={{ aspectRatio: '4/5' }}>
                  <motion.img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase tracking-[0.28em] text-stone-700 font-semibold">
                      {product.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-stone-800 group-hover:w-full transition-all duration-500" />
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      className="text-lg font-light tracking-wide text-stone-800 uppercase"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-stone-400 uppercase tracking-[0.22em] mt-1 font-semibold">
                      {product.material}
                    </p>
                  </div>
                  <span className="text-sm font-light text-stone-600 mt-1">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

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

export default CollectionsPage;
