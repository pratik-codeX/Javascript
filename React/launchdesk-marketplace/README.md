# LaunchDesk — B2B Service Marketplace (Product Detail Page)

A demonstration B2B service marketplace product detail page for **Business Launch Pro**, built with React + Vite.

> ⚠️ **Demo content only.** All products, prices, services, ratings, and
> processing times are illustrative sample data. This is not a real
> commercial offer, legal service, or government filing service.

---

## Tech Stack

- **React 18** + **Vite 6**
- **JavaScript / JSX**
- **CSS3** (Grid + Flexbox, CSS variables)
- **lucide-react** for icons
- No state management library — `useState` + `useMemo` only

---

## Installation & Running

```bash
npm install
npm run dev        # starts Vite dev server (http://localhost:5173)
npm run build      # production build
npm run preview    # preview production build
npm run test:pricing   # run pricing utility test cases
```

---

## Project Structure

```
src/
  components/
    Header.jsx              Global navy header + mobile nav + cart button
    Breadcrumb.jsx          Breadcrumb navigation
    ProductGallery.jsx      Left column: illustration + indicators + badge
    ProductInformation.jsx  Center column: title, SKU, tabs, checklists
    ProductConfigurator.jsx Right column: configuration + pricing + add to cart
    QuantitySelector.jsx    Reusable +/- quantity control
    PriceBreakdown.jsx      Reusable price breakdown renderer
    OverviewSection.jsx     Wide overview card (benefits, checklist, process)
    SpecificationsTable.jsx Structured specification table
    BundleComponents.jsx    Component cards for the bundle
    RelatedServices.jsx     "Complete Your Business Setup" cards
    FAQSection.jsx          Support/trust info + expandable FAQ
    CartDrawer.jsx          Slide-in demo cart with order summary
    Footer.jsx              Footer with demo disclaimer
  data/
    productData.js          All demonstration product/content data
  utils/
    pricing.js              Pricing formulas + test cases
    pricing.test.mjs        Node test runner for pricing
  pages/                    (reserved for future route-level pages)
  services/                 (reserved for future Spring Boot REST clients)
  App.jsx                   Page composition + state orchestration
  App.css                   Component styles
  index.css                 Design tokens + base/reset styles
  main.jsx                  React entry point
```

Product demonstration data is kept **separate from UI components** in
`src/data/productData.js`. All pricing math lives in `src/utils/pricing.js`.

---

## Functionality

| Feature | Status |
| --- | --- |
| Search products & related services | ✅ Header search, filtered results panel |
| Empty search state | ✅ "No matching products" message |
| Overview / Specifications tabs | ✅ In center column |
| Entity type selection (LLC / Corporation) | ✅ Radio card group |
| Jurisdiction selection | ✅ Select dropdown with validation |
| Additional document quantity (0–20) | ✅ Clamped, live pricing |
| Package quantity (1–10) | ✅ Clamped |
| Expedited processing toggle | ✅ +$40 per package |
| Live price breakdown | ✅ Updates on every config change |
| Add configured package to cart | ✅ With confirmation feedback |
| Add related services to cart | ✅ Recurring services never silently added |
| Cart item count + subtotal | ✅ Header badge + drawer summary |
| Empty cart state | ✅ In drawer |
| Expand/collapse FAQ | ✅ |
| Validation messages | ✅ Missing jurisdiction, invalid input |
| Responsive layout | ✅ Desktop / tablet / mobile |

---

## Pricing Logic

All calculations live in `src/utils/pricing.js`:

```
Package subtotal =
  (base price + additional document charges + expedited fee) × package quantity

Where:
  base price               = $349
  included documents       = 3
  additional document fee  = $15 each
  expedited fee            = $40 per package
  package quantity         = 1–10 (clamped)

Related services are billed separately according to their own billing
periods (month/year) and are never silently treated as one-time purchases.
```

**Test cases** are defined in `pricingTestCases` and can be run with
`npm run test:pricing`. They cover:

1. Base package, no extras → $349
2. Base + 2 additional documents → $379
3. Base + expedited → $389
4. Base + 1 doc + expedited × 2 packages → $808
5. Quantity clamped to max → $349 × 10
6. Negative documents clamped to 0 → $349

The frontend calculation is for immediate display only. A future backend
must independently validate the submitted configuration and calculate the
authoritative quote.

---

## Assumptions

- The product is a **demonstration**; no real filings, legal advice, or
  payments occur.
- Tax is configured at 0% in the demo (`taxRate: 0`). The summary is
  structured to display estimated tax if configured.
- Ratings are explicitly labeled as sample demonstration data.
- Related services are all recurring and clearly labeled; they are added
  explicitly, never automatically.
- "Estimated processing time" is marked illustrative and is not a
  service-level commitment.

---

## Future Backend Integration (Spring Boot)

The frontend is structured so a backend can be added without UI rewrites:

1. **`src/services/`** is reserved for API client modules. Replace the
   current local `calculateOrderSummary` call with a POST to something like
   `POST /api/v1/quotes` that accepts the configuration and returns an
   authoritative quote.
2. **`src/data/productData.js`** is the single source of demo content.
   Swap it for `GET /api/v1/products/:sku` and
   `GET /api/v1/services/related`.
3. **Cart** operations map to `POST /api/v1/cart/items` and
   `DELETE /api/v1/cart/items/:id`.
4. **Pricing** must be validated server-side. The frontend formula in
   `pricing.js` is a display convenience only; the backend must recompute
   and reject mismatched totals.
5. **Validation** rules (jurisdiction required, quantity bounds,
   document bounds) should be mirrored and enforced server-side.

The pricing utility is intentionally pure and dependency-free so its logic
can be ported or cross-checked against the backend implementation.

---

## Console & Accessibility

- No hardcoded DOM manipulation; all state flows through React.
- Semantic HTML (`header`, `nav`, `main`, `section`, `table`, `fieldset`,
  `legend`, `label`).
- Accessible labels on all form controls; `aria-expanded`, `aria-selected`,
  `aria-current`, and `role` attributes used where appropriate.
- `:focus-visible` outlines for keyboard users.
- Escape key closes the cart drawer.
