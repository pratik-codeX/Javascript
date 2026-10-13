import Header from "../components/Header";
import ProductInfo from "../components/ProductInfo";
import PricePanel from "../components/PricePanel";
import ProductDetails from "../components/ProductDetails";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="page-container">
        <nav className="breadcrumb">
          Services / Bundles / LLC Starter Bundle
        </nav>

        <div className="product-layout">
          <section className="product-visual">
            <div className="document-art">
              <div className="document-symbol">▤</div>
              <span>BUSINESS DOCUMENT</span>
            </div>

            <div className="visual-caption">
              Secure business formation services
            </div>
          </section>

          <ProductInfo />

          <PricePanel />
        </div>

        <ProductDetails />

        <footer className="footer">
          CheckAlt · Business services, simplified.
          <span>Demonstration only</span>
        </footer>
      </main>
    </div>
  );
}