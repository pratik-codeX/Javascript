export default function ProductInfo() {
  return (
    <section className="product-info">
      <div className="badges">
        <span className="badge">BUNDLES</span>
        <span className="badge">BUNDLE DEAL</span>
      </div>

      <h1>LLC Starter Bundle</h1>

      <p className="sku">
        SKU: BUNDLE-LLC-STARTER · RETAIL_USD
      </p>

      <p className="description">
        A one-time package featuring one Articles of
        Organization filing and three certified copies.
        Add extra copies at a bundle-specific rate.
      </p>

      <ul className="features">
        <li>1 Articles of Organization filing</li>
        <li>3 certified copies included</li>
        <li>Additional copies at $18 each</li>
      </ul>

      <div className="availability">
        ✓ Configured for California · LLC
        <p>Available services depend on the selected jurisdiction.</p>
      </div>
    </section>
  );
}