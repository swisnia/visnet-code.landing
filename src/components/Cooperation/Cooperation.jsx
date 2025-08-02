import './Cooperation.css';
import { useEffect, useRef } from 'react';

function Cooperation() {
  const headerRef = useRef(null);
  const stepRefs = useRef([]);

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
    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Spotkanie wstępne',
      description:
        'Podczas spotkania online omówimy problem, dostępne możliwość i oczekiwane rezultaty',
    },
    {
      number: '02',
      title: 'Wycena i planowanie',
      description: 'Przedstawimy propozycję rozwiązania i koszty wdrożenia',
    },
    {
      number: '03',
      title: 'Tworzenie rozwiązania',
      description: 'Przystąpimy do tworzenia pierwszej wersji rozwiązania',
    },
    {
      number: '04',
      title: 'Demo produktu',
      description:
        'Zademonstrujemy Ci pierwszą wersję rozwiązania i omówimy Twoje uwagi',
    },
    {
      number: '05',
      title: 'Iteracja i testowanie',
      description: 'Wprowadzimy poprawki i przetestujemy system',
    },
    {
      number: '06',
      title: 'Wdrożenie systemu',
      description: 'Uruchomimy system w Twojej firmie!',
    },
  ];

  return (
    <div className="cooperation" id="cooperation">
      <div className="cooperation-header" ref={headerRef}>
        <h2 className="cooperation-title">
          Jak będzie wyglądać nasza współpraca?
        </h2>
        <p className="cooperation-description">
          Zajmujemy się wszystkim, od pomysłu po finalny produkt. Pomożemy Ci
          zdefiniować potrzeby i znaleźć najlepsze rozwiązanie.
        </p>
      </div>

      <div className="cooperation-steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`cooperation-step delay-${index + 1}`}
            ref={(el) => (stepRefs.current[index] = el)}
          >
            <div className="cooperation-step-number">{step.number}</div>
            <h3 className="cooperation-step-title">{step.title}</h3>
            <p className="cooperation-step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cooperation;
