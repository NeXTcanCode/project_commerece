import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TotalPrice() {
  const total_amount = useSelector((state) =>
    state.cart.items.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.quantity),
      0
    )
  );

  return (
    <div className="total-price-container">
      {total_amount > 0 ? (
        <div className="total-card">
          <h4>Total Amount</h4>

          <p className="total-value">₹{total_amount}</p>
          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      ) : (
        <div className="empty-cart">
          <i className="bi bi-cart-x empty-cart-icon"></i>
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default TotalPrice;
