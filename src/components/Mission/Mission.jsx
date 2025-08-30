import './Mission.css';
import personImage from '../../assets/person-0.webp';
import signImage from '../../assets/sign.webp';

function Mission() {
  return (
    <div className="mission">
      <h2 className="mission-title">
        „Naszą misją jest wspieranie małych firm narzędziami AI na miarę ich
        potrzeb”
      </h2>
      <div className="signature-container">
        <a
          href="https://www.linkedin.com/in/-szymon-wi%C5%9Bniowski/"
          className="linked-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="signature flex">
            <img
              src={personImage}
              alt="Person Image"
              className="person-image"
            />
            <div className="person-data flex flex-col">
              <p className="person-name">Szymon Wiśniowski</p>
              <p className="person-title">AI Engineer</p>
            </div>
          </div>
        </a>
        <div className="sign">
          <img src={signImage} alt="Sign" className="sign-image flex" />
        </div>
      </div>
    </div>
  );
}

export default Mission;
