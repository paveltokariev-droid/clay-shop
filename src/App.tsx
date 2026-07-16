import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import MouldedByNature from './components/MouldedByNature'; // Імпортуємо нову секцію з хвилею
import ArtApproach from './components/ArtApproach';
import ReshapingSoul from './components/ReshapingSoul';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import BrandMovement from './components/BrandMovement';


function App() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-900 flex flex-col scroll-smooth selection:bg-stone-800 selection:text-stone-100">
      
      <Header />

      <Hero />

      <main className="w-full flex-1">

        <section className="h-screen w-full" />

        
        <div className="relative z-10">

       
        <MouldedByNature />

       
        <section id="collections">
          <Collections />
        </section>

        <section id="Artists-Designers">
          <ArtApproach />
        </section>

        <section id="philosophy">
          <ReshapingSoul />
        </section>

        <section id="contact">
          <GetInTouch />
        </section>

        <section>
          <BrandMovement />
        </section>

        
        
      


        </div> {/* /relative z-10 */}
      </main>

      <Footer />
    </div>
  );
}

export default App;