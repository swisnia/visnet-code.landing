import './UseAIConditions.css';
import { IconChevronsRight } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';

function UseAIConditions() {
  const titleRef = useRef(null);
  const descRef = useRef(null);
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

    if (titleRef.current) observer.observe(titleRef.current);
    if (descRef.current) observer.observe(descRef.current);
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const items = [
    'Twoja firma gromadzi dużo danych',
    'Procesy wymagają wykonywania rutynowych działań, które można zautomatyzować',
    'Przetwarzane dane są poufne i nie mogą zostać wprowadzone do rozwiązań dostępnych na rynku',
    'Jesteś gotowy na stworzenie zaplecza technicznego potrzebnego do utrzymania modeli',
  ];

  return (
    <div className="use-ai-conditions">
      <h2 className="use-ai-title" ref={titleRef}>
        Kiedy warto wprowadzić własny system AI?
      </h2>
      <p className="use-ai-description header" ref={descRef}>
        Nasi specjaliści dokładnie przeanalizują Twoje potrzeby, odpowiedzą na
        pytania i zaproponują najlepsze rozwiązania dostosowane do specyfiki
        Twojego biznesu
      </p>
      <div className="use-ai-container">
        {items.map((text, index) => (
          <div
            key={index}
            className={`use-ai-item delay-${index + 1}`}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <div className="icon-container">
              <IconChevronsRight stroke={1.2} size={24} />
            </div>
            <p className="use-ai-description">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseAIConditions;
