import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/slice/cartSlice";
import OrderSummary from "./OrderSummary";

import { postApi_data } from "../service/Api";

function Checkout() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const checkout_items = useSelector(function (state) {
    return state.cart.items;
  });
  const checkout_items_map = checkout_items.map(function (item, index, arr) {
    return {
      title: item.title,
      quantity: item.quantity,
      price: item.price,
      amount: item.quantity * item.price,
    };
  });

  const onSubmit = async (data) => {
    console.log("Form Submitted", data);

    const payload = { ...data, cart: checkout_items_map };

    console.log("Payload being sent:", payload);

    await postApi_data(payload);

    dispatch(clearCart());
    navigate("/confirmation");
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="">
            <h2 className="checkout-title">Checkout</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
              <div className="form-group">
                <label>First Name</label>
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  placeholder={
                    errors.fullName
                      ? errors.firstName.message
                      : "Enter your first name"
                  }
                  className={errors.firstName ? "input-error" : ""}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  placeholder={
                    errors.lastName
                      ? errors.lastName.message
                      : "Enter your last name"
                  }
                  className={errors.lastName ? "input-error" : ""}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder={
                    errors.email ? errors.email.message : "Enter your email"
                  }
                  className={errors.email ? "input-error" : ""}
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <textarea
                  {...register("address", {
                    required: "Address is required",
                  })}
                  placeholder={
                    errors.address
                      ? errors.address.message
                      : "Enter your address"
                  }
                  className={errors.address ? "input-error" : ""}
                />
              </div>

              <button type="submit" className="checkout-btn">
                Place Order
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <OrderSummary></OrderSummary>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
