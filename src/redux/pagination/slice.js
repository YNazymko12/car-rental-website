import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    page: 1,
  },
  reducers: {
    nextPage(state) {
      state.page += 1;
    },
  },
});

export const { nextPage } = paginationSlice.actions;

const paginationReducer = paginationSlice.reducer;

export default paginationReducer;
