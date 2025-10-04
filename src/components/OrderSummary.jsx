import { useSelector } from "react-redux";

function OrderSummary() {
  const items = useSelector((state) => state.cart.items);

  // calculate total
  const total = items.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Order Summary
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {items.map((item, index) => (
              <p key={index}>
                {item.title} – {item.quantity} × ₹{item.price}
              </p>
            ))}
            <hr />
            <p>
              <strong>Total: ₹{total.toFixed(2)}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
