import { createSlice } from '@reduxjs/toolkit';
export type CartState = {
  id: number | string | null;
  count: number | null;
};
let initialState: CartState[] = [];
const cartFromLocalStorage = localStorage.getItem('cart');
if (cartFromLocalStorage) {
  const cart = JSON.parse(cartFromLocalStorage);
  initialState = cart;
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const { id, count } = action.payload;
      const existingProduct = state.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.count += count;
      } else {
        state.push({ id, count });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    updateProductCount(state, action) {
      const { id, count } = action.payload;
      const existingProduct = state.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.count = count;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeProductFromCart(state, action) {
      const productId = action.payload;
      const productIndex = state.findIndex((product) => product.id === productId);

      if (productIndex !== -1) {
        state.splice(productIndex, 1);
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    setCart(state, action) {
      return [...action.payload];
    },
    removeCart(state) {
      localStorage.removeItem('cart');
      localStorage.removeItem('totalKazatskaya');
      localStorage.removeItem('totalWightKazatskaya');
      return [];
    },
  },
});

export const { removeProductFromCart, addProductToCart, setCart, updateProductCount, removeCart } =
  cartSlice.actions;
export default cartSlice.reducer;
