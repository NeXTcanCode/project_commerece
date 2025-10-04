function ShimmerItemCard() {
  return (
    <div className="container py-5">
      <div className="row">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 col-12" key={index}>
              {/* ✅ same classes as real ItemCard */}
              <div className="card h-100 shadow-lg border-0 item-card">
                <div className="card-img-wrapper shimmer shimmer-img"></div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title shimmer shimmer-title"></h5>
                  <p className="card-text flex-grow-1">
                    <span className="shimmer shimmer-line"></span>
                    <span className="shimmer shimmer-line short"></span>
                    <span className="shimmer shimmer-line shorter"></span>
                  </p>
                  <div className="rating shimmer shimmer-rating"></div>
                  <button className="btn btn-dark mt-auto shimmer shimmer-btn"></button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShimmerItemCard;
