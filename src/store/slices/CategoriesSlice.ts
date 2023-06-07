import { createSlice } from '@reduxjs/toolkit';
import { GetCategoriesReq } from '../storeInterfaces';

// const initialState: GetCategoriesReq[] = [];
const initialState: GetCategoriesReq[] = [
  { title: 'колбасы', id: 1 },
  { title: 'жирный жир', id: 2 },
  { title: 'буженина', id: 3 },
  { title: 'все категории', id: 0 },
];
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action) {
      return [...action.payload];
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
