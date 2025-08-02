import './Consulting.css';
import consulting0 from '../../assets/consulting-0.png';
import { IconTrendingUp, IconBulb, IconChecklist } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';

function Consulting() {
  const headerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const infoItems = [
    {
      icon: <IconTrendingUp stroke={1} size={32} className="mb-4" />,
      text: 'Dowiesz się, jak zastosować AI, by usprawnić swoje działania.',
    },
    {
      icon: <IconBulb stroke={1} size={32} className="mb-4" />,
      text: 'Skonsultujesz swoje pomysły z ekspertami w dziedzinie AI.',
    },
    {
      icon: <IconChecklist stroke={1} size={32} className="mb-4" />,
      text: 'Po spotkaniu otrzymasz spersonalizowaną ofertę.',
    },
  ];

  return (
    <div className="consulting">
      <div className="consulting-header" ref={headerRef}>
        <img src={consulting0} alt="Konsultacje" />
        <div className="consulting-text">
          <h2 className="consulting-title">
            Umów się na bezpłatną konsultacje
          </h2>
          <p className="consulting-description">
            Nasz zespół pomoże Ci zrozumieć, jak AI może usprawnić Twój biznes i
            zwiększyć jego konkurencyjność.
          </p>
        </div>
      </div>

      <div className="consulting-info">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className={`consulting-info-item delay-${index + 1} ${
              index === 1 ? 'consulting-info-item-center' : ''
            }`}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            {item.icon}
            <p className="consulting-description">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consulting;
