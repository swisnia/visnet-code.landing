import Navbar from '../Navbar/Navbar';
import './Hero.css';
import heroImage from '../../assets/hero-1.webp';
import { useEffect, useRef } from 'react';
import MobileNavbar from '../NavbarMobile/MobileNavbar';

function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      leftRef.current.classList.add('animate');
      rightRef.current.classList.add('animate');
      navRef.current.classList.add('animate');
    }, 100);
  }, []);

  return (
    <div className="hero flex flex-col">
      <nav
        ref={navRef}
        className="navbar initial flex items-center justify-center relative"
      >
        <div className="hidden md:flex w-full">
          <Navbar />
        </div>

        <div className="flex md:hidden w-full relative">
          <MobileNavbar />
        </div>
      </nav>

      <div className="hero-content grid grid-cols-2">
        <div ref={leftRef} className="hero-left initial flex">
          <h1 className="text-5xl hero-title">
            Rozwiązania AI dla małych firm
          </h1>
          <p className="hero-description">
            Pomagamy firmom w osiąganiu przewagi rynkowej przy użyciu sztucznej
            inteligencji
          </p>
          <a href="#contact" className="hero-action-btn">
            Umów się na bezpłatną konsultację
          </a>
        </div>
        <div ref={rightRef} className="hero-right initial flex">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
