
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  cartItems: {}, 
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    addToCart(state, action) {
      const { id, quantity } = action.payload;
      if (state.cartItems[id]) {
        state.cartItems[id] += quantity;
      } else {
        state.cartItems[id] = quantity;
      }
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      if (state.cartItems[id]) {
        delete state.cartItems[id];
      }
    },
  },
});

export const { setData, addToCart, removeFromCart } = productsSlice.actions;
export default productsSlice.reducer;
