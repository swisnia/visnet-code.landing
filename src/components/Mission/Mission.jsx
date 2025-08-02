import './Mission.css';
import personImage from '../../assets/person-0.png';

function Mission() {
  return (
    <div className="mission">
      <h2 className="mission-title">
        "Naszą misją jest wspieranie firm w osiąganiu ich pełnego potencjału
        poprzez wykorzystanie sztucznej inteligencji...
      </h2>
      <p className="mission-subtitle">
        ...Wierzymy, że inteligentne rozwiązania mogą nie tylko usprawniać
        procesy, ale także napędzać innowacje i dawać realną przewagę
        konkurencyjną.”
      </p>
      <div className="signature-container">
        <div className="signature flex">
          <img src={personImage} alt="Person Image" className="person-image" />
          <div className="person-data flex flex-col">
            <p className="person-name">Szymon Wiśniowski</p>
            <p className="person-title">Specjalista AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
