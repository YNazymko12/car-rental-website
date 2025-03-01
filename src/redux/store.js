import { configureStore } from '@reduxjs/toolkit';

import allCarsReducer from './cars/slice';
import paginationReducer from './pagination/slice';

export const store = configureStore({
  reducer: {
    allCars: allCarsReducer,
    pagination: paginationReducer,
  },
});
