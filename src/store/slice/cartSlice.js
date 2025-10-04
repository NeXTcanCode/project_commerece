import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: savedCart,
  },
  reducers: {
    addItem: function (state, action) {
      const newItem = action.payload;
      const existItem = state.items.find((item) => item.id === newItem.id);

      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    minusItem: function (state, actions) {
      const existItem = state.items.find(function (item, index, arr) {
        return item.id === actions.payload.id;
      });
      if (existItem) {
        if (existItem.quantity > 1) {
          existItem.quantity -= 1;
        } else if (existItem.quantity === 1) {
          state.items = state.items.filter(function (item, index, arr) {
            return item.id !== actions.payload.id;
          });
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    resetItem: function (state, actions) {
      const existItem = state.items.find(function (item, index, arr) {
        return item.id === actions.payload.id;
      });
      if (existItem) {
        state.items = state.items.filter(function (item, index, arr) {
          return item.id !== actions.payload.id;
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addItem, minusItem, resetItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
