// actions/productsActions.js
import { addToCart, removeFromCart } from '../reducers/productsReducer';

// Local Storage'dan cartItems ni yuklash
export const loadCartItems = () => {
  try {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    return setData({ cartItems });
  } catch (error) {
    console.error('Error loading cart items from localStorage:', error);
    return setData({ cartItems: {} });
  }
};

// Cart element qo'shish
export const addProductToCart = (id, quantity) => (dispatch, getState) => {
  dispatch(addToCart({ id, quantity }));

  const { cartItems } = getState().products;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

// Cart elementni o'chirish
export const removeProductFromCart = (id) => (dispatch, getState) => {
  dispatch(removeFromCart({ id }));

  const { cartItems } = getState().products;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
