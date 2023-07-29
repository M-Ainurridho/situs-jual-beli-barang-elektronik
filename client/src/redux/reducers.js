import { createSlice } from "@reduxjs/toolkit";

export const orderReducer = createSlice({
   name: "order",
   initialState: {
      value: [],
   },
   reducers: {
      addNewOrder: (state, action) => {
         state.value = [...state.value, action.payload];
      },
   },
});

export const authReducer = createSlice({
   name: "auth",
   initialState: {
      authorization: false,
      user: null,
   },
   reducers: {
      logIn: (state, action) => {
         state.authorization = true;
         state.user = action.payload;
      },

      logOut: (state) => {
         state.authorization = false;
         state.user = null;
      },
   },
});

export const { addNewOrder } = orderReducer.actions;
export const { logIn, logOut } = authReducer.actions;
