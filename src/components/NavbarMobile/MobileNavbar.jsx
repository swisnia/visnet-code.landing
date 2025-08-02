import { useState } from 'react';
import {
  IconMenu2,
  IconX,
  IconTallymark1,
  IconArrowNarrowRight,
} from '@tabler/icons-react';
import logo from '../../assets/logo.svg';
import './MobileNavbar.css';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar flex items-center justify-between bg-white md:hidden relative px-4">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 focus:outline-none burger-btn"
      >
        {isOpen ? <IconX size={32} /> : <IconMenu2 size={32} />}
      </button>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="#services" className="menu-link">
          Usługi
        </a>
        <a href="#faq" className="menu-link">
          FAQ
        </a>
        <a href="#contact" className="menu-link flex">
          Kontakt
          <IconArrowNarrowRight className="ml-1" color="#4b5563" stroke={1.5} />
        </a>
      </div>
    </div>
  );
}
