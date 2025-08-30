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
    'Chcesz zoptymalizować koszty i zwiększyć efektywność',
    'Szukasz przewagi konkurencyjnej na rynku',
    'Potrzebujesz rozwiązania dostosowanego dokładnie do swoich unikalnych procesów',
    'Chcesz zwiększyć satysfakcję klientów i poprawić jakość obsługi',
  ];

  return (
    <div className="use-ai-conditions">
      <h2 className="use-ai-title" ref={titleRef}>
        Kiedy warto wprowadzić własny system AI?
      </h2>
      <p className="use-ai-description header" ref={descRef}>
        Nasz specjalista dokładnie przeanalizuje Twoje potrzeby, odpowie na
        pytania i zaproponuje najlepsze rozwiązanie dostosowane do specyfiki
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
