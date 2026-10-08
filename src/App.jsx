import { CartPanel } from './components/CartPanel'
import { ProductCard } from './components/ProductCard'
import { useCart } from './context/useCart'
import { products } from './data/products'
import './App.css'

function App() {
  const { cartItems, addToCart } = useCart()
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">N</div>
          <div>
            <p className="brand-name">NexaForge</p>
            <span>Performance builds</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#">Collections</a>
          <a href="#">Deals</a>
          <a href="#">Support</a>
        </nav>

        <button type="button" className="cart-pill">
          Cart <span>{itemCount}</span>
        </button>
      </header>

      <main className="shop-layout">
        <section className="shop-content">
          <div className="hero-banner">
            <div className="hero-copy">
              <p className="eyebrow">New desktop drop</p>
              <h1>Power up your setup.</h1>
              <p className="hero-text">
                Performance gaming desktops with RTX power, blazing SSDs, and premium airflow for demanding play.
              </p>

              <div className="hero-actions">
                <button type="button" className="primary-button">
                  Shop now
                </button>
                <button type="button" className="secondary-button">
                  Explore deals
                </button>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>120+</strong>
                  <span>Configs</span>
                </div>
                <div>
                  <strong>4.9/5</strong>
                  <span>Rating</span>
                </div>
                <div>
                  <strong>48h</strong>
                  <span>Dispatch</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="floating-card card-top">RTX 4070</div>
              <div className="hero-machine-panel">
                <img
                  src="https://startling-beijinho-72802b.netlify.app/images/gaming-pc-4.png"
                  alt="Gaming desktop computer"
                />
              </div>
              <div className="floating-card card-bottom">$1,899</div>
            </div>
          </div>

          <div className="catalog-header">
            <div>
              <p className="eyebrow">Computer collection</p>
              <h2>Featured gaming PCs</h2>
            </div>
            <span className="catalog-pill">{itemCount} items in cart</span>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cartQuantity={cartItems.find((item) => item.id === product.id)?.quantity ?? 0}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <aside className="cart-column">
          <CartPanel />
        </aside>
      </main>
    </div>
  )
}

export default App
