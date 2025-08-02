import './Services.css';
import { IconBulb, IconHeadset, IconCode } from '@tabler/icons-react';
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
            icon: <IconCode stroke={1.2} size={56} className="mb-8" />,
            title: 'Systemy AI',
            desc: 'Tworzymy i wdrażamy zaawansowane systemy AI, które automatyzują procesy biznesowe.',
          },
          {
            icon: <IconHeadset stroke={1.2} size={56} className="mb-8" />,
            title: 'Doradztwo i szkolenia',
            desc: 'Oferujemy kompleksowe doradztwo w zakresie AI oraz szkolenia dla zespołów.',
          },
          {
            icon: <IconBulb stroke={1.2} size={56} className="mb-8" />,
            title: 'Mentoring',
            desc: 'Pomagamy w rozwoju projektów AI, oferując mentoring i wsparcie techniczne.',
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
