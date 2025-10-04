import { Link } from "react-router-dom";
function Confirmation() {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <img
              src="/public/images/thank_shop.webp"
              alt=""
              className="thank_image"
            />
          </div>
          <div className="col-12">
            <div className="back_home">
              <Link to="/">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
