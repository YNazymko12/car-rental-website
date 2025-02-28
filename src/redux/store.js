import { configureStore } from '@reduxjs/toolkit';

import allCarsReducer from './cars/slice';

export const store = configureStore({
  reducer: {
    allCars: allCarsReducer,
  },
});
