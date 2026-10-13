import {
  FileText,
  Copy,
  ClipboardCheck,
  Zap,
  Check,
  Plus,
} from 'lucide-react';
import { bundleComponents } from '../data/productData';

const iconMap = {
  'biz-reg': FileText,
  'cert-copies': Copy,
  compliance: ClipboardCheck,
  expedited: Zap,
};

export default function BundleComponents() {
  return (
    <section className="bundle card" aria-labelledby="bundle-heading">
      <h2 id="bundle-heading" className="section-heading">
        Bundle Components
      </h2>
      <p className="section-subheading">
        Everything included in the Business Launch Pro package.
      </p>

      <div className="bundle__grid">
        {bundleComponents.map((comp) => {
          const Icon = iconMap[comp.id] || FileText;
          const isIncluded = comp.status === 'included';
          return (
            <article key={comp.id} className="bundle-card">
              <div className="bundle-card__icon" aria-hidden="true">
                <Icon size={20} />
              </div>
              <div className="bundle-card__body">
                <h3 className="bundle-card__name">{comp.name}</h3>
                <p className="bundle-card__desc">{comp.description}</p>
                <div className="bundle-card__footer">
                  <span
                    className={`status-pill ${
                      isIncluded
                        ? 'status-pill--included'
                        : 'status-pill--optional'
                    }`}
                  >
                    {isIncluded ? (
                      <Check size={12} aria-hidden="true" />
                    ) : (
                      <Plus size={12} aria-hidden="true" />
                    )}
                    {comp.priceLabel}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
