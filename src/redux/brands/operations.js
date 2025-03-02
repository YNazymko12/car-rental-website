import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBrands = createAsyncThunk(
  'fetchBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/brands'); // Запит до бекенду
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
