import './Benefits.css';
import {
  IconCoins,
  IconShieldLock,
  IconClockCheck,
  IconBrain,
  IconChartColumn,
} from '@tabler/icons-react';

function Benefits() {
  return (
    <div className="benefits">
      <h2 className="benefits-title">Korzyści własnego systemu AI</h2>
      <p className="benefits-title-description">
        Wdrażając nasze oprogramowanie, zyskujesz więcej niż tylko nowoczesne
        narzędzie – zyskujesz partnera, który pomoże Ci w pełni wykorzystać
        potencjał sztucznej inteligencji w Twojej firmie
      </p>
      <div className="benefits-container">
        <div className="benefits-item benefits-item-border-r benefits-item-border-b">
          <IconCoins stroke={1.5} color="#1B36C1" size={28} />
          <h3 className="benefits-item-title">Redukcja kosztów</h3>
          <p className="benefits-item-description">
            Zredukuj koszty dzięki automatyzacji rutynowych zadań
          </p>
        </div>

        <div className="benefits-item benefits-item-border-b">
          <IconShieldLock stroke={1.5} color="#1B36C1" size={28} />
          <h3 className="benefits-item-title">Bezpieczeństwo</h3>
          <p className="benefits-item-description">
            Zabezpiecz swoje dane uruchamiając modele AI na własnej
            infrastrukturze
          </p>
        </div>

        <div className="benefits-item benefits-item-border-b empty-item"></div>

        <div className="benefits-item benefits-item-border-r">
          <IconClockCheck stroke={1.5} color="#1B36C1" size={28} />
          <h3 className="benefits-item-title">Oszczędność czasu</h3>
          <p className="benefits-item-description">
            Zautomatyzuj czasochłonne zadania i skup się na rozwoju biznesu
          </p>
        </div>

        <div className="benefits-item benefits-item-border-r">
          <IconBrain stroke={1.5} color="#1B36C1" size={28} />
          <h3 className="benefits-item-title">Lepsze decyzje</h3>
          <p className="benefits-item-description">
            Wykorzystaj dane i analizy do podejmowania bardziej trafnych decyzji
          </p>
        </div>

        <div className="benefits-item">
          <IconChartColumn stroke={1.5} color="#1B36C1" size={28} />
          <h3 className="benefits-item-title">Przewaga konkurencyjna</h3>
          <p className="benefits-item-description">
            Zyskaj przewagę konkurencyjną dzięki innowacyjnym rozwiązaniom AI
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
