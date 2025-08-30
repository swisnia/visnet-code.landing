import './Contact.css';
import star from '../../assets/star.webp';
import { useEffect, useState } from 'react';
import { send, init } from '@emailjs/browser';
import { IconCircleCheck, IconAlertCircle } from '@tabler/icons-react';

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    send('service_lktxobp', 'template_xuw6u7c', formData).then(
      () => {
        setIsLoading(false);
        setIsSubmitted(true);
        setFormData(initialFormData);
      },
      () => {
        setIsLoading(false);
        setFormError(true);
      }
    );
  };

  const initEmailJS = () => {
    init({
      publicKey: 'GzV_k6ea-u-yKtDCF',
      blockHeadless: true,
      blockList: {
        list: ['test@email.com', 'test@gmail.com'],
        watchVariable: 'email',
      },
      limitRate: {
        id: 'app',
        throttle: 10000,
      },
    });
  };

  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="contact-header">
        <p className="contact-header-question">Jesteś zainteresowany?</p>
        <h3 className="contact-header-title">Wyślij zapytanie</h3>
        <p className="contact-header-whats-next">Co po wysłaniu zapytania?</p>
        <div className="contact-header-item">
          <div className="contact-header-item-row">
            <img src={star} alt="star" />
            <p className="contact-header-item-txt">
              Skontaktujemy się z Tobą w ciągu 24 godzin
            </p>
          </div>

          <div className="contact-header-item-row">
            <img src={star} alt="star" />
            <p className="contact-header-item-txt">
              Umówimy spotkanie wstępne online, aby poznać Twoje potrzeby
            </p>
          </div>

          <div className="contact-header-item-row">
            <img src={star} alt="star" />
            <p className="contact-header-item-txt">
              Przygotujemy spersonalizowaną ofertę dla Twojej firmy
            </p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        {formError && (
          <div className="w-full max-w-2xl mx-auto border border-red-200 rounded-2xl p-6 shadow-sm flex items-center gap-4 mt-4">
            <div className="flex-shrink-0 rounded-full p-2">
              <IconAlertCircle size={28} className="text-red-600" />
            </div>
            <div>
              <h3 className="text-md font-semibold text-red-800">
                Coś poszło nie tak.
              </h3>
              <p className="text-sm text-red-700 mt-1">
                Spróbuj ponownie później.
              </p>
            </div>
          </div>
        )}
        {!isLoading && !isSubmitted && (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Imię i nazwisko</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Adres e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Numer telefonu</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+48"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="message">Treść wiadomości</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Napisz tutaj swoje pytanie lub opis projektu"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="flex items-start gap-2 mb-4">
              <input
                type="checkbox"
                id="rodoConsent"
                name="rodoConsent"
                checked={formData.rodoConsent || false}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    rodoConsent: e.target.checked,
                  }))
                }
                required
              />
              <label htmlFor="rodoConsent" className="text-small">
                Administratorem Twoich danych jest Visnet Code Szymon
                Wiśniowski, NIP: 8733292669. Twoje dane będą przetwarzane w celu
                kontaktowym i obsługi korespondencji, wykonania obowiązków
                obciążających nas na podstawie przepisów prawa lub RODO (art. 6
                ust. 1 lit c RODO), w celach archiwalnych lub dowodowych lub w
                celu ustalenia, dochodzenia lub obrony przed roszczeniami (art.
                6 ust. 1 lit. f RODO). Przysługuje Ci prawo do dostępu do swoich
                danych osobowych, sprostowania danych osobowych, usunięcia
                danych osobowych, ograniczenia przetwarzania danych osobowych,
                sprzeciwu wobec przetwarzania danych osobowych, prawo do
                przenoszenia danych, a także prawo do wniesienia skargi do
                organu nadzorczego, jeśli w Twojej ocenie przetwarzamy dane w
                sposób nieprawidłowy. Więcej informacji w{' '}
                <a
                  href="/polityka-prywatnosci.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1b36c1' }}
                >
                  polityce prywatności
                </a>
              </label>
            </div>
            <button type="submit">Wyślij zapytanie</button>
          </form>
        )}
        {isLoading && (
          <div className="flex justify-center items-center h-full">
            <div className="relative w-24 h-24">
              <div className="outer-ring animate-spin"></div>
              <div className="inner-ring animate-spin-reverse"></div>
            </div>
          </div>
        )}
        {isSubmitted && (
          <div className="flex justify-center h-full items-center">
            <div className="contact-form-success w-full max-w-2xl mx-auto bg-white border border-green-200 rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <div className="flex-shrink-0 rounded-full p-2">
                <IconCircleCheck size={32} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Dziękujemy za Twoje zapytanie!
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Skontaktujemy się z Tobą wkrótce.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
