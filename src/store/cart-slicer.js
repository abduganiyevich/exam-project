import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
    itemNumber: 1,
    grandTotal: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => newItem.id === item.id);
      state.totalQuantity++;

      if (!existingItem) {
        console.log(state.itemNumber);
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          title: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          totalAmount: newItem.price * newItem.quantity,
        });
        state.totalAmount =
          state.totalAmount + newItem.price * newItem.quantity;
      } else {
        state.totalAmount =
          state.totalAmount + existingItem.price * newItem.quantity;
        existingItem.quantity = existingItem.quantity + newItem.quantity;
      }

      state.itemNumber = 0;
    },

    removeItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
        state.totalAmount = state.totalAmount - existingItem.price;
      } else {
        state.totalAmount = state.totalAmount - existingItem.price;
        existingItem.quantity--;
      }
    },

    removeAllItems(state) { 
      state.items = [];
      state.totalAmount = 0;
    },

    increment(state) {
      state.itemNumber++;
    },

    decrement(state) {
      if (state.itemNumber === 0) {
        state.itemNumber = 0;
      } else {
        state.itemNumber--;
      }
    },

    updateGrandTotal(state, action) {
      state.grandTotal = action.payload;
    },
  },
});

export const { addToCart, removeItem, removeAllItems, increment, decrement, updateGrandTotal } = cartSlice.actions;
export default cartSlice.reducer;
