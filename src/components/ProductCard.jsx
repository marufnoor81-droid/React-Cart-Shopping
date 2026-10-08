export function ProductCard({ product, cartQuantity, onAddToCart }) {
    return (
        <article className="product-card">
            <div className="product-image-wrap">
                <span className="product-badge">{product.badge}</span>
                <img src={product.image} alt={product.name} className="product-image" />
            </div>

            <div className="product-body">
                <div className="product-meta-row">
                    <span className="category-tag">{product.category}</span>
                    {cartQuantity > 0 && <span className="mini-pill">In cart: {cartQuantity}</span>}
                </div>

                <h3>{product.name}</h3>
                <div className="product-rating">
                    <span className="stars">★★★★★</span>
                    <span>4.8</span>
                </div>

                <div className="product-footer">
                    <div>
                        <p className="price-label">Price</p>
                        <strong className="product-price">${product.price.toFixed(2)}</strong>
                    </div>

                    <button className="add-button" type="button" onClick={() => onAddToCart(product)}>
                        {cartQuantity > 0 ? 'Add more' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </article>
    )
}
