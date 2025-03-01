import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  totalPages: 1,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    activateLoader(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.meta.arg === 1) {
          state.cars = action.payload.cars;
        } else {
          state.cars = [...state.cars, ...action.payload.cars];
        }

        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { activateLoader } = carsSlice.actions;

const allCarsReducer = carsSlice.reducer;

export default allCarsReducer;
