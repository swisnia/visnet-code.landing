import './FAQ.css';
import { useState, useRef, useEffect } from 'react';

const questions = [
  {
    question: 'Czy wdrożenie AI jest bezpieczne dla moich danych?',
    answer:
      'Tak, wdrożenie AI jest całkowicie bezpieczne dla Twoich danych. Możemy uruchomić systemy lokalnie na infrastrukturze Twojej firmy lub zastosować zaawansowane filtry danych wrażliwych, co eliminuje ryzyko udostępniania poufnych informacji osobom trzecim. Dbamy o najwyższe standardy bezpieczeństwa.',
  },
  {
    question: 'Jakie korzyści przynosi wdrożenie AI w mojej firmie?',
    answer:
      'Wdrożenie AI może znacząco poprawić efektywność operacyjną, zautomatyzować rutynowe zadania, zwiększyć precyzję analiz i umożliwić podejmowanie lepszych decyzji biznesowych.',
  },
  {
    question: 'Czy muszę mieć gotowy pomysł na produkt AI?',
    answer:
      'Nie, nasi eksperci są gotowi doradzić, jakie rozwiązania AI najlepiej sprawdzą się w Twoim przedsiębiorstwie. Pomagamy zidentyfikować możliwości i zaprojektować odpowiednie rozwiązania.',
  },
  {
    question: 'Jak długo trwa proces wdrożenia AI?',
    answer:
      'Czas wdrożenia zależy od specyfiki projektu i potrzeb Twojej firmy. Po dokładnej analizie, przedstawimy Ci terminy realizacji.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    questions.forEach((_, i) => {
      const el = answerRefs.current[i];
      if (el) {
        if (i === openIndex) {
          el.style.maxHeight = el.scrollHeight + 'px';
        } else {
          el.style.maxHeight = '0px';
        }
      }
    });
  }, [openIndex]);

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">Często zadawane pytania</h2>
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-header" onClick={() => toggleQuestion(index)}>
            <span className="faq-number">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="faq-question">{item.question}</div>
            <div className="faq-icon">{openIndex === index ? '−' : '+'}</div>
          </div>
          <div
            className="faq-answer-wrapper"
            ref={(el) => (answerRefs.current[index] = el)}
          >
            <div className="faq-answer">{item.answer}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FAQ;
