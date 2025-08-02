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

function App() {
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
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
