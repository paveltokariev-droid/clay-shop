const Footer = () => {
  return (
    <footer className="p-8 md:px-12 border-t border-stone-100 bg-[#fcfbf9] flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 tracking-wider gap-4">
      <div>&copy; {new Date().getFullYear()} KLEI WORKS. All rights reserved.</div>
      <div className="space-x-6 uppercase text-[10px]">
        <span className="cursor-pointer hover:text-stone-600 transition">Instagram</span>
        <span className="cursor-pointer hover:text-stone-600 transition">Pinterest</span>
      </div>
    </footer>
  );
};

export default Footer;
