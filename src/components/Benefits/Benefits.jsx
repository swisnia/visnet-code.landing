import './Benefits.css';
import {
  IconBrandZapier,
  IconShieldLock,
  IconClockCheck,
  IconChartArrowsVertical,
  IconChartColumn,
} from '@tabler/icons-react';

function Benefits() {
  return (
    <div className="benefits">
      <h2 className="benefits-title">Korzyści wewnętrznego systemu AI</h2>
      <p className="benefits-title-description">
        Wdrażając nasze oprogramowanie, zyskujesz więcej niż tylko nowoczesne
        narzędzie – zyskujesz partnera, który pomoże Ci w pełni wykorzystać
        potencjał sztucznej inteligencji w Twojej firmie.
      </p>
      <div className="benefits-container">
        <div className="benefits-item benefits-item-border-r benefits-item-border-b">
          <IconBrandZapier stroke={1.5} color="#1B36C1" size={28} />
          <h3 className="benefits-item-title">Automatyzacja</h3>
          <p className="benefits-item-description">
            Zredukuj czas i koszty dzięki automatyzacji rutynowych działań.
          </p>
        </div>

        <div className="benefits-item benefits-item-border-b">
          <IconShieldLock stroke={1.5} color="#1B36C1" size={28} />
          <h3 className="benefits-item-title">Bezpieczeństwo</h3>
          <p className="benefits-item-description">
            Zabezpiecz swoje dane uruchamiając modele AI na własnej
            infrastrukturze..
          </p>
        </div>

        <div className="benefits-item benefits-item-border-b empty-item"></div>

        <div className="benefits-item benefits-item-border-r">
          <IconClockCheck stroke={1.5} color="#1B36C1" size={28} />
          <h3 className="benefits-item-title">Zwiększenie efektywności</h3>
          <p className="benefits-item-description">
            Usprawnij operacje i zyskaj lepsze wyniki w krótszym czasie.
          </p>
        </div>

        <div className="benefits-item benefits-item-border-r">
          <IconChartArrowsVertical stroke={1.5} color="#1B36C1" size={28} />
          <h3 className="benefits-item-title">Skalowalność</h3>
          <p className="benefits-item-description">
            Zainwestuj w oprogramowanie, które rośnie razem z Twoim biznesem.
          </p>
        </div>

        <div className="benefits-item">
          <IconChartColumn stroke={1.5} color="#1B36C1" size={28} />
          <h3 className="benefits-item-title">Przewaga konkurencyjna</h3>
          <p className="benefits-item-description">
            Zyskaj przewagę i wyróżnij się na tle konkurencji.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
