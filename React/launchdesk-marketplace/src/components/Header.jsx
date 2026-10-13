import { useState } from 'react';
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';

export default function Header({
  cartCount,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onCartOpen,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ['Services', 'Solutions', 'Resources'];

  return (
    <header className="header">
      <div className="header__inner">
        {/* Brand */}
        <a href="/" className="header__brand" aria-label="LaunchDesk home">
          <span className="header__logo" aria-hidden="true">
            LD
          </span>
          <span className="header__brand-name">LaunchDesk</span>
        </a>

        {/* Search */}
        <form
          className="header__search"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            onSearchSubmit?.(searchQuery);
          }}
        >
          <Search size={16} aria-hidden="true" />
          <input
            type="search"
            placeholder="Search services, packages, or documents…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search services"
          />
        </form>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link} href="#" className="header__nav-link">
              {link}
              <ChevronDown size={14} aria-hidden="true" />
            </a>
          ))}
          <a href="#" className="header__nav-link header__nav-link--help">
            <HelpCircle size={16} aria-hidden="true" />
            Help
          </a>
        </nav>

        {/* Cart */}
        <button
          type="button"
          className="header__cart"
          onClick={onCartOpen}
          aria-label={`Open cart, ${cartCount} item${cartCount === 1 ? '' : 's'}`}
        >
          <ShoppingCart size={20} aria-hidden="true" />
          {cartCount > 0 && (
            <span className="header__cart-count">{cartCount}</span>
          )}
        </button>

        {/* Mobile toggle */}
        <button
          type="button"
          className="header__mobile-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="header__mobile-nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="header__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="header__mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Help &amp; Support
          </a>
        </nav>
      )}
    </header>
  );
}
