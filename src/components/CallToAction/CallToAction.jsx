import './CallToAction.css';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

function CallToAction() {
  const fullText = 'Czy chcesz wprowadzić innowację?';
  const [visibleLetters, setVisibleLetters] = useState(0);
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startTyping();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startTyping = () => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleLetters(index + 1);
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 50);
  };

  return (
    <div className="call-to-action" ref={containerRef}>
      <h2 className="call-to-action-title">
        {fullText.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="word">
            {word.split('').map((char, i) => {
              return (
                <span
                  key={i}
                  className={`char ${i < visibleLetters ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {char}
                </span>
              );
            })}{' '}
          </span>
        ))}
      </h2>

      <a href="#contact" className="cta-button flex items-center">
        Umów się na bezpłatną konsultację
        <IconArrowNarrowRight className="ml-1" color="#41434f" stroke={1.5} />
      </a>
    </div>
  );
}

export default CallToAction;
