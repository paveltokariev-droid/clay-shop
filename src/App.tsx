import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import MouldedByNature from './components/MouldedByNature'; // Імпортуємо нову секцію з хвилею
/*import Philosophy from './components/philosophy';*/
/*import Contact from './components/Contact';*/
/*import Footer from './components/Footer';*/

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-900 flex flex-col scroll-smooth selection:bg-stone-800 selection:text-stone-100">
      {/* Розумний хедер, який стежить за скролом */}
      <Header />

      <main className="w-full flex-1">
        {/* Hero секція (зафіксована на фоні завдяки sticky) */}
        <section id="hero">
          <Hero />
        </section>

        {/* Секція MouldedByNature, яка своєю хвилею перекриває Hero при скролі */}
        <MouldedByNature />

        {/* Collections — темна мозаїка */}
        <section id="collections">
          <Collections />
        </section>

        <section id="philosophy">
          {/* <Philosophy /> */}
        </section>

        <section id="contact">
         {/*<Contact /> */}
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;