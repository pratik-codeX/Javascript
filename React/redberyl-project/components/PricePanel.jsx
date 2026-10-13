export default function PricePanel() {
  return (
    <aside className="price-card">
      <p className="label">SERVICE PRICE</p>
      <h2>$299</h2>
      <p className="muted">One-time bundle price</p>

      <hr />

      <label>Jurisdiction</label>
      <select defaultValue="California">
        <option>California</option>
        <option>Texas</option>
        <option>Florida</option>
      </select>

      <p className="muted jurisdiction-note">
        LLC · Change jurisdiction from the marketplace
      </p>

      <label>County (optional)</label>
      <select defaultValue="">
        <option value="">Not selected</option>
        <option>Los Angeles</option>
        <option>Orange</option>
      </select>

      <div className="price-divider" />

      <label>Included certified copies</label>
      <div className="price-row">
        <span>Included copies</span>
        <strong>3</strong>
      </div>

      <label>Additional certified copies</label>
      <div className="counter">
        <button type="button">−</button>
        <strong>2</strong>
        <button type="button">+</button>
      </div>
      <p className="muted">$18 per additional copy · Up to 10</p>

      <label>Quantity</label>
      <div className="counter">
        <button type="button">−</button>
        <strong>1</strong>
        <button type="button">+</button>
      </div>

      <div className="total-row">
        <span>Bundle base price</span>
        <strong>$299</strong>
      </div>

      <div className="total-row">
        <span>Additional copies</span>
        <strong>$36</strong>
      </div>

      <div className="total-row grand-total">
        <span>Subtotal</span>
        <strong>$335</strong>
      </div>

      <button className="primary-button">
        Add to cart
      </button>

      <p className="demo-note">
        Demonstration pricing · No real payment
      </p>
    </aside>
  );
}