import { useState, useMemo, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import ProductGallery from './components/ProductGallery';
import ProductInformation from './components/ProductInformation';
import ProductConfigurator from './components/ProductConfigurator';
import OverviewSection from './components/OverviewSection';
import SpecificationsTable from './components/SpecificationsTable';
import BundleComponents from './components/BundleComponents';
import RelatedServices from './components/RelatedServices';
import FAQSection from './components/FAQSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { product, relatedServices } from './data/productData';
import {
  calculatePackageSubtotal,
  calculateOrderSummary,
  formatCurrency,
} from './utils/pricing';
import './App.css';

export default function App() {
  // --- Search state ---
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

  // --- Product configuration state ---
  const [entityType, setEntityType] = useState('llc');
  const [jurisdiction, setJurisdiction] = useState('');
  const [additionalDocuments, setAdditionalDocuments] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [expedited, setExpedited] = useState(false);

  // --- Cart state ---
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const [addedServiceIds, setAddedServiceIds] = useState([]);

  // --- Derived values (useMemo) ---
  const packageConfig = useMemo(
    () => ({
      basePrice: product.basePrice,
      additionalDocuments,
      expedited,
      quantity,
    }),
    [additionalDocuments, expedited, quantity]
  );

  const packageCalc = useMemo(
    () => calculatePackageSubtotal(packageConfig),
    [packageConfig]
  );

  const serviceItems = useMemo(
    () =>
      cartItems
        .filter((item) => item.type === 'service')
        .map((item) => ({
          service: relatedServices.find((s) => s.id === item.serviceId),
          quantity: 1,
        }))
        .filter((si) => si.service),
    [cartItems]
  );

  const orderSummary = useMemo(
    () =>
      calculateOrderSummary({
        packageConfig,
        serviceItems,
      }),
    [packageConfig, serviceItems]
  );

  const cartCount = cartItems.length;

  // --- Search filtering ---
  const searchResults = useMemo(() => {
    if (!activeSearch.trim()) return null;
    const q = activeSearch.toLowerCase();
    const results = [];

    if (
      product.name.toLowerCase().includes(q) ||
      product.sku.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.shortDescription.toLowerCase().includes(q)
    ) {
      results.push({ type: 'product', item: product });
    }

    relatedServices.forEach((s) => {
      if (
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
      ) {
        results.push({ type: 'service', item: s });
      }
    });

    return results;
  }, [activeSearch]);

  // --- Handlers ---
  const handleAddToCart = useCallback(
    (calc) => {
      const detailParts = [
        entityTypeLabel(entityType),
        jurisdictionLabel(jurisdiction),
        `${additionalDocuments} extra doc${additionalDocuments === 1 ? '' : 's'}`,
      ];
      if (expedited) detailParts.push('Expedited');

      const item = {
        id: `pkg-${Date.now()}`,
        type: 'package',
        name: `${product.name} × ${calc.quantity}`,
        detail: detailParts.join(' · '),
        price: calc.subtotal,
        config: {
          entityType,
          jurisdiction,
          additionalDocuments,
          quantity: calc.quantity,
          expedited,
        },
      };

      setCartItems((prev) => [...prev, item]);
      setAddedFeedback(true);
      setTimeout(() => setAddedFeedback(false), 2000);
    },
    [entityType, jurisdiction, additionalDocuments, expedited]
  );

  const handleAddService = useCallback((service) => {
    setCartItems((prev) => [
      ...prev,
      {
        id: `svc-${service.id}-${Date.now()}`,
        type: 'service',
        serviceId: service.id,
        name: service.name,
        detail: service.billingLabel,
        price: service.price,
        recurring: service.recurring,
      },
    ]);
    setAddedServiceIds((prev) => [...prev, service.id]);
  }, []);

  const handleRemoveItem = useCallback((id) => {
    setCartItems((prev) => {
      const removed = prev.find((i) => i.id === id);
      if (removed?.serviceId) {
        setAddedServiceIds((ids) =>
          ids.filter((sid) => sid !== removed.serviceId)
        );
      }
      return prev.filter((i) => i.id !== id);
    });
  }, []);

  const handleSearchSubmit = useCallback((q) => {
    setActiveSearch(q);
  }, []);

  // Close cart on Escape
  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setCartOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cartOpen]);

  return (
    <div className="app">
      <Header
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        onCartOpen={() => setCartOpen(true)}
      />

      <main className="main">
        <div className="container">
          <Breadcrumb items={product.categoryPath} />

          {/* Search results */}
          {activeSearch && searchResults && (
            <div className="search-results card">
              <div className="search-results__header">
                <h2 className="section-heading">
                  Search results for “{activeSearch}”
                </h2>
                <button
                  type="button"
                  className="btn btn--ghost btn--sm"
                  onClick={() => {
                    setActiveSearch('');
                    setSearchQuery('');
                  }}
                >
                  Clear
                </button>
              </div>
              {searchResults.length === 0 ? (
                <p className="search-results__empty">
                  No matching products or services found. Try a different term.
                </p>
              ) : (
                <ul className="search-results__list">
                  {searchResults.map(({ type, item }) => (
                    <li key={`${type}-${item.id}`} className="search-results__item">
                      <span className={`search-results__type search-results__type--${type}`}>
                        {type === 'product' ? 'Product' : 'Service'}
                      </span>
                      <span className="search-results__name">
                        {type === 'product' ? item.name : item.name}
                      </span>
                      <span className="search-results__meta">
                        {type === 'product'
                          ? `${formatCurrency(item.basePrice)} one-time`
                          : item.billingLabel}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Main product section */}
          <div className="product-layout">
            <div className="product-layout__left">
              <ProductGallery product={product} />
            </div>
            <div className="product-layout__center">
              <ProductInformation product={product} />
            </div>
            <div className="product-layout__right">
              <ProductConfigurator
                basePrice={product.basePrice}
                entityType={entityType}
                setEntityType={setEntityType}
                jurisdiction={jurisdiction}
                setJurisdiction={setJurisdiction}
                additionalDocuments={additionalDocuments}
                setAdditionalDocuments={setAdditionalDocuments}
                quantity={quantity}
                setQuantity={setQuantity}
                expedited={expedited}
                setExpedited={setExpedited}
                onAddToCart={handleAddToCart}
                addedFeedback={addedFeedback}
              />
            </div>
          </div>

          <OverviewSection />
          <SpecificationsTable />
          <BundleComponents />
          <RelatedServices onAdd={handleAddService} addedIds={addedServiceIds} />
          <FAQSection />
        </div>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveItem}
        orderSummary={orderSummary}
      />
    </div>
  );
}

function entityTypeLabel(id) {
  return id === 'corporation' ? 'Corporation' : 'LLC';
}

function jurisdictionLabel(id) {
  const map = {
    de: 'Delaware',
    wy: 'Wyoming',
    ca: 'California',
    ny: 'New York',
    tx: 'Texas',
    fl: 'Florida',
  };
  return map[id] || 'No jurisdiction';
}
