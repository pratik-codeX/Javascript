import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Headphones,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { faqs, trustInfo } from '../data/productData';

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="support card" aria-labelledby="support-heading">
      <h2 id="support-heading" className="section-heading">
        Customer Support &amp; Trust
      </h2>

      <div className="support__grid">
        <div className="support__item">
          <Headphones size={20} aria-hidden="true" />
          <div>
            <strong>Support availability</strong>
            <p>{trustInfo.support}</p>
          </div>
        </div>
        <div className="support__item">
          <ShieldCheck size={20} aria-hidden="true" />
          <div>
            <strong>Secure checkout</strong>
            <p>{trustInfo.secureCheckout}</p>
          </div>
        </div>
        <div className="support__item">
          <FileText size={20} aria-hidden="true" />
          <div>
            <strong>Service terms</strong>
            <p>{trustInfo.terms}</p>
          </div>
        </div>
      </div>

      <div className="faq">
        <h3 className="faq__heading">Frequently Asked Questions</h3>
        <ul className="faq__list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <li key={faq.id} className="faq__item">
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp size={18} aria-hidden="true" />
                  ) : (
                    <ChevronDown size={18} aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="faq__answer"
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
