import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

if (localStorage.getItem('token')) {
  initialState.token = localStorage.getItem('token') as string;
}

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setUserToken(state, action) {
      state.token = action.payload;
    },

    removeAuthorization(state) {
      state.token = '';
    },
  },
});

export const { setUserToken, removeAuthorization } = authorizationSlice.actions;
export default authorizationSlice.reducer;
