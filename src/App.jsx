import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./utlis/Layout";
import Body from "./components/Body";

import { lazy, Suspense } from "react";
import ShimmerCart from "./utlis/ShimmerCart";

const Cart = lazy(function () {
  return import("./components/Cart");
});

const Checkout = lazy(function () {
  return import("./components/Checkout");
});

const OrderSummary = lazy(function () {
  return import("./components/OrderSummary");
});

const Confirmation = lazy(function () {
  return import("./components/Confirmation");
});
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          children: [
            {
              path: "/",
              element: <Body></Body>,
            },
            {
              path: "cart",
              element: (
                <Suspense fallback={<ShimmerCart></ShimmerCart>}>
                  <Cart />
                </Suspense>
              ),
            },
            {
              path: "checkout",
              element: (
                <Suspense fallback={<div>Loading Cart...</div>}>
                  <Checkout />
                </Suspense>
              ),
            },
            {
              path: "order",

              element: (
                <Suspense fallback={<div>Loading Cart...</div>}>
                  <OrderSummary></OrderSummary>
                </Suspense>
              ),
            },
            {
              path: "confirmation",

              element: (
                <Suspense fallback={<div>Loading Cart...</div>}>
                  <Confirmation></Confirmation>
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
