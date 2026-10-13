import { Building2, CalendarCheck, FolderLock, Plus, Check } from 'lucide-react';
import { relatedServices } from '../data/productData';

const iconMap = { Building2, CalendarCheck, FolderLock };

export default function RelatedServices({ onAdd, addedIds }) {
  return (
    <section className="related card" aria-labelledby="related-heading">
      <h2 id="related-heading" className="section-heading">
        Complete Your Business Setup
      </h2>
      <p className="section-subheading">
        Optional services that pair well with your formation package.
        Recurring charges are clearly labeled.
      </p>

      <div className="related__grid">
        {relatedServices.map((service) => {
          const Icon = iconMap[service.icon] || Building2;
          const added = addedIds.includes(service.id);
          return (
            <article key={service.id} className="related-card">
              <div className="related-card__icon" aria-hidden="true">
                <Icon size={22} />
              </div>
              <h3 className="related-card__name">{service.name}</h3>
              <p className="related-card__desc">{service.description}</p>
              <div className="related-card__pricing">
                <span className="related-card__price">
                  ${service.price}
                </span>
                <span className="related-card__billing">
                  /{service.billing}
                </span>
                {service.recurring && (
                  <span className="recurring-badge">Recurring</span>
                )}
              </div>
              <button
                type="button"
                className={`btn ${added ? 'btn--added' : 'btn--outline'} btn--sm btn--block`}
                onClick={() => onAdd(service)}
                disabled={added}
              >
                {added ? (
                  <>
                    <Check size={15} aria-hidden="true" /> Added
                  </>
                ) : (
                  <>
                    <Plus size={15} aria-hidden="true" /> Add
                  </>
                )}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
