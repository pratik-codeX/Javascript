// ============================================================
// Pricing utility — single source of truth for all price
// calculations. The future backend must independently
// validate and calculate the authoritative quote.
// ============================================================

import { pricingRules } from '../data/productData';

/**
 * Calculate the package subtotal.
 * Formula:
 *   (basePrice + additionalDocCharges + expeditedFee) × quantity
 */
export function calculatePackageSubtotal({
  basePrice = pricingRules.basePrice,
  additionalDocuments = 0,
  expedited = false,
  quantity = 1,
} = {}) {
  const safeQty = clampQuantity(quantity);
  const safeDocs = clampAdditionalDocuments(additionalDocuments);

  const additionalDocCharges =
    safeDocs * pricingRules.additionalDocumentPrice;
  const expeditedFee = expedited ? pricingRules.expeditedFee : 0;
  const perPackage = basePrice + additionalDocCharges + expeditedFee;

  return {
    basePrice,
    additionalDocCharges,
    expeditedFee,
    perPackage,
    quantity: safeQty,
    subtotal: perPackage * safeQty,
  };
}

/**
 * Calculate the total for a related service line item.
 * Recurring services are never silently treated as one-time.
 */
export function calculateServiceLineTotal(service, quantity = 1) {
  if (!service) return 0;
  const safeQty = Math.max(1, Math.floor(quantity));
  return service.price * safeQty;
}

/**
 * Calculate the full order summary.
 */
export function calculateOrderSummary({
  packageConfig,
  serviceItems = [],
  taxRate = pricingRules.taxRate,
}) {
  const packageCalc = calculatePackageSubtotal(packageConfig);

  const servicesTotal = serviceItems.reduce((sum, item) => {
    return sum + calculateServiceLineTotal(item.service, item.quantity || 1);
  }, 0);

  const subtotal = packageCalc.subtotal + servicesTotal;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return {
    packageCalc,
    servicesTotal,
    subtotal,
    tax,
    taxRate,
    total,
  };
}

export function clampAdditionalDocuments(value) {
  const n = Number.isFinite(value) ? Math.floor(value) : 0;
  return Math.max(0, Math.min(n, pricingRules.maxAdditionalDocuments));
}

export function clampQuantity(value) {
  const n = Number.isFinite(value) ? Math.floor(value) : 1;
  return Math.max(pricingRules.minPackages, Math.min(n, pricingRules.maxPackages));
}

export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

// ============================================================
// Basic test cases (demonstration)
// ============================================================
export const pricingTestCases = [
  {
    name: 'Base package, no extras',
    input: { additionalDocuments: 0, expedited: false, quantity: 1 },
    expected: 349,
  },
  {
    name: 'Base + 2 additional documents',
    input: { additionalDocuments: 2, expedited: false, quantity: 1 },
    expected: 349 + 2 * 15,
  },
  {
    name: 'Base + expedited',
    input: { additionalDocuments: 0, expedited: true, quantity: 1 },
    expected: 349 + 40,
  },
  {
    name: 'Base + 1 doc + expedited × 2 packages',
    input: { additionalDocuments: 1, expedited: true, quantity: 2 },
    expected: (349 + 15 + 40) * 2,
  },
  {
    name: 'Quantity clamped to max',
    input: { additionalDocuments: 0, expedited: false, quantity: 999 },
    expected: 349 * pricingRules.maxPackages,
  },
  {
    name: 'Negative documents clamped to 0',
    input: { additionalDocuments: -5, expedited: false, quantity: 1 },
    expected: 349,
  },
];

export function runPricingTests() {
  const results = pricingTestCases.map((tc) => {
    const result = calculatePackageSubtotal(tc.input);
    return {
      ...tc,
      actual: result.subtotal,
      pass: Math.abs(result.subtotal - tc.expected) < 0.001,
    };
  });
  return results;
}
