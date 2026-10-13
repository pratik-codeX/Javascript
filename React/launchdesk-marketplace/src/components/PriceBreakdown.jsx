import { formatCurrency } from '../utils/pricing';

export default function PriceBreakdown({
  basePrice,
  additionalDocCharges,
  expeditedFee,
  perPackage,
  quantity,
  subtotal,
  additionalDocuments,
  expedited,
  servicesTotal,
  tax,
  total,
  showFull = false,
}) {
  return (
    <div className="price-breakdown">
      {showFull ? (
        <>
          <div className="price-breakdown__row">
            <span>Base package</span>
            <span>{formatCurrency(basePrice)}</span>
          </div>
          {additionalDocCharges > 0 && (
            <div className="price-breakdown__row">
              <span>Additional documents ({additionalDocuments})</span>
              <span>{formatCurrency(additionalDocCharges)}</span>
            </div>
          )}
          {expedited && (
            <div className="price-breakdown__row">
              <span>Expedited processing</span>
              <span>{formatCurrency(expeditedFee)}</span>
            </div>
          )}
          <div className="price-breakdown__row price-breakdown__row--sub">
            <span>Per package</span>
            <span>{formatCurrency(perPackage)}</span>
          </div>
          <div className="price-breakdown__row">
            <span>Packages</span>
            <span>× {quantity}</span>
          </div>
          <div className="price-breakdown__row price-breakdown__row--sub">
            <span>Package subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          {servicesTotal > 0 && (
            <div className="price-breakdown__row">
              <span>Related services</span>
              <span>{formatCurrency(servicesTotal)}</span>
            </div>
          )}
          {tax > 0 && (
            <div className="price-breakdown__row">
              <span>Estimated tax</span>
              <span>{formatCurrency(tax)}</span>
            </div>
          )}
          <div className="price-breakdown__row price-breakdown__row--total">
            <span>Estimated total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </>
      ) : (
        <>
          <div className="price-breakdown__row">
            <span>Base price</span>
            <span>{formatCurrency(basePrice)}</span>
          </div>
          {additionalDocCharges > 0 && (
            <div className="price-breakdown__row">
              <span>Additional documents</span>
              <span>{formatCurrency(additionalDocCharges)}</span>
            </div>
          )}
          {expedited && (
            <div className="price-breakdown__row">
              <span>Expedited processing</span>
              <span>{formatCurrency(expeditedFee)}</span>
            </div>
          )}
          <div className="price-breakdown__row price-breakdown__row--total">
            <span>Estimated subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
        </>
      )}
    </div>
  );
}
