function ShimmerCart() {
  return (
    <div className="cart-container py-5">
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <div className="cart-item shimmer-cart-item" key={i}>
            {/* Trash icon placeholder */}
            <div className="remove-btn shimmer shimmer-icon"></div>

            <div className="cart-info">
              <div className="shimmer shimmer-title"></div>
              <div className="shimmer shimmer-text"></div>
              <div className="shimmer shimmer-price"></div>
            </div>

            <div className="cart-action">
              <div className="shimmer shimmer-img"></div>
              <div className="cart-qty">
                <div className="shimmer shimmer-btn"></div>
                <div className="shimmer shimmer-qty"></div>
                <div className="shimmer shimmer-btn"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ShimmerCart;
