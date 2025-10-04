import { useSelector } from "react-redux";

function OrderSummary() {
  const items = useSelector((state) => state.cart.items);

  // calculate total
  const total = items.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col-12 order-item" key={item.id}>
            <p>
              <strong>{item.title}</strong> : ₹{item.price} × {item.quantity} ={" "}
              <strong>₹{Number(item.price) * Number(item.quantity)}</strong>
            </p>
          </div>
        ))}

        <div className="col-12 order-total">
          <hr />
          <h5>
            Total = <span className="total-amount">₹{total}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
