import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: '',
  first_name: '',
  email: '',
  role: '',
  last_name: '',
};

const regSlice = createSlice({
  name: 'regUser',
  initialState,
  reducers: {
    setRegEmail(state, action) {
      state.email = action.payload;
    },
    setRegPassword(state, action) {
      state.password = action.payload;
    },
    setRegRole(state, action) {
      state.role = action.payload;
    },
  },
});

export const { setRegEmail, setRegPassword, setRegRole } = regSlice.actions;
export default regSlice.reducer;
