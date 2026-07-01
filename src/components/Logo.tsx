// src/components/Logo.tsx
export const LogoMark = ({ size = 40, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Зовнішнє тонке коло-рамка */}
    <circle cx="50" cy="50" r="42" strokeWidth="1.2" />
    
    {/* Елементи літери K та декоративні гілочки */}
    <path d="M41,34 C41,34 37,45 37,55 C37,63 41,66 41,66" strokeWidth="1.2" />
    <path d="M41,37 L41,63" strokeWidth="2" />
    <path d="M57,36 C54,40 45,46 41,50 C46,54 53,58 59,62" strokeWidth="1.6" />
    
    {/* Тонкі рослинні лінії ліворуч та праворуч */}
    <path d="M34,44 C31,48 31,54 34,58" strokeWidth="0.8" />
    <path d="M66,44 C69,48 69,54 66,58" strokeWidth="0.8" />
    <circle cx="32" cy="51" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="68" cy="51" r="1.5" fill="currentColor" stroke="none" />
    
    {/* Силует глечика по центру знизу */}
    <path d="M47,56 C46,56 46,54 50,54 C54,54 54,56 53,56" strokeWidth="1" />
    <path d="M46,56 L54,56 L56,64 C57,69 54,74 50,74 C46,74 43,69 44,64 Z" strokeWidth="1.4" />
    <path d="M45,61 C48,63 52,63 55,61" strokeWidth="0.8" className="opacity-60" />
  </svg>
);