import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import allCarsReducer from './cars/slice';
import carReducer from './car/slice';
import brandsReducer from './brands/slice';
import favoriteReducer from './favorites/slice';
import filtersReducer from './filters/slice';
import paginationReducer from './pagination/slice';

const favoritePersistConfig = {
  key: 'favoriteTrucks',
  storage,
  whitelist: ['cars'],
};

const persistFavoriteReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    allCars: allCarsReducer,
    car: carReducer,
    brands: brandsReducer,
    favorite: persistFavoriteReducer,
    filters: filtersReducer,
    pagination: paginationReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
