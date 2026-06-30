import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-73px)] bg-stone-900 text-stone-100 flex flex-col justify-between overflow-hidden">
      
      {/* 1. Автентичне фонове зображення з затемненням */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 bg-[url('https://images.unsplash.com/photo-1610701596007-11502861affa?q=80&w=1600')]"
        style={{ filter: 'brightness(0.4) contrast(1.05)' }}
      ></div>

      {/* 2. Центральний блок: Кругле фірмове лого та кнопка */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center p-6 text-center mt-[-40px]">
        
        {/* Велике коло */}
        <div className="w-72 h-72 md:w-96 md:h-96 border border-white/40 rounded-full flex flex-col items-center justify-center p-8 backdrop-blur-[1px] hover:border-white/60 transition-colors duration-500">
          
          {/* Геометричний внутрішній знак (імітація логотипу) */}
          <div className="w-20 h-20 md:w-24 md:h-24 border border-white/80 rounded-br-[36px] rounded-tl-[36px] flex items-center justify-center mb-6">
            {/* Тонкі лінії знака всередині */}
            <div className="w-10 h-10 border-r border-b border-white/60 rounded-br-[16px]"></div>
          </div>

          {/* Назва бренду великими літерами з розрядкою */}
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.25em] uppercase font-light text-white mb-2 select-none">
            Klei Works
          </h1>
          
          {/* Підпис знизу */}
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-stone-300 font-light">
            Artisan Tableware
          </span>
        </div>

        {/* Кнопка переходу до колекцій */}
        <Link 
          to="/artists" 
          className="mt-12 px-10 py-3.5 border border-white/80 text-white text-[11px] uppercase tracking-[0.25em] bg-transparent hover:bg-white hover:text-stone-950 transition-all duration-300 font-medium"
        >
          Explore Collection
        </Link>
      </div>

      {/* 3. Нижня декоративна бежева хвиля/плашка, що перекриває фото */}
      <div className="relative z-10 w-full h-16 bg-[#fcfbf9] rounded-t-[100%] scale-x-125 translate-y-8 pointer-events-none"></div>
    </div>
  );
};

export default Home;