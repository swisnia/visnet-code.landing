import './Navbar.css';
import logo from '../../assets/logo.svg';
import { IconArrowNarrowRight, IconTallymark1 } from '@tabler/icons-react';

function Navbar() {
  return (
    <div className="navbar flex items-center justify-center px-4">
      <div className="navbar-items">
        <div className="nav-left">
          <img src={logo} alt="Logo" />
          <IconTallymark1 stroke={1} color="#C2C4DB" size={40} />
          <a href="#services">Usługi</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-right">
          <a href="#contact" className="action-btn flex items-center">
            Kontakt
            <IconArrowNarrowRight
              className="ml-1"
              color="#292929"
              stroke={1.5}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
