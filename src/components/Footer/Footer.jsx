import './Footer.css';
import logo from '../../assets/logo-dark.svg';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
} from '@tabler/icons-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col logo-col">
          <img src={logo} className="logo" />
          <p className="tagline">Rozwiązania AI dla małych firm</p>
        </div>

        <div className="footer-col">
          <h4>Linki</h4>
          <ul>
            <li>
              <a href="#about">Dlaczego my?</a>
            </li>
            <li>
              <a href="#services">Usługi</a>
            </li>
            <li>
              <a href="#cooperation">Proces</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Pozostańmy w kontakcie!</h4>
          <p>contact@visnetcode.com</p>
          <p>+48 572 513 894</p>
          <p>NIP 873 32 92 669</p>
          <p>REGON 526 554 665</p>
          {/* <div className="socials">
            <a href="#">
              <IconBrandInstagram />
            </a>
            <a href="#">
              <IconBrandLinkedin />
            </a>
            <a href="#">
              <IconBrandFacebook />
            </a>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Copyright by VISNET Code. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
