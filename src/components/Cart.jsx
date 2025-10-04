import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, minusItem, resetItem } from "../store/slice/cartSlice";
import TotalPrice from "./TotalPrice";

function Cart() {
  const items_info = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      {items_info.map((item) => (
        <div className="cart-item" key={item.id}>
          <button
            className="remove-btn"
            onClick={(e) => {
              dispatch(resetItem(item));
            }}
          >
            <i className="bi bi-trash-fill"></i>
          </button>

          <div className="cart-info">
            <h3 className="cart-title">{item.title}</h3>
            <p className="cart-description">{item.description}</p>
            <h5 className="cart-price">₹{item.price}</h5>
          </div>

          <div className="cart-action">
            <img src={item.img} alt={item.title} className="cart-img" />
            <div className="cart-qty">
              <button
                className="qty-btn"
                onClick={(e) => {
                  dispatch(minusItem(item));
                }}
              >
                <i className="bi bi-dash"></i>
              </button>
              <span className="qty-value">{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={(e) => {
                  dispatch(addItem(item));
                }}
              >
                <i className="bi bi-plus"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
      <TotalPrice></TotalPrice>
    </div>
  );
}

export default Cart;
