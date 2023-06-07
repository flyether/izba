import { createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
  categoryValue: undefined | number;
  searchValue: undefined | string;
};
// const initialState: GetCategoriesReq[] = [];
const initialState: InitialStateProps = {
  categoryValue: undefined,
  searchValue: undefined,
};
const generalConditionsSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesValue(state, action) {
      state.categoryValue = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoriesValue, setSearchValue } = generalConditionsSlice.actions;
export default generalConditionsSlice.reducer;
