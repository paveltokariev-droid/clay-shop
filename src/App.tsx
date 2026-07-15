import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import MouldedByNature from './components/MouldedByNature'; // Імпортуємо нову секцію з хвилею
/*import Philosophy from './components/philosophy';*/
/*import Contact from './components/Contact';*/
import ArtApproach from './components/ArtApproach';
import ReshapingSoul from './components/ReshapingSoul';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import BrandMovement from './components/BrandMovement';


function App() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-900 flex flex-col scroll-smooth selection:bg-stone-800 selection:text-stone-100">
      {/* Розумний хедер, який стежить за скролом */}
      <Header />

      {/* Hero — фіксований на місці, всі секції проповзають поверх нього */}
      <Hero />

      <main className="w-full flex-1">
        {/* Hero-placeholder: займає місце на сторінці, сам Hero — fixed */}
        <section id="hero" className="h-screen w-full" />

        {/* Всі наступні секції мають z-index вище Hero (z-0) і перекривають його при скролі */}
        <div className="relative z-10">

        {/* Секція MouldedByNature, яка своєю хвилею перекриває Hero при скролі */}
        <MouldedByNature />

        {/* Collections — темна мозаїка */}
        <section id="collections">
          <Collections />
        </section>

        <section>
          <ArtApproach />
        </section>

        <section>
          <ReshapingSoul />
        </section>

        <section>
          <GetInTouch />
        </section>

        <section>
          <BrandMovement />
        </section>

        <section id="philosophy">
          {/* <Philosophy /> */}
        </section>


        <section id="contact">
         {/*<Contact /> */}
        </section>
        </div> {/* /relative z-10 */}
      </main>

      <Footer />
    </div>
  );
}

export default App;