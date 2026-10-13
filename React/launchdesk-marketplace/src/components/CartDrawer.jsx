import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { formatCurrency } from '../utils/pricing';

export default function CartDrawer({
  open,
  onClose,
  items,
  onRemove,
  orderSummary,
}) {
  return (
    <>
      {open && (
        <div
          className="cart-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`cart-drawer ${open ? 'cart-drawer--open' : ''}`}
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">
            <ShoppingBag size={20} aria-hidden="true" />
            Your Cart
          </h2>
          <button
            type="button"
            className="cart-drawer__close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={40} aria-hidden="true" />
              <p>Your cart is empty.</p>
              <p className="cart-empty__hint">
                Configure a package or add a related service to get started.
              </p>
            </div>
          ) : (
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item__info">
                    <span className="cart-item__name">{item.name}</span>
                    {item.detail && (
                      <span className="cart-item__detail">{item.detail}</span>
                    )}
                    {item.recurring && (
                      <span className="cart-item__recurring">Recurring</span>
                    )}
                  </div>
                  <div className="cart-item__right">
                    <span className="cart-item__price">
                      {formatCurrency(item.price)}
                    </span>
                    <button
                      type="button"
                      className="cart-item__remove"
                      onClick={() => onRemove(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>{formatCurrency(orderSummary.subtotal)}</span>
            </div>
            {orderSummary.tax > 0 && (
              <div className="cart-summary-row">
                <span>Estimated tax</span>
                <span>{formatCurrency(orderSummary.tax)}</span>
              </div>
            )}
            <div className="cart-summary-row cart-summary-row--total">
              <span>Estimated total</span>
              <span>{formatCurrency(orderSummary.total)}</span>
            </div>

            <div className="cart-drawer__actions">
              <button
                type="button"
                className="btn btn--outline btn--block"
                onClick={onClose}
              >
                Continue Shopping
              </button>
              <button type="button" className="btn btn--primary btn--block">
                Review Cart <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
            <p className="cart-drawer__note">
              Demo checkout — no real payment is processed.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
