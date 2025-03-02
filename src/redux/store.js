import { configureStore } from '@reduxjs/toolkit';

import allCarsReducer from './cars/slice';
import carReducer from './car/slice';
import brandsReducer from './brands/slice';
import filtersReducer from './filters/slice';
import paginationReducer from './pagination/slice';

export const store = configureStore({
  reducer: {
    allCars: allCarsReducer,
    car: carReducer,
    brands: brandsReducer,
    filters: filtersReducer,
    pagination: paginationReducer,
  },
});
