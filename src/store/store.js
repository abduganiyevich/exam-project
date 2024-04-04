import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cart-slicer";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;