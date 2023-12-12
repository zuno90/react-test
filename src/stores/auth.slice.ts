import { createSlice } from "@reduxjs/toolkit";
import { clean } from "./common.action";

type TInitialState = { isAuth: boolean; address: string };

const initialState: TInitialState = { isAuth: false, address: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      console.log(action);
      state.isAuth = action.payload.isAuth;
      state.address = action.payload.address;
    },
  },
  extraReducers: (builder) => builder.addCase(clean, () => initialState),
});

export const { loginAction } = authSlice.actions;
export default authSlice.reducer;
