export default function Header() {
  return (
    <>
      <div className="announcement">
        CheckAlt Service Marketplace · Secure business services
      </div>

      <header className="navbar">
        <div className="brand">
          <span className="brand-icon">C</span>
          <div>
            <h2>CheckAlt</h2>
            <small>SERVICE MARKETPLACE</small>
          </div>
        </div>

        <input
          className="search"
          placeholder="Search formation, certified copies..."
        />

        <button className="cart-button">Cart (0)</button>
      </header>
    </>
  );
}