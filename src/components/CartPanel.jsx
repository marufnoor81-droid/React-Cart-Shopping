import { useCart } from '../context/useCart'

export function CartPanel() {
    const { cartItems, updateQuantity, removeFromCart, itemCount, subtotal, shipping, total } = useCart()

    return (
        <div className="cart-panel-inner">
            <div className="panel-header">
                <div>
                    <p className="eyebrow">Shopping cart</p>
                    <h2>Your order</h2>
                </div>
                <span className="cart-count">{itemCount}</span>
            </div>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <div className="empty-icon">🛒</div>
                    <h3>Your cart is empty</h3>
                    <p>Add a few gaming setups to build your ultimate rig.</p>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} className="cart-item-image" />

                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p>${item.price.toFixed(2)}</p>

                                    <div className="quantity-row">
                                        <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            −
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button className="remove-button" type="button" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="summary-box">
                        <div className="summary-row">
                            <span>Items</span>
                            <strong>{itemCount}</strong>
                        </div>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <strong>${subtotal.toFixed(2)}</strong>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <strong>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</strong>
                        </div>
                        <div className="summary-row grand-total">
                            <span>Total</span>
                            <strong>${total.toFixed(2)}</strong>
                        </div>
                    </div>

                    <button type="button" className="checkout-button">
                        Proceed to checkout
                    </button>
                </>
            )}
        </div>
    )
}
