import './App.css';
import Offer from './components/Offer/Offer';
import Hero from './components/Hero/Hero';
import Mission from './components/Mission/Mission';
import Services from './components/Services/Services';
import Benefits from './components/Benefits/Benefits';
import UseAIConditions from './components/UseAIConditions/UseAIConditions';
import Consulting from './components/Consulting/Consulting';
import Cooperation from './components/Cooperation/Cooperation';
import CallToAction from './components/CallToAction/CallToAction';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center">
              <Hero />
              <Mission />
              <Services />
              <Offer />
              <Benefits />
              <div className="dark-background flex flex-col items-center">
                <UseAIConditions />
                <Consulting />
                <Cooperation />
                <CallToAction />
              </div>
              <Contact />
              <FAQ />
              <Footer />
              {showButton && (
                <button
                  onClick={scrollToTop}
                  className="floating-button"
                  aria-label="Scroll to top"
                >
                  <span className="arrow-up">↑</span>
                </button>
              )}
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
