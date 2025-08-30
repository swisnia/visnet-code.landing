import './CallToAction.css';
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
    let lastTimestamp = null;

    function typeStep(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      if (elapsed > 50) {
        setVisibleLetters((prev) => {
          if (prev < fullText.length) {
            index = prev + 1;
            return index;
          }
          return prev;
        });
        lastTimestamp = timestamp;
      }

      if (index < fullText.length) {
        requestAnimationFrame(typeStep);
      }
    }

    requestAnimationFrame(typeStep);
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
      </a>
    </div>
  );
}

export default CallToAction;
