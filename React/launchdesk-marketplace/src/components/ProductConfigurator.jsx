import { AlertCircle, ShoppingCart, Info, Check } from 'lucide-react';
import QuantitySelector from './QuantitySelector';
import PriceBreakdown from './PriceBreakdown';

import {
  formatCurrency,
  calculatePackageSubtotal,
} from '../utils/pricing';

import {
  entityTypes,
  jurisdictions,
  pricingRules,
} from '../data/productData';

export default function ProductConfigurator({
  basePrice,
  entityType,
  setEntityType,
  jurisdiction,
  setJurisdiction,
  additionalDocuments,
  setAdditionalDocuments,
  quantity,
  setQuantity,
  expedited,
  setExpedited,
  onAddToCart,
  addedFeedback,
}) {
  const calc = calculatePackageSubtotal({
    basePrice,
    additionalDocuments,
    expedited,
    quantity,
  });

  const validation = validateConfig({
    entityType,
    jurisdiction,
    additionalDocuments,
    quantity,
  });

  return (
    <aside
      className="configurator card"
      aria-label="Product configuration"
    >
      <div className="configurator__price-header">
        <div>
          <span className="configurator__price">
            {formatCurrency(basePrice)}
          </span>
          <span className="configurator__billing"> one-time</span>
        </div>

        <span className="configurator__demo-tag">
          Demo pricing
        </span>
      </div>

      <div className="configurator__availability">
        <span className="dot dot--green" aria-hidden="true" />
        In Stock — Ready to Configure
      </div>

      {/* Entity type */}
      <fieldset className="configurator__field">
        <legend className="configurator__legend">
          Entity type
        </legend>

        <div className="configurator__options">
          {entityTypes.map((type) => (
            <label
              key={type.id}
              className={`configurator__option ${
                entityType === type.id
                  ? 'configurator__option--active'
                  : ''
              }`}
            >
              <input
                type="radio"
                name="entityType"
                value={type.id}
                checked={entityType === type.id}
                onChange={() => setEntityType(type.id)}
              />

              <span className="configurator__option-label">
                {type.label}
              </span>

              <span className="configurator__option-desc">
                {type.description}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Jurisdiction */}
      <div className="configurator__field">
        <label
          className="configurator__legend"
          htmlFor="jurisdiction"
        >
          Jurisdiction
        </label>

        <select
          id="jurisdiction"
          className="configurator__select"
          value={jurisdiction}
          onChange={(e) => setJurisdiction(e.target.value)}
        >
          <option value="">Select a jurisdiction…</option>

          {jurisdictions.map((j) => (
            <option key={j.id} value={j.id}>
              {j.label} — {j.note}
            </option>
          ))}
        </select>

        {validation.jurisdiction && (
          <p className="configurator__error">
            <AlertCircle size={14} aria-hidden="true" />
            {validation.jurisdiction}
          </p>
        )}
      </div>

      {/* Additional documents */}
      <div className="configurator__field">
        <QuantitySelector
          id="additional-docs"
          label="Additional documents"
          value={additionalDocuments}
          min={0}
          max={pricingRules.maxAdditionalDocuments}
          onChange={setAdditionalDocuments}
        />

        <p className="configurator__hint">
          3 included ·{' '}
          {formatCurrency(pricingRules.additionalDocumentPrice)} each extra
        </p>
      </div>

      {/* Package quantity */}
      <div className="configurator__field">
        <QuantitySelector
          id="package-qty"
          label="Number of packages"
          value={quantity}
          min={pricingRules.minPackages}
          max={pricingRules.maxPackages}
          onChange={setQuantity}
        />
      </div>

      {/* Expedited processing */}
      <label className="configurator__checkbox">
        <input
          type="checkbox"
          checked={expedited}
          onChange={(e) => setExpedited(e.target.checked)}
        />

        <span
          className="configurator__checkbox-box"
          aria-hidden="true"
        >
          {expedited && <Check size={14} />}
        </span>

        <span className="configurator__checkbox-text">
          Expedited processing
          <small>
            +{formatCurrency(pricingRules.expeditedFee)} per package
          </small>
        </span>
      </label>

      {/* Price breakdown */}
      <PriceBreakdown
        basePrice={calc.basePrice}
        additionalDocCharges={calc.additionalDocCharges}
        expeditedFee={calc.expeditedFee}
        perPackage={calc.perPackage}
        quantity={calc.quantity}
        subtotal={calc.subtotal}
        additionalDocuments={additionalDocuments}
        expedited={expedited}
      />

      {/* Add to cart */}
      <button
        type="button"
        className="btn btn--primary btn--block"
        onClick={() => onAddToCart(calc)}
        disabled={!validation.valid}
      >
        {addedFeedback ? (
          <>
            <Check size={18} aria-hidden="true" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart size={18} aria-hidden="true" />
            Add to Cart
          </>
        )}
      </button>

      {addedFeedback && (
        <div className="configurator__feedback" role="status">
          <Check size={14} aria-hidden="true" />
          Configuration added. Cart updated.
        </div>
      )}

      <p className="configurator__terms">
        <Info size={13} aria-hidden="true" />
        Demo pricing only. No real payment is processed. The backend must
        independently validate and calculate the authoritative quote.
      </p>
    </aside>
  );
}

function validateConfig({
  entityType,
  jurisdiction,
  additionalDocuments,
  quantity,
}) {
  const errors = {};

  if (!jurisdiction) {
    errors.jurisdiction = 'Please select a jurisdiction.';
  }

  if (!entityType) {
    errors.entityType = 'Please select an entity type.';
  }

  if (additionalDocuments < 0) {
    errors.additionalDocuments =
      'Additional documents cannot be negative.';
  }

  if (quantity < 1) {
    errors.quantity = 'Quantity must be at least 1.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    ...errors,
  };
}
