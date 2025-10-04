import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const item_count = useSelector(function (state) {
    return state.cart.items.reduce(function (acc, item, index, arr) {
      return acc + item.quantity;
    }, 0);
  });
  return (
    <nav className="header">
      <div className="header-container">
        <Link className="logo" to="/">
          <i className="bi bi-shop"></i>
          <span>NeXT E-Com</span>
        </Link>

        <div className="header-links">
          <Link to="cart" className="cart-btn">
            <i className="bi bi-cart-check"></i>Cart {item_count}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
