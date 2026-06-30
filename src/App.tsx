import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Philosophy from './pages/philosophy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fcfbf9] text-stone-900 flex flex-col justify-between selection:bg-stone-800 selection:text-stone-100">
        <Header />
        
        <main className="flex-grow flex flex-col justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/philosophy" element={<Philosophy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;