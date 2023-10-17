import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  user: null,
  authToken: null,
  isLoggedIn: false,
  colorCode: '#19383A',
  captureFlag: false,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setCaptureFlag: (state, action) => {
      state.captureFlag = action.payload;
    },
    setColorCode: (state, action) => {
      state.colorCode = action.payload;
    },
  },
});

export const {setAuthToken, setIsLoggedIn, setCaptureFlag, setColorCode} =
  userReducer.actions;

export default userReducer.reducer;
