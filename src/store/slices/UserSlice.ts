import { createSlice } from '@reduxjs/toolkit';
import { User } from '../storeInterfaces';

const initialState: User = {
  id: '',
  email: '',
  phone: '',
  name: '',
  is_active: true,
  is_superuser: false,
  is_verified: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.name = action.payload;
    },
    setUserIdSlice(state, action) {
      state.id = action.payload;
    },
    setUserPhone(state, action) {
      state.phone = action.payload;
    },
    setUser(state, action) {
      return { ...action.payload };
    },

    removeUser(state) {
      return { ...initialState };
      // state = initialState;
    },
  },
});

export const { setUserName, setUserIdSlice, setUser, removeUser, setUserPhone } = userSlice.actions;
export default userSlice.reducer;
