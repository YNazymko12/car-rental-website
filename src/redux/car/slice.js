import { createSlice } from '@reduxjs/toolkit';
import { fetchCar } from './operation';

const initialState = {
  car: null,
  isLoading: false,
  error: null,
};
const detailCarSlice = createSlice({
  name: 'car',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchCar.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car = action.payload;
      })
      .addCase(fetchCar.rejected, state => {
        state.isLoading = false;
        state.error = true;
      }),
});

const carReducer = detailCarSlice.reducer;
export default carReducer;
