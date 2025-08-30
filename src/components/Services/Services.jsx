import './Services.css';
import { IconSearch, IconHeadset, IconCode } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';

function Services() {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate', `delay-${index + 1}`);
            observer.unobserve(entry.target); // animuj tylko raz
          }
        });
      },
      { threshold: 0.2 }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="services" id="services">
      <h2 className="services-title">Co możemy dla Ciebie zrobić?</h2>
      <div className="services-container mt-16 grid grid-cols-3">
        {[
          {
            icon: <IconCode stroke={1.2} size={48} className="mb-8" />,
            title: 'Systemy AI szyte na miarę',
            desc: 'Tworzymy indywidualne rozwiązania AI dopasowane do twoich potrzeb i budżetu',
          },
          {
            icon: <IconSearch stroke={1.2} size={48} className="mb-8" />,
            title: 'Audyty AI',
            desc: 'Sprawdzimy, gdzie w Twojej firmie AI przyniesie największe korzyści',
          },
          {
            icon: <IconHeadset stroke={1.2} size={48} className="mb-8" />,
            title: 'Doradztwo i szkolenia',
            desc: 'Pomagamy w rozwoju projektów AI, oferując mentoring i wsparcie techniczne',
          },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className={`service flex flex-col pb-10 pt-4 ${
              index === 1
                ? 'middle-service px-8'
                : index === 0
                ? 'pr-8'
                : 'pl-8'
            }`}
          >
            {item.icon}
            <h3 className="service-title mb-8">{item.title}</h3>
            <p className="service-description">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
