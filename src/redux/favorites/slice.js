import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    cars: [],
  },
  reducers: {
    toggleFavoriteCar(state, action) {
      state.cars.find(car => car.id === action.payload.id)
        ? (state.cars = state.cars.filter(car => car.id !== action.payload.id))
        : state.cars.push(action.payload);
    },
  },
});

export const { toggleFavoriteCar } = favoriteSlice.actions;

const favoriteReducer = favoriteSlice.reducer;
export default favoriteReducer;
