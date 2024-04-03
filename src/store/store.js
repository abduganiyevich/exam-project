// store.js

import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './cart-slicer';
import cartReducer from './cart-slicer';

const store = configureStore({
  reducer: {
    cart:cartReducer
  },
});

export default store;
