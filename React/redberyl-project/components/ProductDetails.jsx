export default function ProductDetails() {
  return (
    <section className="details-card">
      <div className="section-heading">
        <div>
          <h2>Service details & specifications</h2>
          <p className="muted">
            Everything included in this bundle.
          </p>
        </div>
      </div>

      <div className="spec-row">
        <span>Bundle type</span>
        <strong>One-time package</strong>
      </div>

      <div className="spec-row">
        <span>Included filing</span>
        <strong>1 Articles of Organization</strong>
      </div>

      <div className="spec-row">
        <span>Included copies</span>
        <strong>3 certified copies</strong>
      </div>

      <div className="spec-row">
        <span>Additional copies</span>
        <strong>$18 each</strong>
      </div>

      <div className="spec-row">
        <span>SKU</span>
        <strong>BUNDLE-LLC-STARTER</strong>
      </div>

      <div className="spec-row">
        <span>Availability</span>
        <strong>California for LLC</strong>
      </div>
    </section>
  );
}