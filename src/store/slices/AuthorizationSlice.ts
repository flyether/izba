import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

if (localStorage.getItem('tokenKazatskaya')) {
  initialState.token = localStorage.getItem('tokenKazatskaya') as string;
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
