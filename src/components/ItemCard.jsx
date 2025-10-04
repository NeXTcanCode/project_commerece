import { useNavigate } from "react-router-dom";
import { addItem } from "../store/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ItemCard({ item_data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = useSelector((state) =>
    state.cart.items.find((item) => item.id === item_data.id)
  );

  return (
    <div className="py-3">
      <div className="card h-100 shadow-lg border-0 item-card">
        <div className="card-img-wrapper">
          <img
            src={item_data?.img}
            className="card-img-top item-card-img"
            alt={item_data?.title}
          />
          <span className="badge bg-success price-badge">
            ₹{item_data?.price}
          </span>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item_data?.title}</h5>
          <p className="card-text flex-grow-1">{item_data?.description}</p>

          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <i
                key={i}
                className={`bi ${
                  i < item_data?.rating ? "bi-star-fill" : "bi-star"
                }`}
              ></i>
            ))}
          </div>

          {isInCart ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={(e) => {
                navigate("/cart");
              }}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className="btn btn-dark mt-auto"
              onClick={() => dispatch(addItem(item_data))}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
