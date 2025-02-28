import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
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
        state.items = action.payload.cars;
      })
      .addCase(fetchAllCars.rejected, state => {
        state.isLoading = false;
        state.error = true;
      }),
});

export const { activateLoader } = carsSlice.actions;

const allCarsReducer = carsSlice.reducer;

export default allCarsReducer;
