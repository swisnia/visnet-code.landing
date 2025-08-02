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
          <p className="tagline">
            Nowoczesne oprogramowanie dla przedsiębiorstw.
          </p>
        </div>

        <div className="footer-col">
          <h4>Linki</h4>
          <ul>
            <li>Dlaczego my?</li>
            <li>Usługi</li>
            <li>Portfolio</li>
            <li>Proces</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Pozostańmy w kontakcie!</h4>
          <p>contact@visnetcode.com</p>
          <p>+48 572 513 894</p>
          <p>NIP 000 000 000</p>
          <p>REGON 000 000 000</p>
          <div className="socials">
            <a href="#">
              <IconBrandInstagram />
            </a>
            <a href="#">
              <IconBrandLinkedin />
            </a>
            <a href="#">
              <IconBrandFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Copyright by VISNET Code. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
