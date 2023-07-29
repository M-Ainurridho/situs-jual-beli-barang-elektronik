import { configureStore } from "@reduxjs/toolkit";
import { authReducer, orderReducer } from "./reducers";

export default configureStore({
   reducer: {
      orders: orderReducer.reducer,
      auth: authReducer.reducer,
   },
});
