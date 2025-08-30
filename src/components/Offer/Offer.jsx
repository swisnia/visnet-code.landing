import './Offer.css';
import service0 from '../../assets/services-0.webp';
import service1 from '../../assets/services-1.webp';
import service2 from '../../assets/services-2.webp';
import service3 from '../../assets/services-3.webp';

function Offer() {
  return (
    <div className="offer" id="about">
      <h2 className="offer-title">
        Co sprawia, że nasze systemy <span className="colored-txt">AI</span> są
        wyborem <span className="colored-txt">numer jeden</span> dla małych
        firm?
      </h2>
      <div className="offer-container">
        <div className="offer-item offer-item-border-lt">
          <img src={service0} alt="Consulting" />
          <div className="offer-item-txt">
            <h3 className="offer-item-title">Niskie koszty wdrożenia</h3>
            <p className="offer-item-description">
              Specjalizujemy się we wdrożeniach niskoprogowych, które nie
              wymagają rozbudowanego zaplecza IT
            </p>
          </div>
        </div>

        <div className="offer-item offer-item-border-b">
          <img src={service1} alt="Chatbots" />
          <div className="offer-item-txt">
            <h3 className="offer-item-title">Bezpieczeństwo danych</h3>
            <p className="offer-item-description">
              Dbamy o bezpieczeństwo danych, uruchamiając modele AI na
              wewnętrznej infrastrukturze i stosując filtry chroniące wrażliwe
              dane
            </p>
          </div>
        </div>

        <div className="offer-item offer-item-border-r">
          <img src={service2} alt="Images analitics" />
          <div className="offer-item-txt">
            <h3 className="offer-item-title">Dopasowanie do potrzeb</h3>
            <p className="offer-item-description">
              Proponujemy tylko takie rozwiązania, których wdrożenie przyniesie
              największe korzyści w Twoim biznesie
            </p>
          </div>
        </div>

        <div className="offer-item">
          <img src={service3} alt="Consulting" />
          <div className="offer-item-txt">
            <h3 className="offer-item-title">
              Wsparcie techniczne i szkolenia
            </h3>
            <p className="offer-item-description">
              Chętnie dzielimy się wiedzą i doświadczeniem, aby zapewnić
              maksymalne korzyści wykorzystania AI w Twojej firmie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
