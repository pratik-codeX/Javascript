export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo" aria-hidden="true">
            LD
          </span>
          <span>LaunchDesk</span>
        </div>
        <p className="footer__disclaimer">
          Demonstration marketplace interface. All products, prices, and
          services are illustrative sample content only and do not represent
          real commercial offers, legal advice, or government filing services.
        </p>
        <div className="footer__links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}
