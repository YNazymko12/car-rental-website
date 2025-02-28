import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchAllCars = createAsyncThunk(
  'fetchCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/cars');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
