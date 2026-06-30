import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full p-6 md:px-12 flex justify-between items-center bg-[#fcfbf9] border-b border-stone-100 relative z-50">
      <Link to="/" className="font-serif text-lg font-bold tracking-[0.25em] text-stone-800 hover:opacity-75 transition">
        KLEI WORKS
      </Link>
      <nav className="space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium text-stone-500">
        <Link to="/" className="hover:text-stone-900 transition duration-300">Collections</Link>
        <Link to="/artists" className="hover:text-stone-900 transition duration-300">Artists</Link>
        <Link to="/philosophy" className="hover:text-stone-900 transition duration-300">Philosophy</Link>
      </nav>
    </header>
  );
};

export default Header;