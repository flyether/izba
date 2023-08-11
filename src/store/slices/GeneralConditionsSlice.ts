import { createSlice } from '@reduxjs/toolkit';
import { OrdersGetRequest } from '../storeInterfaces';

type InitialStateProps = {
  categoryValue: undefined | number;
  searchValue: undefined | string;
  total: number;
  totalWight: number;
  order_products: number[];
  ordersfromServer: OrdersGetRequest[];
};
// const initialState: GetCategoriesReq[] = [];
const initialState: InitialStateProps = {
  categoryValue: undefined,
  searchValue: undefined,
  total: 0,
  totalWight: 0,
  order_products: [],
  ordersfromServer: [],
};

const totalFromLocalStorage = localStorage.getItem('totalKazatskaya');
if (totalFromLocalStorage) initialState.total = parseInt(totalFromLocalStorage);
const totalWightFromLocalStorage = localStorage.getItem('totalWightKazatskaya');
if (totalWightFromLocalStorage) initialState.totalWight = parseInt(totalWightFromLocalStorage);
const generalConditionsSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesValue(state, action) {
      state.categoryValue = action.payload;
    },
    setOrdersfromServer(state, action) {
      state.ordersfromServer = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setTotalInHeader(state, action) {
      state.total = action.payload;
    },
    setTotalWight(state, action) {
      state.totalWight = action.payload;
    },
    setOrderProducts(state, action) {
      state.order_products = action.payload;
    },
    removeTotalWight(state) {
      localStorage.removeItem('totalWightKazatskaya');
      state.totalWight = 0;
    },
    removeTotal(state) {
      localStorage.removeItem('totalKazatskaya');
      state.total = 0;
    },
    removeOrderProducts(state, action) {
      localStorage.removeItem('cart');
      state.order_products = [];
    },
  },
});

export const {
  setOrdersfromServer,
  setCategoriesValue,
  removeTotal,
  removeTotalWight,
  removeOrderProducts,
  setOrderProducts,
  setSearchValue,
  setTotalInHeader,
  setTotalWight,
} = generalConditionsSlice.actions;
export default generalConditionsSlice.reducer;
