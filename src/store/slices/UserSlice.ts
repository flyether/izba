import { createSlice } from '@reduxjs/toolkit';
import { User } from '../storeInterfaces';

const initialState: User = {
  id: '',
  email: 'tvt@qk',
  phone: '+2222',
  name: 'Барсучок',
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

export const { setUserName, setUser, removeUser, setUserPhone } = userSlice.actions;
export default userSlice.reducer;
