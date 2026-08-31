
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create a Redux store using configureStore
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;


