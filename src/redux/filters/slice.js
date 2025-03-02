import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filtersValue: {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilters(state, action) {
      Object.keys(action.payload).forEach(key => {
        state.filtersValue[key] = action.payload[key];
      });
    },
    resetFilters(state) {
      state.filtersValue = { ...initialState.filtersValue };
    },
  },
});

export const { addFilters, resetFilters } = filtersSlice.actions;
const filtersReducer = filtersSlice.reducer;
export default filtersReducer;
