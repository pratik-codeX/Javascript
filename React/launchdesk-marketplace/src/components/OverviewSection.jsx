import { FileText, ShieldCheck, Clock, CheckCircle2, ListOrdered } from 'lucide-react';
import { product } from '../data/productData';

const iconMap = { FileText, ShieldCheck, Clock };

export default function OverviewSection() {
  const steps = [
    {
      number: '01',
      title: 'Configure your package',
      description:
        'Select entity type, jurisdiction, document count, and processing speed.',
    },
    {
      number: '02',
      title: 'Review your documents',
      description:
        'Your included services and compliance checklist are organized in one place.',
    },
    {
      number: '03',
      title: 'Receive and file',
      description:
        'Documents are delivered digitally for you to review and file as needed.',
    },
  ];

  return (
    <section className="overview card" aria-labelledby="overview-heading">
      <h2 id="overview-heading" className="section-heading">
        Product Overview
      </h2>

      <p className="overview__description">{product.longDescription}</p>

      <div className="overview__benefits">
        {product.keyBenefits.map((benefit) => {
          const Icon = iconMap[benefit.icon] || FileText;
          return (
            <article key={benefit.title} className="benefit-card">
              <div className="benefit-card__icon" aria-hidden="true">
                <Icon size={22} />
              </div>
              <h3 className="benefit-card__title">{benefit.title}</h3>
              <p className="benefit-card__desc">{benefit.description}</p>
            </article>
          );
        })}
      </div>

      <div className="overview__grid">
        <div className="overview__included">
          <h3 className="overview__subheading">
            <CheckCircle2 size={18} aria-hidden="true" />
            What is included?
          </h3>
          <ul className="checklist">
            {product.includedServices.map((item) => (
              <li key={item} className="checklist__item">
                <CheckCircle2 size={17} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overview__process">
          <h3 className="overview__subheading">
            <ListOrdered size={18} aria-hidden="true" />
            How it works
          </h3>
          <ol className="process-list">
            {steps.map((step) => (
              <li key={step.number} className="process-list__item">
                <span className="process-list__number">{step.number}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
