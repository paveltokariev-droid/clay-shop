import { LogoMark } from './Logo';

const navColumns = [
  {
    heading: 'Explore',
    links: [
      { label: 'Collections', href: '#collections' },
      { label: 'Artists & Designers', href: '#artists' },
      { label: 'Philosophy', href: '#philosophy' },
      { label: 'New Arrivals', href: '#' },
    ],
  },
  {
    heading: 'Shop',
    links: [
      { label: 'Vases & Vessels', href: '#' },
      { label: 'Tableware', href: '#' },
      { label: 'Sculptural Art', href: '#' },
      { label: 'Gift Sets', href: '#' },
    ],
  },
  {
    heading: 'Studio',
    links: [
      { label: 'About Klei Works', href: '#' },
      { label: 'Commissions', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Shipping & Returns', href: '#' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.64 1.267 1.408 0 .858-.546 2.141-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.387-1.715-4.056-4.163-4.056-2.836 0-4.5 2.127-4.5 4.327 0 .856.33 1.774.74 2.276a.3.3 0 0 1 .07.285l-.278 1.133c-.044.183-.145.222-.334.134C6.3 15.21 5.5 13.36 5.5 11.832c0-3.26 2.37-6.26 6.834-6.26 3.588 0 6.38 2.558 6.38 5.977 0 3.566-2.248 6.434-5.37 6.434-1.049 0-2.035-.545-2.372-1.19l-.645 2.406c-.234.9-.865 2.028-1.289 2.714.972.301 2.004.467 3.07.467 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.35 6.35 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.88a8.27 8.27 0 0 0 4.83 1.54V7a4.85 4.85 0 0 1-1.06-.31z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#1c1917] text-[#f3ede4] overflow-hidden">

      {/* ── Хвиля зверху ── */}
      <div className="w-full absolute top-0 left-0 pointer-events-none -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full block text-[#1c1917]"
          style={{ height: '110px' }}
        >
          <path
            d="M0,80 C360,20 1080,120 1440,40 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ── Декоративний фоновий патерн ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full border border-[#f3ede4]"
          style={{ transform: 'scale(1.4)' }}
        />
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full border border-[#f3ede4]" />
      </div>

      {/* ── Основний вміст ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-0">

        {/* ── TOP ROW: Бренд + Колонки навігації ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#f3ede4]/10">

          {/* Бренд блок */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="text-[#f3ede4] opacity-90">
                <LogoMark size={36} />
              </div>
              <span
                className="text-2xl font-light tracking-widest uppercase text-[#f3ede4]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Klei Works
              </span>
            </div>

            <p className="text-sm text-[#f3ede4]/55 font-light leading-relaxed max-w-[280px]">
              Handcrafted ceramics shaped by earth, water, and the human touch.
              Each piece — a story waiting to be held.
            </p>

            {/* Соціальні мережі */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[#f3ede4]/15 text-[#f3ede4]/50 hover:text-[#d97757] hover:border-[#d97757]/40 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Колонки навігації */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {navColumns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[10px] uppercase tracking-[0.35em] text-[#d97757] font-semibold mb-5">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#f3ede4]/55 hover:text-[#f3ede4] font-light transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Підписка на розсилку ── */}
        <div className="py-10 border-b border-[#f3ede4]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p
              className="text-lg font-light text-[#f3ede4]/80 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Stories from the studio, delivered quietly.
            </p>
            <p className="text-xs text-[#f3ede4]/35 mt-1 font-light">
              No noise. Just clay, craft, and new arrivals.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full sm:w-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-56 bg-transparent border border-[#f3ede4]/15 text-[#f3ede4] placeholder-[#f3ede4]/25 text-sm px-4 py-2.5 outline-none focus:border-[#d97757]/50 transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-[#d97757] hover:bg-[#c9674a] text-white text-[11px] tracking-[0.25em] uppercase font-medium px-5 py-2.5 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ── Legal bar ── */}
        <div className="mx-auto max-w-6xl px-0 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#f3ede4]/35">
          <span>© {new Date().getFullYear()} Klei Works. All rights reserved.</span>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="hover:text-[#d97757] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
