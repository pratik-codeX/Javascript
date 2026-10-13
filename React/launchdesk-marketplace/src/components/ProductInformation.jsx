import { useState } from 'react';
import {
  CheckCircle2,
  Star,
  Tag,
  ChevronDown,
  ChevronUp,
  Package,
} from 'lucide-react';
import { specifications } from '../data/productData';

export default function ProductInformation({ product }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showLongDesc, setShowLongDesc] = useState(false);

  return (
    <div className="product-info">
      <span className="product-info__category-badge">
        <Tag size={14} aria-hidden="true" />
        {product.category}
      </span>

      <h1 className="product-info__title">{product.name}</h1>

      <div className="product-info__meta">
        <span className="product-info__sku">SKU: {product.sku}</span>
        <span className="product-info__dot" aria-hidden="true" />
        <span className="product-info__badge-pill">{product.badge}</span>
      </div>

      <div className="product-info__rating">
        <div className="product-info__stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={15}
              fill={i <= Math.round(product.rating) ? 'currentColor' : 'none'}
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="product-info__rating-value">{product.rating}</span>
        <span className="product-info__rating-label">
          ({product.ratingLabel})
        </span>
      </div>

      <p className="product-info__short-desc">{product.shortDescription}</p>

      <button
        type="button"
        className="product-info__desc-toggle"
        onClick={() => setShowLongDesc((v) => !v)}
        aria-expanded={showLongDesc}
      >
        {showLongDesc ? 'Hide details' : 'Read full description'}
        {showLongDesc ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {showLongDesc && (
        <p className="product-info__long-desc">{product.longDescription}</p>
      )}

      <div className="tabs">
        <div className="tabs__header" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'overview'}
            className={`tabs__tab ${activeTab === 'overview' ? 'tabs__tab--active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'specifications'}
            className={`tabs__tab ${activeTab === 'specifications' ? 'tabs__tab--active' : ''}`}
            onClick={() => setActiveTab('specifications')}
          >
            Specifications
          </button>
        </div>

        <div className="tabs__panel" role="tabpanel">
          {activeTab === 'overview' ? (
            <div className="product-info__included">
              <h3 className="product-info__subheading">
                <Package size={16} aria-hidden="true" />
                What&apos;s included
              </h3>
              <ul className="checklist">
                {product.includedServices.map((item) => (
                  <li key={item} className="checklist__item">
                    <CheckCircle2 size={17} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="product-info__subheading">Key benefits</h3>
              <ul className="benefit-list">
                {product.keyBenefits.map((benefit) => (
                  <li key={benefit.title} className="benefit-list__item">
                    <strong>{benefit.title}</strong>
                    <span>{benefit.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <table className="spec-table spec-table--inline">
              <tbody>
                {specifications.map((row) => (
                  <tr key={row.property}>
                    <th scope="row">{row.property}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
