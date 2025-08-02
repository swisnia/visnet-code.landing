import './Offer.css';
import service0 from '../../assets/services-0.png';
import service1 from '../../assets/services-1.png';
import service2 from '../../assets/services-2.png';
import service3 from '../../assets/services-3.png';

function Offer() {
  return (
    <div className="offer">
      <h2 className="offer-title">
        Tworzymy profesjonalne{' '}
        <span className="colored-txt">oprogramowanie wykorzystujące</span>{' '}
        najnowsze technologie <span className="colored-txt">AI</span>
      </h2>
      <div className="offer-container">
        <div className="offer-item offer-item-border-lt">
          <img src={service3} alt="Consulting" />
          <div className="offer-item-txt">
            <h3 className="offer-item-title">Doradztwo i szkolenia</h3>
            <p className="offer-item-description">
              Zapewniamy bieżące wsparcie techniczne, aby zapewnić skuteczność i
              optymalizację wdrożonych rozwiązań.
            </p>
          </div>
        </div>

        <div className="offer-item offer-item-border-b">
          <img src={service0} alt="Chatbots" />
          <div className="offer-item-txt">
            <h3 className="offer-item-title">Chatboty AI</h3>
            <p className="offer-item-description">
              ZWykorzystaj moc zaawansowanych algorytmów językowych do
              automatyzacji komunikacji i analizy danych tekstowych.
            </p>
          </div>
        </div>

        <div className="offer-item offer-item-border-r">
          <img src={service1} alt="Images analitics" />
          <div className="offer-item-txt">
            <h3 className="offer-item-title">Analiza obrazów</h3>
            <p className="offer-item-description">
              Zoptymalizuj procesy wizualne w swojej firmie – nasze AI
              skutecznie analizuje obrazy, identyfikuje obiekty i rozpoznaje
              wzorce.
            </p>
          </div>
        </div>

        <div className="offer-item">
          <img src={service2} alt="Data analitics" />
          <div className="offer-item-txt">
            <h3 className="offer-item-title">Analiza Danych</h3>
            <p className="offer-item-description">
              Nasze narzędzia AI przekształcają dane w wartościowe informacje,
              które pomogą Ci podejmować lepsze decyzje biznesowe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
