import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Тимчасові компоненти сторінок (потім винесеш їх в окремі файли)
const Home = () => (
  <section className="flex-grow flex flex-col items-center justify-center p-12 text-center animate-fade-in">
    <span className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-medium">Moulded by nature</span>
    <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-wide text-stone-800 uppercase">
      Each piece a <br /> unique story
    </h1>
    <p className="max-w-md text-stone-500 leading-relaxed font-light text-sm md:text-base">
      Klei Works celebrates each product's natural origin and its creative journey, presenting clay work as a true art form.
    </p>
    <Link 
      to="/artists" 
      className="mt-8 px-8 py-3 border border-stone-800 text-stone-800 text-xs uppercase tracking-widest hover:bg-stone-800 hover:text-stone-100 transition-all duration-300"
    >
      Meet the artists
    </Link>
  </section>
);

const Artists = () => (
  <section className="flex-grow p-12 max-w-6xl mx-auto w-full animate-fade-in">
    <h2 className="text-3xl font-serif font-light tracking-wide text-stone-800 uppercase mb-8 border-b border-stone-200 pb-4">
      Our Artists & Designers
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Картка 1 */}
      <div className="group cursor-pointer">
        <div className="bg-stone-200 aspect-[3/4] mb-4 overflow-hidden bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=600')] grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"></div>
        <h3 className="font-serif text-lg text-stone-800">Maria Kovach</h3>
        <p className="text-xs text-stone-400 uppercase tracking-wider mt-1">Master of Minimalist Vases</p>
      </div>
      {/* Картка 2 */}
      <div className="group cursor-pointer">
        <div className="bg-stone-200 aspect-[3/4] mb-4 overflow-hidden bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1565192647048-f997ed87f5e2?q=80&w=600')] grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"></div>
        <h3 className="font-serif text-lg text-stone-800">Alex Dmytruk</h3>
        <p className="text-xs text-stone-400 uppercase tracking-wider mt-1">Sculptural Clay Art</p>
      </div>
      {/* Картка 3 */}
      <div className="group cursor-pointer">
        <div className="bg-stone-200 aspect-[3/4] mb-4 overflow-hidden bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600')] grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"></div>
        <h3 className="font-serif text-lg text-stone-800">Anna Levchenko</h3>
        <p className="text-xs text-stone-400 uppercase tracking-wider mt-1">Earthy Tableware</p>
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section className="flex-grow flex flex-col items-center justify-center p-12 text-center max-w-2xl mx-auto animate-fade-in">
    <h2 className="text-3xl font-serif font-light tracking-wide text-stone-800 uppercase mb-6">
      Our Philosophy
    </h2>
    <p className="text-stone-600 font-light leading-relaxed mb-4 text-justify">
      Similar to human beings, each handmade clay product is unique, with its own set of markings and curvatures that can never truly be replicated or mass-produced.
    </p>
    <p className="text-stone-600 font-light leading-relaxed text-justify">
      For a clay product to be moulded into existence, it requires the unity of five elements: earth, water, fire, air, and the creative human touch.
    </p>
  </section>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fcfbf9] text-stone-900 font-sans flex flex-col justify-between selection:bg-stone-800 selection:text-stone-100">
        
        {/* Хедер / Навігація */}
        <header className="p-6 md:px-12 border-b border-stone-100 flex justify-between items-center bg-[#fcfbf9]/80 backdrop-blur-sm sticky top-0 z-50">
          <Link to="/" className="font-serif text-xl font-bold tracking-[0.2em] text-stone-800 hover:opacity-80 transition">
            KLEI WORKS
          </Link>
          <nav className="space-x-8 text-xs uppercase tracking-[0.15em] font-medium text-stone-600">
            <Link to="/" className="hover:text-stone-900 transition duration-300">Collections</Link>
            <Link to="/artists" className="hover:text-stone-900 transition duration-300">Artists</Link>
            <Link to="/philosophy" className="hover:text-stone-900 transition duration-300">Philosophy</Link>
          </nav>
        </header>

        {/* Контент сторінок, який змінюється залежно від URL */}
        <main className="flex-grow flex flex-col justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/philosophy" element={<Philosophy />} />
          </Routes>
        </main>

        {/* Футер */}
        <footer className="p-8 md:px-12 border-t border-stone-100 bg-[#fcfbf9] flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 tracking-wider gap-4">
          <div>&copy; {new Date().getFullYear()} KLEI WORKS. All rights reserved.</div>
          <div className="space-x-6 uppercase text-[10px]">
            <span className="cursor-pointer hover:text-stone-600 transition">Instagram</span>
            <span className="cursor-pointer hover:text-stone-600 transition">Pinterest</span>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;